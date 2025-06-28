import React from "react";
import {
  Search,
  MessageSquare,
  TrendingUp,
  Hash,
  ThumbsUp,
  ThumbsDown,
  Share2,
  Bookmark,
  Plus,
  Filter,
  ChevronDown,
  Flame,
  Clock,
  AlertCircle,
  BarChart2,
  Users,
  Award,
  Zap,
  ChevronRight,
  Sparkles,
} from "lucide-react";
function TopConributers() {
  const popularAuthors = [
    { name: "JaneDoe", contributions: 24, badge: "expert" },
    { name: "EcoWarrior", contributions: 18, badge: "top-contributor" },
    { name: "TechEnthusiast", contributions: 15, badge: "regular" },
    { name: "FinanceGuru", contributions: 12, badge: "expert" },
  ];
  const getBadgeIcon = (badge) => {
    switch (badge) {
      case "expert":
        return <Award className="h-4 w-4 text-yellow-500" />;
      case "top-contributor":
        return <Zap className="h-4 w-4 text-purple-500" />;
      case "regular":
        return <Users className="h-4 w-4 text-blue-500" />;
      default:
        return null;
    }
  };
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Award className="h-5 w-5 text-yellow-500" />
        Top Contributors
      </h3>
      <div className="space-y-4">
        {popularAuthors.map((author, index) => (
          <div
            key={index}
            className="flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 p-2 rounded-lg transition-colors"
          >
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-center text-white text-sm font-medium">
              {author.name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium">{author.name}</span>
                {getBadgeIcon(author.badge)}
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {author.contributions} contributions
              </span>
            </div>
          </div>
        ))}
        <button className="w-full flex items-center justify-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mt-2 transition-colors">
          View all contributors <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  );
}

export default TopConributers;
