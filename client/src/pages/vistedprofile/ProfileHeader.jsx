import { memo, useEffect, useState } from "react";
import FollowersModal from "../../component/models/FollowersModel";
import FollowingModel from "../../component/models/FollowingModel";
import ChatBox from "./ChatBox";
import {
  Briefcase,
  Clock,
  Award,
  Users,
  Dot,
  Share2,
  Mail,
  Globe,
  UserPlus,
  ChevronDown,
} from "lucide-react";

function VisitedProfileHeader() {
  const [shareActive, setShareActive] = useState(false);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [showChatBox, setShowChatBox] = useState(false);
  const [showChatMenu, setShowChatMenu] = useState(false);
  const [showFollowersModal, setShowFollowersModal] = useState(false);
  const [showFollowingModal, setShowFollowingModal] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! How can I help you?",
      sender: "them",
      time: "10:30 AM",
    },
    {
      id: 2,
      text: "I wanted to ask about the project",
      sender: "me",
      time: "10:32 AM",
    },
  ]);

  const user = {
    Firstname: "Jitu",
    LastName: "Pradhan",
    Role: "Full Stack Developer",
    Email: "jitu@example.com",
    Location: "Bhubaneswar, India",
    Company: "OpenAI",
    Status: "Available",
    AvailableHours: "20 Hours/Week",
  };

  const followers = Array.from({ length: 1243 }, (_, i) => ({
    id: i + 1,
    name: `Follower ${i + 1}`,
    avatar: `https://i.pravatar.cc/150?img=${i % 70}`,
    role: i % 3 === 0 ? "Developer" : i % 3 === 1 ? "Designer" : "Manager",
  }));

  const following = Array.from({ length: 567 }, (_, i) => ({
    id: i + 1,
    name: `Following ${i + 1}`,
    avatar: `https://i.pravatar.cc/150?img=${(i + 10) % 70}`,
    role: i % 3 === 0 ? "Developer" : i % 3 === 1 ? "Designer" : "Manager",
  }));

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: message,
          sender: "me",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      setMessage("");
    }
  };
  useEffect(() => {
    console.log("current user value is :-", user);
  }, []);
  return (
    <div className="bg-white  dark:bg-gray-900 rounded-xl shadow-lg  border border-gray-100 dark:border-gray-800">
      {showChatBox && (
        <ChatBox
          user={user}
          setShowChatMenu={setShowChatMenu}
          showChatMenu={showChatMenu}
          setShowChatBox={setShowChatBox}
          handleSendMessage={handleSendMessage}
          setMessage={setMessage}
          message={message}
        />
      )}

      <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white dark:border-gray-900 flex items-center justify-center text-white">
              <span className="text-xl font-bold">JP</span>
            </div>
            <div className="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-800 dark:text-gray-200">
              {user.Firstname + " " + user.LastName}
              <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full">
                Pro
              </span>
            </h2>
            <div className="flex flex-wrap gap-2 text-gray-500 dark:text-gray-400 text-sm mt-1">
              <span className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" /> {user.Role}
              </span>
              <Dot />
              <span className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                {user.Email}
              </span>
            </div>
            <div className=" relative flex-1">
              <div className="flex items-center gap-5 mt-2 text-sm text-gray-600 dark:text-gray-300">
                <button
                  onClick={() => setShowFollowersModal(true)}
                  className="flex items-center gap-1 hover:text-blue-500"
                >
                  <Users className="w-4 h-4" />
                  <strong>{followers.length}</strong> Followers
                </button>
                <button
                  onClick={() => setShowFollowingModal(true)}
                  className="flex items-center gap-1 hover:text-blue-500"
                >
                  <Users className="w-4 h-4" />
                  <strong>{following.length}</strong> Following
                </button>
              </div>
              {showFollowersModal && (
                <FollowersModal
                  user={user}
                  showFollowersModal={showFollowersModal}
                  setShowFollowersModal={setShowFollowersModal}
                  followers={followers}
                />
              )}

              {showFollowingModal && (
                <FollowingModel
                  user={user}
                  setShowFollowingModal={setShowFollowingModal}
                />
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-3 flex-wrap">
          <button className="flex items-center gap-2 text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-sm transition-colors">
            <UserPlus className="w-4 h-4" /> Follow
          </button>
          <button
            onClick={() => setShowChatBox(true)}
            className="flex items-center gap-2 text-sm bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg shadow-sm transition-colors"
          >
            <Mail className="w-4 h-4" /> Message
          </button>
          <div className="relative">
            <button
              onClick={() => setShareActive(!shareActive)}
              className="flex items-center gap-2 text-sm bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg shadow-sm transition-colors"
            >
              <Share2 className="w-4 h-4" /> Share
            </button>
            {shareActive && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-10 border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2">
                  <TwitterIcon className="w-4 h-4" /> Twitter
                </button>
                <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4" /> LinkedIn
                </button>
                <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2">
                  <LinkIcon className="w-4 h-4" /> Copy Link
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="px-5 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <ProfileDetail
            icon={<Globe className="w-5 h-5 text-blue-500" />}
            label="Location"
            value={user.Location}
            className="bg-blue-50 dark:bg-blue-900/20"
          />
          <ProfileDetail
            icon={<Briefcase className="w-5 h-5 text-purple-500" />}
            label="Company"
            value={user.Company}
            className="bg-purple-50 dark:bg-purple-900/20"
          />
          <ProfileDetail
            icon={<Clock className="w-5 h-5 text-green-500" />}
            label="Available"
            value={user.AvailableHours}
            className="bg-green-50 dark:bg-green-900/20"
          />
          <ProfileDetail
            icon={<Award className="w-5 h-5 text-yellow-500" />}
            label="Status"
            value={user.Status}
            className="bg-yellow-50 dark:bg-yellow-900/20"
          />
        </div>

        <button
          onClick={() => setShowMoreDetails(!showMoreDetails)}
          className="mt-4 flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
        >
          {showMoreDetails ? "Hide additional info" : "Show additional info"}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              showMoreDetails ? "rotate-180" : ""
            }`}
          />
        </button>

        {showMoreDetails && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ProfileDetail
              icon={<TwitterIcon className="w-5 h-5 text-blue-400" />}
              label="Twitter"
              value="@jitu_dev"
              className="bg-gray-50 dark:bg-gray-800"
            />
            <ProfileDetail
              icon={
                <GithubIcon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
              }
              label="GitHub"
              value="github.com/jitu"
              className="bg-gray-50 dark:bg-gray-800"
            />
          </div>
        )}
      </div>
    </div>
  );
}

function ProfileDetail({ icon, label, value, className = "" }) {
  return (
    <div className={`flex items-start gap-3 p-3 rounded-lg ${className}`}>
      <div className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-sm">
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium text-gray-500">{label}</p>
        <p className="font-medium text-gray-800 dark:text-gray-200">{value}</p>
      </div>
    </div>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

export default VisitedProfileHeader;
