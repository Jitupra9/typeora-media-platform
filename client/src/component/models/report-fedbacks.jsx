import React from "react";
import { ArrowDownToLine, Bookmark, Flag, MessageSquare } from "lucide-react";

function Reportfedbacks() {
  const options = [
    {
      icon: <ArrowDownToLine className="w-5 h-5" />,
      text: "Download",
      color: "text-blue-500 dark:text-blue-400",
    },
    {
      icon: <Bookmark className="w-5 h-5" />,
      text: "Save",
      color: "text-emerald-500 dark:text-emerald-400",
    },
    {
      icon: <Flag className="w-5 h-5" />,
      text: "Report",
      color: "text-rose-500 dark:text-rose-400",
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      text: "Send feedback",
      color: "text-amber-500 dark:text-amber-400",
    },
  ];

  return (
    <div className="w-56">
      <ul className="p-1 bg-white dark:bg-gray-900  rounded-xl shadow-lg overflow-hidden dark:shadow-gray-700/50">
        {options.map((item, index) => (
          <li key={index} className="group">
            <button className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200">
              <span className={`${item.color} transition-colors duration-200`}>
                {item.icon}
              </span>
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white transition-colors duration-200">
                {item.text}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reportfedbacks;
