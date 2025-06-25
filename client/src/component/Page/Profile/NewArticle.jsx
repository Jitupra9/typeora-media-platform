import { memo, useState } from "react";
import CloudinaryUpload from "../../utils/CloudinaryUpload";
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

function NewArticle() {
  const [newArticle, setNewArticle] = useState({
    fileUrl: "",
    title: "",
    subHeading: "",
    description: "",
    tags: [],
    category: "",
  });
  const [newTag, setNewTag] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isPublished, setIsPublished] = useState(false);

  const { uploadImage } = CloudinaryUpload();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setNewArticle((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const addTag = () => {
    if (newTag.trim() && !newArticle.tags.includes(newTag)) {
      setNewArticle((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag],
      }));
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove) => {
    setNewArticle((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);

    try {
      const newFileUrl = await uploadImage(newArticle.fileUrl);
      if (newFileUrl) {
        console.log("File uploaded successfully:", newFileUrl);
        // Simulate API call
        setTimeout(() => {
          setIsUploading(false);
          setIsPublished(true);
          setTimeout(() => setIsPublished(false), 3000);
        }, 1500);
      }
    } catch (error) {
      console.error("Upload failed:", error);
      setIsUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-4">
      <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-3 text-blue-600 dark:text-blue-400">
          <FileText className="w-6 h-6" />
          Create a New Article
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/2">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 border border-blue-200 dark:border-gray-700 rounded-2xl p-4 sm:p-6 shadow-sm">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <ImageIcon className="w-5 h-5 text-blue-500" />
                <h3 className="text-xl font-bold">Upload your cover image</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Supports JPG, PNG up to 15MB
              </p>

              <div
                className={`border-2 border-dashed rounded-2xl p-6 transition-colors ${
                  newArticle.fileUrl
                    ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                    : "border-gray-300 dark:border-gray-600 hover:border-blue-500"
                }`}
              >
                <label htmlFor="files" className="cursor-pointer">
                  <div className="flex flex-col items-center">
                    <Upload className="w-10 h-10 my-3 text-blue-500" />
                    <p className="text-gray-600 dark:text-gray-300">
                      {newArticle.fileUrl
                        ? "Change image"
                        : "Drag & drop your file or"}
                    </p>
                    <label
                      htmlFor="files"
                      className={`mt-3 px-5 py-2 rounded-lg text-white flex items-center gap-2 ${
                        newArticle.fileUrl
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-blue-500 hover:bg-blue-600"
                      }`}
                    >
                      {newArticle.fileUrl ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          Image Selected
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          Browse Files
                        </>
                      )}
                    </label>
                    {newArticle.fileUrl && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                        {typeof newArticle.fileUrl === "object"
                          ? newArticle.fileUrl.name
                          : "Image ready"}
                      </p>
                    )}
                  </div>
                </label>
                <input
                  type="file"
                  onChange={handleChange}
                  name="fileUrl"
                  id="files"
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 shadow-sm">
            <div className="space-y-5">
              <div>
                <label className=" text-sm font-medium mb-2 flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Type className="w-4 h-4 text-blue-500" />
                  Title
                </label>
                <input
                  className="w-full border border-gray-300 dark:border-gray-600 bg-transparent rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  type="text"
                  name="title"
                  value={newArticle.title}
                  onChange={handleChange}
                  placeholder="Enter article title"
                  required
                />
              </div>

              <div>
                <label className=" text-sm font-medium mb-2 flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Heading2 className="w-4 h-4 text-blue-500" />
                  Subheading
                </label>
                <input
                  className="w-full border border-gray-300 dark:border-gray-600 bg-transparent rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  type="text"
                  name="subHeading"
                  value={newArticle.subHeading}
                  onChange={handleChange}
                  placeholder="A short description"
                />
              </div>

              <div>
                <label className=" text-sm font-medium mb-2 flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <ChevronDown className="w-4 h-4 text-blue-500" />
                  Category
                </label>
                <select
                  name="category"
                  value={newArticle.category}
                  onChange={handleChange}
                  className="w-full border border-gray-300 dark:border-gray-600 bg-transparent rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="technology">Technology</option>
                  <option value="programming">Programming</option>
                  <option value="design">Design</option>
                  <option value="business">Business</option>
                </select>
              </div>
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
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                {newArticle.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {newArticle.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="text-blue-400 hover:text-blue-600 dark:hover:text-blue-200"
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
                  value={newArticle.description}
                  onChange={handleChange}
                  placeholder="Write your article content here..."
                  required
                />
              </div>
            </div>
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
                    Publish Article
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

export default memo(NewArticle);
