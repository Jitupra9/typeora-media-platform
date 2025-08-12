import React from "react";
import {
  Search,
  MessageSquare,
  TrendingUp,
  Hash,
  ThumbsUp,
  ThumbsDown,
  Share2,
  Sparkles,
  Bookmark,
  Plus,
  Filter,
  ChevronDown,
  Grid as LayoutGrid,
  Flame,
  Clock,
  AlertCircle,
  Users,
  Award,
  Zap,
  BarChart2,
  Bell,
  User,
  Heart,
  Eye,
  MoreHorizontal,
  Send,
  BookOpen,
  Tag,
} from "lucide-react";
function RightContainer({ trendingTags, suggestedPeople }) {
  return (
    <div
      className=" pb-10 lg:pb-5 space-y-6"
      style={{ willChange: "transform" }}
    >
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4">
        <h3 className="font-medium mb-4 flex items-center gap-2">
          <Flame size={18} className="text-orange-500" />
          Trending Topics
        </h3>
        <div className="space-y-4">
          {trendingTags.map((tag, index) => (
            <div key={index} className="flex justify-between items-center">
              <div>
                <p className="font-medium">#{tag.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {tag.posts.toLocaleString()} posts
                </p>
              </div>
              <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4">
        <h3 className="font-medium mb-4 flex items-center gap-2">
          <User size={18} className="text-blue-500" />
          Suggested Experts
        </h3>
        <div className="space-y-4">
          {suggestedPeople.map((person) => (
            <div key={person.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  {person.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{person.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {person.bio}
                  </p>
                </div>
              </div>
              <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-colors">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4">
        <h3 className="font-medium mb-3 flex items-center gap-2">
          <AlertCircle size={18} className="text-green-500" />
          Community Guidelines
        </h3>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li className="flex items-start gap-2">
            <span className="text-green-500">•</span>
            <span>Respect diverse viewpoints</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">•</span>
            <span>Back claims with evidence when possible</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">•</span>
            <span>No hate speech or harassment</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">•</span>
            <span>Flag inappropriate content</span>
          </li>
        </ul>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4">
        <h3 className="font-medium mb-4 flex items-center gap-2">
          <BarChart2 size={18} className="text-purple-500" />
          Poll of the Day
        </h3>
        <p className="text-sm mb-4">
          Do you think AI will improve social media moderation?
        </p>
        <div className="space-y-2 mb-4">
          <button className="w-full text-left px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600">
            Yes, significantly
          </button>
          <button className="w-full text-left px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600">
            Somewhat
          </button>
          <button className="w-full text-left px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600">
            No, human oversight is essential
          </button>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          1,428 votes • 1 day left
        </p>
      </div>
    </div>
  );
}

export default RightContainer;
