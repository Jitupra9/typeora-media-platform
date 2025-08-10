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
function CenterContent({
  activeView,
  stories,
  setActiveTab,
  posts,
  commentVisible,
  commentText,
  setCommentText,
  messageText,
  activeTab,
  handleCommentSubmit,
  handleBackToHome,
  selectedFriend,
  messages,
  setMessageText,
  handleSendMessage,
}) {
  return (
    <div className="lg:col-span-6 pb-3 lg:pb-5 space-y-6 hidel_slide_roler lg:h-[calc(100vh-80px)] overflow-y-auto">
      {activeView === "home" ? (
        <>
          <div className="dark:bg-gray-900 bg-white rounded-2xl shadow-lg p-4">
            <h2 className="font-bold text-lg mb-4 px-2">Your Stories</h2>
            <div className="flex gap-3 px-3 py-3 overflow-x-auto pb-2 hidel_slide_roler">
              {stories.map((story) => (
                <div
                  key={story.id}
                  className="flex-shrink-0 relative transition-transform hover:scale-105"
                >
                  <div
                    className={`h-32 w-24 rounded-xl overflow-hidden relative ${
                      story.hasStory ? "ring-2 ring-blue-500" : ""
                    }`}
                  >
                    <div
                      className={`absolute inset-0 bg-gray-700 flex flex-col items-center justify-end pb-4`}
                    >
                      <div className="relative -mt-8 mb-2">
                        <div
                          className={`h-10 w-10 rounded-full flex items-center justify-center ${
                            story.isNew
                              ? "bg-gradient-to-tr from-pink-500 to-yellow-500 p-0.5"
                              : "bg-gray-200 dark:bg-gray-700"
                          }`}
                        >
                          <div className="h-full w-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center font-bold text-sm">
                            {story.avatar}
                          </div>
                        </div>
                        {story.isNew && (
                          <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                            <span>+</span>
                          </div>
                        )}
                      </div>

                      <p className="text-xs font-semibold text-white z-10 px-2 text-center">
                        {story.user}
                      </p>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>

                    {story.isNew && (
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white rounded-full p-1">
                        <PlusIcon className="h-3 w-3" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="dark:bg-gray-900 bg-white rounded-xl shadow p-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                YU
              </div>
              <button className="flex-1 text-left px-4 py-2 rounded-full dark:bg-gray-800 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500">
                What's on your mind?
              </button>
            </div>
            <div className="flex justify-between mt-4 pt-3 border-t dark:border-gray-700 border-gray-200">
              <button className="flex items-center space-x-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-1.5 rounded-lg flex-1 justify-center">
                <Video className="h-5 w-5 text-red-500" />
                <span>Live Video</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-1.5 rounded-lg flex-1 justify-center">
                <ImageIcon className="h-5 w-5 text-green-500" />
                <span>Photo/Video</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-1.5 rounded-lg flex-1 justify-center">
                <Smile className="h-5 w-5 text-yellow-500" />
                <span>Feeling</span>
              </button>
            </div>
          </div>

          <div className="dark:bg-gray-900 bg-white rounded-xl shadow overflow-hidden">
            <div className="flex border-b dark:border-gray-700 border-gray-200">
              <button
                onClick={() => setActiveTab("posts")}
                className={`flex-1 py-3 text-center font-medium ${
                  activeTab === "posts"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-500"
                }`}
              >
                Posts
              </button>
              <button
                onClick={() => setActiveTab("videos")}
                className={`flex-1 py-3 text-center font-medium ${
                  activeTab === "videos"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-500"
                }`}
              >
                Videos
              </button>
              <button
                onClick={() => setActiveTab("photos")}
                className={`flex-1 py-3 text-center font-medium ${
                  activeTab === "photos"
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-500"
                }`}
              >
                Photos
              </button>
            </div>
          </div>

          {posts.map((post) => (
            <div
              key={post.id}
              className="dark:bg-gray-900 bg-white rounded-xl shadow overflow-hidden"
            >
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                      {post.avatar}
                    </div>
                    <div>
                      <p className="font-medium">{post.user}</p>
                      <p className="text-sm text-gray-500">
                        {post.handle} · {post.time}
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                      <Ellipsis className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="px-4 pb-3">
                <p className="mb-3">{post.content}</p>

                {post.hasImage && (
                  <div
                    className={`relative aspect-video ${post.videoColor} rounded-xl flex items-center justify-center mb-3 text-white font-bold`}
                  >
                    <div className="absolute inset-0 bg-gray-800/10 dark:bg-gray-600/30 rounded-xl"></div>
                    <div className="h-16 w-16 rounded-full bg-blue-500/80 flex items-center justify-center z-10">
                      <ImageIcon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                )}

                {post.hasVideo && selectedFriend && selectedFriend.avatar && (
                  <div
                    className={`relative aspect-video ${post.videoColor} rounded-xl flex items-center justify-center mb-3 text-white font-bold`}
                  >
                    <div className="absolute inset-0 bg-black/10 dark:bg-black/30 rounded-xl"></div>
                    <div className="h-16 w-16 rounded-full bg-blue-500/80 flex items-center justify-center z-10">
                      <Video className="h-6 w-6 text-white" />
                    </div>
                  </div>
                )}
              </div>

              <div className="px-4 py-2 border-t dark:border-gray-700 border-gray-200 text-sm text-gray-500 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    <ThumbsUp className="h-3 w-3" />
                  </div>
                  <span>{post.likes}</span>
                </div>
                <div>
                  <span className="mr-3 hover:underline cursor-pointer">
                    {post.comments} comments
                  </span>
                  <span className="hover:underline cursor-pointer">
                    {post.shares} shares
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 border-t dark:border-gray-700 border-gray-200">
                <button
                  onClick={() => toggleLike(post.id)}
                  className={`flex items-center justify-center space-x-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded ${
                    post.isLiked ? "text-blue-500" : "text-gray-500"
                  }`}
                >
                  <Heart
                    className="h-5 w-5"
                    fill={post.isLiked ? "currentColor" : "none"}
                  />
                  <span>Like</span>
                </button>
                <button
                  onClick={() => toggleComment(post.id)}
                  className="flex items-center justify-center space-x-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-gray-500"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Comment</span>
                </button>
                <div className="relative">
                  <button className="flex items-center justify-center space-x-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-gray-500 w-full">
                    <Share2 className="h-5 w-5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              {commentVisible === post.id && (
                <div className="border-t dark:border-gray-700 border-gray-200 p-4">
                  {post.commentsList.length > 0 && (
                    <div className="space-y-3 mb-4">
                      {post.commentsList.map((comment, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-medium">
                            {comment.user.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <div className="dark:bg-gray-800 bg-gray-100 rounded-2xl px-3 py-2">
                              <p className="font-medium text-sm">
                                {comment.user}
                              </p>
                              <p className="text-sm">{comment.text}</p>
                            </div>
                            <div className="flex space-x-3 text-xs text-gray-500 mt-1 px-3">
                              <span>{comment.time}</span>
                              <button className="hover:underline">Like</button>
                              <button className="hover:underline">Reply</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-medium">
                      YU
                    </div>
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder="Write a comment..."
                        className="w-full pl-3 pr-10 py-2 rounded-full dark:bg-gray-800 bg-gray-100 focus:outline-none"
                      />
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                        <button className="p-1 text-gray-500 hover:text-blue-500">
                          <Smile className="h-4 w-4" />
                        </button>
                        <button className="p-1 text-gray-500 hover:text-blue-500">
                          <ImageIcon className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleCommentSubmit(post.id)}
                          className="p-1 text-blue-500"
                        >
                          <SendHorizonal className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </>
      ) : (
        <div className="dark:bg-gray-900 bg-white rounded-xl shadow overflow-hidden">
          {selectedFriend && (
            <div className="p-4 border-b dark:border-gray-700 border-gray-200 flex items-center">
              <button
                onClick={handleBackToHome}
                className="mr-3 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                  {selectedFriend.avatar}
                </div>
                <div>
                  <p className="font-medium">{selectedFriend.name}</p>
                  <p className="text-xs text-gray-500">
                    {selectedFriend.online ? "Online" : "Offline"}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="p-4 h-[calc(100vh-250px)] overflow-y-auto">
            <div className="space-y-4">
              {messages
                .filter((msg) => msg.friendId === selectedFriend.id)
                .map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.isMe ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.isMe
                          ? "bg-blue-500 text-white rounded-tr-none"
                          : "bg-gray-100 dark:bg-gray-800 rounded-tl-none"
                      }`}
                    >
                      <p>{message.content}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.isMe ? "text-blue-100" : "text-gray-500"
                        }`}
                      >
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="p-4 border-t dark:border-gray-700 border-gray-200">
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-500 hover:text-blue-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <PlusIcon className="h-5 w-5" />
              </button>
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Write a message..."
                  className="w-full pl-4 pr-12 py-2 rounded-full dark:bg-gray-800 bg-gray-100 focus:outline-none"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") handleSendMessage();
                  }}
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                  <button className="p-1 text-gray-500 hover:text-blue-500">
                    <Smile className="h-5 w-5" />
                  </button>
                  <button className="p-1 text-gray-500 hover:text-blue-500">
                    <ImageIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <button
                onClick={handleSendMessage}
                className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
              >
                <SendHorizonal className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CenterContent;
