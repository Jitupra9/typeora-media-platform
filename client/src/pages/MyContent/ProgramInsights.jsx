import React, { memo } from "react";
import sports from "../../assets/images/sports.jpg";
import {
  Eye,
  Heart,
  MessageSquare,
  BarChart2,
  TrendingUp,
  Users,
} from "lucide-react";
function ProgramInsights(props) {
  const { activeTab, performanceData } = props;
  return (
    <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Performance Insights
        </h3>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
            Last 7 days
          </button>
          <button className="px-3 py-1 text-sm rounded-lg bg-blue-600 text-white">
            Last 30 days
          </button>
          <button className="px-3 py-1 text-sm rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
            Last 90 days
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
            Top Performing {activeTab}
          </h4>
          <div className="space-y-3">
            {performanceData.topContent.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg"
              >
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {index + 1}
                </span>
                {(item.image || item.thumbnail) && (
                  <div className="flex-shrink-0 w-12 h-12 rounded-md overflow-hidden">
                    <img
                      src={sports || item.image || item.thumbnail}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {item.title}
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <Eye size={12} />
                      {item.views.toLocaleString()} views
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <Heart size={12} />
                      {item.likes.toLocaleString()} likes
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <MessageSquare size={12} />
                      {item.comments.toLocaleString()} comments
                    </p>
                  </div>
                </div>
                <div className="text-xs font-medium text-green-500 dark:text-green-400">
                  +{Math.floor(Math.random() * 30) + 10}%
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={16} className="text-green-500" />
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Views (30 days)
                </h4>
              </div>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                {performanceData.viewsLast30Days.toLocaleString()}
              </p>
              <p className="text-xs text-green-500 dark:text-green-400 mt-1">
                +{performanceData.audienceGrowth}% from last period
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Users size={16} className="text-blue-500" />
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  New Followers
                </h4>
              </div>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                243
              </p>
              <p className="text-xs text-green-500 dark:text-green-400 mt-1">
                +12% from last month
              </p>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
              Engagement Overview
            </h4>
            <div className="h-40 flex items-center justify-center">
              <div className="text-center">
                <BarChart2
                  size={24}
                  className="mx-auto text-gray-400 dark:text-gray-500 mb-2"
                />
                <p className="text-gray-400 dark:text-gray-500 text-sm">
                  Engagement chart visualization would appear here
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>Views</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Likes</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span>Comments</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <span>Shares</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ProgramInsights);
