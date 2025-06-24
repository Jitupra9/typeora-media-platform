import React, { memo, useContext, useMemo, useEffect, useState } from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileSidebar from "./ProfileSidebar";
import Personalinfo from "./component/Personalinfo";
import NewArticle from "./component/NewArticle";
import { Headers } from "../../context/utils/Headercontext";
import { IsAuthnticate } from "../../context/Auth/IsAuth";
import {
  User,
  BookOpen,
  Video,
  Settings,
  BarChart2,
  Users as FriendsIcon,
} from "lucide-react";

function Profile() {
  const { setheaders } = useContext(Headers);
  const [isactive, setisactive] = useState("Personal");
  const { Auth } = useContext(IsAuthnticate);
  const [profileCompletion, setProfileCompletion] = useState(75);
  const [stats, setStats] = useState({
    articles: 24,
    followers: 1342,
    following: 543,
    views: 12500,
  });
  useEffect(() => {
    setProfileCompletion(60);
    setStats((prev) => ({
      ...prev,
      articles: 24,
      followers: 1342,
      following: 543,
      views: 12500,
    }));
  }, [stats, profileCompletion]);
  const categories = useMemo(
    () => [
      { path: "/profile", name: "Profile" },
      { path: "live-now", name: "Live now" },
    ],
    []
  );

  const components = (componentName) => {
    switch (componentName) {
      case "Personal":
        return <Personalinfo />;
      case "Article":
        return <NewArticle />;
      default:
        return "Click valid button";
    }
  };
  useEffect(() => {
    setheaders(categories);
  }, [setheaders, categories]);

  return (
    <div className="p-1  font-semibold flex flex-col lg:flex-row justify-between text-gray-700 dark:text-gray-200 gap-5 mb-20">
      <div className="w-full lg:w-[68%] space-y-5">
        <ProfileHeader profileCompletion={profileCompletion} user={Auth.user} />
        <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-sm">
          <ul className="flex overflow-x-auto gap-1 pb-2 hidel_slide_roler">
            {[
              { name: "Personal", icon: User },
              { name: "Article", icon: BookOpen },
              { name: "Videos", icon: Video },
              { name: "Lives", icon: Video },
              { name: "Stats", icon: BarChart2 },
              { name: "Friends", icon: FriendsIcon },
              { name: "Settings", icon: Settings },
            ].map((item) => (
              <li
                key={item.name}
                onClick={() => setisactive(item.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer whitespace-nowrap ${
                  isactive === item.name
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </li>
            ))}
          </ul>
          <div className="mt-5 bg-white dark:bg-gray-900 rounded-xl p-4">
            {components(isactive)}
          </div>
        </div>
      </div>
      <ProfileSidebar />
    </div>
  );
}

export default memo(Profile);
