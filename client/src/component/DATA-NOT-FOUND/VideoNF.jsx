import React from "react";
import { Link } from "react-router-dom";
import { Film, Video, CirclePlay, CloudUpload } from "lucide-react";
function VideoNF({ handleUpload }) {
  return (
    <div className=" relative flex flex-col items-center justify-center min-h-[56vh] px-4 text-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-400/10 dark:bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-blue-400/10 dark:bg-purple-400/10 rounded-full blur-3xl animate-pulse-medium"></div>
      </div>

      <div className="relative w-80 h-80 mb-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-300 via-purple-300 to-pink-300 dark:from-gray-600 dark:via-gray-700 dark:to-gray-800 rounded-full blur-[60px] opacity-70 animate-gradient-shift"></div>

        <div className="relative z-10 w-full h-full flex items-center justify-center animate-float-main">
          <div className="absolute w-48 h-36 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border-4 border-gray-100 dark:border-gray-700 transform rotate-[-5deg] group hover:rotate-0 transition-transform duration-500">
            <div className="absolute inset-0 flex items-center justify-center">
              <Video className="text-indigo-500 dark:text-indigo-400 w-11 h-11 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-b-lg"></div>
          </div>

          <div className="absolute flex justify-center items-center top-0 left-10 w-16 h-16 bg-white dark:bg-gray-700 rounded-lg shadow-lg border-2 border-gray-100 dark:border-gray-600 transform rotate-[10deg] animate-float1">
            <CirclePlay className="text-pink-500 dark:text-pink-400 w-6 h-6 hover:scale-110 transition-transform" />
          </div>
          <div className="absolute flex justify-center items-center bottom-5 right-8 w-20 h-14 bg-white dark:bg-gray-700 rounded-lg shadow-lg border-2 border-gray-100 dark:border-gray-600 transform rotate-[5deg] animate-float2">
            <CirclePlay className="text-blue-500 dark:text-blue-400 w-6 h-6 hover:scale-110 transition-transform" />
          </div>
          <div className="absolute flex justify-center items-center top-8 right-12 w-12 h-12 bg-white dark:bg-gray-700 rounded-lg shadow-md border-2 border-gray-100 dark:border-gray-600 transform rotate-[-8deg] animate-float3">
            <Film className="text-purple-500 dark:text-purple-400 w-5 h-5 hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-text-shimmer">
        Ready for Your Close-up?
      </h2>

      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mb-8 leading-relaxed animate-fade-in">
        Your video collection is empty now, but your next masterpiece is just an
        upload away!
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <button
          onClick={handleUpload}
          className="relative flex items-center justify-center space-x-2 bg-blue-500 text-white px-6 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
        >
          <span className="relative z-10 flex items-center">
            <CloudUpload className="w-5 h-5 mr-2 transition-all duration-300 group-hover:scale-110 group-hover:animate-bounce" />
            Upload First Video
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -inset-y-full -left-20 w-16 bg-white/30 group-hover:animate-shine group-hover:left-[120%] transition-all duration-1000"></div>
          </div>
        </button>

        <Link
          to="/video-ideas"
          className="relative flex items-center justify-center space-x-2 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-3.5 rounded-lg transition-all duration-300 hover:-translate-y-1 group"
        >
          <svg
            className="w-5 h-5 text-yellow-500 dark:text-yellow-400 group-hover:animate-spin-slow"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
          <span>Get Video Ideas</span>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400 dark:bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </Link>
      </div>

      <div className=" absolute w-full h-full">
        {" "}
        <div className="absolute inset-0 transform  pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 dark:bg-white bg-red-500 rounded-full opacity-0 animate-sparkle"
              style={{
                left: `${Math.random() * 95}%`,
                top: `${Math.random() * 95}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoNF;
