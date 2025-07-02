import React, { useContext, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Headers } from "../../context/utils/Headercontext";
import StatCard from "./statecard";
import {
  User,
  Lock,
  Mail,
  Eye,
  EyeOff,
  Bell,
  Trash2,
  Download,
  Clock,
  Globe,
  Image,
  Link2,
  MessageSquare,
  Users,
  Shield,
  Video,
  Archive,
  Settings as SettingsIcon,
  Activity,
  MapPin,
  ChevronRight,
  AlertCircle,
  Info,
} from "lucide-react";

function Settings() {
  const { setheaders } = useContext(Headers);

  const categories = useMemo(
    () => [
      { path: "/", name: "HOME" },
      { path: "/Profile", name: "ACCOUNT" },
    ],
    []
  );
  useEffect(() => {
    setheaders(categories);
  }, [setheaders, categories]);
  const accountPublic = true;
  const twoFactorAuth = false;
  const storageUsed = 65;
  const loginLocations = [
    { location: "New York, USA", device: "iPhone 12", time: "2 hours ago" },
    { location: "London, UK", device: "MacBook Pro", time: "1 day ago" },
  ];

  return (
    <div className="min-h-screen  dark:text-gray-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
            <span className="hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer">
              Home
            </span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer">
              <Link to="/profile"> Account</Link>
            </span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-blue-600 dark:text-blue-400">Settings</span>
          </nav>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <SettingsIcon className="w-8 h-8" /> Account Settings
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Manage your account settings and preferences
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={<User className="w-5 h-5" />}
            title="Account Status"
            value="Active"
            variant="success"
          />
          <StatCard
            icon={<Shield className="w-5 h-5" />}
            title="Security Level"
            value={twoFactorAuth ? "High" : "Medium"}
            variant={twoFactorAuth ? "success" : "warning"}
          />
          <StatCard
            icon={<Globe className="w-5 h-5" />}
            title="Storage Used"
            value={`${storageUsed}%`}
            variant={storageUsed > 80 ? "danger" : "info"}
            progress={storageUsed}
          />
          <StatCard
            icon={<Clock className="w-5 h-5" />}
            title="Member Since"
            value="Jan 2023"
            variant="neutral"
          />
        </div>

        {!twoFactorAuth && (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 dark:border-yellow-500 p-4 mb-8 rounded-r-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-500 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-yellow-800 dark:text-yellow-200">
                Security Recommendation
              </h3>
              <p className="text-yellow-700 dark:text-yellow-300 text-sm mt-1">
                Enable Two-Factor Authentication to add an extra layer of
                security to your account.
              </p>
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <Lock className="w-5 h-5" /> Account Security
            </h2>
            <div className="space-y-4">
              <SettingItem
                icon={<Mail />}
                title="Email Address"
                description="john.doe@example.com"
                action={<BlueButton>Change</BlueButton>}
              />
              <SettingItem
                icon={<Lock />}
                title="Password"
                description="Last changed 3 months ago"
                action={<BlueButton>Update</BlueButton>}
              />
              <SettingItem
                icon={<Shield />}
                title="Two-Factor Authentication"
                description="Add an extra layer of security"
                action={<ToggleSwitch enabled={twoFactorAuth} />}
              />
              <SettingItem
                icon={<Clock />}
                title="Recent Activity"
                description="View login history"
                action={<BlueButton>View</BlueButton>}
              />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <User className="w-5 h-5" /> Profile Information
            </h2>
            <div className="space-y-4">
              <SettingItem
                icon={<User />}
                title="Username"
                description="@johndoe"
                action={<BlueButton>Edit</BlueButton>}
              />
              <SettingItem
                icon={<Image />}
                title="Profile Picture"
                description="Upload a new photo"
                action={<BlueButton>Change</BlueButton>}
              />
              <SettingItem
                icon={<Link2 />}
                title="Social Links"
                description="Connect your profiles"
                action={<BlueButton>Manage</BlueButton>}
              />
              <SettingItem
                icon={<Eye />}
                title="Profile Visibility"
                description="Control who sees your profile"
                action={
                  <ToggleSwitch
                    enabled={accountPublic}
                    label={accountPublic ? "Public" : "Private"}
                  />
                }
              />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <Globe className="w-5 h-5" /> Preferences
            </h2>
            <div className="space-y-4">
              <SettingItem
                icon={<Globe />}
                title="Language"
                description="Change interface language"
                action={<Select options={["English", "Hindi", "Spanish"]} />}
              />
              <SettingItem
                icon={<MessageSquare />}
                title="Default Post Visibility"
                description="Set default for new posts"
                action={<Select options={["Public", "Friends", "Private"]} />}
              />
              <SettingItem
                icon={<Archive />}
                title="Auto-Save Drafts"
                description="Save drafts automatically"
                action={<ToggleSwitch enabled={true} />}
              />
              <SettingItem
                icon={<Video />}
                title="Video Quality"
                description="Preferred streaming quality"
                action={<Select options={["Auto", "HD", "SD"]} />}
              />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <Bell className="w-5 h-5" /> Notifications
            </h2>
            <div className="space-y-4">
              <SettingItem
                icon={<Mail />}
                title="Email Notifications"
                description="Receive emails for important updates"
                action={<ToggleSwitch enabled={true} />}
              />
              <SettingItem
                icon={<Bell />}
                title="Push Notifications"
                description="Get alerts on your devices"
                action={<ToggleSwitch enabled={true} />}
              />
              <SettingItem
                icon={<MessageSquare />}
                title="Message Alerts"
                description="Notify about new messages"
                action={<ToggleSwitch enabled={true} />}
              />
              <SettingItem
                icon={<Activity />}
                title="Weekly Digest"
                description="Summary of your activity"
                action={<ToggleSwitch enabled={false} />}
              />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <Shield className="w-5 h-5" /> Privacy
            </h2>
            <div className="space-y-4">
              <SettingItem
                icon={<EyeOff />}
                title="Blocked Users"
                description="Manage your block list"
                action={<BlueButton>Manage</BlueButton>}
              />
              <SettingItem
                icon={<MessageSquare />}
                title="Direct Messages"
                description="Control who can message you"
                action={<Select options={["Everyone", "Friends", "None"]} />}
              />
              <SettingItem
                icon={<MapPin />}
                title="Location Sharing"
                description="Share your location in posts"
                action={<ToggleSwitch enabled={false} />}
              />
              <SettingItem
                icon={<Users />}
                title="Tagging Permissions"
                description="Who can tag you in posts"
                action={<Select options={["Everyone", "Friends", "None"]} />}
              />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <SettingsIcon className="w-5 h-5" /> Advanced
            </h2>
            <div className="space-y-4">
              <SettingItem
                icon={<Download />}
                title="Download Data"
                description="Request your account data"
                action={<BlueButton>Request</BlueButton>}
              />
              <SettingItem
                icon={<Trash2 />}
                title="Delete Account"
                description="Permanently remove your account"
                action={<RedButton>Delete</RedButton>}
                danger
              />
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                <h3 className="font-medium mb-2 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Info className="w-4 h-4" /> Recent Logins
                </h3>
                <div className="space-y-3">
                  {loginLocations.map((login, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-sm"
                    >
                      <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="font-medium">{login.location}</div>
                        <div className="text-gray-500 dark:text-gray-400 text-xs">
                          {login.device} • {login.time}
                        </div>
                      </div>
                      {index === 0 && (
                        <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-0.5 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingItem({ icon, title, description, action, danger = false }) {
  return (
    <div
      className={`flex items-start justify-between py-3 ${
        danger ? "text-red-500 dark:text-red-400" : ""
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`p-2 rounded-lg mt-0.5 ${
            danger
              ? "bg-red-100 dark:bg-red-900/30"
              : "bg-gray-100 dark:bg-gray-800"
          }`}
        >
          {React.cloneElement(icon, { className: "w-4 h-4" })}
        </div>
        <div>
          <div className="font-medium">{title}</div>
          {description && (
            <div
              className={`text-xs ${
                danger
                  ? "text-red-400 dark:text-red-300"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {description}
            </div>
          )}
        </div>
      </div>
      <div className="mt-1">{action}</div>
    </div>
  );
}

function ToggleSwitch({ enabled, label }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`relative w-12 h-6 rounded-full transition-colors ${
          enabled ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"
        }`}
      >
        <div
          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
            enabled ? "left-7" : "left-1"
          }`}
        />
      </div>
      {label && (
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {label}
        </span>
      )}
    </div>
  );
}

function BlueButton({ children }) {
  return (
    <button className="px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors whitespace-nowrap">
      {children}
    </button>
  );
}

function RedButton({ children }) {
  return (
    <button className="px-3 py-1 text-sm bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-300 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors whitespace-nowrap">
      {children}
    </button>
  );
}

function Select({ options }) {
  return (
    <select className="px-2 py-1 text-sm border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 min-w-[100px]">
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  );
}

export default Settings;
