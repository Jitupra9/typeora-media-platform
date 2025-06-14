import React, { memo, useState } from "react";
import img from "../../assets/images/news_four.jpg";
import goggle from "../../assets/images/gogle.png";
import Login from "./Login";
import Signup from "./Signup";
function Auth() {
  const [isactive, setisactive] = useState("login");

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center dark:text-white"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className=" absolute w-full h-full bg-black bg-opacity-35 inset-0"></div>
      <div className="bg-white w-full h-full sm:h-max  sm:w-1/2 lg:w-[25%]  p-5 sm:p-10 dark:bg-gray-900  z-10  rounded-lg  text-xl ">
        <div className="animations flex items-center justify-center gap-10 *:rounded-full *:bg-orange-300 *:w-24 *:h-24 *:flex *:items-center">
          <div>
            <div className="w-full rounded-full bg-white  flex items-center justify-center eye_container overflow-hidden">
              <div className="relative w-12 h-[42px] bg-black rounded-full flex move_slide">
                <div className="absolute ml-3 mt-3 bg-white w-3 h-3 rounded-full bg-opacity-45 flex p-2">
                  <div className="w-1 h-1 bg-white rounded-full opacity-85"></div>
                </div>
                <div className="absolute bg-white ml-5 mt-4 w-2 h-2 rounded-full bg-opacity-80"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full rounded-full bg-white flex items-center justify-center eye_container overflow-hidden">
              <div className="relative w-12 h-[42px] bg-black rounded-full flex move_slide">
                <div className="absolute ml-3 mt-3 bg-white w-3 h-3 rounded-full bg-opacity-45 flex p-2">
                  <div className="w-1 h-1 bg-white rounded-full opacity-85"></div>
                </div>
                <div className="absolute bg-white ml-5 mt-4 w-2 h-2 rounded-full bg-opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="froms text-center mt-10">
          <h3 className=" font-bold text-xl ">WelcomeBack</h3>
          <h3 className=" text-gray-500 text-sm ">
            WelcomeBack, Please enter the details
          </h3>
          <div className=" rounded-lg flex w-full p-[3px] bg-gray-200 dark:bg-gray-500 gap-1 text-sm font-semibold mt-5">
            <div
              onClick={() => {
                setisactive("login");
              }}
              className={`${
                isactive === "login"
                  ? `bg-white dark:bg-gray-700`
                  : "bg-transparent"
              } px-3 py-2 rounded-md w-[49%] cursor-pointer`}
            >
              Sign in
            </div>
            <div
              onClick={() => {
                setisactive("signup");
              }}
              className={`${
                isactive === "signup"
                  ? `bg-white dark:bg-gray-700`
                  : "bg-transparent"
              } px-3 py-2 rounded-md w-[49%] cursor-pointer`}
            >
              {" "}
              signup
            </div>
          </div>
          {isactive === "login" ? (
            <Login />
          ) : (
            <Signup setisactive={setisactive} />
          )}
        </div>
        <div className=" mt-5 w-full flex items-center gap-4">
          <div className=" w-full border-b-2"></div>
          <p className=" text-xs">Or</p>
          <div className=" w-full border-b-2"></div>
        </div>
        <div className=" border py-1 mt-5 shadow-md cursor-pointer rounded-full text-center text-sm">
          <p className=" font-semibold flex items-center justify-center gap-4">
            {" "}
            <img src={goggle} className=" w-8 h-8" alt="" /> Continue With
            Google
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(Auth);
