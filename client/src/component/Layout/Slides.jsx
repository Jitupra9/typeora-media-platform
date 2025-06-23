import React, { memo, useContext } from "react";
import { IsAuthnticate } from "../../context/Auth/IsAuth";
import people from "../../assets/images/people.jpg";
import { Link, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import {
  User,
  Settings,
  UserRoundX,
  Newspaper,
  CalendarCheck,
  UserPen,
  Tv,
  History,
  Bookmark,
  Film,
  FileText,
  Flag,
  Mail,
  LifeBuoy,
  ChevronDown,
  User2,
  PlugZap,
} from "lucide-react";

function Slides() {
  const { Auth, setAuth } = useContext(IsAuthnticate);
  const location = useLocation();

  const mainPages = [
    {
      icon: <Tv size={18} />,
      path: "/",
      name: "Videos",
    },
    {
      icon: <Newspaper size={18} />,
      path: "/Articles",
      name: "Articles",
    },
    {
      icon: <UserPen size={18} />,
      path: "/opinion",
      name: "Opinion",
    },
    {
      icon: <CalendarCheck size={18} />,
      path: "/events-calendar",
      name: "Special",
    },
  ];

  const yourPages = Auth.islogined
    ? [
        {
          icon: <Film size={18} />,
          path: "/your-videos",
          name: "Your Videos",
        },
        {
          icon: <FileText size={18} />,
          path: "/your-articles",
          name: "Your Articles",
        },
        {
          icon: <Bookmark size={18} />,
          path: "/saved",
          name: "Saved",
        },
        {
          icon: <PlugZap size={18} />,
          path: "/Actions",
          name: "Actions",
        },

        {
          icon: <History size={18} />,
          path: "/History",
          name: "History",
        },
      ]
    : [];

  const followingPeople = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar: people,
      role: "Content Creator",
    },
    {
      id: 2,
      name: "Sarah Williams",
      avatar: people,
      role: "Journalist",
    },
    {
      id: 3,
      name: "Michael Chen",
      avatar: people,
      role: "Editor",
    },
    {
      id: 4,
      name: "Emma Davis",
      avatar: people,
      role: "Photographer",
    },
  ];

  const isActive = (path) => {
    return (
      location.pathname === path ||
      (path === "/" && location.pathname.startsWith("/watch")) ||
      (path === "/Articles" &&
        location.pathname.startsWith("/ArticleDetails")) ||
      (path === "/" && /^\/\d+$/.test(location.pathname))
    );
  };

  const handleLogout = async () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData?.user?._id) {
      toast.error("Login First");
      return;
    } else {
      localStorage.removeItem("userData");
      setAuth((prev) => ({
        ...prev,
        islogined: false,
        user: null,
      }));
      toast.success("Logged out successfully!");
    }
  };

  return (
    <div className="h-[100vh] font-semibold overflow-hidden text-nowrap bg-white text-gray-500 dark:bg-gray-900 dark:text-gray-400 flex flex-col">
      <div className="text-center py-4 text-2xl font-bold text-black dark:text-white">
        Typeora
      </div>

      <div className="px-2 py-3 ">
        {Auth.islogined === true ? (
          <Link
            to="/profile"
            className="bg-blue-400 text-white dark:bg-gray-500 dark:bg-opacity-60  cursor-pointer flex items-center justify-center gap-2 border py-2 px-3 rounded-md"
          >
            <div className="images">
              <img src={people} alt="" className="w-10 rounded-full" />
            </div>
            <div className="textarea">
              <h3 className="text-md font-bold">
                {Auth.user &&
                  `${Auth.user.userFirstname} ${Auth.user.userLastName}`}
              </h3>
              <p className="text-xs">Premium Plan</p>
            </div>
          </Link>
        ) : (
          <div className="dark:bg-gray-700 dark:text-gray-300 bg-gray-100 text-gray-600 opacity-90 flex items-center justify-center gap-5 border py-2 px-3 rounded-md cursor-not-allowed">
            <div className="images bg-white rounded-full p-2 border border-gray-200">
              <User className="text-gray-400" />
            </div>
            <div className="textarea opacity-60">
              <h3 className="text-md font-semibold">Login</h3>
              <p className="text-xs">Access Denied</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex-1 hidel_slide_roler overflow-hidden overflow-y-scroll">
        <div className="py-3 flex flex-col gap-y-1">
          {mainPages.map((item, index) => (
            <div
              key={`main-${index}`}
              className={` ${
                isActive(item.path)
                  ? "bg-blue-50 text-cyan-600 border-l-4 px-4 border-blue-500 dark:bg-gray-700 dark:text-white dark:border-blue-50"
                  : "text-gray-500 px-5  hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <Link
                to={item.path}
                className="py-3 w-full flex items-center justify-start pl-3 gap-3 text-sm font-medium cursor-pointer"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </div>
          ))}
        </div>

        {Auth.islogined && (
          <>
            <div className="py-3 flex flex-col gap-y-1 border-t border-gray-200 dark:border-gray-700">
              <div className="px-5 text-lg font-bold text-gray-500 dark:text-gray-400">
                You
              </div>
              {yourPages.map((item, index) => (
                <div
                  key={`user-${index}`}
                  className={` ${
                    isActive(item.path)
                      ? "bg-blue-50 text-cyan-600 border-l-4 px-4 border-blue-500 dark:bg-gray-700 dark:text-white dark:border-blue-50"
                      : "text-gray-500 hover:bg-gray-100 px-5  dark:hover:bg-gray-800"
                  }`}
                >
                  <Link
                    to={item.path}
                    className="py-3 w-full flex items-center justify-start pl-3 gap-3 text-sm font-medium cursor-pointer"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                </div>
              ))}
            </div>

            <div className="py-3 flex flex-col gap-y-1 border-t border-gray-200 dark:border-gray-700">
              <div className="px-5 text-lg font-bold text-gray-500 dark:text-gray-400">
                Following
              </div>
              {followingPeople.map((person) => (
                <div
                  key={`person-${person.id}`}
                  className="px-5 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Link
                    to={`/profile/${person.id}`}
                    className="py-3 w-full flex items-center justify-start pl-3 gap-3 text-sm font-medium cursor-pointer"
                  >
                    <img
                      src={person.avatar}
                      alt={person.name}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <span>{person.name}</span>
                      <span className="text-xs text-gray-400">
                        {person.role}
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
              <div className="text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800">
                <Link
                  to="/following"
                  className="py-3 w-full flex items-center justify-start pl-3 gap-3 text-sm font-medium cursor-pointer"
                >
                  <ChevronDown size={18} />
                  <span>See all following</span>
                </Link>
              </div>
            </div>
          </>
        )}

        <div className=" py-3 flex flex-col gap-y-1 border-t border-gray-200 dark:border-gray-700">
          <div
            className={` ${
              isActive("/settings")
                ? "bg-blue-50 text-cyan-600 px-4 border-l-4 border-blue-500 dark:bg-gray-700 dark:text-white dark:border-blue-50"
                : "text-gray-500  px-5 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            <Link
              to="/settings"
              className="py-3 w-full flex items-center justify-start pl-3 gap-3 text-sm font-medium cursor-pointer"
            >
              <Settings size={18} />
              <span>Settings</span>
            </Link>
          </div>
          <div
            className={` ${
              isActive("/help")
                ? "bg-blue-50 text-cyan-600 px-4 border-l-4 border-blue-500 dark:bg-gray-700 dark:text-white dark:border-blue-50"
                : "text-gray-500 hover:bg-gray-100 px-5 dark:hover:bg-gray-800"
            }`}
          >
            <Link
              to="/help"
              className="py-3 w-full flex items-center justify-start pl-3 gap-3 text-sm font-medium cursor-pointer"
            >
              <LifeBuoy size={18} />
              <span>Help</span>
            </Link>
          </div>
          <div
            className={` ${
              isActive("/report-history")
                ? "bg-blue-50 text-cyan-600 px-4 border-l-4 border-blue-500 dark:bg-gray-700 dark:text-white dark:border-blue-50"
                : "text-gray-500 hover:bg-gray-100 px-5 dark:hover:bg-gray-800"
            }`}
          >
            <Link
              to="/report-history"
              className="py-3 w-full flex items-center justify-start pl-3 gap-3 text-sm font-medium cursor-pointer"
            >
              <Flag size={18} />
              <span>Report</span>
            </Link>
          </div>
          <div
            className={` ${
              isActive("/feedback")
                ? "bg-blue-50 text-cyan-600 border-l-4 px-4 border-blue-500 dark:bg-gray-700 dark:text-white dark:border-blue-50"
                : "text-gray-500 hover:bg-gray-100 px-5 dark:hover:bg-gray-800"
            }`}
          >
            <Link
              to="/feedback"
              className="py-3 w-full px-5 flex items-center justify-start pl-3 gap-3 text-sm font-medium cursor-pointer"
            >
              <Mail size={18} />
              <span>Feedback</span>
            </Link>
          </div>
          <div className="">
            {Auth.islogined ? (
              <div
                className=" py-3 w-full flex items-center justify-start  px-8 gap-3 text-sm font-medium cursor-pointer text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={handleLogout}
              >
                <UserRoundX size={18} />
                <span>Logout</span>
              </div>
            ) : (
              <div className="py-3 w-full flex items-center justify-start px-8  gap-3 text-sm font-medium cursor-pointer text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800">
                <User2 size={18} />
                <span>
                  <Link to="/login">Login</Link>
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400">
          <div>
            © 2025 Typeora International. <br />
            <br /> All copyrights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Slides);
