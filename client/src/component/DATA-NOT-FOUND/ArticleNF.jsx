import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

function ArticleNF({ handleArticle }) {
  return (
    <div className="flex flex-col items-center justify-center  px-4 text-center">
      <div className="relative mb-8 w-72 h-72">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 opacity-90"></div>
        <svg
          className="relative z-10 w-full h-full p-8 text-gray-400 dark:text-gray-500"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 50H150V150H50V50Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M60 70H140M60 90H140M60 110H120"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M70 130H130"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="4 2"
          />
        </svg>
        <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg flex items-center justify-center">
          <Plus className="w-6 h-6 text-white" strokeWidth={2.5} />
        </div>
      </div>

      <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
        Your Story Starts Here
      </h3>

      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mb-8 leading-relaxed">
        Share your unique perspective with the world. Your first article could
        inspire thousands.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleArticle}
          className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-3.5 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
        >
          <Plus className="w-5 h-5" />
          <span className="font-semibold">New Article</span>
        </button>

        <Link
          to="/Articles"
          className="flex items-center justify-center space-x-2 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3.5 rounded-xl transition-all duration-200"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span className="font-semibold">Find Inspiration</span>
        </Link>
      </div>

      <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
        <p>
          Need help getting started?{" "}
          <Link
            to="/guide"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          >
            Read our writing guide
          </Link>
        </p>
      </div>
    </div>
  );
}

export default memo(ArticleNF);
