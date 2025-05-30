import React, { useRef, useState } from "react";
import {
  Search,
  ChevronDown,
  Ellipsis,
  Info,
  Heart,
  Clock,
  Activity,
} from "lucide-react";
import Sports from "../../assets/images/sports.jpg";
function Saved() {
  const dateInputRef = useRef(null);
  const dateInputReftwo = useRef(null);
  const timeInputRef = useRef(null);
  const timeInputReftwo = useRef(null);
  const [isfilterActive, setisfilterActive] = useState(false);

  const handleIconClick = (dateref) => {
    if (dateref.current) {
      dateref.current.showPicker();
    }
  };
  return (
    <div>
      <div className=" filter-details text-gray-600 dark:text-gray-200  bg-white dark:bg-gray-900 bg-opacity-90 p-5 rounded-md ">
        <div className=" filters flex flex-col sm:flex-row gap-4 justify-between ">
          <div>
            <h3 className=" text-3xl font-bold mb-3">Welcome Back</h3>
            <p>Get your latest for the last 7 days</p>
          </div>
          <div
            onClick={() => {
              setisfilterActive(!isfilterActive);
            }}
            className="filter-open flex gap-2 items-center font-semibold"
          >
            <button className=" bg-gray-100 dark:bg-gray-800 flex items-center px-2 py-1 gap-1 rounded-md">
              Filters <ChevronDown className=" w-4 h-4" />
            </button>
            <Ellipsis />
          </div>
        </div>
        {isfilterActive && (
          <div
            className="  mt-5 text-sm font-semibold
         filter-options  w-full flex flex-wrap  gap-4 justify-between  *:flex *:flex-col *:gap-y-2 "
          >
            <div>
              <h3>Search Here</h3>
              <div className="search bg-gray-200 dark:bg-gray-800  px-2 py-2 rounded-md flex overflow-hidden">
                <Search />
                <input
                  className=" px-3  bg-transparent outline-none"
                  type="text"
                  name=""
                  id=""
                  placeholder="Search by Topic,Tittle or catogories..."
                />
              </div>
            </div>
            <div>
              <p>Pick Up Date</p>
              <div className="bg-gray-200 dark:bg-gray-800  px-2 py-2 rounded-md flex overflow-hidden">
                <input
                  className=" px-3 date_icon_off  bg-transparent outline-none "
                  type="date"
                  name=""
                  id=""
                  ref={dateInputReftwo}
                />
                <ChevronDown
                  className=" w-5 h-5 cursor-pointer"
                  onClick={() => {
                    handleIconClick(dateInputReftwo);
                  }}
                />
              </div>
            </div>
            <div>
              <p>Drop Up Date</p>
              <div className="bg-gray-200 dark:bg-gray-800  px-2 py-2 rounded-md flex overflow-hidden">
                <input
                  className=" px-3 date_icon_off  bg-transparent outline-none "
                  type="date"
                  name=""
                  id=""
                  ref={dateInputRef}
                />
                <ChevronDown
                  className=" w-5 h-5 cursor-pointer"
                  onClick={() => {
                    handleIconClick(dateInputRef);
                  }}
                />
              </div>
            </div>
            <div>
              <p>Pick Up Time</p>
              <div className="bg-gray-200 dark:bg-gray-800  px-2 py-2 rounded-md flex overflow-hidden">
                <input
                  className=" px-3 date_icon_off  bg-transparent outline-none "
                  type="time"
                  name=""
                  id="time"
                  ref={timeInputRef}
                />
                <ChevronDown
                  className=" w-5 h-5 cursor-pointer"
                  onClick={() => {
                    handleIconClick(timeInputRef);
                  }}
                />
              </div>
            </div>
            <div>
              <p>Pick Up Time</p>
              <div className="bg-gray-200 dark:bg-gray-800  px-2 py-2 rounded-md flex overflow-hidden">
                <input
                  className=" px-3 date_icon_off  bg-transparent outline-none "
                  type="time"
                  name=""
                  id="time"
                  ref={timeInputReftwo}
                />
                <ChevronDown
                  className=" w-5 h-5 cursor-pointer"
                  onClick={() => {
                    handleIconClick(timeInputReftwo);
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className=" content mt-10 sm:mt-20 text-gray-600 dark:text-gray-200">
        <div className=" my-5  ">
          <ul className=" flex gap-x-5  *:px-6 *:py-2  *:rounded-md ">
            <li className="bg-white  dark:bg-gray-800">Article</li>
            <li>Videos</li>
          </ul>
        </div>
        <div className=" flex flex-col gap-y-4 w-full sm:flex-row justify-between *:bg-white *:dark:bg-gray-900 *:bg-opacity-90 *:p-5 *:rounded-md ">
          <div className="content w-full lg:w-[62%]">
            <div className="header flex justify-between items-center">
              <h1 className="">
                <span className=" text-2xl font-semibold">Available</span>{" "}
                <span className=" text-xl">Article</span>
              </h1>
              <p>View All</p>
            </div>
            <div className="Articles">
              <div className="mt-5 flex flex-wrap overflow-hidden justify-between gap-y-5">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="relative w-full sm:w-[48%] h-60 bg-gray-300 dark:bg-gray-800 rounded-xl overflow-hidden"
                  >
                    <div className=" absolute top-3 right-3  border rounded-full p-3 bg-gray-400 dark:bg-gray-700">
                      <Heart className=" w-4 h-4 " />
                    </div>
                    <div className="absolute -bottom-[86%] lg:-bottom-[92%] left-0 right-0 w-full h-full rounded-full bg-white dark:bg-gray-900 "></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" hidden lg:block resent-activity w-full sm:w-[34%] ">
            <div className="header flex justify-between items-center">
              <p className=" text-2xl font-semibold">Recent Activity</p>
              <Info />
            </div>
            <div className=" mt-5 bg-gray-200 dark:bg-gray-950 justify-between  items-center flex text-sm rounded-xl p-2">
              <div className=" w-[30%] h-full bg-gray-800 rounded-xl overflow-hidden">
                <img src={Sports} alt="" srcset="" className=" w-full h-full" />
              </div>
              <div className="textarea w-[65%] font-semibold">
                <h3>Article in News's</h3>
                <div className=" mt-1 *:flex *:gap-1 *:items-center text-gray-600">
                  <div>
                    <Clock className=" w-3 h-3" />
                    <p>2 Day ago saved</p>
                  </div>
                  <div>
                    <Activity className=" w-3 h-3" />
                    <p>247K views This Month</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" details bg-gray-300 dark:bg-gray-950 mt-5 p-3 rounded-xl">
              <div className="header mt-2 mb-5 flex justify-between">
                <h1 className=" font-bold">Article Info</h1>
                <Info />
              </div>
              <div>
                <div className="profile flex gap-5 items-center rounded-full">
                  <img
                    src={Sports}
                    alt=""
                    srcset=""
                    className=" w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">Jitu Pradhan</h3>
                    <p className=" text-xs text-gray-500">
                      Jitupra73@gmail.com
                    </p>
                  </div>
                </div>
                <div className="relative flex items-center justify-around  p-4">
                  <div className="absolute border-t border-gray-600 dark:border-gray-200 top-1/2 z-0 left-0 w-full h-2 "></div>

                  <div className="bg-white rounded-full w-4 h-4 z-10"></div>
                  <div className="bg-white rounded-full w-4 h-4 z-10"></div>
                  <div className="bg-white rounded-full w-4 h-4 z-10"></div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 px-4 py-2 rounded-md">
                    <div className="flex flex-col items-start">
                      <span className="font-semibold">Category</span>
                      <span className="text-sm text-gray-500">News</span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-semibold">Topic</span>
                      <span className="text-sm text-gray-500">
                        AI Development
                      </span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-semibold">Type</span>
                      <span className="text-sm text-gray-500">Article</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 border-t border-gray-600 dark:border-gray-200 px-4 py-2">
                    <div className="flex flex-col items-start">
                      <span className="font-semibold">Impression</span>
                      <span className="text-sm text-gray-500">1.2k</span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-semibold">Clicked</span>
                      <span className="text-sm text-gray-500">340</span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-semibold">Views</span>
                      <span className="text-sm text-gray-500">980</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 border-t border-gray-600 dark:border-gray-200 px-4 py-2">
                    <div className="flex flex-col items-start">
                      <span className="font-semibold">Author</span>
                      <span className="text-sm text-gray-500">John Doe</span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-semibold">Published</span>
                      <span className="text-sm text-gray-500">
                        May 25, 2025
                      </span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-semibold">Status</span>
                      <span className="text-sm text-green-500">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Saved;
