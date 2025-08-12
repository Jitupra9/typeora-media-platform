import React, { memo, useState, useEffect, useCallback } from "react";
import {
  BellRing,
  Search,
  ChevronDown,
  Moon,
  SunMoon,
  AlignRight,
  Sparkles,
  User,
  FileText,
  Film,
  MessageSquare,
  X,
  Dot,
} from "lucide-react";
import axios from "axios";
function Suggestions({ searchQuery }) {
  const [activeTab, setActiveTab] = useState("articles");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [searchData, setSearchData] = useState({
    articles: [],
    users: [],
    videos: [],
    opinions: [],
  });
  const filteredResults = {
    articles: searchData.articles.filter(
      (article) =>
        article.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(debouncedQuery.toLowerCase())
    ),
    people: searchData.users.filter(
      (person) =>
        person.Firstname.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        person.LastName.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        person.Role.toLowerCase().includes(debouncedQuery.toLowerCase())
    ),
    videos: searchData.videos.filter(
      (video) =>
        video.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(debouncedQuery.toLowerCase())
    ),
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedQuery.length < 1) {
      setSearchData({ articles: [], videos: [], users: [] });
      return;
    }
    handleUniversalSearch(debouncedQuery);
  }, [debouncedQuery]);

  const handleUniversalSearch = useCallback(async (query) => {
    try {
      const { data } = await axios.get(
        `/api/SearchQuery/${encodeURIComponent(query)}`
      );

      if (data.success && data.results) {
        const { articles = [], videos = [], users = [] } = data.results;
        setSearchData({ articles, videos, users });
      } else {
        setSearchData({ articles: [], videos: [], users: [] });
      }
    } catch (error) {
      console.error("Search failed:", error);
      setSearchData({ articles: [], videos: [], users: [] });
    }
  }, []);

  const renderResultItem = useCallback((item, type) => {
    switch (type) {
      case "articles":
        return (
          <div className="flex gap-3">
            <div className="flex-shrink-0 mt-1">
              <FileText size={18} className="text-green-500" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800 dark:text-gray-100">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-1">
                {item.description}
              </p>
              <div className="flex items-center gap-2 mt-1 text-xs text-gray-500 dark:text-gray-400">
                <span>{item.author}</span>
                <span>•</span>
                <span>{item.date}</span>
                <span>•</span>
                <span>{item.readTime}</span>
              </div>
            </div>
          </div>
        );
      case "people":
        return (
          <div className="flex gap-3 items-center">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <User size={16} className="text-blue-500" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <h4 className="font-medium text-gray-800 dark:text-gray-100">
                  {item.Firstname + " " + item.LastName}
                </h4>
                <svg
                  className="w-3 h-3 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <p className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                <span className="text-xs">
                  @{item.Firstname.trim() + item.LastName.trim()}
                </span>
                <Dot /> {item.Role}
              </p>
              {item.followersCount !== undefined && (
                <div>{item.followersCount} follower</div>
              )}
            </div>
          </div>
        );
      case "videos":
        return (
          <div className="flex gap-3">
            <div className="flex-shrink-0 mt-1">
              <Film size={18} className="text-purple-500" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800 dark:text-gray-100">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-1">
                {item.description}
              </p>
              <div className="flex items-center gap-2 mt-1 text-xs text-gray-500 dark:text-gray-400">
                <span>{item.duration}</span>
                <span>•</span>
                <span>{item.views} views</span>
                <span>•</span>
                <span>{item.uploadDate}</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  }, []);
  return (
    <div className="absolute top-full left-0 mt-1 w-full sm:w-96 sm:left-2 md:left-2 lg:left-auto lg:right-3 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50 border border-gray-200 dark:border-gray-700 max-h-[28rem] overflow-hidden flex flex-col">
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {["articles", "people", "videos"].map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-3 text-sm font-medium capitalize transition-colors ${
              activeTab === tab
                ? "text-cyan-600 dark:text-cyan-400 border-b-2 border-cyan-600 dark:border-cyan-400"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="overflow-y-auto flex-1">
        {filteredResults[activeTab].length > 0 ? (
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredResults[activeTab].map((item, index) => (
              <li
                key={`${activeTab}-${index}`}
                className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
              >
                {renderResultItem(item, activeTab)}
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center justify-center p-6 text-center">
            <Search
              size={40}
              className="text-gray-400 dark:text-gray-500 mb-3"
            />
            <h4 className="font-medium text-gray-700 dark:text-gray-300">
              No results found
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              We couldn't find any {activeTab} matching "${searchQuery}"
            </p>
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-2 text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50">
        <div className="flex justify-between items-center">
          <span>Press Enter to search all results</span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-xs">
              Esc
            </kbd>
            <span>to close</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default memo(Suggestions);
