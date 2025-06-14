import React from "react";
import Video from "./VideoDetails";
import Comment from "../../component/Page/videos-Page/comment";
import RelatedVideos from "../../component/Page/videos-Page/RelatedVideos";
function StreamDetails() {
  return (
    <div className="  sm:px-5 flex gap-y-5 lg:gap-y-0 flex-col lg:flex-row justify-between w-full">
      <div className="w-full lg:h-[85vh]  lg:overflow-y-auto   hidel_slide_roler lg:w-[65%]">
        <Video />
      </div>
      <div className=" flex flex-col gap-y-5 lg:gap-y-0 lg:block lg:w-[30%] lg:h-[85vh]  overflow-y-auto   hidel_slide_roler ">
        <Comment />
        <RelatedVideos />
      </div>
    </div>
  );
}

export default StreamDetails;
