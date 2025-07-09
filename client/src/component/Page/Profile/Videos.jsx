import React, { memo, useState, useEffect } from "react";
import RenderGridItem from "../../Layout/card/Grid";
import Masonry from "../../Layout/card/Masonry";
import ListCard from "../../Layout/card/List";
import Pagination from "../../utils/pagination";
import { Link } from "react-router-dom";
import { Plus, Grid, List, LayoutGrid } from "lucide-react";
import videoThumbnail from "../../../assets/images/sports.jpg";

const Videos = (props) => {
  const [layout, setLayout] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const handleUpload = () => {
    props.setUploadType("videos");
    props.setUploadActive(!props.UploadActive);
  };
  useEffect(() => {
    console.log("video component render");
  });
  const demoVideos = [
    {
      id: 1,
      title: "Advanced React Patterns Explained",
      description:
        "Learn about modern React patterns in this comprehensive tutorial.",
      category: "Tech",
      views: "124k",
      comments: 42,
      likes: 843,
      duration: "12:34",
      date: "2 days ago",
      isBookmarked: false,
      thumbnail: videoThumbnail,
      author: "Helena Thomton",
    },
    {
      id: 2,
      title: "UI/UX Design Trends 2024",
      description:
        "Explore the latest design trends shaping user interfaces this year.",
      category: "Design",
      views: "82k",
      comments: 31,
      likes: 589,
      duration: "08:45",
      date: "1 week ago",
      isBookmarked: true,
      thumbnail: videoThumbnail,
      author: "Marcus Chen",
    },
    {
      id: 3,
      title: "Sustainable Architecture Documentary",
      description:
        "How green buildings are transforming urban landscapes worldwide.",
      category: "Architecture",
      views: "57k",
      comments: 18,
      likes: 356,
      duration: "22:12",
      date: "3 weeks ago",
      isBookmarked: false,
      thumbnail: videoThumbnail,
      author: "Sophia Rodriguez",
    },
  ];
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

      {layout === "grid" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {demoVideos.map((video) => (
            <RenderGridItem data={video} page="video" />
          ))}
        </div>
      )}

      {layout === "list" && (
        <div className="grid grid-cols-1 gap-4">
          {demoVideos.map((video) => (
            <ListCard data={video} page="video" />
          ))}
        </div>
      )}

      {layout === "masonry" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {demoVideos.map((video, index) => (
            <div
              key={video.id}
              className={index % 4 === 0 ? "sm:col-span-2" : ""}
            >
              {<Masonry data={video} page="video" />}
            </div>
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default memo(Videos);
