import React, { memo, useContext } from "react";
import { IsAuthnticate } from "../../context/Auth/IsAuth";
import people from "../../assets/images/people.jpg";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import {
  User,
  Settings,
  UserRoundX,
  Newspaper,
  CalendarCheck,
  History,
  Info,
  PhoneCall,
  LifeBuoy,
  UserPen,
  Tv,
  Bookmark,
} from "lucide-react";
function Slides() {
  const { Auth, setAuth } = useContext(IsAuthnticate);

  const location = useLocation();
  const SERVER_URL = process.env.REACT_APP_API_URL;
  const pages = [
    {
      icon: <Newspaper size={18} />,
      path: "/",
      name: "Articles",
    },
    {
      icon: <Tv size={16} />,
      path: "/live-reports",
      name: "Live Reports",
    },
    {
      icon: <Bookmark size={16} />,
      path: "/Saved",
      name: "saved",
    },
    {
      icon: <UserPen size={16} />,
      path: "/opinion",
      name: "Opinion",
    },
    {
      icon: <CalendarCheck size={18} />,
      path: "/events-calendar",
      name: "Special",
    },
    {
      icon: <History size={18} />,
      path: "/history",
      name: "History",
    },
    {
      icon: <Info size={18} />,
      path: "/about",
      name: "About",
    },
    {
      icon: <PhoneCall size={18} />,
      path: "/contact",
      name: "Contact",
    },
    {
      icon: <LifeBuoy size={18} />,
      path: "/help",
      name: "Help & Support",
    },
  ];

  const handleLogout = async () => {
    try {
      const res = await axios.get(`${SERVER_URL}/logout`, {
        withCredentials: true,
      });
      if (res.data?.success) {
        toast.success(res.data?.message);
        setAuth((prev) => ({
          ...prev,
          islogined: false,
        }));
      }
    } catch (err) {
      if (err.response?.data?.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Logout failed");
      }
    }
  };

  return (
    <div className="h-[100vh] font-semibold overflow-hidden text-nowrap bg-white text-gray-500 dark:bg-gray-900  dark:text-gray-400">
      <div className="text-center py-4 text-2xl font-bold text-black dark:text-white">
        Typeora
      </div>
      <div>
        <div className=" px-2 py-3 border-b">
          {Auth.islogined === true ? (
            <Link
              to="/profile"
              className="bg-blue-400 text-white dark:bg-gray-700 dark:textgray-900 dark:opacity-100 opacity-90 cursor-pointer flex items-center justify-center gap-2 border py-2 px-3 rounded-md"
            >
              <div className="images">
                <img
                  src={people}
                  alt=""
                  srcset=""
                  className=" w-10 rounded-full"
                />
              </div>
              <div className="textarea ">
                <h3 className=" text-md font-bold">
                  {Auth.user === null
                    ? "loading..."
                    : Auth?.user?.userFirstname +
                      " " +
                      Auth?.user?.userLastName}
                </h3>
                <p className=" text-xs">Premium Plan</p>
              </div>
            </Link>
          ) : (
            <div className="dark:bg-gray-700 dark:text-gray-300  bg-gray-100 text-gray-600 opacity-90 flex items-center justify-around gap-3 border py-2 px-3 rounded-md  cursor-not-allowed ">
              <div className="images bg-white rounded-full p-2  border border-gray-200 ">
                <User className=" text-gray-400" />
              </div>
              <div className="textarea opacity-60  ">
                <h3 className=" text-md font-semibold">Login</h3>
                <p className=" text-xs">Access Deined</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className=" h-[76vh] hidel_slide_roler overflow-y-scroll">
        <div className="  py-3 flex flex-col gap-y-4 border-b-2">
          {pages.map((item, index) => {
            const isActive = location.pathname.endsWith(item.path);
            return (
              <div
                className={` px-7 ${
                  isActive
                    ? "bg-blue-50 text-cyan-600 border-l-4 border-blue-500 dark:bg-gray-700 dark:text-white dark:border-blue-50"
                    : "text-gray-500 "
                }`}
              >
                <Link
                  to={item.path}
                  key={index}
                  className=" py-2 w-full flex items-center justify-start pl-3 gap-2 text-sm font-medium  cursor-pointer"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </div>
            );
          })}
        </div>
        {Auth.islogined === true ? (
          <div className="px-7 py-3 flex flex-col gap-y-5  text-gray-500 text-xs">
            <Link
              to="/setting"
              className=" flex text-sm font-medium gap-2 pl-3  cursor-pointer"
            >
              <Settings size={20} />
              Setting
            </Link>

            <li
              onClick={handleLogout}
              className=" flex text-sm font-medium gap-2 pl-3 cursor-pointer"
            >
              <UserRoundX size={20} />
              <span>Logout</span>
            </li>
          </div>
        ) : (
          <div className="px-7 py-3 flex flex-col gap-y-5  text-gray-500 text-xs">
            <Link
              to="/setting"
              className=" flex text-sm font-medium gap-2 pl-3 opacity-55 cursor-not-allowed"
            >
              <Settings size={20} />
              Setting
            </Link>

            <Link
              to="/Login"
              className=" flex text-sm font-medium gap-2 pl-3  cursor-pointer"
            >
              <User size={20} />
              <span>Login</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(Slides);
