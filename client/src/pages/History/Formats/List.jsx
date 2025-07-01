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
function List(props) {
  const {
    paginatedHistory,
    selectedItems,
    toggleSelectItem,
    toggleFavorite,
    typeIcons,
    formatDate,
  } = props;
  return (
    <div className="space-y-3">
      {paginatedHistory.map((item) => (
        <div
          key={item.id}
          className={`group flex items-start gap-4 p-4 rounded-lg border ${
            selectedItems.includes(item.id)
              ? "border-blue-300 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-900/20"
              : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50"
          } transition-colors shadow-sm hover:shadow-md`}
        >
          <input
            type="checkbox"
            checked={selectedItems.includes(item.id)}
            onChange={() => toggleSelectItem(item.id)}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />

          <div className="flex flex-col gap-1">
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
            <div className="flex-shrink-0 w-24 h-16 rounded-md overflow-hidden relative">
              <img
                src={Sports || item.images}
                alt=""
                className="w-full h-full object-cover"
              />
              {item.type === "video" && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Play size={16} className="text-white" />
                </div>
              )}
            </div>
          )}

          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start gap-2">
              <div>
                <div className="flex items-center gap-2">
                  {typeIcons[item.type]}
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {item.title || item.action}
                  </h3>
                </div>
                {item.preview && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-1">
                    {item.preview}
                  </p>
                )}
                {item.details && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {item.details}
                  </p>
                )}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                {formatDate(item.date)}
              </div>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
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
              {item.duration && (
                <span className="text-gray-500 dark:text-gray-400">
                  {item.duration}
                </span>
              )}
            </div>
            {(item.views || item.likes || item.comments) && (
              <div className="mt-2 flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
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
          <div className="flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="p-1.5 bg-white dark:bg-gray-700 rounded-full shadow-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <Bookmark size={16} />
            </button>
            <button className="p-1.5 bg-white dark:bg-gray-700 rounded-full shadow-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <Share2 size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default memo(List);
