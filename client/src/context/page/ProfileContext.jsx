import React, { createContext, useState, useEffect, useContext } from "react";
import { IsAuthnticate } from "../Auth/IsAuth";

export const ProfileDataContext = createContext();
import APIS from "../../services/APIS";
function ProfileContext({ children }) {
  const { Auth } = useContext(IsAuthnticate);
  const [NewUploadData, setNewUploadData] = useState(false);
  const [uploadType, setUploadType] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [uploadActive, setUploadActive] = useState(false);
  const [profileCompletion, setProfileCompletion] = useState(0);
  const [TotalData, setTotalData] = useState({
    totalArticle: 0,
    totoalVideo: 0,
    totalPost: 0,
    totalFollwer: 0,
    totalFollowing: 0,
    totalViews: 0,
  });
  const handleEdit = () => {
    setIsEdit(true);
  };

  const [formData, setFormData] = useState(() => {
    const u = Auth?.user ?? {};
    return {
      UserID: u._id,
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

  const api = APIS();
  useEffect(() => {
    const fetchArticles = async () => {
      const totalArticle = await api.fetchTotalArticles();
      const totalVideo = await api.fetchTotalVideos();
      setTotalData((prev) => ({
        ...prev,
        totalPost: totalArticle + totalVideo,
        totalArticle: totalArticle,
        totoalVideo: totalVideo,
      }));
    };
    fetchArticles();
  }, []);

  const calcCompletion = (dataObj) => {
    const entries = Object.entries(dataObj).filter(([k]) => k !== "UserID");
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

  const contextValue = {
    TotalData,
    NewUploadData,
    uploadType,
    isEdit,
    uploadActive,
    profileCompletion,
    formData,
  };
  const SetcontextValue = {
    setTotalData,
    setProfileCompletion,
    setUploadActive,
    setUploadType,
    setNewUploadData,
    setIsEdit,
    setFormData,
    calcCompletion,
    handleEdit,
  };

  return (
    <ProfileDataContext.Provider value={{ contextValue, SetcontextValue }}>
      {children}
    </ProfileDataContext.Provider>
  );
}

export default ProfileContext;
