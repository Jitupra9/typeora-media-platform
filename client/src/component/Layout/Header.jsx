import React, { memo, useContext } from "react";
import { Headers } from "../../context/utils/Headercontext";
import { ThemeContext } from "../../context/utils/ThemeProvide";
import {
  BellRing,
  Search,
  ChevronDown,
  Moon,
  SunMoon,
  AlignRight,
  Sparkles,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Header(props) {
  const location = useLocation();
  const { headers } = useContext(Headers);
  const { theme, setTheme } = useContext(ThemeContext);
  const categoriesOne = headers.slice(0, 4);
  const categoriesTwo = headers.slice(4);

  const setScreen = () => {
    setTheme(theme === "day" ? "night" : "day");
  };

  return (
    <div className="relative w-full bg-white text-gray-500 font-semibold shadow-sm dark:shadow-gray-800 dark:bg-gray-900 dark:text-gray-400">
      <nav className="flex flex-col sm:flex-row justify-between items-center px-3 text-xs">
        <div className="flex items-center gap-x-6">
          <Link
            to="/"
            className=" hidden  sm:flex lg:hidden items-center gap-2 py-3 group"
          >
            <Sparkles
              size={20}
              className="text-cyan-600 dark:text-cyan-400 group-hover:rotate-12 transition-transform"
            />
            <span className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-purple-400">
              Typeora
            </span>
          </Link>

          {/* Navigation Items */}
          <ul className="hidden sm:flex items-center gap-x-6 *:py-3 *:tracking-wide *:cursor-pointer">
            {categoriesOne.map((item, i) => (
              <li
                key={i}
                className={`relative group ${
                  location.pathname === item.path
                    ? "text-cyan-600 dark:text-cyan-400"
                    : "hover:text-gray-800 dark:hover:text-gray-200"
                }`}
              >
                <Link to={item.path}>
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-cyan-600 dark:bg-cyan-400 transition-all duration-300 ${
                      location.pathname === item.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
            {categoriesTwo.length > 0 && (
              <li className="relative group flex items-center gap-1 cursor-pointer hover:text-gray-800 dark:hover:text-gray-200">
                More{" "}
                <ChevronDown
                  size={16}
                  className="transition-transform group-hover:rotate-180"
                />
                <ul className="absolute dark:bg-gray-900 bg-white left-0 top-full -ml-12  z-30 w-40 py-2 mt-2 rounded-lg text-center shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 border border-gray-100 dark:border-gray-700">
                  {categoriesTwo.map((item, i) => (
                    <li
                      key={i}
                      className="py-3 dark:hover:bg-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <Link to={item.path} className="block">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            )}
          </ul>
        </div>

        <div className="w-full sm:w-fit flex flex-row-reverse md:flex-row justify-between sm:justify-end sm:gap-x-3 items-center py-3">
          <div className="hidden sm:flex items-center gap-x-2 cursor-pointer *:px-2">
            <BellRing
              size={36}
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            />
            <div className="border-l-2 lg:border-x-2">
              {theme === "day" ? (
                <SunMoon
                  className="text-yellow-500 transition-transform duration-300 ease-in-out hover:rotate-[360deg] hover:text-yellow-600"
                  onClick={setScreen}
                />
              ) : (
                <Moon
                  onClick={setScreen}
                  className="transition-transform duration-300 ease-in-out hover:rotate-[360deg] hover:text-cyan-400"
                />
              )}
            </div>
          </div>
          <div
            onClick={() => {
              props.sidebar.setsidebarActive(!props.sidebar.sidebarActive);
            }}
            className="lg:hidden cursor-pointer border border-gray-300 border-opacity-30 rounded-full p-1 flex items-center justify-center shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <AlignRight className="w-7 h-7 sm:w-4 sm:h-4" />
          </div>
          <div className="flex sm:hidden lg:flex items-center border border-gray-300 rounded-lg px-3 py-2 text-sm hover:border-cyan-600 dark:hover:border-cyan-400 transition-colors">
            <input
              className="outline-none border-none bg-transparent w-32 sm:w-auto placeholder-gray-400 dark:placeholder-gray-500"
              type="text"
              placeholder="Type to search..."
            />
            <Search className="text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default memo(Header);
