import { workData } from "@/assets/assets";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div id="project" className="w-full px-[12%] py-20 scroll-mt-20">
      <div className="flex w-full flex-col items-start">
        <div className="flex-auto mx-auto">
          <ul className="grid grid-cols-auto sm:grid-cols-4 gap-6 max-w-6xl">
            {workData.slice(0, 4).map(({ title, description }, index) => {
              const colors = [
                "hover:bg-violet-50",
                "hover:bg-sky-50",
                "hover:bg-green-50",
                "hover:bg-yellow-50",
              ];

              return (
                <li
                  className={`text-left border-[0.5px] border-gray-400 p-8 rounded-xl cursor-pointer ${colors[index]} hover:-translate-y-1 duration-500 hover:shadow-[5px_5px_1px_rgba(0,0,0,1)] hover:shadow-black`}
                  key={index}
                >
                  <h3 className="font-semibold text-black">{title}</h3>
                  <p className="text-gray-600 text-sm mt-4">{description}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <Link
          href="all"
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-400 rounded-full py-3 px-10 mx-auto my-20 hover:bg-violet-100 duration-500"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default page;
