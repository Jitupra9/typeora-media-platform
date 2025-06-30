import React, { memo, useState, useContext } from "react";
import { ThemeContext } from "../../../context/utils/ThemeProvide";
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
  const [darkMode, setDarkMode] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleDarkMode = () => {
    setTheme(theme === "day" ? "night" : "day");
  };

  const [activeTab, setActiveTab] = useState("security");

  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [accountVisibility, setAccountVisibility] = useState("public");
  const [loginAlerts, setLoginAlerts] = useState(true);

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailReminders, setEmailReminders] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);

  const [newFollowers, setnewFollowers] = useState(true);
  const [commentsOnPost, setcommentsOnPost] = useState(true);
  const [Mentions, setMentions] = useState(true);

  const [allowDownloads, setAllowDownloads] = useState(true);
  const [articleVisibility, setArticleVisibility] = useState("public");
  const [videoVisibility, setVideoVisibility] = useState("public");

  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");

  return (
    <div className={`min-h-screen sm:px-4 transition-colors duration-200`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <SettingsIcon className="h-6 w-6 text-blue-500 dark:text-blue-400" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Account Settings
            </h1>
          </div>
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
        {activeTab === "security" && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <SettingItem
                icon={<Shield className="h-5 w-5 text-green-500" />}
                title="Two-Factor Authentication"
                description="Add an extra layer of security to your account"
                action={
                  <ToggleSwitch
                    enabled={twoFactorAuth}
                    setEnabled={setTwoFactorAuth}
                  />
                }
              />

              <SettingItem
                icon={
                  accountVisibility === "public" ? (
                    <Eye className="h-5 w-5 text-blue-500" />
                  ) : (
                    <EyeOff className="h-5 w-5 text-orange-500" />
                  )
                }
                title="Account Visibility"
                description={
                  accountVisibility === "public"
                    ? "Your profile is visible to everyone"
                    : "Your profile is private"
                }
                action={
                  <select
                    value={accountVisibility}
                    onChange={(e) => setAccountVisibility(e.target.value)}
                    className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1"
                  >
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                  </select>
                }
              />

              <SettingItem
                icon={<AlertCircle className="h-5 w-5 text-yellow-500" />}
                title="Login Alerts"
                description="Get notified about new sign-ins"
                action={
                  <ToggleSwitch
                    enabled={loginAlerts}
                    setEnabled={setLoginAlerts}
                  />
                }
                lastItem={true}
              />
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Active Sessions
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Smartphone className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        iPhone 13 Pro
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        New York, USA • Just now
                      </p>
                    </div>
                  </div>
                  <button className="text-red-500 hover:text-red-700 dark:text-red-400 text-sm font-medium">
                    Log out
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "notifications" && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <SettingItem
                icon={<Bell className="h-5 w-5 text-purple-500" />}
                title="Notifications"
                description="Enable or disable all notifications"
                action={
                  <ToggleSwitch
                    enabled={notificationsEnabled}
                    setEnabled={setNotificationsEnabled}
                  />
                }
              />

              <SettingItem
                icon={<Mail className="h-5 w-5 text-blue-500" />}
                title="Email Reminders"
                description="Receive periodic email updates"
                action={
                  <ToggleSwitch
                    enabled={emailReminders}
                    setEnabled={setEmailReminders}
                  />
                }
              />

              <SettingItem
                icon={<Smartphone className="h-5 w-5 text-green-500" />}
                title="Push Notifications"
                description="Get alerts on your mobile device"
                action={
                  <ToggleSwitch
                    enabled={pushNotifications}
                    setEnabled={setPushNotifications}
                  />
                }
                lastItem={true}
              />
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Notification Preferences
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-gray-700 dark:text-gray-300">
                    New followers
                  </p>
                  <ToggleSwitch
                    enabled={newFollowers}
                    setEnabled={setnewFollowers}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-gray-700 dark:text-gray-300">
                    Comments on your posts
                  </p>
                  <ToggleSwitch
                    enabled={commentsOnPost}
                    setEnabled={setcommentsOnPost}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-gray-700 dark:text-gray-300">Mentions</p>
                  <ToggleSwitch enabled={Mentions} setEnabled={setMentions} />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "content" && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <SettingItem
                icon={<Download className="h-5 w-5 text-blue-500" />}
                title="Allow Content Downloads"
                description="Let others download your articles and videos"
                action={
                  <ToggleSwitch
                    enabled={allowDownloads}
                    setEnabled={setAllowDownloads}
                  />
                }
              />

              <SettingItem
                icon={<FileText className="h-5 w-5 text-green-500" />}
                title="Article Visibility"
                description="Who can see your articles"
                action={
                  <select
                    value={articleVisibility}
                    onChange={(e) => setArticleVisibility(e.target.value)}
                    className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1"
                  >
                    <option value="public">Public</option>
                    <option value="followers">Followers Only</option>
                    <option value="private">Private</option>
                  </select>
                }
              />

              <SettingItem
                icon={<VideoIcon className="h-5 w-5 text-red-500" />}
                title="Video Visibility"
                description="Who can see your videos"
                action={
                  <select
                    value={videoVisibility}
                    onChange={(e) => setVideoVisibility(e.target.value)}
                    className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1"
                  >
                    <option value="public">Public</option>
                    <option value="followers">Followers Only</option>
                    <option value="private">Private</option>
                  </select>
                }
                lastItem={true}
              />
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Content Warnings
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    When you make content private, it will only be visible to
                    you. Existing shares will no longer work.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Disabling downloads will prevent others from saving your
                    content, but they may still take screenshots.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "ownership" && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Change Account Email
              </h2>
              <div className="space-y-4">
                <InputField
                  label="Current Email"
                  type="email"
                  value="user@example.com"
                  disabled
                />
                <InputField
                  label="New Email"
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="Enter new email address"
                />
                <button className="w-full sm:w-auto px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm font-medium transition-colors">
                  Change Email
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Change Phone Number
              </h2>
              <div className="space-y-4">
                <InputField
                  label="Current Phone"
                  type="tel"
                  value="+1 (555) 123-4567"
                  disabled
                />
                <InputField
                  label="New Phone Number"
                  type="tel"
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
                  placeholder="Enter new phone number"
                />
                <button className="w-full sm:w-auto px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm font-medium transition-colors">
                  Change Phone
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Transfer Account Ownership
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Transferring ownership will make another user the admin of
                    this account. You will become a regular member. This action
                    cannot be undone.
                  </p>
                </div>
                <InputField
                  label="Transfer to User"
                  type="text"
                  placeholder="Enter username or email"
                />
                <button className="w-full sm:w-auto px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors">
                  Transfer Ownership
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Danger Zone */}
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
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingItem({ icon, title, description, action, lastItem }) {
  return (
    <div
      className={`flex items-center justify-between p-4 ${
        !lastItem ? "border-b border-gray-200 dark:border-gray-700" : ""
      } hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors`}
    >
      <div className="flex items-center gap-4">
        <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="font-medium text-gray-900 dark:text-white">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {typeof action === "string" ? (
          <>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {action}
            </span>
            <ChevronRight className="h-4 w-4 text-gray-400 dark:text-gray-500" />
          </>
        ) : (
          action
        )}
      </div>
    </div>
  );
}

function ToggleSwitch({ enabled, setEnabled }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={enabled}
        onChange={() => setEnabled(!enabled)}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500 dark:bg-gray-700 dark:peer-checked:bg-blue-500"></div>
    </label>
  );
}

function InputField({ label, type, value, onChange, placeholder, disabled }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${
          disabled ? "opacity-70 cursor-not-allowed" : ""
        }`}
        placeholder={placeholder}
      />
    </div>
  );
}

export default memo(Settings);
