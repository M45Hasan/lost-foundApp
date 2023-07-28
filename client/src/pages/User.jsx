import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

import { activePic } from "../slice/picSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Card from "../components/Card";

const User = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let reduxReturnData = useSelector((state) => state);

  let [data, setData] = useState({
    email: reduxReturnData.userStoreData.userInfo.email,
    category: "",
    subcat: "",
    detail: "",
    location: "",
    itImage: "",
    postlist_id: "",
    name: "",
    userImg: reduxReturnData.userPic.proPic,
  });
  let [errorData, setError] = useState({
    category: "",
    subcat: "",
    detail: "",
    location: "",
    itImage: "",
  });
  const [selectedImage, setSelectedImage] = useState({});
  const [selectedImageUser, setSelectedImageUser] = useState(null);
  let [userModal, setUserModal] = useState(false);
  let [itemModal, setItemModal] = useState(false);
  const [url, setUrl] = useState([]);
  const [u, setU] = useState([]);
  const [userImg, setUserImg] = useState("");
  const [myPostCard, setMyPostCard] = useState(false);
  const [trans, setTrans] = useState("");
  const [myClaim, setMyClaim] = useState([]);

  const [postList, setPostList] = useState([]);

  //##### Page Navigate Start ####

  useEffect(() => {
    if (reduxReturnData.userStoreData.userInfo == null) {
      navigate("/login");
    }
  }, []);

  //##### Page Navigate End ####

  //####### user Image upload start###
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleImageChangeItem = async (event) => {
    const files = event.target.files;
    const base64s = [];
    if (files.length >= 1) {
      for (var i = 0; i < files.length; i++) {
        var base = await convertBase64(files[i]);
        base64s.push(base);
      }
    }
    setSelectedImage(base64s);
  };

  const handleImageChangeUser = async (event) => {
    const files = event.target.files;
    if (files.length === 1) {
      const base64 = await convertBase64(files[0]);
      setSelectedImageUser(base64);
    } else {
      setError({ ...errorData, itImage: "Failed" });
    }
  };
  //####### user Image upload end###
  //###################### Loader  refresh start#####
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    // Perform operation and then set loading to false

    await axios
      .post("http://localhost:5000/lostFound/getItImg", {
        email: reduxReturnData.userStoreData.userInfo.email,
      })
      .then((res) => {
        setUrl(res.data[0].itImage);
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  //###################### Loader  end#####
  //####### get inputData start ###########
  let getInput = (e) => {
    let { name, value } = e.target;

    setData({ ...data, [name]: value });
    setError({ ...errorData, [name]: "" });
    console.log(data);
  };
  //####### get inputData end ###########

  //####### submit start ###########
  let subMit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/lostFound/itemupload", {
        email: data.email,
        category: data.category,
        subcat: data.subcat,
        detail: data.detail,
        location: data.location,
        itImage: data.itImage,
        postlist_id: data.postlist_id,
        userImg: data.userImg,
        name: data.name,
      })
      .then((res) => {
        console.log(res);
        setData("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //####### submit end ###########
  //####### Modal submit start ###########
  let userModalHide = async () => {
    console.log(selectedImageUser);
    await axios
      .post("http://localhost:5000/lostFound/profile", {
        email: reduxReturnData.userStoreData.userInfo.email,
        userImg: selectedImageUser,
      })
      .then((res) => {
        localStorage.setItem("proPic", JSON.stringify(res.data.secure_url));
        dispatch(activePic({ pic: res.data.secure_url })).catch((err) => {
          console.log(err);
        });
        setUserImg(userImg);
        console.log(res);
        setUserModal(false);
      })
      .catch((err) => {
        console.log(err.data);
        setUserModal(false);
      });
  };
  let userModalShow = () => {
    setUserModal(true);
  };
  //#######################item img send #######
  let itemModalShow = () => {
    setItemModal(true);
  };
  let itemModalHide = async () => {
    await axios
      .post("http://localhost:5000/lostFound/itemImg", {
        email: reduxReturnData.userStoreData.userInfo.email,
        itImage: selectedImage,
      })
      .then((res) => {
        setU(res);
        setItemModal(false);
      })
      .catch((err) => {
        console.log(err);
        setItemModal(false);
      });
  };

  //#######Modal submit end ###########

  //####### fetch data useffect start ###########

  //####### fetch data useffect start ###########
  useEffect(() => {
    const getData = async () => {
      try {
        let how = await axios.post("http://localhost:5000/lostFound/userImg", {
          email: reduxReturnData.userStoreData.userInfo.email,
        });
        setUserImg(how.data[0].userImg);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const getPostList = async () => {
      try {
        let how = await axios.post(
          "http://localhost:5000/lostFound/getpostlist",
          {
            email: reduxReturnData.userStoreData.userInfo.email,
          }
        );
        if (how.data.length > 0) {
          setPostList(how.data);
        } else {
          setPostList("");
        }
      } catch (err) {
        console.log(err);
      }
    };
    getPostList();
  }, []);

  const logOn = (data) => {
    setTrans(data);
    setMyPostCard(true);
  };

  //### my Claim
  useEffect(() => {
    const myCalimList = async () => {
      const how = await axios.post(
        "http://localhost:5000/lostFound/claimpost",
        {
          email: reduxReturnData.userStoreData.userInfo.email,
        }
      );

      setMyClaim(how.data);
    };
    myCalimList();
  }, []);
  console.log("myClaim",myClaim);
  //#################### fetch data useffect end ####
  return (
    <div className="w-full  dark:bg-gray-600 ">
      <Navbar />

      <div className=" flex justify-between  ">
        <div className="w-[30%] h-full  max-w-sm bg-white border  border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 relative ">
          {userModal && (
            <div className="items-center w-full mr-auto ml-auto  max-w-7xl md:px-12 lg:px-24 absolute z-20 top-[50px] shadow-2xl  border-gray-700 border rounded-full">
              <div className="grid grid-cols-1 relative">
                <div className="mt-4 mr-auto mb-4 ml-auto rounded-sm bg-green-400  text-sm max-w-[181px]">
                  <input
                    placeholder="User image "
                    name="userImg"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChangeUser}
                  />
                </div>
                <div
                  onClick={userModalHide}
                  className="text-center text-sm font-sans border border-gray-600 rounded-full bg-slate-800 shadow-2xl hover:bg-orange-950 cursor-pointer  font-semibold text-cyan-300 absolute bottom-[-10px] left-[40%]"
                >
                  Upload
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-col items-center pt-10 relative ">
            <div className="">
              <img
                onClick={userModalShow}
                // className="w-24 h-24 mb-3 rounded-full  shadow-2xl cursor-pointer "
                className="flex-shrink-0 object-cover border-[2px] border-gray-600 object-center btn- flex w-16 h-16 mr-auto mb-3 ml-auto rounded-full   shadow-xl"
                src={userImg ? userImg : "react.svg"}
                alt="Bonnie image"
              />
            </div>

            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {reduxReturnData.userStoreData.userInfo.displayName}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {reduxReturnData.userStoreData.userInfo.email}
            </span>
          </div>
          <div className="mx-4 mt-4 border border-gray-500 rounded-sm shadow-2xl relative ">
            <h5 className="mb-4 text-md font-medium text-gray-900 dark:text-cyan-500">
              Lost Item Upload
            </h5>
            <form onSubmit={subMit} action="#">
              <label className="block  text-sm font-medium text-gray-900 dark:text-gray-400">
                Category
              </label>
              <select
                onChange={getInput}
                name="category"
                className=" text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a category</option>
                <option value="Mobile">Mobile</option>
                <option value="Electronic">Electronic</option>
                <option value="Document">Document</option>
                <option value="Human">Human</option>
              </select>
              <label className="block mt-[2px] text-sm font-medium text-gray-900 dark:text-gray-400">
                Sub-category
              </label>
              <input
                onChange={getInput}
                name="subcat"
                type="text"
                className=" text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <label className="block mt-[2px] text-sm font-medium text-gray-900 dark:text-gray-400">
                Product Details
              </label>
              <input
                onChange={getInput}
                name="detail"
                type="text"
                className=" text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <label className="block mt-[2px] text-sm font-medium text-gray-900 dark:text-gray-400">
                Location
              </label>
              <input
                onChange={getInput}
                name="location"
                type="text"
                className=" text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <div className=" mt-2 h-[240px]"></div>

              <div>
                <button
                  type="submit"
                  className="w-full  text-white bg-cyan-500 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-primary-800"
                >
                  Submit
                </button>
              </div>
            </form>
            <button
              className={`bg-cyan-500 rounded-full hover:bg-purple-700 text-white absolute top-[290px] right-0 py-2 px-2  ${
                loading ? "cursor-not-allowed opacity-25" : ""
              }`}
              onClick={handleClick}
              disabled={loading}
            >
              <img className="w-2 h-2 " src="ref.svg" />
            </button>
            <div className="mt-2 h-[240px top-[280px] absolute ">
              <label className="block mt-[2px] text-sm font-medium text-gray-900 dark:text-gray-400">
                Upload Image
              </label>
              <svg
                onClick={itemModalShow}
                className="h-6 w-6 text-gray-400 mx-[25px] top-[70px] left-2 cursor-pointer "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />{" "}
                <circle cx="12" cy="13" r="4" />
              </svg>

              <div className="flex  flex-wrap  mt-2 mx-2 h-[180px] w-[95%]">
                {url.map((pic, i) => (
                  <img
                    key={i}
                    className=" h-[85px] w-[155px] mx-[5px] "
                    src={pic}
                    alt={i}
                  />
                ))}
              </div>

              {itemModal && (
                <div className="items-center w-full mr-auto ml-auto  max-w-7xl md:px-12 lg:px-18 absolute  top-[50px] z-20 shadow-2xl   rounded-full">
                  <div className="grid grid-cols-1 relative">
                    <div className="mt-4 mr-auto mb-4 ml-auto rounded-sm bg-green-400  text-sm max-w-[181px]">
                      <input
                        multiple
                        placeholder="User image "
                        name="itImage"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChangeItem}
                      />
                    </div>
                    <div
                      onClick={itemModalHide}
                      className="text-center text-sm font-sans border border-gray-600 rounded-full bg-slate-800 shadow-2xl hover:bg-orange-950 cursor-pointer  font-semibold text-cyan-300 absolute bottom-[-10px] left-[40%]"
                    >
                      Upload
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full flex  ">
          <div className="w-[70%] relative p-4">
            <div className="w-[700px] mt-10  border border-gray-600 rounded-md p-[6px] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
              <h5 className=" text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                My Post Item
              </h5>
              <ul className="flex gap-x-4 flex-wrap">
                {postList &&
                  postList.map((data, i) => (
                    <li
                      key={i}
                      // onClick={(item) => (setMyPostCard(true),console.log(item))}
                      onClick={() => logOn(data)}
                      className="rounded-md hover:scale-110 ease-in duration-100 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  "
                    >
                      {" "}
                      <div className=" items-center flex h-[80px] pl-1 space-x-2">
                        <div key={u} className="flex-shrink-0">
                          <img
                            className="w-12 h-12 rounded-sm"
                            src={data.itImage[0]}
                            alt={""}
                          />
                        </div>

                        <div className="flex-1 min-w-[140px]">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {data.category}
                          </p>
                          <p className="text-sm text-cyan-500 truncate dark:text-cyan-400">
                            {data.subcat}
                          </p>
                          <p className="text-[10px] text-cyan-500 truncate dark:text-cyan-400">
                            {data.location}
                          </p>
                        </div>
                      </div>{" "}
                    </li>
                  ))}
              </ul>
            </div>

            <div className="w-[700px] mt-14 border border-gray-600 rounded-md p-[6px] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
              <h5 className=" text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                Delivered to owner
              </h5>
              <ul className="flex gap-x-4 flex-wrap">
                <li className="rounded-md hover:scale-110 ease-in duration-100 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  ">
                  {" "}
                  <div className=" items-center flex h-[80px] pl-1 space-x-2">
                    <div className="flex-shrink-0">
                      <img
                        className="w-12 h-12 rounded-sm"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt="Bonnie image"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Mobile
                      </p>
                      <p className="text-sm text-cyan-500 truncate dark:text-cyan-400">
                        "Nokia"
                      </p>
                      <p className="text-[14px] text-cyan-500 truncate dark:text-cyan-400">
                        Owner: "Salauddin"
                      </p>
                      <p className="text-[14px] text-cyan-500 truncate dark:text-cyan-400">
                        Comment: "Good "
                      </p>
                    </div>
                  </div>{" "}
                </li>
              </ul>
            </div>

            {myPostCard && (
              <div className="translate-y-[-337px]  translate-x-[-12px]">
                <Card dat={trans} />

                <div
                  onClick={() => setMyPostCard(false)}
                  className="w-[14px]  rounded-full absolute top-1 right-[1px] flex justify-center items-center  h-[98%]  text-red-700 hover:text-white  hover:bg-red-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium  text-sm  text-center roundes-sm   dark:text-red-500 dark:hover:text-white dark:hover:bg-red-500 dark:focus:ring-blue-800 "
                >
                  X
                </div>
              </div>
            )}
          </div>
          <div className="w-[28%] p-4">
            <div className="w-[220px] mt-10  border border-gray-600 rounded-md p-[6px] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
              <h5 className=" text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                My Claim
              </h5>
              <ul className="flex gap-x-4 flex-wrap">
                {myClaim &&
                  myClaim.map((data, i) => (
                    <li
                      key={i}
                      // onClick={(item) => (setMyPostCard(true),console.log(item))}
                      onClick={() => logOn(data)}
                      className="rounded-md hover:scale-110 ease-in duration-100 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  "
                    >
                      {" "}
                      <div className=" items-center flex h-[80px] pl-1 space-x-2">
                        <div key={u} className="flex-shrink-0">
                          <img
                            className="w-12 h-12 rounded-sm"
                            src={data.itImage[0]}
                            alt={""}
                          />
                        </div>

                        <div className="flex-1 min-w-[140px]">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {data.category}
                          </p>
                          <p className="text-sm text-cyan-500 truncate dark:text-cyan-400">
                            {data.subcat}
                          </p>
                          <p className="text-[10px] text-cyan-500 truncate dark:text-cyan-400">
                            {data.location}
                          </p>
                        </div>
                      </div>{" "}
                    </li>
                  ))}
              </ul>
            </div>

            <div className="w-[220px] mt-4 border border-gray-600 rounded-md p-[6px] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
              <h5 className=" text-md mb-2 text-center font-bold tracking-tight text-gray-900 dark:text-white">
                আমি খুঁজে পেয়েছি
              </h5>
              <ul className="flex  flex-wrap">
                <li className="rounded-md w-[95%] hover:scale-110 ease-in duration-300 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  ">
                  {" "}
                  <div className=" items-start justify-center mt-2 flex  pl-1 space-x-2">
                    <div className="flex-shrink-0">
                      <img
                        className="w-12 h-12 rounded-sm"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt="Bonnie image"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Mobile
                      </p>
                      <p className="text-sm text-cyan-500 truncate dark:text-cyan-400">
                        "Nokia"
                      </p>
                    </div>
                  </div>{" "}
                  <div className="pl-[2px]">
                    <p className="text-[14px] text-cyan-500 truncate dark:text-cyan-400">
                      Finder: "Salauddin"
                    </p>
                    <p className="text-[14px] text-cyan-500 truncate dark:text-cyan-400">
                      Comment: "Good "
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
