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
function LeftContent({
  activeFriends,
  suggestedFriends,
  friendRequests,
  handleMessageClick,
  handleAcceptRequest,
  handleRejectRequest,
}) {
  return (
    <div className="  lg:col-span-3 lg:pb-5  hidel_slide_roler xl:h-[calc(100vh-80px)] overflow-y-auto">
      <div className=" grid sm:grid-cols-2 lg:grid-cols-1 gap-2 items-start">
        <div className="dark:bg-gray-900 bg-white rounded-xl shadow p-4">
          <h2 className="font-semibold text-lg mb-4 flex items-center justify-between">
            <span className="flex items-center">
              <Users className="h-5 w-5 mr-2" /> Active Friends
            </span>
            <ChevronDown className="h-5 w-5 text-gray-500" />
          </h2>
          <div className="space-y-3">
            {activeFriends.map((friend) => (
              <div
                key={friend.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                      {friend.avatar}
                    </div>
                    {friend.online && (
                      <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white dark:border-gray-900"></div>
                    )}
                  </div>
                  <div>
                    <p>{friend.name}</p>
                    <p className="text-xs text-gray-500">
                      {friend.mutual} mutual friends
                    </p>
                  </div>
                </div>
                <button
                  className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 text-sm"
                  onClick={() => handleMessageClick(friend)}
                >
                  <MessageCircle className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="dark:bg-gray-900 bg-white rounded-xl shadow p-4">
          <h2 className="font-semibold text-lg mb-4 flex items-center justify-between">
            <span>Friend Requests</span>
            <button className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 text-sm">
              See All
            </button>
          </h2>
          <div className="space-y-4">
            {friendRequests.map((request) => (
              <div
                key={request.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium">
                    {request.avatar}
                  </div>
                  <div>
                    <p className="font-medium">{request.name}</p>
                    <p className="text-xs text-gray-500">
                      {request.mutual} mutual friends
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white"
                    onClick={() => handleAcceptRequest(request.id)}
                  >
                    <Check className="h-4 w-4" />
                  </button>
                  <button
                    className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
                    onClick={() => handleRejectRequest(request.id)}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="dark:bg-gray-900 bg-white rounded-xl shadow p-4">
          <h2 className="font-semibold text-lg mb-4 flex items-center justify-between">
            <span>Suggested Friends</span>
            <button className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 text-sm">
              See All
            </button>
          </h2>
          <div className="space-y-4">
            {suggestedFriends.map((friend) => (
              <div
                key={friend.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white font-medium">
                    {friend.avatar}
                  </div>
                  <div>
                    <p className="font-medium">{friend.name}</p>
                    <p className="text-xs text-gray-500">
                      {friend.mutual} mutual friends
                    </p>
                  </div>
                </div>
                <button className="px-3 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full text-xs">
                  <UserPlus className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftContent;
