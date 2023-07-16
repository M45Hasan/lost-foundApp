import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { activeUser } from "../slice/UserSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const User = () => {
  let [hide, setHide] = useState(true);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let reduxReturnData = useSelector((state) => state);

  let [data, setData] = useState({
    cat: "",
    sub: "",
    proD: "",
    loc: "",
    itImage: "",
  });
  let [errorData, setError] = useState({
    cat: "",
    sub: "",
    proD: "",
    loc: "",
    itImage: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageUser, setSelectedImageUser] = useState(null);
  let [userModal, setUserModal] = useState(false);
  let [itemModal, setItemModal] = useState(false);
  const [url, setUrl] = useState("");
  const [userImg ,setUserImg]=useState("")
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

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
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

  //####### get inputData start ###########
  let getInput = (e) => {
    let { name, value } = e.target;

    setData({ ...data, [name]: value });
    setError({ ...errorData, [name]: "" });
    console.log(data);
  };
  //####### get inputData end ###########

  //####### submit start ###########
  let subMit = (e) => {
    e.preventDefault();

    console.log(data);
  };
//cloudinary://854245338842351:afKo71cMZJoH21JDmEvDB53eAIQ@dy2v9tyor
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

  let itemModalShow = () => {
    setItemModal(true);
  };
  let itemModalHide = () => {
    setData({ ...data, itImage: selectedImage });
    setItemModal(false);
  };

  //#######Modal submit end ########### 

  //####### fetch data useffect start ###########
  useEffect(()=>{

  },[])
  //####### fetch data useffect start ###########

  return (
    <div className="w-full ">
      <Navbar xox={false} />

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
                src= "react.svg"
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
            <form onClick={subMit} action="#">
              <label className="block  text-sm font-medium text-gray-900 dark:text-gray-400">
                Category
              </label>
              <select
                onChange={getInput}
                name="cat"
                className=" text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a category</option>
                <option value="mb">Mobile</option>
                <option value="ele">Electronic</option>
                <option value="doc">Document</option>
                <option value="hum">Human</option>
              </select>
              <label className="block mt-[2px] text-sm font-medium text-gray-900 dark:text-gray-400">
                Sub-category
              </label>
              <input
                onChange={getInput}
                name="sub"
                type="text"
                className=" text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <label className="block mt-[2px] text-sm font-medium text-gray-900 dark:text-gray-400">
                Product Details
              </label>
              <input
                onChange={getInput}
                name="proD"
                type="text"
                className=" text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <label className="block mt-[2px] text-sm font-medium text-gray-900 dark:text-gray-400">
                Location
              </label>
              <input
                onChange={getInput}
                name="loc"
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
              <img className="mt-2 mx-2 h-[180px] w-[95%]" src="pas.png" />
              {itemModal && (
                <div className="items-center w-full mr-auto ml-auto  max-w-7xl md:px-12 lg:px-18 absolute  top-[50px] z-20 shadow-2xl   rounded-full">
                  <div className="grid grid-cols-1 relative">
                    <div className="mt-4 mr-auto mb-4 ml-auto rounded-sm bg-green-400  text-sm max-w-[181px]">
                      <input
                        placeholder="User image "
                        name="itImage"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
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
        <div className="w-[70%]  bg-red-400 "></div>
      </div>
    </div>
  );
};

export default User;
