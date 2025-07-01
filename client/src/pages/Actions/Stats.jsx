import React, { memo } from "react";
import { TrendingUp } from "lucide-react";
function Stats(props) {
  const stats = props.stats;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {stat.name}
              </p>
              <p className="mt-1 text-2xl font-semibold">{stat.value}</p>
            </div>
            <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700">
              {stat.icon}
            </div>
          </div>
          <p className="mt-3 text-sm text-green-600 dark:text-green-400 flex items-center">
            <TrendingUp className="h-4 w-4 mr-1" />
            {stat.change} this week
          </p>
        </div>
      ))}
    </div>
  );
}

export default memo(Stats);
