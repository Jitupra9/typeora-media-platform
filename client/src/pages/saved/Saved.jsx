import React, { useRef } from "react";
import { Search, ChevronDown, Ellipsis, Info } from "lucide-react";
function Saved() {
  const dateInputRef = useRef(null);
  const dateInputReftwo = useRef(null);
  const timeInputRef = useRef(null);
  const timeInputReftwo = useRef(null);

  const handleIconClick = (dateref) => {
    if (dateref.current) {
      dateref.current.showPicker();
    }
  };
  return (
    <div>
      {" "}
      <div className=" filter-details text-gray-600 dark:text-gray-200  bg-white dark:bg-gray-900 bg-opacity-90 p-5 rounded-md ">
        <div className=" filters flex justify-between ">
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
      </div>
      <div className=" content mt-20 text-gray-600 dark:text-gray-200">
        <div className=" my-5  ">
          <ul className=" flex gap-x-5  *:px-6 *:py-2  *:rounded-md ">
            <li className="bg-white  dark:bg-gray-800">Article</li>
            <li>Videos</li>
          </ul>
        </div>
        <div className=" flex flex-col w-full sm:flex-row justify-between *:bg-white *:dark:bg-gray-900 *:bg-opacity-90 *:p-5 *:rounded-md ">
          <div className="content w-[62%]">
            <div className="header flex justify-between">
              <h1>Available Cars</h1>
              <p>View All</p>
            </div>
          </div>
          <div className="resent-activity w-[34%] ">
            <div className="header flex justify-between">
              <p>Recent Activity</p>
              <Info />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Saved;
