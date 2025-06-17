import React, { memo, useContext, useEffect, useMemo, useState } from "react";
import AllOptions from "../../component/models/AllOptions";
import { Headers } from "../../context/utils/Headercontext";
import { Link } from "react-router-dom";
import bgimg from "../../assets/images/videos.jpg";
import logo from "../../assets/images/logo.png";
import poster from "../../assets/images/videos2.jpg";
import { Dot, EllipsisVertical } from "lucide-react";
function LiveReports() {
  const { setheaders } = useContext(Headers);
  const [ModelOpen, setModelOpen] = useState(null);
  const categories = useMemo(
    () => [
      { path: "/live-reports", name: "All Topic" },
      { path: "/Personal", name: "Personal" },
      { path: "/Travel", name: "Travel" },
      { path: "/Technology", name: "Technology" },
      { path: "/Education", name: "Education" },
      { path: "/Health", name: "Health" },
      { path: "/Fitness", name: "Fitness" },
      { path: "/Finance", name: "Finance" },
      { path: "/Food", name: "Food" },
      { path: "/Lifestyle", name: "Lifestyle" },
      { path: "/Devt", name: "Devt" },
      { path: "/Entertainment", name: "Entertainment" },
      { path: "/Career", name: "Career" },
      { path: "/Creativity", name: "Creativity" },
    ],
    []
  );
  useEffect(() => {
    setheaders(categories);
  }, [categories, setheaders]);
  const handleElips = (e, key) => {
    e.preventDefault();
    setModelOpen((prev) => (prev === key ? null : key));
  };
  return (
    <div className="text-gray-200 dark:text-gray-400 ">
      <h1 className=" hidden sm:block dark:text-white text-black text-xl font-bold mb-3">
        Top This Week
      </h1>
      <div className=" flex flex-wrap justify-between gap-y-3 overflow-hidden h-60 ">
        {[...Array(3)].map((item, key) => (
          <Link
            to={`/watch?id=${key}`}
            className=" border border-gray-800 relative overflow-hidden p-5 flex flex-col   justify-end w-full sm:w-[49%] lg:w-[32%] h-60 rounded-md bg-cover bg-center"
            style={{ backgroundImage: `url(${bgimg})` }}
          >
            <div
              className="absolute bottom-0 inset-0 z-0"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
              }}
            >
              <div className=" absolute bg-black opacity-75 px-2 text-xs py-1 rounded-md right-5 top-3">
                10:12
              </div>
            </div>

            <div className=" z-10 flex flex-col gap-y-2 text-xs">
              <h3 className=" font-semibold text-sm  text-white dark:text-gray-300">
                QUEZY-AGAIN | Artist Spotlight
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, reprehenderit cum asperiores. Error, cum a?
              </p>
              <div className=" flex items-center gap-1 font-semibold">
                <div className="logo">
                  <img
                    src={logo}
                    alt=""
                    srcset=""
                    className=" w-6 h-6 rounded-full"
                  />
                </div>
                <p>SoundShare</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <h1 className="dark:text-white text-black text-xl font-bold my-3">
        Browse
      </h1>
      <div className="flex flex-wrap justify-between gap-y-6">
        {[...Array(12)].map((item, key) => (
          <Link
            to={`/watch?id=${key}`}
            key={key}
            className=" relative w-full cursor-pointer sm:w-[48%] lg:w-[24%] px-2 box-border "
          >
            <div className=" rounded-lg overflow-hidden ">
              <div className=" relative images mb-3">
                <img
                  src={poster}
                  alt="Poster"
                  className="rounded-lg w-full h-auto object-cover"
                />
                <div className=" absolute bg-black opacity-75 px-2 text-xs py-1 rounded-md right-5 bottom-3">
                  10:12
                </div>
              </div>
              <div className="textareas flex gap-3 px-2 pb-3 text-sm">
                <img
                  src={poster}
                  alt="Logo"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex flex-col w-full text-gray-800 dark:text-gray-400">
                  <div className=" flex">
                    <h3 className="font-semibold  dark:text-white">
                      Full Video: Raajhan | Do Patti | Kriti Sanon, Shaheer
                      Sheikh
                    </h3>
                    <div className="">
                      <EllipsisVertical
                        onClick={(e) => {
                          handleElips(e, key);
                        }}
                      />
                    </div>
                  </div>
                  <p className="">Jitu Pradhan</p>
                  <p className=" flex">
                    <span>66k views</span>
                    <Dot />
                    <span>11 days ago</span>
                  </p>
                </div>
              </div>
            </div>
            {ModelOpen === key && (
              <div className=" absolute top-20 right-10 z-10">
                <AllOptions />
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default memo(LiveReports);
