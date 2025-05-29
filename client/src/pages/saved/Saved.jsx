import React from "react";
import { Search, ChevronDown, Ellipsis } from "lucide-react";
function Saved() {
  return (
    <div>
      {" "}
      <div className=" filter-details text-gray-600 dark:text-gray-200  bg-white dark:bg-gray-900 bg-opacity-90 p-5 rounded-md ">
        <div className=" filters flex justify-between ">
          {/* */}
          <div>
            <h3 className=" text-3xl font-bold mb-3">Welcome Back</h3>
            <p>Get your latest for the last 7 days</p>
          </div>
          <div className="filter-open flex gap-2 items-center font-semibold">
            <button className=" bg-gray-100 dark:bg-gray-800 flex items-center px-2 py-1 gap-1 rounded-md">
              Filters <ChevronDown className=" w-4 h-4" />
            </button>
            <Ellipsis />
          </div>
        </div>
        <div
          className=" mt-5 text-sm font-semibold
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
              />
              <ChevronDown className=" w-5 h-5" />
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
              />
              <ChevronDown className=" w-5 h-5" />
            </div>
          </div>
          <div>
            <p>Pick Up Time</p>
            <div className="bg-gray-200 dark:bg-gray-800  px-2 py-2 rounded-md flex overflow-hidden">
              <input
                className=" px-3 date_icon_off  bg-transparent outline-none "
                type="date"
                name=""
                id=""
              />
              <ChevronDown className=" w-5 h-5" />
            </div>
          </div>
          <div>
            <p>Pick Up Time</p>
            <div className="bg-gray-200 dark:bg-gray-800  px-2 py-2 rounded-md flex overflow-hidden">
              <input
                className=" px-3 date_icon_off  bg-transparent outline-none "
                type="date"
                name=""
                id=""
              />
              <ChevronDown className=" w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      <div className=" content mt-20 text-gray-600 dark:text-gray-200  bg-white dark:bg-gray-900 bg-opacity-90 p-5 rounded-md ">
        <div>
          <ul className=" flex gap-x-10">
            <li>Article</li>
            <li>Videos</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Saved;
