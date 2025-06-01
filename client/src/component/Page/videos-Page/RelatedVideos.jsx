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
    <div className="h-full p-5">
      <h1 className="text-black dark:text-white mb-5 text-xl">
        Related videos
      </h1>
      {[...Array(14)].map((_, i) => (
        <div key={i} className="relative mt-3 flex items-center gap-3 text-xs">
          <img
            src={Sports}
            alt="thumbnail"
            className="w-28 h-full rounded-xl"
          />
          <div className="text-gray-600 font-semibold w-full">
            <div className="flex justify-between items-start">
              <h3 className="text-black dark:text-white font-semibold text-base mb-2">
                Prepare for your first skateboard jump
              </h3>
              <EllipsisVertical
                className="cursor-pointer w-5 text-black dark:text-white"
                onClick={() => toggleOptions(i)}
              />
            </div>
            <p>Jardon Wise</p>
            <p className="flex items-center gap-1">
              <span>125,908 views</span>
              <Dot />
              <span>2 days ago</span>
            </p>
          </div>
          {openModalIndex === i && (
            <div className="absolute top-4 right-5 z-10">
              <AllOptions />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default RelatedVideos;
