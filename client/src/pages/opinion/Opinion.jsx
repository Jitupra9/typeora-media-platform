import React, { useState } from "react";
import LefftContainer from "./lefftContainer";
import RightContainer from "./RightContainer";
import CenterContent from "./CenterContent";
import {
  Search,
  MessageSquare,
  TrendingUp,
  Hash,
  ThumbsUp,
  ThumbsDown,
  Share2,
  Sparkles,
  Bookmark,
  Plus,
  Filter,
  ChevronDown,
  Grid as LayoutGrid,
  Flame,
  Clock,
  AlertCircle,
  Users,
  Award,
  Zap,
  BarChart2,
  Bell,
  User,
  Heart,
  Eye,
  MoreHorizontal,
  Send,
  BookOpen,
  Tag,
} from "lucide-react";

// Opinion Model
const OpinionModel = {
  id: String,
  author: {
    id: String,
    name: String,
    avatar: String,
    badge: String, // 'expert', 'verified', 'new'
    followers: Number,
  },
  content: {
    title: String,
    body: String,
    media: Array, // images, videos
    links: Array,
  },
  stats: {
    likes: Number,
    dislikes: Number,
    comments: Number,
    shares: Number,
    saves: Number,
    views: Number,
  },
  tags: Array,
  category: String,
  timestamp: String,
  trending: Boolean,
  relatedPosts: Array,
  isEdited: Boolean,
  isSponsored: Boolean,
};

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
    <div className="min-h-screen xl:max-w-7xl flex justify-center items-center   text-gray-900 dark:text-gray-100">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <LefftContainer
            categories={categories}
            activeCategory={activeCategory}
          />
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

          <RightContainer
            trendingTags={trendingTags}
            suggestedPeople={suggestedPeople}
          />
        </div>

        {selectedOpinion && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-bold">
                    {selectedOpinion.content.title}
                  </h2>
                  <button
                    onClick={() => setSelectedOpinion(null)}
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    &times;
                  </button>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-medium text-lg">
                    {selectedOpinion.author.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">
                        {selectedOpinion.author.name}
                      </h4>
                      {selectedOpinion.author.badge &&
                        getBadge(selectedOpinion.author.badge)}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {selectedOpinion.timestamp} •{" "}
                      {selectedOpinion.author.followers.toLocaleString()}{" "}
                      followers
                    </p>
                  </div>
                </div>

                <div className="prose dark:prose-invert max-w-none mb-6">
                  <p>{selectedOpinion.content.body}</p>
                  {selectedOpinion.content.links.length > 0 && (
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">References:</h4>
                      <ul>
                        {selectedOpinion.content.links.map((link, index) => (
                          <li key={index}>
                            <a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedOpinion.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    >
                      <Hash size={14} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-b border-gray-200 dark:border-gray-700 py-4 my-6">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <ThumbsUp size={18} />
                      <span>{selectedOpinion.stats.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ThumbsDown size={18} />
                      <span>{selectedOpinion.stats.dislikes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare size={18} />
                      <span>{selectedOpinion.stats.comments}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Share2 size={18} />
                      <span>{selectedOpinion.stats.shares}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye size={18} />
                    <span>
                      {selectedOpinion.stats.views.toLocaleString()} views
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-4">
                    Comments ({selectedOpinion.stats.comments})
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                          U
                        </div>
                        <div>
                          <p className="font-medium">User123</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            1h ago
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        This is a great perspective! I particularly agree with
                        your point about hybrid systems.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <textarea
                    placeholder="Add your comment..."
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
                    rows={3}
                  />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                        <Plus size={18} />
                      </button>
                      <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                        <Hash size={18} />
                      </button>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl max-w-2xl w-full">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">Create New Opinion</h3>
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    &times;
                  </button>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="What's your opinion about?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Your Perspective
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Express your thoughts in detail..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Tags (up to 5)
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Add relevant tags separated by commas"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Category
                    </label>
                    <select
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      defaultValue=""
                    >
                      <option value="">Select a category</option>
                      {categories
                        .filter((c) => c.id !== "all")
                        .map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
                    >
                      Publish Opinion
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OpinionHub;
