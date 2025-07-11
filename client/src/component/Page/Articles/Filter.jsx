import React, { useState } from "react";
import {
  Search,
  Filter as FilterIcon,
  X,
  Calendar,
  List,
  ArrowUpDown,
  Flame,
} from "lucide-react";

function Filter({ onFilterChange }) {
  const [filters, setFilters] = useState({
    category: "",
    date: "",
    sort: "newest",
    search: "",
  });

  const categories = [
    "Technology",
    "Science",
    "Business",
    "Health",
    "Entertainment",
    "Sports",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = {
      ...filters,
      [name]: value,
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    const newFilters = {
      ...filters,
      search: value,
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const resetFilters = {
      category: "",
      date: "",
      sort: "newest",
      search: "",
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-white  text-sm dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 " />
          </div>
          <input
            type="text"
            name="search"
            value={filters.search}
            onChange={handleSearch}
            placeholder="Search articles..."
            className="pl-10 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md border border-gray-300 dark:border-gray-600 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <List className="h-5 w-5 text-gray-400 " />
          </div>
          <select
            name="category"
            value={filters.category}
            onChange={handleChange}
            className=" pl-10 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md border border-gray-300 dark:border-gray-600 py-2 px-3 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" className="bg-white dark:bg-gray-700 ">
              All Categories
            </option>
            {categories.map((cat) => (
              <option
                key={cat}
                value={cat}
                className="bg-white dark:bg-gray-700"
              >
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Calendar className="h-5 w-5 text-gray-400 " />
          </div>
          <select
            name="date"
            value={filters.date}
            onChange={handleChange}
            className="pl-10 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md border border-gray-300 dark:border-gray-600 py-2 px-3 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" className="bg-white dark:bg-gray-700">
              All Time
            </option>
            <option value="week" className="bg-white dark:bg-gray-700">
              This Week
            </option>
            <option value="month" className="bg-white dark:bg-gray-700">
              This Month
            </option>
            <option value="year" className="bg-white dark:bg-gray-700">
              This Year
            </option>
          </select>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <ArrowUpDown className="h-5 w-5 text-gray-400 " />
          </div>
          <select
            name="sort"
            value={filters.sort}
            onChange={handleChange}
            className="pl-10 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md border border-gray-300 dark:border-gray-600 py-2 px-3 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="newest" className="bg-white dark:bg-gray-700">
              Newest First
            </option>
            <option value="oldest" className="bg-white dark:bg-gray-700">
              Oldest First
            </option>
            <option value="popular" className="bg-white dark:bg-gray-700">
              Most Popular{" "}
              <Flame className="w-4 h-4 inline ml-1 text-orange-500" />
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;
