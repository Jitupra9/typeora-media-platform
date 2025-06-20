import React, { memo } from "react";
import people from "../../assets/images/people.jpg";
import sports from "../../assets/images/sports.jpg";
import { Bookmark, Dot, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
function Article() {
  return (
    <div className="h-[88vh] lg:h-[85vh] flex text-gray-500 dark:text-gray-400">
      <div className="overflow-hidden  overflow-y-scroll hidel_slide_roler w-full justify-center  sm:flex  all_blogs  flex flex-wrap  gap-3  font-semibold">
        {[...Array(12)].map((_, i) => (
          <Link
            to={`/ArticleDetails?id=${i}`}
            key={i}
            className={`overflow-hidden  sm:w-[32%] lg:w-[24%]
            rounded-md border bg-white dark:bg-gray-900 dark:bg-opacity-85`}
          >
            <div className=" images relative cursor-pointer">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <img src={sports} alt="" className=" w-full rounded-t-md" />
            </div>
            <div className=" textareas">
              <div className=" p-2 sm:p-5">
                <div className=" flex justify-between items-center">
                  <p className="tracking-wide text-gray-400 text-xs mb-2">
                    Business
                  </p>
                  <p className=" flex text-[10px] items-center">
                    <span>66k views</span>
                    <Dot />
                    <span>11 days</span>
                  </p>
                </div>
                <h1 className=" font-bold text-xs  cursor-pointer">
                  Before New York Auto Show , Cars Take Their Own Star Turns
                </h1>

                <div className="flex mt-4 border-b-2 my-2 border-gray-200  w-full "></div>
                <div className=" flex justify-between *:flex *:items-center *:gap-1 *:md:gap-2 *:text-xs ">
                  <div>
                    <img
                      src={people}
                      alt=""
                      className=" rounded-full w-5 h-5"
                    />
                    <h3 className=" font-semibold text-[10px]  lg:text-[12px] ">
                      Helena Thomton
                      <span className=" text-gray-400 font-normal">
                        - 1 min ago
                      </span>
                    </h3>
                  </div>
                  <div className=" text-gray-400 *:cursor-pointer ">
                    <Bookmark className=" w-3 md:w-5" />
                    <Share2 className=" w-3 md:w-5" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default memo(Article);
