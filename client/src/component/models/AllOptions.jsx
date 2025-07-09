import React from "react";
import {
  Bookmark,
  ArrowDownToLine,
  Forward,
  OctagonAlert,
  Flag,
  Clock,
  Clock4,
} from "lucide-react";

function AllOptions() {
  return (
    <div className="w-64">
      <ul className="p-3 bg-white dark:bg-gray-950 rounded-xl shadow-lg overflow-hidden dark:shadow-gray-700/50">
        {[
          { icon: <Clock className="w-5 h-5" />, text: "Save to Watch Later" },
          { icon: <Bookmark className="w-5 h-5" />, text: "Save to playlist" },
          { icon: <ArrowDownToLine className="w-5 h-5" />, text: "Download" },
          { icon: <Forward className="w-5 h-5" />, text: "Share" },
          "divider",
          {
            icon: <OctagonAlert className="w-5 h-5" />,
            text: "Not interested",
          },
          { icon: <Clock4 className="w-5 h-5" />, text: "Don't recommend it" },
          { icon: <Flag className="w-5 h-5" />, text: "Report" },
        ].map((item, index) => (
          <React.Fragment key={index}>
            {item === "divider" ? (
              <hr className="my-2 border-gray-200 dark:border-gray-700" />
            ) : (
              <li className="group">
                <button className="w-full flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                  <span className="text-gray-500 group-hover:text-rose-500 dark:text-gray-400 dark:group-hover:text-rose-400 transition-colors duration-200">
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white transition-colors duration-200">
                    {item.text}
                  </span>
                </button>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default AllOptions;
