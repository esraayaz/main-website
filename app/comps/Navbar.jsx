"use client";
import Image from "next/image";
import { gitHub, linkedin, assets } from "@/assets/assets";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <div>
      <nav
        className={`w-full fixed  px-5 md:px-6 lg:px-8 xl:px-[8%] py-8 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-slate-800/80 text-white backdrop-blur-sm shadow-sm"
            : ""
        }`}
      >
        <a href="#header" className="cursor-pointer">
          <Image src={assets.logo_dark} alt="logo" className="w-32" />
        </a>
        <ul
          className={`hidden md:flex  items-center gap-4 lg:gap-8 xl:gap-12 rounded-full px-6 lg:px-8 xl:px-12 py-3 ${
            isScroll
              ? ""
              : "text-white bg-transparent border-1 border-slate-700 shadow-xl"
          }  mx-4`}
        >
          <li>
            <a
              className="hover:text-indigo-400 active:indigo-400 text-sm mx-3 lg:text-base"
              href="#header"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:text-indigo-400 active:indigo-400 text-sm mx-3 lg:text-base"
              href="#about"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              className="hover:text-indigo-400 active:indigo-400 text-sm mx-3 lg:text-base"
              href="#project"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="hover:text-indigo-400 active:indigo-400 text-sm mx-3 lg:text-base"
              href="#blog"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              className="hover:text-indigo-600 active:indigo-600 text-sm mx-3 lg:text-base"
              href="#contact"
            >
              Contact Me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <button className="hidden md:flex cursor-pointer">
            <Image src={assets.sun_icon} alt="moon" className="w-10" />
          </button>
          <button className="block md:hidden cursor-pointer" onClick={openMenu}>
            <Image src={assets.menu_white} alt="menu-black" className="w-6" />
          </button>
        </div>

        {/*-- --------- Mobile Menu --------- --*/}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-5 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen text-white bg-gray-800 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_white}
              alt="close-icon"
              className="w-8 mt-3 cursor-pointer"
            />
          </div>
          <button>
            <Image
              src={assets.sun_icon}
              alt="moon"
              className="md:hidden w-10 mb-4 cursor-pointer"
            />
          </button>
          <li>
            <a onClick={closeMenu} href="#header">
              🏡 Home
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#about">
              🐣 About Me
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#project">
              💻 Projects
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#blog">
              🌱 Blog
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#contact">
              💌 Contact Me
            </a>
          </li>
          <div className="mt-auto pt-8 flex flex-col items-center gap-4">
            <div className="flex justify-center gap-6">
              <div className="flex flex-col">
                <Image
                  src={linkedin}
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="mb-2 ml-2"
                />
                <button className=" px-4 py-2 rounded-lg border-[0.5px] bg-gray-800 border-slate-400 hover:bg-gray-700 active:bg-gray-700 duration-300 text-xs">
                  <a
                    href="https://www.linkedin.com/in/esraayaz/"
                    target="_blank"
                    onClick={closeMenu}
                  >
                    LinkedIn
                  </a>
                </button>
              </div>
              <div className="flex flex-col">
                <Image
                  src={gitHub}
                  alt="GitHub"
                  width={20}
                  height={20}
                  className="mb-2 ml-2"
                />
                <button className="text-slate-200 px-4 py-2 rounded-lg border-[0.5px] bg-gray-800 border-slate-400  hover:bg-gray-700 active:bg-gray-700 duration-300 text-xs">
                  <a
                    href="https://github.com/esraayaz"
                    target="_blank"
                    onClick={closeMenu}
                  >
                    GitHub
                  </a>
                </button>
              </div>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
