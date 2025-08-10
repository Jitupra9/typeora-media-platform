import React from "react";
import {
  Home as HomeIcon,
  Search,
  Bell,
  Mail,
  Bookmark,
  User,
  MoreHorizontal,
  MessageCircle,
  Heart,
  Share2,
  Ellipsis,
  Users,
  Image as ImageIcon,
  Video,
  PlusIcon,
  Smile,
  Flag,
  Music,
  Settings,
  ThumbsUp,
  MessageSquare,
  SendHorizonal,
  ChevronDown,
  X,
  ChevronLeft,
  Check,
  UserPlus,
} from "lucide-react";
function RightContent({ suggestedGroups, upcomingEvents, recentActivities }) {
  return (
    <div className="lg:col-span-3 pb-14 lg:pb-5 space-y-6 hidel_slide_roler xl:h-[calc(100vh-80px)] overflow-y-auto">
      <div className=" grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
        {" "}
        <div className="dark:bg-gray-900 bg-white rounded-xl shadow p-4">
          <h2 className="font-semibold text-lg mb-4 flex items-center justify-between">
            <span>Sponsored</span>
            <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="h-16 w-16 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex-shrink-0 flex items-center justify-center">
                <ImageIcon className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="font-medium">Try Our New Product</p>
                <p className="text-sm text-gray-500">example.com</p>
                <p className="text-xs mt-1">
                  Special discount for our first users!
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="h-16 w-16 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex-shrink-0 flex items-center justify-center">
                <Music className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <p className="font-medium">New Music App</p>
                <p className="text-sm text-gray-500">musicapp.com</p>
                <p className="text-xs mt-1">Stream your favorite songs now</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dark:bg-gray-900 bg-white rounded-xl shadow p-4">
          <h2 className="font-semibold text-lg mb-4 flex items-center justify-between">
            <span>Suggested Groups</span>
            <button className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 text-sm">
              See All
            </button>
          </h2>
          <div className="space-y-4">
            {suggestedGroups.map((group, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-medium">
                    {group.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{group.name}</p>
                    <p className="text-xs text-gray-500">
                      {group.category} · {group.members} members
                    </p>
                  </div>
                </div>
                <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-xs">
                  Join
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="dark:bg-gray-900 bg-white rounded-xl shadow p-4">
          <h2 className="font-semibold text-lg mb-4 flex items-center justify-between">
            <span>Upcoming Events</span>
            <button className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 text-sm">
              See All
            </button>
          </h2>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-red-500 flex items-center justify-center text-white">
                  {event.date.split(" ")[0]}
                </div>
                <div>
                  <p className="font-medium">{event.title}</p>
                  <p className="text-xs text-gray-500">
                    {event.date} · {event.location}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {event.interested} interested
                  </p>
                  <div className="flex space-x-2 mt-2">
                    <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-xs">
                      Interested
                    </button>
                    <button className="px-3 py-1 border dark:border-gray-700 border-gray-300 rounded-full text-xs">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="dark:bg-gray-900 bg-white rounded-xl shadow p-4">
          <h2 className="font-semibold text-lg mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="h-10 w-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-medium flex-shrink-0">
                  {activity.avatar}
                </div>
                <div>
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span>{" "}
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                  <div className="flex space-x-2 mt-1">
                    <button className="text-xs text-blue-500 hover:underline">
                      Like
                    </button>
                    <button className="text-xs text-blue-500 hover:underline">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightContent;
