import React from "react";
import { Flame, Clock, AlertCircle, Zap, ChevronRight } from "lucide-react";
function TrendingTopics() {
  const trendingTopics = [
    {
      name: "AI Regulation",
      count: 42,
      icon: <Zap className="h-4 w-4 text-purple-500" />,
    },
    {
      name: "Remote Work",
      count: 38,
      icon: <Clock className="h-4 w-4 text-blue-500" />,
    },
    {
      name: "Climate Change",
      count: 35,
      icon: <Flame className="h-4 w-4 text-orange-500" />,
    },
    {
      name: "Mental Health",
      count: 28,
      icon: <AlertCircle className="h-4 w-4 text-green-500" />,
    },
  ];
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Flame className="h-5 w-5 text-orange-500" />
        Trending Topics
      </h3>
      <div className="space-y-3">
        {trendingTopics.map((topic, index) => (
          <div
            key={index}
            className="flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 p-2 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-2">
              {topic.icon}
              <span className="text-gray-700 dark:text-gray-300">
                {topic.name}
              </span>
            </div>
            <span className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
              {topic.count} opinions
            </span>
          </div>
        ))}
        <button className="w-full flex items-center justify-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mt-2 transition-colors">
          View all trending topics <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  );
}

export default TrendingTopics;
