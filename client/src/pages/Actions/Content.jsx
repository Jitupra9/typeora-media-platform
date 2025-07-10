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
function Content(props) {
  const interactions = props.interactions;
  return (
    <div className="lg:col-span-2 space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="  p-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
          <h2 className="text-xl font-semibold flex items-center gap-3">
            <Heart className="h-5 w-5 text-pink-500" />
            Your Engagements
            <span className=" truncate ml-auto text-sm bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded-full">
              {interactions.engagements.length} activities
            </span>
          </h2>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {interactions.engagements.map((item) => (
            <div
              key={item.id}
              className="p-5 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                    {item.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium truncate">{item.title}</h3>
                    <span className="flex-shrink-0 text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full">
                      {item.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" /> {item.author}
                    </span>
                    <span className="flex items-center gap-1 truncate">
                      <Clock className="h-4 w-4" /> {item.timestamp}
                    </span>
                    <span className="flex items-center gap-1">
                      {item.actionIcon} {item.action}
                    </span>
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {item.preview}
                  </p>
                  {item.yourComment && (
                    <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-900/30">
                      <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                        Your comment:
                      </p>
                      <p className="mt-1 text-gray-700 dark:text-gray-300">
                        {item.yourComment}
                      </p>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      >
                        <Hash className="h-3 w-3 mr-1" /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
          <h2 className="text-xl font-semibold flex items-center gap-3">
            <FileText className="h-5 w-5 text-blue-500" />
            Your Contributions
            <span className="ml-auto text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full">
              {interactions.contributions.length} items
            </span>
          </h2>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {interactions.contributions.map((item) => (
            <div
              key={item.id}
              className="p-5 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
                    {item.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 flex items-center gap-3">
                    <span className="flex items-center gap-1 ">
                      <Clock className="h-4 w-4" /> {item.timestamp}
                    </span>
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {item.preview}
                  </p>
                  <div className="flex gap-4 mt-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                      <ThumbsUp className="h-4 w-4 text-green-500" />{" "}
                      {item.stats.likes}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                      <MessageSquare className="h-4 w-4 text-blue-500" />{" "}
                      {item.stats.comments}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                      <Share2 className="h-4 w-4 text-indigo-500" />{" "}
                      {item.stats.shares}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      >
                        <Hash className="h-3 w-3 mr-1" /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(Content);
