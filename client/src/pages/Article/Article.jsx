import React, { memo, useContext, useMemo, useEffect } from "react";
import Articles from "./Articles";
import { Headers } from "../../context/utils/Headercontext";
function Article() {
  const { setheaders } = useContext(Headers);

  const categories = useMemo(
    () => [
      { path: "/", name: "All Topic" },
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
  }, [setheaders, categories]);
  return (
    <div className=" flex gap-1 w-full">
      <Articles />
    </div>
  );
}

export default memo(Article);
