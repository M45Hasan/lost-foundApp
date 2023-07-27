import React from "react";
import { useNavigate } from "react-router-dom";
import { activeUser } from "../slice/UserSlice";
import {  useDispatch } from "react-redux";


const Navbar = () => { 
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let logOut=()=>{
    localStorage.removeItem("userInfo");
    dispatch(activeUser(null))
    console.log("Sing Out from:", window.location.pathname.split("/")[1]);
    navigate("/login");

  }
  return (
    <>
      <nav className="bg-white dark:bg-gray-900  w-full top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div>
            <img
              src="lost.png"
              className="h-5 sm:h-8 mr-3 rounded-md opacity-70"
              alt="Flowbite Logo"
            />
          </div>
          <div className="w-[200px] flex gap-x-4">
            <a href="/user" className="text-gray-400 font-sans font-semibold "> User </a>
            <a href="/home" className="text-gray-400 font-sans font-semibold "> Lost Item </a>
          </div>

          <button
            type="button"
            onClick={logOut}
            className="inline-block rounded-full bg-danger px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-800 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]"
          >
            <svg
              className="h-4 w-4 text-red-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />{" "}
              <path d="M7 12h14l-3 -3m0 6l3 -3" />
            </svg>
          </button>
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;
