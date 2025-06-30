import React from "react";
import {
  ChevronDown,
  Heart,
  Clock,
  Eye,
  ArrowRight,
  BookOpen,
  PlayCircle,
  Share2,
} from "lucide-react";
function Content(props) {
  const { activeTab, toggleSaveItem, savedItems } = props;
  return (
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
                    className={`w-4 h-4 ${savedItems[i] ? "fill-red-500" : ""}`}
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
  );
}

export default Content;
