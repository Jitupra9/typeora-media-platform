import { ThumbsDown, ThumbsUp } from "lucide-react";
import React from "react";

function Comment() {
  return (
    <div className="w-full sm:w-[90%] my-5">
      <h1 className=" text-2xl my-2 text-black dark:text-white font-semibold">
        Comments
      </h1>
      <div className="mb-6">
        <div className=" flex justify-between py-2 px-3 rounded-xl border border-gray-400">
          <input
            type="text"
            className=" w-[80%] bg-transparent outline-none border-none"
            placeholder="What are your thoughts?"
            name=""
            id=""
          />
          <button className=" px-2 py-1 rounded-md bg-blue-400 text-white font-semibold">
            Send
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex space-x-3">
          <div className=" bg-gray-300 dark:bg-gray-900 bg-opacity-40 p-3 flex-1 rounded-lg border dark:border-gray-800">
            <div className="rounded-lg">
              <div className="flex items-center justify-between">
                <div className=" flex gap-2">
                  <div className="flex-shrink-0 border border-black rounded-full">
                    <img
                      className="h-6 w-6 rounded-full"
                      src="https://via.placeholder.com/40"
                      alt="User avatar"
                    />
                  </div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-400">
                    John Doe
                  </h4>
                </div>
                <span className="text-xs text-gray-500">2 hours ago</span>
              </div>
              <p className="mt-1 text-sm text-gray-700">
                This is a sample comment. It can contain any text about the post
                or discussion.
              </p>
              <div className="mt-2 text-xs flex justify-between items-center">
                <div className=" flex gap-3 *:flex *:gap-2">
                  <div>
                    <ThumbsUp className=" w-4 h-4" /> <span>222</span>
                  </div>
                  <div>
                    <ThumbsDown className=" w-4 h-4" />
                    <span>222</span>
                  </div>
                </div>
                <button className=" text-blue-500 hover:text-blue-700">
                  Reply
                </button>
              </div>
            </div>
            <div className="ml-10 mt-3 space-y-3">
              <div className="flex space-x-3">
                <div className="flex-1">
                  <div className=" bg-gray-300 dark:bg-gray-950  p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className=" flex gap-2">
                        <div className="flex-shrink-0 border border-black rounded-full">
                          <img
                            className="h-6 w-6 rounded-full"
                            src="https://via.placeholder.com/40"
                            alt="User avatar"
                          />
                        </div>
                        <h4 className="font-medium text-gray-800 dark:text-gray-400">
                          Jane Smith
                        </h4>
                      </div>
                      <span className="text-xs text-gray-500">1 hour ago</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-700">
                      This is a reply to the previous comment.
                    </p>
                    <div className="mt-2 text-xs flex justify-between items-center">
                      <div className=" flex gap-3 *:flex *:gap-2">
                        <div>
                          <ThumbsUp className=" w-4 h-4" /> <span>222</span>
                        </div>
                        <div>
                          <ThumbsDown className=" w-4 h-4" />
                          <span>222</span>
                        </div>
                      </div>
                      <button className=" text-blue-500 hover:text-blue-700">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-3">
          <div className="flex-1">
            <div className=" bg-gray-300 dark:bg-gray-900 bg-opacity-40 p-3 rounded-lg border dark:border-gray-800">
              <div className="flex items-center justify-between">
                <div className=" flex gap-2">
                  <div className="flex-shrink-0 border border-black rounded-full">
                    <img
                      className="h-6 w-6 rounded-full"
                      src="https://via.placeholder.com/40"
                      alt="User avatar"
                    />
                  </div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-400">
                    Alex Johnson
                  </h4>
                </div>{" "}
                <span className="text-xs text-gray-500">30 minutes ago</span>
              </div>
              <p className="mt-1 text-sm text-gray-700">
                Another example comment showing how the thread would look.
              </p>
              <div className="mt-2 text-xs flex justify-between items-center">
                <div className=" flex gap-3 *:flex *:gap-2">
                  <div>
                    <ThumbsUp className=" w-4 h-4" /> <span>222</span>
                  </div>
                  <div>
                    <ThumbsDown className=" w-4 h-4" />
                    <span>222</span>
                  </div>
                </div>
                <button className=" text-blue-500 hover:text-blue-700">
                  Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
