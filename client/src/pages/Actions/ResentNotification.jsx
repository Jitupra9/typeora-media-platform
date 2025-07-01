import React, { memo } from "react";
import { ThumbsUp, MessageSquare, Users, Bell } from "lucide-react";
function ResentNotification() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <Bell className="h-5 w-5 text-yellow-500" />
          Recent Notifications
        </h2>
      </div>
      <div className="p-5">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="mt-1 flex-shrink-0">
              <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30">
                <ThumbsUp className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">
                EcoWarrior liked your opinion
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                "The future of renewable energy"
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                2 hours ago
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 flex-shrink-0">
              <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
                <MessageSquare className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">
                TechEnthusiast replied to your comment
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                "Great point about state management!"
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                5 hours ago
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 flex-shrink-0">
              <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/30">
                <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <div>
              <p className="text-sm font-medium">
                New participants joined your discussion
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                "Monthly Tech Debate" now has 24 participants
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                1 day ago
              </p>
            </div>
          </div>
        </div>
        <button className="w-full mt-4 text-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
          View all notifications
        </button>
      </div>
    </div>
  );
}

export default memo(ResentNotification);
