import React, { memo } from "react";
import { Eye, Heart, MessageSquare, TrendingUp, Users } from "lucide-react";
function MyContentStats(props) {
  const stats = props.stats;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
            <Eye className="text-blue-600 dark:text-blue-300" size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Total Views
            </p>
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
              {stats.totalViews.toLocaleString()}
            </p>
            <p className="text-xs text-green-500 dark:text-green-400 flex items-center mt-1">
              <TrendingUp size={12} className="mr-1" />
              +12.5% from last month
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-red-100 dark:bg-red-900 rounded-full">
            <Heart className="text-red-600 dark:text-red-300" size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Total Likes
            </p>
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
              {stats.totalLikes.toLocaleString()}
            </p>
            <p className="text-xs text-green-500 dark:text-green-400 flex items-center mt-1">
              <TrendingUp size={12} className="mr-1" />
              +8.3% from last month
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
            <MessageSquare
              className="text-green-600 dark:text-green-300"
              size={20}
            />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Total Comments
            </p>
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
              {stats.totalComments.toLocaleString()}
            </p>
            <p className="text-xs text-green-500 dark:text-green-400 flex items-center mt-1">
              <TrendingUp size={12} className="mr-1" />
              +5.7% from last month
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
            <Users className="text-purple-600 dark:text-purple-300" size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Followers
            </p>
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
              {stats.totalFollowers.toLocaleString()}
            </p>
            <p className="text-xs text-green-500 dark:text-green-400 flex items-center mt-1">
              <TrendingUp size={12} className="mr-1" />
              +3.2% from last month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(MyContentStats);
