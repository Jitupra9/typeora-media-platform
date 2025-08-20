import React, { memo, useState } from "react";
import { Award, Flag, Plus, X, Loader } from "lucide-react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { setUser } from "../../../store/Auth";
import { useDispatch, useSelector } from "react-redux";
function ProfileSkills() {
  const { user, token } = useSelector((state) => state.Auth);
  const Dispatch = useDispatch();
  const [skills, setSkills] = useState(user?.Skills || []);
  const [newSkill, setNewSkill] = useState("");
  const [loading, setLoading] = useState({
    add: false,
    remove: null,
  });
  const [showSkillInput, setShowSkillInput] = useState(false);

  const updateSkills = async (updatedSkills) => {
    try {
      const result = await axios.put(`/api/UpdateSkill/${user?._id}`, {
        Skills: updatedSkills,
        token: token,
      });

      if (result?.data?.success) {
        console.log(result.data);
        const usersData = result.data.user;
        Dispatch(setUser(usersData));
        localStorage.setItem(
          "userData",
          JSON.stringify({
            token: token,
            user: usersData,
          })
        );
        setSkills(usersData.Skills);
        return true;
      }
    } catch (error) {
      console.error("Error updating skills:", error);
      toast.error("Failed to update skills");
      return false;
    }
  };

  const addSkills = async () => {
    if (!newSkill.trim()) return;

    setLoading({ ...loading, add: true });

    const skillsToAdd = newSkill
      .split(",")
      .map((skill) => skill.trim())
      .filter((skill) => skill.length > 0 && !skills.includes(skill));

    if (skillsToAdd.length === 0) {
      setNewSkill("");
      setShowSkillInput(false);
      setLoading({ ...loading, add: false });
      return;
    }

    const updatedSkills = [...skills, ...skillsToAdd];

    const success = await updateSkills(updatedSkills);
    if (success) {
      setNewSkill("");
      setShowSkillInput(false);
    }

    setLoading({ ...loading, add: false });
  };

  const removeSkill = async (skillToRemove) => {
    setLoading({ ...loading, remove: skillToRemove });

    const updatedSkills = skills.filter((skill) => skill !== skillToRemove);

    await updateSkills(updatedSkills);

    setLoading({ ...loading, remove: null });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addSkills();
    }
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
          disabled={loading.add}
          className="p-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full disabled:opacity-50"
        >
          {loading.add ? (
            <Loader className="w-5 h-5 animate-spin" />
          ) : (
            <Plus className="w-5 h-5" />
          )}
        </button>
      </div>

      {showSkillInput && (
        <div className="mt-3 space-y-2">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add skills separated by commas (e.g. JavaScript, React, Node.js)"
            className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading.add}
          />
          <div className="flex justify-end gap-2">
            <button
              onClick={() => {
                setNewSkill("");
                setShowSkillInput(false);
              }}
              className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-sm"
              disabled={loading.add}
            >
              Cancel
            </button>
            <button
              onClick={addSkills}
              className="flex items-center gap-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm disabled:opacity-50"
              disabled={loading.add || !newSkill.trim()}
            >
              {loading.add ? (
                <Loader className="w-4 h-4 animate-spin" />
              ) : (
                "Add Skills"
              )}
            </button>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Tip: Separate multiple skills with commas
          </p>
        </div>
      )}

      {skills.length > 0 ? (
        <div className="mt-4 space-y-2">
          <div className="flex flex-wrap gap-2">
            {skills.map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
              >
                {item}
                <button
                  onClick={() => removeSkill(item)}
                  className="text-blue-400 hover:text-blue-600 dark:hover:text-blue-200"
                  disabled={loading.remove === item}
                >
                  {loading.remove === item ? (
                    <Loader className="w-3 h-3 animate-spin" />
                  ) : (
                    <X className="w-3 h-3" />
                  )}
                </button>
              </span>
            ))}
          </div>
          <button
            onClick={() => setShowSkillInput(true)}
            className="mt-2 text-sm text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1"
            disabled={loading.add}
          >
            <Plus className="w-4 h-4" />
            Add more skills
          </button>
        </div>
      ) : (
        <div className="mt-6 text-center py-6 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-700">
          <div className="flex justify-center">
            <Award className="w-10 h-10 text-gray-400 dark:text-gray-500" />
          </div>
          <h4 className="mt-3 font-medium text-gray-500 dark:text-gray-400">
            No skills added yet
          </h4>
          <p className="mt-1 text-sm text-gray-400 dark:text-gray-500">
            Showcase your expertise by adding relevant skills
          </p>
          <button
            onClick={() => setShowSkillInput(true)}
            className="mt-4 inline-flex items-center gap-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors"
            disabled={loading.add}
          >
            {loading.add ? (
              <Loader className="w-4 h-4 animate-spin" />
            ) : (
              <>
                <Plus className="w-4 h-4" />
                Add skills
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

export default memo(ProfileSkills);
