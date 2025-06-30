import React, { memo } from "react";
import { BookOpen, Video, MessageCircle, Zap } from "lucide-react";
function ContentType(props) {
  const {
    contentData,
    setActiveTab,
    setSelectedItems,
    setFilters,
    activeTab,
    setSearchQuery,
  } = props;
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {[
        {
          id: "articles",
          label: "Articles",
          count: contentData.articles.length,
          icon: <BookOpen size={16} />,
        },
        {
          id: "videos",
          label: "Videos",
          count: contentData.videos.length,
          icon: <Video size={16} />,
        },
        {
          id: "live",
          label: "Live Videos",
          count: contentData.live.length,
          icon: <Zap size={16} />,
        },
        {
          id: "opinions",
          label: "Opinions",
          count: contentData.opinions.length,
          icon: <MessageCircle size={16} />,
        },
      ].map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            setActiveTab(tab.id);
            setSelectedItems([]);
            setSearchQuery("");
            setFilters({
              status: "all",
              dateRange: "all-time",
              category: "all",
              contentType: "all",
            });
          }}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
            activeTab === tab.id
              ? "bg-blue-600 text-white"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          {tab.icon}
          <span>{tab.label}</span>
          <span className="text-xs bg-gray-200 dark:bg-black/20 px-2 py-0.5 rounded-full">
            {tab.count}
          </span>
        </button>
      ))}
    </div>
  );
}

export default memo(ContentType);
