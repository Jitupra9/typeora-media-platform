import React, { memo } from "react";
import {
  ChevronDown,
  Info,
  Heart,
  Clock,
  Activity,
  Eye,
  MousePointerClick,
  Calendar,
  Clock as TimeIcon,
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
function RecentActivity() {
  return (
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
          <h3 className="text-blue-500 dark:text-blue-400">Article in News</h3>
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
  );
}

export default memo(RecentActivity);
