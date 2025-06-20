import React from "react";
import ContentSlider from "../../component/Layout/ContentSlider";
// import sports from "../../assets/images/sports.jpg";

import Comments from "../../component/Page/Articles/Comment";
import {
  X,
  Heart,
  Bell,
  Forward,
  Eye,
  Bookmark,
  Share2,
  ThumbsUp,
  ThumbsDown,
  MessageSquareMore,
  EllipsisVertical,
} from "lucide-react";
import people from "../../assets/images/people.jpg";

import forest from "../../assets/images/cloud-forest-landscape.jpg";
function ArticleDetails() {
  const handleGoBack = () => {
    window.history.go(-1);
  };
  return (
    <div className=" w-full sm:flex text-gray-600 dark:text-gray-400">
      <div className=" w-full h-[85vh] lg:w-[65%] lg:pr-[3%] overflow-hidden overflow-y-scroll hidel_slide_roler lg:border-r border-gray-300">
        <div
          className=" first_blogs w-full bg-cover bg-center font-semibold rounded-md text-white h-72 sm:h-96 relative overflow-hidden"
          style={{
            backgroundImage: `url(${forest})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className=" cursor-pointer font-bold absolute right-3 top-3 bg-gray-900 p-1 rounded-full opacity-45">
            <X className=" w-4 h-4" onClick={handleGoBack} />
          </div>
          <div className=" absolute z-10 p-5 w-full bottom-0">
            <p className="tracking-wide text-gray-300 text-sm mb-2">Travel</p>
            <h1 className="text-xl lg:text-2xl font-semibold leading-tight truncate">
              25 of the most beautiful places around the world
            </h1>
            <p className=" text-xs mt-3 text-gray-500 font-semibold truncate">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              vero.
            </p>
            <div className="flex mt-4 *:border-b-2 my-2 border-gray-900  w-full *:w-[25%]">
              <div className="border-blue-500 border-opacity-70 "></div>
              <div className="border-white border-opacity-20"></div>
              <div className="border-white border-opacity-20"></div>
              <div className="border-white border-opacity-20"></div>
            </div>
            <div className=" flex justify-between *:flex *:items-center *:gap-4 *:text-xs ">
              <div>
                <img src={people} alt="" className=" rounded-full w-6 h-6" />
                <h3>
                  Helena Thomton
                  <span className=" text-gray-300 font-normal">
                    - 1 min ago
                  </span>
                </h3>
              </div>
              <div className=" text-gray-300 *:cursor-pointer ">
                <Bookmark className=" w-5" />
                <Share2 className=" w-5" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" w-full flex  flex-col sm:flex-row md:mt-10 justify-between items-center">
            <div className="  w-full my-5 sm:my-0 lg:my-0 flex items-center gap-4 justify-between sm:justify-normal">
              <div className=" flex items-center gap-4">
                <img src={people} alt="" className=" rounded-full w-12 h-12" />
                <div>
                  <h3 className=" font-semibold text-sm xl:text-lg  ">
                    Fidaa Music Odia
                  </h3>
                  <p className=" text-gray-500">2.43k follwers</p>
                </div>
              </div>
              <div className=" bg-white shadow-md cursor-pointer  text-black px-4 py-2 rounded-full font-bold ">
                Follow
              </div>
            </div>
            <div className=" *:bg-gray-300 dark:*:bg-gray-800 dark:text-white text-black  w-full overflow-hidden hidel_slide_roler overflow-x-scroll flex items-center gap-4 sm:justify-end *:py-2  text-sm font-semibold">
              <div className=" rounded-full px-3 py-[6px] gap-4 items-center flex ">
                <div className=" border-r flex items-center gap-4 px-3 pl-3">
                  <ThumbsUp className=" w-4 h-4" /> 8.7k
                </div>
                <ThumbsDown className=" w-4 h-4" />
              </div>
              <div className="  rounded-full gap-2 text-center flex justify-center items-center px-4 py-2">
                <MessageSquareMore className=" w-4 h-4 transform -scale-x-100 " />
                Opinion
              </div>
              <div className=" sm:hidden rounded-full gap-2 text-center flex justify-center items-center px-3">
                <Share2 className=" w-4 h-4" />
                Save
              </div>
              <div className="sm:hidden rounded-full gap-2 text-center flex justify-center items-center px-3">
                <Share2 className=" w-4 h-4" />
                Report
              </div>
              <div className=" hidden rounded-full sm:flex items-center justify-center w-9 h-9 ">
                <EllipsisVertical className=" w-4 h-4" />
              </div>
            </div>
          </div>

          <div
            className={`relative rounded-xl px-3  lg:p-0 overflow-hidden
           lg:flex flex-col sm:flex-row gap-5 justify-between mt-3 sm:mt-0 lg:mt-10 text-gray-600 dark:text-gray-400 transition-all ease-in-out  duration-1000 lg:max-h-[1000px]
           `}
          >
            <div className=" w-full lg:w-[65%] title-discription  ">
              <p className="hidden lg:block Video-title  text-3xl  font-thin dark:text-white text-black">
                Basic how to ride your skateboard comfortly and Basic Equipment
                to play skateboard safely
              </p>
              <div className="  text-sm tracking-wide leading-relaxed ">
                <p className="mt-2 sm:mt-5">
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
            <div className="flex  mt-5 lg:mt-0 flex-wrap lg:flex-col sm:px-[5%]  gap-7 w-full lg:w-[35%] *:flex *:gap-4">
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
        <div>
          <Comments />
        </div>
      </div>
      <div className=" lg:w-[35%]">
        <div className=" hidden lg:block">
          <ContentSlider />
        </div>
      </div>
    </div>
  );
}

export default ArticleDetails;
