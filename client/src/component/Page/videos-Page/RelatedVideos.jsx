import React, { useState } from "react";
import Sports from "../../../assets/images/sports.jpg";
import AllOptions from "../../models/AllOptions";
import { Dot, EllipsisVertical } from "lucide-react";

function RelatedVideos() {
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const toggleOptions = (index) => {
    setOpenModalIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="h-full lg:p-5">
      <div className=" relative  my-2">
        <ul className="hidel_slide_roler *:cursor-pointer flex overflow-x-scroll gap-2 shadow-inner-right   *:bg-opacity-80 *:px-3 *:py-[6px] *:rounded-lg text-nowrap text-black dark:text-white text-sm font-semibold ">
          <li className=" bg-black dark:bg-white text-white dark:text-black">
            All
          </li>
          <li className="bg-gray-400 dark:bg-gray-800">More from this</li>
          <li className="bg-gray-400 dark:bg-gray-800">
            From Fidaa Music Odia
          </li>
          <li className="bg-gray-400 dark:bg-gray-800">Related</li>
          <li className="bg-gray-400 dark:bg-gray-800">Foryou</li>
          <li className="bg-gray-400 dark:bg-gray-800">Live</li>
          <li className="bg-gray-400 dark:bg-gray-800">Recently uploaded</li>
        </ul>
        <div className=" absolute right-0 top-0 h-full w-20 bg-gradient-to-r from-transparent to-gray-100 dark:to-black rounded-none"></div>
      </div>

      <div className=" flex flex-wrap lg:block justify-between">
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="relative mt-3 flex flex-col lg:flex-row items-center gap-3 text-xs w-full sm:w-[49%] lg:w-full"
          >
            <img
              src={Sports}
              alt="thumbnail"
              className=" w-full  lg:w-28 h-full rounded-xl"
            />
            <div className="text-gray-600 font-semibold w-full">
              <div className="flex justify-between items-start">
                <h3 className=" lg:hidden text-black dark:text-white font-semibold text-base mb-2">
                  India opens new rail line connecting kashmir to the rest of
                  india
                </h3>
                <p className=" hidden lg:block text-black dark:text-white font-semibold text-base mb-2">
                  {"India opens new rail line connecting kashmir to the rest of india"
                    .split(" ")
                    .slice(0, 8)
                    .join(" ")}
                  <span>...</span>
                </p>

                <EllipsisVertical
                  className="cursor-pointer w-10 h-10 text-black dark:text-white"
                  onClick={() => toggleOptions(i)}
                />
              </div>
              <div className=" flex lg:flex-col  items-center gap-0.5 lg:items-start">
                <p>Jardon Wise</p>
                <Dot className=" lg:hidden" />
                <p className="flex items-center gap-1">
                  <span>125,908 views</span>
                  <Dot />
                  <span>2 days ago</span>
                </p>
              </div>
            </div>
            {openModalIndex === i && (
              <div className="absolute top-4 right-5 z-10">
                <AllOptions />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedVideos;
