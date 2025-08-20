import { memo, useState, useEffect, useContext } from "react";
import CloudinaryUpload from "../../utils/CloudinaryUpload";
import { ProfileDataContext } from "../../../context/page/ProfileContext";
import {
  Upload,
  Image as ImageIcon,
  Type,
  Heading2,
  FileText,
  Plus,
  X,
  Loader,
  CheckCircle,
  ChevronDown,
  Tag,
} from "lucide-react";
import axios from "axios";
import { useSelector } from "react-redux";
function NewUpload(props) {
  const { user, token } = useSelector((state) => state.Auth);
  const { SetcontextValue } = useContext(ProfileDataContext);
  const { setNewUploadData, setUploadActive } = SetcontextValue;
  const type = props.type;
  const [UploadData, setUploadData] = useState({
    userID: user?._id,
    fileUrl: "",
    title: "",
    subHeading: "",
    description: "",
    tags: [],
    category: "",
    customCategory: "",
  });

  const [newTag, setNewTag] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [currentUploadPhase, setCurrentUploadPhase] = useState("");

  const handleArticle = () => {
    setUploadActive(false);
  };

  const { uploadFile } = CloudinaryUpload();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setUploadData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const addTag = () => {
    if (newTag.trim() && !UploadData.tags.includes(newTag)) {
      setUploadData((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag],
      }));
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove) => {
    setUploadData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    setUploadProgress(0);
    setCurrentUploadPhase("cloudinary");

    const finalCategory =
      UploadData.category === "other"
        ? UploadData.customCategory
        : UploadData.category;

    const { customCategory, ...Datas } = {
      ...UploadData,
      category: finalCategory,
    };

    try {
      const newFileUrl = await uploadFile(Datas.fileUrl, type, (p) => {
        setUploadProgress(Math.round(p));
      });
      if (newFileUrl) {
        Datas.fileUrl = newFileUrl;
        setCurrentUploadPhase("api");
        setUploadProgress(0);
        const result =
          type === "videos"
            ? await axios.post(
                "api/videos/NewVideo",
                {
                  data: Datas,
                  token: token,
                },
                {
                  onUploadProgress: (progressEvent) => {
                    const progress = Math.round(
                      (progressEvent.loaded * 100) / progressEvent.total
                    );
                    setUploadProgress(progress);
                  },
                }
              )
            : await axios.post(
                "api/articles/NewArticle",
                {
                  data: Datas,
                  token: token,
                },
                {
                  onUploadProgress: (progressEvent) => {
                    const progress = Math.round(
                      (progressEvent.loaded * 100) / progressEvent.total
                    );
                    setUploadProgress(progress);
                  },
                }
              );
        if (result.data?.success) {
          setIsPublished(true);
          setNewUploadData(true);
          setTimeout(() => {
            setUploadActive(false);
          }, 1000);
        }
      }
    } catch (error) {
      console.error("Upload failed:", error);
      setIsUploading(false);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-4">
      <div className="text-blue-600 dark:text-blue-400 flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <FileText className="w-6 h-6" />
          Create a New {type === "article" ? "Article" : "Video"}
        </h2>
        <button
          type="button"
          onClick={handleArticle}
          aria-label="Close form"
          className="cursor-pointer hover:dark:bg-gray-600 hover:bg-gray-300 bg-opacity-35 rounded-full p-1 w-9 h-9"
        >
          <X className="w-full h-full" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <div className="bg-gray-200 dark:bg-gray-700 border border-blue-200 dark:border-gray-700 rounded-3xl p-4 sm:p-6 shadow-sm">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <ImageIcon className="w-5 h-5 text-blue-500" />
                <h3 className="text-xl font-bold">
                  Upload your cover {type === "article" ? "image" : "video"}
                </h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Supports{" "}
                {type === "article"
                  ? "JPG, PNG up to 15MB"
                  : "MP4, HEVC up to 1GB"}
              </p>

              <div
                className={`border-2 border-dashed rounded-2xl p-6 transition-colors ${
                  UploadData.fileUrl
                    ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                    : "border-gray-300 dark:border-gray-600 hover:border-blue-500"
                }`}
                role="button"
                aria-label="File upload area"
                tabIndex={0}
              >
                <label htmlFor="files" className="cursor-pointer">
                  <div className="flex flex-col items-center">
                    <Upload className="w-10 h-10 my-3 text-blue-500" />
                    <p className="text-gray-600 dark:text-gray-300">
                      {UploadData.fileUrl
                        ? "Change image"
                        : "Drag & drop your file or"}
                    </p>
                    <label
                      htmlFor="files"
                      className={`mt-3 cursor-pointer px-5 py-2 rounded-lg text-white flex items-center gap-2 ${
                        UploadData.fileUrl
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-blue-500 hover:bg-blue-600"
                      }`}
                    >
                      {UploadData.fileUrl ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          {type === "article" ? "Image" : "Video"} Selected
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          Browse Files
                        </>
                      )}
                    </label>
                    {UploadData.fileUrl && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                        {typeof UploadData.fileUrl === "object"
                          ? UploadData.fileUrl.name
                          : "File ready"}
                      </p>
                    )}
                  </div>
                </label>
                <input
                  type="file"
                  onChange={handleChange}
                  name="fileUrl"
                  id="files"
                  accept={type === "article" ? "image/*" : "video/*"}
                  className="hidden"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 shadow-sm">
            <div className="space-y-5 sm:h-96 sm:overflow-hidden sm:overflow-y-scroll hidel_slide_roler">
              <div>
                <label className="text-sm font-medium mb-2 flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Type className="w-4 h-4 text-blue-500" />
                  Title
                </label>
                <input
                  className="w-full border border-gray-300 dark:border-gray-600 bg-transparent rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  type="text"
                  name="title"
                  value={UploadData.title}
                  onChange={handleChange}
                  placeholder="Enter article title"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Heading2 className="w-4 h-4 text-blue-500" />
                  Subheading
                </label>
                <input
                  className="w-full border border-gray-300 dark:border-gray-600 bg-transparent rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  type="text"
                  name="subHeading"
                  value={UploadData.subHeading}
                  onChange={handleChange}
                  placeholder="A short description"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <ChevronDown className="w-4 h-4 text-blue-500" />
                  Category
                </label>
                <select
                  name="category"
                  value={UploadData.category}
                  onChange={handleChange}
                  className="w-full border dark:text-gray-300 dark:*:bg-gray-900 border-gray-300 dark:border-gray-600 bg-transparent rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="accident">Accident</option>
                  <option value="crime">Crime</option>
                  <option value="disaster">Disaster</option>
                  <option value="health">Health</option>
                  <option value="technology">Technology</option>
                  <option value="environmental">Environmental</option>
                  <option value="violence">Violence</option>
                  <option value="security">Security</option>
                  <option value="transportation">Transportation</option>
                  <option value="event">Event</option>
                  <option value="Travel">Travel</option>

                  <option value="other">Other</option>
                </select>
              </div>

              {UploadData.category === "other" && (
                <div>
                  <label className="text-sm font-medium mb-2 flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <ChevronDown className="w-4 h-4 text-blue-500" />
                    Custom Category
                  </label>
                  <input
                    className="w-full border border-gray-300 dark:border-gray-600 bg-transparent rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    type="text"
                    name="customCategory"
                    value={UploadData.customCategory}
                    onChange={handleChange}
                    placeholder="Enter custom category"
                    required={UploadData.category === "other"}
                  />
                </div>
              )}

              <div>
                <label className="text-sm font-medium mb-2 flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Tag className="w-4 h-4 text-blue-500" />
                  Tags
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addTag()}
                    className="flex-1 border border-gray-300 dark:border-gray-600 bg-transparent rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Add tags (press Enter)"
                  />
                  <button
                    type="button"
                    onClick={addTag}
                    className="px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center"
                    aria-label="Add tag"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                {UploadData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {UploadData.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="text-blue-400 hover:text-blue-600 dark:hover:text-blue-200"
                          aria-label={`Remove tag ${tag}`}
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label className="text-sm font-medium mb-2 flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <FileText className="w-4 h-4 text-blue-500" />
                  Description
                </label>
                <textarea
                  className="w-full border border-gray-300 dark:border-gray-600 bg-transparent rounded-lg px-4 py-3 h-40 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  name="description"
                  value={UploadData.description}
                  onChange={handleChange}
                  placeholder="Write your article content here..."
                  required
                />
              </div>
            </div>

            {isUploading && (
              <div className="mb-4">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">
                  {currentUploadPhase === "cloudinary"
                    ? `Uploading ${
                        type === "videos" ? "video" : "image"
                      } to Cloudinary... ${uploadProgress}%`
                    : `Saving to database... ${uploadProgress}%`}
                </p>
              </div>
            )}

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                disabled={isUploading || isPublished}
                className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 ${
                  isPublished
                    ? "bg-green-500 text-white"
                    : isUploading
                    ? "bg-blue-400 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                {isUploading ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    Publishing...
                  </>
                ) : isPublished ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Published!
                  </>
                ) : (
                  <>
                    <FileText className="w-4 h-4" />
                    Publish {type !== "videos" ? "Article" : "Video"}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default memo(NewUpload);
