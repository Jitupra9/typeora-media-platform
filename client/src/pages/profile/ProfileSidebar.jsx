import React, { memo } from "react";
import ProfileCheckList from "../../component/Page/Profile/ProfileCheckList";
import ProfileSkils from "../../component/Page/Profile/ProfileSkils";
import ProfileStats from "../../component/Page/Profile/ProfileStats";
import Social from "../../component/Page/Profile/Social";
function ProfileSidebar() {
  return (
    <div
      className="w-full lg:h-[calc(100vh-80px)] hidel_slide_roler lg:overflow-hidden lg:overflow-y-scroll lg:w-[30%] space-y-5 lg:rounded-xl"
      style={{ willChange: "transform" }}
    >
      <ProfileCheckList />
      <ProfileSkils />
      <ProfileStats />
      <Social />
    </div>
  );
}

export default memo(ProfileSidebar);
