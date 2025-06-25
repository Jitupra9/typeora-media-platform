import React, { memo, useEffect, useState } from "react";
import people from "../../assets/images/people.jpg";
import {
  Dot,
  Calendar,
  Briefcase,
  Clock,
  CheckCircle,
  Edit,
  Award,
  Share2,
  Mail,
  Globe,
} from "lucide-react";
function ProfileHeader(props) {
  const [profileCompletion, setprofileCompletion] = useState();
  const [user, setuser] = useState({});
  useEffect(() => {
    setprofileCompletion(props.profileCompletion);
    setuser(props.user);
  }, [props]);
  return (
    <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-sm">
      <div className="flex flex-col sm:flex-row py-3 items-start sm:items-center justify-between border-b border-gray-200 dark:border-gray-700 gap-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
              src={people}
              alt="Profile"
            />
            <div className="absolute bottom-0 right-0 bg-green-500 rounded-full w-4 h-4 border-2 border-white dark:border-gray-900"></div>
          </div>
          <div>
            <h3 className="font-bold text-xl">
              {user.userFirstname + " " + user.userFirstname}
              <span className="ml-2 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full">
                Pro
              </span>
            </h3>
            <p className=" flex flex-col lg:flex-row   text-gray-500 dark:text-gray-400 text-sm ">
              <div className=" flex items-center">
                <Briefcase className="w-4 h-4 mr-1" />
                Senior Full Stack Developer
              </div>
              <Dot className="mx-1 hidden lg:block" />
              <div className=" flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                {user.userEmail}
              </div>
            </p>
          </div>
        </div>
        <div className="flex gap-3  justify-between w-full sm:w-max sm:justify-normal ">
          <button className="flex items-center gap-2 text-sm bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
            <Edit className="w-4 h-4" />
            Edit Profile
          </button>
          <button className="flex items-center gap-2 text-sm bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors">
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>
      </div>
      <div className="py-3 text-sm flex flex-wrap items-center justify-between gap-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            <Calendar className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <p className="text-gray-400">Location</p>
            <h3 className="font-semibold flex items-center gap-1">
              <Globe className="w-4 h-4" />
              {user.userlocation}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
            <Briefcase className="w-5 h-5 text-purple-500" />
          </div>
          <div>
            <p className="text-gray-400">Company</p>
            <h3 className="font-semibold">Web Bocket</h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
            <Clock className="w-5 h-5 text-green-500" />
          </div>
          <div>
            <p className="text-gray-400">Available</p>
            <h3 className="font-semibold">20 Hours/Week</h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
            <Award className="w-5 h-5 text-yellow-500" />
          </div>
          <div>
            <p className="text-gray-400">Status</p>
            <p className="px-3 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full flex items-center gap-1">
              <CheckCircle className="w-3 h-3" />
              Active
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm">
            Profile Completion:
            {profileCompletion}%
          </span>
          <span className="text-xs text-blue-500">Complete Profile</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${profileCompletion}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default memo(ProfileHeader);
