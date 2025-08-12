import React, { memo, useState } from "react";
import SettingItem from "./SettingItem";
import ToggleSwitch from "./ToggleSwitch";
import { Shield, Eye, EyeOff, Smartphone, AlertCircle } from "lucide-react";
function Security() {
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [accountVisibility, setAccountVisibility] = useState("public");
  const [loginAlerts, setLoginAlerts] = useState(true);
  return (
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
            <ToggleSwitch enabled={loginAlerts} setEnabled={setLoginAlerts} />
          }
          lastItem={true}
        />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-3 sm:p-6">
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
  );
}

export default memo(Security);
