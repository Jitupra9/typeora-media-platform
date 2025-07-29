import React, { useState, useEffect, memo, useContext } from "react";
import { BarChart2 } from "lucide-react";
import { ProfileDataContext } from "../../../context/page/ProfileContext";
function ProfileStats() {
  const { contextValue } = useContext(ProfileDataContext);

  const [stats, setStats] = useState({
    articles: 0,
    followers: 0,
    following: 0,
    views: 0,
  });
  useEffect(() => {
    setStats((prev) => ({
      ...prev,
      articles: contextValue?.TotalData?.totalArticle,
    }));
  }, [contextValue.TotalData]);
  return (
    <div className="p-5 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
      <h3 className="flex items-center gap-3 font-semibold mb-4">
        <BarChart2 className="w-5 h-5 text-green-500" />
        Your Stats
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <p className="text-gray-500 dark:text-gray-400 text-sm">Articles</p>
          <p className="text-xl font-bold">{stats.articles}</p>
        </div>
        <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <p className="text-gray-500 dark:text-gray-400 text-sm">Followers</p>
          <p className="text-xl font-bold">{stats.followers}</p>
        </div>
        <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <p className="text-gray-500 dark:text-gray-400 text-sm">Following</p>
          <p className="text-xl font-bold">{stats.following}</p>
        </div>
        <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <p className="text-gray-500 dark:text-gray-400 text-sm">Views</p>
          <p className="text-xl font-bold">{stats.views.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default memo(ProfileStats);
