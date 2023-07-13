import React, { useState, useEffect } from "react";

export const Regi = () => {
  const [isChecked, setIsChecked] = useState(false);
  let [iCon, setIcon] = useState(false);

  let [data, setData] = useState({
    name: "",
    email: "",
    pass: "",
    photoURL: "",
  });
  let [errorData, setError] = useState({
    name: "",
    email: "",
    check: "",
  });

  // ############################### handle Change function start#####
  let handelChan = (e) => {
    let { name, value } = e.target;
    if (name === "pass") {
      let cap = /(?=.*?[A-Z])/;
      let lower = /(?=.*?[a-z])/;
      let digit = /(?=.*?[0-9])/;
      let spchar = /(?=.*?[#?!@$%^&*-])/;
      let minlen = /.{6,}/;

      if (!cap.test(value)) {
        setError({ ...errorData, pass: "One Capital letter required" });
        return;
      }

      if (!lower.test(value)) {
        setError({ ...errorData, pass: "One Lower letter required" });
        return;
      }

      if (!digit.test(value)) {
        setError({ ...errorData, pass: "At least one digit required" });
        return;
      }

      if (!spchar.test(value)) {
        setError({
          ...errorData,
          pass: "At least one Special Char required",
        });
        return;
      }

      if (!minlen.test(value)) {
        setError({ ...errorData, pass: "At least 6 unit required" });
        return;
      }
    }
    setData({ ...data, [name]: value });
    setError({ ...errorData, [name]: "" });
    console.log(data);
    console.log(errorData);
  };
  // ############################### handle Change function end #####

  let handleChk = (e) => {
    setIsChecked(e.target.checked);
  };
  // ############################### handle Submit function start #####

  let handelSubmit = (e) => {
    e.preventDefault();
    let regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (data.email === "") {
      setError({ ...errorData, email: " Email require" });
    } else if (!regex.test(data.email)) {
      setError({ ...data, email: "Enter valid email" });
    } else if (data.name === "") {
      setError({ ...errorData, name: "Enter Your Name" });
    } else if (data.pass === "") {
      setError({ ...errorData, pass: "Enter valid Password" });
    } else {
      if (isChecked) {
        console.log(data.name, data.email, data.pass,);
        data.name = "";
        data.email = "";
        data.pass = "";
        isChecked(false);
      } else {
        setError({ ...errorData, check: "Click here" });
      }
    }
    
  };
  // ############################### handle Submit function end #####
  // ############################### handle Icon start #####
  let handelIcon = () => {
    setIcon(!iCon);
  };
  // ############################### handle Icon end #####

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="  ">
              <img
                className="w-full h-[75px] rounded-xl opacity-50 "
                src="lost.png"
                alt="logo"
              />
              <p className="text-md font-bold   text-gray-900  dark:text-white text-center">
                "LostNoMore: Your Trusted Companion for Lost items"
              </p>
            </div>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handelSubmit}
                action="#"
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {errorData.name ? (
                      <p className="text-red-500">{errorData.name}</p>
                    ) : (
                      <p>Your Name</p>
                    )}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={data.name}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Myoo kaku"
                    required="*"
                    onChange={handelChan}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {errorData.email ? (
                      <p className="text-red-500">{errorData.email}</p>
                    ) : (
                      " Your email"
                    )}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    onChange={handelChan}
                  />
                </div>
                <div className="relative">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {errorData.pass ? (
                      <p className="text-red-500">{errorData.pass}</p>
                    ) : (
                      " Your password"
                    )}
                  </label>
                  <input
                    type={!iCon ? "password" : "text"}
                    name="pass"
                    id="password"
                    value={data.pass}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={handelChan}
                  />

                  {iCon ? (
                    <img
                      onClick={handelIcon}
                      className="w-4 h-4  absolute top-[40px] right-[20px] cursor-pointer"
                      src="eyeOp.svg"
                      alt="logo"
                    />
                  ) : (
                    <img
                      onClick={handelIcon}
                      className="w-4 h-4  absolute top-[40px] right-[20px] cursor-pointer"
                      src="eyeCl.svg"
                      alt="logo"
                    />
                  )}
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      name="check"
                      value={isChecked}
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                      onChange={handleChk}
                    />
                  </div>
                  <div className="ml-3 text-sm flex">
                    {errorData.check ? (
                      <p className="text-red-500">{errorData.check}</p>
                    ) : (
                      <p className="font-light text-gray-500 dark:text-gray-300">
                        I accept the
                      </p>
                    )}
                    <label>
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500 mx-1"
                        href="/term"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Regi;
