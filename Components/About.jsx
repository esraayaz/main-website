import { infoList } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full px-[12%] py-20 scroll-mt-20">
      <div className="flex w-full flex-col items-start gap-10">
        <div>
          <h1 className="mb-5 text-3xl">Let me introduce myself</h1>
          <p className="text-md mx-auto mb-3">
            I design responsive websites and web applications.
          </p>
          <p className="text-balance leading-8 text-md mx-auto mb-5 ">
            I completed{" "}
            <span className="italic font-semibold">
              Meta Front-End Developer
            </span>{" "}
            course. During this process, I also polished my knowledge with other
            educational platforms such as Scrimba, FreeCodeCamp, Codecademy, and
            Udemy.
          </p>
          <p className="text-md mx-auto ">
            <span className="italic font-semibold">
              I am looking a position
            </span>{" "}
            actively to develop my skills and learn new things ✨
          </p>
        </div>
        <div className="flex-1">
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400  p-6 rounded-xl cursor-pointer hover:bg-fuchsia-50 hover:-translate-y-1 duration-500 hover:shadow-[5px_5px_1px_rgba(0,0,0,1)] hover:shadow-black"
                key={index}
              >
                <Image src={icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
