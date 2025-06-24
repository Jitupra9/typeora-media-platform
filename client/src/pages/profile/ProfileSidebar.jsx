import React, { useState, useEffect, memo } from "react";
import {
  ListCheck,
  Flag,
  Plus,
  CheckCircle,
  Share2,
  Github,
  Twitter,
  Linkedin,
  X,
  BarChart2,
} from "lucide-react";
function ProfileSidebar() {
  const [skills, setSkills] = useState([
    "Java",
    "Python",
    "React",
    "MongoDB",
    "Node.js",
  ]);
  const [newSkill, setNewSkill] = useState("");
  const [showSkillInput, setShowSkillInput] = useState(false);
  const [stats, setStats] = useState({
    articles: 24,
    followers: 1342,
    following: 543,
    views: 12500,
  });
  useEffect(() => {
    setStats((prev) => ({
      ...prev,
      articles: 24,
      followers: 1342,
      following: 543,
      views: 12500,
    }));
  }, [stats]);

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
    setShowSkillInput(false);
  };
  return (
    <div className="w-full lg:w-[30%] space-y-5">
      <div className="p-5 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="flex items-center gap-3 font-semibold">
            <ListCheck className="w-5 h-5 text-blue-500" />
            Profile Checklist
          </h3>
          <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full">
            3/5 completed
          </span>
        </div>

        <div className="mt-6 space-y-5">
          {[
            {
              title: "Create Profile",
              completed: true,
              description: "Setup your basic profile",
            },
            {
              title: "Post Articles",
              completed: true,
              description: "Upload Articles on Typeora",
            },
            {
              title: "Complete Profile",
              completed: true,
              description: "Fillup all personal information",
            },
            {
              title: "Add Skills",
              completed: false,
              description: "Showcase your top skills",
            },
            {
              title: "Connect Social",
              completed: false,
              description: "Link your social profiles",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div
                className={`mt-1 p-1 rounded-full ${
                  item.completed
                    ? "bg-green-100 dark:bg-green-900/30"
                    : "bg-gray-100 dark:bg-gray-800"
                }`}
              >
                {item.completed ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <div className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-600"></div>
                )}
              </div>
              <div>
                <p
                  className={`font-medium ${
                    item.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {item.title}
                </p>
                <p className="text-xs text-gray-500 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="p-5 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="flex items-center gap-3 font-semibold">
            <Flag className="w-5 h-5 text-purple-500" />
            Skills & Expertise
          </h3>
          <button
            onClick={() => setShowSkillInput(!showSkillInput)}
            className="p-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {showSkillInput && (
          <div className="mt-3 flex gap-2">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Add new skill"
              className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addSkill}
              className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm"
            >
              Add
            </button>
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
            >
              {item}
              <button
                onClick={() =>
                  setSkills(skills.filter((skill) => skill !== item))
                }
                className="text-blue-400 hover:text-blue-600 dark:hover:text-blue-200"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="p-5 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
        <h3 className="flex items-center gap-3 font-semibold mb-4">
          <BarChart2 className="w-5 h-5 text-green-500" />
          Your Stats
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <p className="text-gray-500 dark:text-gray-400 text-sm">Articles</p>
            <p className="text-xl font-bold">{stats.articles}</p>
          </div>
          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Followers
            </p>
            <p className="text-xl font-bold">{stats.followers}</p>
          </div>
          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Following
            </p>
            <p className="text-xl font-bold">{stats.following}</p>
          </div>
          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <p className="text-gray-500 dark:text-gray-400 text-sm">Views</p>
            <p className="text-xl font-bold">{stats.views.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="p-5 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
        <h3 className="flex items-center gap-3 font-semibold mb-4">
          <Share2 className="w-5 h-5 text-blue-500" />
          Connect With Me
        </h3>

        <div className="flex gap-3">
          <a
            href="/"
            className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="/"
            className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
          >
            <Twitter className="w-5 h-5 text-blue-400" />
          </a>
          <a
            href="/"
            className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
          >
            <Linkedin className="w-5 h-5 text-blue-600" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default memo(ProfileSidebar);
