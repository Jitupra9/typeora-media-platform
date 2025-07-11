import React, { useRef, useState } from "react";
import Content from "./Content";
import Headers from "./headers";
import RecentActivity from "./RecentActivity";
import SavedType from "./SavedType";

function Saved() {
  const [activeTab, setActiveTab] = useState("article");
  const [savedItems, setSavedItems] = useState([...Array(4)]);

  const toggleSaveItem = (index) => {
    const newSavedItems = [...savedItems];
    newSavedItems[index] = newSavedItems[index] ? null : {};
    setSavedItems(newSavedItems);
  };

  return (
    <div className="min-h-screen  mb-16">
      <Headers />
      <div className="content mt-10 sm:mt-20 text-gray-600 dark:text-gray-200">
        <SavedType activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex flex-col gap-y-4 w-full sm:flex-row justify-between *:bg-white *:dark:bg-gray-900 *:bg-opacity-90 *:p-5 *:rounded-lg *:shadow-sm">
          <Content
            toggleSaveItem={toggleSaveItem}
            activeTab={activeTab}
            savedItems={savedItems}
          />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}

export default Saved;
