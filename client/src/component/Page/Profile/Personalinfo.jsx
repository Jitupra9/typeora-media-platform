import { Pencil } from "lucide-react";
import { memo } from "react";

function Personalinfo() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-800 pb-3">
        <h3 className="text-lg font-medium">Basic details</h3>
        <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
          <Pencil className="w-3 h-3" />
          Edit
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="space-y-1">
          <label htmlFor="firstName" className="text-sm font-medium">
            First name
          </label>
          <input
            id="firstName"
            className="w-full bg-transparent outline-none py-2 border-b border-gray-600 focus:border-blue-500 transition-colors"
            type="text"
            name="firstName"
            placeholder="Abc"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="lastName" className="text-sm font-medium">
            Last Name
          </label>
          <input
            id="lastName"
            className="w-full bg-transparent outline-none py-2 border-b border-gray-600 focus:border-blue-500 transition-colors"
            type="text"
            name="lastName"
            placeholder="Xyz"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="gender" className="text-sm font-medium">
            Gender
          </label>
          <select
            id="gender"
            className="w-full bg-transparent dark:bg-gray-900 outline-none py-2 border-b border-gray-600 focus:border-blue-500 transition-colors"
            name="gender"
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="space-y-1">
          <label htmlFor="role" className="text-sm font-medium">
            Role
          </label>
          <input
            id="role"
            className="w-full bg-transparent outline-none py-2 border-b border-gray-600 focus:border-blue-500 transition-colors"
            type="text"
            name="role"
            value="User"
            readOnly
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="phoneNo" className="text-sm font-medium">
            Phone no.
          </label>
          <input
            id="phoneNo"
            className="w-full bg-transparent outline-none py-2 border-b border-gray-600 focus:border-blue-500 transition-colors"
            type="tel"
            name="phoneNo"
            placeholder="9876543210"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="secondaryEmail" className="text-sm font-medium">
            Secondary email
          </label>
          <input
            id="secondaryEmail"
            className="w-full bg-transparent outline-none py-2 border-b border-gray-600 focus:border-blue-500 transition-colors"
            type="email"
            name="secondaryEmail"
            placeholder="Abc@gmail.com"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="website" className="text-sm font-medium">
            Website
          </label>
          <input
            id="website"
            className="w-full bg-transparent outline-none py-2 border-b border-gray-600 focus:border-blue-500 transition-colors"
            type="url"
            name="website"
            placeholder="https://xyz.com"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="location" className="text-sm font-medium">
            Location
          </label>
          <input
            id="location"
            className="w-full bg-transparent outline-none py-2 border-b border-gray-600 focus:border-blue-500 transition-colors"
            type="text"
            name="location"
            placeholder="Berhamour, Odisha"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="about" className="text-sm font-medium">
          About the User
        </label>
        <textarea
          id="about"
          className="w-full bg-transparent outline-none p-3 border border-gray-600 rounded-md focus:border-blue-500 transition-colors"
          name="about"
          rows={5}
          placeholder="Tell us about yourself..."
        ></textarea>
      </div>
    </div>
  );
}

export default memo(Personalinfo);
