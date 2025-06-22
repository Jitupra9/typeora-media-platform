import React, { useState, useContext, useMemo, useEffect } from "react";
import { Headers } from "../context/utils/Headercontext";

import {
  AlertTriangle,
  Flag,
  Mail,
  MessageSquare,
  User,
  Clock,
  HelpCircle,
  Check,
  Users,
  X,
  Shield,
  FileText,
  Link,
  Star,
  Zap,
  ChevronDown,
} from "lucide-react";

function Report() {
  const [reportType, setReportType] = useState("content");
  const [message, setMessage] = useState("");
  const [department, setDepartment] = useState("support");
  const { setheaders } = useContext(Headers);

  const categories = useMemo(() => [], []);
  useEffect(() => {
    setheaders(categories);
  }, [setheaders, categories]);
  const [reports, setReports] = useState([
    {
      id: 1,
      type: "Content",
      status: "Resolved",
      date: "2023-06-15",
      message: "Inappropriate image in community post",
      response: "Thank you, we have removed the content.",
      priority: "High",
      attachments: ["image.jpg"],
    },
    {
      id: 2,
      type: "Technical",
      status: "In Progress",
      date: "2023-06-20",
      message: "Video playback not working on Android",
      response: "Our team is investigating this issue.",
      priority: "Urgent",
      attachments: [],
    },
    {
      id: 3,
      type: "Behavior",
      status: "Pending",
      date: "2023-06-22",
      message: "User harassment in comments",
      response: "",
      priority: "Medium",
      attachments: ["screenshot.png"],
    },
  ]);
  const [attachment, setAttachment] = useState(null);
  const [priority, setPriority] = useState("medium");
  const [expandedReport, setExpandedReport] = useState(null);

  const handleSubmitReport = (e) => {
    e.preventDefault();
    const newReport = {
      id: reports.length + 1,
      type: reportType.charAt(0).toUpperCase() + reportType.slice(1),
      status: "Pending",
      date: new Date().toISOString().split("T")[0],
      message: message,
      response: "",
      priority: priority.charAt(0).toUpperCase() + priority.slice(1),
      attachments: attachment ? [attachment.name] : [],
    };
    setReports([...reports, newReport]);
    setMessage("");
    setAttachment(null);
    alert("Your report has been submitted successfully.");
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    alert(`Your message to ${department} department has been sent.`);
    setMessage("");
  };

  const handleAttachmentChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setAttachment(e.target.files[0]);
    }
  };

  const toggleExpandReport = (id) => {
    setExpandedReport(expandedReport === id ? null : id);
  };

  return (
    <div className="min-h-screen text-black dark:text-gray-300 ">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Flag className="w-8 h-8 text-red-500" /> Report Center
          </h1>
          <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full">
            <Shield className="w-5 h-5" />
            <span className="font-medium">Protected by SafeReport™</span>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Report Issue Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Report Form */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" /> Submit New
                Report
              </h2>
              <form onSubmit={handleSubmitReport}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Report Type
                    </label>
                    <select
                      value={reportType}
                      onChange={(e) => setReportType(e.target.value)}
                      className="w-full p-2 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600"
                    >
                      <option value="content">Inappropriate Content</option>
                      <option value="behavior">User Behavior</option>
                      <option value="technical">Technical Issue</option>
                      <option value="copyright">Copyright Concern</option>
                      <option value="safety">Safety Concern</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Priority
                    </label>
                    <select
                      value={priority}
                      onChange={(e) => setPriority(e.target.value)}
                      className="w-full p-2 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Details
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600"
                    rows="5"
                    placeholder="Please provide as much detail as possible..."
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Attachments (Optional)
                  </label>
                  <div className="flex items-center gap-3">
                    <label className="cursor-pointer px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleAttachmentChange}
                      />
                      <span className="flex items-center gap-2">
                        <FileText className="w-4 h-4" /> Add File
                      </span>
                    </label>
                    {attachment && (
                      <div className="flex items-center gap-2 text-sm">
                        <span className="truncate max-w-xs">
                          {attachment.name}
                        </span>
                        <button
                          type="button"
                          onClick={() => setAttachment(null)}
                          className="text-red-500"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    You can attach screenshots, documents, or other evidence
                    (max 5MB)
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <Check className="w-4 h-4" />
                    <span>All reports are confidential</span>
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg flex items-center gap-2"
                  >
                    <Flag className="w-4 h-4" /> Submit Report
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Support */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-500" /> Direct Support
                Message
              </h2>
              <form onSubmit={handleSendMessage}>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Department
                  </label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full p-2 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600"
                  >
                    <option value="support">General Support</option>
                    <option value="technical">Technical Support</option>
                    <option value="content">Content Moderation</option>
                    <option value="legal">Legal Department</option>
                    <option value="trust">Trust & Safety</option>
                    <option value="feedback">Product Feedback</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600"
                    rows="5"
                    placeholder="How can we help you today?"
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" /> Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Report History */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-500" /> Report History
              </h2>
              <div className="space-y-3">
                {reports.length > 0 ? (
                  reports.map((report) => (
                    <div
                      key={report.id}
                      className={`border rounded-lg p-3 cursor-pointer transition-all ${
                        expandedReport === report.id
                          ? "border-blue-300 dark:border-blue-700 bg-blue-50/30 dark:bg-blue-900/20"
                          : "hover:bg-gray-50 dark:hover:bg-gray-700"
                      }`}
                      onClick={() => toggleExpandReport(report.id)}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              report.status === "Resolved"
                                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                : report.status === "In Progress"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                            }`}
                          >
                            {report.status}
                          </span>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              report.priority === "Urgent"
                                ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                                : report.priority === "High"
                                ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
                                : report.priority === "Medium"
                                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                                : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                            }`}
                          >
                            {report.priority}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {report.date}
                        </div>
                      </div>
                      <div className="mt-2 font-medium flex items-center justify-between">
                        <span>{report.type} Report</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            expandedReport === report.id ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      {expandedReport === report.id && (
                        <div className="mt-3 pt-3 border-t">
                          <div className="text-sm mb-2">
                            <span className="font-medium">Your report:</span>{" "}
                            {report.message}
                          </div>
                          {report.attachments.length > 0 && (
                            <div className="flex items-center gap-2 text-sm text-blue-500 dark:text-blue-400 mb-2">
                              <FileText className="w-4 h-4" />
                              <span>
                                Contains {report.attachments.length}{" "}
                                attachment(s)
                              </span>
                            </div>
                          )}
                          {report.response && (
                            <div className="mt-2 p-2 bg-gray-50 dark:bg-gray-700 rounded text-sm">
                              <div className="font-medium flex items-center gap-2">
                                <User className="w-4 h-4" /> Response:
                              </div>
                              <p>{report.response}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4 text-gray-500 dark:text-gray-400">
                    No reports submitted yet
                  </div>
                )}
              </div>
            </div>

            {/* Quick Support Resources */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-green-500" /> Quick Help
              </h2>
              <div className="space-y-3">
                <a
                  href="/help/urgent"
                  className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                >
                  <Zap className="w-5 h-5 text-red-500" />
                  <div>
                    <div className="font-medium">Urgent Help</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Immediate assistance
                    </div>
                  </div>
                </a>
                <a
                  href="/help/faq"
                  className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <FileText className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="font-medium">FAQ Center</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Common questions answered
                    </div>
                  </div>
                </a>
                <a
                  href="/help/community"
                  className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                >
                  <Users className="w-5 h-5 text-purple-500" />
                  <div>
                    <div className="font-medium">Community Help</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Get help from other users
                    </div>
                  </div>
                </a>
                <a
                  href="/help/contact"
                  className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <Link className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <div>
                    <div className="font-medium">Other Contact Methods</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Email, phone, social media
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Premium Support */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <Star className="w-6 h-6 text-yellow-300" />
                <h2 className="text-xl font-semibold">Premium Support</h2>
              </div>
              <p className="text-sm mb-4">
                Upgrade for priority handling of your reports and direct access
                to our support team.
              </p>
              <ul className="text-sm space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" /> 24/7 Priority Support
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" /> Faster Response Times
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4" /> Dedicated Support Agent
                </li>
              </ul>
              <button className="w-full py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
