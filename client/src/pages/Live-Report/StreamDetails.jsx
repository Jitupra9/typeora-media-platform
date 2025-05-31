import React from "react";
import Video from "./VideoDetails";
import Comment from "../../component/Page/videos-Page/comment";
import RelatedVideos from "../../component/Page/videos-Page/RelatedVideos";
function StreamDetails() {
  return (
    <div className="  sm:px-5 flex justify-between w-full">
      <div className="w-full h-[85vh]  overflow-y-auto   hidel_slide_roler lg:w-[65%]">
        <Video />
      </div>
      <div className=" hidden h-[85vh]  overflow-y-auto   hidel_slide_roler lg:block lg:w-[30%]">
        <Comment />
        <RelatedVideos />
      </div>
    </div>
  );
}

export default StreamDetails;
