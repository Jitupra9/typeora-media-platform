import React, { memo, useState } from "react";
import SettingItem from "./SettingItem";
import ToggleSwitch from "./ToggleSwitch";
import { Mail, Bell, Smartphone } from "lucide-react";
function Notification() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailReminders, setEmailReminders] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);

  const [newFollowers, setnewFollowers] = useState(true);
  const [commentsOnPost, setcommentsOnPost] = useState(true);
  const [Mentions, setMentions] = useState(true);
  return (
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
            <p className="text-gray-700 dark:text-gray-300">New followers</p>
            <ToggleSwitch enabled={newFollowers} setEnabled={setnewFollowers} />
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
  );
}

export default memo(Notification);
