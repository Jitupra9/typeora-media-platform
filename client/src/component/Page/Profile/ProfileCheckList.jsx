import React, { memo, useContext, useState, useEffect } from "react";
import { ListCheck, CheckCircle } from "lucide-react";
import { ProfileDataContext } from "../../../context/page/ProfileContext";
import { IsAuthnticate } from "../../../context/Auth/IsAuth";
function ProfileCheckList() {
  const { contextValue } = useContext(ProfileDataContext);
  const { profileCompletion, TotalData } = contextValue;
  const { Auth } = useContext(IsAuthnticate);
  return (
    <div className="p-5 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-3 font-semibold">
          <ListCheck className="w-5 h-5 text-blue-500" />
          Profile Checklist
        </h3>
        <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full">
          3/5 completed
        </span>
      </div>

      <div className="mt-6 space-y-5">
        {[
          {
            title: "Create Profile",
            completed: true,
            description: "Setup your basic profile",
          },
          {
            title: "Post Article & Video",
            completed: TotalData.totalPost !== 0 ? true : false,
            description: "Upload Articles & Videos on Typeora",
          },
          {
            title: "Complete Profile",
            completed: profileCompletion === 100 ? true : false,
            description: "Fillup all personal information",
          },
          {
            title: "Add Skills",
            completed: Auth?.user?.Skills.length !== 0 ? true : false,
            description: "Showcase your top skills",
          },
          {
            title: "Connect Social",
            completed: Auth?.user?.Social.length !== 0 ? true : false,
            description: "Link your social profiles",
          },
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div
              className={`mt-1 p-1 rounded-full ${
                item.completed
                  ? "bg-green-100 dark:bg-green-900/30"
                  : "bg-gray-100 dark:bg-gray-800"
              }`}
            >
              {item.completed ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : (
                <div className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-600"></div>
              )}
            </div>
            <div>
              <p
                className={`font-medium ${
                  item.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {item.title}
              </p>
              <p className="text-xs text-gray-500 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(ProfileCheckList);
