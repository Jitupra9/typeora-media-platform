import {
  Pencil,
  User,
  Mail,
  Phone,
  Globe,
  MapPin,
  Info,
  Save,
  X,
  Briefcase,
} from "lucide-react";
import { memo, useEffect, useState } from "react";

function Personalinfo({ Isedit, setIsedit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    gender: "Male",
    phoneNo: "+1 (555) 123-4567",
    secondaryEmail: "john.doe@example.com",
    Company: "Web Bocket",
    location: "New York, USA",
    role: "User",
    about:
      "I'm a software engineer passionate about building user-friendly applications...",
  });
  useEffect(() => {
    if (Isedit) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  }, [Isedit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsedit(false);
    setIsEditing(false);
  };

  return (
    <div className="space-y-8 bg-white dark:bg-gray-900 rounded-lg ">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-blue-400 dark:text-blue-400 flex items-center gap-2">
            <User className="w-6 h-6 text-pink-500" />
            Personal Information
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {isEditing
              ? "Edit your personal details"
              : "View your personal details"}
          </p>
        </div>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            <Pencil className="w-4 h-4 text-yellow-300" />
            Edit<span className=" hidden sm:inline-block">Profile</span>
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-green-600 text-white hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 transition-colors"
            >
              <Save className="w-4 h-4 text-white" />
              Save <span className=" hidden sm:inline-block"> Changes</span>
            </button>
            <button
              onClick={handleCancel}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-red-600 text-white hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 transition-colors"
            >
              <X className="w-4 h-4 text-white" />
              <span className=" hidden sm:inline-block">Cancel</span>
            </button>
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-purple-500" />
            Basic Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                First name
              </label>
              <div className="relative">
                <input
                  id="firstName"
                  className="w-full bg-gray-50 dark:bg-gray-800 outline-none p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-700 transition-colors"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Last Name
              </label>
              <input
                id="lastName"
                className="w-full bg-gray-50 dark:bg-gray-800 outline-none p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-700 transition-colors"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                readOnly={!isEditing}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="gender"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Gender
              </label>
              <select
                id="gender"
                className="w-full bg-gray-50 dark:bg-gray-800 outline-none p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-700 transition-colors"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                disabled={!isEditing}
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-500" />
            Contact Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="phoneNo"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1"
              >
                <Phone className="w-4 h-4 text-green-500" />
                Phone number
              </label>
              <input
                id="phoneNo"
                className="w-full bg-gray-50 dark:bg-gray-800 outline-none p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-700 transition-colors"
                type="tel"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleInputChange}
                readOnly={!isEditing}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="secondaryEmail"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                Secondary email
              </label>
              <input
                id="secondaryEmail"
                className="w-full bg-gray-50 dark:bg-gray-800 outline-none p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-700 transition-colors"
                type="email"
                name="secondaryEmail"
                value={formData.secondaryEmail}
                onChange={handleInputChange}
                readOnly={!isEditing}
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5 text-teal-500" />
            Additional Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="Company"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1"
              >
                <Briefcase className="w-4 h-4 text-purple-400" />
                Company
              </label>
              <input
                id="Company"
                className="w-full bg-gray-50 dark:bg-gray-800 outline-none p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-700 transition-colors"
                type="url"
                name="Company"
                value={formData.Company}
                onChange={handleInputChange}
                readOnly={!isEditing}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="location"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1"
              >
                <MapPin className="w-4 h-4 text-red-500" />
                Location
              </label>
              <input
                id="location"
                className="w-full bg-gray-50 dark:bg-gray-800 outline-none p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-700 transition-colors"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                readOnly={!isEditing}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="role"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Role
              </label>
              <input
                id="role"
                className="w-full bg-gray-100 dark:bg-gray-700 outline-none p-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 cursor-not-allowed"
                type="text"
                name="role"
                value={formData.role}
                readOnly
              />
            </div>
          </div>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-amber-500" />
            About
          </h3>
          <div className="space-y-2">
            <label
              htmlFor="about"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Tell us about yourself
            </label>
            <textarea
              id="about"
              className="w-full bg-gray-50 dark:bg-gray-800 outline-none p-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-700 transition-colors"
              name="about"
              rows={4}
              value={formData.about}
              onChange={handleInputChange}
              readOnly={!isEditing}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Personalinfo);
