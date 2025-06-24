import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Video,
  Play,
  MessageCircle,
  Plus,
  Filter,
  Search,
  Download,
  Share2,
  Edit,
  Trash2,
  MoreVertical,
  X,
  Eye,
  Heart,
  MessageSquare,
  Calendar,
  Bookmark,
  Zap,
  ChevronDown,
  BarChart2,
  TrendingUp,
  Clock,
  Users,
  Tag,
  CheckCircle,
  AlertCircle,
  Star,
} from "lucide-react";
import sports from "../assets/images/sports.jpg";
function MyContent() {
  const [activeTab, setActiveTab] = useState("articles");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [sortBy, setSortBy] = useState("recent");
  const [stats, setStats] = useState({
    totalViews: 0,
    totalLikes: 0,
    totalComments: 0,
    totalFollowers: 0,
  });

  // Filter state
  const [filters, setFilters] = useState({
    status: "all",
    dateRange: "all-time",
    category: "all",
    contentType: "all",
  });

  // Performance insights state
  const [performanceData, setPerformanceData] = useState({
    viewsLast30Days: 0,
    engagementRate: 0,
    topContent: [],
    audienceGrowth: 0,
  });

  // Sample data
  const [contentData, setContentData] = useState({
    articles: [
      {
        id: 1,
        title: "The Future of Web Development",
        preview: "Exploring emerging trends in modern web development...",
        date: "2023-06-15T14:30:00",
        views: 5245,
        likes: 342,
        comments: 28,
        category: "Technology",
        status: "published",
        readTime: "4 min",
        image: "https://source.unsplash.com/random/600x400/?web,development",
        isFeatured: true,
        tags: ["web", "trends", "javascript"],
      },
      {
        id: 2,
        title: "Sustainable UI Design Practices",
        preview: "How to create eco-friendly digital interfaces...",
        date: "2023-06-10T09:15:00",
        views: 3856,
        likes: 1024,
        comments: 42,
        category: "Design",
        status: "published",
        readTime: "6 min",
        image: "https://source.unsplash.com/random/600x400/?design,ui",
        isFeatured: false,
        tags: ["design", "sustainability"],
      },
      {
        id: 3,
        title: "Draft: React Performance Optimization",
        preview: "Advanced techniques to speed up your React apps...",
        date: "2023-06-05T11:20:00",
        views: 0,
        likes: 0,
        comments: 0,
        category: "Development",
        status: "draft",
        readTime: "8 min",
        image: "https://source.unsplash.com/random/600x400/?react,code",
        isFeatured: false,
        tags: ["react", "performance"],
      },
    ],
    videos: [
      {
        id: 4,
        title: "Building a Full-Stack App with Next.js",
        preview: "Step-by-step tutorial on creating a modern web app...",
        date: "2023-06-12T16:45:00",
        views: 8421,
        likes: 1254,
        comments: 87,
        category: "Tutorial",
        status: "published",
        duration: "24:32",
        thumbnail: "https://source.unsplash.com/random/600x400/?coding,nextjs",
        watchedPercent: 65,
        tags: ["nextjs", "fullstack"],
      },
      {
        id: 5,
        title: "CSS Grid Deep Dive",
        preview: "Mastering layout techniques with CSS Grid...",
        date: "2023-06-08T13:25:00",
        views: 6203,
        likes: 2103,
        comments: 87,
        category: "Tutorial",
        status: "published",
        duration: "32:10",
        thumbnail: "https://source.unsplash.com/random/600x400/?css,grid",
        watchedPercent: 45,
        tags: ["css", "layout"],
      },
      {
        id: 6,
        title: "Unlisted: TypeScript Best Practices",
        preview: "Professional patterns for TypeScript development...",
        date: "2023-06-01T10:15:00",
        views: 153,
        likes: 42,
        comments: 5,
        category: "Tutorial",
        status: "unlisted",
        duration: "18:45",
        thumbnail:
          "https://source.unsplash.com/random/600x400/?typescript,code",
        watchedPercent: 72,
        tags: ["typescript", "best-practices"],
      },
    ],
    live: [
      {
        id: 7,
        title: "Q&A: Ask Me Anything About React",
        preview: "Live session answering your React questions...",
        date: "2023-06-18T14:00:00",
        views: 12453,
        likes: 2845,
        comments: 423,
        category: "Live",
        status: "ended",
        duration: "1:25:10",
        thumbnail: "https://source.unsplash.com/random/600x400/?live,stream",
        isUpcoming: false,
        tags: ["react", "q&a"],
      },
      {
        id: 8,
        title: "Upcoming: Building a Design System",
        preview: "Live coding session creating a component library...",
        date: "2023-06-25T15:30:00",
        views: 0,
        likes: 0,
        comments: 0,
        category: "Live",
        status: "scheduled",
        duration: null,
        thumbnail: "https://source.unsplash.com/random/600x400/?design,system",
        isUpcoming: true,
        tags: ["design", "components"],
      },
    ],
    opinions: [
      {
        id: 9,
        title: "Why Remote Work is Here to Stay",
        preview: "My perspective on the future of work arrangements...",
        date: "2023-06-14T11:20:00",
        views: 3842,
        likes: 842,
        comments: 128,
        category: "Business",
        status: "published",
        image: "https://source.unsplash.com/random/600x400/?office,remote",
        isFeatured: true,
        tags: ["remote-work", "future"],
      },
      {
        id: 10,
        title: "The Ethics of AI Content Generation",
        preview: "Should AI-generated content be credited differently?...",
        date: "2023-06-07T17:30:00",
        views: 1532,
        likes: 456,
        comments: 84,
        category: "Technology",
        status: "published",
        image: "https://source.unsplash.com/random/600x400/?ai,ethics",
        isFeatured: false,
        tags: ["ai", "ethics"],
      },
      {
        id: 11,
        title: "Draft: Minimalism in Digital Products",
        preview: "The value of simplicity in interface design...",
        date: "2023-06-03T09:45:00",
        views: 0,
        likes: 0,
        comments: 0,
        category: "Design",
        status: "draft",
        image: "https://source.unsplash.com/random/600x400/?minimal,design",
        isFeatured: false,
        tags: ["design", "minimalism"],
      },
    ],
  });
  useEffect(() => {
    let totalViews = 0;
    let totalLikes = 0;
    let totalComments = 0;

    Object.values(contentData).forEach((contentType) => {
      contentType.forEach((item) => {
        totalViews += item.views || 0;
        totalLikes += item.likes || 0;
        totalComments += item.comments || 0;
      });
    });

    setStats({
      totalViews,
      totalLikes,
      totalComments,
      totalFollowers: 12453,
    });
    const topContent = [...contentData[activeTab]]
      .sort((a, b) => b.views - a.views)
      .slice(0, 3);

    setPerformanceData({
      viewsLast30Days: 45231,
      engagementRate: 12.5,
      topContent,
      audienceGrowth: 8.2,
    });
  }, [contentData, activeTab]);

  const filteredContent = contentData[activeTab].filter((item) => {
    const matchesStatus =
      filters.status === "all" || item.status === filters.status;
    const matchesCategory =
      filters.category === "all" || item.category === filters.category;

    if (!searchQuery) return matchesStatus && matchesCategory;

    const searchLower = searchQuery.toLowerCase();
    const searchableText = [
      item.title || "",
      item.preview || "",
      item.category || "",
      ...(item.tags || []),
    ]
      .join(" ")
      .toLowerCase();

    return (
      matchesStatus && matchesCategory && searchableText.includes(searchLower)
    );
  });

  // Sort content
  const sortedContent = [...filteredContent].sort((a, b) => {
    if (sortBy === "recent") {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === "popular") {
      return (b.views || 0) - (a.views || 0);
    } else if (sortBy === "likes") {
      return (b.likes || 0) - (a.likes || 0);
    } else if (sortBy === "comments") {
      return (b.comments || 0) - (a.comments || 0);
    }
    return 0;
  });
  const toggleSelectItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const deleteSelected = () => {
    setContentData((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].filter(
        (item) => !selectedItems.includes(item.id)
      ),
    }));
    setSelectedItems([]);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));

    if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays} days ago`;
    }
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "draft":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "unlisted":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "scheduled":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "ended":
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  const getContentIcon = () => {
    switch (activeTab) {
      case "articles":
        return <BookOpen size={18} className="text-blue-600" />;
      case "videos":
        return <Video size={18} className="text-red-600" />;
      case "live":
        return <Zap size={18} className="text-purple-600" />;
      case "opinions":
        return <MessageCircle size={18} className="text-green-600" />;
      default:
        return <BookOpen size={18} />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 dark:text-white ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            My Content Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage your published content and track performance metrics
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
            <BarChart2 size={18} />
            <span>Analytics</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-colors shadow-md">
            <Plus size={18} />
            <span>
              {activeTab === "articles" && "Write Article"}
              {activeTab === "videos" && "Upload Video"}
              {activeTab === "live" && "Schedule Live"}
              {activeTab === "opinions" && "Write Opinion"}
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
              <Eye className="text-blue-600 dark:text-blue-300" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Total Views
              </p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                {stats.totalViews.toLocaleString()}
              </p>
              <p className="text-xs text-green-500 dark:text-green-400 flex items-center mt-1">
                <TrendingUp size={12} className="mr-1" />
                +12.5% from last month
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-100 dark:bg-red-900 rounded-full">
              <Heart className="text-red-600 dark:text-red-300" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Total Likes
              </p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                {stats.totalLikes.toLocaleString()}
              </p>
              <p className="text-xs text-green-500 dark:text-green-400 flex items-center mt-1">
                <TrendingUp size={12} className="mr-1" />
                +8.3% from last month
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
              <MessageSquare
                className="text-green-600 dark:text-green-300"
                size={20}
              />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Total Comments
              </p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                {stats.totalComments.toLocaleString()}
              </p>
              <p className="text-xs text-green-500 dark:text-green-400 flex items-center mt-1">
                <TrendingUp size={12} className="mr-1" />
                +5.7% from last month
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
              <Users
                className="text-purple-600 dark:text-purple-300"
                size={20}
              />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Followers
              </p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                {stats.totalFollowers.toLocaleString()}
              </p>
              <p className="text-xs text-green-500 dark:text-green-400 flex items-center mt-1">
                <TrendingUp size={12} className="mr-1" />
                +3.2% from last month
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {[
          {
            id: "articles",
            label: "Articles",
            count: contentData.articles.length,
            icon: <BookOpen size={16} />,
          },
          {
            id: "videos",
            label: "Videos",
            count: contentData.videos.length,
            icon: <Video size={16} />,
          },
          {
            id: "live",
            label: "Live Videos",
            count: contentData.live.length,
            icon: <Zap size={16} />,
          },
          {
            id: "opinions",
            label: "Opinions",
            count: contentData.opinions.length,
            icon: <MessageCircle size={16} />,
          },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setSelectedItems([]);
              setSearchQuery("");
              setFilters({
                status: "all",
                dateRange: "all-time",
                category: "all",
                contentType: "all",
              });
            }}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
              activeTab === tab.id
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
            <span className="text-xs bg-white/20 dark:bg-black/20 px-2 py-0.5 rounded-full">
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm">
          <Clock size={16} className="text-blue-600 dark:text-blue-400" />
          <span className="text-blue-800 dark:text-blue-200">
            <strong>Avg. read time:</strong> 5 min 24 sec
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Star size={16} className="text-blue-600 dark:text-blue-400" />
          <span className="text-blue-800 dark:text-blue-200">
            <strong>Engagement rate:</strong> {performanceData.engagementRate}%
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Users size={16} className="text-blue-600 dark:text-blue-400" />
          <span className="text-blue-800 dark:text-blue-200">
            <strong>New followers:</strong> +243 this month
          </span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder={`Search ${activeTab} by title, category, or tags...`}
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`p-2 rounded-lg border flex items-center gap-1 transition-colors ${
              showFilters
                ? "bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-300"
                : "border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            <Filter size={18} />
            <span className="hidden sm:inline">Filters</span>
          </button>
        </div>

        <div className="flex gap-3 w-full sm:w-auto">
          <div className="relative">
            <select
              className="appearance-none pl-3 pr-8 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="recent">Most Recent</option>
              <option value="popular">Most Viewed</option>
              <option value="likes">Most Liked</option>
              <option value="comments">Most Comments</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>

          <div className="flex gap-1">
            <button className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
              <Download size={18} />
            </button>
            <button className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
              <Share2 size={18} />
            </button>
          </div>
        </div>
      </div>

      {showFilters && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 mb-6 border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Status
              </label>
              <select
                className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                value={filters.status}
                onChange={(e) =>
                  setFilters({ ...filters, status: e.target.value })
                }
              >
                <option value="all">All Statuses</option>
                {activeTab === "live" ? (
                  <>
                    <option value="scheduled">Scheduled</option>
                    <option value="ended">Ended</option>
                  </>
                ) : (
                  <>
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                    {activeTab === "videos" && (
                      <option value="unlisted">Unlisted</option>
                    )}
                  </>
                )}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <select
                className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                value={filters.category}
                onChange={(e) =>
                  setFilters({ ...filters, category: e.target.value })
                }
              >
                <option value="all">All Categories</option>
                {[
                  ...new Set(
                    contentData[activeTab].map((item) => item.category)
                  ),
                ].map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Content Type
              </label>
              <select
                className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                value={filters.contentType}
                onChange={(e) =>
                  setFilters({ ...filters, contentType: e.target.value })
                }
              >
                <option value="all">All Types</option>
                <option value="featured">Featured</option>
                <option value="popular">Popular</option>
                <option value="recent">Recently Updated</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Date Range
              </label>
              <select
                className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                value={filters.dateRange}
                onChange={(e) =>
                  setFilters({ ...filters, dateRange: e.target.value })
                }
              >
                <option value="all-time">All Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {selectedItems.length > 0 && (
        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3 mb-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
              {selectedItems.length} item{selectedItems.length !== 1 ? "s" : ""}{" "}
              selected
            </span>
            <button
              onClick={() => setSelectedItems([])}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm"
            >
              Clear selection
            </button>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 text-sm px-3 py-1.5 bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600">
              <Share2 size={14} />
              <span>Share</span>
            </button>
            {activeTab !== "live" && (
              <button className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 text-sm px-3 py-1.5 bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600">
                <Edit size={14} />
                <span>Edit</span>
              </button>
            )}
            <button
              onClick={deleteSelected}
              className="flex items-center gap-1 text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 text-sm px-3 py-1.5 bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600"
            >
              <Trash2 size={14} />
              <span>Delete</span>
            </button>
          </div>
        </div>
      )}

      {sortedContent.length === 0 ? (
        <div className="text-center py-16 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700">
          <div className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-600 mb-4">
            {getContentIcon()}
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            No {activeTab} found
          </h3>
          <p className="mt-1 text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            {searchQuery
              ? "No items match your search. Try different keywords or filters."
              : `You haven't created any ${activeTab} yet.`}
          </p>
          <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            {activeTab === "articles" && "Write Your First Article"}
            {activeTab === "videos" && "Upload Your First Video"}
            {activeTab === "live" && "Schedule a Live Stream"}
            {activeTab === "opinions" && "Share Your First Opinion"}
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedContent.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-xl overflow-hidden border ${
                selectedItems.includes(item.id)
                  ? "border-blue-300 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-900/20"
                  : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
              } transition-all duration-200 shadow-sm hover:shadow-md`}
            >
              <div className="flex flex-col sm:flex-row">
                {(item.image || item.thumbnail) && activeTab !== "opinions" && (
                  <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0">
                    <img
                      src={sports || item.image || item.thumbnail}
                      alt=" this is not found"
                      className="w-full h-full object-cover"
                    />
                    {activeTab === "videos" && (
                      <>
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-white/90 p-3 rounded-full">
                            <Play size={20} className="text-gray-800" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                          {item.duration}
                        </div>
                        {item.watchedPercent && (
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700">
                            <div
                              className="h-full bg-blue-500"
                              style={{ width: `${item.watchedPercent}%` }}
                            ></div>
                          </div>
                        )}
                      </>
                    )}
                    {activeTab === "live" && item.isUpcoming && (
                      <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                        Upcoming
                      </div>
                    )}
                  </div>
                )}

                {/* Content Details */}
                <div className="flex-1 p-4">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <input
                          type="checkbox"
                          checked={selectedItems.includes(item.id)}
                          onChange={() => toggleSelectItem(item.id)}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        {item.isFeatured && (
                          <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {item.preview}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-0.5 text-xs rounded-full ${getStatusColor(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>
                      <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 flex items-center gap-1"
                        >
                          <Tag size={12} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Meta Information */}
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                      <Calendar size={12} />
                      <span>
                        {formatDate(item.date)} •{" "}
                        {formatRelativeTime(item.date)}
                      </span>
                    </div>
                    {item.category && (
                      <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                        {item.category}
                      </span>
                    )}
                    {item.readTime && (
                      <span className="text-gray-500 dark:text-gray-400">
                        {item.readTime} read
                      </span>
                    )}
                  </div>

                  {/* Engagement Metrics */}
                  <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                    {item.views > 0 && (
                      <span className="flex items-center gap-1">
                        <Eye size={12} />
                        {item.views.toLocaleString()} views
                      </span>
                    )}
                    {item.likes > 0 && (
                      <span className="flex items-center gap-1">
                        <Heart size={12} />
                        {item.likes.toLocaleString()} likes
                      </span>
                    )}
                    {item.comments > 0 && (
                      <span className="flex items-center gap-1">
                        <MessageSquare size={12} />
                        {item.comments.toLocaleString()} comments
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  className="p-1.5 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  title="Bookmark"
                >
                  <Bookmark size={16} />
                </button>
                <button
                  className="p-1.5 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  title="Share"
                >
                  <Share2 size={16} />
                </button>
                <button
                  className="p-1.5 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  title="Edit"
                >
                  <Edit size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Performance Insights */}
      <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Performance Insights
          </h3>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              Last 7 days
            </button>
            <button className="px-3 py-1 text-sm rounded-lg bg-blue-600 text-white">
              Last 30 days
            </button>
            <button className="px-3 py-1 text-sm rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              Last 90 days
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
              Top Performing {activeTab}
            </h4>
            <div className="space-y-3">
              {performanceData.topContent.map((item, index) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg"
                >
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {index + 1}
                  </span>
                  {(item.image || item.thumbnail) && (
                    <div className="flex-shrink-0 w-12 h-12 rounded-md overflow-hidden">
                      <img
                        src={sports || item.image || item.thumbnail}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {item.title}
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                      <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <Eye size={12} />
                        {item.views.toLocaleString()} views
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <Heart size={12} />
                        {item.likes.toLocaleString()} likes
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <MessageSquare size={12} />
                        {item.comments.toLocaleString()} comments
                      </p>
                    </div>
                  </div>
                  <div className="text-xs font-medium text-green-500 dark:text-green-400">
                    +{Math.floor(Math.random() * 30) + 10}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp size={16} className="text-green-500" />
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Views (30 days)
                  </h4>
                </div>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {performanceData.viewsLast30Days.toLocaleString()}
                </p>
                <p className="text-xs text-green-500 dark:text-green-400 mt-1">
                  +{performanceData.audienceGrowth}% from last period
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users size={16} className="text-blue-500" />
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    New Followers
                  </h4>
                </div>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  243
                </p>
                <p className="text-xs text-green-500 dark:text-green-400 mt-1">
                  +12% from last month
                </p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                Engagement Overview
              </h4>
              <div className="h-40 flex items-center justify-center">
                <div className="text-center">
                  <BarChart2
                    size={24}
                    className="mx-auto text-gray-400 dark:text-gray-500 mb-2"
                  />
                  <p className="text-gray-400 dark:text-gray-500 text-sm">
                    Engagement chart visualization would appear here
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>Views</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Likes</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span>Comments</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <span>Shares</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tips */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Content Creation Tips
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="text-green-500" size={18} />
              <h4 className="font-medium text-gray-900 dark:text-white">
                Best Practices
              </h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Post consistently at optimal times. Our data shows your audience
              is most active on Tuesdays and Thursdays.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
            <div className="flex items-center gap-3 mb-2">
              <AlertCircle className="text-yellow-500" size={18} />
              <h4 className="font-medium text-gray-900 dark:text-white">
                Areas to Improve
              </h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your videos under 10 minutes have 25% higher completion rates.
              Consider creating more concise content.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
            <div className="flex items-center gap-3 mb-2">
              <Star className="text-purple-500" size={18} />
              <h4 className="font-medium text-gray-900 dark:text-white">
                Trending Topics
              </h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              "AI integration" and "Web3 development" are trending in your niche
              with 42% more engagement this month.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyContent;
