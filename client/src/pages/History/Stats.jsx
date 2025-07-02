import React, { memo } from "react";
import {
  X,
  BookOpen,
  User,
  Video,
  MessageCircle,
  TrendingUp,
} from "lucide-react";
function Stats(props) {
  const { setShowStats, historyData, formatRelativeTime, typeIcons } = props;
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Your Activity Summary
        </h3>
        <button
          onClick={() => setShowStats(false)}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <X size={20} />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 rounded-lg p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-full">
              <BookOpen
                size={20}
                className="text-blue-600 dark:text-blue-300"
              />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Articles
              </p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                {historyData.filter((i) => i.type === "article").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/30 rounded-lg p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 dark:bg-red-800 rounded-full">
              <Video size={20} className="text-red-600 dark:text-red-300" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Videos</p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                {historyData.filter((i) => i.type === "video").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30 rounded-lg p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 dark:bg-purple-800 rounded-full">
              <MessageCircle
                size={20}
                className="text-purple-600 dark:text-purple-300"
              />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Opinions
              </p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                {historyData.filter((i) => i.type === "opinion").length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/30 rounded-lg p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 dark:bg-green-800 rounded-full">
              <User size={20} className="text-green-600 dark:text-green-300" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Profile Edits
              </p>
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                {historyData.filter((i) => i.type === "profile").length}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
          Recent Activity
        </h4>
        <div className="space-y-3">
          {historyData.slice(0, 3).map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <div className="relative">
                  {typeIcons[item.type]}
                  {item.isTrending && (
                    <TrendingUp
                      className="absolute -top-1 -right-1 text-yellow-500 bg-white rounded-full p-0.5"
                      size={12}
                    />
                  )}
                </div>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {item.title || item.action}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {formatRelativeTime(item.date)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(Stats);
