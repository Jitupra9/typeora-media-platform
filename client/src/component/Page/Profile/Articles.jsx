import React, { memo, useEffect, useState } from "react";
import RenderGridItem from "../../Layout/card/Grid";
import ListGrid from "../../Layout/card/List";
import Masonry from "../../Layout/card/Masonry";
import Pagination from "../../utils/pagination";
import { Link } from "react-router-dom";
import { Plus, Grid, List, LayoutGrid } from "lucide-react";
import sports from "../../../assets/images/sports.jpg";

const ProfileArticles = (props) => {
  const [layout, setLayout] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  useEffect(() => {
    console.log("article component render");
  });
  const demoArticles = [
    {
      id: 1,
      title: "Advanced React Patterns",
      description:
        "Explore render props and compound components in modern React development.",
      category: "Tech",
      views: "12.4k",
      comments: 24,
      likes: 143,
      readTime: "4 min",
      isBookmarked: false,
      image: sports,
      author: "Helena Thomton",
      date: "1 min ago",
    },
    {
      id: 2,
      title: "UI/UX Trends 2024",
      description:
        "Minimalism meets immersive interactions in this year's design landscape.",
      category: "Design",
      views: "8.2k",
      comments: 11,
      likes: 89,
      readTime: "3 min",
      isBookmarked: true,
      image: sports,
      author: "Marcus Chen",
      date: "15 min ago",
    },
    {
      id: 3,
      title: "Sustainable Architecture",
      description:
        "How green buildings are reshaping urban environments worldwide.",
      category: "Architecture",
      views: "5.7k",
      comments: 8,
      likes: 56,
      readTime: "6 min",
      isBookmarked: false,
      image: sports,
      author: "Sophia Rodriguez",
      date: "2 hours ago",
    },
  ];

  const handleArticle = () => {
    props.setUploadType("article");
    props.setUploadActive(!props.UploadActive);
  };
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
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
          <h3 className="text-xl font-bold text-black dark:text-white">
            My Articles
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
            to="/mycontent"
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
            onClick={handleArticle}
            className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm"
          >
            <Plus className="h-4 w-4" />
            <span>New</span>
          </button>
        </div>
      </div>

      {layout === "grid" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {demoArticles.map((article) => (
            <RenderGridItem data={article} page="article" />
          ))}
        </div>
      )}

      {layout === "list" && (
        <div className="grid grid-cols-1 gap-4">
          {demoArticles.map((article) => (
            <ListGrid data={article} page="article" />
          ))}
        </div>
      )}

      {layout === "masonry" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {demoArticles.map((article, index) => (
            <div
              key={article.id}
              className={index % 4 === 0 ? "sm:col-span-2" : ""}
            >
              {<Masonry data={article} page="article" />}
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

export default memo(ProfileArticles);
