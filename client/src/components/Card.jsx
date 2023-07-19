import React, { useState } from "react";

export const Card = () => {
  const [slideUrl, setSlideUrl] = useState("");
  const [mesModal, setMesModal] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [xOpen, setxOpen] = useState(true);
  const [claimer, setClaimer] = useState(false);

  //#### slider start #####
  const picClick = (e) => {
    console.log(e.target.src);
    setSlideUrl(e.target.src);
  };

  //######## slide end #######

  //###### Modal function start #####

  //###### Modal function end #####
  //###### Message function start #####
  const handelMessSend = (e) => {
    console.log(e);
  };
  const chatModal = () => {
    setChatOpen(true);
    setxOpen(true);
  };

  const chatModal2 = () => {
    console.log("hello");
    setChatOpen(false);
  };
  //###### Message function end #####
  return (
    <div className=" mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-10 h-[500px] relative md:max-w-[850px] flex ">
      <div className=" w-[50%]  dark:bg-gray-700 h-full">
        <div className="h-[400px] flex items-center justify-center">
          <img
            className="w-[330px] rounded-lg object-cover  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ease-in-out duration-500 hover:scale-110  "
            src={slideUrl}
            alt="Product Image 1"
          />
        </div>

        <div className="w-full h-full border-t-2 rounded-lg ">
          <div className="  mt-[14px] mx-6 h-[180px] w-[95%] flex  flex-wrap">
            <img
              onClick={(e) => picClick(e)}
              key="p"
              className=" rounded-sm h-[70px] w-[70px] mx-[10px] object-cover  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] cursor-pointer ease-in-out duration-500 hover:rotate-6 hover:scale-125 "
              src="https://res.cloudinary.com/dy2v9tyor/image/upload/v1689644859/paku%40mailinator.com.png"
              alt=""
            />

            <img
              onClick={(e) => picClick(e)}
              key="p"
              className=" rounded-sm h-[70px] w-[70px] mx-[10px] object-cover shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] cursor-pointer ease-in-out duration-500 hover:rotate-6 hover:scale-125 "
              src="react.svg"
              alt=""
            />

            <img
              key="p"
              className=" rounded-sm h-[70px] w-[70px] mx-[10px] object-cover shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] cursor-pointer ease-in-out duration-500 hover:rotate-6 hover:scale-125 "
              src="https://res.cloudinary.com/dy2v9tyor/image/upload/v1689644859/paku%40mailinator.com.png"
              alt=""
            />

            <img
              key="p"
              className=" rounded-sm h-[70px] w-[70px] mx-[10px] object-cover shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] cursor-pointer ease-in-out duration-500 hover:rotate-6 hover:scale-125 "
              src="https://res.cloudinary.com/dy2v9tyor/image/upload/v1689644859/paku%40mailinator.com.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="h-full dark:bg-gray-800 w-1/2 p-4">
        <div className="block max-w-sm  p-2 bg-white border h-full border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h3 className=" text-xl font-bold mb-2 tracking-tight text-gray-900 dark:text-white">
            Product Info
          </h3>
          <div className="w-[70%]  border border-gray-600 rounded-md p-[2px] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
            <h1 className=" text-md font-semibold tracking-tight text-gray-900 dark:text-white">
              Category
            </h1>
            <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
              Mobile
            </p>
          </div>
          <div className="w-[70%] border mt-1 border-gray-600 rounded-md p-[2px] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
            <h1 className=" text-md font-semibold tracking-tight text-gray-900 dark:text-white">
              Sub-Category
            </h1>
            <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
              Nokia 3300
            </p>
          </div>
          <div className="w-[70%] border mt-1 border-gray-600 rounded-md p-[2px] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
            <h1 className=" text-md font-semibold tracking-tight text-gray-900 dark:text-white">
              Location
            </h1>
            <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
              Mirpur
            </p>
          </div>
          <div className="w-[70%] border mt-1 border-gray-600 rounded-md p-[2px] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
            <h1 className=" text-md font-semibold tracking-tight text-gray-900 dark:text-white">
              Produc Detail
            </h1>
            <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
              I lost 2007
            </p>
          </div>
          <div className="w-[70%] border-1 mt-2 rounded-md p-[2px] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
            <div className="flex items-center h-[80px] pl-4 space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                  alt="Bonnie image"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Hasan
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  "Hey I found this Product"
                </p>
              </div>
            </div>
          </div>
          <div className="w-[100%] border-1 mt-2 rounded-md p-[2px] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
            <div className="flex items-center h-[80px] pl-4 space-x-4 ">
              <button
                onClick={() => setMesModal(true)}
                type="button"
                className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                Message
              </button>
              <button
                onClick={() => setClaimer(true)}
                type="button"
                className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                Claimer
              </button>
            </div>
          </div>
        </div>
      </div>

      {mesModal && (
        <div className="block w-full absolute p-2 right-0 bg-white border h-full border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h3 className=" text-xl font-bold mb-2 tracking-tight text-gray-900 dark:text-white">
            Message List
          </h3>

          <ul>
            <li>
              <div className="relative ">
                <div
                  onClick={chatModal}
                  className="w-[70%] border-1 mt-2 rounded-md p-[2px] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] "
                >
                  <div className="flex items-center h-[80px] pl-4 space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt="Bonnie image"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Hasan
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        "Hey I found this Product"
                      </p>
                    </div>
                  </div>
                  {chatOpen && (
                    <div className=" relative">
                      <div className="z-10 h-[250px] p-4 relative bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700 overflow-y-scroll">
                        <div className="mb-3 p-2 w-[70%] rounded-md h-[50px] bg-red-200">
                          Messager massage
                        </div>
                        <div className=" mb-3 p-2 w-[70%] rounded-md translate-x-[150px] h-[50px] bg-blue-200">
                          My massage
                        </div>
                        <div className="mb-3 p-2 w-[70%] rounded-md h-[50px] bg-red-200">
                          Messager massage
                        </div>
                        <div className=" mb-3 p-2 w-[70%] rounded-md translate-x-[150px] h-[50px] bg-blue-200">
                          My massage
                        </div>
                        <div className="mb-3 p-2 w-[70%] rounded-md h-[50px] bg-red-200">
                          Messager massage
                        </div>
                        <div className=" mb-3 p-2 w-[70%] rounded-md translate-x-[150px] h-[50px] bg-blue-200">
                          My massage
                        </div>

                        <div className="mb-3 p-2 w-[70%] rounded-md h-[50px] bg-red-200">
                          Messager massage
                        </div>
                        <div className=" mb-3 p-2 w-[70%] rounded-md translate-x-[150px] h-[50px] bg-blue-200">
                          My massage
                        </div>
                        <div className="mb-3 p-2 w-[70%] rounded-md h-[50px] bg-red-200">
                          Messager massage
                        </div>
                        <div className=" mb-3 p-2 w-[70%] rounded-md translate-x-[150px] h-[50px] bg-blue-200">
                          My massage
                        </div>
                        <div className="mb-3 p-2 w-[70%] rounded-md h-[50px] bg-red-200">
                          Messager massage
                        </div>
                        <div className=" mb-3 p-2 w-[70%] rounded-md translate-x-[150px] h-[50px] bg-blue-200">
                          My massage
                        </div>
                      </div>
                      <div className="w-full bg-zinc-600 h-[50px]  rounded-md p-1 mr-1">
                        <input
                          type="text"
                          name="chat"
                          className="w-full h-full rounded-lg pl-2 "
                        />
                      </div>

                      <div className="flex justify-start">
                        <button
                          onClick={"chatModal2"}
                          type=""
                          className="w-[80%]   h-[30px]  border-t-2 text-blue-700 hover:text-white  border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium  text-sm  text-center roundes-sm  dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 "
                        >
                          Send{" "}
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {xOpen && (
                  <button
                    onClick={() => (
                      setChatOpen(false),
                      setxOpen(false),
                      console.log(chatOpen)
                    )}
                    className="w-[105px] absolute right-[260px] z-30 bottom-[1px] h-[30px]  border-t-2 text-red-700 hover:text-white b border-red-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium  text-sm  text-center roundes-sm  dark:border-blue-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 "
                  >
                    X
                  </button>
                )}
              </div>
            </li>
          </ul>

          <div className="w-[100%] border-1 mt-1 rounded-md p-[2px] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
            <div className="flex items-center justify-end h-[40px] pl-1 space-x-4 ">
              <button
                onClick={() => (setMesModal(false), setChatOpen(false),setxOpen(false))}
                type="button"
                className="text-red-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2 mb-2 dark:border-blue-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-500 dark:focus:ring-blue-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {claimer && (
        <div onClick={()=>setClaimer(false)} className="w-[420px] overflow-y-scroll max-w-md h-[450px] p-4 right-0 bg-white absolute border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Claimer
            </h5>
          
          </div>
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="/docs/images/people/profile-picture-1.jpg"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Neil Sims
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="/docs/images/people/profile-picture-1.jpg"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Neil Sims
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                
                </div>
              </li>
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="/docs/images/people/profile-picture-1.jpg"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Neil Sims
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
