import React, { memo, useState } from "react";
import Stats from "./Stats";
import FilterComponent from "./Filter";
import SelectedBox from "./selectedBox";
import GridFormat from "./Formats/Grid";
import TimeLineFormat from "./Formats/TimeLine";
import ListFormat from "./Formats/List";
import Pagination from "../../component/utils/pagination";
import {
  Clock,
  Calendar,
  BarChart2,
  BookOpen,
  User,
  Video,
  MessageCircle,
  History as HistoryIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import data from "./data";
import FormatSearchFilter from "./FormatSearchFilter";
function History() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [showStats, setShowStats] = useState(false);
  const [filters, setFilters] = useState({
    type: "all",
    date: "all-time",
    category: "all",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const historyData = data();

  const filteredHistory = historyData.filter((item) => {
    const matchesType = activeTab === "all" || item.type === activeTab;
    const matchesDate =
      filters.date === "all-time" ||
      (filters.date === "today" &&
        new Date(item.date).toDateString() === new Date().toDateString()) ||
      (filters.date === "week" &&
        new Date() - new Date(item.date) <= 7 * 24 * 60 * 60 * 1000) ||
      (filters.date === "month" &&
        new Date() - new Date(item.date) <= 30 * 24 * 60 * 60 * 1000) ||
      (filters.date === "year" &&
        new Date() - new Date(item.date) <= 365 * 24 * 60 * 60 * 1000);
    const matchesCategory =
      filters.category === "all" || item.category === filters.category;

    if (!searchQuery) return matchesType && matchesDate && matchesCategory;

    const searchLower = searchQuery.toLowerCase();
    const searchableText = [
      item.title || "",
      item.preview || "",
      item.action || "",
      item.details || "",
      item.category || "",
    ]
      .join(" ")
      .toLowerCase();

    return (
      matchesType &&
      matchesDate &&
      matchesCategory &&
      searchableText.includes(searchLower)
    );
  });
  const totalPages = Math.ceil(filteredHistory.length / itemsPerPage);
  const paginatedHistory = filteredHistory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const groupedHistory = filteredHistory.reduce((acc, item) => {
    const date = new Date(item.date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    if (!acc[date]) acc[date] = [];
    acc[date].push(item);
    return acc;
  }, {});
  const viewModes = [
    { id: "grid", icon: <BarChart2 size={18} />, label: "Grid" },
    { id: "list", icon: <BookOpen size={18} />, label: "List" },
    { id: "timeline", icon: <Calendar size={18} />, label: "Timeline" },
  ];
  const typeIcons = {
    article: <BookOpen size={16} className="text-blue-600" />,
    video: <Video size={16} className="text-red-600" />,
    opinion: <MessageCircle size={16} className="text-purple-600" />,
    profile: <User size={16} className="text-green-600" />,
  };
  const toggleSelectItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };
  const clearSelected = () => {
    setSelectedItems([]);
  };
  const deleteSelected = () => {
    console.log("Deleting items:", selectedItems);
    setSelectedItems([]);
  };

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    console.log("Toggling favorite for item:", id);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
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
  const downloadHistory = () => {
    console.log("Downloading history...");
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-7xl mx-auto mb-16 sm:py-4 text-black dark:text-white ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2">
            <HistoryIcon className="text-indigo-600" size={28} />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Your History
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Review your activity across the platform
          </p>
        </div>
        <button
          onClick={() => setShowStats(!showStats)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-colors shadow-md"
        >
          <BarChart2 size={18} />
          <span>View Stats</span>
        </button>
      </div>
      {showStats && (
        <Stats
          setShowStats={setShowStats}
          historyData={historyData}
          formatRelativeTime={formatRelativeTime}
          typeIcons={typeIcons}
        />
      )}
      <FormatSearchFilter
        viewModes={viewModes}
        setViewMode={setViewMode}
        setCurrentPage={setCurrentPage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        downloadHistory={downloadHistory}
        setShowFilters={setShowFilters}
        showFilters={showFilters}
        viewMode={viewMode}
      />
      {showFilters && (
        <FilterComponent
          filters={filters}
          setFilters={setFilters}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          typeIcons={typeIcons}
          historyData={historyData}
        />
      )}
      {selectedItems.length > 0 && (
        <SelectedBox
          selectedItems={selectedItems}
          clearSelected={clearSelected}
          deleteSelected={deleteSelected}
        />
      )}
      {filteredHistory.length === 0 && (
        <div className="text-center py-16 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700">
          <div className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-600 mb-4">
            <Clock size={64} className="mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            No history found
          </h3>
          <p className="mt-1 text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            {searchQuery
              ? "No items match your search. Try different keywords or filters."
              : "Your viewed content and activity will appear here."}
          </p>
          {!searchQuery && (
            <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Browse content
            </button>
          )}
        </div>
      )}
      {filteredHistory.length > 0 && viewMode === "grid" && (
        <GridFormat
          paginatedHistory={paginatedHistory}
          selectedItems={selectedItems}
          toggleSelectItem={toggleSelectItem}
          toggleFavorite={toggleFavorite}
          typeIcons={typeIcons}
          formatRelativeTime={formatRelativeTime}
        />
      )}
      {filteredHistory.length > 0 && viewMode === "list" && (
        <ListFormat
          paginatedHistory={paginatedHistory}
          selectedItems={selectedItems}
          toggleSelectItem={toggleSelectItem}
          toggleFavorite={toggleFavorite}
          typeIcons={typeIcons}
          formatDate={formatDate}
        />
      )}
      {filteredHistory.length > 0 && viewMode === "timeline" && (
        <TimeLineFormat
          groupedHistory={groupedHistory}
          selectedItems={selectedItems}
          toggleSelectItem={toggleSelectItem}
          toggleFavorite={toggleFavorite}
          typeIcons={typeIcons}
          formatDate={formatDate}
        />
      )}
      {filteredHistory.length > itemsPerPage && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}

export default memo(History);
