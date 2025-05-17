import React, { memo } from "react";
import { House, Eye, ChevronRight } from "lucide-react";
import pictures from "../assets/images/404.png";
import { Link } from "react-router-dom";
function Pagenotfound() {
  return (
    <div
      className={`flex flex-col justify-center dark:bg-gray-900 dark:text-white bg-gray-50 items-center w-full h-[100vh] `}
    >
      <div className="lg:border-x-2 border-gray-200 lg:px-24 rounded-full ">
        <div className="lg:border-x-2 border-gray-200 lg:px-24 rounded-full">
          <div className="lg:border-x-2 border-gray-200 px-24 rounded-full">
            <div className=" text-center  flex flex-col justify-center items-center  ">
              <p className="text-gray-500 font-normal text-lg">
                You look a little lost...
              </p>
              <h3 className=" font-semibold text-4xl sm:text-5xl md:text-6xl my-5">
                Ooops ! Page not found
              </h3>
              <p className="text-gray-500 font-normal -mb-16 px-3">
                Bool a 30-minute call to discuss your plans needs,and
                goals.we'll get <br className=" hidden lg:block" /> on the same
                we'll align and create an action plan.
              </p>
              <div className="relative  w-96 h-96 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(96,165,250,0.3)_0%,_transparent_70%)] z-0" />
                <img
                  src={pictures}
                  alt="404 illustration showing page not found"
                  className="relative z-10 w-64 h-auto object-contain"
                />
              </div>

              <div
                className={`w-72 -mt-16 text-left dark:bg-gray-800 dark:text-gray-200 bg-white shadow-md border my-2  flex justify-between px-5 py-3 rounded-lg items-center text-base font-normal gap-4 `}
              >
                <div className=" flex gap-3">
                  <div className=" bg-gray-100 p-3 rounded-full ">
                    <Eye className=" w-4 h-4" />
                  </div>
                  <div>
                    <h3 className=" text-xs font-bold">Projects</h3>
                    <p className=" text-xs text-gray-400 font-semibold my-1 truncate">
                      Where we talk the talk
                    </p>
                  </div>
                </div>
                <ChevronRight className=" w-4 cursor-pointer" />
              </div>
              <div
                className={`w-72  text-left bg-white dark:bg-gray-800 dark:text-gray-200 shadow-md border my-2  flex justify-between px-5 py-3 rounded-lg items-center text-base font-normal gap-4 `}
              >
                <div className=" flex gap-3">
                  <div className=" bg-gray-100 p-3 rounded-full ">
                    <House className=" w-4 h-4" />
                  </div>
                  <div>
                    <h3 className=" text-xs font-bold">Home Page</h3>
                    <p className=" text-xs text-gray-400 font-semibold my-1 truncate">
                      There's no place like home...
                    </p>
                  </div>
                </div>
                <Link to="/">
                  <ChevronRight className=" w-4 cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Pagenotfound);
