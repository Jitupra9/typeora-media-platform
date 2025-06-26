import React from "react";
import { MessageSquare, TrendingUp, BarChart2, Sparkles } from "lucide-react";
function CommunityStats(props) {
  const totalOpinions = props.totalOpinions;
  const totalEngagement = props.totalEngagement;
  const mostActiveCategory = props.mostActiveCategory;
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <BarChart2 className="h-5 w-5 text-blue-500" />
        Community Stats
      </h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-purple-500" /> Total Opinions
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
            <TrendingUp className="h-4 w-4 text-orange-500" /> Most Active
            Category
          </span>
          <span className="font-medium">{mostActiveCategory}</span>
        </div>
      </div>
    </div>
  );
}

export default CommunityStats;
