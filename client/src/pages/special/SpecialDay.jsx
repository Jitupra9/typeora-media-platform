import React, { memo, useState } from "react";
import HeaderSpecial from "./HeaderSpecial";
import IncidentCard from "./IncidentCard";
import StatsCards from "./StatsCards";
import { AlertTriangle, Plus } from "lucide-react";

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

function IncidentTracker() {
  const [filters, setFilters] = useState({
    searchQuery: "",
    dateFilter: "",
    tagFilter: "",
    typeFilter: "",
    severityFilter: "",
  });

  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      searchQuery: "",
      dateFilter: "",
      tagFilter: "",
      typeFilter: "",
      severityFilter: "",
    });
  };

  const filteredIncidents = incidents.filter((incident) => {
    const matchesSearch =
      filters.searchQuery === "" ||
      incident.title
        .toLowerCase()
        .includes(filters.searchQuery.toLowerCase()) ||
      incident.location
        .toLowerCase()
        .includes(filters.searchQuery.toLowerCase()) ||
      incident.description
        .toLowerCase()
        .includes(filters.searchQuery.toLowerCase());

    const matchesDate =
      filters.dateFilter === "" || incident.date === filters.dateFilter;
    const matchesTag =
      filters.tagFilter === "" || incident.tags.includes(filters.tagFilter);
    const matchesType =
      filters.typeFilter === "" || incident.type === filters.typeFilter;
    const matchesSeverity =
      filters.severityFilter === "" ||
      incident.severity === filters.severityFilter;

    return (
      matchesSearch &&
      matchesDate &&
      matchesTag &&
      matchesType &&
      matchesSeverity
    );
  });

  return (
    <div className="dark:text-white pb-10">
      <HeaderSpecial
        incident={incidents}
        searchQuery={filters.searchQuery}
        dateFilter={filters.dateFilter}
        tagFilter={filters.tagFilter}
        typeFilter={filters.typeFilter}
        severityFilter={filters.severityFilter}
        onFilterChange={handleFilterChange}
      />
      <main className=" py-8">
        <div className=" hidden sm:block">
          <StatsCards incidents={incidents} />
        </div>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {filteredIncidents.length} Incidents Found
          </h2>
          <button className=" hidden sm:flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            <Plus className="w-4 h-4" />
            <span>Report Incident</span>
          </button>
        </div>

        {filteredIncidents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              onClick={resetFilters}
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

export default memo(IncidentTracker);
