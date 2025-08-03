import React from "react";
import {
  Send,
  Phone,
  Paperclip,
  Video,
  MoreVertical,
  Check,
  Smile,
  Mic,
  Trash2,
  UserPlus,
  X,
} from "lucide-react";
function ChatBox({
  user,
  showChatMenu,
  setShowChatMenu,
  setShowChatBox,
  handleSendMessage,
  setMessage,
  message,
}) {
  return (
    <div className="fixed bottom-0 right-0 z-50 sm:mr-8 mb-4 w-full  sm:w-80 bg-white dark:bg-gray-800 rounded-t-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 transform rounded-lg">
      <div className=" flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
        <div className=" flex items-center space-x-2">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
              {user.Firstname.charAt(0)}
            </div>
            <div className="absolute bottom-0 right-0 bg-green-500 w-3 h-3 rounded-full border-2 border-white dark:border-gray-800"></div>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-200">
              {user.Firstname}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">Online</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400">
            <Phone className="w-5 h-5" />
          </button>
          <button className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400">
            <Video className="w-5 h-5" />
          </button>
          <div className="relative">
            <button
              onClick={() => setShowChatMenu(!showChatMenu)}
              className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <MoreVertical className="w-5 h-5" />
            </button>

            {showChatMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg z-10 border border-gray-200 dark:border-gray-600">
                <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center gap-2">
                  <UserPlus className="w-4 h-4" /> Add to contacts
                </button>
                <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center gap-2">
                  <Trash2 className="w-4 h-4" /> Clear chat
                </button>
                <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center gap-2">
                  <X className="w-4 h-4" /> Close chat
                </button>
              </div>
            )}
          </div>
          <button
            onClick={() => setShowChatBox(false)}
            className="text-gray-500 hover:text-red-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className=" h-[70vh] sm:h-80 p-3 overflow-y-auto bg-gray-50 dark:bg-gray-900/50">
        <div className="flex items-center justify-center my-4">
          <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
            TODAY
          </div>
        </div>
        <div className="flex mb-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 mr-2">
            {user.Firstname.charAt(0)}
          </div>
          <div>
            <div className="px-3 py-2 rounded-lg rounded-tl-none bg-white dark:bg-gray-700 shadow-sm max-w-xs">
              <p className="text-gray-800 dark:text-gray-200">
                Hi there! How can I help you?
              </p>
            </div>
            <div className="flex items-center mt-1 space-x-1">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                10:30 AM
              </span>
              <Check className="w-3 h-3 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Sent message */}
        <div className="flex justify-end mb-4">
          <div>
            <div className="px-3 py-2 rounded-lg rounded-tr-none bg-blue-100 dark:bg-blue-900 shadow-sm max-w-xs">
              <p className="text-gray-800 dark:text-gray-200">
                I wanted to ask about the project
              </p>
            </div>
            <div className="flex justify-end items-center mt-1 space-x-1">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                10:32 AM
              </span>
              <Check className="w-3 h-3 text-blue-500" />
            </div>
          </div>
        </div>

        {/* Typing indicator */}
        <div className="flex mb-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 mr-2">
            {user.Firstname.charAt(0)}
          </div>
          <div className="px-3 py-2 rounded-lg rounded-tl-none bg-white dark:bg-gray-700 shadow-sm w-20">
            <div className="flex space-x-1">
              <div
                className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                style={{ animationDelay: "0ms" }}
              ></div>
              <div
                className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                style={{ animationDelay: "150ms" }}
              ></div>
              <div
                className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                style={{ animationDelay: "300ms" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 rounded-full">
            <Smile className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 rounded-full">
            <Paperclip className="w-5 h-5" />
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 pr-10 border rounded-full dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Type a message"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
            />
            {message ? (
              <button
                onClick={handleSendMessage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600 dark:text-blue-400"
              >
                <Send className="w-5 h-5" />
              </button>
            ) : (
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Mic className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
