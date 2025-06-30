import React, { memo } from "react";
import { Filter, Search, Download, Share2, X, ChevronDown } from "lucide-react";
function SearchFilter(props) {
  const {
    activeTab,
    searchQuery,
    setSearchQuery,
    setShowFilters,
    showFilters,
    sortBy,
    setSortBy,
  } = props;
  return (
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
  );
}

export default memo(SearchFilter);
