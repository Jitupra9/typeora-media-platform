import React, { memo } from "react";
import {
  UserPlus,
  ChevronRight,
  Users,
  Bookmark,
  TrendingUp,
  Hash,
  Calendar,
  Video,
  MessageSquare,
} from "lucide-react";

function RightSideBar() {
  return (
    <div className="lg:col-span-1 space-y-4 order-3 lg:order-none dark:text-gray-300">
      {/* Friend Suggestions */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
            People You May Know
          </h3>
          <button className="text-sm text-blue-500 hover:text-blue-600">
            See all
          </button>
        </div>
        <div className="space-y-4">
          {friendSuggestions.map((friend) => (
            <div key={friend.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-sm font-medium">{friend.initials}</span>
                </div>
                <div>
                  <h4 className="font-medium text-sm">{friend.name}</h4>
                  <p className="text-xs text-gray-500">
                    {friend.mutualFriends} mutual connections
                  </p>
                </div>
              </div>
              <button className="text-xs px-2 py-1 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                {friend.isFollowing ? "Following" : "Connect"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Topics */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
            Trending Topics
          </h3>
          <button className="text-sm text-blue-500 hover:text-blue-600">
            <TrendingUp className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-3">
          {trendingTopics.map((topic, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center justify-between group"
            >
              <div className="flex items-center gap-2">
                <Hash className="w-4 h-4 text-gray-500" />
                <span className=" font-semibold text-sm text-gray-600 dark:text-gray-400 group-hover:text-blue-500">
                  {topic.name}
                </span>
              </div>
              <span className="text-xs text-gray-500">
                {topic.postCount} posts
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
            Upcoming Events
          </h3>
          <button className="text-sm text-blue-500 hover:text-blue-600">
            See all
          </button>
        </div>
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="flex gap-3">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex flex-col items-center justify-center">
                <span className="text-xs text-blue-500 dark:text-blue-300">
                  {event.month}
                </span>
                <span className="font-bold text-blue-600 dark:text-blue-200">
                  {event.day}
                </span>
              </div>
              <div>
                <h4 className="font-medium text-sm">{event.title}</h4>
                <p className="text-xs text-gray-500">
                  {event.time} • {event.location}
                </p>
                <button className="mt-1 text-xs text-blue-500 hover:text-blue-600 flex items-center gap-1">
                  Learn more <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Groups */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
            Recommended Groups
          </h3>
          <button className="text-sm text-blue-500 hover:text-blue-600">
            See all
          </button>
        </div>
        <div className="space-y-4">
          {recommendedGroups.map((group) => (
            <div key={group.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-sm font-medium">{group.initials}</span>
                </div>
                <div>
                  <h4 className="font-medium text-sm">{group.name}</h4>
                  <p className="text-xs text-gray-500">
                    {group.memberCount} members
                  </p>
                </div>
              </div>
              <button className="text-xs px-2 py-1 rounded-lg bg-blue-500 hover:bg-blue-600 text-white">
                Join
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
            Recent Activity
          </h3>
          <button className="text-sm text-blue-500 hover:text-blue-600">
            <Bookmark className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-sm font-medium">
                    {activity.initials}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-sm">
                  <span className="font-medium">{activity.name}</span>{" "}
                  {activity.action}{" "}
                  {activity.type === "post" ? (
                    <span className="font-medium">{activity.content}</span>
                  ) : activity.type === "event" ? (
                    <>
                      the event{" "}
                      <span className="font-medium">{activity.content}</span>
                    </>
                  ) : (
                    activity.content
                  )}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {activity.time} ago • {activity.comments} comments
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Mock Data
const friendSuggestions = [
  {
    id: 1,
    name: "Priya Sharma",
    initials: "PS",
    mutualFriends: 12,
    isFollowing: false,
  },
  {
    id: 2,
    name: "Rahul Patel",
    initials: "RP",
    mutualFriends: 8,
    isFollowing: false,
  },
  {
    id: 3,
    name: "Ananya Singh",
    initials: "AS",
    mutualFriends: 5,
    isFollowing: true,
  },
];

const trendingTopics = [
  { name: "WebDevelopment", postCount: "12.5K" },
  { name: "JavaScript", postCount: "8.2K" },
  { name: "ReactJS", postCount: "6.7K" },
  { name: "TechNews", postCount: "5.3K" },
];

const upcomingEvents = [
  {
    id: 1,
    month: "OCT",
    day: "15",
    title: "React Conference 2023",
    time: "10:00 AM",
    location: "Virtual",
  },
  {
    id: 2,
    month: "NOV",
    day: "03",
    title: "Web Dev Workshop",
    time: "2:00 PM",
    location: "San Francisco",
  },
];

const recommendedGroups = [
  {
    id: 1,
    name: "JavaScript Developers",
    initials: "JS",
    memberCount: "45K",
  },
  {
    id: 2,
    name: "React Enthusiasts",
    initials: "RE",
    memberCount: "32K",
  },
  {
    id: 3,
    name: "Full Stack Engineers",
    initials: "FS",
    memberCount: "28K",
  },
];

const recentActivities = [
  {
    id: 1,
    name: "Alex Johnson",
    initials: "AJ",
    action: "shared a",
    type: "post",
    content: "new article about React hooks",
    time: "2 hours",
    comments: 5,
  },
  {
    id: 2,
    name: "Sarah Williams",
    initials: "SW",
    action: "registered for",
    type: "event",
    content: "Web Dev Workshop",
    time: "5 hours",
    comments: 12,
  },
  {
    id: 3,
    name: "Michael Brown",
    initials: "MB",
    action: "commented on your",
    type: "post",
    content: "latest project",
    time: "1 day",
    comments: 3,
  },
];

export default memo(RightSideBar);
