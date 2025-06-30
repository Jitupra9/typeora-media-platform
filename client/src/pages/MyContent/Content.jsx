import React, { memo } from "react";
import sports from "../../assets/images/sports.jpg";
import {
  Play,
  Share2,
  Edit,
  MoreVertical,
  Eye,
  Heart,
  MessageSquare,
  Calendar,
  Bookmark,
  Tag,
} from "lucide-react";
function Content(props) {
  const {
    sortedContent,
    selectedItems,
    activeTab,
    toggleSelectItem,
    formatDate,
    formatRelativeTime,
  } = props;
  const getStatusColor = (status) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "draft":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "unlisted":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "scheduled":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "ended":
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };
  return (
    <div className="space-y-4">
      {sortedContent.map((item) => (
        <div
          key={item.id}
          className={`group relative rounded-xl overflow-hidden border ${
            selectedItems.includes(item.id)
              ? "border-blue-300 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-900/20"
              : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
          } transition-all duration-200 shadow-sm hover:shadow-md`}
        >
          <div className="flex flex-col sm:flex-row">
            {(item.image || item.thumbnail) && activeTab !== "opinions" && (
              <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0">
                <img
                  src={sports || item.image || item.thumbnail}
                  alt=" this is not found"
                  className="w-full h-full object-cover"
                />
                {activeTab === "videos" && (
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
                {activeTab === "live" && item.isUpcoming && (
                  <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                    Upcoming
                  </div>
                )}
              </div>
            )}
            <div className="flex-1 p-4">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => toggleSelectItem(item.id)}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    {item.isFeatured && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {item.preview}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-0.5 text-xs rounded-full ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                  <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <MoreVertical size={16} />
                  </button>
                </div>
              </div>
              {item.tags && item.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 flex items-center gap-1"
                    >
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                  <Calendar size={12} />
                  <span>
                    {formatDate(item.date)} • {formatRelativeTime(item.date)}
                  </span>
                </div>
                {item.category && (
                  <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                    {item.category}
                  </span>
                )}
                {item.readTime && (
                  <span className="text-gray-500 dark:text-gray-400">
                    {item.readTime} read
                  </span>
                )}
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                {item.views > 0 && (
                  <span className="flex items-center gap-1">
                    <Eye size={12} />
                    {item.views.toLocaleString()} views
                  </span>
                )}
                {item.likes > 0 && (
                  <span className="flex items-center gap-1">
                    <Heart size={12} />
                    {item.likes.toLocaleString()} likes
                  </span>
                )}
                {item.comments > 0 && (
                  <span className="flex items-center gap-1">
                    <MessageSquare size={12} />
                    {item.comments.toLocaleString()} comments
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              className="p-1.5 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              title="Bookmark"
            >
              <Bookmark size={16} />
            </button>
            <button
              className="p-1.5 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              title="Share"
            >
              <Share2 size={16} />
            </button>
            <button
              className="p-1.5 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              title="Edit"
            >
              <Edit size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default memo(Content);
