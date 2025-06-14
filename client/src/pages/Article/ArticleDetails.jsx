import React from "react";
import ContentSlider from "../../component/Layout/ContentSlider";
import sports from "../../assets/images/sports.jpg";

import {
  X,
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
      <div className=" w-full h-[85vh] lg:w-[65%] sm:pr-[3%] overflow-hidden overflow-y-scroll hidel_slide_roler sm:border-r border-gray-300">
        <div
          className=" first_blogs w-full bg-cover bg-center font-semibold rounded-md text-white h-72 lg:h-96 relative overflow-hidden"
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
          <div className=" w-full flex my-5 md:px-3 mt-4 md:mt-10 flex-col lg:flex-row justify-between items-center">
            <div className=" flex items-center gap-5 w-full justify-between lg:justify-start my-5 lg:my-0">
              <div className=" flex items-center gap-3">
                <img src={people} alt="" className=" rounded-full w-12 h-12" />
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
            <div className=" *:bg-gray-300 dark:*:bg-gray-800 dark:text-white text-black text-xs w-full overflow-hidden hidel_slide_roler overflow-x-scroll  flex  lg:justify-end gap-5 md:gap-7 my-3 lg:my-0 font-semibold">
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
              <div className=" lg:hidden rounded-full gap-2 text-center flex justify-center items-center px-3">
                <Share2 className=" w-4 h-4" />
                Save
              </div>
              <div className=" lg:hidden rounded-full gap-2 text-center flex justify-center items-center px-3">
                <Share2 className=" w-4 h-4" />
                Report
              </div>
              <div className="hidden  rounded-full lg:flex items-center justify-center w-9 h-9 ">
                <EllipsisVertical className=" w-4 h-4" />
              </div>
            </div>
          </div>

          <div
            class={` overflow-hidden p-5 dark:bg-gray-900 dark:bg-opacity-85 bg-white rounded-xl border border-gray-200 border-opacity-20`}
          >
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
                  className=" overflow-hidden rounded-md border w-full sm:w-[30%] md:w-[20%]"
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
      <div className=" hidden lg:block lg:w-[35%]">
        <ContentSlider />
      </div>
    </div>
  );
}

export default ArticleDetails;
