import React from "react";
import { Share2, Github, Twitter, Linkedin } from "lucide-react";

function Social() {
  return (
    <div className="p-5 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
      <h3 className="flex items-center gap-3 font-semibold mb-4">
        <Share2 className="w-5 h-5 text-blue-500" />
        Connect With Me
      </h3>

      <div className="flex gap-3">
        <a
          href="/"
          className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="/"
          className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
        >
          <Twitter className="w-5 h-5 text-blue-400" />
        </a>
        <a
          href="/"
          className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
        >
          <Linkedin className="w-5 h-5 text-blue-600" />
        </a>
      </div>
    </div>
  );
}

export default Social;
