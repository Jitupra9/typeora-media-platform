import React, { memo, useContext, useMemo, useEffect, useState } from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileSidebar from "./ProfileSidebar";
import Articles from "../../component/Page/Profile/Articles";
import Videos from "../../component/Page/Profile/Videos";
import Friends from "../../component/Page/Profile/friends";
import Setting from "../../component/Page/Profile/Settings";
import Personalinfo from "../../component/Page/Profile/Personalinfo";
import NewUpload from "../../component/Page/Profile/NewUpload";
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
  const [isactive, setisactive] = useState("Personal");
  const [UploadType, setUploadType] = useState(null);
  const [Isedit, setIsedit] = useState(false);
  const [UploadActive, setUploadActive] = useState(false);
  const { Auth } = useContext(IsAuthnticate);
  const [profileCompletion, setProfileCompletion] = useState(0);
  const [formData, setFormData] = useState(() => {
    const u = Auth?.user ?? {};
    return {
      id: u._id,
      FirstName: u.Firstname ?? "",
      LastName: u.LastName ?? "",
      Gender: Array.isArray(u.Gender) ? u.Gender[0] ?? "" : u.Gender ?? "",
      PhoneNo: u.PhoneNo ?? "",
      SecondaryEmail: u.SecondaryEmail ?? "",
      Company: u.Company ?? "",
      Location: u.Location ?? "",
      Role: u.Role ?? "",
      About: u.About ?? "",
    };
  });
  const calcCompletion = (dataObj) => {
    const entries = Object.entries(dataObj).filter(([k]) => k !== "id");

    const total = entries.length;
    if (total === 0) return 0;

    const filled = entries.reduce((acc, [, v]) => {
      if (v === null || v === undefined) return acc;
      if (typeof v === "string" && v.trim() === "") return acc;
      return acc + 1;
    }, 0);

    return Math.round((filled / total) * 100);
  };

  useEffect(() => {
    setProfileCompletion(calcCompletion(formData));
  }, [Auth.user]);

  const categories = useMemo(
    () => [
      { path: "/profile", name: "Profile" },
      { path: "live-now", name: "Live now" },
    ],
    []
  );

  const handleEdit = () => {
    setIsedit(true);
  };
  const components = (componentName) => {
    switch (componentName) {
      case "Personal":
        return (
          <Personalinfo
            Isedit={Isedit}
            setIsedit={setIsedit}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case "Article":
        return (
          <Articles
            setUploadType={setUploadType}
            UploadActive={UploadActive}
            setUploadActive={setUploadActive}
          />
        );
      case "Videos":
        return (
          <Videos
            setUploadType={setUploadType}
            UploadActive={UploadActive}
            setUploadActive={setUploadActive}
          />
        );
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
    <div className="relative py-1 font-semibold flex flex-col lg:flex-row justify-between text-gray-700 dark:text-gray-200 gap-5 mb-20 sm:mb-0">
      <div className="w-full sm:h-[86vh] sm:overflow-y-scroll hidel_slide_roler lg:w-[68%] space-y-5 sm:rounded-xl">
        <ProfileHeader
          profileCompletion={profileCompletion}
          user={Auth.user}
          setisactive={setisactive}
          handleEdit={handleEdit}
        />
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
      {UploadActive && (
        <div className="w-full h-full bg-gray-100 dark:bg-black dark:bg-opacity-50 bg-opacity-50 flex  justify-center absolute top-0  rounded-2xl">
          <div className=" w-max h-max bg-white dark:bg-gray-800 sm:p-2 rounded-2xl">
            <NewUpload type={UploadType} setUploadActive={setUploadActive} />
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(Profile);
