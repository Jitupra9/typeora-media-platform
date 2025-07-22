import React, { memo, useState, useEffect } from "react";
import RenderGridItem from "../../Layout/card/Grid";
import ServerOffline from "../../utils/ServerOffline";
import axios from "axios";
import Masonry from "../../Layout/card/Masonry";
import ListCard from "../../Layout/card/List";
import Pagination from "../../utils/pagination";
import { Link } from "react-router-dom";
import {
  Plus,
  Grid,
  List,
  Film,
  LayoutGrid,
  Video,
  CirclePlay,
  CloudUpload,
} from "lucide-react";
import videoThumbnail from "../../../assets/images/sports.jpg";

const Videos = (props) => {
  const [layout, setLayout] = useState("grid");
  const [error, seterror] = useState(null);

  const [Videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, settotalPages] = useState(0);
  const [Limit, setLimit] = useState(3);
  const UserId = props.UserID;

  useEffect(() => {
    console.log("video component render");
  });

  const fetchVideo = async () => {
    try {
      const res = await axios.get(
        `api/videos/user/${UserId}?page=${currentPage}&&limit=${Limit}`
      );
      if (res.data?.success && res.data?.data.length !== 0) {
        setVideos(res?.data?.data);
        settotalPages(Math.ceil(res?.data?.total / Limit));
        setTimeout(() => {
          props.setUploadActive(false);
        }, 1000);
      }
    } catch (e) {
      console.log(e);
      if (e.response?.status === 500) {
        seterror(500);
      }
    } finally {
      props.setNewUploaddata(false);
    }
  };
  useEffect(() => {
    fetchVideo();
  }, [currentPage, props.NewUploaddata]);
  const handleUpload = () => {
    props.setUploadType("videos");
    props.setUploadActive(!props.UploadActive);
  };
  if (error === 500) {
    return <ServerOffline />;
  }

  return (
    <div className="">
      <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-black dark:text-white"
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
          <h3 className="text-xl font-bold text-black dark:text-white">
            My Videos
          </h3>
        </div>
        <div className="flex space-x-3 items-center">
          <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            <button
              onClick={() => setLayout("grid")}
              className={`p-2 rounded-md ${
                layout === "grid"
                  ? "bg-white dark:bg-gray-600 shadow-sm"
                  : "hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
              title="Grid view"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setLayout("list")}
              className={`p-2 rounded-md ${
                layout === "list"
                  ? "bg-white dark:bg-gray-600 shadow-sm"
                  : "hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
              title="List view"
            >
              <List className="w-4 h-4" />
            </button>
            <button
              onClick={() => setLayout("masonry")}
              className={`p-2 rounded-md ${
                layout === "masonry"
                  ? "bg-white dark:bg-gray-600 shadow-sm"
                  : "hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
              title="Masonry view"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
          <Link
            to="/myvideos"
            className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            <span>View All</span>
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
          <button
            onClick={handleUpload}
            className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm"
          >
            <Plus className="h-4 w-4" />
            <span>Upload</span>
          </button>
        </div>
      </div>

      {Videos.length !== 0 ? (
        <div>
          {layout === "grid" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Videos.map((video) => (
                <RenderGridItem data={video} page="video" />
              ))}
            </div>
          )}
          {layout === "list" && (
            <div className="grid grid-cols-1 gap-4">
              {Videos.map((video) => (
                <ListCard data={video} page="video" />
              ))}
            </div>
          )}
          {layout === "masonry" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Videos.map((video, index) => (
                <div
                  key={video.id}
                  className={index % 4 === 0 ? "sm:col-span-2" : ""}
                >
                  {<Masonry data={video} page="video" />}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
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
            Your video collection is empty now, but your next masterpiece is
            just an upload away!
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
      )}

      {Videos.length !== 0 && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
};

export default memo(Videos);
