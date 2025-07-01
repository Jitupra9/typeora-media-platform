import React, { memo } from "react";
import {
  ThumbsUp,
  MessageSquare,
  FileText,
  Video,
  User,
  Clock,
  Users,
  Hash,
  Heart,
  Share2,
  ChevronRight,
  Star,
  Zap,
  TrendingUp,
  Users as CommunityIcon,
  Bell,
  Settings,
  HelpCircle,
} from "lucide-react";
import Data from "./data";
import Stats from "./Stats";
import CommunityActivity from "./CommunityActivity";
import QuickActions from "./QuickActions";
import ResentNotification from "./ResentNotification";
import Content from "./Content";
function MyActions() {
  const { interactions, stats } = Data();
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                My Activity Hub
              </span>
              <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded-full">
                Active
              </span>
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Track your interactions, contributions, and community impact
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <Settings className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span>Settings</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <HelpCircle className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span>Help</span>
            </button>
          </div>
        </div>
        <Stats stats={stats} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Content interactions={interactions} />
          <div className="space-y-6">
            <CommunityActivity interactions={interactions} />
            <QuickActions />
            <ResentNotification />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(MyActions);
