import React, { memo, useState, useRef } from "react";
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
function Headers() {
  const dateInputRef = useRef(null);
  const dateInputReftwo = useRef(null);
  const timeInputRef = useRef(null);
  const timeInputReftwo = useRef(null);
  const [isfilterActive, setisfilterActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const handleIconClick = (dateref) => {
    if (dateref.current) {
      dateref.current.showPicker();
    }
  };
  return (
    <div className=" headers filter-details text-gray-600 dark:text-gray-200 bg-white dark:bg-gray-900 bg-opacity-90 p-5 rounded-lg shadow-sm">
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
  );
}

export default memo(Headers);
