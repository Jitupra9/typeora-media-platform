import React, { memo } from "react";
import { Filter, Search, X, Download } from "lucide-react";
function FormatSearchFilter(props) {
  const {
    viewModes,
    setViewMode,
    setCurrentPage,
    setSearchQuery,
    searchQuery,
    downloadHistory,
    setShowFilters,
    viewMode,
    showFilters,
  } = props;
  return (
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
  );
}

export default memo(FormatSearchFilter);
