import React, { useState, useEffect, memo, useContext } from "react";
import { BarChart2, ChevronDown, ChevronUp, Image, Video, MessageSquare, Eye, Users, UserPlus, FileText, Heart, MessageCircle } from "lucide-react";
import { ProfileDataContext } from "../../../context/page/ProfileContext";

function ProfileStats() {
  const { contextValue } = useContext(ProfileDataContext);
  const [showAll, setShowAll] = useState(false);

  const [stats, setStats] = useState({
    articles: 0,
    followers: 0,
    following: 0,
    views: 0,
    posts: 0,
    videos: 0,
    opinions: 0,
    likes: 0,
    comments: 0,
    engagements: 0,
  });

  useEffect(() => {
    if (contextValue?.TotalData) {
      setStats(prev => ({
        ...prev,
        articles: contextValue.TotalData.totalArticle || 0,
        followers: contextValue.TotalData.followers || 1245,
        following: contextValue.TotalData.following || 342,
        views: contextValue.TotalData.views || 12560,
        posts: contextValue.TotalData.posts || 47,
        videos: contextValue.TotalData.videos || 12,
        opinions: contextValue.TotalData.opinions || 28,
        likes: contextValue.TotalData.likes || 3560,
        comments: contextValue.TotalData.comments || 489,
        engagements: contextValue.TotalData.engagements || 3450,
      }));
    }
  }, [contextValue.TotalData]);

  const primaryStats = [
    {
      key: "posts",
      label: "Posts",
      value: stats.posts,
      icon: Image,
      iconColor: "text-blue-500",
      description: "Image & video content"
    },
    {
      key: "videos",
      label: "Videos",
      value: stats.videos,
      icon: Video,
      iconColor: "text-red-500",
      description: "Short-form videos"
    },
    {
      key: "articles",
      label: "Articles",
      value: stats.articles,
      icon: FileText,
      iconColor: "text-green-500",
      description: "Long-form content"
    },
    {
      key: "opinions",
      label: "Opinions",
      value: stats.opinions,
      icon: MessageSquare,
      iconColor: "text-purple-500",
      description: "Quick thoughts & polls"
    }
  ];

  const secondaryStats = [
    {
      key: "followers",
      label: "Followers",
      value: stats.followers,
      icon: Users,
      iconColor: "text-amber-500",
      description: "Your community"
    },
    {
      key: "following",
      label: "Following",
      value: stats.following,
      icon: UserPlus,
      iconColor: "text-cyan-500",
      description: "People you follow"
    },
    {
      key: "views",
      label: "Views",
      value: stats.views,
      icon: Eye,
      iconColor: "text-indigo-500",
      description: "Content impressions"
    },
    {
      key: "likes",
      label: "Likes",
      value: stats.likes,
      icon: Heart,
      iconColor: "text-pink-500",
      description: "Post reactions"
    },
    {
      key: "comments",
      label: "Comments",
      value: stats.comments,
      icon: MessageCircle,
      iconColor: "text-teal-500",
      description: "User interactions"
    },
    {
      key: "engagements",
      label: "Engagements",
      value: stats.engagements,
      icon: BarChart2,
      iconColor: "text-orange-500",
      description: "Total interactions"
    }
  ];

  const visibleStats = showAll ? [...primaryStats, ...secondaryStats] : primaryStats;

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
      <h3 className="flex items-center gap-3 font-semibold text-lg mb-6 text-gray-700 dark:text-gray-300">
        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <BarChart2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
        Your Stats
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {visibleStats.map((stat) => (
          <div 
            key={stat.key} 
            className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-750 border border-gray-100 dark:border-gray-800"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{stat.label}</p>
              <stat.icon className={`w-4 h-4 ${stat.iconColor}`} />
            </div>
            <p className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-1">
              {stat.value.toLocaleString()}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">{stat.description}</p>
          </div>
        ))}
      </div>

      {(secondaryStats.length > 0) && (
        <button 
          onClick={() => setShowAll(!showAll)}
          className="mt-6 w-full py-3 flex items-center justify-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-750"
        >
          {showAll ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Show less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              Show more stats
            </>
          )}
        </button>
      )}
    </div>
  );
}

export default memo(ProfileStats);