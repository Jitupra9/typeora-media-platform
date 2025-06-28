import React from "react";
import { Sparkles, Circle } from "lucide-react";
function HeaderCatogories() {
  const categories = [
    {
      path: "/",
      name: "All Topic",
      icon: <Sparkles className="h-4 w-4 text-purple-500" />,
    },
    {
      path: "/Personal",
      name: "Personal",
      icon: <Circle className="h-4 w-4 text-pink-500" />,
    },
    {
      path: "/Travel",
      name: "Travel",
      icon: <Circle className="h-4 w-4 text-blue-500" />,
    },
    {
      path: "/Technology",
      name: "Technology",
      icon: <Circle className="h-4 w-4 text-green-500" />,
    },
    {
      path: "/Education",
      name: "Education",
      icon: <Circle className="h-4 w-4 text-yellow-500" />,
    },
    {
      path: "/Health",
      name: "Health",
      icon: <Circle className="h-4 w-4 text-red-500" />,
    },
    {
      path: "/Fitness",
      name: "Fitness",
      icon: <Circle className="h-4 w-4 text-orange-500" />,
    },
    {
      path: "/Finance",
      name: "Finance",
      icon: <Circle className="h-4 w-4 text-emerald-500" />,
    },
    {
      path: "/Food",
      name: "Food",
      icon: <Circle className="h-4 w-4 text-amber-500" />,
    },
    {
      path: "/Lifestyle",
      name: "Lifestyle",
      icon: <Circle className="h-4 w-4 text-cyan-500" />,
    },
    {
      path: "/Devt",
      name: "Devt",
      icon: <Circle className="h-4 w-4 text-indigo-500" />,
    },
    {
      path: "/Entertainment",
      name: "Entertainment",
      icon: <Circle className="h-4 w-4 text-fuchsia-500" />,
    },
    {
      path: "/Career",
      name: "Career",
      icon: <Circle className="h-4 w-4 text-sky-500" />,
    },
    {
      path: "/Creativity",
      name: "Creativity",
      icon: <Circle className="h-4 w-4 text-violet-500" />,
    },
  ];

  return [...categories];
}

export default HeaderCatogories;
