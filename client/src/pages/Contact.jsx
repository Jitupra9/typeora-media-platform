import React from "react";
function Contact() {
  return (
    <div className=" overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 ">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Connect With Us
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
            Typeora is a civic tech platform built to empower communities with
            verified information and action-ready tools. Whether you're a user,
            journalist, developer, or city leader — we'd love to hear from you.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800/80 backdrop-blur-md shadow-xl p-8 rounded-2xl border border-gray-200 dark:border-gray-700 animate-fade-in-up">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 mt-1 rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 mt-1 rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="How can we help or collaborate?"
                className="w-full px-4 py-3 mt-1 rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-12 text-sm text-gray-600 dark:text-gray-400 text-center">
          <p>
            Prefer email? Reach us directly at{" "}
            <a
              href="mailto:support@typeora.org"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              support@typeora.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
