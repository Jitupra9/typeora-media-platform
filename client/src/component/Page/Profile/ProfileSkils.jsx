import React, { memo, useState } from "react";
import { Flag, Plus, X } from "lucide-react";
function ProfileSkils() {
  const [skills, setSkills] = useState([
    "Java",
    "Python",
    "React",
    "MongoDB",
    "Node.js",
  ]);
  const [newSkill, setNewSkill] = useState("");
  const [showSkillInput, setShowSkillInput] = useState(false);
  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
    setShowSkillInput(false);
  };
  return (
    <div className="p-5 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-3 font-semibold">
          <Flag className="w-5 h-5 text-purple-500" />
          Skills & Expertise
        </h3>
        <button
          onClick={() => setShowSkillInput(!showSkillInput)}
          className="p-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {showSkillInput && (
        <div className="mt-3 flex gap-2">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add new skill"
            className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addSkill}
            className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm"
          >
            Add
          </button>
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
          >
            {item}
            <button
              onClick={() =>
                setSkills(skills.filter((skill) => skill !== item))
              }
              className="text-blue-400 hover:text-blue-600 dark:hover:text-blue-200"
            >
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default memo(ProfileSkils);
