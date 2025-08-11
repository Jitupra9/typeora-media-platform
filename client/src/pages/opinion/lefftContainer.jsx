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
function lefftContainer({ categories, activeCategory }) {
  return (
    <div className="lg:col-span-2 space-y-6">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4">
        <h3 className="font-medium mb-3 flex items-center gap-2">
          <LayoutGrid size={18} />
          Navigation
        </h3>
        <ul className="space-y-2">
          <li>
            <button className="w-full text-left px-3 py-2 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium flex items-center gap-3">
              <MessageSquare size={16} />
              Opinions
            </button>
          </li>
          <li>
            <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3">
              <BookOpen size={16} />
              Saved
            </button>
          </li>
          <li>
            <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3">
              <Bell size={16} />
              Notifications
            </button>
          </li>
          <li>
            <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3">
              <User size={16} />
              Profile
            </button>
          </li>
        </ul>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4">
        <h3 className="font-medium mb-3 flex items-center gap-2">
          <Tag size={18} />
          Categories
        </h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => setActiveCategory(category.id)}
                className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-3 ${
                  activeCategory === category.id
                    ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default lefftContainer;
