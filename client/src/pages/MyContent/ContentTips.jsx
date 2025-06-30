import React, { memo } from "react";
import { CheckCircle, AlertCircle, Star } from "lucide-react";
function ContentTips() {
  return (
    <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Content Creation Tips
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="text-green-500" size={18} />
            <h4 className="font-medium text-gray-900 dark:text-white">
              Best Practices
            </h4>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Post consistently at optimal times. Our data shows your audience is
            most active on Tuesdays and Thursdays.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
          <div className="flex items-center gap-3 mb-2">
            <AlertCircle className="text-yellow-500" size={18} />
            <h4 className="font-medium text-gray-900 dark:text-white">
              Areas to Improve
            </h4>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Your videos under 10 minutes have 25% higher completion rates.
            Consider creating more concise content.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
          <div className="flex items-center gap-3 mb-2">
            <Star className="text-purple-500" size={18} />
            <h4 className="font-medium text-gray-900 dark:text-white">
              Trending Topics
            </h4>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            "AI integration" and "Web3 development" are trending in your niche
            with 42% more engagement this month.
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(ContentTips);
