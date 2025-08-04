// import { memo, useState } from "react";
// import {
//   Dot,
//   Heart,
//   MessageSquare,
//   MoreHorizontal,
//   Image as ImageIcon,
//   Share2,
//   Bookmark,
//   Check,
//   BookOpen,
//   Video,
//   MessageCircle,
// } from "lucide-react";

// function ContentCard({
//   item,
//   type,
//   isExpanded,
//   onExpand,
//   onViewFull,
//   isSelected,
//   onSelect,
// }) {
//   const [isLiked, setIsLiked] = useState(false);
//   const [isBookmarked, setIsBookmarked] = useState(false);
//   const [showActions, setShowActions] = useState(false);

//   const handleLike = () => {
//     setIsLiked(!isLiked);
//   };

//   const handleBookmark = () => {
//     setIsBookmarked(!isBookmarked);
//   };

//   const handleShare = () => {
//     // Implement share functionality
//     console.log("Sharing post:", item.id);
//     setShowActions(false);
//   };

//   const getTypeIcon = () => {
//     switch (type) {
//       case "articles":
//         return <BookOpen className="w-4 h-4 text-blue-500" />;
//       case "videos":
//         return <Video className="w-4 h-4 text-red-500" />;
//       case "opinions":
//         return <MessageCircle className="w-4 h-4 text-purple-500" />;
//       default:
//         return <BookOpen className="w-4 h-4" />;
//     }
//   };

//   return (
//     <div
//       className={`bg-white dark:bg-gray-900 rounded-xl shadow overflow-hidden hover:shadow-lg transition-all ${
//         isSelected ? "ring-2 ring-blue-500 dark:ring-blue-600" : ""
//       }`}
//     >
//       {/* Card Header */}
//       <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
//         <div className="flex items-center gap-3">
//           <div
//             className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors ${
//               isSelected
//                 ? "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300"
//                 : "bg-gray-200 dark:bg-gray-700 text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600"
//             }`}
//             onClick={() => onSelect(item.id)}
//           >
//             {isSelected ? (
//               <Check className="w-5 h-5" />
//             ) : (
//               <span className="text-sm font-bold">JP</span>
//             )}
//           </div>
//           <div>
//             <div className="flex items-center gap-2">
//               <h4 className="font-medium text-gray-800 dark:text-gray-200">
//                 Jitu Pradhan
//               </h4>
//               <span className="text-xs px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
//                 {getTypeIcon()}
//               </span>
//             </div>
//             <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
//               <span>{item.date}</span>
//               <Dot />
//               <span>{item.views}</span>
//             </div>
//           </div>
//         </div>
//         <div className="flex items-center gap-2">
//           <button
//             className={`p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
//               isBookmarked
//                 ? "text-blue-500"
//                 : "text-gray-400 dark:text-gray-500"
//             }`}
//             onClick={handleBookmark}
//             aria-label={isBookmarked ? "Remove bookmark" : "Bookmark"}
//           >
//             <Bookmark
//               className="w-5 h-5"
//               fill={isBookmarked ? "currentColor" : "none"}
//             />
//           </button>

//           <div className="relative">
//             <button
//               className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 dark:text-gray-500 transition-colors"
//               onClick={() => setShowActions(!showActions)}
//               aria-label="More actions"
//             >
//               <MoreHorizontal className="w-5 h-5" />
//             </button>

//             {showActions && (
//               <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10 overflow-hidden">
//                 <button
//                   className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
//                   onClick={handleShare}
//                 >
//                   <Share2 className="w-4 h-4" />
//                   Share
//                 </button>
//                 <button
//                   className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
//                   onClick={() => {
//                     navigator.clipboard.writeText(window.location.href);
//                     setShowActions(false);
//                   }}
//                 >
//                   <span className="w-4 h-4">🔗</span>
//                   Copy Link
//                 </button>
//                 <button
//                   className="w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
//                   onClick={() => {
//                     console.log("Reporting post:", item.id);
//                     setShowActions(false);
//                   }}
//                 >
//                   <span className="w-4 h-4">⚠️</span>
//                   Report
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Card Content */}
//       <div className="p-4">
//         {(type === "articles" || type === "videos") && (
//           <div className="mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-video flex items-center justify-center text-gray-400">
//             <ImageIcon className="w-12 h-12" />
//           </div>
//         )}

//         <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
//           {item.title}
//         </h3>

//         {isExpanded ? (
//           <div className="text-gray-600 dark:text-gray-300 mb-4">
//             <p>
//               {item.fullContent ||
//                 "This is the full content of the post. It would include detailed information, images, and other rich content in a real application."}
//             </p>
//           </div>
//         ) : (
//           <p className="text-gray-600 dark:text-gray-300 mb-4">
//             {item.excerpt}
//           </p>
//         )}

//         {type === "articles" && (
//           <div className="flex flex-wrap gap-2 mb-4">
//             {item.tags?.map((tag, index) => (
//               <span
//                 key={index}
//                 className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Card Footer */}
//       <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
//         <div className="flex gap-4">
//           <button
//             className={`flex items-center gap-1 ${
//               isLiked ? "text-red-500" : "text-gray-500 dark:text-gray-400"
//             } hover:text-red-500 transition-colors`}
//             onClick={handleLike}
//             aria-label={isLiked ? "Unlike" : "Like"}
//           >
//             <Heart
//               className="w-5 h-5"
//               fill={isLiked ? "currentColor" : "none"}
//             />
//             <span>{isLiked ? item.likes + 1 : item.likes}</span>
//           </button>
//           <button
//             className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors"
//             aria-label="Comments"
//           >
//             <MessageSquare className="w-5 h-5" />
//             <span>{item.comments}</span>
//           </button>
//         </div>

//         <div className="flex gap-2">
//           <button
//             className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//             onClick={() => onExpand(item.id)}
//           >
//             {isExpanded ? "Show Less" : "Show More"}
//           </button>

//           {isExpanded && (
//             <button
//               className="flex items-center gap-1 text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg transition-colors"
//               onClick={() => onViewFull(item.id)}
//             >
//               View Full Post
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default memo(ContentCard);
