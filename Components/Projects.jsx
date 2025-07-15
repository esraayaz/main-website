import { workData } from "@/assets/assets";
import Link from "next/link";
import React from "react";
import All_Projects from "./All_Projects";

const Projects = () => {
  return (
    <div id="projects" className="w-full px-[12%] py-20 scroll-mt-20">
      <div className="flex w-full flex-col items-start">
        <div className="flex-auto mx-auto">
          <ul className="grid grid-cols-auto sm:grid-cols-4 gap-8 max-w-5xl">
            {workData.slice(0, 4).map(({ title, description }, index) => (
              <li
                className="text-left border-[0.5px] border-gray-400  p-8 rounded-xl cursor-pointer hover:bg-violet-50 hover:-translate-y-1 duration-500 hover:shadow-[5px_5px_1px_rgba(0,0,0,1)] hover:shadow-black"
                key={index}
              >
                <h3 className="font-semibold text-black">{title}</h3>
                <p className="text-gray-600 text-sm mt-4">{description}</p>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="All_Projects.jsx"
          className="w-max flex items-center justify-centergap-2 text-gray-700 border-[0.5px] border-gray-400 rounded-full py-3 px-10 mx-auto my-20 hover:bg-violet-100 duration-500"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default Projects;
