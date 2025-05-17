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
    <div className="relative w-full bg-white text-gray-500 font-semibold shadow-sm dark:shadow-gray-800 dark:bg-gray-900  dark:text-gray-400">
      <nav className="flex flex-col sm:flex-row justify-between items-center px-3 text-xs">
        <ul className="hidden sm:flex items-center gap-x-6 *:py-3 *:tracking-wide *:cursor-pointer">
          {categoriesOne.map((item, i) => (
            <li
              key={i}
              className={`rounded-sm ${
                location.pathname === item.path
                  ? "border-cyan-600 text-cyan-600 border-b-4"
                  : ""
              }`}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
          {categoriesTwo.length > 0 && (
            <li className="relative group flex items-center gap-1 cursor-pointer">
              More <ChevronDown size={16} />
              <ul className="absolute dark:bg-gray-900 bg-white left-0 top-full -ml-12 mt-2 z-30 w-40 py-5 rounded-b-lg text-center shadow-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
                {categoriesTwo.map((item, i) => (
                  <li
                    key={i}
                    className="py-3 dark:hover:bg-gray-700 hover:bg-gray-100"
                  >
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          )}
        </ul>

        <div className="w-full sm:w-fit flex flex-row-reverse md:flex-row justify-between sm:justify-end sm:gap-x-3 items-center py-3">
          <div className="hidden sm:flex items-center gap-x-2 cursor-pointer *:px-2">
            <BellRing size={36} />
            <div className="border-l-2 lg:border-x-2">
              {theme === "day" ? (
                <SunMoon
                  className="text-yellow-500 transition-transform duration-300 ease-in-out hover:rotate-[360deg]"
                  onClick={setScreen}
                />
              ) : (
                <Moon
                  onClick={setScreen}
                  className="transition-transform duration-300 ease-in-out hover:rotate-[360deg]"
                />
              )}
            </div>
          </div>
          <div className="lg:hidden cursor-pointer border border-gray-300 border-opacity-30 rounded-full p-1 flex items-center justify-center shadow-sm">
            <AlignRight
              className=" w-7 h-7 sm:w-4 sm:h-4"
              onClick={() => {
                props.sidebar.setsidebarActive(!props.sidebar.sidebarActive);
              }}
            />
          </div>
          <div className="flex sm:hidden lg:flex items-center border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <input
              className="outline-none border-none bg-transparent"
              type="text"
              placeholder="Type to search..."
            />
            <Search />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default memo(Header);
