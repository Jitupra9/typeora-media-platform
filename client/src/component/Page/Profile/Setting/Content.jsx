import React, { memo, useState } from "react";
import SettingItem from "./SettingItem";
import ToggleSwitch from "./ToggleSwitch";
import {
  Download,
  AlertCircle,
  FileText,
  Video as VideoIcon,
} from "lucide-react";
function Content() {
  const [allowDownloads, setAllowDownloads] = useState(true);
  const [articleVisibility, setArticleVisibility] = useState("public");
  const [videoVisibility, setVideoVisibility] = useState("public");
  return (
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
              When you make content private, it will only be visible to you.
              Existing shares will no longer work.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Disabling downloads will prevent others from saving your content,
              but they may still take screenshots.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Content);
