import React, { useState } from "react";
import {
  Home as HomeIcon,
  Search,
  Bell,
  Mail,
  Bookmark,
  User,
  MoreHorizontal,
  MessageCircle,
  Heart,
  Share2,
  Ellipsis,
  Users,
  Image as ImageIcon,
  Video,
  PlusIcon,
  Smile,
  Flag,
  Music,
  Settings,
  ThumbsUp,
  MessageSquare,
  SendHorizonal,
  ChevronDown,
  X,
  ChevronLeft,
  Check,
  UserPlus,
} from "lucide-react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import CenterContent from "./CenterContent";
function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("posts");
  const [commentVisible, setCommentVisible] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [activeView, setActiveView] = useState("home");
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [messageText, setMessageText] = useState("");
  const [friendRequests, setFriendRequests] = useState([
    { id: 1, name: "Emma Stone", avatar: "ES", mutual: 4 },
    { id: 2, name: "Chris Evans", avatar: "CE", mutual: 8 },
  ]);

  const stories = [
    { id: 1, user: "You", avatar: "YU", hasStory: true, isNew: true },
    {
      id: 2,
      user: "Alice",
      avatar: "AL",
      hasStory: true,
      color: "bg-pink-300",
    },
    { id: 3, user: "Bob", avatar: "BO", hasStory: true, color: "bg-blue-300" },
    {
      id: 4,
      user: "Charlie",
      avatar: "CH",
      hasStory: false,
      color: "bg-green-300",
    },
    {
      id: 5,
      user: "Diana",
      avatar: "DI",
      hasStory: true,
      color: "bg-purple-300",
    },
  ];

  const activeFriends = [
    { id: 1, name: "Jane Cooper", avatar: "JC", online: true, mutual: 12 },
    { id: 2, name: "John Doe", avatar: "JD", online: true, mutual: 5 },
    { id: 3, name: "Alice Smith", avatar: "AS", online: true, mutual: 8 },
    { id: 4, name: "Bob Johnson", avatar: "BJ", online: false, mutual: 3 },
    { id: 5, name: "Emma Wilson", avatar: "EW", online: true, mutual: 7 },
  ];

  const suggestedFriends = [
    { id: 6, name: "Michael Brown", avatar: "MB", mutual: 3 },
    { id: 7, name: "Sarah Connor", avatar: "SC", mutual: 7 },
    { id: 8, name: "David Wilson", avatar: "DW", mutual: 2 },
  ];

  const suggestedGroups = [
    { name: "Tech Enthusiasts", members: "12.5k", category: "Technology" },
    { name: "Photography Club", members: "8.2k", category: "Arts" },
    { name: "Book Lovers", members: "15.7k", category: "Literature" },
  ];

  const upcomingEvents = [
    {
      title: "Community Meetup",
      date: "Oct 15",
      location: "Virtual",
      interested: 245,
    },
    {
      title: "Workshop: Web Dev",
      date: "Nov 2",
      location: "Main Hall",
      interested: 189,
    },
  ];

  const recentActivities = [
    {
      user: "Jane Cooper",
      action: "liked your post",
      time: "2 min ago",
      avatar: "JC",
    },
    {
      user: "John Doe",
      action: "commented on your photo",
      time: "15 min ago",
      avatar: "JD",
    },
    {
      user: "Tech Group",
      action: "posted a new discussion",
      time: "1 hr ago",
      avatar: "TG",
    },
  ];

  const posts = [
    {
      id: 1,
      user: "Alice Smith",
      avatar: "AS",
      handle: "@alicesmith",
      time: "30 min ago",
      content:
        "Just finished my new project! Check it out and let me know what you think. #webdev #react",
      likes: 42,
      comments: 8,
      shares: 3,
      isLiked: false,
      isSaved: false,
      commentsList: [
        { user: "John", text: "Looks amazing!", time: "10 min ago" },
        { user: "Sarah", text: "Great work Alice!", time: "5 min ago" },
      ],
    },
    {
      id: 2,
      user: "Bob Johnson",
      avatar: "BJ",
      handle: "@bobjohnson",
      time: "2 hrs ago",
      content:
        "Beautiful day for a hike! Nature always helps me clear my mind and get new ideas.",
      hasImage: true,
      likes: 128,
      comments: 24,
      shares: 12,
      isLiked: true,
      isSaved: true,
      commentsList: [
        { user: "Mike", text: "Where is this?", time: "1 hr ago" },
        {
          user: "Bob",
          text: "It's the Blue Ridge Mountains",
          time: "45 min ago",
        },
      ],
    },
    {
      id: 3,
      user: "Tech News",
      avatar: "TN",
      handle: "@technews",
      time: "4 hrs ago",
      content:
        "Breaking: New AI model can generate realistic videos from text prompts",
      hasVideo: true,
      likes: 845,
      comments: 132,
      shares: 215,
      isLiked: false,
      isSaved: false,
      commentsList: [],
    },
  ];

  const messages = [
    {
      id: 1,
      friendId: 1,
      content: "Hey, how are you doing?",
      time: "10:30 AM",
      isMe: false,
    },
    {
      id: 2,
      friendId: 1,
      content: "I'm good, thanks! How about you?",
      time: "10:32 AM",
      isMe: true,
    },
    {
      id: 3,
      friendId: 1,
      content: "Do you want to meet up later?",
      time: "10:33 AM",
      isMe: false,
    },
    {
      id: 4,
      friendId: 2,
      content: "Did you see the new movie?",
      time: "Yesterday",
      isMe: false,
    },
  ];

  const toggleLike = (postId) => {};

  const toggleSave = (postId) => {};

  const toggleComment = (postId) => {
    setCommentVisible(commentVisible === postId ? null : postId);
  };

  const handleCommentSubmit = (postId) => {
    setCommentText("");
    setCommentVisible(null);
  };

  const handleMessageClick = (friend) => {
    setSelectedFriend(friend);
    setActiveView("messages");
  };

  const handleBackToHome = () => {
    setActiveView("home");
    setSelectedFriend(null);
  };

  const handleSendMessage = () => {
    if (messageText.trim() === "") return;
    setMessageText("");
  };

  const handleAcceptRequest = (id) => {
    setFriendRequests(friendRequests.filter((req) => req.id !== id));
  };

  const handleRejectRequest = (id) => {
    setFriendRequests(friendRequests.filter((req) => req.id !== id));
  };

  return (
    <div className=" overflow-hidden" style={{ willChange: "transform" }}>
      <div className=" text-gray-900 dark:text-gray-100">
        <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 xl:col-span-6 xl:col-start-4 order-1">
            <CenterContent
              activeView={activeView}
              stories={stories}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              posts={posts}
              commentVisible={commentVisible}
              commentText={commentText}
              setCommentText={setCommentText}
              handleCommentSubmit={handleCommentSubmit}
              handleBackToHome={handleBackToHome}
              selectedFriend={selectedFriend}
              messages={messages}
              setMessageText={setMessageText}
              handleSendMessage={handleSendMessage}
              messageText={messageText}
            />
          </div>

          <div className="lg:col-span-5 xl:contents order-2 hidel_slide_roler lg:h-[calc(100vh-80px)]  overflow-y-auto xl:h-max">
            <div className="xl:col-span-3 xl:order-first mb-3">
              <LeftContent
                activeFriends={activeFriends}
                suggestedFriends={suggestedFriends}
                friendRequests={friendRequests}
                handleMessageClick={handleMessageClick}
                handleAcceptRequest={handleAcceptRequest}
                handleRejectRequest={handleRejectRequest}
              />
            </div>

            <div className="xl:col-span-3 xl:order-last">
              <RightContent
                suggestedGroups={suggestedGroups}
                upcomingEvents={upcomingEvents}
                recentActivities={recentActivities}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
