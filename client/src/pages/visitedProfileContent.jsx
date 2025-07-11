import React, { useState } from "react";
import {
  User,
  BookOpen,
  Video,
  MessageCircle,
  Zap,
  BarChart2,
  Users,
  Heart,
  MessageSquare,
  Share2,
  Bookmark,
  MoreVertical,
  Globe,
  Briefcase,
  Award,
  Clock,
  Mail,
  Github,
  Twitter,
  Linkedin,
  Star,
  Calendar,
  Eye,
  ChevronDown,
  Filter,
  Plus,
  CheckCircle,
  Settings,
  Play,
  Award as BadgeIcon,
  Clock as RecentIcon,
  TrendingUp,
  Zap as LightningIcon,
  Bookmark as CollectionIcon,
} from "lucide-react";

const VisitorProfile = ({ user = {} }) => {
  const [activeTab, setActiveTab] = useState("articles");
  const [isFollowing, setIsFollowing] = useState(false);
  const [bookmarkedItems, setBookmarkedItems] = useState([]);
  const [sortBy, setSortBy] = useState("recent");
  const [showCollections, setShowCollections] = useState(false);

  const defaultUser = {
    name: "Anonymous User",
    avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
    jobTitle: "Developer",
    location: "Unknown",
    email: "user@example.com",
    bio: "This user hasn't written a bio yet.",
    isPro: false,
    stats: {
      followers: 0,
      following: 0,
      views: 0,
      engagementRate: 0,
      avgReadTime: "0 min",
      topTags: [],
    },
  };

  const [contentData] = useState({
    articles: [
      {
        id: 1,
        title: "Advanced State Management in React 2023",
        preview: "Exploring modern state solutions beyond Redux...",
        date: "2023-06-15",
        views: 8924,
        likes: 642,
        comments: 42,
        readTime: "8 min",
        image: "https://source.unsplash.com/random/600x400/?react,code",
        isFeatured: true,
        tags: ["react", "frontend"],
      },
      // 2 more sample articles...
    ],
    videos: [
      {
        id: 4,
        title: "Building Microfrontends with Module Federation",
        preview: "Complete walkthrough of Webpack 5 Module Federation...",
        date: "2023-06-10",
        views: 12500,
        likes: 854,
        comments: 63,
        duration: "22:18",
        thumbnail:
          "https://source.unsplash.com/random/600x400/?javascript,code",
        tags: ["webpack", "architecture"],
      },
      // 1 more sample video...
    ],
    opinions: [
      {
        id: 6,
        title: "Why TypeScript is Worth the Effort",
        preview: "My experience adopting TypeScript in large codebases...",
        date: "2023-06-05",
        views: 7542,
        likes: 521,
        comments: 87,
        image: "https://source.unsplash.com/random/600x400/?typescript",
        tags: ["typescript", "opinion"],
      },
    ],
    live: [],
  });

  const mergedUser = {
    ...defaultUser,
    ...user,
    stats: {
      ...defaultUser.stats,
      ...(user.stats || {}), // Safely merge stats if they exist
    },
  };
  const userStats = {
    ...mergedUser.stats,
    engagementRate: 12.5,
    avgReadTime: "5 min 24 sec",
    topTags: ["react", "javascript", "typescript"],
  };

  const toggleFollow = () => setIsFollowing(!isFollowing);
  const toggleBookmark = (id) => {
    setBookmarkedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const renderContent = () => {
    const content = [...contentData[activeTab]].sort((a, b) => {
      if (sortBy === "recent") return new Date(b.date) - new Date(a.date);
      if (sortBy === "popular") return b.views - a.views;
      if (sortBy === "likes") return b.likes - a.likes;
      return 0;
    });

    return (
      <div className="space-y-4">
        {content.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            <p>No {activeTab} published yet</p>
            <p className="text-sm mt-2">Check back later for new content</p>
          </div>
        ) : (
          content.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-xl p-4 border border-gray-200 dark:border-gray-700 
              hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 
              bg-white dark:bg-gray-800 hover:shadow-md"
            >
              {/* Featured badge */}
              {item.isFeatured && (
                <div
                  className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 
                bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 
                text-xs rounded-full"
                >
                  <Star size={12} />
                  Featured
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                {(item.image || item.thumbnail) && (
                  <div className="w-full sm:w-40 h-40 flex-shrink-0 relative rounded-lg overflow-hidden">
                    <img
                      src={item.image || item.thumbnail}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    {activeTab === "videos" && (
                      <>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <div className="bg-white/90 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                            <Play size={20} className="text-gray-800" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                          {item.duration}
                        </div>
                      </>
                    )}
                  </div>
                )}

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-lg text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <button
                      onClick={() => toggleBookmark(item.id)}
                      className={`p-1 rounded-full ${
                        bookmarkedItems.includes(item.id)
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                      }`}
                    >
                      <Bookmark size={18} />
                    </button>
                  </div>

                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    {item.preview}
                  </p>

                  {/* Tags */}
                  {item.tags && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Meta info */}
                  <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {item.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Eye size={14} />
                      {item.views.toLocaleString()} views
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Heart size={14} />
                      {item.likes.toLocaleString()} likes
                    </span>
                    {item.comments > 0 && (
                      <>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MessageCircle size={14} />
                          {item.comments} comments
                        </span>
                      </>
                    )}
                    {item.readTime && (
                      <>
                        <span>•</span>
                        <span>{item.readTime} read</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 dark:border-blue-600"
                src={user.avatar}
                alt="Profile"
              />
              <div className="absolute bottom-0 right-0 bg-green-500 rounded-full w-5 h-5 border-2 border-white dark:border-gray-800"></div>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {user.name}
                </h1>
                {user.isPro && (
                  <span className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-full">
                    <BadgeIcon size={14} />
                    Pro Member
                  </span>
                )}
              </div>
              <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <Briefcase size={16} />
                  {user.jobTitle}
                </span>
                <span className="flex items-center gap-1">
                  <Globe size={16} />
                  {user.location}
                </span>
                <span className="flex items-center gap-1">
                  <Mail size={16} />
                  {user.email}
                </span>
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={toggleFollow}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-colors ${
                isFollowing
                  ? "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {isFollowing ? (
                <>
                  <CheckCircle size={18} />
                  Following
                </>
              ) : (
                <>
                  <Plus size={18} />
                  Follow
                </>
              )}
            </button>
            <button className="p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">
              <MoreVertical
                size={20}
                className="text-gray-700 dark:text-gray-300"
              />
            </button>
          </div>
        </div>

        {/* Bio */}
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          {user.bio ||
            "Full stack developer passionate about creating beautiful, functional web experiences. Open source contributor and tech educator."}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
            <p className="text-sm text-gray-500 dark:text-gray-400">Articles</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {contentData.articles.length}
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Followers
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {userStats.followers.toLocaleString()}
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Engagement
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {userStats.engagementRate}%
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Avg. Read Time
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {userStats.avgReadTime}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mt-8 flex flex-col lg:flex-row gap-6">
        {/* Left Column - Content */}
        <div className="w-full lg:w-2/3 space-y-6">
          {/* Content Navigation */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-2">
              {[
                { id: "articles", label: "Articles", icon: BookOpen },
                { id: "videos", label: "Videos", icon: Video },
                { id: "opinions", label: "Opinions", icon: MessageCircle },
                { id: "live", label: "Live Streams", icon: Zap },
                {
                  id: "collections",
                  label: "Collections",
                  icon: CollectionIcon,
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
                  }`}
                >
                  <tab.icon size={16} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {activeTab === "articles" && "Published Articles"}
                {activeTab === "videos" && "Video Tutorials"}
                {activeTab === "opinions" && "Opinion Pieces"}
                {activeTab === "live" && "Live Streams"}
                {activeTab === "collections" && "Content Collections"}
              </h2>

              <div className="flex gap-2">
                <div className="relative">
                  <select
                    className="appearance-none pl-3 pr-8 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="recent">Most Recent</option>
                    <option value="popular">Most Popular</option>
                    <option value="likes">Most Liked</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400 pointer-events-none" />
                </div>
                <button className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                  <Filter
                    size={18}
                    className="text-gray-700 dark:text-gray-300"
                  />
                </button>
              </div>
            </div>

            {renderContent()}
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="w-full lg:w-1/3 space-y-6">
          {/* Popular Tags */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-4">
              <TrendingUp size={20} className="text-blue-500" />
              Popular Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {userStats.topTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full text-sm flex items-center gap-1"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-4">
              <Share2 size={20} className="text-blue-500" />
              Connect
            </h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <Github
                  size={20}
                  className="text-gray-800 dark:text-gray-300"
                />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <Twitter size={20} className="text-blue-400" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <Linkedin size={20} className="text-blue-600" />
              </a>
            </div>
          </div>

          {/* Recent Achievements */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-4">
              <Award size={20} className="text-yellow-500" />
              Recent Achievements
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <Star
                    size={16}
                    className="text-blue-500 dark:text-blue-400"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    Top Contributor
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    June 2023
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <LightningIcon
                    size={16}
                    className="text-purple-500 dark:text-purple-400"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    Fastest Growing
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    This Month
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Content */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-4">
              <TrendingUp size={20} className="text-green-500" />
              Most Popular
            </h3>
            <div className="space-y-4">
              {[...contentData.articles, ...contentData.videos]
                .sort((a, b) => b.views - a.views)
                .slice(0, 3)
                .map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
                  >
                    {(item.image || item.thumbnail) && (
                      <img
                        src={item.image || item.thumbnail}
                        alt=""
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                    )}
                    <div>
                      <h4 className="font-medium text-sm text-gray-800 dark:text-gray-200 line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {item.views.toLocaleString()} views
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const sampleUser = {
  name: "Alex Johnson",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  jobTitle: "Senior Full Stack Developer",
  location: "San Francisco, CA",
  email: "alex.johnson@example.com",
  bio: "Passionate about React, TypeScript, and building scalable web applications. Open source contributor and tech educator.",
  isPro: true,
  stats: {
    followers: 1342,
    following: 543,
    views: 12500,
    engagementRate: 12.5,
    avgReadTime: "5 min 24 sec",
    topTags: ["react", "javascript", "typescript", "webdev", "frontend"],
  },
};

export default VisitorProfile;
