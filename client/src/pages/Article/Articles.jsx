import React, { memo } from "react";
import people from "../../assets/images/people.jpg";
import sports from "../../assets/images/sports.jpg";
import {
  Bookmark,
  Share2,
  Eye,
  Clock,
  MessageSquare,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

function Article() {
  return (
    <div className="min-h-[88vh] lg:min-h-[85vh]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(12)].map((_, i) => (
            <Link
              to={`/ArticleDetails?id=${i}`}
              key={i}
              className="group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 dark:border-gray-700"
            >
              {/* Article image with hover effect */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={sports}
                  alt="Article thumbnail"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-3 right-3 flex gap-2">
                  <button className="p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors">
                    <Bookmark className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                  </button>
                  <button className="p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors">
                    <Share2 className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                  </button>
                </div>
                <span className="absolute bottom-3 left-3 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                  {["Business", "Sports", "Tech", "Health"][i % 4]}
                </span>
              </div>

              {/* Article content */}
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-2">
                  <div className="flex items-center gap-1">
                    <img
                      src={people}
                      alt="Author"
                      className="w-5 h-5 rounded-full object-cover"
                    />
                    <span>Helena Thomton</span>
                  </div>
                  <span>•</span>
                  <span>1 min ago</span>
                </div>

                <h3 className="font-bold text-gray-800 dark:text-white mb-2 line-clamp-2">
                  Before New York Auto Show, Cars Take Their Own Star Turns
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  The latest automotive innovations are making waves before they
                  even hit the showroom floor at this year's event.
                </p>

                {/* Stats and interactions */}
                <div className="flex justify-between items-center pt-2 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex gap-3 text-xs text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {Math.floor(Math.random() * 50) + 10}k
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" />
                      {Math.floor(Math.random() * 20) + 5}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {Math.floor(Math.random() * 100) + 20}
                    </span>
                  </div>
                  <span className="text-xs flex items-center gap-1 text-gray-500 dark:text-gray-400">
                    <Clock className="w-3 h-3" />5 min read
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load more button */}
        <div className="flex justify-center mt-10">
          <button className="px-6 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(Article);
