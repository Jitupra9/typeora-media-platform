import React, { useRef, useState } from "react";
import {
  Search,
  ChevronDown,
  Ellipsis,
  Info,
  Heart,
  Clock,
  Activity,
  Bookmark,
  Eye,
  MousePointerClick,
  Calendar,
  Clock as TimeIcon,
  Filter,
  X,
  ArrowRight,
  BookOpen,
  PlayCircle,
  Users,
  TrendingUp,
  BarChart2,
  Share2,
  Download,
  BookmarkPlus,
  Star,
} from "lucide-react";
import Sports from "../../assets/images/sports.jpg";

function Saved() {
  const dateInputRef = useRef(null);
  const dateInputReftwo = useRef(null);
  const timeInputRef = useRef(null);
  const timeInputReftwo = useRef(null);
  const [isfilterActive, setisfilterActive] = useState(false);
  const [activeTab, setActiveTab] = useState("article");
  const [savedItems, setSavedItems] = useState([...Array(4)]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleIconClick = (dateref) => {
    if (dateref.current) {
      dateref.current.showPicker();
    }
  };

  const toggleSaveItem = (index) => {
    const newSavedItems = [...savedItems];
    newSavedItems[index] = newSavedItems[index] ? null : {};
    setSavedItems(newSavedItems);
  };

  return (
    <div className="min-h-screen ">
      <div className="filter-details text-gray-600 dark:text-gray-200 bg-white dark:bg-gray-900 bg-opacity-90 p-5 rounded-lg shadow-sm">
        <div className="filters flex flex-col sm:flex-row gap-4 justify-between">
          <div>
            <h3 className="text-3xl font-bold mb-3 flex items-center gap-2">
              <Bookmark className="text-blue-500 w-8 h-8" />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Welcome Back
              </span>
            </h3>
            <p className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
              <Clock className="w-4 h-4" />
              Get your latest for the last 7 days
            </p>
          </div>
          <div
            onClick={() => {
              setisfilterActive(!isfilterActive);
            }}
            className="filter-open flex gap-2 items-center font-semibold"
          >
            <button className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center px-3 py-2 gap-1 rounded-lg shadow-sm">
              <Filter className="w-4 h-4" />
              Filters
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isfilterActive ? "rotate-180" : ""
                }`}
              />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
              <Ellipsis />
            </button>
          </div>
        </div>
        {isfilterActive && (
          <div className="mt-5 text-sm font-semibold filter-options w-full flex flex-wrap gap-4 justify-between *:flex *:flex-col *:gap-y-2">
            <div className="w-full sm:w-[48%] lg:w-[30%]">
              <h3 className="flex items-center gap-1">
                <Search className="w-4 h-4" />
                Search Here
              </h3>
              <div className="search bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg flex items-center overflow-hidden border border-transparent focus-within:border-blue-500 transition-colors">
                <Search className="text-gray-400 w-4 h-4" />
                <input
                  className="px-3 bg-transparent outline-none w-full"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by Topic, Title or categories..."
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
            <div>
              <p className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Pick Up Date
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg flex items-center overflow-hidden border border-transparent hover:border-blue-500 transition-colors">
                <input
                  className="px-1 date_icon_off bg-transparent outline-none w-full"
                  type="date"
                  ref={dateInputReftwo}
                />
                <ChevronDown
                  className="w-4 h-4 cursor-pointer text-gray-400"
                  onClick={() => {
                    handleIconClick(dateInputReftwo);
                  }}
                />
              </div>
            </div>
            <div>
              <p className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Drop Up Date
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg flex items-center overflow-hidden border border-transparent hover:border-blue-500 transition-colors">
                <input
                  className="px-1 date_icon_off bg-transparent outline-none w-full"
                  type="date"
                  ref={dateInputRef}
                />
                <ChevronDown
                  className="w-4 h-4 cursor-pointer text-gray-400"
                  onClick={() => {
                    handleIconClick(dateInputRef);
                  }}
                />
              </div>
            </div>
            <div>
              <p className="flex items-center gap-1">
                <TimeIcon className="w-4 h-4" />
                Pick Up Time
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg flex items-center overflow-hidden border border-transparent hover:border-blue-500 transition-colors">
                <input
                  className="px-1 date_icon_off bg-transparent outline-none w-full"
                  type="time"
                  id="time"
                  ref={timeInputRef}
                />
                <ChevronDown
                  className="w-4 h-4 cursor-pointer text-gray-400"
                  onClick={() => {
                    handleIconClick(timeInputRef);
                  }}
                />
              </div>
            </div>
            <div>
              <p className="flex items-center gap-1">
                <TimeIcon className="w-4 h-4" />
                Drop Off Time
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg flex items-center overflow-hidden border border-transparent hover:border-blue-500 transition-colors">
                <input
                  className="px-1 date_icon_off bg-transparent outline-none w-full"
                  type="time"
                  id="time"
                  ref={timeInputReftwo}
                />
                <ChevronDown
                  className="w-4 h-4 cursor-pointer text-gray-400"
                  onClick={() => {
                    handleIconClick(timeInputReftwo);
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="content mt-10 sm:mt-20 text-gray-600 dark:text-gray-200">
        <div className="my-5">
          <ul className="flex gap-x-2 *:px-6 *:py-2 *:rounded-lg *:cursor-pointer *:transition-colors">
            <li
              className={`flex items-center gap-2 ${
                activeTab === "article"
                  ? "bg-blue-500 text-white"
                  : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab("article")}
            >
              <BookOpen className="w-4 h-4" />
              Articles
            </li>
            <li
              className={`flex items-center gap-2 ${
                activeTab === "video"
                  ? "bg-blue-500 text-white"
                  : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab("video")}
            >
              <PlayCircle className="w-4 h-4" />
              Videos
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-4 w-full sm:flex-row justify-between *:bg-white *:dark:bg-gray-900 *:bg-opacity-90 *:p-5 *:rounded-lg *:shadow-sm">
          <div className="content w-full lg:w-[62%]">
            <div className="header flex justify-between items-center">
              <h1 className="flex items-center gap-2">
                <span className="text-2xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  Available
                </span>
                <ArrowRight className="w-5 h-5 text-gray-400" />
                <span className="text-xl">
                  {activeTab === "article" ? "Articles" : "Videos"}
                </span>
              </h1>
              <button className="flex items-center gap-1 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                View All <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <div className="Articles">
              <div className="mt-5 flex flex-wrap overflow-hidden justify-between gap-y-5">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="relative w-full sm:w-[48%] h-60 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="absolute top-3 right-3 flex gap-2">
                      <button
                        onClick={() => toggleSaveItem(i)}
                        className={`p-2 rounded-full shadow-sm ${
                          savedItems[i]
                            ? "bg-red-100 text-red-500 hover:bg-red-200"
                            : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                        }`}
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            savedItems[i] ? "fill-red-500" : ""
                          }`}
                        />
                      </button>
                      <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 shadow-sm">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="absolute bottom-0 left-0 pb-7 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-white font-semibold text-lg">
                        {activeTab === "article"
                          ? "The Future of AI in Healthcare"
                          : "How AI is Transforming Industries"}
                      </h3>
                      <div className="flex items-center gap-3 mt-2 text-white/80 text-sm">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span>1.2K views</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>5 min read</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-[89%] lg:-bottom-[92%] left-0 right-0 w-full h-full rounded-full bg-white dark:bg-gray-900"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden lg:block resent-activity w-full sm:w-[34%]">
            <div className="header flex justify-between items-center">
              <p className="text-2xl font-semibold flex items-center gap-2">
                <Activity className="text-blue-500 w-6 h-6" />
                Recent Activity
              </p>
              <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
                <Info className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-5 bg-gray-100 dark:bg-gray-950 justify-between items-center flex text-sm rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-[30%] h-20 bg-gray-800 rounded-xl overflow-hidden">
                <img
                  src={Sports}
                  alt="Sports"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="textarea w-[65%] font-semibold">
                <h3 className="text-blue-500 dark:text-blue-400">
                  Article in News
                </h3>
                <div className="mt-1 *:flex *:gap-1 *:items-center text-gray-500 dark:text-gray-400">
                  <div>
                    <Clock className="w-3 h-3" />
                    <p>2 Day ago saved</p>
                  </div>
                  <div>
                    <TrendingUp className="w-3 h-3" />
                    <p>247K views This Month</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="details bg-gray-100 dark:bg-gray-950 mt-5 p-4 rounded-xl shadow-sm">
              <div className="header mt-2 mb-5 flex justify-between items-center">
                <h1 className="font-bold text-lg flex items-center gap-2">
                  <BarChart2 className="text-blue-500 w-5 h-5" />
                  Article Analytics
                </h1>
                <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800">
                  <Info className="w-5 h-5" />
                </button>
              </div>
              <div>
                <div className="profile flex gap-3 items-center rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                  <img
                    src={Sports}
                    alt="Author"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">Jitu Pradhan</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Jitupra73@gmail.com
                    </p>
                  </div>
                </div>
                <div className="relative flex items-center justify-around p-4">
                  <div className="absolute border-t border-gray-300 dark:border-gray-700 top-1/2 z-0 left-0 w-full h-2"></div>
                  <div className="bg-blue-500 rounded-full w-4 h-4 z-10 ring-2 ring-blue-200 dark:ring-blue-900"></div>
                  <div className="bg-blue-500 rounded-full w-4 h-4 z-10 ring-2 ring-blue-200 dark:ring-blue-900"></div>
                  <div className="bg-blue-500 rounded-full w-4 h-4 z-10 ring-2 ring-blue-200 dark:ring-blue-900"></div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 px-4 py-2 rounded-md bg-gray-200/50 dark:bg-gray-800/50">
                    <div className="flex flex-col items-start">
                      <span className="font-semibold flex items-center gap-1">
                        <BookmarkPlus className="w-3 h-3" />
                        Category
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        News
                      </span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Topic
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        AI Development
                      </span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-semibold flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        Type
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Article
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 border-t border-gray-300 dark:border-gray-700 px-4 py-2">
                    <div className="flex flex-col items-start">
                      <span className="font-semibold flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        Impression
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        1.2k
                      </span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-semibold flex items-center gap-1">
                        <MousePointerClick className="w-3 h-3" />
                        Clicked
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        340
                      </span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-semibold flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        Views
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        980
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 border-t border-gray-300 dark:border-gray-700 px-4 py-2">
                    <div className="flex flex-col items-start">
                      <span className="font-semibold flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        Author
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        John Doe
                      </span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-semibold flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Published
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        May 25, 2025
                      </span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-semibold flex items-center gap-1">
                        <Activity className="w-3 h-3" />
                        Status
                      </span>
                      <span className="text-sm text-green-500">Active</span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 transition-colors">
                <Download className="w-4 h-4" />
                Download Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Saved;
