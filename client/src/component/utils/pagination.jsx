import React, { memo } from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { useEffect } from "react";
function pagination(props) {
  const totalPages = props.totalPages;
  const currentPage = props.currentPage;
  const setCurrentPage = props.setCurrentPage;
  return (
    <div className="flex justify-center mt-8">
      <nav className="flex items-center gap-1">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setCurrentPage(1)}
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            currentPage === 1
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
        >
          1
        </button>

        {currentPage > 3 && (
          <span className="px-2">
            <MoreHorizontal className="w-4 h-4 text-gray-400" />
          </span>
        )}

        {[currentPage - 1, currentPage, currentPage + 1]
          .filter((page) => page > 1 && page < totalPages)
          .map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {page}
            </button>
          ))}

        {currentPage < totalPages - 2 && (
          <span className="px-2">
            <MoreHorizontal className="w-4 h-4 text-gray-400" />
          </span>
        )}
        {totalPages > 1 && (
          <button
            onClick={() => setCurrentPage(totalPages)}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentPage === totalPages
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            {totalPages}
          </button>
        )}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </nav>
    </div>
  );
}

export default memo(pagination);
