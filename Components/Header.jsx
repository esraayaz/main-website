import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div className="w-7/8">
        <h1 className="text-xl md:text-2xl mb-10 font-Ovo">
          Hi there! I'm Esra Ayaz
        </h1>
        <h1 className="text-3xl sm:text-4xl lg:text-[55px] mb-10 font-Ovo">
          Front-End Web Developer
        </h1>
        <h1 className="text-2xl sm:text-4xl lg:text-[30px] mb-10 font-Ovo">
          📍 Inverness, UK.
        </h1>
        <p className="text-lg mx-auto mb-3 font-Ovo">
          I am a self-made web developer. I design responsive websites and web
          applications.
        </p>
        <p className="text-lg mx-auto mb-5 font-Ovo">
          I completed <span className="italic font-semibold">Meta's </span>
          <span className="italic font-bold">Front-End Developer</span> course.
          During this process, I also polished my knowledge with other
          educational platforms such as{" "}
          <span className="italic font-semibold">
            Scrimba, FreeCodeCamp, Codecademy, and Udemy.
          </span>
        </p>
        <p className="text-lg mx-auto mb-3 font-Ovo">
          I am actively seeking a position to develop my skills and learn new
          things ✨
        </p>
      </div>
      <a
        href="#contact"
        className="hidden max-w-45 lg:flex items-center gap-4 px-8 py-1.5 border border-gray-500 rounded-full ml-4 font-Ovo hover:bg-violet-100 active:bg-violet-200"
      >
        Contact Me <Image src={assets.arrow_icon} alt="arrow" className="w-3" />
      </a>
    </div>
  );
};

export default Header;
