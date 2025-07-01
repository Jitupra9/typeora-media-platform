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
function CommunityActivity(props) {
  const interactions = props.interactions;
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
        <h2 className="text-xl font-semibold flex items-center gap-3">
          <CommunityIcon className="h-5 w-5 text-purple-500" />
          Community Activity
        </h2>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {interactions.community.map((item) => (
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
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" /> {item.participants}{" "}
                    participants
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" /> {item.timestamp}
                  </span>
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  {item.preview}
                </p>
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
  );
}

export default memo(CommunityActivity);
