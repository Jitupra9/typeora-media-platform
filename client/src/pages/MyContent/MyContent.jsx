import {
  Heart,
  MessageSquare,
  Share2,
  Bookmark,
  MoreHorizontal,
  Clock,
  Play,
  FileText,
  Image,
  Eye,
  Video,
  BarChart2,
  Flame,
  Filter,
  Search,
  ChevronDown,
  Check,
  X,
  Sliders,
  Calendar,
  User,
  ThumbsUp,
  TrendingUp,
  Grid,
  List,
  LayoutGrid,
  Folder,
  Plus,
  Download,
  Trash2,
  Star,
  HardDrive,
  Cloud,
} from "lucide-react";
import { useState } from "react";

const ContentFeed = () => {
  // Sample data with more realistic personal content
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: "You",
        username: "yourusername",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        verified: true,
      },
      content: {
        type: "image",
        caption: "My vacation in Hawaii last summer",
        title: "Hawaii Sunset",
        media: "https://source.unsplash.com/random/800x600/?hawaii",
        tags: ["travel", "photography", "vacation"],
        aspectRatio: "16/9",
      },
      stats: {
        views: 1245,
        likes: 342,
        comments: 28,
        shares: 12,
        engagement: 32,
        downloads: 87,
      },
      timestamp: "2 days ago",
      trending: true,
      starred: false,
      location: "Cloud",
    },
    {
      id: 2,
      user: {
        name: "You",
        username: "yourusername",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        verified: true,
      },
      content: {
        type: "video",
        caption: "Tutorial on how to use the new editing software",
        title: "Editing Tutorial",
        media: "https://source.unsplash.com/random/800x600/?tutorial",
        tags: ["tutorial", "editing", "how-to"],
        aspectRatio: "16/9",
        duration: "12:45",
      },
      stats: {
        views: 3567,
        likes: 876,
        comments: 143,
        shares: 45,
        engagement: 42,
        downloads: 231,
      },
      timestamp: "1 week ago",
      trending: true,
      starred: true,
      location: "Local",
    },
    {
      id: 3,
      user: {
        name: "You",
        username: "yourusername",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        verified: true,
      },
      content: {
        type: "document",
        caption: "My research paper on AI advancements",
        title: "AI Research Paper.pdf",
        media: "https://source.unsplash.com/random/800x600/?document",
        tags: ["research", "ai", "academic"],
        aspectRatio: "1/1.414", // A4 ratio
      },
      stats: {
        views: 876,
        likes: 124,
        comments: 32,
        shares: 8,
        engagement: 18,
        downloads: 156,
      },
      timestamp: "3 weeks ago",
      trending: false,
      starred: false,
      location: "Cloud",
    },
    {
      id: 4,
      user: {
        name: "You",
        username: "yourusername",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        verified: true,
      },
      content: {
        type: "short-video",
        caption: "Quick recipe for my famous pasta",
        title: "Pasta Recipe Short",
        media: "https://source.unsplash.com/random/800x600/?pasta",
        tags: ["food", "recipe", "cooking"],
        aspectRatio: "9/16",
        duration: "0:45",
      },
      stats: {
        views: 5432,
        likes: 1243,
        comments: 87,
        shares: 156,
        engagement: 48,
        downloads: 432,
      },
      timestamp: "5 days ago",
      trending: true,
      starred: true,
      location: "Local",
    },
    {
      id: 5,
      user: {
        name: "You",
        username: "yourusername",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        verified: true,
      },
      content: {
        type: "image",
        caption: "My new workspace setup",
        title: "Workspace 2023",
        media: "https://source.unsplash.com/random/800x600/?workspace",
        tags: ["design", "productivity", "setup"],
        aspectRatio: "16/9",
      },
      stats: {
        views: 987,
        likes: 231,
        comments: 42,
        shares: 15,
        engagement: 28,
        downloads: 76,
      },
      timestamp: "1 month ago",
      trending: false,
      starred: false,
      location: "Cloud",
    },
  ]);

  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("trending");
  const [showTags, setShowTags] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const [selectedPosts, setSelectedPosts] = useState([]);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [dateRange, setDateRange] = useState("all-time");
  const [minLikes, setMinLikes] = useState(0);
  const [minComments, setMinComments] = useState(0);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [newCollectionName, setNewCollectionName] = useState("");

  // Get all unique tags
  const allTags = [...new Set(posts.flatMap((post) => post.content.tags))];

  // Filter and sort logic
  const filteredPosts = posts
    .filter((post) => {
      // Type filter
      const typeMatch =
        activeFilter === "all" ||
        post.content.type === activeFilter ||
        (activeFilter === "video" &&
          (post.content.type === "video" ||
            post.content.type === "short-video"));

      // Search filter
      const searchMatch =
        !searchQuery ||
        (post.content.caption &&
          post.content.caption
            .toLowerCase()
            .includes(searchQuery.toLowerCase())) ||
        (post.content.title &&
          post.content.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase())) ||
        post.user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      // Tag filter
      const tagMatch = !selectedTag || post.content.tags.includes(selectedTag);

      // Date range filter (simplified for demo)
      const dateMatch =
        dateRange === "all-time" ||
        (dateRange === "today" && post.timestamp.includes("day")) ||
        (dateRange === "this-week" &&
          (post.timestamp.includes("day") ||
            post.timestamp.includes("week"))) ||
        (dateRange === "this-month" && post.timestamp.includes("month"));

      // Engagement filters
      const likesMatch = post.stats.likes >= minLikes;
      const commentsMatch = post.stats.comments >= minComments;

      return (
        typeMatch &&
        searchMatch &&
        tagMatch &&
        dateMatch &&
        likesMatch &&
        commentsMatch
      );
    })
    .sort((a, b) => {
      if (sortBy === "trending") {
        return b.stats.engagement - a.stats.engagement;
      } else if (sortBy === "newest") {
        // Simplified timestamp comparison for demo
        if (a.timestamp.includes("day") && !b.timestamp.includes("day"))
          return -1;
        if (!a.timestamp.includes("day") && b.timestamp.includes("day"))
          return 1;
        return 0;
      } else if (sortBy === "most-liked") {
        return b.stats.likes - a.stats.likes;
      } else if (sortBy === "most-downloaded") {
        return b.stats.downloads - a.stats.downloads;
      }
      return 0;
    });

  // Toggle post selection
  const togglePostSelection = (postId) => {
    setSelectedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  // Toggle star status
  const toggleStar = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, starred: !post.starred } : post
      )
    );
  };

  // Bulk actions
  const handleBulkAction = (action) => {
    switch (action) {
      case "delete":
        setPosts(posts.filter((post) => !selectedPosts.includes(post.id)));
        setSelectedPosts([]);
        break;
      case "download":
        alert(`Downloading ${selectedPosts.length} files`);
        setSelectedPosts([]);
        break;
      case "star":
        setPosts(
          posts.map((post) =>
            selectedPosts.includes(post.id) ? { ...post, starred: true } : post
          )
        );
        setSelectedPosts([]);
        break;
      case "unstar":
        setPosts(
          posts.map((post) =>
            selectedPosts.includes(post.id) ? { ...post, starred: false } : post
          )
        );
        setSelectedPosts([]);
        break;
      default:
        break;
    }
  };

  const createCollection = () => {
    if (newCollectionName.trim()) {
      alert(`Created new collection: ${newCollectionName}`);
      setNewCollectionName("");
      setShowUploadModal(false);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-950 dark:text-gray-100">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              My Content
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              {posts.length} items •{" "}
              {posts.filter((p) => p.location === "Local").length} local •{" "}
              {posts.filter((p) => p.location === "Cloud").length} cloud
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <button
              onClick={() => setShowUploadModal(true)}
              className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <Plus className="w-5 h-5 mr-2" />
              Upload
            </button>
            <div className="flex bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 ${
                  viewMode === "grid" ? "bg-gray-100 dark:bg-gray-700" : ""
                }`}
                title="Grid view"
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 ${
                  viewMode === "list" ? "bg-gray-100 dark:bg-gray-700" : ""
                }`}
                title="List view"
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Filters */}
        <div className="mb-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search your content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-2 rounded-lg whitespace-nowrap flex items-center ${
                  activeFilter === "all"
                    ? "bg-blue-500 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                <LayoutGrid className="w-4 h-4 mr-2" />
                All
              </button>
              <button
                onClick={() => setActiveFilter("image")}
                className={`px-4 py-2 rounded-lg flex items-center space-x-1 whitespace-nowrap ${
                  activeFilter === "image"
                    ? "bg-blue-500 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                <Image className="w-4 h-4 mr-1" />
                <span>Images</span>
              </button>
              <button
                onClick={() => setActiveFilter("video")}
                className={`px-4 py-2 rounded-lg flex items-center space-x-1 whitespace-nowrap ${
                  activeFilter === "video"
                    ? "bg-blue-500 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                <Play className="w-4 h-4 mr-1" />
                <span>Videos</span>
              </button>
              <button
                onClick={() => setActiveFilter("document")}
                className={`px-4 py-2 rounded-lg flex items-center space-x-1 whitespace-nowrap ${
                  activeFilter === "document"
                    ? "bg-blue-500 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                <FileText className="w-4 h-4 mr-1" />
                <span>Documents</span>
              </button>
              <button
                onClick={() => setShowTags(!showTags)}
                className={`px-4 py-2 rounded-lg flex items-center space-x-1 whitespace-nowrap ${
                  showTags
                    ? "bg-blue-500 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                <Filter className="w-4 h-4 mr-1" />
                <span>Tags</span>
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="trending">Trending</option>
                <option value="newest">Newest</option>
                <option value="most-liked">Most Liked</option>
                <option value="most-downloaded">Most Downloaded</option>
              </select>
              <button
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                className={`p-2 rounded-lg ${
                  showAdvancedFilters
                    ? "bg-blue-500 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
                title="Advanced filters"
              >
                <Sliders className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tags Filter */}
          {showTags && (
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Filter by Tags
                </h3>
                {selectedTag && (
                  <button
                    onClick={() => {
                      setSelectedTag(null);
                      setSearchQuery("");
                    }}
                    className="text-xs text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
                  >
                    <X className="w-3 h-3 mr-1" />
                    Clear filter
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setSelectedTag(selectedTag === tag ? null : tag);
                      setSearchQuery(selectedTag === tag ? "" : `#${tag}`);
                    }}
                    className={`px-3 py-1 rounded-full text-sm flex items-center ${
                      selectedTag === tag
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    #{tag}
                    {selectedTag === tag && <Check className="w-3 h-3 ml-1" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Advanced Filters */}
          {showAdvancedFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                Advanced Filters
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Date Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Date Range
                  </label>
                  <select
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all-time">All Time</option>
                    <option value="today">Today</option>
                    <option value="this-week">This Week</option>
                    <option value="this-month">This Month</option>
                    <option value="this-year">This Year</option>
                  </select>
                </div>

                {/* Minimum Likes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Minimum Likes
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="0"
                      value={minLikes}
                      onChange={(e) => setMinLikes(Number(e.target.value))}
                      className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <ThumbsUp className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Minimum Downloads */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Minimum Downloads
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="0"
                      value={minComments}
                      onChange={(e) => setMinComments(Number(e.target.value))}
                      className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Download className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Storage Location
                  </label>
                  <select className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="all">All Locations</option>
                    <option value="local">Local Storage</option>
                    <option value="cloud">Cloud Storage</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bulk Actions Bar */}
        {selectedPosts.length > 0 && (
          <div className="mb-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3 flex items-center justify-between">
            <div className="flex items-center">
              <Check className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
                {selectedPosts.length} item{selectedPosts.length !== 1 && "s"}{" "}
                selected
              </span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleBulkAction("download")}
                className="px-3 py-1 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 flex items-center"
              >
                <Download className="w-4 h-4 mr-1" />
                Download
              </button>
              <button
                onClick={() => handleBulkAction("star")}
                className="px-3 py-1 bg-white dark:bg-gray-800 text-yellow-600 dark:text-yellow-400 text-sm font-medium rounded-lg border border-yellow-200 dark:border-yellow-800 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 flex items-center"
              >
                <Star className="w-4 h-4 mr-1" />
                Star
              </button>
              <button
                onClick={() => handleBulkAction("delete")}
                className="px-3 py-1 bg-white dark:bg-gray-800 text-red-600 dark:text-red-400 text-sm font-medium rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center"
              >
                <Trash2 className="w-4 h-4 mr-1" />
                Delete
              </button>
              <button
                onClick={() => setSelectedPosts([])}
                className="px-3 py-1 text-gray-600 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Content Display */}
        {filteredPosts.length > 0 ? (
          viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className={`bg-white dark:bg-gray-900 rounded-xl shadow-sm border ${
                    selectedPosts.includes(post.id)
                      ? "border-blue-500 ring-2 ring-blue-500/20"
                      : "border-gray-200 dark:border-gray-800"
                  } overflow-hidden relative group hover:shadow-md transition-shadow`}
                >
                  {/* Selection Checkbox */}
                  <button
                    onClick={() => togglePostSelection(post.id)}
                    className={`absolute top-3 left-3 z-10 w-6 h-6 rounded-md flex items-center justify-center transition-opacity ${
                      selectedPosts.includes(post.id)
                        ? "opacity-100 bg-blue-500 text-white"
                        : "opacity-0 group-hover:opacity-100 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-transparent hover:text-gray-400"
                    }`}
                  >
                    <Check className="w-4 h-4" />
                  </button>

                  {/* Star Button */}
                  <button
                    onClick={() => toggleStar(post.id)}
                    className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center ${
                      post.starred
                        ? "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-500"
                        : "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-400 hover:text-yellow-500"
                    }`}
                  >
                    <Star
                      className="w-4 h-4"
                      fill={post.starred ? "currentColor" : "none"}
                    />
                  </button>

                  {/* Location Indicator */}
                  <div className="absolute top-3 right-12 z-10">
                    {post.location === "Local" ? (
                      <HardDrive className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    ) : (
                      <Cloud className="w-5 h-5 text-blue-500" />
                    )}
                  </div>

                  {/* Content Preview */}
                  <div className="relative aspect-video overflow-hidden">
                    {post.content.type === "image" && (
                      <div className=" w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                        {/* <img src={post.content.media} className="" /> */}
                        <Image className="w-16 h-16 text-gray-400" />
                      </div>
                    )}
                    {post.content.type === "video" && (
                      <>
                        <div className=" w-full h-full  bg-gray-100 dark:bg-gray-800">
                          {" "}
                          <img src={post.content.media} className="" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center">
                            <Play
                              className="w-5 h-5 text-white"
                              fill="currentColor"
                            />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {post.content.duration}
                        </div>
                      </>
                    )}
                    {post.content.type === "short-video" && (
                      <>
                        <div className="w-full h-full flex items-center justify-center  bg-gray-100 dark:bg-gray-800">
                          {" "}
                          {/* <img src={post.content.media} className="" /> */}
                          <Video className="w-16 h-16 text-gray-400" />
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {post.content.duration}
                        </div>
                      </>
                    )}
                    {post.content.type === "document" && (
                      <div className="w-full h-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <FileText className="w-16 h-16 text-gray-400" />
                      </div>
                    )}
                  </div>

                  {/* Content Info */}
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 dark:text-gray-100 truncate">
                      {post.content.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                      {post.content.caption}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {post.content.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                      {post.content.tags.length > 3 && (
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          +{post.content.tags.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>{post.timestamp}</span>
                      <div className="flex items-center space-x-2">
                        <span className="flex items-center">
                          <ThumbsUp className="w-3 h-3 mr-1" />
                          {post.stats.likes}
                        </span>
                        <span className="flex items-center">
                          <Download className="w-3 h-3 mr-1" />
                          {post.stats.downloads}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // List View
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Stats
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                  {filteredPosts.map((post) => (
                    <tr
                      key={post.id}
                      className={`hover:bg-gray-50 dark:hover:bg-gray-800/50 ${
                        selectedPosts.includes(post.id)
                          ? "bg-blue-50/50 dark:bg-blue-900/20"
                          : ""
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedPosts.includes(post.id)}
                            onChange={() => togglePostSelection(post.id)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <div className="ml-4 flex items-center">
                            {post.content.type === "image" && (
                              <Image className="flex-shrink-0 h-10 w-10 text-gray-400" />
                            )}
                            {post.content.type === "video" && (
                              <Play className="flex-shrink-0 h-10 w-10 text-gray-400" />
                            )}
                            {post.content.type === "short-video" && (
                              <Play className="flex-shrink-0 h-10 w-10 text-gray-400" />
                            )}
                            {post.content.type === "document" && (
                              <FileText className="flex-shrink-0 h-10 w-10 text-gray-400" />
                            )}
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-gray-100 flex items-center">
                                {post.content.title}
                                {post.starred && (
                                  <Star
                                    className="ml-2 w-4 h-4 text-yellow-500"
                                    fill="currentColor"
                                  />
                                )}
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                                {post.content.caption}
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 dark:text-gray-100 capitalize">
                          {post.content.type.replace("-", " ")}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-4">
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <ThumbsUp className="mr-1 w-3 h-3" />
                            {post.stats.likes}
                          </div>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Download className="mr-1 w-3 h-3" />
                            {post.stats.downloads}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {post.location === "Local" ? (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200">
                            Local
                          </span>
                        ) : (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200">
                            Cloud
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {post.timestamp}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 mr-3">
                          <Download className="w-5 h-5" />
                        </button>
                        <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300">
                          <MoreHorizontal className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        ) : (
          // Empty State
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-12 text-center">
            <Folder className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-gray-100">
              No content found
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {searchQuery || activeFilter !== "all" || selectedTag
                ? "Try adjusting your search or filter criteria"
                : "You haven't uploaded any content yet"}
            </p>
            <div className="mt-6">
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveFilter("all");
                  setSelectedTag(null);
                  setShowUploadModal(true);
                }}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Plus className="-ml-1 mr-2 h-5 w-5" />
                Upload Content
              </button>
            </div>
          </div>
        )}

        {/* Upload Modal */}
        {showUploadModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Upload Content
                  </h3>
                  <button
                    onClick={() => setShowUploadModal(false)}
                    className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="mt-2">
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-700 border-dashed rounded-xl">
                    <div className="space-y-1 text-center">
                      <div className="flex text-sm text-gray-600 dark:text-gray-400">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white dark:bg-gray-900 rounded-md font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 focus-within:outline-none"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            multiple
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        PNG, JPG, GIF, MP4, PDF up to 10MB
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="collection"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Add to Collection
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <div className="relative flex-grow focus-within:z-10">
                        <select
                          id="collection"
                          name="collection"
                          className="block w-full rounded-l-md border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-white dark:bg-gray-800"
                        >
                          <option>My Content</option>
                          <option>Favorites</option>
                          <option>Work Projects</option>
                          <option>Personal</option>
                        </select>
                      </div>
                      <button
                        onClick={() => setNewCollectionName("New Collection")}
                        className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-700 text-sm font-medium rounded-r-md text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <Plus className="h-5 w-5 text-gray-400" />
                        <span>New</span>
                      </button>
                    </div>

                    {newCollectionName && (
                      <div className="mt-2 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          value={newCollectionName}
                          onChange={(e) => setNewCollectionName(e.target.value)}
                          className="flex-1 block w-full rounded-l-md border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-white dark:bg-gray-800"
                          placeholder="Collection name"
                        />
                        <button
                          onClick={createCollection}
                          className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-blue-500 text-sm font-medium rounded-r-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <Check className="h-5 w-5" />
                          <span>Create</span>
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="caption"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Caption
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="caption"
                        name="caption"
                        rows={3}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800"
                        placeholder="Add a description..."
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="tags"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Tags
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="tags"
                        name="tags"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800"
                        placeholder="Add tags separated by commas"
                      />
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-6 flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setShowUploadModal(false)}
                      className="inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-700 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentFeed;
