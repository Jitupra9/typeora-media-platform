import React, { memo } from "react";
import { AlertTriangle, Verified, Flame, Bolt } from "lucide-react";

function StatsCards(props) {
  const incidents = props.incidents;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Total Incidents
            </p>
            <p className="text-2xl font-bold">{incidents.length}</p>
          </div>
          <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
            <AlertTriangle className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              High Severity
            </p>
            <p className="text-2xl font-bold">
              {incidents.filter((i) => i.severity === "high").length}
            </p>
          </div>
          <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
            <Flame className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Verified Reports
            </p>
            <p className="text-2xl font-bold">
              {incidents.filter((i) => i.verified).length}
            </p>
          </div>
          <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
            <Verified className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Active Today
            </p>
            <p className="text-2xl font-bold">
              {incidents.filter((i) => i.date === "2023-06-23").length}
            </p>
          </div>
          <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
            <Bolt className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(StatsCards);
