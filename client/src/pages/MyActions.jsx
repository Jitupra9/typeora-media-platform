import React from "react";
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

function MyActions() {
  // Sample data for different action types
  const interactions = {
    engagements: [
      {
        id: 1,
        type: "opinion",
        title: "The future of renewable energy",
        author: "EcoWarrior",
        timestamp: "2 hours ago",
        icon: <FileText className="h-5 w-5 text-blue-500" />,
        preview:
          "Solar and wind are becoming more cost-effective than fossil fuels...",
        tags: ["environment", "energy"],
        action: "liked",
        actionIcon: <ThumbsUp className="h-4 w-4 text-green-500" />,
      },
      {
        id: 2,
        type: "video",
        title: "React 18 New Features",
        author: "CodeMaster",
        timestamp: "1 day ago",
        icon: <Video className="h-5 w-5 text-red-500" />,
        preview: "Exploring concurrent rendering and automatic batching...",
        tags: ["react", "programming"],
        action: "commented",
        actionIcon: <MessageSquare className="h-4 w-4 text-blue-500" />,
        yourComment: "The automatic batching feature is game-changing!",
      },
    ],
    contributions: [
      {
        id: 3,
        type: "opinion",
        title: "Why we need four-day work weeks",
        author: "You",
        timestamp: "3 days ago",
        icon: <FileText className="h-5 w-5 text-blue-500" />,
        preview:
          "After implementing this at our company, productivity increased by 20%...",
        tags: ["work", "productivity"],
        stats: {
          likes: 142,
          comments: 28,
          shares: 15,
        },
      },
    ],
    community: [
      {
        id: 4,
        type: "discussion",
        title: "Monthly Tech Debate",
        participants: 24,
        timestamp: "Ongoing",
        icon: <CommunityIcon className="h-5 w-5 text-purple-500" />,
        preview: "Join our debate on the best state management solutions...",
        tags: ["discussion", "tech"],
      },
    ],
  };

  // Stats for quick overview
  const stats = [
    {
      name: "Total Engagements",
      value: 87,
      icon: <Heart className="h-6 w-6 text-pink-500" />,
      change: "+12%",
    },
    {
      name: "Content Shared",
      value: 23,
      icon: <Share2 className="h-6 w-6 text-blue-500" />,
      change: "+5%",
    },
    {
      name: "Community Points",
      value: 450,
      icon: <Star className="h-6 w-6 text-yellow-500" />,
      change: "+32",
    },
    {
      name: "Active Streak",
      value: "14 days",
      icon: <Zap className="h-6 w-6 text-orange-500" />,
      change: "+2",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with quick actions */}
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

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {stat.name}
                  </p>
                  <p className="mt-1 text-2xl font-semibold">{stat.value}</p>
                </div>
                <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700">
                  {stat.icon}
                </div>
              </div>
              <p className="mt-3 text-sm text-green-600 dark:text-green-400 flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                {stat.change} this week
              </p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Engagements Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Engagements Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
                <h2 className="text-xl font-semibold flex items-center gap-3">
                  <Heart className="h-5 w-5 text-pink-500" />
                  Your Engagements
                  <span className="ml-auto text-sm bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded-full">
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
                          <span className="flex items-center gap-1">
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

            {/* Contributions Section */}
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
                          <span className="flex items-center gap-1">
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

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Community Section */}
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

            {/* Quick Links Section */}
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

            {/* Recent Notifications */}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyActions;
