import { useState } from "react";
import { X } from "lucide-react";

const FollowersModal = ({
  user,
  showFollowersModal,
  setShowFollowersModal,
  followers: initialFollowers,
}) => {
  const [followers, setFollowers] = useState(
    initialFollowers.map((follower) => ({
      ...follower,
      isFollowing: follower.isFollowing || false,
      followsYou: follower.followsYou || false,
      isCloseFriend: follower.isCloseFriend || false,
    }))
  );

  const handleFollow = (followerId) => {
    setFollowers(
      followers.map((follower) =>
        follower.id === followerId
          ? { ...follower, isFollowing: true }
          : follower
      )
    );
    console.log(`Followed user with ID: ${followerId}`);
  };

  const handleUnfollow = (followerId) => {
    setFollowers(
      followers.map((follower) =>
        follower.id === followerId
          ? { ...follower, isFollowing: false }
          : follower
      )
    );
    console.log(`Unfollowed user with ID: ${followerId}`);
  };

  const handleRefreshFollowers = () => {
    console.log("Refreshing followers list...");
  };

  if (!showFollowersModal) return null;

  return (
    <div className="absolute z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md max-h-[80vh] overflow-hidden border border-gray-200 dark:border-gray-700 mx-4">
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h3 className="text-lg font-semibold">
            {user.Firstname}'s Followers ({followers.length})
          </h3>
          <button
            onClick={() => setShowFollowersModal(false)}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="overflow-y-auto max-h-[60vh] hidel_slide_roler">
          {followers.slice(0, 50).map((follower) => (
            <div
              key={follower.id}
              className="flex items-center justify-between p-3 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="flex items-center">
                <img
                  src={follower.avatar}
                  alt={follower.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium">{follower.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {follower.role}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                {follower.isFollowing ? (
                  <button
                    className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-600 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500"
                    onClick={() => handleUnfollow(follower.id)}
                  >
                    Following
                  </button>
                ) : follower.followsYou ? (
                  <button
                    className="px-3 py-1 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-600"
                    onClick={() => handleFollow(follower.id)}
                  >
                    Follow Back
                  </button>
                ) : (
                  <button
                    className="px-3 py-1 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-600"
                    onClick={() => handleFollow(follower.id)}
                  >
                    Follow
                  </button>
                )}
                {follower.isCloseFriend && (
                  <span className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
                    Close
                  </span>
                )}
              </div>
            </div>
          ))}
          {followers.length > 50 && (
            <div className="p-3 text-center text-gray-500">
              + {followers.length - 50} more followers
            </div>
          )}
        </div>
        <div className="p-3 border-t dark:border-gray-700 flex justify-between">
          <button
            className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 text-sm font-medium"
            onClick={handleRefreshFollowers}
          >
            Refresh List
          </button>
          <button
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm"
            onClick={() => setShowFollowersModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default FollowersModal;
