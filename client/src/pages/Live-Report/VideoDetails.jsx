import React, { memo, useEffect } from "react";

import Videoplayer from "../../component/utils/videoplayer";
import sports from "../../assets/images/sports.jpg";
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
  useEffect(() => {
    console.log("live stream lender");
  });

  return (
    <div className=" sm:p-5 h-[85vh] text-black  dark:text-white overflow-hidden overflow-y-scroll hidel_slide_roler">
      <div className=" w-full streaming  rounded-xl  ">
        <Videoplayer />
        <div className=" mt-5">
          <div className=" mt-10 flex flex-col sm:flex-row justify-between items-center">
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
            <div className=" text-xs *:bg-gray-200 dark:*:bg-gray-800 dark:text-white text-black w-full  overflow-hidden overflow-x-scroll md:overflow-auto hidel_slide_roler flex  sm:justify-end gap-3 font-semibold  lg:text-base">
              <div className=" rounded-full px-3 py-[6px] gap-4 items-center  flex ">
                <div className=" border-r flex items-center gap-4 px-3 pl-3">
                  <ThumbsUp className=" w-4 h-4" /> 8.7k
                </div>
                <ThumbsDown className=" w-4 h-4" />
              </div>
              <div className="  rounded-full gap-2 py-2 md:py-1 text-center flex justify-center items-center px-3">
                <Share2 className=" w-4 h-4" />
                Share
              </div>
              <div className="  sm:hidden rounded-full gap-2 text-center flex justify-center items-center px-3">
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
              <div className="hidden   rounded-full sm:flex items-center justify-center w-9 h-9 ">
                <EllipsisVertical className=" w-4 h-4" />
              </div>
            </div>
          </div>
          <div className=" flex flex-col sm:flex-row gap-5 justify-between mt-10">
            <div className=" w-full sm:w-[65%] title-discription ">
              <p className="Video-title  text-3xl  font-thin">
                Basic how to ride your skateboard comfortly and Basic Equipment
                to play skateboard safely
              </p>
              <div className=" text-gray-400 text-sm tracking-wide leading-relaxed ">
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
            <div className="flex  flex-wrap text-gray-400 sm:flex-col sm:px-[5%]  gap-7 w-full sm:w-[35%] *:flex *:gap-4">
              <div>
                <Eye /> 125,908 Views
              </div>
              <div>
                <Heart className=" fill-gray-400 " /> 47,987 likes
              </div>
              <div>
                <Bell /> Start 2 hours ago
              </div>
              <div>
                <Forward /> 125,908 Shared
              </div>
            </div>
          </div>
          <div className=" hidden overflow-hidden dark:bg-gray-900 dark:bg-opacity-85 bg-white p-5 mt-10 rounded-xl border border-gray-200 border-opacity-20">
            <p className=" font-bold">
              17k views - <span>1 minute ago</span>
            </p>
            <p className=" mt-5">
              &nbsp;&nbsp;&nbsp;&nbsp; Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Quidem distinctio iste voluptatum at? Nobis
              impedit optio labore quaerat quas unde quo voluptas tempore. Velit
              quam omnis dicta necessitatibus pariatur rerum autem amet! Culpa
              quam magnam praesentium quas illo vitae fugiat eum quidem libero
              iure. Voluptas nihil minus commodi quisquam. Modi quam neque
              blanditiis quidem cumque nihil rerum asperiores ducimus! Hic
              repudiandae quaerat quisquam illo accusantium, amet tenetur
              numquam architecto placeat eveniet commodi ratione nostrum ullam
              deserunt, cumque repellat facere? Nulla totam quis enim. Expedita
              neque quas atque voluptate dolor ex debitis laudantium laboriosam,
              vel deserunt enim in aut cupiditate? Totam?
            </p>

            <h3 className=" mt-16 font-bold text-xl">
              some article writeed by - Jitu Pradhan
            </h3>
            <div className=" flex flex-wrap gap-2 lg:gap-5 mt-5">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={` overflow-hidden rounded-md border w-full sm:w-[30%] md:w-[20%]`}
                >
                  <div className=" w-full images relative cursor-pointer">
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <img src={sports} alt="" className=" w-full rounded-t-md" />
                  </div>
                  <div className=" textareas">
                    <div className=" p-2">
                      <p className="tracking-wide text-gray-400 text-xs mb-2">
                        Business
                      </p>
                      <h1 className=" font-semibold text-xs cursor-pointer">
                        Before New York Auto Show , Cars Take Their Own Star
                        Turns
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(LiveStream);
