import React, { memo } from "react";
import {
  FileText,
  Video,
  ChevronRight,
  Zap,
  Users as CommunityIcon,
  Bell,
} from "lucide-react";
function QuickActions() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <Zap className="h-5 w-5 text-orange-500" />
          Quick Actions
        </h2>
      </div>
      <div className="p-5">
        <div className="space-y-3">
          <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <span className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-blue-500" />
              <span>Write New Opinion</span>
            </span>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </button>
          <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <span className="flex items-center gap-3">
              <Video className="h-5 w-5 text-red-500" />
              <span>Share a Video</span>
            </span>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </button>
          <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <span className="flex items-center gap-3">
              <CommunityIcon className="h-5 w-5 text-purple-500" />
              <span>Start Discussion</span>
            </span>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </button>
          <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <span className="flex items-center gap-3">
              <Bell className="h-5 w-5 text-yellow-500" />
              <span>Notification Settings</span>
            </span>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(QuickActions);
