import React, { memo, useContext, useMemo, useEffect, useState } from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileSidebar from "./ProfileSidebar";
import Articles from "../../component/Page/Profile/Articles";
import Videos from "../../component/Page/Profile/Videos";
import Friends from "../../component/Page/Profile/friends";
import Setting from "../../component/Page/Profile/Settings";
import Personalinfo from "../../component/Page/Profile/Personalinfo";
import NewArticle from "../../component/Page/Profile/NewArticle";
import { Headers } from "../../context/utils/Headercontext";
import { IsAuthnticate } from "../../context/Auth/IsAuth";
import {
  User,
  BookOpen,
  Video,
  Settings,
  Users as FriendsIcon,
} from "lucide-react";

function Profile() {
  const { setheaders } = useContext(Headers);
  const [isactive, setisactive] = useState("Friends");
  const { Auth } = useContext(IsAuthnticate);
  const [profileCompletion, setProfileCompletion] = useState(75);
  const [newArticle, setnewArticle] = useState(false);
  useEffect(() => {
    setProfileCompletion(60);
  }, []);
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
        return (
          <Articles newArticle={newArticle} setnewArticle={setnewArticle} />
        );
      case "Videos":
        return <Videos />;
      case "Friends":
        return <Friends />;
      case "Settings":
        return <Setting />;
      default:
        return "Click valid button";
    }
  };
  useEffect(() => {
    setheaders(categories);
  }, [setheaders, categories]);

  return (
    <div className=" relative p-1 font-semibold flex flex-col lg:flex-row justify-between text-gray-700 dark:text-gray-200 gap-5 mb-20">
      <div className="w-full lg:w-[68%] space-y-5">
        <ProfileHeader profileCompletion={profileCompletion} user={Auth.user} />
        <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-sm">
          <ul className="flex overflow-x-auto gap-1 pb-2 hidel_slide_roler">
            {[
              { name: "Friends", icon: FriendsIcon },
              { name: "Personal", icon: User },
              { name: "Article", icon: BookOpen },
              { name: "Videos", icon: Video },

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
          <div className=" mt-5 bg-white dark:bg-gray-900 rounded-xl py-4">
            {components(isactive)}
          </div>
        </div>
      </div>
      <ProfileSidebar />
      {newArticle && (
        <div className="w-full h-full bg-black bg-opacity-50 flex  justify-center absolute top-0  rounded-2xl">
          <div className=" w-max h-max bg-white dark:bg-gray-800 sm:p-2 rounded-2xl">
            <NewArticle setnewArticle={setnewArticle} />
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(Profile);
