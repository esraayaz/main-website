import { workData } from "@/assets/assets";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div
      id="project"
      className="w-full px-4 sm:px-6 lg:px-8 xl:px-[12%] py-20 scroll-mt-20 min-h-screen"
    >
      <div className="flex w-full flex-col items-center">
        <div className="w-full max-w-6xl">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {workData.slice(0, 4).map(({ title, description }, index) => {
              const colors = [
                "hover:bg-violet-50 active:bg-violet-100",
                "hover:bg-sky-50 active:bg-sky-100",
                "hover:bg-green-50 active:bg-green-100",
                "hover:bg-yellow-50 active:bg-yellow-100",
              ];

              return (
                <li
                  className={`text-left border-[0.5px] border-gray-400 p-6 sm:p-8 rounded-xl cursor-pointer ${colors[index]} hover:-translate-y-1 duration-500 hover:shadow-[5px_5px_1px_rgba(0,0,0,1)] hover:shadow-black min-h-[160px] sm:min-h-[180px] flex flex-col justify-between`}
                  key={index}
                >
                  <h3 className="font-semibold text-black text-base sm:text-lg leading-tight">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-3 sm:mt-4 leading-relaxed">
                    {description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <Link
          href="all"
          className="flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-400 rounded-full py-3 px-10 mx-auto my-20 hover:bg-violet-100 active:bg-violet-100 duration-500"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default page;
