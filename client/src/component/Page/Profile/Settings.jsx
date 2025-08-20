import React, { memo, useState, useContext } from "react";
import { ThemeContext } from "../../../context/utils/ThemeProvide";

import Ownership from "./Setting/ownership";
import Security from "./Setting/Security";
import Content from "./Setting/Content";
import Notification from "./Setting/Notification";
import {
  ChevronRight,
  Mail,
  Bell,
  Shield,
  Settings as SettingsIcon,
  Sun,
  Moon,
  Eye,
  EyeOff,
  Download,
  Smartphone,
  AlertCircle,
  FileText,
  Video as VideoIcon,
} from "lucide-react";

function Settings() {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleDarkMode = () => {
    setTheme(theme === "day" ? "night" : "day");
  };

  const [activeTab, setActiveTab] = useState("security");

  return (
    <div className="min-h-screen sm:px-4 transition-colors duration-200 ">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <SettingsIcon className="h-6 w-6 text-blue-500 dark:text-blue-400" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Account Settings
            </h1>
          </div>
          <div className="flex items-center gap-2 ">
            <div className=" bg-gray-700 px-3 py-1 rounded-md">save</div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100  dark:bg-gray-700 text-gray-700 dark:text-gray-200"
              aria-label={
                theme === "day" ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {theme === "day" ? (
                <Sun className="h-5 w-5 text-orange-500" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab("security")}
            className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
              activeTab === "security"
                ? "text-blue-500 border-b-2 border-blue-500 dark:text-blue-400 dark:border-blue-400"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            Security
          </button>
          <button
            onClick={() => setActiveTab("notifications")}
            className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
              activeTab === "notifications"
                ? "text-blue-500 border-b-2 border-blue-500 dark:text-blue-400 dark:border-blue-400"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            Notifications
          </button>
          <button
            onClick={() => setActiveTab("content")}
            className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
              activeTab === "content"
                ? "text-blue-500 border-b-2 border-blue-500 dark:text-blue-400 dark:border-blue-400"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            Content Permissions
          </button>
          <button
            onClick={() => setActiveTab("ownership")}
            className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
              activeTab === "ownership"
                ? "text-blue-500 border-b-2 border-blue-500 dark:text-blue-400 dark:border-blue-400"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            Account Ownership
          </button>
        </div>
        {activeTab === "security" && <Security />}

        {activeTab === "notifications" && <Notification />}

        {activeTab === "content" && <Content />}

        {activeTab === "ownership" && <Ownership />}

        <div className="mt-12 border border-red-200 dark:border-red-900 rounded-lg p-6 bg-red-50 dark:bg-red-900/20">
          <h2 className="text-lg font-semibold text-red-700 dark:text-red-400 mb-3">
            Danger Zone
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-red-700 dark:text-red-400">
                  Deactivate Account
                </p>
                <p className="text-sm text-red-600 dark:text-red-300">
                  Temporarily disable your account
                </p>
              </div>
              <button className="px-4 py-2 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-300 rounded-md text-sm font-medium hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors">
                Deactivate
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-red-700 dark:text-red-400">
                  Delete Account
                </p>
                <p className="text-sm text-red-600 dark:text-red-300">
                  Permanently remove your account and all data
                </p>
              </div>
              <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors">
                Delete <span className=" hidden sm:inline-block">Account</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Settings);
