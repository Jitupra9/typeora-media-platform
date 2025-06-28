import React, { memo } from "react";
import {
  AlertTriangle,
  Search,
  Calendar,
  Tag,
  AlertCircle,
  BarChart2,
  Download,
  Layers,
  Bell,
} from "lucide-react";

function HeaderSpecial(props) {
  const {
    searchQuery,
    dateFilter,
    tagFilter,
    typeFilter,
    severityFilter,
    onFilterChange,
  } = props;
  const incidents = props.incident;
  const allTags = [...new Set(incidents.flatMap((incident) => incident.tags))];
  const allTypes = [...new Set(incidents.map((incident) => incident.type))];
  const allSeverities = ["high", "medium", "low"];

  return (
    <div className="rounded-lg overflow-hidden">
      <header className="bg-gradient-to-r  from-blue-400 to-blue-500 dark:from-blue-900 dark:to-blue-950 text-white">
        <div className=" px-4 py-6 ">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-2">
                <AlertTriangle className="w-8 h-8" />
                Incident Tracker
              </h1>
              <p className="mt-2 text-blue-100">
                Real-time tracking of emergencies and critical events
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg flex items-center gap-2 transition-colors">
                <Bell className="w-4 h-4" />
                <span className="text-sm">Alerts</span>
              </button>
              <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg flex items-center gap-2 transition-colors">
                <BarChart2 className="w-4 h-4" />
                <span className="text-sm">Statistics</span>
              </button>
              <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg flex items-center gap-2 transition-colors">
                <Download className="w-4 h-4" />
                <span className="text-sm">Export</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className=" bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 rounded-b-lg">
        <div className=" px-4 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search incidents..."
                value={searchQuery}
                onChange={(e) => onFilterChange("searchQuery", e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="h-4 w-4 text-gray-400" />
              </div>
              <select
                value={dateFilter}
                onChange={(e) => onFilterChange("dateFilter", e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">All Dates</option>
                <option value="2023-06-23">June 23, 2023</option>
                <option value="2023-06-22">June 22, 2023</option>
                <option value="2023-06-21">June 21, 2023</option>
              </select>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Layers className="h-4 w-4 text-gray-400" />
              </div>
              <select
                value={typeFilter}
                onChange={(e) => onFilterChange("typeFilter", e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">All Types</option>
                {allTypes.map((type) => (
                  <option key={type} value={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <AlertCircle className="h-4 w-4 text-gray-400" />
              </div>
              <select
                value={severityFilter}
                onChange={(e) =>
                  onFilterChange("severityFilter", e.target.value)
                }
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">All Severities</option>
                {allSeverities.map((severity) => (
                  <option key={severity} value={severity}>
                    {severity.charAt(0).toUpperCase() + severity.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Tag className="h-4 w-4 text-gray-400" />
              </div>
              <select
                value={tagFilter}
                onChange={(e) => onFilterChange("tagFilter", e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">All Tags</option>
                {allTags.map((tag) => (
                  <option key={tag} value={tag}>
                    #{tag}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(HeaderSpecial);
