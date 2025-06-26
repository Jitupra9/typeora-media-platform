import React, { useState } from "react";
import { MessageSquare } from "lucide-react";
function NewOpinionForm(props) {
  const [newOpinion, setNewOpinion] = useState({
    title: "",
    content: "",
    tags: "",
  });
  const setShowForm = props.setShowForm;
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewOpinion({ title: "", content: "", tags: "" });
    setShowForm(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-8 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
        <MessageSquare className="text-blue-500" />
        Share Your Perspective
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Opinion Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            placeholder="What's your opinion about?"
            value={newOpinion.title}
            onChange={(e) =>
              setNewOpinion({ ...newOpinion, title: e.target.value })
            }
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Your Detailed Opinion
          </label>
          <textarea
            id="content"
            rows={5}
            className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            placeholder="Express your thoughts in detail..."
            value={newOpinion.content}
            onChange={(e) =>
              setNewOpinion({
                ...newOpinion,
                content: e.target.value,
              })
            }
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="tags"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Tags (comma separated)
          </label>
          <input
            type="text"
            id="tags"
            className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            placeholder="technology, environment, politics"
            value={newOpinion.tags}
            onChange={(e) =>
              setNewOpinion({ ...newOpinion, tags: e.target.value })
            }
          />
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Add relevant tags to help others find your opinion
          </p>
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="px-6 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg shadow hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
          >
            Publish Opinion
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewOpinionForm;
