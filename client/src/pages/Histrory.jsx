import React, { useState } from "react";

import {
  Clock,
  Eye,
  Bookmark,
  Heart,
  MessageSquare,
  Trash2,
  Filter,
  Search,
  X,
  Share2,
  Play,
  Calendar,
  Download,
  BarChart2,
  BookOpen,
  User,
  Video,
  MessageCircle,
  Star,
  TrendingUp,
  History as HistoryIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Sports from "../assets/images/sports.jpg";
function History() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [showStats, setShowStats] = useState(false);
  const [filters, setFilters] = useState({
    type: "all",
    date: "all-time",
    category: "all",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const historyData = [
    {
      id: 1,
      type: "article",
      title: "The Future of AI in Healthcare",
      preview:
        "Exploring how artificial intelligence is revolutionizing medical diagnostics...",
      date: "2023-06-15T14:30:00",
      views: 5245,
      likes: 342,
      comments: 28,
      category: "Technology",
      images: "https://source.unsplash.com/random/600x400/?healthcare,ai",
      readTime: "4 min",
      isFavorite: true,
      isTrending: true,
    },
    {
      id: 2,
      type: "video",
      title: "Advanced React Patterns",
      preview: "Learn modern React techniques used by top companies...",
      date: "2023-06-14T09:15:00",
      duration: "18:22",
      views: 3856,
      likes: 1024,
      comments: 42,
      category: "Development",
      images: "https://source.unsplash.com/random/600x400/?coding,react",
      watchedPercent: 85,
      isFavorite: false,
      isTrending: true,
    },
    {
      id: 3,
      type: "opinion",
      title: "Why Hybrid Work is the Future",
      preview: "My perspective on balancing remote and office work...",
      date: "2023-06-12T11:20:00",
      likes: 842,
      comments: 128,
      category: "Business",
      images: "https://source.unsplash.com/random/600x400/?office,work",
      isFavorite: true,
      isTrending: false,
    },
    {
      id: 4,
      type: "profile",
      action: "Updated profile information",
      details: "Changed bio and profile picture",
      date: "2023-06-10T16:45:00",
      category: "Account",
      isFavorite: false,
      isTrending: false,
    },
    {
      id: 5,
      type: "article",
      title: "Sustainable Cities of Tomorrow",
      preview: "How urban planning is adapting to climate change...",
      date: "2023-06-08T08:10:00",
      views: 2932,
      likes: 456,
      comments: 19,
      category: "Environment",
      images: "https://source.unsplash.com/random/600x400/?city,sustainable",
      readTime: "6 min",
      isFavorite: false,
      isTrending: true,
    },
    {
      id: 6,
      type: "video",
      title: "CSS Grid Masterclass",
      preview: "Complete guide to modern layout techniques...",
      date: "2023-06-05T13:25:00",
      duration: "32:10",
      views: 6203,
      likes: 2103,
      comments: 87,
      category: "Development",
      images: "https://source.unsplash.com/random/600x400/?css,code",
      watchedPercent: 45,
      isFavorite: true,
      isTrending: true,
    },
    {
      id: 7,
      type: "opinion",
      title: "The Ethics of AI Art",
      preview: "Should AI-generated art be considered real art?...",
      date: "2023-06-03T17:30:00",
      likes: 1532,
      comments: 284,
      category: "Art",
      images: "https://source.unsplash.com/random/600x400/?art,ai",
      isFavorite: false,
      isTrending: false,
    },
    {
      id: 8,
      type: "profile",
      action: "Changed notification settings",
      details: "Updated email preferences",
      date: "2023-06-01T10:15:00",
      category: "Account",
      isFavorite: false,
      isTrending: false,
    },
    {
      id: 9,
      type: "article",
      title: "Quantum Computing Breakthroughs",
      preview:
        "Recent advances that bring us closer to practical quantum computers...",
      date: "2023-05-28T14:20:00",
      views: 4123,
      likes: 789,
      comments: 56,
      category: "Technology",
      images: "https://source.unsplash.com/random/600x400/?quantum,computer",
      readTime: "8 min",
      isFavorite: true,
      isTrending: true,
    },
    {
      id: 10,
      type: "video",
      title: "Advanced TypeScript Patterns",
      preview: "Take your TypeScript skills to the next level...",
      date: "2023-05-25T11:45:00",
      duration: "24:15",
      views: 3876,
      likes: 987,
      comments: 43,
      category: "Development",
      images: "https://source.unsplash.com/random/600x400/?typescript,code",
      watchedPercent: 72,
      isFavorite: false,
      isTrending: true,
    },
  ];

  const filteredHistory = historyData.filter((item) => {
    const matchesType = activeTab === "all" || item.type === activeTab;
    const matchesDate =
      filters.date === "all-time" ||
      (filters.date === "today" &&
        new Date(item.date).toDateString() === new Date().toDateString()) ||
      (filters.date === "week" &&
        new Date() - new Date(item.date) <= 7 * 24 * 60 * 60 * 1000) ||
      (filters.date === "month" &&
        new Date() - new Date(item.date) <= 30 * 24 * 60 * 60 * 1000) ||
      (filters.date === "year" &&
        new Date() - new Date(item.date) <= 365 * 24 * 60 * 60 * 1000);
    const matchesCategory =
      filters.category === "all" || item.category === filters.category;

    if (!searchQuery) return matchesType && matchesDate && matchesCategory;

    const searchLower = searchQuery.toLowerCase();
    const searchableText = [
      item.title || "",
      item.preview || "",
      item.action || "",
      item.details || "",
      item.category || "",
    ]
      .join(" ")
      .toLowerCase();

    return (
      matchesType &&
      matchesDate &&
      matchesCategory &&
      searchableText.includes(searchLower)
    );
  });
  const totalPages = Math.ceil(filteredHistory.length / itemsPerPage);
  const paginatedHistory = filteredHistory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const groupedHistory = filteredHistory.reduce((acc, item) => {
    const date = new Date(item.date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    if (!acc[date]) acc[date] = [];
    acc[date].push(item);
    return acc;
  }, {});
  const viewModes = [
    { id: "grid", icon: <BarChart2 size={18} />, label: "Grid" },
    { id: "list", icon: <BookOpen size={18} />, label: "List" },
    { id: "timeline", icon: <Calendar size={18} />, label: "Timeline" },
  ];
  const typeIcons = {
    article: <BookOpen size={16} className="text-blue-600" />,
    video: <Video size={16} className="text-red-600" />,
    opinion: <MessageCircle size={16} className="text-purple-600" />,
    profile: <User size={16} className="text-green-600" />,
  };
  const toggleSelectItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };
  const clearSelected = () => {
    setSelectedItems([]);
  };
  const deleteSelected = () => {
    console.log("Deleting items:", selectedItems);
    setSelectedItems([]);
  };

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    console.log("Toggling favorite for item:", id);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
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
  const downloadHistory = () => {
    console.log("Downloading history...");
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 text-black dark:text-white ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2">
            <HistoryIcon className="text-indigo-600" size={28} />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Your History
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Review your activity across the platform
          </p>
        </div>
        <button
          onClick={() => setShowStats(!showStats)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-colors shadow-md"
        >
          <BarChart2 size={18} />
          <span>View Stats</span>
        </button>
      </div>
      {showStats && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Your Activity Summary
            </h3>
            <button
              onClick={() => setShowStats(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X size={20} />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-full">
                  <BookOpen
                    size={20}
                    className="text-blue-600 dark:text-blue-300"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Articles
                  </p>
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">
                    {historyData.filter((i) => i.type === "article").length}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/30 rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 dark:bg-red-800 rounded-full">
                  <Video size={20} className="text-red-600 dark:text-red-300" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Videos
                  </p>
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">
                    {historyData.filter((i) => i.type === "video").length}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/30 rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-800 rounded-full">
                  <MessageCircle
                    size={20}
                    className="text-purple-600 dark:text-purple-300"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Opinions
                  </p>
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">
                    {historyData.filter((i) => i.type === "opinion").length}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/30 rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-800 rounded-full">
                  <User
                    size={20}
                    className="text-green-600 dark:text-green-300"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Profile Edits
                  </p>
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">
                    {historyData.filter((i) => i.type === "profile").length}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
              Recent Activity
            </h4>
            <div className="space-y-3">
              {historyData.slice(0, 3).map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      {typeIcons[item.type]}
                      {item.isTrending && (
                        <TrendingUp
                          className="absolute -top-1 -right-1 text-yellow-500 bg-white rounded-full p-0.5"
                          size={12}
                        />
                      )}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {item.title || item.action}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {formatRelativeTime(item.date)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex space-x-1 rounded-lg bg-gray-200 dark:bg-gray-800 p-1">
          {viewModes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => {
                setViewMode(mode.id);
                setCurrentPage(1);
              }}
              className={`px-3 py-2 text-sm font-medium rounded-md flex items-center gap-1 ${
                viewMode === mode.id
                  ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {mode.icon}
              <span>{mode.label}</span>
            </button>
          ))}
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search your history..."
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
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
            onClick={downloadHistory}
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <Download size={18} />
          </button>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`p-2 rounded-lg border flex items-center gap-1 ${
              showFilters
                ? "bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-300"
                : "border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400"
            }`}
          >
            <Filter size={18} />
            <span className="hidden sm:inline">Filters</span>
          </button>
        </div>
      </div>
      {showFilters && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 mb-6 border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Content Type
              </label>
              <div className="flex flex-wrap gap-2">
                {["all", "article", "video", "opinion", "profile"].map(
                  (type) => (
                    <button
                      key={type}
                      onClick={() => setActiveTab(type)}
                      className={`px-3 py-1.5 text-xs rounded-full capitalize flex items-center gap-1 ${
                        activeTab === type
                          ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                      }`}
                    >
                      {typeIcons[type] || <span>•</span>}
                      {type === "all" ? "All" : type}
                    </button>
                  )
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Time Period
              </label>
              <select
                className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                value={filters.date}
                onChange={(e) =>
                  setFilters({ ...filters, date: e.target.value })
                }
              >
                <option value="all-time">All Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Categories
              </label>
              <select
                className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                value={filters.category}
                onChange={(e) =>
                  setFilters({ ...filters, category: e.target.value })
                }
              >
                <option value="all">All Categories</option>
                {[...new Set(historyData.map((item) => item.category))].map(
                  (cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  )
                )}
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
              onClick={clearSelected}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm"
            >
              Clear selection
            </button>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 text-sm px-3 py-1.5 bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600">
              <Bookmark size={14} />
              <span>Save</span>
            </button>
            <button className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 text-sm px-3 py-1.5 bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600">
              <Share2 size={14} />
              <span>Share</span>
            </button>
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
      {filteredHistory.length === 0 && (
        <div className="text-center py-16 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700">
          <div className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-600 mb-4">
            <Clock size={64} className="mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            No history found
          </h3>
          <p className="mt-1 text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            {searchQuery
              ? "No items match your search. Try different keywords or filters."
              : "Your viewed content and activity will appear here."}
          </p>
          {!searchQuery && (
            <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Browse content
            </button>
          )}
        </div>
      )}
      {filteredHistory.length > 0 && viewMode === "grid" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {paginatedHistory.map((item) => (
            <div
              key={item.id}
              className={`bg-white dark:bg-gray-800 dark:bg-opacity-55 group relative rounded-xl overflow-hidden border ${
                selectedItems.includes(item.id)
                  ? "border-blue-300 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-900/20"
                  : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
              } transition-all duration-200 shadow-sm hover:shadow-md`}
            >
              <div className="absolute top-3 left-3 z-10 ">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => toggleSelectItem(item.id)}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </div>
              <div className="absolute top-3 right-3 z-10 flex gap-1">
                {item.isTrending && (
                  <div className="p-1 bg-yellow-100 dark:bg-yellow-900/50 rounded-full">
                    <TrendingUp className="w-3 h-3 text-yellow-600 dark:text-yellow-300" />
                  </div>
                )}
                <button
                  onClick={(e) => toggleFavorite(item.id, e)}
                  className={`p-1 rounded-full ${
                    item.isFavorite
                      ? "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-500"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-400"
                  }`}
                >
                  <Star
                    className="w-3 h-3"
                    fill={item.isFavorite ? "currentColor" : "none"}
                  />
                </button>
              </div>
              {item.images && (
                <div className=" relative aspect-video overflow-hidden">
                  <img
                    src={Sports || item.images}
                    alt=""
                    className="w-full h-full  object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.type === "video" && (
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
                </div>
              )}
              <div className="p-4  bg-opacity-35 dark:bg-opacity-50">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    {typeIcons[item.type]}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-medium  text-gray-900 dark:text-white line-clamp-2">
                      {item.title || item.action}
                    </h3>
                    {item.preview && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                        {item.preview}
                      </p>
                    )}
                    {item.details && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {item.details}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    {item.category && (
                      <span className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                        {item.category}
                      </span>
                    )}
                    {item.readTime && (
                      <span className="text-gray-500 dark:text-gray-400">
                        {item.readTime} read
                      </span>
                    )}
                  </div>

                  <div className="text-gray-500 dark:text-gray-400">
                    {formatRelativeTime(item.date)}
                  </div>
                </div>
                {(item.views || item.likes || item.comments) && (
                  <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                    {item.views && (
                      <span className="flex items-center gap-1">
                        <Eye size={12} />
                        {item.views.toLocaleString()}
                      </span>
                    )}
                    {item.likes && (
                      <span className="flex items-center gap-1">
                        <Heart size={12} />
                        {item.likes.toLocaleString()}
                      </span>
                    )}
                    {item.comments && (
                      <span className="flex items-center gap-1">
                        <MessageSquare size={12} />
                        {item.comments.toLocaleString()}
                      </span>
                    )}
                  </div>
                )}
              </div>
              <div className="absolute top-3 left-8 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <Bookmark size={16} />
                </button>
                <button className="p-1.5 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <Share2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {filteredHistory.length > 0 && viewMode === "list" && (
        <div className="space-y-3">
          {paginatedHistory.map((item) => (
            <div
              key={item.id}
              className={`group flex items-start gap-4 p-4 rounded-lg border ${
                selectedItems.includes(item.id)
                  ? "border-blue-300 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-900/20"
                  : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50"
              } transition-colors shadow-sm hover:shadow-md`}
            >
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => toggleSelectItem(item.id)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />

              <div className="flex flex-col gap-1">
                {item.isTrending && (
                  <div className="p-1 bg-yellow-100 dark:bg-yellow-900/50 rounded-full">
                    <TrendingUp className="w-3 h-3 text-yellow-600 dark:text-yellow-300" />
                  </div>
                )}
                <button
                  onClick={(e) => toggleFavorite(item.id, e)}
                  className={`p-1 rounded-full ${
                    item.isFavorite
                      ? "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-500"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-400"
                  }`}
                >
                  <Star
                    className="w-3 h-3"
                    fill={item.isFavorite ? "currentColor" : "none"}
                  />
                </button>
              </div>

              {item.images && (
                <div className="flex-shrink-0 w-24 h-16 rounded-md overflow-hidden relative">
                  <img
                    src={Sports || item.images}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <Play size={16} className="text-white" />
                    </div>
                  )}
                </div>
              )}

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      {typeIcons[item.type]}
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {item.title || item.action}
                      </h3>
                    </div>
                    {item.preview && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-1">
                        {item.preview}
                      </p>
                    )}
                    {item.details && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {item.details}
                      </p>
                    )}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    {formatDate(item.date)}
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                  {item.category && (
                    <span className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                      {item.category}
                    </span>
                  )}
                  {item.readTime && (
                    <span className="text-gray-500 dark:text-gray-400">
                      {item.readTime} read
                    </span>
                  )}
                  {item.duration && (
                    <span className="text-gray-500 dark:text-gray-400">
                      {item.duration}
                    </span>
                  )}
                </div>
                {(item.views || item.likes || item.comments) && (
                  <div className="mt-2 flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                    {item.views && (
                      <span className="flex items-center gap-1">
                        <Eye size={12} />
                        {item.views.toLocaleString()}
                      </span>
                    )}
                    {item.likes && (
                      <span className="flex items-center gap-1">
                        <Heart size={12} />
                        {item.likes.toLocaleString()}
                      </span>
                    )}
                    {item.comments && (
                      <span className="flex items-center gap-1">
                        <MessageSquare size={12} />
                        {item.comments.toLocaleString()}
                      </span>
                    )}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 bg-white dark:bg-gray-700 rounded-full shadow-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <Bookmark size={16} />
                </button>
                <button className="p-1.5 bg-white dark:bg-gray-700 rounded-full shadow-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <Share2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {filteredHistory.length > 0 && viewMode === "timeline" && (
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          <div className="space-y-8">
            {Object.entries(groupedHistory).map(([date, items]) => (
              <div key={date} className="relative pl-10">
                <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 border-4 border-white dark:border-gray-800 flex items-center justify-center">
                  <Calendar
                    size={14}
                    className="text-blue-600 dark:text-blue-300"
                  />
                </div>

                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  {date}
                </h3>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className={`relative pl-6 pb-6 border-l-2 ${
                        selectedItems.includes(item.id)
                          ? "border-blue-400 dark:border-blue-600"
                          : "border-gray-200 dark:border-gray-700"
                      }`}
                    >
                      <div
                        className={`absolute left-0 top-0 -ml-1.5 h-3 w-3 rounded-full ${
                          selectedItems.includes(item.id)
                            ? "bg-blue-500 dark:bg-blue-400"
                            : "bg-gray-400 dark:bg-gray-500"
                        }`}
                      ></div>
                      <div
                        className={`p-4 rounded-lg border ${
                          selectedItems.includes(item.id)
                            ? "border-blue-300 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-900/20"
                            : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                        } shadow-sm`}
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex items-start gap-3">
                            <input
                              type="checkbox"
                              checked={selectedItems.includes(item.id)}
                              onChange={() => toggleSelectItem(item.id)}
                              className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <div className="flex flex-col gap-1">
                              {item.isTrending && (
                                <div className="p-1 bg-yellow-100 dark:bg-yellow-900/50 rounded-full">
                                  <TrendingUp className="w-3 h-3 text-yellow-600 dark:text-yellow-300" />
                                </div>
                              )}
                              <button
                                onClick={(e) => toggleFavorite(item.id, e)}
                                className={`p-1 rounded-full ${
                                  item.isFavorite
                                    ? "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-500"
                                    : "bg-gray-100 dark:bg-gray-700 text-gray-400"
                                }`}
                              >
                                <Star
                                  className="w-3 h-3"
                                  fill={
                                    item.isFavorite ? "currentColor" : "none"
                                  }
                                />
                              </button>
                            </div>

                            <div>
                              <div className="flex items-center gap-2">
                                {typeIcons[item.type]}
                                <h4 className="font-medium text-gray-900 dark:text-white">
                                  {item.title || item.action}
                                </h4>
                              </div>
                              {item.preview && (
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                  {item.preview}
                                </p>
                              )}
                              {item.details && (
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                  {item.details}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                            {formatDate(item.date).split(",")[1].trim()}
                          </div>
                        </div>
                        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                          {item.category && (
                            <span className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                              {item.category}
                            </span>
                          )}
                          {item.readTime && (
                            <span className="text-gray-500 dark:text-gray-400">
                              {item.readTime} read
                            </span>
                          )}
                          {item.duration && (
                            <span className="text-gray-500 dark:text-gray-400">
                              {item.duration}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pagination */}
      {filteredHistory.length > itemsPerPage && (
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg border ${
              currentPage === 1
                ? "border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-600 cursor-not-allowed"
                : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            <ChevronLeft size={16} />
            <span>Previous</span>
          </button>

          <div className="hidden sm:flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-10 h-10 rounded-full ${
                  page === currentPage
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg border ${
              currentPage === totalPages
                ? "border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-600 cursor-not-allowed"
                : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            <span>Next</span>
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}

export default History;
