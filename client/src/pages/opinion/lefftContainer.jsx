import React from "react";
import {
  Sparkles,
  Zap,
  BarChart2,
  Mic2,
  CheckCircle,
  Flame,
  Hash,
  Cpu,
  CloudSun,
  Globe,
  Scale,
  TrendingUp,
  Award,
  Bookmark,
  Users,
  Clock,
} from "lucide-react";

function LeftContainer({ categories, activeCategory, setActiveCategory }) {
  // Opinion quick actions
  const opinionActions = [
    {
      label: "Create Visual Opinion",
      icon: <Sparkles size={16} className="text-purple-500" />,
      description: "Use images/videos to express your view",
    },
    {
      label: "Start Live Debate",
      icon: <Mic2 size={16} className="text-red-500" />,
      description: "Host real-time discussion",
    },
    {
      label: "Fact Check Request",
      icon: <CheckCircle size={16} className="text-green-500" />,
      description: "Verify claims with community",
    },
  ];

  // Trending opinion formats
  const trendingFormats = [
    {
      name: "Comparative Analysis",
      icon: <Scale size={16} className="text-blue-500" />,
      growth: "+32% this week",
    },
    {
      name: "Predictive Opinions",
      icon: <TrendingUp size={16} className="text-orange-500" />,
      growth: "+28% this week",
    },
    {
      name: "Personal Stories",
      icon: <Users size={16} className="text-green-500" />,
      growth: "+45% this week",
    },
  ];

  // Opinion leaderboard
  const opinionLeaders = [
    {
      name: "FactFinder",
      points: 1420,
      badge: "verified",
      trend: "up",
    },
    {
      name: "DeepDiver",
      points: 1125,
      badge: "expert",
      trend: "steady",
    },
    {
      name: "QuickThinker",
      points: 987,
      badge: "",
      trend: "up",
    },
  ];

  return (
    <div className="space-y-6 xl:pb-5" style={{ willChange: "transform" }}>
      {/* Opinion Creation Toolkit */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4">
        <h3 className="font-medium mb-3 flex items-center gap-2">
          <Zap size={18} className="text-yellow-500" />
          Opinion Toolkit
        </h3>
        <div className="space-y-3">
          {opinionActions.map((action, index) => (
            <button
              key={index}
              className="w-full text-left p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-3">
                {action.icon}
                <div>
                  <p className="font-medium">{action.label}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {action.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Trending Opinion Formats */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4">
        <h3 className="font-medium mb-3 flex items-center gap-2">
          <Flame size={18} className="text-orange-500" />
          Trending Formats
        </h3>
        <div className="space-y-3">
          {trendingFormats.map((format, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <div className="flex items-center gap-3">
                {format.icon}
                <span className="font-medium">{format.name}</span>
              </div>
              <span className="text-xs text-green-500 dark:text-green-400">
                {format.growth}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Opinion Categories */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4">
        <h3 className="font-medium mb-3 flex items-center gap-2">
          <Hash size={18} className="text-blue-500" />
          Opinion Categories
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3 py-2 rounded-md flex items-center gap-2 ${
                activeCategory === category.id
                  ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {category.icon}
              <span className="truncate">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Opinion Leaderboard */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4">
        <h3 className="font-medium mb-3 flex items-center gap-2">
          <Award size={18} className="text-yellow-500" />
          Opinion Leaders
        </h3>
        <div className="space-y-3">
          {opinionLeaders.map((leader, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xs font-medium">
                  {leader.name.charAt(0)}
                </div>
                <span className="font-medium">@{leader.name}</span>
                {leader.badge === "expert" && (
                  <Award size={14} className="text-yellow-500" />
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">
                  {leader.points.toLocaleString()}
                </span>
                {leader.trend === "up" && (
                  <TrendingUp size={14} className="text-green-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Opinion Digest */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4">
        <h3 className="font-medium mb-3 flex items-center gap-2">
          <Bookmark size={18} className="text-red-500" />
          Opinion Digest
        </h3>
        <div className="space-y-2">
          <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-sm flex items-center gap-2">
            <Clock size={14} />
            Most Discussed Today
          </button>
          <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-sm flex items-center gap-2">
            <Users size={14} />
            Polarizing Opinions
          </button>
          <button className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-sm flex items-center gap-2">
            <BarChart2 size={14} />
            Statistical Breakdowns
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeftContainer;
