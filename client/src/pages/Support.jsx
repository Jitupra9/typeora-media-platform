import React from "react";
import {
  LifeBuoy,
  Server,
  ShieldCheck,
  Users,
  FileText,
  Mail,
  MessageSquare,
  Clock,
  Zap,
  ChevronRight,
  Search,
  AlertCircle,
  CheckCircle,
  Phone,
  BookOpen,
} from "lucide-react";

function Support() {
  const supportTeams = [
    {
      title: "Technical Support",
      description:
        "App not working? Bug in the system? Our engineers are ready to help with technical issues, performance problems, or access errors.",
      icon: <Server className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      contact: "tech@typeora.org",
      responseTime: "Typically replies within 1 hour",
    },
    {
      title: "Content Moderation",
      description:
        "Report misinformation, abusive content, or community violations. Our moderation team ensures a safe space for all users.",
      icon: <ShieldCheck className="w-5 h-5 text-red-600 dark:text-red-400" />,
      contact: "moderation@typeora.org",
      responseTime: "Typically replies within 24 hours",
    },
    {
      title: "Billing & Subscriptions",
      description:
        "Questions about payments, refunds, or subscription plans? Our billing specialists can help with your account.",
      icon: (
        <FileText className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
      ),
      contact: "billing@typeora.org",
      responseTime: "Typically replies within 2 hours",
    },
    {
      title: "Community Relations",
      description:
        "Want to host events, collaborate, or build local networks? Get in touch with our community engagement team.",
      icon: <Users className="w-5 h-5 text-green-600 dark:text-green-400" />,
      contact: "community@typeora.org",
      responseTime: "Typically replies within 12 hours",
    },
    {
      title: "General Inquiries",
      description:
        "Not sure where to start? Reach out and we'll direct your request to the right team.",
      icon: <LifeBuoy className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      contact: "support@typeora.org",
      responseTime: "Typically replies within 4 hours",
    },
  ];

  const faqs = [
    {
      question: "How do I reset my password?",
      answer:
        "Go to Settings > Account > Change Password and follow the prompts.",
    },
    {
      question: "What's your refund policy?",
      answer:
        "We offer 30-day refunds for all subscriptions. Contact billing@typeora.org.",
    },
    {
      question: "How do I report inappropriate content?",
      answer:
        "Use the 'Report' button on any post or email moderation@typeora.org.",
    },
  ];

  const resources = [
    {
      title: "Help Center",
      description: "Browse our comprehensive knowledge base",
      icon: <BookOpen className="w-5 h-5" />,
      link: "#",
    },
    {
      title: "Community Forum",
      description: "Get help from other users",
      icon: <Users className="w-5 h-5" />,
      link: "#",
    },
    {
      title: "System Status",
      description: "Check for ongoing incidents",
      icon: <CheckCircle className="w-5 h-5" />,
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen ">
      <div className="bg-gradient-to-b from-blue-400 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-white py-20 px-6 rounded-xl">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1 rounded-full mb-4">
            <LifeBuoy className="w-5 h-5" />
            <span className="text-sm font-medium">Support Center</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How can we help?
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get answers to your questions or contact our support teams directly.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-2xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-4 border border-transparent rounded-lg bg-white/20 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              placeholder="Search help articles..."
            />
            <button className="absolute right-2 top-2 px-4 py-1.5 bg-white text-blue-600 rounded-md font-medium">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Support Teams Grid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Contact Our Teams
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Reach out to the specialized team that can best address your
              concern.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportTeams.map((team, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-opacity-20 bg-indigo-100 dark:bg-indigo-900/30">
                    {team.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                      {team.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {team.description}
                    </p>
                    <div className="flex flex-col gap-2">
                      <a
                        href={`mailto:${team.contact}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
                      >
                        <Mail className="w-4 h-4" /> {team.contact}
                      </a>
                      <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {team.responseTime}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency Contact Banner */}
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400 p-4 mb-12 rounded-r-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 dark:text-red-400 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-red-800 dark:text-red-200">
              Urgent Security Issue?
            </h3>
            <p className="text-red-700 dark:text-red-300 text-sm mt-1">
              For immediate assistance with account security issues, call our
              24/7 support line:{" "}
              <a
                href="tel:+18005551234"
                className="font-semibold hover:underline"
              >
                +1 (800) 555-1234
              </a>
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Quick answers to common questions
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`p-6 ${
                  index !== faqs.length - 1
                    ? "border-b border-gray-200 dark:border-gray-800"
                    : ""
                }`}
              >
                <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
            <div className="p-4 bg-gray-50 dark:bg-gray-800 text-center">
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400 inline-flex items-center"
              >
                View all FAQs <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Helpful Resources
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Explore our self-help options
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                    {resource.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {resource.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Card */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Still need help?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Can't find what you're looking for? Our team is ready to assist
                you with any questions or issues you may have.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Email us at
                    </div>
                    <a
                      href="mailto:support@typeora.org"
                      className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                    >
                      support@typeora.org
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Call us at
                    </div>
                    <a
                      href="tel:+18005551234"
                      className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                    >
                      +1 (800) 555-1234
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 md:p-12 flex items-center justify-center">
              <div className="text-center">
                <MessageSquare className="w-10 h-10 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Live Chat Support
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Available Monday-Friday, 9am-5pm EST
                </p>
                <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
