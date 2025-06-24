import React, { memo, useContext, useMemo, useEffect, useState } from "react";
import { Headers } from "../../context/utils/Headercontext";
import people from "../../assets/images/people.jpg";
import { IsAuthnticate } from "../../context/Auth/IsAuth";
import {
  Dot,
  ListCheck,
  Flag,
  Plus,
  User,
  BookOpen,
  Video,
  Settings,
  Calendar,
  Briefcase,
  Clock,
  CheckCircle,
  Edit,
  Award,
  Share2,
  Mail,
  Globe,
  Github,
  Twitter,
  Linkedin,
  Star,
  X,
  BarChart2,
  Users as FriendsIcon,
} from "lucide-react";
import Personalinfo from "../../component/Page/Personalinfo";
import NewArticle from "../../component/Page/NewArticle";

function Profile() {
  const { setheaders } = useContext(Headers);
  const [isactive, setisactive] = useState("Personal");
  const { Auth } = useContext(IsAuthnticate);
  const [skills, setSkills] = useState([
    "Java",
    "Python",
    "React",
    "MongoDB",
    "Node.js",
  ]);
  const [newSkill, setNewSkill] = useState("");
  const [showSkillInput, setShowSkillInput] = useState(false);
  const [profileCompletion, setProfileCompletion] = useState(75);
  const [stats, setStats] = useState({
    articles: 24,
    followers: 1342,
    following: 543,
    views: 12500,
  });

  const categories = useMemo(
    () => [
      { path: "/profile", name: "Profile" },
      { path: "live-now", name: "Live now" },
    ],
    []
  );

  const components = (componentName) => {
    switch (componentName) {
      case "Personal":
        return <Personalinfo />;
      case "NewArticle":
        return <NewArticle />;
      default:
        return "Click valid button";
    }
  };

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
    setShowSkillInput(false);
  };

  useEffect(() => {
    setheaders(categories);
  }, [setheaders, categories]);

  return (
    <div className="p-1  font-semibold flex flex-col lg:flex-row justify-between text-gray-700 dark:text-gray-200 gap-5">
      <div className="w-full lg:w-[68%] space-y-5">
        <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-sm">
          <div className="flex flex-col sm:flex-row py-3 items-start sm:items-center justify-between border-b border-gray-200 dark:border-gray-700 gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                  src={people}
                  alt="Profile"
                />
                <div className="absolute bottom-0 right-0 bg-green-500 rounded-full w-4 h-4 border-2 border-white dark:border-gray-900"></div>
              </div>
              <div>
                <h3 className="font-bold text-xl">
                  {Auth.user.userFirstname + " " + Auth.user.userFirstname}
                  <span className="ml-2 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full">
                    Pro
                  </span>
                </h3>
                <p className=" flex flex-col lg:flex-row   text-gray-500 dark:text-gray-400 text-sm ">
                  <div className=" flex items-center">
                    <Briefcase className="w-4 h-4 mr-1" />
                    Senior Full Stack Developer
                  </div>
                  <Dot className="mx-1 hidden lg:block" />
                  <div className=" flex items-center">
                    <Mail className="w-4 h-4 mr-1" />
                    {Auth.user.userEmail}
                  </div>
                </p>
              </div>
            </div>
            <div className="flex gap-3  justify-between w-full sm:w-max sm:justify-normal ">
              <button className="flex items-center gap-2 text-sm bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                <Edit className="w-4 h-4" />
                Edit Profile
              </button>
              <button className="flex items-center gap-2 text-sm bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>

          {/* Profile Stats */}
          <div className="py-3 text-sm flex flex-wrap items-center justify-between gap-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <Calendar className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-gray-400">Location</p>
                <h3 className="font-semibold flex items-center gap-1">
                  <Globe className="w-4 h-4" />
                  {Auth.user.userlocation}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                <Briefcase className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <p className="text-gray-400">Company</p>
                <h3 className="font-semibold">Web Bocket</h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                <Clock className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="text-gray-400">Available</p>
                <h3 className="font-semibold">20 Hours/Week</h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
                <Award className="w-5 h-5 text-yellow-500" />
              </div>
              <div>
                <p className="text-gray-400">Status</p>
                <p className="px-3 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  Active
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm">
                Profile Completion: {profileCompletion}%
              </span>
              <span className="text-xs text-blue-500">Complete Profile</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${profileCompletion}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-sm">
          <ul className="flex overflow-x-auto gap-1 pb-2 hidel_slide_roler">
            {[
              { name: "Personal", icon: User },
              { name: "Article", icon: BookOpen },
              { name: "Videos", icon: Video },
              { name: "Lives", icon: Video },
              { name: "Stats", icon: BarChart2 },
              { name: "Friends", icon: FriendsIcon },
              { name: "Settings", icon: Settings },
            ].map((item) => (
              <li
                key={item.name}
                onClick={() => setisactive(item.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer whitespace-nowrap ${
                  isactive === item.name
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </li>
            ))}
          </ul>

          <div className="mt-5 bg-white dark:bg-gray-900 rounded-xl p-4">
            {components(isactive)}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[30%] space-y-5">
        {/* Checklist */}
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
                  <p className="text-xs text-gray-500 mt-1">
                    {item.description}
                  </p>
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
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Articles
              </p>
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
              <p className="text-xl font-bold">
                {stats.views.toLocaleString()}
              </p>
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
              href="#"
              className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
            >
              <Twitter className="w-5 h-5 text-blue-400" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
            >
              <Linkedin className="w-5 h-5 text-blue-600" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Profile);
