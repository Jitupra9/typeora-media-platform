import React, { memo } from "react";
import {
  UserPlus,
  Mail,
  Clock,
  Calendar,
  Bookmark,
  FileText,
  Edit,
  BookOpen,
  Eye,
  Heart,
  Briefcase,
  Award,
  Globe,
  MessageSquare,
  BarChart2,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  Globe as GlobeIcon,
} from "lucide-react";

function LeftSideBar() {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div className="lg:col-span-1 space-y-4 order-2 lg:order-none dark:text-gray-300">
      {/* About Author */}
      <div className="lg:col-span-1 space-y-4 order-2 lg:order-none">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-800">
          <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-lg flex items-center gap-2 text-gray-800 dark:text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-blue-500"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              About the Author
            </h3>
          </div>

          <div className="px-5 py-4">
            <div className={expanded ? "" : "max-h-32 overflow-hidden"}>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Digital creator passionate about connecting people through
                technology.
                {expanded && (
                  <>
                    I love sharing moments from my daily life, tech discoveries,
                    and travel adventures. Currently based in San Francisco,
                    originally from Mumbai. When I'm not posting, you'll find me
                    hiking, coding, or exploring new coffee shops.
                  </>
                )}
              </p>

              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                    <Calendar className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">
                      Member Since
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      January 2020
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                    <Bookmark className="w-4 h-4 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">
                      Interests
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      Tech, Travel, Photography
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                    <Globe className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">
                      Location
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      San Francisco, CA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setExpanded(!expanded)}
              className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 mb-4"
            >
              {expanded ? "Show less" : "Show more"}
            </button>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg transition-colors">
                <UserPlus className="w-4 h-4" /> Follow
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 text-sm bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2.5 rounded-lg transition-colors">
                <Mail className="w-4 h-4" /> Message
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-blue-500" />
            Profile Activity
          </h3>
        </div>

        <div className="p-5 space-y-5">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Calendar className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800 dark:text-gray-200">
                Last Active
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                2 hours ago
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <FileText className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800 dark:text-gray-200">
                Recent Posts
              </h4>
              <div className="mt-1 space-y-2">
                <a
                  href="#"
                  className="block text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  How to optimize React performance
                </a>
                <a
                  href="#"
                  className="block text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  State management in 2024
                </a>
              </div>
              <button className="mt-2 text-sm text-green-600 dark:text-green-400 hover:underline">
                View all posts
              </button>
            </div>
          </div>
        </div>

        {/* <div className="px-5 py-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <button className="w-full flex items-center justify-center gap-2 text-sm bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 transition-colors">
            <Edit className="w-4 h-4" />
            View Full Activity
          </button>
        </div> */}
      </div>

      {/* Availability */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4">
        <h3 className="font-semibold text-lg mb-3 text-gray-800 dark:text-gray-200">
          Availability
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-green-100 dark:bg-green-900">
              <Calendar className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <p className="text-sm font-medium">Working Hours</p>
              <p className="text-sm text-gray-500">Mon-Fri, 9AM-5PM</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900">
              <Clock className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm font-medium">Available For</p>
              <p className="text-sm text-gray-500">Freelance, Mentoring</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
            Skills
          </h3>
          <button className="text-sm text-blue-500 hover:text-blue-600">
            See all
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "Node.js",
            "JavaScript",
            "TypeScript",
            "CSS",
            "HTML",
            "Next.js",
            "GraphQL",
            "AWS",
            "Docker",
            "MongoDB",
            "PostgreSQL",
            "Python",
            "Git",
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
      {/* Stats */}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xs border border-gray-100 dark:border-gray-800 p-4">
        <h3 className="font-medium text-base mb-4 text-gray-800 dark:text-gray-200">
          Activity Stats
        </h3>

        <div className="grid grid-cols-2 gap-3">
          <CompactMetric
            icon={<BookOpen className="w-4 h-4" />}
            title="Posts"
            value="243"
            change="+12%"
          />
          <CompactMetric
            icon={<Eye className="w-4 h-4" />}
            title="Views"
            value="1.2M"
            change="+5.4%"
          />
          <CompactMetric
            icon={<Heart className="w-4 h-4" />}
            title="Likes"
            value="45.7K"
            change="-2.1%"
          />
          <CompactMetric
            icon={<MessageSquare className="w-4 h-4" />}
            title="Comments"
            value="12.3K"
            change="+8.3%"
          />
          <CompactMetric
            icon={<BarChart2 className="w-4 h-4" />}
            title="Engagement"
            value="8.2%"
            change="+1.2%"
            accent
          />
        </div>
      </div>
      {/* Social Links */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4">
        <h3 className="font-semibold text-lg mb-3 text-gray-800 dark:text-gray-200">
          Social Links
        </h3>
        <div className="space-y-3">
          <SocialLink
            icon={<Linkedin className="w-5 h-5 text-blue-600" />}
            platform="LinkedIn"
            url="linkedin.com/in/jitu"
          />
          <SocialLink
            icon={<Twitter className="w-5 h-5 text-blue-400" />}
            platform="Twitter"
            url="twitter.com/jitu"
          />
          <SocialLink
            icon={
              <Github className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            }
            platform="GitHub"
            url="github.com/jitu"
          />
          <SocialLink
            icon={<Instagram className="w-5 h-5 text-pink-500" />}
            platform="Instagram"
            url="instagram.com/jitu"
          />
          <SocialLink
            icon={<GlobeIcon className="w-5 h-5 text-gray-500" />}
            platform="Portfolio"
            url="jitu.dev"
          />
        </div>
      </div>
    </div>
  );
}

// Helper Components
function StatItem({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-lg font-bold">{value}</p>
      </div>
    </div>
  );
}

function SocialLink({ icon, platform, url }) {
  return (
    <a
      href={`https://${url}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
        {icon}
      </div>
      <div>
        <p className="font-medium">{platform}</p>
        <p className="text-sm text-gray-500">{url}</p>
      </div>
    </a>
  );
}

export default memo(LeftSideBar);
function CompactMetric({ icon, title, value, change, accent = false }) {
  const changeColor = change.startsWith("+")
    ? "text-green-500"
    : "text-red-500";

  return (
    <div
      className={`p-3 rounded-md border ${
        accent
          ? "border-blue-100 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-900/20"
          : "border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800"
      }`}
    >
      <div className="flex items-center justify-between">
        <div
          className={`p-1.5 rounded-md ${
            accent
              ? "bg-blue-100 dark:bg-blue-800/30"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
        >
          {icon}
        </div>
        <span className={`text-[0.65rem] ${changeColor} font-medium`}>
          {change}
        </span>
      </div>
      <h4 className="text-xs text-gray-600 dark:text-gray-300 mt-1.5 mb-0.5">
        {title}
      </h4>
      <p
        className={`text-sm font-medium ${
          accent
            ? "text-blue-600 dark:text-blue-400"
            : "text-gray-800 dark:text-gray-200"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
