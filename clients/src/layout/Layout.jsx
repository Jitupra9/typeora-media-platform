import React, { memo, useState } from "react";
import Headercontext from "../context/utils/Headercontext.jsx";
import Slides from "../component/Layout/Slides";
import Header from "../component/Layout/Header.jsx";
import { Outlet } from "react-router-dom";
function Layout() {
  const [sidebarActive, setsidebarActive] = useState(false);
  return (
    <Headercontext>
      <div className="flex w-[100vw] h-[100vh] fixed top-0 bg-gray-200 bg-opacity-50 dark:bg-gray-950 ">
        <div className="w-[16%] hidden lg:block">
          <Slides className="" />
        </div>
        <div
          className={`z-20 md:w-[30%] absolute top-0 left-0 h-full border-l-2 border-gray-600 lg:hidden transition-all duration-150 ease-in-out
              ${
                sidebarActive
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }
             
            `}
        >
          <Slides />
        </div>

        <div className=" w-full lg:w-[84%]  flex flex-col">
          <Header sidebar={{ sidebarActive, setsidebarActive }} />
          <div className="px-1 sm:p-5  h-full overflow-y-scroll hidel_slide_roler">
            <Outlet />
          </div>
        </div>
      </div>
    </Headercontext>
  );
}

export default memo(Layout);
