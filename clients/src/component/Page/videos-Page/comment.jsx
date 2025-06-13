import { Ellipsis, Plus, Send, Users, X } from "lucide-react";
import React, { useState } from "react";
import People from "../../../assets/images/people.jpg";
function Comment() {
  const [isOpenComment, setisOpenComment] = useState(false);
  const [commentboxOpen, setcommentboxOpen] = useState(true);
  return (
    <div className=" relative overflow-hidden p-5  rounded-xl sm:rounded-3xl bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400">
      <div className="heade flex items-center justify-between border-gray-400 dark:border-gray-600 border-b pb-5">
        <h1 className="dark:text-white text-black font-semibold text-lg">
          All Chat's
        </h1>

        <div className=" flex gap-3 items-center text-sm">
          <Users className=" fill-white dark:fill-gray-400" />
          <p>15,986 people</p>
        </div>
      </div>
      <div
        className={` ${
          isOpenComment ? "h-96 " : " h-20"
        } comments overflow-hidden overflow-y-auto hidel_slide_roler`}
      >
        {[...Array(14)].map((_, i) => (
          <div key={i} className=" flex items-center gap-5 mt-5">
            <img
              src={People}
              className=" w-10 h-10 bg-gray-600 rounded-full"
              alt=""
            />
            <div>
              <h3 className=" dark:text-white text-black font-semibold">
                Wijaya Abadi
              </h3>
              <p className=" text-gray-400 dark:text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, cupiditate.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className=" mt-2 pt-3  border-t border-gray-400 dark:border-gray-700 *:cursor-pointer flex justify-between items-center">
        <Plus
          onClick={() => {
            setcommentboxOpen(true);
          }}
          className=" border rounded-full p-1"
        />
        <p
          onClick={() => {
            setisOpenComment(!isOpenComment);
          }}
          className=" text-right"
        >
          {isOpenComment ? "see less" : "see more"}
        </p>
      </div>
      {commentboxOpen && (
        <div className=" absolute w-full h-full bg-gray-600 dark:bg-gray-200 bg-opacity-50 dark:bg-opacity-35 inset-0 top-0 left-0">
          <X
            onClick={() => {
              setcommentboxOpen(false);
            }}
            className=" absolute bg-gray-800  rounded-full cursor-pointer top-5 right-5 text-white w-8 h-8 p-2"
          />
          <div className=" absolute bottom-0  w-full  px-3 mb-3">
            <div className=" border bg-gray-500 flex items-center px-3 py-2 rounded-lg">
              <Ellipsis className=" cursor-pointer w-6 h-6  bg-gray-800 rounded-full p-1" />
              <input
                type="text"
                className="w-full h-full text-gray-900 placeholder-gray-950 outline-none bg-transparent px-3"
                name=""
                placeholder="Enter your thought..."
                id=""
              />
              <Send className=" cursor-pointer text-white w-6 h-6 bg-gray-800 rounded-full p-1" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Comment;
