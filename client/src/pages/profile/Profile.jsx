import React, { memo, useContext, useMemo, useEffect, useState } from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileSidebar from "./ProfileSidebar";
import Articles from "../../component/Page/Profile/Articles";
import Videos from "../../component/Page/Profile/Videos";
import Friends from "../../component/Page/Profile/friends";
import Setting from "../../component/Page/Profile/Settings";
import Personalinfo from "../../component/Page/Profile/Personalinfo";
import NewUpload from "../../component/Page/Profile/NewUpload";
import { ProfileDataContext } from "../../context/page/ProfileContext";
import {
  User,
  BookOpen,
  Video,
  Settings,
  Users as FriendsIcon,
} from "lucide-react";

function Profile() {
  const { contextValue } = useContext(ProfileDataContext);
  const { formData, uploadActive } = contextValue;
  const [isactive, setisactive] = useState("Personal");

  const [UploadType, setUploadType] = useState(null);
  const [Isedit, setIsedit] = useState(false);

  const handleEdit = () => {
    setIsedit(true);
  };
  const components = (componentName) => {
    switch (componentName) {
      case "Personal":
        return <Personalinfo Isedit={Isedit} setIsedit={setIsedit} />;
      case "Article":
        return (
          <Articles UserID={formData.UserID} setUploadType={setUploadType} />
        );
      case "Videos":
        return (
          <Videos UserID={formData.UserID} setUploadType={setUploadType} />
        );
      case "Friends":
        return <Friends />;
      case "Settings":
        return <Setting />;
      default:
        return "Click valid button";
    }
  };

  return (
    <div className=" font-semibold flex flex-col lg:flex-row justify-between text-gray-700 dark:text-gray-200 gap-5 pb-20 lg:pb-0">
      <div
        className="w-full lg:h-[86vh] lg:overflow-y-scroll hidel_slide_roler lg:w-[68%] space-y-5 lg:rounded-xl"
        style={{ willChange: "transform" }}
      >
        <ProfileHeader setisactive={setisactive} handleEdit={handleEdit} />
        <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-sm">
          <ul className="flex overflow-x-auto gap-1 pb-2 hidel_slide_roler">
            {[
              { name: "Personal", icon: User },
              { name: "Friends", icon: FriendsIcon },

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
      {uploadActive && (
        <div className="w-[100vw] h-[100vh] sm:h-max sm:w-max lg:w-[100vw] lg:h-[100vh]  overflow-y-scroll left-0 top-0 bg-gray-100 dark:bg-black dark:bg-opacity-50 bg-opacity-50 flex  justify-center lg:items-center absolute  rounded-2xl">
          <div className=" w-max h-max bg-white dark:bg-gray-800 sm:p-2 rounded-2xl">
            <NewUpload type={UploadType} />
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(Profile);
