import React, { useEffect, useState } from "react";
import { getTimeDifference } from "../../utils/getTimeDifference";
import { calculateReadTime } from "../../utils/readTime";
import { Link } from "react-router-dom";
import Sports from "../../../assets/images/sports.jpg";

import {
  Bookmark,
  Eye,
  Share2,
  Play,
  MessageSquare,
  Clock,
  Heart,
} from "lucide-react";
function Masonry(props) {
  const [data, setdata] = useState({});
  const page = props.page;
  useEffect(() => {
    setdata(props.data);
  }, []);

  return (
    <div>
      <Link
        to={`/ArticleDetails?id=${data.id}`}
        key={data.id}
        className="group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="relative h-64 overflow-hidden">
          <img
            src={data.fileUrl || Sports}
            alt="Article thumbnail"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {page === "video" ? (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                <Play className="w-5 h-5 text-gray-800 fill-current" />
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          )}
          <div className="absolute top-3 right-3 flex gap-2">
            <button className="p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors">
              <Bookmark className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            </button>
            <button className="p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors">
              <Share2 className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full mb-2">
              {data.category}
            </span>
            <h3 className="font-bold text-white mb-1 line-clamp-2">
              {data.title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-white/80">
              <div className="flex items-center gap-1">
                <img
                  src={Sports || data.image}
                  alt="Author"
                  className="w-5 h-5 rounded-full object-cover"
                />
                <span>
                  {" "}
                  {data?.userID?.Firstname + " " + data?.userID?.LastName}
                </span>
              </div>
              <span>•</span>
              <span>{getTimeDifference(data.date)}</span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {data.description}
          </p>

          <div className="flex justify-between items-center pt-2 border-t border-gray-100 dark:border-gray-700">
            <div className="flex gap-3 text-xs text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                {data.views || 0}
              </span>
              <span className="flex items-center gap-1">
                <MessageSquare className="w-3 h-3" />
                {data.comments || 0}
              </span>
              <span className="flex items-center gap-1">
                <Heart className="w-3 h-3" />
                {data.like || 0}
              </span>
            </div>
            {page === "article" && (
              <span className="text-xs flex items-center gap-1 text-gray-500 dark:text-gray-400">
                <Clock className="w-3 h-3" />
                {calculateReadTime(data.description || data.content)}
              </span>
            )}
            {page === "video" && (
              <span className="text-xs flex items-center gap-1 text-gray-500 dark:text-gray-400">
                <Clock className="w-3 h-3" />
                {data.duration} watch
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Masonry;
