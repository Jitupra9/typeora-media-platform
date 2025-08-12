import React, { useState } from "react";
import LeftContainer from "./lefftContainer";
import RightContainer from "./RightContainer";
import CenterContent from "./CenterContent";
import NewOpinionForm from "./NewOpinionForm";
import {
  Sparkles,
  Grid as LayoutGrid,
  Users,
  Award,
  Zap,
  BarChart2,
  User,
  Heart,
} from "lucide-react";

function OpinionHub() {
  const [activeFilter, setActiveFilter] = useState("trending");
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [viewMode, setViewMode] = useState("comfortable"); // 'compact', 'comfortable', 'detailed'
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedOpinion, setSelectedOpinion] = useState(null);

  const opinions = [
    {
      id: "1",
      author: {
        id: "user1",
        name: "TechAnalyst",
        avatar: "",
        badge: "expert",
        followers: 12400,
      },
      content: {
        title: "The future of AI in social media moderation",
        body: "AI content moderation will become 80% accurate by 2025, but human oversight remains crucial for context. Platforms need hybrid systems that...",
        media: [],
        links: ["https://research.ai/moderation-trends"],
      },
      stats: {
        likes: 428,
        dislikes: 32,
        comments: 87,
        shares: 142,
        saves: 56,
        views: 3200,
      },
      tags: ["AI", "moderation", "socialmedia"],
      category: "technology",
      timestamp: "2h ago",
      trending: true,
      relatedPosts: ["14", "29"],
      isEdited: false,
      isSponsored: false,
    },
    {
      id: "2",
      author: {
        id: "user2",
        name: "EcoAdvocate",
        avatar: "",
        badge: "verified",
        followers: 8700,
      },
      content: {
        title: "Why carbon offset programs are often misleading",
        body: "Many corporate carbon offset initiatives don't deliver real environmental benefits. We need stricter verification standards and...",
        media: [],
        links: [],
      },
      stats: {
        likes: 512,
        dislikes: 89,
        comments: 203,
        shares: 76,
        saves: 42,
        views: 4800,
      },
      tags: ["environment", "sustainability"],
      category: "environment",
      timestamp: "5h ago",
      trending: false,
      relatedPosts: ["31"],
      isEdited: true,
      isSponsored: false,
    },
    {
      id: "3",
      author: {
        id: "user3",
        name: "MarketWatcher",
        avatar: "",
        badge: "",
        followers: 3200,
      },
      content: {
        title: "The coming recession will hit social platforms hard",
        body: "Ad revenue will decline 30-40% during the next economic downturn. Platforms relying solely on advertising need to diversify...",
        media: [],
        links: [],
      },
      stats: {
        likes: 198,
        dislikes: 45,
        comments: 62,
        shares: 28,
        saves: 19,
        views: 2100,
      },
      tags: ["economy", "socialmedia"],
      category: "business",
      timestamp: "1d ago",
      trending: true,
      relatedPosts: [],
      isEdited: false,
      isSponsored: true,
    },
  ];

  const categories = [
    { id: "all", name: "All Topics", icon: <LayoutGrid size={16} /> },
    { id: "technology", name: "Technology", icon: <Zap size={16} /> },
    { id: "environment", name: "Environment", icon: <Sparkles size={16} /> },
    { id: "business", name: "Business", icon: <BarChart2 size={16} /> },
    { id: "politics", name: "Politics", icon: <Users size={16} /> },
    { id: "health", name: "Health", icon: <Heart size={16} /> },
  ];

  const trendingTags = [
    { name: "Web3", posts: 12400 },
    { name: "ClimateAction", posts: 9800 },
    { name: "RemoteWork", posts: 7600 },
    { name: "NFTs", posts: 5400 },
    { name: "Metaverse", posts: 4300 },
  ];

  const suggestedPeople = [
    {
      id: "expert1",
      name: "Dr. Sarah Lin",
      bio: "AI Ethics Researcher",
      followers: "42K",
    },
    {
      id: "expert2",
      name: "Mark Chen",
      bio: "Climate Scientist",
      followers: "38K",
    },
    {
      id: "expert3",
      name: "Priya Patel",
      bio: "Social Media Analyst",
      followers: "29K",
    },
  ];

  const filteredOpinions = opinions
    .filter(
      (opinion) =>
        activeCategory === "all" ||
        opinion.category === activeCategory ||
        (activeCategory !== "all" &&
          opinion.tags.some(
            (tag) => tag.toLowerCase() === activeCategory.toLowerCase()
          ))
    )
    .filter((opinion) => {
      if (!searchTerm) return true;

      const searchLower = searchTerm.toLowerCase();
      const inTitle = opinion.content.title.toLowerCase().includes(searchLower);
      const inBody = opinion.content.body.toLowerCase().includes(searchLower);
      const inTags = opinion.tags.some((tag) =>
        tag.toLowerCase().includes(searchLower)
      );
      const inAuthor = opinion.author.name.toLowerCase().includes(searchLower);

      return inTitle || inBody || inTags || inAuthor;
    })
    .sort((a, b) => {
      switch (activeFilter) {
        case "trending":
          const scoreA =
            a.stats.likes + a.stats.comments * 2 + a.stats.shares * 3;
          const scoreB =
            b.stats.likes + b.stats.comments * 2 + b.stats.shares * 3;
          return scoreB - scoreA;

        case "recent":
          return new Date(b.timestamp) - new Date(a.timestamp);

        case "controversial":
          const ratioA =
            a.stats.likes > 0 ? a.stats.dislikes / a.stats.likes : 0;
          const ratioB =
            b.stats.likes > 0 ? b.stats.dislikes / b.stats.likes : 0;
          return ratioB - ratioA;

        case "following":
          return 0;

        case "top":
          return b.stats.views - a.stats.views;

        default:
          return 0;
      }
    })
    .map((opinion) => {
      if (!searchTerm) return opinion;

      const regex = new RegExp(`(${searchTerm})`, "gi");
      const highlightedBody = opinion.content.body.replace(
        regex,
        '<span class="bg-yellow-200 dark:bg-yellow-800">$1</span>'
      );

      return {
        ...opinion,
        content: {
          ...opinion.content,
          highlightedBody,
        },
      };
    });

  const getBadge = (badge) => {
    switch (badge) {
      case "expert":
        return (
          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded flex items-center gap-1">
            <Award size={12} /> Expert
          </span>
        );
      case "verified":
        return (
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded flex items-center gap-1">
            <User size={12} /> Verified
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="xl:max-w-7xl flex justify-center items-center   text-gray-900 dark:text-gray-100"
      style={{ willChange: "transform" }}
    >
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 xl:col-span-6 xl:col-start-4 order-1  lg:h-[calc(100vh-80px)] overflow-y-auto hidel_slide_roler">
            <CenterContent
              setShowForm={setShowForm}
              setActiveFilter={setActiveFilter}
              setSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
              viewMode={viewMode}
              setViewMode={setViewMode}
              filteredOpinions={filteredOpinions}
              setSelectedOpinion={setSelectedOpinion}
              activeFilter={activeFilter}
              getBadge={getBadge}
            />
          </div>

          <div className="lg:col-span-6 xl:contents order-2 hidel_slide_roler lg:h-[calc(100vh-80px)] overflow-y-auto xl:h-max">
            <div className="xl:col-span-3 xl:order-first mb-3  xl:h-[calc(100vh-80px)] overflow-y-auto hidel_slide_roler">
              <LeftContainer
                categories={categories}
                activeCategory={activeCategory}
              />
            </div>

            <div className="xl:col-span-3 xl:order-last  xl:h-[calc(100vh-80px)] overflow-y-auto hidel_slide_roler">
              <RightContainer
                trendingTags={trendingTags}
                suggestedPeople={suggestedPeople}
              />
            </div>
          </div>
        </div>
        {showForm && (
          <NewOpinionForm setShowForm={setShowForm} categories={categories} />
        )}
      </div>
    </div>
  );
}

export default OpinionHub;
