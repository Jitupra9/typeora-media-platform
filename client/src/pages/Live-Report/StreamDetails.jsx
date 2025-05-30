import React from "react";
import Video from "./VideoDetails";
import ContentSlider from "../../component/Layout/ContentSlider";
function StreamDetails() {
  return (
    <div className="flex gap-1">
      <div className="w-full lg:w-[60%]">
        <Video />
      </div>
      <div className=" hidden lg:block lg:w-[39%]">
        <ContentSlider />
      </div>
    </div>
  );
}

export default StreamDetails;
