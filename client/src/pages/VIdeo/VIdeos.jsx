import React, { memo, useContext, useEffect, useMemo, useState } from "react";
import AllOptions from "../../component/models/AllOptions";
import { Headers } from "../../context/utils/Headercontext";
import { Link } from "react-router-dom";
import bgimg from "../../assets/images/videos.jpg";
import logo from "../../assets/images/logo.png";
import poster from "../../assets/images/videos2.jpg";
import { Dot, EllipsisVertical } from "lucide-react";
function LiveReports() {
  const { setheaders } = useContext(Headers);
  const [ModelOpen, setModelOpen] = useState(null);
  const categories = useMemo(
    () => [
      { path: "/live-reports", name: "All Topic" },
      { path: "/Personal", name: "Personal" },
      { path: "/Travel", name: "Travel" },
      { path: "/Technology", name: "Technology" },
      { path: "/Education", name: "Education" },
      { path: "/Health", name: "Health" },
      { path: "/Fitness", name: "Fitness" },
      { path: "/Finance", name: "Finance" },
      { path: "/Food", name: "Food" },
      { path: "/Lifestyle", name: "Lifestyle" },
      { path: "/Devt", name: "Devt" },
      { path: "/Entertainment", name: "Entertainment" },
      { path: "/Career", name: "Career" },
      { path: "/Creativity", name: "Creativity" },
    ],
    []
  );
  useEffect(() => {
    setheaders(categories);
  }, [categories, setheaders]);
  const handleElips = (e, key) => {
    e.preventDefault();
    setModelOpen((prev) => (prev === key ? null : key));
  };
  return (
    <div className="text-gray-200 dark:text-gray-400 ">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <h1 className="hidden sm:block dark:text-white text-black text-xl font-bold">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              Top This Week
            </div>
          </h1>
          <span className="sm:hidden text-black dark:text-white font-bold flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
            Trending
          </span>
        </div>

        {/* Right side - Controls and filters */}
        <div className="flex items-center space-x-3">
          {/* Time period selector */}
          <div className="relative group">
            <button className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              <span>This Week</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="hidden group-hover:block absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10 border border-gray-200 dark:border-gray-700">
              <div className="py-1">
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Today
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  This Week
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  This Month
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  All Time
                </a>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              <span>All Categories</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="hidden group-hover:block absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10 border border-gray-200 dark:border-gray-700">
              <div className="py-1">
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  All Categories
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Videos
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Articles
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Podcasts
                </a>
              </div>
            </div>
          </div>
          <button className="hidden md:flex items-center space-x-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
            <span>Share</span>
          </button>
        </div>
      </div>
      <div className=" flex flex-wrap justify-between gap-y-3 overflow-hidden h-60 ">
        {[...Array(3)].map((item, key) => (
          <Link
            key={key}
            to={`/watch?id=${key}`}
            className=" border border-gray-800 relative overflow-hidden p-5 flex flex-col   justify-end w-full sm:w-[49%] lg:w-[32%] h-60 rounded-md bg-cover bg-center"
            style={{ backgroundImage: `url(${bgimg})` }}
          >
            <div
              className="absolute bottom-0 inset-0 z-0"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
              }}
            >
              <div className=" absolute bg-black opacity-75 px-2 text-xs py-1 rounded-md right-5 top-3">
                10:12
              </div>
            </div>

            <div className=" z-10 flex flex-col gap-y-2 text-xs">
              <h3 className=" font-semibold text-sm  text-white dark:text-gray-300">
                QUEZY-AGAIN | Artist Spotlight
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, reprehenderit cum asperiores. Error, cum a?
              </p>
              <div className=" flex items-center gap-1 font-semibold">
                <div className="logo">
                  <img
                    src={logo}
                    alt=""
                    srcSet=""
                    className=" w-6 h-6 rounded-full"
                  />
                </div>
                <p>SoundShare</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-between my-6">
        <div className="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <h1 className="dark:text-white text-black text-xl font-bold">
            All Video
          </h1>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg transition-colors text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <span className="hidden sm:block">Upload</span>
          </button>

          <div className="flex items-center space-x-1 bg-red-100 dark:bg-red-800 dark:bg-opacity-50 px-2 py-1 rounded-md">
            <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-700 dark:text-red-300 text-sm  ">
              <span className="">
                Live <span className="hidden sm:inline-block">Now</span>
              </span>
            </span>
          </div>
          <div className="flex border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
            <button className="p-1.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
            <span>24 Videos</span>
            <span>•</span>
            <span>3.2K Views</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-y-6">
        {[...Array(12)].map((item, key) => (
          <Link
            to={`/watch?id=${key}`}
            key={key}
            className=" relative w-full cursor-pointer sm:w-[48%] lg:w-[24%] px-2 box-border "
          >
            <div className=" rounded-lg overflow-hidden ">
              <div className=" relative images mb-3">
                <img
                  src={poster}
                  alt="Poster"
                  className="rounded-lg w-full h-auto object-cover"
                />
                <div className=" absolute bg-black opacity-75 px-2 text-xs py-1 rounded-md right-5 bottom-3">
                  10:12
                </div>
              </div>
              <div className="textareas flex gap-3 px-2 pb-3 text-sm">
                <img
                  src={poster}
                  alt="Logo"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex flex-col w-full text-gray-800 dark:text-gray-400">
                  <div className=" flex">
                    <h3 className="font-semibold  dark:text-white">
                      Full Video: Raajhan | Do Patti | Kriti Sanon, Shaheer
                      Sheikh
                    </h3>
                    <div className="">
                      <EllipsisVertical
                        onClick={(e) => {
                          handleElips(e, key);
                        }}
                      />
                    </div>
                  </div>
                  <p className="">Jitu Pradhan</p>
                  <p className=" flex">
                    <span>66k views</span>
                    <Dot />
                    <span>11 days ago</span>
                  </p>
                </div>
              </div>
            </div>
            {ModelOpen === key && (
              <div className=" absolute top-20 right-10 z-10">
                <AllOptions />
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default memo(LiveReports);
