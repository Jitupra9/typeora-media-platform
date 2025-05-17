import React, { memo, useContext, useEffect, useMemo } from "react";
import { Headers } from "../../context/utils/Headercontext";
import LiveStream from "./LiveStream";
import ContentSlider from "../../component/Layout/ContentSlider";
function LiveReports() {
  const { setheaders } = useContext(Headers);

  const categories = useMemo(
    () => [
      { path: "/live-reports", name: "All Topic" },
      { path: "/Personal", name: "Personal" },
      { path: "/Travel", name: "Travel" },
      { path: "/Technology", name: "Technology" },
      { path: "/Education", name: "Education" },
      { path: "/Health", name: "Health" },
      { path: "/Fitness", name: "Fitness" },
      { path: "/Finance", name: "Finance" },
      { path: "/Food", name: "Food" },
      { path: "/Lifestyle", name: "Lifestyle" },
      { path: "/Devt", name: "Devt" },
      { path: "/Entertainment", name: "Entertainment" },
      { path: "/Career", name: "Career" },
      { path: "/Creativity", name: "Creativity" },
    ],
    []
  );
  useEffect(() => {
    setheaders(categories);
  }, [categories, setheaders]);
  return (
    <div className="flex gap-1">
      <div className="w-full lg:w-[60%]">
        <LiveStream />
      </div>
      <div className=" hidden lg:block lg:w-[39%]">
        <ContentSlider />
      </div>
    </div>
  );
}

export default memo(LiveReports);
