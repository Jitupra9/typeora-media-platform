import React, { memo, useState } from "react";
import {
  Search,
  UserPlus,
  Users,
  MessageSquare,
  UserCheck,
  UserX,
  ChevronDown,
  Clock,
  Star,
  ThumbsUp,
  UserCog,
} from "lucide-react";

const Friends = () => {
  const [activeTab, setActiveTab] = useState("connected");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedUser, setExpandedUser] = useState(null);

  const toggleExpand = (id) => {
    setExpandedUser(expandedUser === id ? null : id);
  };

  const contactsData = [
    // Connected Contacts
    {
      id: 1,
      name: "Jitu Pradhan",
      role: "Head Reporter",
      email: "jitpradhan856@gmail.com",
      location: "Bhubaneswar, Odisha",
      company: "Web Bocket",
      availability: "20 Hours/Week",
      status: "connected",
      connectionDate: "Connected 3 months ago",
      lastInteraction: "Messaged 2 days ago",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      lastActive: "2 min ago",
      mutualConnections: 4,
      expertise: ["Investigative Journalism", "Political Reporting"],
      pending: false,
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Field Reporter",
      email: "priya.sharma@example.com",
      location: "Delhi",
      company: "News 24",
      availability: "Full-time",
      status: "connected",
      connectionDate: "Connected 1 month ago",
      lastInteraction: "Shared incident 1 week ago",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      lastActive: "15 min ago",
      mutualConnections: 2,
      expertise: ["Crime Reporting", "Human Interest"],
      pending: false,
    },

    // Pending Requests (Received)
    {
      id: 3,
      name: "Rahul Mehta",
      role: "Photojournalist",
      email: "rahul.mehta@example.com",
      location: "Mumbai",
      company: "Times Network",
      availability: "30 Hours/Week",
      status: "requested",
      requestDate: "Requested 5 days ago",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      lastActive: "1 hour ago",
      mutualConnections: 3,
      expertise: ["Conflict Photography", "Documentary"],
      pending: true,
    },

    // Suggestions
    {
      id: 4,
      name: "Ananya Das",
      role: "Editor",
      email: "ananya.das@example.com",
      location: "Kolkata",
      company: "The Telegraph",
      availability: "Full-time",
      status: "suggestion",
      mutualConnections: 5,
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      lastActive: "3 hours ago",
      expertise: ["Copy Editing", "Fact Checking"],
      pending: false,
    },
    {
      id: 5,
      name: "Arjun Patel",
      role: "News Anchor",
      email: "arjun.patel@example.com",
      location: "Hyderabad",
      company: "India Today",
      availability: "Full-time",
      status: "suggestion",
      mutualConnections: 2,
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      lastActive: "10 min ago",
      expertise: ["Live Reporting", "Interviewing"],
      pending: false,
    },

    // Sent Requests
    {
      id: 6,
      name: "Neha Gupta",
      role: "Correspondent",
      email: "neha.gupta@example.com",
      location: "Chennai",
      company: "NDTV",
      availability: "Full-time",
      status: "sent",
      requestDate: "Sent 2 days ago",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      lastActive: "2 days ago",
      mutualConnections: 1,
      expertise: ["Business News", "Market Analysis"],
      pending: true,
    },
  ];

  const filteredContacts = contactsData
    .filter((contact) => {
      // Filter by tab
      if (activeTab === "connected") return contact.status === "connected";
      if (activeTab === "suggestions") return contact.status === "suggestion";
      if (activeTab === "requested") return contact.status === "requested";
      if (activeTab === "sent") return contact.status === "sent";
      return true;
    })
    .filter((contact) => {
      // Filter by search
      if (!searchQuery) return true;
      return (
        contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.expertise.some((e) =>
          e.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    });

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
            <Users className="text-blue-500" />
            Media Network
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Manage your professional media connections
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search contacts..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto pb-2 mb-6 scrollbar-hide">
        <div className="flex gap-1">
          <button
            onClick={() => setActiveTab("connected")}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap flex items-center gap-1 ${
              activeTab === "connected"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            <UserCheck className="w-4 h-4" />
            Connected
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs px-1.5 py-0.5 rounded-full">
              {contactsData.filter((c) => c.status === "connected").length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("suggestions")}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap flex items-center gap-1 ${
              activeTab === "suggestions"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            <ThumbsUp className="w-4 h-4" />
            Suggestions
          </button>

          <button
            onClick={() => setActiveTab("requested")}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap flex items-center gap-1 ${
              activeTab === "requested"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            <Clock className="w-4 h-4" />
            Requests
            {contactsData.filter((c) => c.status === "requested").length >
              0 && (
              <span className="bg-yellow-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {contactsData.filter((c) => c.status === "requested").length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("sent")}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap flex items-center gap-1 ${
              activeTab === "sent"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            <UserCog className="w-4 h-4" />
            Sent
            {contactsData.filter((c) => c.status === "sent").length > 0 && (
              <span className="bg-gray-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {contactsData.filter((c) => c.status === "sent").length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Contacts List */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-100 dark:border-gray-700 overflow-hidden">
        {filteredContacts.length === 0 ? (
          <div className="p-8 text-center">
            <Users className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-800 dark:text-gray-200">
              No contacts found
            </h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              {searchQuery
                ? "Try adjusting your search"
                : activeTab === "connected"
                ? "You have no connections yet"
                : activeTab === "requested"
                ? "No pending requests"
                : activeTab === "sent"
                ? "No sent requests"
                : "No suggestions available"}
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100 dark:divide-gray-700">
            {filteredContacts.map((contact) => (
              <div
                key={contact.id}
                className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <img
                      src={contact.avatar}
                      alt={contact.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-sm"
                    />
                    {contact.status === "connected" && (
                      <div
                        className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white dark:border-gray-800 ${
                          contact.lastActive.includes("min")
                            ? "bg-green-500"
                            : "bg-gray-400"
                        }`}
                      ></div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-800 dark:text-white">
                          {contact.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {contact.role} • {contact.company}
                        </p>
                      </div>
                      <button
                        onClick={() => toggleExpand(contact.id)}
                        className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
                      >
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 transition-transform ${
                            expandedUser === contact.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-start gap-1">
                        <svg
                          className="h-4 w-4 text-gray-400 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">
                          {contact.email}
                        </span>
                      </div>
                      <div className="flex items-start gap-1">
                        <svg
                          className="h-4 w-4 text-gray-400 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">
                          {contact.location}
                        </span>
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {expandedUser === contact.id && (
                      <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="font-medium text-gray-700 dark:text-gray-300">
                            Availability:
                          </span>
                          <span className="text-gray-600 dark:text-gray-400">
                            {contact.availability}
                          </span>
                        </div>

                        {contact.status === "connected" && (
                          <>
                            <div className="flex items-center gap-2 text-sm">
                              <span className="font-medium text-gray-700 dark:text-gray-300">
                                Connected:
                              </span>
                              <span className="text-gray-600 dark:text-gray-400">
                                {contact.connectionDate}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <span className="font-medium text-gray-700 dark:text-gray-300">
                                Last Interaction:
                              </span>
                              <span className="text-gray-600 dark:text-gray-400">
                                {contact.lastInteraction}
                              </span>
                            </div>
                          </>
                        )}

                        {contact.status === "requested" && (
                          <div className="flex items-center gap-2 text-sm">
                            <span className="font-medium text-gray-700 dark:text-gray-300">
                              Requested:
                            </span>
                            <span className="text-gray-600 dark:text-gray-400">
                              {contact.requestDate}
                            </span>
                          </div>
                        )}

                        {contact.status === "sent" && (
                          <div className="flex items-center gap-2 text-sm">
                            <span className="font-medium text-gray-700 dark:text-gray-300">
                              Sent:
                            </span>
                            <span className="text-gray-600 dark:text-gray-400">
                              {contact.requestDate}
                            </span>
                          </div>
                        )}

                        <div className="flex items-center gap-2 text-sm">
                          <span className="font-medium text-gray-700 dark:text-gray-300">
                            Mutual Connections:
                          </span>
                          <span className="text-gray-600 dark:text-gray-400">
                            {contact.mutualConnections}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-1 mt-2">
                          {contact.expertise.map((expertise, i) => (
                            <span
                              key={i}
                              className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full"
                            >
                              {expertise}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 min-w-[120px]">
                    {contact.status === "requested" ? (
                      <>
                        <button className="flex items-center justify-center gap-1 bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap">
                          <UserCheck className="w-4 h-4" />
                          Accept
                        </button>
                        <button className="flex items-center justify-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap">
                          <UserX className="w-4 h-4" />
                          Decline
                        </button>
                      </>
                    ) : contact.status === "connected" ? (
                      <>
                        <button className="flex items-center justify-center gap-1 bg-blue-50 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 text-blue-600 dark:text-gray-300 px-3 py-1.5 rounded-lg text-sm whitespace-nowrap">
                          <MessageSquare className="w-4 h-4" />
                          Message
                        </button>
                        <button className="flex items-center justify-center gap-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 px-3 py-1.5 rounded-lg text-sm whitespace-nowrap">
                          <Star className="w-4 h-4" />
                          Favorite
                        </button>
                      </>
                    ) : contact.status === "suggestion" ? (
                      <button className="flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap">
                        <UserPlus className="w-4 h-4" />
                        Connect
                      </button>
                    ) : (
                      <button className="flex items-center justify-center gap-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-300 px-3 py-1.5 rounded-lg text-sm whitespace-nowrap">
                        <Clock className="w-4 h-4" />
                        Pending
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(Friends);
