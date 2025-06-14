import React, { memo, useContext, useMemo, useEffect, useState } from "react";
import { Headers } from "../../context/utils/Headercontext";
import people from "../../assets/images/people.jpg";
import { IsAuthnticate } from "../../context/Auth/IsAuth";
import { Dot, ListCheck, Flag, Plus } from "lucide-react";
import Personalinfo from "../../component/Page/Personalinfo";
import NewArticle from "../../component/Page/NewArticle";
function Profile() {
  const { setheaders } = useContext(Headers);
  const [isactive, setisactive] = useState("Personal");
  const { Auth } = useContext(IsAuthnticate);
  const skills = ["java", "Python", "React", "Mongo", "Node js"];
  const categories = useMemo(
    () => [
      { path: "/profile", name: "Profile" },
      { path: "live-now", name: "Live now" },
    ],
    []
  );
  const components = (componentName) => {
    switch (componentName) {
      case "Personal":
        return <Personalinfo />;
      case "NewArticle":
        return <NewArticle />;
      default:
        return "Click valid buttom";
    }
  };
  useEffect(() => {
    setheaders(categories);
  }, [setheaders, categories]);
  return (
    <div className=" p-1 sm:p-5  font-semibold  flex justify-between text-gray-700 dark:text-gray-200">
      <div className=" w-full lg:w-[76%] ">
        <div className="header bg-white   p-5 dark:bg-gray-900 rounded-md">
          <div className=" flex py-3 items-center justify-between border-b">
            <div className=" flex items-center sm:gap-4">
              <div className="images bg-gray-600 rounded-full overflow-hidden">
                <img className=" w-10 h-10" src={people} alt="" srcset="" />
              </div>
              <div>
                <h3 className=" font-bold text-lg">
                  {Auth.user.userFirstname + " " + Auth.user.userFirstname}
                </h3>
                <p className=" text-gray-500 text-sm">
                  sr.full stack Devloper <Dot className=" inline-block" />{" "}
                  <span>{Auth.user.userEmail}</span>
                </p>
              </div>
            </div>
            <button
              className=" hidden sm:block text-sm dark:shadow-md bg-gray-200 dark:bg-gray-700  dark:shadow-gray-700   px-2 py-1 rounded-md
          "
            >
              Complete Profiles
            </button>
          </div>
          <div className=" py-3 text-sm flex items-center gap-16 *:flex *:flex-col  *:gap-y-2   ">
            <div>
              <p className=" text-gray-400 ">Location</p>
              <h3 className=" font-semibold ">{Auth.user.userlocation}</h3>
            </div>
            <div>
              <p className=" text-gray-400 ">Company</p>
              <h3 className=" font-semibold ">Web Bocket</h3>
            </div>
            <div>
              <p className=" text-gray-400"> Avilable</p>
              <h3 className=" font-semibold ">20 Hours / Week</h3>
            </div>
            <div>
              <p className=" text-gray-400">Status</p>
              <p className="  px-2 py-1 text-xs bg-green-100 dark:bg-green-800 dark:text-white border border-gray-100 dark:border-green-600   text-green-400 rounded-md">
                Active
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="catogories bg-white dark:bg-gray-900  mt-10 p-5 rounded-md">
            <ul className="*:cursor-pointer *:px-2 *:py-1 flex gap-10 items-center">
              <li
                onClick={() => {
                  setisactive("Personal");
                }}
                className={`${
                  isactive === "Personal"
                    ? "bg-gray-200 dark:bg-gray-700 rounded-md"
                    : ""
                }`}
              >
                Personal
              </li>
              <li
                className={`  ${
                  isactive === "NewArticle"
                    ? "bg-gray-200 dark:bg-gray-700 rounded-md "
                    : ""
                }`}
                onClick={() => {
                  setisactive("NewArticle");
                }}
              >
                Article
              </li>
              <li
                onClick={() => {
                  setisactive("Videos");
                }}
              >
                Videos
              </li>
              <li
                onClick={() => {
                  setisactive("NewLives");
                }}
              >
                Lives
              </li>
            </ul>
            <div className="mt-5 text-left text-xs font-semibold  bg-white dark:bg-gray-900  rounded-md h-full ">
              {components(isactive)}
            </div>
          </div>
        </div>
      </div>
      <div className=" hidden lg:block lg:w-[22%]">
        <div className="p-5 bg-white rounded-md dark:bg-gray-900">
          <div className="header-checklist flex items-center gap-x-3">
            <ListCheck className=" w-4 h-4" /> <p>Checklist</p>
          </div>

          <div className="mt-10 space-y-7 *:flex *:items-start  *:gap-x-3 text-sm">
            <div className="">
              <input
                className=" w-4 h-4 accent-gray-800  dark:accent-gray-400"
                type="checkbox"
                checked
              />
              <span className="line-through">Create Profile</span>
            </div>
            <div className="">
              <input
                className=" w-4 h-4 accent-gray-800  dark:accent-gray-400"
                type="checkbox"
                checked
              />
              <div>
                <p className="line-through">Post Articles</p>
                <p className="text-xs mt-1 text-gray-500">
                  Upload Articles on Typeora
                </p>
              </div>
            </div>
            <div className="">
              <input
                className=" w-4 h-4 accent-gray-800  dark:accent-gray-400"
                type="checkbox"
                checked
              />
              <div>
                <p className="line-through">Complete Profile</p>
                <p className="text-xs mt-1 text-gray-500">
                  Fillup all personal information
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 mt-10 bg-white rounded-md dark:bg-gray-900">
          <div className="header-checklist justify-between items-center *:flex *:gap-x-3  *:items-center flex ">
            <div>
              <Flag className=" w-5 h-5" /> Skills
            </div>
            <div className=" cursor-pointer bg-gray-200 p-1 rounded-full dark:bg-gray-950">
              <Plus className=" w-5 h-5 cursor-pointer" />
            </div>
          </div>

          <div className="mt-5 pt-4 text-xs  flex flex-wrap gap-4 ">
            {skills.map((item, i) => (
              <span
                className=" bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md"
                key={i}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Profile);
