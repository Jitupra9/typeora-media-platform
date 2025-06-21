import React, { useState } from "react";
import {
  AlertTriangle,
  Search,
  Calendar,
  MapPin,
  Tag,
  Verified,
  Flame,
  Car,
  Bolt,
  ShieldAlert,
  CloudRain,
  Eye,
  Clock,
  ChevronDown,
  Filter,
  AlertCircle,
  Plus,
  BarChart2,
  Download,
  Layers,
  Bell,
} from "lucide-react";

const incidents = [
  {
    id: 1,
    title: "Forest Fire in Simlipal National Park",
    type: "fire",
    severity: "high",
    tags: ["forest", "wildlife", "emergency"],
    verified: true,
    location: "Odisha, India",
    date: "2023-06-23",
    time: "14:30",
    author: "Forest Dept. Official",
    authorPhoto: "https://i.pravatar.cc/40?img=1",
    views: 1245,
    description:
      "Massive forest fire spreading rapidly in Simlipal National Park. Evacuation of nearby villages underway. Firefighters and helicopters deployed.",
    updates: [
      { time: "15:45", text: "Fire contained in eastern sector" },
      { time: "16:30", text: "Additional teams deployed from Bhubaneswar" },
    ],
  },
  {
    id: 2,
    title: "Major Road Accident on NH16 Near Visakhapatnam",
    type: "accident",
    severity: "medium",
    tags: ["highway", "collision", "injury"],
    verified: false,
    location: "Andhra Pradesh, India",
    date: "2023-06-22",
    time: "08:15",
    author: "Rahul K. (Eyewitness)",
    authorPhoto: "https://i.pravatar.cc/40?img=2",
    views: 892,
    description:
      "Bus-truck head-on collision near Visakhapatnam. 12 injured, 2 critical. Traffic diverted for 3km. Emergency services on site.",
    updates: [
      { time: "09:30", text: "All injured transported to hospitals" },
      { time: "11:00", text: "One lane reopened for traffic" },
    ],
  },
  {
    id: 3,
    title: "Power Grid Failure Affecting 5 Districts",
    type: "utility",
    severity: "high",
    tags: ["electricity", "outage", "infrastructure"],
    verified: true,
    location: "Tamil Nadu, India",
    date: "2023-06-21",
    time: "19:45",
    author: "State Energy Department",
    authorPhoto: "https://i.pravatar.cc/40?img=3",
    views: 2103,
    description:
      "Major power outage affecting Chennai, Kanchipuram, Tiruvallur, Vellore, and Ranipet districts. Restoration teams working, expected resolution by midnight.",
    updates: [
      { time: "21:15", text: "Partial restoration in Chennai central" },
      { time: "23:30", text: "60% power restored across affected areas" },
    ],
  },
];

const typeIcons = {
  fire: <Flame className="w-4 h-4" />,
  accident: <Car className="w-4 h-4" />,
  utility: <Bolt className="w-4 h-4" />,
  crime: <ShieldAlert className="w-4 h-4" />,
  weather: <CloudRain className="w-4 h-4" />,
};

const severityColors = {
  high: "bg-red-500",
  medium: "bg-yellow-500",
  low: "bg-green-500",
};

function IncidentCard({ incident }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
      {/* Card Header */}
      <div className="flex items-start justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-start space-x-3">
          <div
            className={`p-2 rounded-lg ${
              incident.type === "fire"
                ? "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300"
                : incident.type === "accident"
                ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-300"
                : "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300"
            }`}
          >
            {typeIcons[incident.type] || <AlertTriangle className="w-5 h-5" />}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                {incident.title}
              </h3>
              {incident.verified && (
                <Verified className="w-4 h-4 text-blue-500 dark:text-blue-400" />
              )}
            </div>
            <div className="flex items-center mt-1 space-x-3">
              <span className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <MapPin className="w-3 h-3 mr-1" />
                {incident.location}
              </span>
              <span className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <Clock className="w-3 h-3 mr-1" />
                {incident.date} • {incident.time}
              </span>
            </div>
          </div>
        </div>
        <div
          className={`w-3 h-3 rounded-full ${
            severityColors[incident.severity]
          }`}
          title={`${incident.severity} severity`}
        ></div>
      </div>

      {/* Card Body */}
      <div className="p-4">
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          {incident.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {incident.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Updates Preview */}
        {incident.updates && incident.updates.length > 0 && (
          <div className="mb-3">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              <ChevronDown
                className={`w-3 h-3 mr-1 transition-transform ${
                  expanded ? "rotate-180" : ""
                }`}
              />
              {expanded
                ? "Hide updates"
                : `Show updates (${incident.updates.length})`}
            </button>

            {expanded && (
              <div className="mt-2 pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-3">
                {incident.updates.map((update, idx) => (
                  <div key={idx} className="text-xs">
                    <div className="font-medium text-gray-500 dark:text-gray-400">
                      {update.time}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      {update.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <img
              src={incident.authorPhoto}
              alt={incident.author}
              className="w-6 h-6 rounded-full"
            />
            <span className="text-xs text-gray-600 dark:text-gray-400">
              {incident.author}
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="flex items-center text-xs text-gray-500 dark:text-gray-400">
              <Eye className="w-3 h-3 mr-1" />
              {incident.views.toLocaleString()}
            </span>
            <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function IncidentTracker() {
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [tagFilter, setTagFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [severityFilter, setSeverityFilter] = useState("");

  const filteredIncidents = incidents.filter((incident) => {
    const matchesSearch =
      searchQuery === "" ||
      incident.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      incident.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      incident.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDate = dateFilter === "" || incident.date === dateFilter;
    const matchesTag =
      tagFilter === "" || incident.tags.includes(tagFilter.toLowerCase());
    const matchesType = typeFilter === "" || incident.type === typeFilter;
    const matchesSeverity =
      severityFilter === "" || incident.severity === severityFilter;

    return (
      matchesSearch &&
      matchesDate &&
      matchesTag &&
      matchesType &&
      matchesSeverity
    );
  });

  // Extract all unique tags for filter
  const allTags = [...new Set(incidents.flatMap((incident) => incident.tags))];
  const allTypes = [...new Set(incidents.map((incident) => incident.type))];
  const allSeverities = ["high", "medium", "low"];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 text-white">
        <div className="container mx-auto px-4 py-6">
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

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {/* Search */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search incidents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

            {/* Date Filter */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="h-4 w-4 text-gray-400" />
              </div>
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">All Dates</option>
                <option value="2023-06-23">June 23, 2023</option>
                <option value="2023-06-22">June 22, 2023</option>
                <option value="2023-06-21">June 21, 2023</option>
              </select>
            </div>

            {/* Type Filter */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Layers className="h-4 w-4 text-gray-400" />
              </div>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
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

            {/* Severity Filter */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <AlertCircle className="h-4 w-4 text-gray-400" />
              </div>
              <select
                value={severityFilter}
                onChange={(e) => setSeverityFilter(e.target.value)}
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

            {/* Tag Filter */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Tag className="h-4 w-4 text-gray-400" />
              </div>
              <select
                value={tagFilter}
                onChange={(e) => setTagFilter(e.target.value)}
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
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

        {/* Incidents Grid */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {filteredIncidents.length} Incidents Found
          </h2>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            <Plus className="w-4 h-4" />
            <span>Report Incident</span>
          </button>
        </div>

        {filteredIncidents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIncidents.map((incident) => (
              <IncidentCard key={incident.id} incident={incident} />
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 text-center border border-gray-200 dark:border-gray-700">
            <AlertTriangle className="mx-auto w-12 h-12 text-gray-400 dark:text-gray-500 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              No incidents match your filters
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Try adjusting your search criteria or reset all filters
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setDateFilter("");
                setTagFilter("");
                setTypeFilter("");
                setSeverityFilter("");
              }}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default IncidentTracker;
