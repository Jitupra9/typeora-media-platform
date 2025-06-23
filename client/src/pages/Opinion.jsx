import React, { useState, useEffect, useMemo, useContext } from "react";
import { Headers } from "../context/utils/Headercontext";
import {
  Search,
  MessageSquare,
  TrendingUp,
  Hash,
  ThumbsUp,
  ThumbsDown,
  Share2,
  Bookmark,
  Plus,
  Filter,
  ChevronDown,
  Flame,
  Clock,
  AlertCircle,
  BarChart2,
  Users,
  Award,
  Zap,
  ChevronRight,
  Sparkles,
  Circle,
} from "lucide-react";

function Opinion() {
  const [isFilter, setisFilter] = useState(false);
  const { setheaders } = useContext(Headers);

  const categories = useMemo(
    () => [
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
    ],
    []
  );

  useEffect(() => {
    setheaders(categories);
  }, [setheaders, categories]);

  const [opinions, setOpinions] = useState([
    {
      id: 1,
      author: "JaneDoe",
      title: "The impact of AI on job markets",
      content:
        "While AI will eliminate some jobs, I believe it will create more opportunities than it destroys by enabling new industries and increasing productivity. The key is proper education and retraining programs to help workers transition.",
      tags: ["#AI", "#FutureOfWork", "#Technology"],
      likes: 142,
      dislikes: 28,
      comments: 45,
      timestamp: "2 hours ago",
      trending: true,
      authorBadge: "expert",
    },
    {
      id: 2,
      author: "TechEnthusiast",
      title: "Smartphones are becoming too expensive",
      content:
        "The latest flagship phones are pricing out average consumers. We need more mid-range options with premium features. Manufacturers should focus on value rather than just pushing the technological envelope with each release.",
      tags: ["#Smartphones", "#Tech", "#Consumer"],
      likes: 289,
      dislikes: 42,
      comments: 87,
      timestamp: "5 hours ago",
      trending: false,
      authorBadge: "regular",
    },
    {
      id: 3,
      author: "EcoWarrior",
      title: "Plastic bag bans are effective",
      content:
        "Cities that have implemented plastic bag bans show significant reduction in plastic waste. We should expand these policies nationwide and invest in sustainable alternatives. The environmental benefits far outweigh the minor inconvenience.",
      tags: ["#Environment", "#Sustainability", "#Policy"],
      likes: 356,
      dislikes: 43,
      comments: 92,
      timestamp: "1 day ago",
      trending: true,
      authorBadge: "top-contributor",
    },
    {
      id: 4,
      author: "FinanceGuru",
      title: "Cryptocurrency is the future of finance",
      content:
        "Despite the volatility, blockchain technology and cryptocurrencies represent the most significant innovation in finance since the creation of fiat currency. Decentralization will empower individuals and reduce systemic risk.",
      tags: ["#Crypto", "#Blockchain", "#Finance"],
      likes: 198,
      dislikes: 112,
      comments: 156,
      timestamp: "3 hours ago",
      trending: true,
      authorBadge: "expert",
    },
    {
      id: 5,
      author: "HealthNut",
      title: "Intermittent fasting changed my life",
      content:
        "After struggling with weight and energy levels for years, adopting a 16:8 intermittent fasting schedule has dramatically improved my health markers, energy, and mental clarity. More people should consider this approach.",
      tags: ["#Health", "#Nutrition", "#Wellness"],
      likes: 312,
      dislikes: 38,
      comments: 74,
      timestamp: "8 hours ago",
      trending: false,
      authorBadge: "regular",
    },
    {
      id: 6,
      author: "TravelBug",
      title: "Solo travel is the best way to grow",
      content:
        "Traveling alone forces you out of your comfort zone and builds confidence like nothing else. The connections you make and challenges you overcome shape you in ways that last a lifetime.",
      tags: ["#Travel", "#PersonalGrowth", "#Adventure"],
      likes: 267,
      dislikes: 19,
      comments: 53,
      timestamp: "1 day ago",
      trending: true,
      authorBadge: "top-contributor",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newOpinion, setNewOpinion] = useState({
    title: "",
    content: "",
    tags: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [activeFilter, setActiveFilter] = useState("trending");
  const [activeCategory, setActiveCategory] = useState("All Topic");

  const filteredOpinions = opinions
    .filter(
      (opinion) =>
        (opinion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          opinion.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
          opinion.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )) &&
        (activeCategory === "All Topic" ||
          opinion.tags.some((tag) =>
            tag.toLowerCase().includes(activeCategory.toLowerCase())
          ))
    )
    .sort((a, b) => {
      if (activeFilter === "trending") {
        return b.likes - b.dislikes - (a.likes - a.dislikes);
      } else if (activeFilter === "recent") {
        return new Date(b.timestamp) - new Date(a.timestamp);
      } else if (activeFilter === "controversial") {
        return Math.abs(b.likes - b.dislikes) - Math.abs(a.likes - a.dislikes);
      }
      return 0;
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOpinionObj = {
      id: opinions.length + 1,
      author: "You",
      title: newOpinion.title,
      content: newOpinion.content,
      tags: newOpinion.tags.split(",").map((tag) => `#${tag.trim()}`),
      likes: 0,
      dislikes: 0,
      comments: 0,
      timestamp: "Just now",
      trending: false,
      authorBadge: "new",
    };
    setOpinions([newOpinionObj, ...opinions]);
    setNewOpinion({ title: "", content: "", tags: "" });
    setShowForm(false);
  };

  const handleLike = (id) => {
    setOpinions(
      opinions.map((opinion) =>
        opinion.id === id ? { ...opinion, likes: opinion.likes + 1 } : opinion
      )
    );
  };

  const handleDislike = (id) => {
    setOpinions(
      opinions.map((opinion) =>
        opinion.id === id
          ? { ...opinion, dislikes: opinion.dislikes + 1 }
          : opinion
      )
    );
  };

  // Statistics for the sidebar
  const totalOpinions = opinions.length;
  const totalEngagement = opinions.reduce(
    (sum, opinion) => sum + opinion.likes + opinion.dislikes + opinion.comments,
    0
  );
  const mostActiveCategory = "Technology";
  const trendingTopics = [
    {
      name: "AI Regulation",
      count: 42,
      icon: <Zap className="h-4 w-4 text-purple-500" />,
    },
    {
      name: "Remote Work",
      count: 38,
      icon: <Clock className="h-4 w-4 text-blue-500" />,
    },
    {
      name: "Climate Change",
      count: 35,
      icon: <Flame className="h-4 w-4 text-orange-500" />,
    },
    {
      name: "Mental Health",
      count: 28,
      icon: <AlertCircle className="h-4 w-4 text-green-500" />,
    },
  ];

  const popularAuthors = [
    { name: "JaneDoe", contributions: 24, badge: "expert" },
    { name: "EcoWarrior", contributions: 18, badge: "top-contributor" },
    { name: "TechEnthusiast", contributions: 15, badge: "regular" },
    { name: "FinanceGuru", contributions: 12, badge: "expert" },
  ];

  const getBadgeIcon = (badge) => {
    switch (badge) {
      case "expert":
        return <Award className="h-4 w-4 text-yellow-500" />;
      case "top-contributor":
        return <Zap className="h-4 w-4 text-purple-500" />;
      case "regular":
        return <Users className="h-4 w-4 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
            Public Opinion Hub
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Share your perspective and engage with diverse viewpoints from our
            community of thinkers and debaters
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 relative">
          <div className="hidden lg:block absolute left-3/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>

          <div className="lg:w-3/4">
            <div className="flex flex-wrap gap-3 mb-6 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                    activeCategory === category.name
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                      : "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 outline-none transition-all duration-200"
                  placeholder="Search opinions, topics, or #tags"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex gap-3">
                <div className="relative">
                  <button
                    onClick={() => setisFilter(!isFilter)}
                    className="inline-flex items-center px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Filter className="h-5 w-5 mr-2 text-blue-500" />
                    <span className="font-medium">
                      {activeFilter.charAt(0).toUpperCase() +
                        activeFilter.slice(1)}
                    </span>
                    <ChevronDown className="h-5 w-5 ml-2 text-gray-600 dark:text-gray-400" />
                  </button>
                  {isFilter && (
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10 overflow-hidden">
                      <div className="py-1">
                        <button
                          onClick={() => {
                            setActiveFilter("trending");
                            setisFilter(false);
                          }}
                          className={`flex items-center px-4 py-2 w-full text-left ${
                            activeFilter === "trending"
                              ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`}
                        >
                          <TrendingUp className="h-5 w-5 mr-2 text-purple-500" />{" "}
                          Trending
                        </button>
                        <button
                          onClick={() => {
                            setActiveFilter("recent");
                            setisFilter(false);
                          }}
                          className={`flex items-center px-4 py-2 w-full text-left ${
                            activeFilter === "recent"
                              ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`}
                        >
                          <Clock className="h-5 w-5 mr-2 text-blue-500" />{" "}
                          Recent
                        </button>
                        <button
                          onClick={() => {
                            setActiveFilter("controversial");
                            setisFilter(false);
                          }}
                          className={`flex items-center px-4 py-2 w-full text-left ${
                            activeFilter === "controversial"
                              ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`}
                        >
                          <AlertCircle className="h-5 w-5 mr-2 text-red-500" />{" "}
                          Controversial
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setShowForm(!showForm)}
                  className="inline-flex items-center px-4 py-3 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white font-medium rounded-lg shadow-md hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
                >
                  <Plus className="h-5 w-5 mr-2" /> New Opinion
                </button>
              </div>
            </div>

            {/* Opinion Form */}
            {showForm && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-8 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <MessageSquare className="text-blue-500" />
                  Share Your Perspective
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Opinion Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="What's your opinion about?"
                      value={newOpinion.title}
                      onChange={(e) =>
                        setNewOpinion({ ...newOpinion, title: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="content"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Detailed Opinion
                    </label>
                    <textarea
                      id="content"
                      rows={5}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Express your thoughts in detail..."
                      value={newOpinion.content}
                      onChange={(e) =>
                        setNewOpinion({
                          ...newOpinion,
                          content: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="tags"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Tags (comma separated)
                    </label>
                    <input
                      type="text"
                      id="tags"
                      className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="technology, environment, politics"
                      value={newOpinion.tags}
                      onChange={(e) =>
                        setNewOpinion({ ...newOpinion, tags: e.target.value })
                      }
                    />
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      Add relevant tags to help others find your opinion
                    </p>
                  </div>

                  <div className="flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-6 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg shadow hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
                    >
                      Publish Opinion
                    </button>
                  </div>
                </form>
              </div>
            )}

            {filteredOpinions.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {filteredOpinions.map((opinion) => (
                  <div
                    key={opinion.id}
                    className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg ${
                      opinion.trending ? "ring-1 ring-amber-400/30" : ""
                    }`}
                  >
                    <div className="p-6">
                      {/* Author and Metadata */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-center text-white font-medium">
                            {opinion.author.charAt(0)}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-medium">{opinion.author}</p>
                              {opinion.authorBadge &&
                                opinion.authorBadge !== "new" && (
                                  <span className="flex items-center">
                                    {getBadgeIcon(opinion.authorBadge)}
                                  </span>
                                )}
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {opinion.timestamp}
                            </p>
                          </div>
                        </div>
                        {opinion.trending && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                            <Flame className="h-3 w-3 mr-1" /> Trending
                          </span>
                        )}
                      </div>

                      {/* Opinion Content */}
                      <div className="mb-5">
                        <h3 className="text-xl font-semibold mb-3">
                          {opinion.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {opinion.content}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {opinion.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200"
                          >
                            <Hash className="h-3 w-3 mr-1 text-blue-500" />{" "}
                            {tag.substring(1)}
                          </span>
                        ))}
                      </div>

                      {/* Engagement Buttons */}
                      <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-4">
                        <div className="flex space-x-4">
                          <button
                            onClick={() => handleLike(opinion.id)}
                            className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            <ThumbsUp className="h-5 w-5" />
                            <span>{opinion.likes}</span>
                          </button>
                          <button
                            onClick={() => handleDislike(opinion.id)}
                            className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                          >
                            <ThumbsDown className="h-5 w-5" />
                            <span>{opinion.dislikes}</span>
                          </button>
                          <button className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                            <MessageSquare className="h-5 w-5" />
                            <span>{opinion.comments}</span>
                          </button>
                        </div>

                        <div className="flex space-x-3">
                          <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                            <Bookmark className="h-5 w-5" />
                          </button>
                          <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                            <Share2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                <MessageSquare className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
                <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-gray-100">
                  No opinions found
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                  {searchTerm
                    ? "Try adjusting your search or filter to find what you're looking for"
                    : "Be the first to share your perspective with the community!"}
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => setShowForm(true)}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg shadow-md hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
                  >
                    <Plus className="h-5 w-5 mr-2" /> Share Your Opinion
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - 1 column */}
          <div className="lg:w-1/4 space-y-6 lg:pl-6">
            {/* Community Stats Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <BarChart2 className="h-5 w-5 text-blue-500" />
                Community Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-purple-500" /> Total
                    Opinions
                  </span>
                  <span className="font-medium">{totalOpinions}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-green-500" /> Total
                    Engagement
                  </span>
                  <span className="font-medium">{totalEngagement}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-orange-500" /> Most
                    Active Category
                  </span>
                  <span className="font-medium">{mostActiveCategory}</span>
                </div>
              </div>
            </div>

            {/* Trending Topics */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Flame className="h-5 w-5 text-orange-500" />
                Trending Topics
              </h3>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 p-2 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      {topic.icon}
                      <span className="text-gray-700 dark:text-gray-300">
                        {topic.name}
                      </span>
                    </div>
                    <span className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                      {topic.count} opinions
                    </span>
                  </div>
                ))}
                <button className="w-full flex items-center justify-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mt-2 transition-colors">
                  View all trending topics{" "}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Top Contributors */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-yellow-500" />
                Top Contributors
              </h3>
              <div className="space-y-4">
                {popularAuthors.map((author, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 p-2 rounded-lg transition-colors"
                  >
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-center text-white text-sm font-medium">
                      {author.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{author.name}</span>
                        {getBadgeIcon(author.badge)}
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {author.contributions} contributions
                      </span>
                    </div>
                  </div>
                ))}
                <button className="w-full flex items-center justify-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mt-2 transition-colors">
                  View all contributors{" "}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Community Guidelines */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-green-500" />
                Community Guidelines
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">•</span>
                  <span>Be respectful of differing opinions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">•</span>
                  <span>Back up claims with evidence when possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">•</span>
                  <span>No hate speech or personal attacks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">•</span>
                  <span>Stay on topic and avoid spam</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Opinion;
