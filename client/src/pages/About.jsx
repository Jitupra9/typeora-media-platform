import React from "react";
import {
  Globe,
  Shield,
  Users,
  Zap,
  Lightbulb,
  MessageSquare,
  Clock,
  Check,
  MapPin,
  BarChart2,
  Award,
} from "lucide-react";

function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
              <Globe className="w-6 h-6" />
            </div>
            <span className="text-sm font-medium bg-white/10 px-3 py-1 rounded-full">
              About Typeora
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Community-powered truth for modern civic engagement
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Empowering communities with verified information and actionable
            tools to shape the world around them
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Mission Section */}
        <section className="mb-16 relative">
          <div className="absolute -left-8 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-blue-300 dark:from-blue-600 dark:to-blue-400 rounded-full hidden md:block"></div>
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 p-8 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/10 rounded-full"></div>
            <div className="absolute -right-5 -bottom-5 w-20 h-20 bg-blue-500/5 rounded-full"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                  <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                Our Mission
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                We aim to empower communities with{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  verified information
                </span>{" "}
                and{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  actionable tools
                </span>{" "}
                that help people shape and respond to the world around them.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Transparency", "Community", "Accuracy", "Action"].map(
                  (value, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 rounded-full text-sm flex items-center gap-1"
                    >
                      <Check className="w-3 h-3" /> {value}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Trust Through Verification",
                text: "Multi-layered validation ensures accuracy before info reaches the public.",
                color: "blue",
              },
              {
                icon: Users,
                title: "Community First",
                text: "Designed for real people to interact, share, and make change locally.",
                color: "purple",
              },
              {
                icon: Zap,
                title: "From Awareness to Action",
                text: "Integrated tools for organizing, contacting officials, and tracking change.",
                color: "green",
              },
              {
                icon: Lightbulb,
                title: "Transparent by Design",
                text: "Every report is traceable with visible sourcing and attribution.",
                color: "orange",
              },
            ].map(({ icon: Icon, title, text, color }, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-xl hover:shadow-md transition-shadow group relative overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-${color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
                ></div>
                <div
                  className={`bg-${color}-100 dark:bg-${color}-900/20 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4`}
                >
                  <Icon
                    className={`text-${color}-600 dark:text-${color}-400 w-5 h-5`}
                  />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-200 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="mb-16 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 p-8">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              {
                label: "Active Users",
                value: "10M+",
                color: "blue",
                icon: Users,
              },
              {
                label: "Countries",
                value: "150+",
                color: "purple",
                icon: MapPin,
              },
              {
                label: "Accuracy Rate",
                value: "94%",
                color: "green",
                icon: Award,
              },
              {
                label: "Languages",
                value: "12",
                color: "orange",
                icon: Globe,
              },
            ].map(({ label, value, color, icon: Icon }, idx) => (
              <div key={idx} className="p-4">
                <div
                  className={`w-16 h-16 mx-auto mb-3 rounded-full bg-${color}-100 dark:bg-${color}-900/20 flex items-center justify-center`}
                >
                  <Icon
                    className={`w-6 h-6 text-${color}-600 dark:text-${color}-400`}
                  />
                </div>
                <div
                  className={`text-3xl font-bold mb-1 text-${color}-600 dark:text-${color}-400`}
                >
                  {value}
                </div>
                <div className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Story - Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Our Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 h-full w-0.5 bg-gray-200 dark:bg-gray-800"></div>

            {/* Timeline items */}
            <div className="space-y-8">
              {[
                {
                  year: "2022",
                  title: "Typeora is Born",
                  description:
                    "Created during a local crisis as a grassroots way for neighbors to share trusted updates in real time.",
                  icon: Clock,
                },
                {
                  year: "2023",
                  title: "Global Expansion",
                  description:
                    "Expanded to 50+ countries with localized content moderation teams in each region.",
                  icon: Globe,
                },
                {
                  year: "Today",
                  title: "Community Platform",
                  description:
                    "Millions of users in 150+ countries use Typeora to create change, while we remain rooted in community-first values.",
                  icon: Users,
                },
              ].map((item, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-blue-500 border-4 border-white dark:border-gray-950 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-blue-600 dark:text-blue-400 font-medium">
                        {item.year}
                      </span>
                      <span className="text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 px-2 py-0.5 rounded-full">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            What People Say About Us
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote:
                  "Typeora transformed how our city responds to emergencies. Real-time verified reports helped direct resources where they were needed most.",
                name: "Jitu Pradhan",
                role: "Founder, India",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                quote:
                  "As a journalist, I rely on Typeora to get accurate community-sourced information faster than traditional news channels.",
                name: "Maria Sanchez",
                role: "Journalist, Mexico",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 p-6"
              >
                <div className="flex gap-4 items-start mb-4">
                  <div className="bg-blue-500/10 p-2 rounded-full mt-1">
                    <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <blockquote className="italic text-gray-700 dark:text-gray-300">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                <div className="flex items-center gap-3 border-t border-gray-100 dark:border-gray-800 pt-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Join Our Community</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-6">
            Be part of the movement that's changing how communities access and
            share verified information.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="px-6 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Sign Up Free
            </button>
            <button className="px-6 py-2 bg-transparent border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
