import React from "react";
import Navbar from "../components/Navbar";

const User = () => {
  return (
    <div className="w-full ">
      <Navbar xox={false} />

      <div className=" flex justify-between  ">
        <div className="w-[30%] h-full  max-w-sm bg-white border  border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pt-10 relative ">
            <div className="   ">
              <img
                className="w-24 h-24 mb-3 rounded-full border-[2px] border-gray-600 shadow-2xl cursor-pointer "
                src="react.svg"
                alt="Bonnie image"
              />
            </div>
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Bonnie Green
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              name@gmail.com
            </span>
            <svg
              className="h-6 w-6 text-red-500 absolute top-[70px] left-2 cursor-pointer "
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
          </div>
          <div className="mx-4 mt-4 border border-gray-500 rounded-sm shadow-2xl ">
            <h5 className="mb-4 text-md font-medium text-gray-900 dark:text-cyan-500">
              Lost Item Upload
            </h5>
            <form>
              <label className="block  text-sm font-medium text-gray-900 dark:text-gray-400">
                Category
              </label>
              <select className=" text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose a category</option>
                <option value="mb">Mobile</option>
                <option value="ele">Electronic</option>
                <option value="doc">Document</option>
                <option value="hum">Human</option>
              </select>
              <label className="block mt-[2px] text-sm font-medium text-gray-900 dark:text-gray-400">
                Product Details
              </label>
              <input
                name="proD"
                type="text"
                className=" text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <label className="block mt-[2px] text-sm font-medium text-gray-900 dark:text-gray-400">
                Location
              </label>
              <input
                name="loc"
                type="text"
                className=" text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <div className=" mt-2 h-[240px]">
                <label className="block mt-[2px] text-sm font-medium text-gray-900 dark:text-gray-400">
                  Upload Image
                </label>
                <svg
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
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full  text-white bg-cyan-500 hover:bg-cyan-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-primary-800"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-[70%]  bg-red-400 "></div>
      </div>
    </div>
  );
};

export default User;
