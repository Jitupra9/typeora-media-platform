import React, { memo } from "react";
import {
  ChevronDown,
  Heart,
  Clock,
  Eye,
  ArrowRight,
  BookOpen,
  PlayCircle,
  Share2,
} from "lucide-react";
function SavedType(props) {
  const { activeTab, setActiveTab } = props;
  return (
    <div className="my-5">
      <ul className="flex gap-x-2 *:px-6 *:py-2 *:rounded-lg *:cursor-pointer ">
        <li
          className={`flex items-center gap-2 ${
            activeTab === "article"
              ? "bg-blue-500 text-white"
              : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
          onClick={() => setActiveTab("article")}
        >
          <BookOpen className="w-4 h-4" />
          Articles
        </li>
        <li
          className={`flex items-center gap-2 ${
            activeTab === "video"
              ? "bg-blue-500 text-white"
              : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
          onClick={() => setActiveTab("video")}
        >
          <PlayCircle className="w-4 h-4" />
          Videos
        </li>
      </ul>
    </div>
  );
}

export default memo(SavedType);
