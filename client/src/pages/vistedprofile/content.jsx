import React, { memo, useState } from "react";
import {
  Video,
  BookOpen,
  MessageCircle,
  Search,
  Filter,
  ChevronDown,
  Share2,
  Bookmark,
  X,
  Check,
  MoreHorizontal,
  Dot,
  Heart,
  MessageSquare,
  Image as ImageIcon,
  Calendar,
  User,
  Tag,
} from "lucide-react";

const Content = ({ expandedPost, handleExpandPost, handleViewFullPost }) => {
  const [activeTab, setActiveTab] = useState("articles");
  const [sortBy, setSortBy] = useState("recent");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedPosts, setSelectedPosts] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    date: "all",
    category: "",
    author: "",
  });

  // Toggle post selection
  const togglePostSelection = (postId) => {
    setSelectedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  // Clear all selections
  const clearSelection = () => {
    setSelectedPosts([]);
  };

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterOptions((prev) => ({ ...prev, [name]: value }));
  };

  // Apply filters
  const applyFilters = () => {
    setShowFilters(false);
    // Filter logic would be implemented here
  };

  // Reset all filters
  const resetFilters = () => {
    setFilterOptions({
      date: "all",
      category: "",
      author: "",
    });
  };

  // Get filtered content based on active tab and filters
  const filteredContent = getContentByType(activeTab).filter((item) => {
    // Search filter
    if (
      searchQuery &&
      !item.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    // Date filter
    if (filterOptions.date !== "all") {
      // Date filtering logic would be implemented here
    }

    // Category filter
    if (
      filterOptions.category &&
      (!item.tags || !item.tags.includes(filterOptions.category))
    ) {
      return false;
    }

    // Author filter
    if (filterOptions.author && item.author !== filterOptions.author) {
      return false;
    }

    return true;
  });

  // Sort content
  const sortedContent = [...filteredContent].sort((a, b) => {
    if (sortBy === "recent") {
      return new Date(b.date) - new Date(a.date);
    } else {
      return b.likes - a.likes;
    }
  });

  return (
    <div className="lg:col-span-2 order-1 lg:order-none">
      {/* Selection Actions Bar */}
      {selectedPosts.length > 0 && (
        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl shadow p-4 mb-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-blue-600 dark:text-blue-300">
              {selectedPosts.length} selected
            </span>
            <button
              onClick={clearSelection}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-700">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-700">
              <Bookmark className="w-4 h-4" />
              <span>Save</span>
            </button>
          </div>
        </div>
      )}

      {/* Content Type Tabs */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4 mb-6">
        <div className="flex gap-5 text-sm font-medium text-gray-500 dark:text-gray-400 overflow-x-auto pb-2">
          <TabButton
            active={activeTab === "articles"}
            icon={<BookOpen className="w-4 h-4" />}
            label="Articles"
            count={12}
            onClick={() => setActiveTab("articles")}
          />
          <TabButton
            active={activeTab === "videos"}
            icon={<Video className="w-4 h-4" />}
            label="Videos"
            count={8}
            onClick={() => setActiveTab("videos")}
          />
          <TabButton
            active={activeTab === "opinions"}
            icon={<MessageCircle className="w-4 h-4" />}
            label="Opinions"
            count={23}
            onClick={() => setActiveTab("opinions")}
          />
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4 mb-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search in content..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <div className="relative">
              <button
                className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="w-4 h-4" />
                <span>Filter</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    showFilters ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showFilters && (
                <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-10 p-4">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Date
                      </label>
                      <select
                        name="date"
                        value={filterOptions.date}
                        onChange={handleFilterChange}
                        className="w-full border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                      >
                        <option value="all">All Time</option>
                        <option value="today">Today</option>
                        <option value="week">This Week</option>
                        <option value="month">This Month</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Category
                      </label>
                      <select
                        name="category"
                        value={filterOptions.category}
                        onChange={handleFilterChange}
                        className="w-full border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                      >
                        <option value="">All Categories</option>
                        <option value="react">React</option>
                        <option value="node">Node.js</option>
                        <option value="javascript">JavaScript</option>
                        <option value="design">Design</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Author
                      </label>
                      <select
                        name="author"
                        value={filterOptions.author}
                        onChange={handleFilterChange}
                        className="w-full border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                      >
                        <option value="">All Authors</option>
                        <option value="jitu">Jitu Pradhan</option>
                        <option value="sarah">Sarah Johnson</option>
                        <option value="mike">Mike Chen</option>
                      </select>
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        onClick={resetFilters}
                        className="px-3 py-1.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                      >
                        Reset
                      </button>
                      <button
                        onClick={applyFilters}
                        className="px-3 py-1.5 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center gap-1"
                      >
                        <Check className="w-4 h-4" />
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() =>
                setSortBy(sortBy === "recent" ? "popular" : "recent")
              }
            >
              <span>
                {sortBy === "recent" ? "Most Recent" : "Most Popular"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Content List */}
      <div className="space-y-6">
        {sortedContent.map((item) => (
          <ContentCard
            key={item.id}
            item={item}
            type={activeTab}
            isExpanded={expandedPost === item.id}
            onExpand={handleExpandPost}
            onViewFull={handleViewFullPost}
            isSelected={selectedPosts.includes(item.id)}
            onSelect={togglePostSelection}
          />
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-8 flex justify-center">
        <button className="px-6 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
          Load More
        </button>
      </div>
    </div>
  );
};

// Tab Button Component
const TabButton = ({ active, icon, label, count, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-1 rounded-md ${
        active
          ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
          : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
      }`}
    >
      {icon}
      {label}
      {count && (
        <span className="text-xs bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded-full">
          {count}
        </span>
      )}
    </button>
  );
};

// Content Card Component
const ContentCard = ({
  item,
  type,
  isExpanded,
  onExpand,
  onViewFull,
  isSelected,
  onSelect,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showActions, setShowActions] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = () => {
    console.log("Sharing post:", item.id);
    setShowActions(false);
  };

  const getTypeIcon = () => {
    switch (type) {
      case "articles":
        return <BookOpen className="w-4 h-4 text-blue-500" />;
      case "videos":
        return <Video className="w-4 h-4 text-red-500" />;
      case "opinions":
        return <MessageCircle className="w-4 h-4 text-purple-500" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div
      className={`bg-white dark:bg-gray-900 rounded-xl shadow overflow-hidden hover:shadow-lg  ${
        isSelected ? "ring-2 ring-blue-500 dark:ring-blue-600" : ""
      }`}
    >
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer  ${
              isSelected
                ? "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300"
                : "bg-gray-200 dark:bg-gray-700 text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
            onClick={() => onSelect(item.id)}
          >
            {isSelected ? (
              <Check className="w-5 h-5" />
            ) : (
              <span className="text-sm font-bold">JP</span>
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-medium text-gray-800 dark:text-gray-200">
                Jitu Pradhan
              </h4>
              <span className="text-xs px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                {getTypeIcon()}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <span>{item.date}</span>
              <Dot />
              <span>{item.views}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className={`p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800  ${
              isBookmarked
                ? "text-blue-500"
                : "text-gray-400 dark:text-gray-500"
            }`}
            onClick={handleBookmark}
            aria-label={isBookmarked ? "Remove bookmark" : "Bookmark"}
          >
            <Bookmark
              className="w-5 h-5"
              fill={isBookmarked ? "currentColor" : "none"}
            />
          </button>

          <div className="relative">
            <button
              className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 dark:text-gray-500 "
              onClick={() => setShowActions(!showActions)}
              aria-label="More actions"
            >
              <MoreHorizontal className="w-5 h-5" />
            </button>

            {showActions && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10 overflow-hidden">
                <button
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
                  onClick={handleShare}
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
                <button
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    setShowActions(false);
                  }}
                >
                  <span className="w-4 h-4">🔗</span>
                  Copy Link
                </button>
                <button
                  className="w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
                  onClick={() => {
                    console.log("Reporting post:", item.id);
                    setShowActions(false);
                  }}
                >
                  <span className="w-4 h-4">⚠️</span>
                  Report
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        {(type === "articles" || type === "videos") && (
          <div className="mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-video flex items-center justify-center text-gray-400">
            <ImageIcon className="w-12 h-12" />
          </div>
        )}

        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
          {item.title}
        </h3>

        {isExpanded ? (
          <div className="text-gray-600 dark:text-gray-300 mb-4">
            <p>
              {item.fullContent ||
                "This is the full content of the post. It would include detailed information, images, and other rich content in a real application."}
            </p>
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {item.excerpt}
          </p>
        )}

        {type === "articles" && (
          <div className="flex flex-wrap gap-2 mb-4">
            {item.tags?.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex gap-4">
          <button
            className={`flex items-center gap-1 ${
              isLiked ? "text-red-500" : "text-gray-500 dark:text-gray-400"
            } hover:text-red-500 `}
            onClick={handleLike}
            aria-label={isLiked ? "Unlike" : "Like"}
          >
            <Heart
              className="w-5 h-5"
              fill={isLiked ? "currentColor" : "none"}
            />
            <span>{isLiked ? item.likes + 1 : item.likes}</span>
          </button>
          <button
            className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-blue-500 "
            aria-label="Comments"
          >
            <MessageSquare className="w-5 h-5" />
            <span>{item.comments}</span>
          </button>
        </div>

        <div className="flex gap-2">
          <button
            className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 "
            onClick={() => onExpand(item.id)}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>

          {isExpanded && (
            <button
              className="flex items-center gap-1 text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg "
              onClick={() => onViewFull(item.id)}
            >
              View Full Post
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper function to get content by type
const getContentByType = (type) => {
  const baseContent = [
    {
      id: 1,
      title: "Building Scalable Microservices with Node.js",
      excerpt:
        "Learn how to architect and build microservices that can scale to millions of users...",
      fullContent:
        "In this comprehensive guide, we'll explore how to build scalable microservices using Node.js...",
      date: "2 days ago",
      views: "1.2K views",
      likes: 84,
      comments: 23,
      tags: ["Node.js", "Microservices", "Docker"],
      author: "jitu",
    },
    {
      id: 2,
      title: "React Hooks: Beyond the Basics",
      excerpt:
        "Deep dive into advanced React Hooks patterns and how to use them...",
      fullContent:
        "React Hooks have revolutionized how we write React components...",
      date: "1 week ago",
      views: "3.4K views",
      likes: 156,
      comments: 42,
      tags: ["React", "JavaScript"],
      author: "sarah",
    },
  ];

  if (type === "videos") {
    return [
      {
        id: 3,
        title: "Building a Full Stack App with Next.js",
        excerpt:
          "In this tutorial, I'll walk you through building a complete application...",
        fullContent:
          "This video tutorial covers the complete process of building a full stack application...",
        date: "3 days ago",
        views: "2.1K views",
        likes: 132,
        comments: 31,
        author: "mike",
      },
    ];
  }

  if (type === "opinions") {
    return [
      {
        id: 4,
        title: "Why I Still Use Vanilla JavaScript",
        excerpt:
          "Frameworks are great, but sometimes plain JavaScript is the better choice...",
        fullContent:
          "In this opinion piece, I explain why I still reach for vanilla JavaScript...",
        date: "4 days ago",
        views: "3.8K views",
        likes: 210,
        comments: 92,
        author: "jitu",
      },
    ];
  }

  return baseContent;
};

export default memo(Content);
