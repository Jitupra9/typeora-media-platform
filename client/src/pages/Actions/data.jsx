import React from "react";
import {
  ThumbsUp,
  MessageSquare,
  FileText,
  Video,
  Heart,
  Share2,
  Star,
  Zap,
  Users as CommunityIcon,
} from "lucide-react";
function Data() {
  const interactions = {
    engagements: [
      {
        id: 1,
        type: "opinion",
        title: "The future of renewable energy",
        author: "EcoWarrior",
        timestamp: "2 hours ago",
        icon: <FileText className="h-5 w-5 text-blue-500" />,
        preview:
          "Solar and wind are becoming more cost-effective than fossil fuels...",
        tags: ["environment", "energy"],
        action: "liked",
        actionIcon: <ThumbsUp className="h-4 w-4 text-green-500" />,
      },
      {
        id: 2,
        type: "video",
        title: "React 18 New Features",
        author: "CodeMaster",
        timestamp: "1 day ago",
        icon: <Video className="h-5 w-5 text-red-500" />,
        preview: "Exploring concurrent rendering and automatic batching...",
        tags: ["react", "programming"],
        action: "commented",
        actionIcon: <MessageSquare className="h-4 w-4 text-blue-500" />,
        yourComment: "The automatic batching feature is game-changing!",
      },
    ],
    contributions: [
      {
        id: 3,
        type: "opinion",
        title: "Why we need four-day work weeks",
        author: "You",
        timestamp: "3 days ago",
        icon: <FileText className="h-5 w-5 text-blue-500" />,
        preview:
          "After implementing this at our company, productivity increased by 20%...",
        tags: ["work", "productivity"],
        stats: {
          likes: 142,
          comments: 28,
          shares: 15,
        },
      },
    ],
    community: [
      {
        id: 4,
        type: "discussion",
        title: "Monthly Tech Debate",
        participants: 24,
        timestamp: "Ongoing",
        icon: <CommunityIcon className="h-5 w-5 text-purple-500" />,
        preview: "Join our debate on the best state management solutions...",
        tags: ["discussion", "tech"],
      },
    ],
  };
  const stats = [
    {
      name: "Total Engagements",
      value: 87,
      icon: <Heart className="h-6 w-6 text-pink-500" />,
      change: "+12%",
    },
    {
      name: "Content Shared",
      value: 23,
      icon: <Share2 className="h-6 w-6 text-blue-500" />,
      change: "+5%",
    },
    {
      name: "Community Points",
      value: 450,
      icon: <Star className="h-6 w-6 text-yellow-500" />,
      change: "+32",
    },
    {
      name: "Active Streak",
      value: "14 days",
      icon: <Zap className="h-6 w-6 text-orange-500" />,
      change: "+2",
    },
  ];
  return { interactions, stats };
}

export default Data;
