import React, { useState } from "react";
import {
  BellRing,
  UserPlus,
  CheckCircle,
  ThumbsUp,
  MessageSquare,
  Share2,
  X,
} from "lucide-react";

function Notification() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "follow",
      user: "Jane Cooper",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      time: "2 min ago",
      read: false,
    },
    {
      id: 2,
      type: "request_accepted",
      user: "John Smith",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 3,
      type: "like",
      user: "Alex Morgan",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      post: "My weekend adventure",
      time: "3 hours ago",
      read: true,
    },
    {
      id: 4,
      type: "comment",
      user: "Sarah Wilson",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      post: "Summer vacation pics",
      comment: "Looks amazing! Where is this?",
      time: "5 hours ago",
      read: true,
    },
    {
      id: 5,
      type: "post_updated",
      content: "Your post has been updated successfully",
      time: "1 day ago",
      read: true,
    },
    {
      id: 6,
      type: "share",
      user: "Mike Taylor",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      post: "Check out this recipe",
      time: "2 days ago",
      read: true,
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({ ...notification, read: true }))
    );
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case "follow":
        return <UserPlus className="w-5 h-5 text-blue-500" />;
      case "request_accepted":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "like":
        return <ThumbsUp className="w-5 h-5 text-pink-500" />;
      case "comment":
        return <MessageSquare className="w-5 h-5 text-purple-500" />;
      case "share":
        return <Share2 className="w-5 h-5 text-orange-500" />;
      default:
        return <CheckCircle className="w-5 h-5 text-blue-500" />;
    }
  };

  const getNotificationContent = (notification) => {
    switch (notification.type) {
      case "follow":
        return (
          <p>
            <span className="font-semibold">{notification.user}</span> started
            following you
          </p>
        );
      case "request_accepted":
        return (
          <p>
            <span className="font-semibold">{notification.user}</span> accepted
            your follow request
          </p>
        );
      case "like":
        return (
          <p>
            <span className="font-semibold">{notification.user}</span> liked
            your post <span className="italic">"{notification.post}"</span>
          </p>
        );
      case "comment":
        return (
          <div>
            <p>
              <span className="font-semibold">{notification.user}</span>{" "}
              commented on your post{" "}
              <span className="italic">"{notification.post}"</span>
            </p>
            <p className="text-sm mt-1 bg-gray-100 dark:bg-gray-700 p-2 rounded">
              "{notification.comment}"
            </p>
          </div>
        );
      case "post_updated":
        return <p>{notification.content}</p>;
      case "share":
        return (
          <p>
            <span className="font-semibold">{notification.user}</span> shared
            your post <span className="italic">"{notification.post}"</span>
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="sm:relative ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 relative"
      >
        <BellRing className=" w-7 sm:w-5 sm:h-5 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 bg-green-600 text-white text-xs rounded-full h-2 w-2 flex items-center justify-center"></span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-4 sm:mt-2  w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h3 className="font-bold text-lg dark:text-white">Notifications</h3>
            <div className="flex space-x-2">
              <button
                onClick={markAllAsRead}
                className="text-sm text-blue-500 hover:text-blue-700 dark:hover:text-blue-400"
              >
                Mark all as read
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="divide-y divide-gray-200 dark:divide-gray-700 max-h-96 overflow-y-auto hidel_slide_roler">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                No notifications yet
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-start ${
                    !notification.read ? "bg-blue-50 dark:bg-gray-900" : ""
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="mr-3 mt-1">
                    {notification.avatar ? (
                      <img
                        src={notification.avatar}
                        alt={notification.user}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                        {getNotificationIcon(notification.type)}
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      {getNotificationContent(notification)}
                      {!notification.read && (
                        <span className="ml-2 w-2 h-2 bg-blue-500 rounded-full"></span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {notification.time}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-3 border-t border-gray-200 dark:border-gray-700 text-center">
            <button className="text-sm text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">
              View all notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notification;
