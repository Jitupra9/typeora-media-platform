import React, {
  memo,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { Headers } from "../../context/utils/Headercontext";
import { ThemeContext } from "../../context/utils/ThemeProvide";
import axios from "axios";
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
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const { headers } = useContext(Headers);
  const { theme, setTheme } = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeTab, setActiveTab] = useState("articles");
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const [searchData, setSearchData] = useState({
    articles: [],
    users: [],
    videos: [],
    opinions: [],
  });

  const categoriesOne = headers.slice(0, 4);
  const categoriesTwo = headers.slice(4);

  const setScreen = useCallback(() => {
    setTheme(theme === "day" ? "night" : "day");
  }, [theme, setTheme]);

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [searchQuery]);

  const handleClickOutside = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowSuggestions(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

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

  const removeSearch = useCallback(() => {
    setSearchQuery("");
    setSearchData({ articles: [], videos: [], users: [] });
    setShowSuggestions(false);
    inputRef.current?.focus();
  }, []);

  const handleInputChange = useCallback((e) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim().length > 0) {
      setShowSuggestions(true);
    }
  }, []);

  const handleInputFocus = useCallback(() => {
    if (searchQuery.trim().length > 0) {
      setShowSuggestions(true);
    }
  }, [searchQuery]);

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
    <div className="relative w-full bg-white text-gray-500 font-semibold dark:bg-gray-900 border-b border-gray-200 dark:border-gray-900 dark:border-opacity-70 dark:text-gray-400">
      <nav className="flex flex-col sm:flex-row justify-between items-center px-3 text-xs">
        <div className="flex items-center gap-x-6">
          <Link
            to="/"
            className="hidden sm:flex lg:hidden items-center gap-2 py-3 group"
          >
            <Sparkles
              size={20}
              className="text-cyan-600 dark:text-cyan-400 group-hover:rotate-12 transition-transform"
            />
            <span className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-purple-400">
              Typeora
            </span>
          </Link>
          <div className="hidden sm:flex lg:hidden items-center border border-gray-500 rounded-lg px-3 py-1 text-sm hover:border-cyan-600 dark:hover:border-cyan-400 transition-colors">
            <input
              ref={inputRef}
              className="outline-none border-none bg-transparent w-32 sm:w-44 placeholder-gray-400 dark:placeholder-gray-500"
              type="text"
              placeholder="Search Typeora..."
              value={searchQuery}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            {searchQuery ? (
              <X
                size={18}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors cursor-pointer"
                onClick={removeSearch}
              />
            ) : (
              <Search className="text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors" />
            )}
          </div>
          <ul className="hidden lg:flex items-center gap-x-6 *:py-3 *:tracking-wide *:cursor-pointer">
            {categoriesOne.map((item, i) => (
              <li
                key={i}
                className={`relative group ${
                  location.pathname === item.path
                    ? "text-cyan-600 dark:text-cyan-400"
                    : "hover:text-gray-800 dark:hover:text-gray-200"
                }`}
              >
                <Link to={item.path}>
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-cyan-600 dark:bg-cyan-400 transition-all duration-300 ${
                      location.pathname === item.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
            {categoriesTwo.length > 0 && (
              <li className="relative group flex items-center gap-1 cursor-pointer hover:text-gray-800 dark:hover:text-gray-200">
                More{" "}
                <ChevronDown
                  size={16}
                  className="transition-transform group-hover:rotate-180"
                />
                <ul className="absolute dark:bg-gray-900 bg-white left-0 top-full -ml-12 z-30 w-40 py-2 mt-2 rounded-lg text-center shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 border border-gray-100 dark:border-gray-700">
                  {categoriesTwo.map((item, i) => (
                    <li
                      key={i}
                      className="py-3 dark:hover:bg-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <Link to={item.path} className="block">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            )}
          </ul>
        </div>

        <div className="w-full sm:w-fit flex flex-row-reverse md:flex-row justify-between sm:justify-end sm:gap-x-3 items-center py-3">
          <div className="hidden sm:flex items-center gap-x-2 cursor-pointer *:px-2">
            <BellRing
              size={36}
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            />
            <div className="border-l-2 lg:border-x-2">
              {theme === "day" ? (
                <SunMoon
                  className="text-yellow-500 transition-transform duration-300 ease-in-out hover:rotate-[360deg] hover:text-yellow-600"
                  onClick={setScreen}
                />
              ) : (
                <Moon
                  onClick={setScreen}
                  className="transition-transform duration-300 ease-in-out hover:rotate-[360deg] hover:text-cyan-400"
                />
              )}
            </div>
          </div>
          <div
            onClick={() => {
              props.sidebar.setsidebarActive(!props.sidebar.sidebarActive);
            }}
            className="lg:hidden cursor-pointer border border-gray-300 border-opacity-30 rounded-full p-1 flex items-center justify-center shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <AlignRight className="w-7 h-7 sm:w-4 sm:h-4" />
          </div>
          <div className="flex lg:flex items-center" ref={searchRef}>
            <div className="flex sm:hidden lg:flex items-center border border-gray-300 rounded-lg px-3 py-2 text-sm hover:border-cyan-600 dark:hover:border-cyan-400 transition-colors">
              <input
                ref={inputRef}
                className="outline-none border-none bg-transparent w-32 sm:w-44 placeholder-gray-400 dark:placeholder-gray-500"
                type="text"
                placeholder="Search Typeora..."
                value={searchQuery}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              {searchQuery ? (
                <X
                  size={18}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors cursor-pointer"
                  onClick={removeSearch}
                />
              ) : (
                <Search className="text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors" />
              )}
            </div>
            {showSuggestions && (
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
                        We couldn't find any {activeTab} matching "{searchQuery}
                        "
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
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default memo(Header);
