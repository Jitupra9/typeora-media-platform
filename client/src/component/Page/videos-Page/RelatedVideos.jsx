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
      <h1 className=" hidden lg:block text-black dark:text-white mb-5 text-xl">
        Related videos
      </h1>
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
