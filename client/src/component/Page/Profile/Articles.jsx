import React, { memo, useEffect, useState, useContext } from "react";
import { ProfileDataContext } from "../../../context/page/ProfileContext";
import RenderGridItem from "../../Layout/card/Grid";
import ListGrid from "../../Layout/card/List";
import Masonry from "../../Layout/card/Masonry";
import Pagination from "../../utils/pagination";
import ServerOffline from "../../utils/ServerOffline";
import { Link } from "react-router-dom";
import { Plus, Grid, List, LayoutGrid } from "lucide-react";
import sports from "../../../assets/images/sports.jpg";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
const ProfileArticles = (props) => {
  const { contextValue, SetcontextValue } = useContext(ProfileDataContext);
  const { NewUploadData, uploadActive } = contextValue;
  const { setNewUploadData, setUploadActive } = SetcontextValue;
  const [layout, setLayout] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [Articles, setArticles] = useState([]);
  const [totalPages, settotalPages] = useState(null);
  const [error, seterror] = useState(null);
  const [Limit, setLimit] = useState(3);
  const UserId = props.UserID;
  // const isMobile = useMediaQuery({ maxWidth: 645 });
  // const isTablet = useMediaQuery({ minWidth: 646, maxWidth: 1439 });
  // const isDesktop = useMediaQuery({ minWidth: 1440 });

  // useEffect(() => {
  //   if (isMobile) {
  //     setLimit(10);
  //   } else if (isTablet) {
  //     setLimit(2);
  //   } else {
  //     setLimit(3);
  //   }
  // }, [isMobile, isTablet, isDesktop]);
  const fetchArticles = async () => {
    console.log("rady to fetch articles");
    try {
      const Articles = await axios.get(
        `/api/articles/user/${UserId}?page=${currentPage}&limit=${Limit}`
      );
      if (Articles.data?.success && Articles.data?.data.length !== 0) {
        setArticles(Articles.data?.data);
        settotalPages(Math.ceil(Articles?.data?.total / Limit));
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
    fetchArticles();
  }, [currentPage, NewUploadData, Limit]);
  const handleArticle = () => {
    props.setUploadType("article");
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
      {Articles.length !== 0 ? (
        <div>
          {layout === "grid" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4">
              {Articles.map((article, key) => (
                <RenderGridItem data={article} key={key} page="article" />
              ))}
            </div>
          )}
          {layout === "list" && (
            <div className="grid grid-cols-1 gap-4">
              {Articles.map((article) => (
                <ListGrid data={article} page="article" />
              ))}
            </div>
          )}
          {layout === "masonry" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Articles.map((article, index) => (
                <div
                  key={article.id}
                  className={index % 4 === 0 ? "sm:col-span-2" : ""}
                >
                  {<Masonry data={article} page="article" />}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center  px-4 text-center">
          <div className="relative mb-8 w-72 h-72">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 opacity-90"></div>
            <svg
              className="relative z-10 w-full h-full p-8 text-gray-400 dark:text-gray-500"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 50H150V150H50V50Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M60 70H140M60 90H140M60 110H120"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M70 130H130"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="4 2"
              />
            </svg>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg flex items-center justify-center">
              <Plus className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
          </div>

          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
            Your Story Starts Here
          </h3>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mb-8 leading-relaxed">
            Share your unique perspective with the world. Your first article
            could inspire thousands.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleArticle}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-3.5 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
            >
              <Plus className="w-5 h-5" />
              <span className="font-semibold">New Article</span>
            </button>

            <Link
              to="/Articles"
              className="flex items-center justify-center space-x-2 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3.5 rounded-xl transition-all duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="font-semibold">Find Inspiration</span>
            </Link>
          </div>

          <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            <p>
              Need help getting started?{" "}
              <Link
                to="/guide"
                className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
              >
                Read our writing guide
              </Link>
            </p>
          </div>
        </div>
      )}

      {totalPages !== null && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
};

export default memo(ProfileArticles);
