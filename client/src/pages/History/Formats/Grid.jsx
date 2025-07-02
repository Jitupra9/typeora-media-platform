import React, { memo } from "react";
import Sports from "../../../assets/images/sports.jpg";
import {
  Eye,
  Bookmark,
  Heart,
  MessageSquare,
  Share2,
  Play,
  Star,
  TrendingUp,
} from "lucide-react";
function Grid(props) {
  const {
    paginatedHistory,
    selectedItems,
    toggleSelectItem,
    toggleFavorite,
    typeIcons,
    formatRelativeTime,
  } = props;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {paginatedHistory.map((item) => (
        <div
          key={item.id}
          className={`bg-white dark:bg-gray-800 dark:bg-opacity-55 group relative rounded-xl overflow-hidden border ${
            selectedItems.includes(item.id)
              ? "border-blue-300 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-900/20"
              : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
          } transition-all duration-200 shadow-sm hover:shadow-md`}
        >
          <div className="absolute top-3 left-3 z-10 ">
            <input
              type="checkbox"
              checked={selectedItems.includes(item.id)}
              onChange={() => toggleSelectItem(item.id)}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
          </div>
          <div className="absolute top-3 right-3 z-10 flex gap-1">
            {item.isTrending && (
              <div className="p-1 bg-yellow-100 dark:bg-yellow-900/50 rounded-full">
                <TrendingUp className="w-3 h-3 text-yellow-600 dark:text-yellow-300" />
              </div>
            )}
            <button
              onClick={(e) => toggleFavorite(item.id, e)}
              className={`p-1 rounded-full ${
                item.isFavorite
                  ? "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-500"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-400"
              }`}
            >
              <Star
                className="w-3 h-3"
                fill={item.isFavorite ? "currentColor" : "none"}
              />
            </button>
          </div>
          {item.images && (
            <div className=" relative aspect-video overflow-hidden">
              <img
                src={Sports || item.images}
                alt=""
                className="w-full h-full  object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {item.type === "video" && (
                <>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 p-3 rounded-full">
                      <Play size={20} className="text-gray-800" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                    {item.duration}
                  </div>
                  {item.watchedPercent && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700">
                      <div
                        className="h-full bg-blue-500"
                        style={{ width: `${item.watchedPercent}%` }}
                      ></div>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
          <div className="p-4  bg-opacity-35 dark:bg-opacity-50">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">{typeIcons[item.type]}</div>
              <div className="min-w-0">
                <h3 className="font-medium  text-gray-900 dark:text-white line-clamp-2">
                  {item.title || item.action}
                </h3>
                {item.preview && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                    {item.preview}
                  </p>
                )}
                {item.details && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {item.details}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2">
                {item.category && (
                  <span className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                    {item.category}
                  </span>
                )}
                {item.readTime && (
                  <span className="text-gray-500 dark:text-gray-400">
                    {item.readTime} read
                  </span>
                )}
              </div>

              <div className="text-gray-500 dark:text-gray-400">
                {formatRelativeTime(item.date)}
              </div>
            </div>
            {(item.views || item.likes || item.comments) && (
              <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                {item.views && (
                  <span className="flex items-center gap-1">
                    <Eye size={12} />
                    {item.views.toLocaleString()}
                  </span>
                )}
                {item.likes && (
                  <span className="flex items-center gap-1">
                    <Heart size={12} />
                    {item.likes.toLocaleString()}
                  </span>
                )}
                {item.comments && (
                  <span className="flex items-center gap-1">
                    <MessageSquare size={12} />
                    {item.comments.toLocaleString()}
                  </span>
                )}
              </div>
            )}
          </div>
          <div className="absolute top-3 left-8 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="p-1.5 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <Bookmark size={16} />
            </button>
            <button className="p-1.5 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <Share2 size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default memo(Grid);
