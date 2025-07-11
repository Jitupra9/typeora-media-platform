import React, { useState, useEffect, memo } from "react";
import MyContentStats from "./MyContentStats";
import ContentData from "./ContentData";
import ContentType from "./ContentType";
import SearchFilter from "./SearchFilter";
import FilterSection from "./Filter";
import SelectdItem from "./SelectdItem";
import ContentTips from "./ContentTips";
import ProgramInsights from "./ProgramInsights";
import Content from "./Content";
import {
  BookOpen,
  Video,
  MessageCircle,
  Plus,
  Zap,
  BarChart2,
  Clock,
  Users,
  Star,
} from "lucide-react";
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
  const [filters, setFilters] = useState({
    status: "all",
    dateRange: "all-time",
    category: "all",
    contentType: "all",
  });
  const [performanceData, setPerformanceData] = useState({
    viewsLast30Days: 0,
    engagementRate: 0,
    topContent: [],
    audienceGrowth: 1,
  });
  const contentData = ContentData();
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

  const deleteSelected = () => {};

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
    <div className="max-w-7xl mx-auto py-4 pb-16 sm:pb-16 sm:p-4 dark:text-white ">
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
      <MyContentStats stats={stats} />
      <ContentType
        contentData={contentData}
        setActiveTab={setActiveTab}
        setSelectedItems={setSelectedItems}
        setFilters={setFilters}
        activeTab={setActiveTab}
        setSearchQuery={setSearchQuery}
      />

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
      <SearchFilter
        activeTab={activeTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setShowFilters={setShowFilters}
        showFilters={showFilters}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {showFilters && (
        <FilterSection
          filters={filters}
          setFilters={setFilters}
          activeTab={activeTab}
          contentData={contentData}
        />
      )}

      {selectedItems.length > 0 && (
        <SelectdItem
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          activeTab={activeTab}
          deleteSelected={deleteSelected}
        />
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
        <Content
          sortedContent={sortedContent}
          selectedItems={selectedItems}
          activeTab={activeTab}
          toggleSelectItem={toggleSelectItem}
          formatDate={formatDate}
          formatRelativeTime={formatRelativeTime}
        />
      )}
      <ProgramInsights
        activeTab={activeTab}
        performanceData={performanceData}
      />
      <ContentTips />
    </div>
  );
}

export default memo(MyContent);
