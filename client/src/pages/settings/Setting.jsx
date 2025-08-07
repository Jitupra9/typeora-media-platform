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
  Heart,
  Bookmark,
  Filter,
  ShieldAlert,
  Palette,
  Moon,
  Sun,
  Smartphone,
  CreditCard,
  Calendar,
  Gift,
  Headphones,
  HelpCircle,
  ShieldCheck,
  Flag,
  Zap,
  Battery,
  Wifi,
  Database,
  BellOff,
  Volume2,
  Mic,
  Keyboard,
  MousePointer,
  Monitor,
  Smartphone as Device,
  Cloud,
} from "lucide-react";

function SettingItem({ icon, title, description, action, danger = false }) {
  return (
    <div
      className={`flex items-start justify-between gap-4 ${
        danger ? "text-red-600 dark:text-red-400" : ""
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`p-2 rounded-lg ${
            danger
              ? "bg-red-50 dark:bg-red-900/20"
              : "bg-gray-50 dark:bg-gray-800"
          }`}
        >
          {React.cloneElement(icon, {
            className: `w-4 h-4 ${
              danger ? "text-red-500" : "text-gray-500 dark:text-gray-400"
            }`,
          })}
        </div>
        <div>
          <h3
            className={`font-medium ${
              danger
                ? "text-red-600 dark:text-red-400"
                : "text-gray-900 dark:text-gray-100"
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-sm ${
              danger
                ? "text-red-500 dark:text-red-400"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
      <div className="flex-shrink-0">{action}</div>
    </div>
  );
}

function ToggleSwitch({ enabled, label }) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
          enabled ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-700"
        }`}
        onClick={() => {}} // Add your toggle handler here
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            enabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
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
    <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
      {children}
    </button>
  );
}

function RedButton({ children }) {
  return (
    <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
      {children}
    </button>
  );
}

function Select({ options, selected }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(
    selected || options[0]
  );

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-between items-center w-full px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {selectedOption}
        <ChevronRight
          className={`w-4 h-4 ml-2 transform ${isOpen ? "rotate-90" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-md shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <div className="py-1">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedOption(option);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  selectedOption === option
                    ? "bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

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
  const darkModeEnabled = true;
  const autoPlayVideos = false;
  const restrictedMode = true;
  const batterySaver = false;

  const loginLocations = [
    { location: "New York, USA", device: "iPhone 12", time: "2 hours ago" },
    { location: "London, UK", device: "MacBook Pro", time: "1 day ago" },
    { location: "Tokyo, Japan", device: "iPad Air", time: "3 days ago" },
  ];

  const connectedDevices = [
    { name: "iPhone 12", os: "iOS 15.4", lastActive: "Now" },
    { name: "MacBook Pro", os: "macOS 12.3", lastActive: "2 hours ago" },
    { name: "iPad Air", os: "iPadOS 15.4", lastActive: "1 day ago" },
  ];

  return (
    <div className="min-h-screen dark:text-gray-300 mb-20">
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
          {/* Security & Privacy Section */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5" /> Security & Privacy
            </h2>
            <div className="space-y-4">
              <SettingItem
                icon={<Lock />}
                title="Password"
                description="Last changed 3 months ago"
                action={<BlueButton>Update</BlueButton>}
              />
              <SettingItem
                icon={<Shield />}
                title="Two-Factor Auth"
                description="Add extra security"
                action={<ToggleSwitch enabled={twoFactorAuth} />}
              />
              <SettingItem
                icon={<ShieldAlert />}
                title="Login Alerts"
                description="Get notified of new logins"
                action={<ToggleSwitch enabled={true} />}
              />
              <SettingItem
                icon={<Database />}
                title="Data Permissions"
                description="Control third-party access"
                action={<BlueButton>Manage</BlueButton>}
              />
              <SettingItem
                icon={<Flag />}
                title="Content Reporting"
                description="Manage reporting preferences"
                action={<BlueButton>Settings</BlueButton>}
              />
            </div>
          </div>

          {/* Post & Content Preferences */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <MessageSquare className="w-5 h-5" /> Post & Content
            </h2>
            <div className="space-y-4">
              <SettingItem
                icon={<MessageSquare />}
                title="Default Post Privacy"
                description="Set default for new posts"
                action={<Select options={["Public", "Friends", "Private"]} />}
              />
              <SettingItem
                icon={<Heart />}
                title="Like Visibility"
                description="Who can see your likes"
                action={<Select options={["Public", "Friends", "Private"]} />}
              />
              <SettingItem
                icon={<Bookmark />}
                title="Saved Posts"
                description="Private by default"
                action={<ToggleSwitch enabled={true} label="Private" />}
              />
              <SettingItem
                icon={<Video />}
                title="Auto-play Videos"
                description="Play videos automatically"
                action={<ToggleSwitch enabled={autoPlayVideos} />}
              />
              <SettingItem
                icon={<Filter />}
                title="Content Filters"
                description="Filter sensitive content"
                action={<BlueButton>Configure</BlueButton>}
              />
            </div>
          </div>

          {/* Safe Browsing & Restrictions */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <ShieldAlert className="w-5 h-5" /> Safe Browsing
            </h2>
            <div className="space-y-4">
              <SettingItem
                icon={<Shield />}
                title="Restricted Mode"
                description="Limit sensitive content"
                action={<ToggleSwitch enabled={restrictedMode} />}
              />
              <SettingItem
                icon={<Filter />}
                title="Content Filters"
                description="Filter mature content"
                action={<Select options={["Strict", "Moderate", "Off"]} />}
              />
              <SettingItem
                icon={<EyeOff />}
                title="Hide Sensitive Media"
                description="Blur sensitive images"
                action={<ToggleSwitch enabled={true} />}
              />
              <SettingItem
                icon={<Flag />}
                title="Report Settings"
                description="Configure reporting options"
                action={<BlueButton>Manage</BlueButton>}
              />
              <SettingItem
                icon={<HelpCircle />}
                title="Safety Resources"
                description="Learn about online safety"
                action={<BlueButton>View</BlueButton>}
              />
            </div>
          </div>

          {/* Notifications Section */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <Bell className="w-5 h-5" /> Notifications
            </h2>
            <div className="space-y-4">
              <SettingItem
                icon={<Mail />}
                title="Email Notifications"
                description="Receive emails for updates"
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
              <SettingItem
                icon={<BellOff />}
                title="Do Not Disturb"
                description="Pause notifications"
                action={<BlueButton>Schedule</BlueButton>}
              />
            </div>
          </div>

          {/* Devices & Apps Section */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <Smartphone className="w-5 h-5" /> Devices & Apps
            </h2>
            <div className="space-y-4">
              <SettingItem
                icon={<Device />}
                title="Connected Devices"
                description={`${connectedDevices.length} devices`}
                action={<BlueButton>Manage</BlueButton>}
              />
              <SettingItem
                icon={<Wifi />}
                title="Data Saver"
                description="Reduce data usage"
                action={<ToggleSwitch enabled={false} />}
              />
              <SettingItem
                icon={<Battery />}
                title="Battery Saver"
                description="Optimize for battery life"
                action={<ToggleSwitch enabled={batterySaver} />}
              />
              <SettingItem
                icon={<Cloud />}
                title="Auto Backup"
                description="Backup your data"
                action={<ToggleSwitch enabled={true} />}
              />
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                <h3 className="font-medium mb-2 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Info className="w-4 h-4" /> Active Sessions
                </h3>
                <div className="space-y-3">
                  {connectedDevices.map((device, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-sm"
                    >
                      <div
                        className={`w-2 h-2 rounded-full flex-shrink-0 ${
                          index === 0 ? "bg-green-500" : "bg-gray-400"
                        }`}
                      ></div>
                      <div className="flex-1">
                        <div className="font-medium">{device.name}</div>
                        <div className="text-gray-500 dark:text-gray-400 text-xs">
                          {device.os} • {device.lastActive}
                        </div>
                      </div>
                      {index === 0 && (
                        <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-0.5 rounded-full">
                          Active
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Accessibility Section */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <Headphones className="w-5 h-5" /> Accessibility
            </h2>
            <div className="space-y-4">
              <SettingItem
                icon={<Palette />}
                title="Theme"
                description="Appearance settings"
                action={
                  <Select
                    options={["System", "Light", "Dark"]}
                    selected={darkModeEnabled ? "Dark" : "Light"}
                  />
                }
              />
              <SettingItem
                icon={<Volume2 />}
                title="Audio Descriptions"
                description="For video content"
                action={<ToggleSwitch enabled={false} />}
              />
              <SettingItem
                icon={<Keyboard />}
                title="Keyboard Shortcuts"
                description="Enable quick navigation"
                action={<ToggleSwitch enabled={true} />}
              />
              <SettingItem
                icon={<MousePointer />}
                title="Pointer Size"
                description="Adjust cursor size"
                action={<Select options={["Small", "Medium", "Large"]} />}
              />
              <SettingItem
                icon={<Monitor />}
                title="Display Size"
                description="Adjust text and elements"
                action={<Select options={["Default", "Large", "Larger"]} />}
              />
              <SettingItem
                icon={<Mic />}
                title="Voice Control"
                description="Navigate with voice commands"
                action={<ToggleSwitch enabled={false} />}
              />
            </div>
          </div>

          {/* Payments & Subscriptions */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
              <CreditCard className="w-5 h-5" /> Payments
            </h2>
            <div className="space-y-4">
              <SettingItem
                icon={<CreditCard />}
                title="Payment Methods"
                description="Visa •••• 4242"
                action={<BlueButton>Manage</BlueButton>}
              />
              <SettingItem
                icon={<Zap />}
                title="Premium Membership"
                description="Inactive"
                action={<BlueButton>Upgrade</BlueButton>}
              />
              <SettingItem
                icon={<Gift />}
                title="Gift Cards"
                description="Redeem or purchase"
                action={<BlueButton>View</BlueButton>}
              />
              <SettingItem
                icon={<Clock />}
                title="Billing History"
                description="View past transactions"
                action={<BlueButton>View</BlueButton>}
              />
              <SettingItem
                icon={<HelpCircle />}
                title="Payment Support"
                description="Get help with payments"
                action={<BlueButton>Contact</BlueButton>}
              />
            </div>
          </div>

          {/* Advanced Settings */}
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
              <SettingItem
                icon={<Globe />}
                title="Language & Region"
                description="English (United States)"
                action={<BlueButton>Change</BlueButton>}
              />
              <SettingItem
                icon={<Database />}
                title="Cache & Storage"
                description="Clear temporary files"
                action={<BlueButton>Clear</BlueButton>}
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
                      <div
                        className={`w-2 h-2 rounded-full flex-shrink-0 ${
                          index === 0 ? "bg-green-500" : "bg-gray-400"
                        }`}
                      ></div>
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

export default Settings;
