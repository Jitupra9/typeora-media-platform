import React, { memo, useState, useEffect, useContext } from "react";
import { ProfileDataContext } from "../../../context/page/ProfileContext";
import RenderGridItem from "../../Layout/card/Grid";
import ServerOffline from "../../utils/ServerOffline";
import axios from "axios";
import Masonry from "../../Layout/card/Masonry";
import ListCard from "../../Layout/card/List";
import Pagination from "../../utils/pagination";
import VideoNF from "../../DATA-NOT-FOUND/VideoNF";
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
// import videoThumbnail from "../../../assets/images/sports.jpg";

const Videos = (props) => {
  const { contextValue, SetcontextValue } = useContext(ProfileDataContext);
  const { NewUploadData, uploadActive } = contextValue;
  const { setNewUploadData, setUploadActive } = SetcontextValue;
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
          setUploadActive(false);
        }, 1000);
      }
    } catch (e) {
      console.log(e);
      if (e.response?.status === 500) {
        seterror(500);
      }
    } finally {
      setNewUploadData(false);
    }
  };
  useEffect(() => {
    fetchVideo();
  }, [currentPage, NewUploadData]);
  const handleUpload = () => {
    props.setUploadType("videos");
    setUploadActive(!uploadActive);
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
        <VideoNF handleUpload={handleUpload} />
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
