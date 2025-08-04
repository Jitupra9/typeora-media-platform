import React, { memo, useState } from "react";
import VisitedProfileHeader from "./ProfileHeader";
import RightSideBar from "./RightSideBar";
import LeftSideBar from "./LeftSideBar";
import Content from "./content";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const [expandedPost, setExpandedPost] = useState(null);
  const navigate = useNavigate();

  const handleExpandPost = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  const handleViewFullPost = (postId) => {
    navigate(`/post/${postId}`);
  };

  return (
    <div className=" pb-20">
      <VisitedProfileHeader />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <LeftSideBar />
        <Content
          expandedPost={expandedPost}
          handleViewFullPost={handleViewFullPost}
          handleExpandPost={handleExpandPost}
        />
        <RightSideBar />
      </div>
    </div>
  );
}

export default memo(ProfilePage);
