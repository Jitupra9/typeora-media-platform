import React, { useState, useEffect, useMemo, useContext } from "react";
import { Headers } from "../context/utils/Headercontext";
import {
  Search,
  MessageSquare,
  TrendingUp,
  Hash,
  User,
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
} from "lucide-react";

function Opinion() {
  const [isFilter, setisFilter] = useState(false);
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

  const [opinions, setOpinions] = useState([
    {
      id: 1,
      author: "JaneDoe",
      title: "The impact of AI on job markets",
      content:
        "While AI will eliminate some jobs, I believe it will create more opportunities than it destroys by enabling new industries and increasing productivity.",
      tags: ["#AI", "#FutureOfWork", "#Technology"],
      likes: 42,
      dislikes: 8,
      comments: 15,
      timestamp: "2 hours ago",
      trending: true,
    },
    {
      id: 2,
      author: "TechEnthusiast",
      title: "Smartphones are becoming too expensive",
      content:
        "The latest flagship phones are pricing out average consumers. We need more mid-range options with premium features.",
      tags: ["#Smartphones", "#Tech", "#Consumer"],
      likes: 89,
      dislikes: 12,
      comments: 34,
      timestamp: "5 hours ago",
      trending: false,
    },
    {
      id: 3,
      author: "EcoWarrior",
      title: "Plastic bag bans are effective",
      content:
        "Cities that have implemented plastic bag bans show significant reduction in plastic waste. We should expand these policies nationwide.",
      tags: ["#Environment", "#Sustainability", "#Policy"],
      likes: 156,
      dislikes: 23,
      comments: 42,
      timestamp: "1 day ago",
      trending: true,
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

  const filteredOpinions = opinions
    .filter(
      (opinion) =>
        opinion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opinion.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opinion.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Public Opinion Hub
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Share your perspective and engage with diverse viewpoints from our
            community
          </p>
        </div>

        {/* Search and Filter Bar */}
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
                <Filter className="h-5 w-5 mr-2 text-gray-600 dark:text-gray-400" />
                <span className="font-medium">
                  {activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}
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
                      <TrendingUp className="h-5 w-5 mr-2" /> Trending
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
                      <Clock className="h-5 w-5 mr-2" /> Recent
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
                      <AlertCircle className="h-5 w-5 mr-2" /> Controversial
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg shadow-md hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
            >
              <Plus className="h-5 w-5 mr-2" /> New Opinion
            </button>
          </div>
        </div>

        {/* Opinion Form */}
        {showForm && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-8 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <MessageSquare className="text-blue-600 dark:text-blue-400" />
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
                    setNewOpinion({ ...newOpinion, content: e.target.value })
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

        {/* Opinions Grid */}
        {filteredOpinions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredOpinions.map((opinion) => (
              <div
                key={opinion.id}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg ${
                  opinion.trending ? "ring-2 ring-blue-500/20" : ""
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
                        <p className="font-medium">{opinion.author}</p>
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
                        <Hash className="h-3 w-3 mr-1" /> {tag.substring(1)}
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
    </div>
  );
}

export default Opinion;
