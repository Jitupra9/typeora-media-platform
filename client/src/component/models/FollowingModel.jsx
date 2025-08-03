import React, { useState } from "react";
import { Star, X } from "lucide-react";
function FollowingModel({ user, setShowFollowingModal }) {
  const [following, setFollowing] = useState(
    Array.from({ length: 567 }, (_, i) => ({
      id: i + 1,
      name: `Following ${i + 1}`,
      avatar: `https://i.pravatar.cc/150?img=${(i + 10) % 70}`,
      role: i % 3 === 0 ? "Developer" : i % 3 === 1 ? "Designer" : "Manager",
      isFollowing: i % 2 === 0, // 50% are being followed
      followsYou: i % 3 === 0, // 33% follow you back
      isCloseFriend: i % 8 === 0, // 12.5% are close friends
    }))
  );
  const handleFollow = (userId) => {
    setFollowing(
      following.map((user) =>
        user.id === userId ? { ...user, isFollowing: true } : user
      )
    );
  };

  const handleUnfollow = (userId) => {
    setFollowing(
      following.map((user) =>
        user.id === userId ? { ...user, isFollowing: false } : user
      )
    );
  };

  const handleRefreshFollowing = () => {
    console.log("Refreshing following list...");
  };
  return (
    <div className="absolute z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md max-h-[80vh] overflow-hidden border border-gray-200 dark:border-gray-700 mx-4">
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h3 className="text-lg font-semibold">
            {user.Firstname}'s Following ({following.length})
          </h3>
          <button
            onClick={() => setShowFollowingModal(false)}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="overflow-y-auto max-h-[60vh] hidel_slide_roler">
          {following.slice(0, 50).map((followed) => (
            <div
              key={followed.id}
              className="flex items-center justify-between p-3 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="flex items-center">
                <img
                  src={followed.avatar}
                  alt={followed.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className=" font-medium flex gap-1">
                    {followed.name}{" "}
                    {followed.isCloseFriend && (
                      <div className=" group relative">
                        <Star className=" cursor-pointer  stroke-none fill-green-600 w-3 h-3" />
                        <p className=" text-nowrap hidden group-hover:block -top-3 ml-4 absolute  text-xs font-normal ">
                          ! close friends
                        </p>
                      </div>
                    )}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {followed.role}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                {followed.isFollowing ? (
                  <button
                    className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-600 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500"
                    onClick={() => handleUnfollow(followed.id)}
                  >
                    Following
                  </button>
                ) : followed.followsYou ? (
                  <button
                    className="px-3 py-1 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-600"
                    onClick={() => handleFollow(followed.id)}
                  >
                    Follow Back
                  </button>
                ) : (
                  <button
                    className="px-3 py-1 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-600"
                    onClick={() => handleFollow(followed.id)}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
          ))}
          {following.length > 50 && (
            <div className="p-3 text-center text-gray-500">
              + {following.length - 50} more following
            </div>
          )}
        </div>
        <div className="p-3 border-t dark:border-gray-700 flex justify-between">
          <button
            className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 text-sm font-medium"
            onClick={handleRefreshFollowing}
          >
            Refresh List
          </button>
          <button
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm"
            onClick={() => setShowFollowingModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default FollowingModel;
