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
    <div className="min-h-screen dark:text-white text-black   py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold  mb-2">Public Opinion</h1>
          <p className="text-gray-600">
            Share your thoughts and explore what others think
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2  bg-gray-300 dark:bg-gray-800 rounded-md leading-5  placeholder-gray-500 outline-none   sm:text-sm"
              placeholder="Search opinions, topics, or #tags"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="relative">
            <button
              onClick={() => {
                setisFilter(!isFilter);
              }}
              className=" outline-none inline-flex justify-center w-full px-4 py-2 text-sm font-medium  bg-gray-300 dark:bg-gray-800   rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
            >
              <Filter className="h-4 w-4 mr-2" />
              {activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1) ||
                "Filter"}
              <ChevronDown className="h-4 w-4 ml-2" />
            </button>
            {isFilter && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <button
                    onClick={() => setActiveFilter("trending")}
                    className={`block px-4 py-2 text-sm w-full text-left ${
                      activeFilter === "trending"
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <TrendingUp className="inline h-4 w-4 mr-2" /> Trending
                  </button>
                  <button
                    onClick={() => setActiveFilter("recent")}
                    className={`block px-4 py-2 text-sm w-full text-left ${
                      activeFilter === "recent"
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <MessageSquare className="inline h-4 w-4 mr-2" /> Recent
                  </button>
                  <button
                    onClick={() => setActiveFilter("controversial")}
                    className={`block px-4 py-2 text-sm w-full text-left ${
                      activeFilter === "controversial"
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <MessageSquare className="inline h-4 w-4 mr-2" />{" "}
                    Controversial
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Plus className="h-4 w-4 mr-2" /> New Opinion
          </button>
        </div>
        {showForm && (
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-6">
            <h3 className="text-lg font-medium  mb-4">Share Your Opinion</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="shadow-sm bg-transparent focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                  placeholder="What's your opinion about?"
                  value={newOpinion.title}
                  onChange={(e) =>
                    setNewOpinion({ ...newOpinion, title: e.target.value })
                  }
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Opinion
                </label>
                <textarea
                  id="content"
                  rows={4}
                  className="shadow-sm bg-transparent focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                  placeholder="Express your thoughts in detail..."
                  value={newOpinion.content}
                  onChange={(e) =>
                    setNewOpinion({ ...newOpinion, content: e.target.value })
                  }
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="tags"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  id="tags"
                  className="shadow-sm bg-transparent focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                  placeholder="technology, environment, politics"
                  value={newOpinion.tags}
                  onChange={(e) =>
                    setNewOpinion({ ...newOpinion, tags: e.target.value })
                  }
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-3"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Post Opinion
                </button>
              </div>
            </form>
          </div>
        )}
        <div className=" gap-6 flex flex-wrap w-full">
          {filteredOpinions.length > 0 ? (
            filteredOpinions.map((opinion) => (
              <div
                key={opinion.id}
                className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg w-full sm:w-[48%]"
              >
                <div className="px-6 py-5 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <User className="h-5 w-5 text-blue-600" />
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium ">{opinion.author}</p>
                        <p className="text-sm text-gray-500">
                          {opinion.timestamp}
                        </p>
                      </div>
                    </div>
                    {opinion.trending && (
                      <span className="inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <TrendingUp className="h-3 w-3 mr-1" /> Trending
                      </span>
                    )}
                  </div>
                </div>

                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium  mb-2">{opinion.title}</h3>
                  <p className="text-gray-600 mb-4">{opinion.content}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {opinion.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        <Hash className="h-3 w-3 mr-1" /> {tag.substring(1)}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="flex space-x-4">
                      <button
                        onClick={() => handleLike(opinion.id)}
                        className="inline-flex items-center text-gray-500 hover:text-blue-600"
                      >
                        <ThumbsUp className="h-5 w-5 mr-1" /> {opinion.likes}
                      </button>
                      <button
                        onClick={() => handleDislike(opinion.id)}
                        className="inline-flex items-center text-gray-500 hover:text-red-600"
                      >
                        <ThumbsDown className="h-5 w-5 mr-1" />{" "}
                        {opinion.dislikes}
                      </button>
                      <button className="inline-flex items-center text-gray-500 hover:text-gray-700">
                        <MessageSquare className="h-5 w-5 mr-1" />{" "}
                        {opinion.comments}
                      </button>
                    </div>

                    <div className="flex space-x-4">
                      <button className="text-gray-500 hover:text-gray-700">
                        <Bookmark className="h-5 w-5" />
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white shadow rounded-lg">
              <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">
                No opinions found
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {searchTerm
                  ? "Try a different search term"
                  : "Be the first to share your opinion!"}
              </p>
              <div className="mt-6">
                <button
                  onClick={() => setShowForm(true)}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Plus className="h-4 w-4 mr-2" /> Share Your Opinion
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Opinion;
