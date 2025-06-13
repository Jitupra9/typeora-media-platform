import React from "react";
import {
  Bookmark,
  ArrowDownToLine,
  Forward,
  OctagonAlert,
  Flag,
  ClockAlert,
} from "lucide-react";
function AllOptions() {
  return (
    <div>
      <ul className=" p-5 *:mt-4 bg-white dark:bg-gray-800 rounded-xl px-5 *:flex *:gap-5 font-semibold text-gray-600 dark:text-gray-400 text-sm">
        <li>
          <Bookmark /> <p>Save to playlist</p>
        </li>
        <li>
          <ArrowDownToLine />
          <p> Download</p>
        </li>
        <li>
          <Forward />
          <p> Share</p>
        </li>
        <hr />
        <li>
          <OctagonAlert /> <p>Not interested</p>
        </li>
        <li>
          {" "}
          <ClockAlert />
          <p> Don't recommend it</p>
        </li>
        <li>
          <Flag />
          <p> Report</p>
        </li>
      </ul>
    </div>
  );
}

export default AllOptions;
