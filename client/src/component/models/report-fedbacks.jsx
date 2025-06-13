import React from "react";
import { ArrowDownToLine, Bookmark, Flag, MessageSquare } from "lucide-react";
function Reportfedbacks() {
  return (
    <div>
      <ul className=" pb-5 *:pt-4 bg-white dark:bg-gray-800 px-5 *:flex *:gap-5 font-semibold text-gray-600 dark:text-gray-400 text-sm">
        <li>
          <ArrowDownToLine /> <p>Download</p>
        </li>
        <li>
          <Bookmark /> Save
        </li>
        <li>
          <Flag /> Report
        </li>
        <li>
          <MessageSquare /> <p>Send feedback</p>
        </li>
      </ul>
    </div>
  );
}

export default Reportfedbacks;
