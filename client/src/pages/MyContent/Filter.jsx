import React, { memo } from "react";

function FilterSection(props) {
  const { filters, setFilters, activeTab, contentData } = props;
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 mb-6 border border-gray-200 dark:border-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Status
          </label>
          <select
            className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
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
              ...new Set(contentData[activeTab].map((item) => item.category)),
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
  );
}

export default memo(FilterSection);
