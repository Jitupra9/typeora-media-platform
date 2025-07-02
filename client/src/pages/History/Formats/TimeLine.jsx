import React, { memo } from "react";
import Sports from "../../../assets/images/sports.jpg";
import { Calendar, Star, TrendingUp } from "lucide-react";
function TimeLine(props) {
  const {
    groupedHistory,
    selectedItems,
    toggleSelectItem,
    toggleFavorite,
    typeIcons,
    formatDate,
  } = props;
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

      <div className="space-y-8">
        {Object.entries(groupedHistory).map(([date, items]) => (
          <div key={date} className="relative pl-10">
            <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 border-4 border-white dark:border-gray-800 flex items-center justify-center">
              <Calendar
                size={14}
                className="text-blue-600 dark:text-blue-300"
              />
            </div>

            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              {date}
            </h3>
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`relative pl-6 pb-6 border-l-2 ${
                    selectedItems.includes(item.id)
                      ? "border-blue-400 dark:border-blue-600"
                      : "border-gray-200 dark:border-gray-700"
                  }`}
                >
                  <div
                    className={`absolute left-0 top-0 -ml-1.5 h-3 w-3 rounded-full ${
                      selectedItems.includes(item.id)
                        ? "bg-blue-500 dark:bg-blue-400"
                        : "bg-gray-400 dark:bg-gray-500"
                    }`}
                  ></div>
                  <div
                    className={`p-4 rounded-lg border ${
                      selectedItems.includes(item.id)
                        ? "border-blue-300 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-900/20"
                        : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                    } shadow-sm`}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          checked={selectedItems.includes(item.id)}
                          onChange={() => toggleSelectItem(item.id)}
                          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
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

                        <div>
                          <div className="flex items-center gap-2">
                            {typeIcons[item.type]}
                            <h4 className="font-medium text-gray-900 dark:text-white">
                              {item.title || item.action}
                            </h4>
                          </div>
                          {item.preview && (
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
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

                      <div className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                        {formatDate(item.date).split(",")[1].trim()}
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(TimeLine);
