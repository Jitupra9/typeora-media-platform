import React, { memo, useContext, useEffect, useState } from "react";
import {
  Share2,
  Github,
  Twitter,
  Linkedin,
  Plus,
  X,
  Loader,
} from "lucide-react";
import { IsAuthnticate } from "../../../context/Auth/IsAuth";
import toast from "react-hot-toast";
import axios from "axios";

const socialIcons = {
  github: <Github className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5 text-blue-400" />,
  linkedin: <Linkedin className="w-5 h-5 text-blue-600" />,
  other: <Share2 className="w-5 h-5 text-purple-500" />,
};

function Social() {
  const { Auth, setAuth } = useContext(IsAuthnticate);
  const [socialLinks, setSocialLinks] = useState(Auth?.user?.Social || []);
  const [showAddInput, setShowAddInput] = useState(false);
  const [newPlatform, setNewPlatform] = useState("github");
  const [customPlatform, setCustomPlatform] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState([]);

  useEffect(() => {
    setSocialLinks(Auth?.user?.Social || []);
  }, [Auth]);

  const addSocialLink = async () => {
    if (!newUrl.trim()) return;

    const platformKey =
      newPlatform === "other"
        ? customPlatform.toLowerCase().replace(/\s+/g, "-")
        : newPlatform;

    const newLink = {
      platform: newPlatform === "other" ? customPlatform : newPlatform,
      url: newUrl.trim(),
      key: platformKey,
    };

    const alreadyExists = socialLinks.some((link) => link.key === platformKey);
    if (alreadyExists) {
      return toast.error("Platform already exists");
    }

    try {
      setLoading(true);

      const res = await axios.put(`/api/UpdateSocials/${Auth?.user?._id}`, {
        token: Auth.token,
        social: [...socialLinks, newLink],
      });

      if (res.data?.success) {
        const updatedUser = res.data.user;
        setAuth((prev) => ({
          ...prev,
          user: updatedUser,
        }));

        localStorage.setItem(
          "userData",
          JSON.stringify({
            token: Auth.token,
            user: updatedUser,
          })
        );

        setSocialLinks(updatedUser.Social);
        toast.success("Social link added");
      } else {
        toast.error(res.data?.message || "Failed to update socials");
      }
    } catch (e) {
      console.error(e);
      toast.error("Something went wrong while updating");
    } finally {
      setLoading(false);
      setNewUrl("");
      setCustomPlatform("");
      setNewPlatform("github");
      setShowAddInput(false);
    }
  };

  const removeSocialLinks = async (keysToRemove) => {
    const updatedLinks = socialLinks.filter(
      (link) => !keysToRemove.includes(link.key)
    );

    try {
      setLoading(true);
      const res = await axios.put(`/api/UpdateSocials/${Auth?.user?._id}`, {
        token: Auth.token,
        social: updatedLinks,
      });

      if (res.data?.success) {
        const updatedUser = res.data.user;
        setAuth((prev) => ({
          ...prev,
          user: updatedUser,
        }));

        localStorage.setItem(
          "userData",
          JSON.stringify({
            token: Auth.token,
            user: updatedUser,
          })
        );

        setSocialLinks(updatedUser.Social);
        setSelectedKeys([]);
        toast.success("Social link(s) removed");
      } else {
        toast.error(res.data?.message || "Failed to remove social link(s)");
      }
    } catch (e) {
      console.error(e);
      toast.error("Error occurred while removing link(s)");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-3 font-semibold">
          <Share2 className="w-5 h-5 text-blue-500" />
          Connect With Me
        </h3>
        <button
          onClick={() => setShowAddInput(!showAddInput)}
          className="p-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {showAddInput && (
        <div className="mt-4 space-y-3">
          <select
            value={newPlatform}
            onChange={(e) => setNewPlatform(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="github">GitHub</option>
            <option value="twitter">Twitter</option>
            <option value="linkedin">LinkedIn</option>
            <option value="other">Other Platform</option>
          </select>

          {newPlatform === "other" && (
            <input
              type="text"
              value={customPlatform}
              onChange={(e) => setCustomPlatform(e.target.value)}
              placeholder="Platform name (e.g. Instagram, Portfolio)"
              className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}

          <div className="flex gap-2 items-center">
            <input
              type="url"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              placeholder={`Enter ${
                newPlatform === "other"
                  ? customPlatform || "platform"
                  : newPlatform
              } URL`}
              className="flex-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addSocialLink}
              disabled={loading}
              className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm flex items-center gap-2"
            >
              {loading ? (
                <>
                  <Loader className="w-4 h-4 animate-spin" />
                  Saving
                </>
              ) : (
                "Add"
              )}
            </button>
          </div>
        </div>
      )}

      {socialLinks.length > 0 ? (
        <div className="mt-4 space-y-2">
          {selectedKeys.length > 0 && (
            <div className="text-right mb-2">
              <button
                onClick={() => removeSocialLinks(selectedKeys)}
                disabled={loading}
                className="px-4 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600"
              >
                Delete Selected ({selectedKeys.length})
              </button>
            </div>
          )}

          {socialLinks.map(({ key, url, platform }) => (
            <div
              key={key}
              className="relative group flex items-center gap-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-3 rounded-lg"
            >
              <input
                type="checkbox"
                className=" hidden group-hover:inline-block form-checkbox text-blue-500"
                checked={selectedKeys.includes(key)}
                onChange={(e) => {
                  const isChecked = e.target.checked;
                  setSelectedKeys((prev) =>
                    isChecked ? [...prev, key] : prev.filter((k) => k !== key)
                  );
                }}
                disabled={loading}
              />
              <span className="flex-shrink-0">
                {socialIcons[key] || socialIcons.other}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
                  {platform}
                </p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-500 hover:underline block truncate"
                >
                  {url.replace(/^https?:\/\/(www\.)?/, "")}
                </a>
              </div>
              <button
                onClick={() => removeSocialLinks([key])}
                disabled={loading}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6 text-center py-6 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-700">
          <div className="flex justify-center">
            <Share2 className="w-10 h-10 text-gray-400 dark:text-gray-500" />
          </div>
          <h4 className="mt-3 font-medium text-gray-500 dark:text-gray-400">
            No social links added
          </h4>
          <p className="mt-1 text-sm text-gray-400 dark:text-gray-500">
            Let people know where they can connect with you
          </p>
          <button
            onClick={() => setShowAddInput(true)}
            className="mt-4 inline-flex items-center gap-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add social link
          </button>
        </div>
      )}
    </div>
  );
}

export default memo(Social);
