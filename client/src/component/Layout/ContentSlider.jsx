import React, { memo } from "react";
import {
  ArrowRight,
  Plus,
  Flag,
  Tag,
  Newspaper,
  TrendingUp,
  TrendingDown,
  Dot,
} from "lucide-react";

function ContentSlider() {
  const blog_Types = [
    {
      type: "Sports",
      title: "Tiger’s Historic Comeback",
      desc: "Tiger Woods, in a stunning return to the top, captures the Masters at 43.",
    },
    {
      type: "Health",
      title: "Long-Term Benefits of Exercise",
      desc: "10 Years After an Exercise Study, Benefits Persist.",
    },
    {
      type: "Business",
      title: "What to Know Before Buying a Tesla",
      desc: "Buying a Tesla seems pretty easy, but there are a few things to know.",
    },
    {
      type: "Food",
      title: "15 Must-Try Breakfast Ideas",
      desc: "What to cook this week: Top 15 breakfast ideas.",
    },
    {
      type: "Health",
      title: "The Gene-Editing Controversy",
      desc: "Gene-edited babies: What a Chinese scientist and American mentor revealed.",
    },
    {
      type: "Health",
      title: "Tiger’s Impact on Health Discussions",
      desc: "Tiger Woods, in a stunning return to the top, captures the Masters at 43.",
    },
    {
      type: "Sports",
      title: "Tiger Woods Strikes Again",
      desc: "Tiger Woods, in a stunning return to the top, captures the Masters at 43.",
    },
  ];

  const trend_section = [
    {
      icons: <Flag size={18} />,
      type: "Politics",
      revews: "60,250",
      growth: "up",
    },
    {
      icons: <TrendingUp size={18} />,
      type: "Business",
      revews: "45,000",
      growth: "down",
    },
    {
      icons: <Newspaper size={18} />,
      type: "Sports",
      revews: "24,500",
      growth: "up",
    },
    {
      icons: <TrendingUp size={18} />,
      type: "Technology",
      revews: "9,800",
      growth: "down",
    },
    {
      icons: <Tag size={18} />,
      type: "Food",
      revews: "5,250",
      growth: "up",
    },
  ];

  const tags = [
    "politics",
    "advertising",
    "news",
    "development",
    "design",
    "finance",
    "football",
    "future",
    "travel",
    "technology",
    "food",
    "architecture",
    "tennis",
    "video",
    "style",
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 space-y-6  h-[85vh] overflow-hidden overflow-y-scroll hidel_slide_roler">
      <div className="rounded-md bg-white dark:bg-gray-900 dark:bg-opacity-85 dark:text-gray-200 text-gray-500 font-semibold shadow">
        <div className="px-4 py-2 border-b flex justify-between items-center">
          <h1 className="text-lg sm:text-xl">Trending Articles</h1>
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <div className="flex flex-col p-4">
          {blog_Types.map((item, i) => (
            <div className="flex gap-3 mb-4" key={i}>
              <div className="w-12 h-12 bg-gray-300 rounded-md flex-shrink-0"></div>
              <div className="overflow-hidden">
                <div className="flex">
                  <p className="text-sm dark:text-gray-300 text-gray-700">
                    {item.type}
                  </p>
                  <Dot />
                  <h3 className=" truncate text-sm dark:text-gray-300 text-gray-700">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-600 truncate">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-md font-semibold bg-white text-gray-500 shadow dark:bg-gray-900 dark:bg-opacity-85 dark:text-gray-200">
        <div className="px-4 py-2 border-b flex justify-between items-center">
          <h1 className="text-lg sm:text-xl">Trending Sections</h1>
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <div className="p-4 space-y-4">
          {trend_section.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-4 border-b pb-2"
            >
              <div className="flex items-center gap-2">
                {item.icons}
                <p className="text-sm dark:text-gray-200 text-gray-700 ">
                  {item.type}
                </p>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <p>{item.revews} reviews</p>
                {item.growth === "up" ? (
                  <TrendingUp size={16} className="text-green-500" />
                ) : (
                  <TrendingDown size={16} className="text-red-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`rounded-md dark:bg-gray-900 dark:bg-opacity-85 dark:text-gray-200 font-semibold shadow bg-white text-gray-500 `}
      >
        <div className="px-4 py-2 border-b flex justify-between items-center">
          <h3 className="text-lg sm:text-xl">Popular Tags</h3>
          <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <div className="p-4 flex flex-wrap gap-2">
          {tags.map((item, i) => (
            <div
              key={i}
              className="bg-blue-50 rounded-md px-3 py-1 text-gray-700 text-sm"
            >
              #{item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(ContentSlider);
