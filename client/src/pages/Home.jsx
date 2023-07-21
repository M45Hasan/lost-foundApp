import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Card from "../components/Card";
import { activeUser } from "../slice/UserSlice";
import { activePic } from "../slice/picSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let reduxReturnData = useSelector((state) => state);
  let navigate = useNavigate();
  const [myPostCard, setMyPostCard] = useState(false);
  const [postList, setPostList] = useState([]);
  const [eleList, setEleList] = useState([]);
  const [trans, setTrans] = useState("");
  const [humList, setHumList] = useState([]);
  const [mobList, setMobList] = useState([]);
  const [docList, setDocList] = useState([]);

  //##### Page Navigate Start ####

  useEffect(() => {
    if (reduxReturnData.userStoreData.userInfo == null) {
      navigate("/login");
    }
  }, []);

  //##### Page Navigate End ####
  //############# fetch data start #####

  useEffect(() => {
    const getPostList = async () => {
      try {
        let how = await axios.post(
          "http://localhost:5000/lostFound/getallpostlist"
        );

        if (how.data.length > 0) {
          setPostList(how.data);
        }
        let m = [];
        let n = [];
        let a = [];
        let b = [];
        how.data.forEach((i) => {
          if (i.category == "Electronic") {
            m.push(i);
          }
          if (i.category == "Mobile" || i.category == "mb") {
            n.push(i);
          }
          if (i.category == "Human") {
            a.push(i);
          }
          if (i.category == "Document") {
            b.push(i);
          }
        });
        setEleList(m);
        setMobList(n);
        setHumList(a);
        setDocList(b);
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
  return (
    <div className="w-full max-h-full relative dark:bg-gray-600 ">
      <Navbar xox={true} />

      <div className="w-[70%]  absolute left-[350px] top-[80px] p-4">
        {/* All lost item start */}
        <div className="w-[80p%] mt-10 h-[300px] overflow-y-auto border border-gray-600 rounded-md p-[6px] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
          <h5 className=" text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Lost Items
          </h5>
          <div className="flex gap-x-4 flex-wrap">
            {postList &&
              postList.map((data, i) => (
                <div
                  key={i}
                  // onClick={(item) => (setMyPostCard(true),console.log(item))}
                  onClick={() => logOn(data)}
                  className="rounded-md hover:scale-110 ease-in duration-100 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  "
                >
                  {" "}
                  <div className=" items-center flex h-[80px] pl-1 space-x-2">
                    <div key={i} className="flex-shrink-0">
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
                </div>
              ))}
          </div>
        </div>
        {/* All lost item end */}

        {/* Electronic Item start */}
        {eleList.length != 0 && (
          <div className="w-[80p%] mt-10 h-[200px] overflow-y-auto border border-gray-600 rounded-md p-[6px] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
            <h5 className=" text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Electronic Items
            </h5>
            <div className="flex gap-x-4 flex-wrap">
              {eleList &&
                eleList.map((data, i) => (
                  <div
                    key={i}
                    // onClick={(item) => (setMyPostCard(true),console.log(item))}
                    onClick={() => logOn(data)}
                    className="rounded-md hover:scale-110 ease-in duration-100 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  "
                  >
                    {" "}
                    <div className=" items-center flex h-[80px] pl-1 space-x-2">
                      <div key={i} className="flex-shrink-0">
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
                  </div>
                ))}
            </div>
          </div>
        )}
        {/* Electronic Item end */}

        {/* Mobile Item start */}
        {mobList.length != 0 && (
          <div className="w-[80p%] mt-10 h-[200px] overflow-y-auto border border-gray-600 rounded-md p-[6px] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
            <h5 className=" text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Mobile
            </h5>
            <div className="flex gap-x-4 flex-wrap">
              {mobList &&
                mobList.map((data, i) => (
                  <div
                    key={i}
                    // onClick={(item) => (setMyPostCard(true),console.log(item))}
                    onClick={() => logOn(data)}
                    className="rounded-md hover:scale-110 ease-in duration-100 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  "
                  >
                    {" "}
                    <div className=" items-center flex h-[80px] pl-1 space-x-2">
                      <div key={i} className="flex-shrink-0">
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
                  </div>
                ))}
            </div>
          </div>
        )}
        {/* Mobile Item end */}
        {/* Human Item start */}
        {humList.length != 0 && (
          <div className="w-[80p%] mt-10 h-[200px] overflow-y-auto border border-gray-600 rounded-md p-[6px] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
            <h5 className=" text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Human
            </h5>
            <div className="flex gap-x-4 flex-wrap">
              {humList &&
                humList.map((data, i) => (
                  <div
                    key={i}
                    // onClick={(item) => (setMyPostCard(true),console.log(item))}
                    onClick={() => logOn(data)}
                    className="rounded-md hover:scale-110 ease-in duration-100 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  "
                  >
                    {" "}
                    <div className=" items-center flex h-[80px] pl-1 space-x-2">
                      <div key={i} className="flex-shrink-0">
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
                  </div>
                ))}
            </div>
          </div>
        )}
        {/* Human Item end */}

        {/* document Item start */}
        {docList.length != 0 && (
          <div className="w-[80p%] mt-10 h-[200px] overflow-y-auto border border-gray-600 rounded-md p-[6px] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
            <h5 className=" text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              Document
            </h5>
            <div className="flex gap-x-4 flex-wrap">
              {docList &&
                docList.map((data, i) => (
                  <div
                    key={i}
                    // onClick={(item) => (setMyPostCard(true),console.log(item))}
                    onClick={() => logOn(data)}
                    className="rounded-md hover:scale-110 ease-in duration-100 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  "
                  >
                    {" "}
                    <div className=" items-center flex h-[80px] pl-1 space-x-2">
                      <div key={i} className="flex-shrink-0">
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
                  </div>
                ))}
            </div>
          </div>
        )}
        {/* document Item end */}

      
      </div>
      {myPostCard && (
          <div className=" fixed top-[50px] right-[200px] w-[800px] ">
            <Card dat={trans} />

            <button
              onClick={() => setMyPostCard(false)}
              className="w-[20px]  rounded-full absolute top-[45px] right-[5px] z-30  h-[20px]  text-red-700 hover:text-white  hover:bg-red-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium  text-sm  text-center roundes-sm   dark:text-red-500 dark:hover:text-white dark:hover:bg-red-500 dark:focus:ring-blue-800 "
            >
              X
            </button>
          </div>
        )}
    </div>
  );
};

export default Home;
