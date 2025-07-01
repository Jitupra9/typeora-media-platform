import React, { memo } from "react";
import { Bookmark, Trash2, Share2 } from "lucide-react";
function selectedBox(props) {
  const { selectedItems, clearSelected, deleteSelected } = props;
  return (
    <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3 mb-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
          {selectedItems.length} item{selectedItems.length !== 1 ? "s" : ""}{" "}
          selected
        </span>
        <button
          onClick={clearSelected}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm"
        >
          Clear selection
        </button>
      </div>
      <div className="flex gap-2">
        <button className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 text-sm px-3 py-1.5 bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600">
          <Bookmark size={14} />
          <span>Save</span>
        </button>
        <button className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 text-sm px-3 py-1.5 bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600">
          <Share2 size={14} />
          <span>Share</span>
        </button>
        <button
          onClick={deleteSelected}
          className="flex items-center gap-1 text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 text-sm px-3 py-1.5 bg-white dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600"
        >
          <Trash2 size={14} />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
}

export default memo(selectedBox);
