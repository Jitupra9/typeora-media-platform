import React from "react";
import Sports from "../../../assets/images/sports.jpg";
import { Dot, EllipsisVertical } from "lucide-react";
function RelatedVideos() {
  return (
    <div className=" h-full p-5 ">
      <h1 className="text-black dark:text-white mb-5 text-xl">
        Related videos
      </h1>
      {[...Array(14)].map((_, i) => (
        <div className=" mt-3 flex items-center gap-3 text-xs">
          <img src={Sports} alt="" className=" w-28 h-full rounded-xl" />
          <div className=" text-gray-600 font-semibold">
            <div className=" flex">
              <h3 className="text-black dark:text-white font-semibold text-base mb-2">
                Prepare for your first skateboard jump
              </h3>
              <EllipsisVertical className=" cursor-pointer w-7 text-black dark:text-white" />
            </div>
            <p>Jardon Wise</p>
            <p className=" flex items-center gap-1">
              <span>125,908 views</span>
              <Dot />
              <span>2days ago</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RelatedVideos;
