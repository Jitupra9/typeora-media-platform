import React, { memo } from "react";
import people from "../assets/images/people.jpg";
import { Link, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setLoginStatus, setLoading, setToken } from "../store/Auth";
import {
  User as UserIcon,
  Settings,
  UserRoundX,
  Newspaper,
  CalendarCheck,
  UserPen,
  Tv,
  History,
  Bookmark,
  FileText,
  Flag,
  LifeBuoy,
  ChevronDown,
  User2,
  PlugZap,
  Sparkles,
  House,
} from "lucide-react";

function Slides() {
  const { user, islogined } = useSelector((state) => state.Auth);
  const Dispatch = useDispatch();
  const location = useLocation();

  const iconColors = {
    primary: "text-gray-600 dark:text-gray-300",
    accent: "text-blue-600 dark:text-blue-400",
    success: "text-emerald-600 dark:text-emerald-400",
    warning: "text-amber-600 dark:text-amber-400",
    danger: "text-rose-600 dark:text-rose-400",
    info: "text-cyan-600 dark:text-cyan-400",
    purple: "text-violet-600 dark:text-violet-400",
  };

  const mainPages = [
    {
      icon: <House size={18} className={iconColors.danger} />,
      path: "/",
      name: "Home",
    },
    {
      icon: <Tv size={18} className={iconColors.accent} />,
      path: "/Video",
      name: "Videos",
    },
    {
      icon: <Newspaper size={18} className={iconColors.info} />,
      path: "/Articles",
      name: "Articles",
    },
    {
      icon: <UserPen size={18} className={iconColors.purple} />,
      path: "/opinion",
      name: "Opinion",
    },
    {
      icon: <CalendarCheck size={18} className={iconColors.warning} />,
      path: "/events-calendar",
      name: "Special",
    },
  ];

  const yourPages = islogined
    ? [
        {
          icon: <FileText size={18} className={iconColors.info} />,
          path: "/myContent",
          name: "My Content",
        },
        {
          icon: <Bookmark size={18} className={iconColors.warning} />,
          path: "/saved",
          name: "Saved",
        },
        {
          icon: <PlugZap size={18} className={iconColors.success} />,
          path: "/Actions",
          name: "Actions",
        },
        {
          icon: <History size={18} className={iconColors.primary} />,
          path: "/History",
          name: "History",
        },
      ]
    : [];

  const followingPeople = [
    { id: 1, name: "Alex Johnson", avatar: people, role: "Content Creator" },
    { id: 2, name: "Sarah Williams", avatar: people, role: "Journalist" },
    { id: 3, name: "Michael Chen", avatar: people, role: "Editor" },
    { id: 4, name: "Emma Davis", avatar: people, role: "Photographer" },
  ];

  const isActive = (path) => {
    return (
      location.pathname === path ||
      (path === "/Video" && location.pathname.startsWith("/watch")) ||
      (path === "/Articles" &&
        location.pathname.startsWith("/ArticleDetails")) ||
      (path === "/" && /^\/\d+$/.test(location.pathname))
    );
  };

  // LOGOUT
  const handleLogout = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData?.user?._id) {
      toast.error("Login First");
      return;
    } else {
      localStorage.removeItem("userData");
      Dispatch(setUser(null));
      Dispatch(setToken(null));
      Dispatch(setLoginStatus(false));
      Dispatch(setLoading(false));
      toast.success("Logged out successfully!");
    }
  };

  return (
    <div className="h-[100vh] font-medium overflow-hidden text-nowrap bg-white text-gray-700 dark:text-gray-200 dark:bg-gray-900 flex flex-col border-r  sm:border-none border-gray-900 ">
      <div className="text-center py-[14px] lg:py-4">
        <Link to="/" className="flex items-center justify-center gap-2">
          <Sparkles size={24} className="text-blue-600 dark:text-blue-400" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
            Typeora
          </span>
        </Link>
      </div>

      <div className="flex flex-col h-full pb-16 border-r dark:border-opacity-70 border-gray-200 dark:border-gray-900">
        <div className="px-3 py-3">
          {islogined ? (
            <Link
              to="/profile"
              className="bg-gradient-to-r border border-gray-300 from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 cursor-pointer flex items-center gap-3 rounded-lg py-2 px-3 transition-all hover:shadow-sm"
            >
              <img
                src={people}
                alt=""
                className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-sm"
              />
              <div>
                <h3 className="text-md font-semibold text-gray-800 dark:text-white">
                  {user && `${user.Firstname} ${user.LastName}`}
                </h3>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  Premium Member
                </p>
              </div>
            </Link>
          ) : (
            <div className="bg-gray-50 dark:bg-gray-800 flex items-center justify-center gap-3 rounded-lg py-2 px-3 border border-gray-200 dark:border-gray-700">
              <div className="bg-white dark:bg-gray-700 rounded-full p-2 border border-gray-200 dark:border-gray-600">
                <UserIcon
                  className="text-gray-500 dark:text-gray-400"
                  size={18}
                />
              </div>
              <div>
                <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300">
                  <Link
                    to="/login"
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Sign In
                  </Link>
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Access your account
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="flex-1 hidel_slide_roler overflow-y-auto">
          <div className="py-2 flex flex-col">
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Discover
            </div>
            {mainPages.map((item, index) => (
              <div
                key={`main-${index}`}
                className={`mx-2 my-1 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? "bg-blue-50 text-blue-600 dark:bg-gray-800 dark:text-blue-400 shadow-inner"
                    : "hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <Link
                  to={item.path}
                  className="py-2.5 px-3 flex items-center gap-3 text-sm cursor-pointer"
                >
                  <span
                    className={`${
                      isActive(item.path) ? "opacity-100" : "opacity-80"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span className={isActive(item.path) ? "font-semibold" : ""}>
                    {item.name}
                  </span>
                </Link>
              </div>
            ))}
          </div>

          {islogined && (
            <>
              <div className="py-2 flex flex-col border-t border-gray-100 dark:border-gray-800">
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Your Space
                </div>
                {yourPages.map((item, index) => (
                  <div
                    key={`user-${index}`}
                    className={`mx-2 my-1 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? "bg-blue-50 text-blue-600 dark:bg-gray-800 dark:text-blue-400 shadow-inner"
                        : "hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    <Link
                      to={item.path}
                      className="py-2.5 px-3 flex items-center gap-3 text-sm cursor-pointer"
                    >
                      <span
                        className={`${
                          isActive(item.path) ? "opacity-100" : "opacity-80"
                        }`}
                      >
                        {item.icon}
                      </span>
                      <span
                        className={isActive(item.path) ? "font-semibold" : ""}
                      >
                        {item.name}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>

              <div className="py-2 flex flex-col border-t border-gray-100 dark:border-gray-800">
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Following
                </div>
                {followingPeople.map((person) => (
                  <div
                    key={`person-${person.id}`}
                    className="mx-2 my-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <Link
                      to={`/visited?${person.id}`}
                      className="py-2.5 px-3 flex items-center gap-3 text-sm cursor-pointer"
                    >
                      <img
                        src={person.avatar}
                        alt={person.name}
                        className="w-6 h-6 rounded-full object-cover border border-gray-200 dark:border-gray-700"
                      />
                      <div className="flex flex-col">
                        <span className="text-gray-800 dark:text-gray-200">
                          {person.name}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {person.role}
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
                <div className="mx-2 my-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <Link
                    to="/following"
                    className="py-2.5 px-3 flex items-center gap-3 text-sm cursor-pointer text-gray-600 dark:text-gray-300"
                  >
                    <ChevronDown size={18} className="opacity-70" />
                    <span>View all</span>
                  </Link>
                </div>
              </div>
            </>
          )}

          <div className="py-2 flex flex-col border-t border-gray-100 dark:border-gray-800">
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Account
            </div>
            <div
              className={`mx-2 my-1 rounded-lg transition-colors ${
                isActive("/settings")
                  ? "bg-blue-50 text-blue-600 dark:bg-gray-800 dark:text-blue-400 shadow-inner"
                  : "hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              <Link
                to="/settings"
                className="py-2.5 px-3 flex items-center gap-3 text-sm cursor-pointer"
              >
                <Settings size={18} className="opacity-80" />
                <span>Settings</span>
              </Link>
            </div>
            <div
              className={`mx-2 my-1 rounded-lg transition-colors ${
                isActive("/about")
                  ? "bg-blue-50 text-blue-600 dark:bg-gray-800 dark:text-blue-400 shadow-inner"
                  : "hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              <Link
                to="/about"
                className="py-2.5 px-3 flex items-center gap-3 text-sm cursor-pointer"
              >
                <Flag
                  size={18}
                  className="text-rose-600 dark:text-rose-400 opacity-80"
                />
                <span>About</span>
              </Link>
            </div>
            <div
              className={`mx-2 my-1 rounded-lg transition-colors ${
                isActive("/help")
                  ? "bg-blue-50 text-blue-600 dark:bg-gray-800 dark:text-blue-400 shadow-inner"
                  : "hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              <Link
                to="/help"
                className="py-2.5 px-3 flex items-center gap-3 text-sm cursor-pointer"
              >
                <LifeBuoy
                  size={18}
                  className="text-emerald-600 dark:text-emerald-400 opacity-80"
                />
                <span>Help Center</span>
              </Link>
            </div>
            <div
              className={`mx-2 my-1 rounded-lg transition-colors ${
                isActive("/report-history")
                  ? "bg-blue-50 text-blue-600 dark:bg-gray-800 dark:text-blue-400 shadow-inner"
                  : "hover:bg-gray-50 dark:hover:bg-gray-800"
              }`}
            >
              <Link
                to="/report-history"
                className="py-2.5 px-3 flex items-center gap-3 text-sm cursor-pointer"
              >
                <Flag
                  size={18}
                  className="text-amber-600 dark:text-amber-400 opacity-80"
                />
                <span>Report Issue</span>
              </Link>
            </div>
            <div className="mx-2 my-1 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
              {islogined ? (
                <div
                  className="py-2.5 px-3 flex items-center gap-3 text-sm cursor-pointer"
                  onClick={handleLogout}
                >
                  <UserRoundX
                    size={18}
                    className="text-rose-600 dark:text-rose-400 opacity-80"
                  />
                  <span>Log Out</span>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="py-2.5 px-3 flex items-center gap-3 text-sm cursor-pointer"
                >
                  <User2
                    size={18}
                    className="text-blue-600 dark:text-blue-400 opacity-80"
                  />
                  <span>Sign In</span>
                </Link>
              )}
            </div>
          </div>

          <div className="px-4 py-4 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800">
            <div>
              © 2025 Typeora International
              <br />
              All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Slides);
