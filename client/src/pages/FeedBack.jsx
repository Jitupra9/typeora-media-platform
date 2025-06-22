import React, { useState, useRef } from "react";
import {
  MessageSquare,
  Star,
  Smile,
  Frown,
  Meh,
  ThumbsUp,
  Image,
  Clock,
  Check,
  X,
  ChevronDown,
  Zap,
  Award,
  TrendingUp,
  PieChart,
  UserCheck,
  Layout,
  Palette,
  ZapOff,
  Loader,
  Bug,
  Gift,
  AlertCircle,
  Paperclip,
  ChevronRight,
  Send,
} from "lucide-react";

function Feedback() {
  const [activeTab, setActiveTab] = useState("new");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showTips, setShowTips] = useState(true);
  const [feedbackType, setFeedbackType] = useState("general");
  const [priority, setPriority] = useState("medium");
  const [wantsFollowUp, setWantsFollowUp] = useState(false);
  const [attachments, setAttachments] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const [showFeedbackPrompt, setShowFeedbackPrompt] = useState(false);
  const [feedbackPrompt, setFeedbackPrompt] = useState("");

  const [feedbackHistory, setFeedbackHistory] = useState([
    {
      id: 1,
      rating: 5,
      date: "2023-06-15",
      feedback:
        "The new dashboard layout is amazing! Much easier to navigate now.",
      status: "Reviewed",
      response: "Thanks! We worked hard on the redesign.",
      type: "general",
      priority: "low",
      attachments: [],
    },
    {
      id: 2,
      rating: 3,
      date: "2023-06-10",
      feedback: "The loading times seem slower after the last update.",
      status: "In Progress",
      response: "We're investigating performance issues.",
      type: "bug",
      priority: "high",
      attachments: [],
    },
    {
      id: 3,
      rating: 4,
      date: "2023-06-05",
      feedback: "Love the dark mode option but can we get more color themes?",
      status: "Planned",
      response: "Additional themes coming in v2.3!",
      type: "feature",
      priority: "medium",
      attachments: [],
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 && feedbackType !== "bug") {
      alert("Please provide a rating");
      return;
    }

    const newFeedback = {
      id: feedbackHistory.length + 1,
      rating,
      date: new Date().toISOString().split("T")[0],
      feedback,
      status: "New",
      response: "",
      type: feedbackType,
      priority,
      wantsFollowUp,
      attachments,
    };

    setFeedbackHistory([newFeedback, ...feedbackHistory]);
    setSubmitted(true);
    setRating(0);
    setFeedback("");
    setAttachments([]);
  };

  const renderStars = () => {
    return [1, 2, 3, 4, 5].map((star) => (
      <button
        key={star}
        type="button"
        onClick={() => setRating(star)}
        onMouseEnter={() => setHoverRating(star)}
        onMouseLeave={() => setHoverRating(0)}
        className="focus:outline-none transition-transform hover:scale-110"
      >
        <Star
          className={`w-8 h-8 ${
            (hoverRating || rating) >= star
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300 dark:text-gray-600"
          }`}
        />
      </button>
    ));
  };

  const getSentimentIcon = (rating) => {
    if (rating >= 4) return <Smile className="w-5 h-5 text-green-500" />;
    if (rating === 3) return <Meh className="w-5 h-5 text-yellow-500" />;
    return <Frown className="w-5 h-5 text-red-500" />;
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + attachments.length > 3) {
      alert("You can upload a maximum of 3 files");
      return;
    }
    setAttachments([...attachments, ...files]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length + attachments.length > 3) {
      alert("You can upload a maximum of 3 files");
      return;
    }
    setAttachments([...attachments, ...files]);
  };

  const removeAttachment = (index) => {
    const newAttachments = [...attachments];
    newAttachments.splice(index, 1);
    setAttachments(newAttachments);
  };

  const triggerFeedbackPrompt = (prompt) => {
    setShowFeedbackPrompt(true);
    setFeedbackPrompt(prompt);
  };

  const applyFeedbackPrompt = () => {
    setFeedback(feedback + "\n\n" + feedbackPrompt);
    setShowFeedbackPrompt(false);
  };

  return (
    <div className="min-h-screen p-4 text-black dark:text-gray-200 ">
      <div className=" mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-6">
              <div className="border-b border-gray-200 dark:border-gray-700 flex">
                <button
                  onClick={() => setActiveTab("new")}
                  className={`flex-1 py-4 font-medium flex items-center justify-center gap-2 ${
                    activeTab === "new"
                      ? "border-b-2 border-blue-500 text-blue-500"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  <MessageSquare className="w-5 h-5" /> New Feedback
                </button>
                <button
                  onClick={() => setActiveTab("history")}
                  className={`flex-1 py-4 font-medium flex items-center justify-center gap-2 ${
                    activeTab === "history"
                      ? "border-b-2 border-blue-500 text-blue-500"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  <Clock className="w-5 h-5" /> Your History
                </button>
              </div>

              {activeTab === "new" ? (
                <div className="p-6">
                  {!submitted ? (
                    <>
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                          <MessageSquare className="w-6 h-6 text-blue-500" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold mb-1">
                            Share Your Feedback
                          </h2>
                          <p className="text-gray-600 dark:text-gray-300">
                            We value your input to help improve our service
                          </p>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit}>
                        {/* Feedback Type Selection */}
                        <div className="mb-6">
                          <label className="block text-sm font-medium mb-2">
                            What type of feedback are you providing?
                          </label>
                          <div className="grid grid-cols-3 gap-2">
                            <button
                              type="button"
                              onClick={() => setFeedbackType("general")}
                              className={`p-3 rounded-lg border flex flex-col items-center ${
                                feedbackType === "general"
                                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                  : "border-gray-200 dark:border-gray-700"
                              }`}
                            >
                              <MessageSquare className="w-5 h-5 mb-1 text-blue-500" />
                              <span>General</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => setFeedbackType("bug")}
                              className={`p-3 rounded-lg border flex flex-col items-center ${
                                feedbackType === "bug"
                                  ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                                  : "border-gray-200 dark:border-gray-700"
                              }`}
                            >
                              <Bug className="w-5 h-5 mb-1 text-red-500" />
                              <span>Bug Report</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => setFeedbackType("feature")}
                              className={`p-3 rounded-lg border flex flex-col items-center ${
                                feedbackType === "feature"
                                  ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
                                  : "border-gray-200 dark:border-gray-700"
                              }`}
                            >
                              <Gift className="w-5 h-5 mb-1 text-purple-500" />
                              <span>Feature Request</span>
                            </button>
                          </div>
                        </div>

                        {feedbackType !== "bug" && (
                          <div className="mb-5">
                            <label className="block text-sm font-medium mb-2">
                              How would you rate your experience?
                            </label>
                            <div className=" flex items-center gap-3 my-3">
                              <div className="flex  flex-col sm:flex-row justify-center gap-1">
                                {renderStars()}
                              </div>
                              <p className="text-center text-gray-500 dark:text-gray-400">
                                {rating === 0
                                  ? "Select your rating"
                                  : rating <= 2
                                  ? "We apologize for your poor experience"
                                  : rating <= 4
                                  ? "Thanks for your feedback"
                                  : "We're thrilled you loved it!"}
                              </p>
                            </div>
                          </div>
                        )}

                        {(feedbackType === "bug" ||
                          feedbackType === "feature") && (
                          <div className="mb-6">
                            <label className="block text-sm font-medium mb-2">
                              Priority Level
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                              <button
                                type="button"
                                onClick={() => setPriority("low")}
                                className={`p-2 rounded-lg border ${
                                  priority === "low"
                                    ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                                    : "border-gray-200 dark:border-gray-700"
                                }`}
                              >
                                Low
                              </button>
                              <button
                                type="button"
                                onClick={() => setPriority("medium")}
                                className={`p-2 rounded-lg border ${
                                  priority === "medium"
                                    ? "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20"
                                    : "border-gray-200 dark:border-gray-700"
                                }`}
                              >
                                Medium
                              </button>
                              <button
                                type="button"
                                onClick={() => setPriority("high")}
                                className={`p-2 rounded-lg border ${
                                  priority === "high"
                                    ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                                    : "border-gray-200 dark:border-gray-700"
                                }`}
                              >
                                High
                              </button>
                            </div>
                          </div>
                        )}

                        <div className="mb-6">
                          <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-medium">
                              Your Feedback
                            </label>
                            {feedbackType === "bug" && (
                              <button
                                type="button"
                                onClick={() =>
                                  triggerFeedbackPrompt(
                                    "Steps to reproduce:\n1. \n2. \n3. \n\nExpected behavior:\n\nActual behavior:"
                                  )
                                }
                                className="text-xs text-blue-500 hover:underline flex items-center"
                              >
                                <AlertCircle className="w-3 h-3 mr-1" />
                                Add bug report template
                              </button>
                            )}
                            {feedbackType === "feature" && (
                              <button
                                type="button"
                                onClick={() =>
                                  triggerFeedbackPrompt(
                                    "Problem statement:\n\nProposed solution:\n\nBenefits:"
                                  )
                                }
                                className="text-xs text-blue-500 hover:underline flex items-center"
                              >
                                <AlertCircle className="w-3 h-3 mr-1" />
                                Add feature template
                              </button>
                            )}
                          </div>
                          <textarea
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            rows="6"
                            placeholder={
                              feedbackType === "general"
                                ? "I really liked... but it would be better if..."
                                : feedbackType === "bug"
                                ? "Describe the issue you encountered..."
                                : "Describe the feature you'd like to see..."
                            }
                            required
                          />
                        </div>

                        {/* Feedback Prompt Modal */}
                        {showFeedbackPrompt && (
                          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
                              <h3 className="text-lg font-bold mb-4">
                                Apply Feedback Template
                              </h3>
                              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded mb-4">
                                <pre className="whitespace-pre-wrap text-sm">
                                  {feedbackPrompt}
                                </pre>
                              </div>
                              <div className="flex justify-end gap-2">
                                <button
                                  onClick={() => setShowFeedbackPrompt(false)}
                                  className="px-4 py-2 border rounded-lg"
                                >
                                  Cancel
                                </button>
                                <button
                                  onClick={applyFeedbackPrompt}
                                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                                >
                                  Apply Template
                                </button>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Attachments */}
                        <div className="mb-6">
                          <label className="block text-sm font-medium mb-2">
                            Attachments (optional)
                          </label>
                          <div
                            className={`border-2 border-dashed rounded-lg p-6 text-center ${
                              isDragging
                                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/10"
                                : "border-gray-300 dark:border-gray-600"
                            }`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                          >
                            <div className="flex flex-col items-center justify-center">
                              <Paperclip className="w-8 h-8 text-gray-400 mb-2" />
                              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                Drag & drop files here or
                              </p>
                              <button
                                type="button"
                                onClick={() => fileInputRef.current.click()}
                                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium"
                              >
                                Browse Files
                              </button>
                              <p className="text-xs text-gray-400 mt-2">
                                Max 3 files (PNG, JPG, PDF up to 5MB each)
                              </p>
                              <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                className="hidden"
                                multiple
                                accept="image/*,.pdf"
                              />
                            </div>
                          </div>

                          {/* Attachments Preview */}
                          {attachments.length > 0 && (
                            <div className="mt-3">
                              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                                Files to attach:
                              </div>
                              <div className="space-y-2">
                                {attachments.map((file, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
                                  >
                                    <div className="flex items-center gap-2">
                                      <Paperclip className="w-4 h-4 text-gray-400" />
                                      <span className="text-sm truncate max-w-xs">
                                        {file.name}
                                      </span>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() => removeAttachment(index)}
                                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                    >
                                      <X className="w-4 h-4" />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Email and Follow-up */}
                        <div className="mb-6">
                          <label className="block text-sm font-medium mb-2">
                            Email (Optional - for follow up)
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="your@email.com"
                          />
                          <div className="mt-2 flex items-center">
                            <input
                              type="checkbox"
                              id="follow-up"
                              checked={wantsFollowUp}
                              onChange={(e) =>
                                setWantsFollowUp(e.target.checked)
                              }
                              className="mr-2"
                            />
                            <label htmlFor="follow-up" className="text-sm">
                              I'd like to receive updates about this feedback
                            </label>
                          </div>
                        </div>

                        {/* Submit Section */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                          <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                            <Check className="w-4 h-4" />
                            <span>
                              Your feedback helps {window.location.hostname}{" "}
                              improve
                            </span>
                          </div>
                          <button
                            type="submit"
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 transition-colors shadow-lg hover:shadow-blue-500/20"
                          >
                            <Send className="w-4 h-4" />
                            Submit Feedback
                          </button>
                        </div>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <div className="mx-auto w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                        <Check className="w-10 h-10 text-green-500" />
                      </div>
                      <h2 className="text-2xl font-bold mb-3">Thank You!</h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
                        We appreciate your time and will use your feedback to
                        improve our service.{" "}
                        {wantsFollowUp && "We'll follow up with you soon."}
                      </p>
                      <div className="flex justify-center gap-4">
                        <button
                          onClick={() => setSubmitted(false)}
                          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                        >
                          Submit Another
                        </button>
                        <button
                          onClick={() => setActiveTab("history")}
                          className="px-6 py-2 border rounded-lg flex items-center gap-2"
                        >
                          View History <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-6">
                    Your Feedback History
                  </h2>
                  {feedbackHistory.length > 0 ? (
                    <div className="space-y-4">
                      {feedbackHistory.map((item) => (
                        <div
                          key={item.id}
                          className="border rounded-lg p-4 hover:shadow-sm transition-shadow"
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                              {getSentimentIcon(item.rating)}
                              <div>
                                <div className="font-medium flex items-center gap-2">
                                  {item.rating} Star Feedback
                                  <span
                                    className={`text-xs px-2 py-1 rounded-full ${
                                      item.status === "Reviewed"
                                        ? "bg-green-100 text-green-800 dark:bg-green-900/30"
                                        : item.status === "In Progress"
                                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30"
                                        : item.status === "Planned"
                                        ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30"
                                        : "bg-gray-100 text-gray-800 dark:bg-gray-700"
                                    }`}
                                  >
                                    {item.status}
                                  </span>
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  {item.date}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < item.rating
                                      ? "text-yellow-400 fill-yellow-400"
                                      : "text-gray-300 dark:text-gray-600"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="mt-3">
                            <p className="text-gray-700 dark:text-gray-300">
                              {item.feedback}
                            </p>
                          </div>
                          {item.response && (
                            <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                              <div className="text-sm font-medium flex items-center gap-2 text-blue-600 dark:text-blue-400">
                                <UserCheck className="w-4 h-4" /> Team Response:
                              </div>
                              <p className="text-gray-700 dark:text-gray-300 mt-1">
                                {item.response}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                      You haven't submitted any feedback yet.
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Website Status */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />{" "}
                {window.location.hostname} Status
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="border rounded-lg p-3 text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Uptime
                  </div>
                  <div className="text-2xl font-bold">99.98%</div>
                  <div className="text-xs text-green-500 flex items-center justify-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +0.1% from last month
                  </div>
                </div>
                <div className="border rounded-lg p-3 text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Response Time
                  </div>
                  <div className="text-2xl font-bold">142ms</div>
                  <div className="text-xs text-green-500 flex items-center justify-center gap-1">
                    <TrendingUp className="w-3 h-3" /> 18% faster
                  </div>
                </div>
                <div className="border rounded-lg p-3 text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Active Users
                  </div>
                  <div className="text-2xl font-bold">24.5K</div>
                  <div className="text-xs text-green-500 flex items-center justify-center gap-1">
                    <TrendingUp className="w-3 h-3" /> 1.2K today
                  </div>
                </div>
                <div className="border rounded-lg p-3 text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Feedback
                  </div>
                  <div className="text-2xl font-bold">89%</div>
                  <div className="text-xs text-green-500 flex items-center justify-center gap-1">
                    <TrendingUp className="w-3 h-3" /> Positive
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:w-80 space-y-6">
            {/* Quick Tips */}
            {showTips && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" /> Quick Tips
                  </h3>
                  <button
                    onClick={() => setShowTips(false)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="mt-0.5">
                      <Layout className="w-4 h-4 text-blue-500" />
                    </div>
                    <div>
                      <div className="font-medium">Navigation</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Use the sidebar for quick access to all sections
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-0.5">
                      <Palette className="w-4 h-4 text-purple-500" />
                    </div>
                    <div>
                      <div className="font-medium">Dark Mode</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Toggle in your account settings
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-0.5">
                      <ZapOff className="w-4 h-4 text-red-500" />
                    </div>
                    <div>
                      <div className="font-medium">Issues?</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Report technical problems in the feedback form
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            )}

            {/* Recent Updates */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-blue-500" /> Recent
                Improvements
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-0.5">
                    <Check className="w-3 h-3 text-green-500" />
                  </div>
                  <div>
                    <div className="font-medium">New Dashboard</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Based on your feedback from June
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full mt-0.5">
                    <Loader className="w-3 h-3 text-blue-500 animate-spin" />
                  </div>
                  <div>
                    <div className="font-medium">Performance Boost</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Optimizations in progress
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-1 rounded-full mt-0.5">
                    <Award className="w-3 h-3 text-purple-500" />
                  </div>
                  <div>
                    <div className="font-medium">Premium Features</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Coming next month
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feedback Impact */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md p-6 text-white">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <ThumbsUp className="w-5 h-5" /> Your Feedback Matters
              </h3>
              <p className="text-sm mb-4">
                83% of recent improvements were based on user feedback like
                yours.
              </p>
              <div className="h-2 bg-white/30 rounded-full mb-2">
                <div className="h-2 bg-yellow-300 rounded-full w-5/6"></div>
              </div>
              <div className="flex justify-between text-xs">
                <span>Last 30 days</span>
                <span>83% implemented</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
