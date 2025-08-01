import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dot,
  Briefcase,
  Clock,
  CheckCircle,
  Edit,
  Award,
  Users,
  Share2,
  Mail,
  Globe,
  Video,
  BookOpen,
  MessageCircle,
  Bookmark,
  Heart,
  MessageSquare,
  Eye,
  MoreHorizontal,
  ChevronDown,
  Search,
  Filter,
  ArrowRight,
  Image as ImageIcon,
  UserPlus,
  Download,
  ExternalLink,
} from "lucide-react";

function ProfilePage() {
  const [activeTab, setActiveTab] = useState("articles");
  const [sortBy, setSortBy] = useState("recent");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedPost, setExpandedPost] = useState(null);
  const navigate = useNavigate();

  const handleExpandPost = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  const handleViewFullPost = (postId) => {
    navigate(`/post/${postId}`);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Profile Header */}
      <VisitedProfileHeader />

      {/* Content Section */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content Feed - Left Side */}
        <div className="lg:col-span-3 order-1 lg:order-none">
          {/* Content Type Tabs */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4 mb-6">
            <div className="flex gap-5 text-sm font-medium text-gray-500 dark:text-gray-400 overflow-x-auto pb-2">
              <TabButton
                active={activeTab === "articles"}
                icon={<BookOpen className="w-4 h-4" />}
                label="Articles"
                count={12}
                onClick={() => setActiveTab("articles")}
              />
              <TabButton
                active={activeTab === "videos"}
                icon={<Video className="w-4 h-4" />}
                label="Videos"
                count={8}
                onClick={() => setActiveTab("videos")}
              />
              <TabButton
                active={activeTab === "opinions"}
                icon={<MessageCircle className="w-4 h-4" />}
                label="Opinions"
                count={23}
                onClick={() => setActiveTab("opinions")}
              />
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4 mb-6">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search in content..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>

                <button
                  className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  onClick={() =>
                    setSortBy(sortBy === "recent" ? "popular" : "recent")
                  }
                >
                  <span>
                    {sortBy === "recent" ? "Most Recent" : "Most Popular"}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Content Feed */}
          <div className="space-y-6">
            {getContentByType(activeTab).map((item) => (
              <ContentCard
                key={item.id}
                item={item}
                type={activeTab}
                isExpanded={expandedPost === item.id}
                onExpand={handleExpandPost}
                onViewFull={handleViewFullPost}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <button className="px-6 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300">
              Load More
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1 space-y-4 order-2 lg:order-none">
          {/* About Author */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4">
            <h3 className="font-semibold text-lg mb-3 text-gray-800 dark:text-gray-200">
              About Author
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Full Stack Developer with 5+ years of experience building web
              applications.
            </p>
            <button className="w-full flex items-center justify-center gap-2 text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg">
              <UserPlus className="w-4 h-4" /> Follow
            </button>
          </div>

          {/* Skills */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4">
            <h3 className="font-semibold text-lg mb-3 text-gray-800 dark:text-gray-200">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Node.js",
                "JavaScript",
                "TypeScript",
                "CSS",
                "HTML",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// VisitedProfileHeader Component
function VisitedProfileHeader() {
  const [shareActive, setShareActive] = useState(false);
  const user = {
    Firstname: "Jitu",
    LastName: "Pradhan",
    Role: "Full Stack Developer",
    Email: "jitu@example.com",
    Location: "Bhubaneswar, India",
    Company: "OpenAI",
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-blue-500 flex items-center justify-center text-gray-400">
              <span className="text-xl font-bold">JP</span>
            </div>
            <div className="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white dark:border-gray-900"></div>
          </div>
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-800 dark:text-gray-200">
              {user.Firstname + " " + user.LastName}
              <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full">
                Pro
              </span>
            </h2>
            <div className="flex flex-wrap gap-2 text-gray-500 dark:text-gray-400 text-sm mt-1">
              <span className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" /> {user.Role}
              </span>
              <Dot />
              <span className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                {user.Email}
              </span>
            </div>
            <div className="flex items-center gap-5 mt-2 text-sm text-gray-600 dark:text-gray-300">
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <strong>1,243</strong> Followers
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <strong>567</strong> Following
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 text-sm bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            <Edit className="w-4 h-4" /> Edit Profile
          </button>
          <button
            onClick={() => setShareActive(!shareActive)}
            className="flex items-center gap-2 text-sm bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300"
          >
            <Share2 className="w-4 h-4" /> Share
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-5 py-4">
        <ProfileDetail
          icon={<Globe className="w-5 h-5 text-blue-500" />}
          label="Location"
          value={user.Location}
        />
        <ProfileDetail
          icon={<Briefcase className="w-5 h-5 text-purple-500" />}
          label="Company"
          value={user.Company}
        />
        <ProfileDetail
          icon={<Clock className="w-5 h-5 text-green-500" />}
          label="Available"
          value="20 Hours/Week"
        />
        <ProfileDetail
          icon={<Award className="w-5 h-5 text-yellow-500" />}
          label="Status"
          value="Active"
        />
      </div>
    </div>
  );
}

// ContentCard Component
function ContentCard({ item, type, isExpanded, onExpand, onViewFull }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow overflow-hidden hover:shadow-lg transition-shadow">
      {/* Card Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400">
            <span className="text-sm font-bold">JP</span>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 dark:text-gray-200">
              Jitu Pradhan
            </h4>
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <span>{item.date}</span>
              <Dot />
              <span>{item.views}</span>
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Card Content */}
      <div className="p-4">
        {(type === "articles" || type === "videos") && (
          <div className="mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-video flex items-center justify-center text-gray-400">
            <ImageIcon className="w-12 h-12" />
          </div>
        )}

        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
          {item.title}
        </h3>

        {isExpanded ? (
          <div className="text-gray-600 dark:text-gray-300 mb-4">
            <p>
              {item.fullContent ||
                "This is the full content of the post. It would include detailed information, images, and other rich content in a real application."}
            </p>
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {item.excerpt}
          </p>
        )}

        {type === "articles" && (
          <div className="flex flex-wrap gap-2 mb-4">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex gap-4">
          <button
            className={`flex items-center gap-1 ${
              isLiked ? "text-red-500" : "text-gray-500 dark:text-gray-400"
            }`}
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart
              className="w-5 h-5"
              fill={isLiked ? "currentColor" : "none"}
            />
            <span>{isLiked ? item.likes + 1 : item.likes}</span>
          </button>
          <button className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
            <MessageSquare className="w-5 h-5" />
            <span>{item.comments}</span>
          </button>
        </div>

        <div className="flex gap-2">
          <button
            className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            onClick={() => onExpand(item.id)}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>

          {isExpanded && (
            <button
              className="flex items-center gap-1 text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg"
              onClick={() => onViewFull(item.id)}
            >
              View Full Post
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Helper Components
function ProfileDetail({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-400">{label}</p>
        <div className="font-semibold text-sm text-gray-700 dark:text-gray-300">
          {value}
        </div>
      </div>
    </div>
  );
}

function TabButton({ active, icon, label, count, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-1 rounded-md transition-colors ${
        active
          ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
          : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
      }`}
    >
      {icon}
      {label}
      {count && (
        <span className="text-xs bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded-full">
          {count}
        </span>
      )}
    </button>
  );
}

// Data Helpers
function getContentByType(type) {
  const baseContent = [
    {
      id: 1,
      title: "Building Scalable Microservices with Node.js",
      excerpt:
        "Learn how to architect and build microservices that can scale to millions of users...",
      fullContent:
        "In this comprehensive guide, we'll explore how to build scalable microservices using Node.js. We'll cover everything from the basic architecture to advanced deployment strategies...",
      date: "2 days ago",
      views: "1.2K views",
      likes: 84,
      comments: 23,
      tags: ["Node.js", "Microservices", "Docker"],
    },
    {
      id: 2,
      title: "React Hooks: Beyond the Basics",
      excerpt:
        "Deep dive into advanced React Hooks patterns and how to use them...",
      fullContent:
        "React Hooks have revolutionized how we write React components. In this article, we'll explore advanced patterns like custom hooks composition, context optimization...",
      date: "1 week ago",
      views: "3.4K views",
      likes: 156,
      comments: 42,
      tags: ["React", "JavaScript"],
    },
  ];

  if (type === "videos") {
    return [
      {
        id: 3,
        title: "Building a Full Stack App with Next.js",
        excerpt:
          "In this tutorial, I'll walk you through building a complete application...",
        fullContent:
          "This video tutorial covers the complete process of building a full stack application with Next.js, from initial setup to deployment...",
        date: "3 days ago",
        views: "2.1K views",
        likes: 132,
        comments: 31,
      },
    ];
  }

  if (type === "opinions") {
    return [
      {
        id: 4,
        title: "Why I Still Use Vanilla JavaScript",
        excerpt:
          "Frameworks are great, but sometimes plain JavaScript is the better choice...",
        fullContent:
          "In this opinion piece, I explain why I still reach for vanilla JavaScript for certain projects, despite the popularity of frameworks...",
        date: "4 days ago",
        views: "3.8K views",
        likes: 210,
        comments: 92,
      },
    ];
  }

  return baseContent;
}

export default memo(ProfilePage);
