import React, { memo, useEffect, useState } from "react";
import Shared from "../../component/models/Share";
import Reportfedbacks from "../../component/models/report-fedbacks";
import Videoplayer from "../../component/utils/videoplayer";
// import sports from "../../assets/images/sports.jpg";
import {
  ThumbsUp,
  ThumbsDown,
  Share2,
  EllipsisVertical,
  Eye,
  Heart,
  Bell,
  Forward,
} from "lucide-react";
import img from "../../assets/images/people.jpg";

function LiveStream() {
  const [isSaharedOpen, setisSaharedOpen] = useState(false);
  const [isReoprtModel, setisReoprtModel] = useState(false);
  useEffect(() => {
    console.log("live stream lender");
  });

  return (
    <div className=" h-full text-black  dark:text-white ">
      <div className=" w-full streaming  rounded-xl  ">
        <Videoplayer />
        <div className=" mt-5">
          <div className=" relative mt-10 flex flex-col sm:flex-row justify-between items-center">
            <div className=" flex items-center gap-5 w-full justify-between sm:justify-start my-5 sm:my-0">
              <div className=" flex items-center gap-3">
                <img src={img} alt="" className=" rounded-full w-12 h-12" />
                <div>
                  <h3 className=" font-semibold text-sm xl:text-lg  ">
                    Fidaa Music Odia
                  </h3>
                  <p className=" text-gray-500">2.43k follwers</p>
                </div>
              </div>
              <div className=" bg-white shadow-lg cursor-pointer text-black px-4 py-1 rounded-full font-bold ">
                Follow
              </div>
            </div>
            <div className=" text-xs *:cursor-pointer *:bg-gray-300 dark:*:bg-gray-800 dark:text-white text-black w-full  overflow-hidden overflow-x-scroll md:overflow-auto hidel_slide_roler flex  sm:justify-end gap-3 font-semibold  lg:text-base">
              <div className="rounded-full px-3 py-[6px] gap-4 items-center  flex ">
                <div className=" border-r flex items-center gap-4 px-3 pl-3">
                  <ThumbsUp className=" w-4 h-4" /> 8.7k
                </div>
                <ThumbsDown className=" w-4 h-4" />
              </div>
              <div
                onClick={() => {
                  setisSaharedOpen(!isSaharedOpen);
                }}
                className="  rounded-full gap-2 py-2 md:py-1 text-center flex justify-center items-center px-3"
              >
                <Share2 className=" w-4 h-4" />
                Share
              </div>
              <div className="sm:hidden rounded-full gap-2 text-center flex justify-center items-center px-3">
                <Share2 className=" w-4 h-4" />
                Download
              </div>
              <div className="  sm:hidden rounded-full gap-2 text-center flex justify-center items-center px-3">
                <Share2 className=" w-4 h-4" />
                Save
              </div>
              <div className="  sm:hidden rounded-full gap-2 text-center flex justify-center items-center px-3">
                <Share2 className=" w-4 h-4" />
                Report
              </div>
              <div
                onClick={() => {
                  setisReoprtModel(!isReoprtModel);
                }}
                className="hidden rounded-full sm:flex items-center justify-center w-9 h-9 "
              >
                <EllipsisVertical className=" w-4 h-4" />
              </div>
              {isSaharedOpen && (
                <div className=" absolute rounded-xl overflow-hidden top-12 right-11">
                  <Shared />
                </div>
              )}

              {isReoprtModel && (
                <div className="  absolute rounded-xl overflow-hidden top-12 right-0">
                  <Reportfedbacks />
                </div>
              )}
            </div>
          </div>
          <div className=" hidden lg:flex flex-col sm:flex-row gap-5 justify-between mt-10 text-gray-600 dark:text-gray-400">
            <div className=" w-full sm:w-[65%] title-discription ">
              <p className="Video-title  text-3xl  font-thin dark:text-white text-black">
                Basic how to ride your skateboard comfortly and Basic Equipment
                to play skateboard safely
              </p>
              <div className="  text-sm tracking-wide leading-relaxed ">
                <p className=" mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam accusantium qui similique corporis natus perspiciatis
                  sunt molestiae delectus nemo excepturi modi, ex fugiat veniam
                  harum, illo possimus ut doloribus itaque odio. Officia,
                  voluptates sequi odio nulla perspiciatis nemo sint molestiae.
                </p>
                <p className=" mt-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                  natus hic dolore aperiam perspiciatis sint molestias,
                  inventore omnis rerum deleniti tenetur iste, ipsam adipisci!
                  Ipsa corrupti sed, inventore esse commodi cumque tempore odit
                  laudantium repudiandae quis sit unde omnis maiores magni iste
                  perferendis. Praesentium, dolore blanditiis? Voluptate,
                  perspiciatis? Rerum, nulla.
                </p>
              </div>
            </div>
            <div className="flex  flex-wrap  sm:flex-col sm:px-[5%]  gap-7 w-full sm:w-[35%] *:flex *:gap-4">
              <div>
                <Eye /> 125,908 Views
              </div>
              <div>
                <Heart className=" fill-gray-600 dark:fill-gray-400 " /> 47,987
                likes
              </div>
              <div>
                <Bell /> Start 2 hours ago
              </div>
              <div>
                <Forward /> 125,908 Shared
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(LiveStream);
