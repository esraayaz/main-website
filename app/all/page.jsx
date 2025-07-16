import Navbar from "../comps/Navbar";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { assets, workData } from "@/assets/assets";

const page = () => {
  return (
    <div className="mb-20">
      <Navbar />
      <div id="all-projects" className="w-full px-[12%] py-30 scroll-mt-20">
        <h4 className="text-center mb-2 text-3xl">Projects</h4>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
          You can check out my projects 😇
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {workData.map((project, index) => (
            <div
              key={index}
              className="w-64 aspect-square bg-no-repeat bg-center rounded-lg relative cursor-pointer group transition-all duration-500 grayscale hover:grayscale-0"
              style={{
                backgroundImage: `url(${project.bgImage})`,
                backgroundSize: "contain",
              }}
            >
              <div className="bg-white w-5/6 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="font-semibold">{project.title}</h2>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                  <Image
                    src={assets.send_icon}
                    alt="send-icon"
                    className="w-4"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link
        href="/#project"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-400 rounded-full py-3 px-10 mx-auto hover:bg-violet-100 duration-500"
      >
        Back
      </Link>
    </div>
  );
};

export default page;
