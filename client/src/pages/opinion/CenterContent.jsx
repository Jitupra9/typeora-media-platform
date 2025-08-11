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
function CenterContent({
  setShowForm,
  setActiveFilter,
  setSearchTerm,
  searchTerm,
  viewMode,
  setViewMode,
  filteredOpinions,
  setSelectedOpinion,
  activeFilter,
  getBadge,
}) {
  return (
    <div className="lg:col-span-7">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4 mb-6">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-medium">
            Y
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="flex-grow text-left px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400 transition-colors"
          >
            What's your opinion?
          </button>
        </div>
        <div className="flex justify-between mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
          <button className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-1 rounded-md">
            <Plus size={16} />
            Media
          </button>
          <button className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-1 rounded-md">
            <Hash size={16} />
            Tags
          </button>
          <button className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-1 rounded-md">
            <BarChart2 size={16} />
            Poll
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4 mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveFilter("trending")}
            className={`px-3 py-1 rounded-md flex items-center gap-2 ${
              activeFilter === "trending"
                ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            <Flame size={16} />
            Trending
          </button>
          <button
            onClick={() => setActiveFilter("recent")}
            className={`px-3 py-1 rounded-md flex items-center gap-2 ${
              activeFilter === "recent"
                ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            <Clock size={16} />
            Recent
          </button>
          <button
            onClick={() => setActiveFilter("following")}
            className={`px-3 py-1 rounded-md flex items-center gap-2 ${
              activeFilter === "following"
                ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            <Users size={16} />
            Following
          </button>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search opinions..."
              className="pl-9 pr-3 py-1.5 bg-gray-50 dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
            <Filter size={16} />
          </button>
        </div>
      </div>

      <div className="flex justify-end mb-4">
        <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-md p-1">
          <button
            onClick={() => setViewMode("compact")}
            className={`px-3 py-1 rounded-md text-sm ${
              viewMode === "compact"
                ? "bg-white dark:bg-gray-600 shadow-sm"
                : ""
            }`}
          >
            Compact
          </button>
          <button
            onClick={() => setViewMode("comfortable")}
            className={`px-3 py-1 rounded-md text-sm ${
              viewMode === "comfortable"
                ? "bg-white dark:bg-gray-600 shadow-sm"
                : ""
            }`}
          >
            Comfortable
          </button>
          <button
            onClick={() => setViewMode("detailed")}
            className={`px-3 py-1 rounded-md text-sm ${
              viewMode === "detailed"
                ? "bg-white dark:bg-gray-600 shadow-sm"
                : ""
            }`}
          >
            Detailed
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredOpinions.length > 0 ? (
          filteredOpinions.map((opinion) => (
            <div
              key={opinion.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow"
              onClick={() => setSelectedOpinion(opinion)}
            >
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-medium">
                      {opinion.author.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{opinion.author.name}</h4>
                        {opinion.author.badge && getBadge(opinion.author.badge)}
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {opinion.timestamp} •{" "}
                        {opinion.author.followers.toLocaleString()} followers
                      </p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                    <MoreHorizontal size={18} />
                  </button>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  {opinion.content.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {opinion.content.body.length > 200 && viewMode !== "detailed"
                    ? `${opinion.content.body.substring(0, 200)}...`
                    : opinion.content.body}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {opinion.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    >
                      <Hash size={12} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Eye size={14} />
                    <span>{opinion.stats.views.toLocaleString()} views</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span>{opinion.stats.comments} comments</span>
                    <span>{opinion.stats.shares} shares</span>
                  </div>
                </div>
              </div>

              <div className="p-2 border-t border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-4 gap-1">
                  <button className="flex items-center justify-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                    <ThumbsUp size={16} />
                    <span>{opinion.stats.likes}</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                    <ThumbsDown size={16} />
                    <span>{opinion.stats.dislikes}</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                    <MessageSquare size={16} />
                    <span>Comment</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Share2 size={16} />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8 text-center">
            <MessageSquare
              size={48}
              className="mx-auto text-gray-400 dark:text-gray-500 mb-4"
            />
            <h3 className="text-xl font-medium mb-2">No opinions found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {searchTerm
                ? "Try adjusting your search or filter criteria"
                : "Be the first to share your perspective in this category!"}
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors inline-flex items-center gap-2"
            >
              <Plus size={16} />
              Create Opinion
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CenterContent;
