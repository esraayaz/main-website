"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { assets, workData } from "@/assets/assets";

const page = () => {
  const [isScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
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
      {/*-- --------- Navbar --------- --*/}
      <div>
        <nav
          className={`w-full fixed px-5 md:px-6 lg:px-8 xl:px-[8%] py-8 flex items-center justify-between z-50 ${
            isScroll ? "bg-white/60 backdrop-blur-sm shadow-sm" : ""
          }`}
        >
          <button className="block md:hidden cursor-pointer" onClick={openMenu}>
            <Image src={assets.menu_black} alt="menu-black" className="w-6" />
          </button>
          <a href="#header" className="md:flex-none cursor-pointer">
            <Image src={assets.logo} alt="logo" className="w-32" />
          </a>
          <ul
            className={`hidden md:flex items-center gap-4 lg:gap-8 xl:gap-12 rounded-full px-6 lg:px-8 xl:px-12 py-3 ${
              isScroll ? "" : "bg-white/90 shadow-md"
            }  mx-4`}
          >
            <li>
              <a
                className="hover:text-violet-800 active:text-violet-800 text-sm mx-3 lg:text-base"
                href="#header"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:text-violet-800 active:text-violet-800 text-sm mx-3 lg:text-base"
                href="#about"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                className="hover:text-violet-800 active:text-violet-800 text-sm mx-3 lg:text-base"
                href="#project"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="hover:text-violet-800 active:text-violet-800 text-sm mx-3 lg:text-base"
                href="#blog"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="hover:text-violet-800 active:text-violet-800 text-sm mx-3 lg:text-base"
                href="#contact"
              >
                Contact Me
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <button className="hidden md:flex cursor-pointer">
              <Image src={assets.moon_icon} alt="moon" className="w-7" />
            </button>
          </div>

          {/*-- --------- Mobile Menu --------- --*/}
          <ul
            ref={sideMenuRef}
            className="flex md:hidden flex-col gap-5 py-20 px-10 fixed -left-64 top-0 bottom-0 w-64 z-50 h-screen bg-fuchsia-50 transition duration-500"
          >
            <div className="absolute right-6 top-6" onClick={closeMenu}>
              <Image
                src={assets.close_black}
                alt="close-icon"
                className="w-8 mt-3 cursor-pointer"
              />
            </div>
            <button>
              <Image
                src={assets.moon_icon}
                alt="moon"
                className="md:hidden w-8 mb-4 cursor-pointer"
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
          </ul>
        </nav>
      </div>

      {/*-- --------- All Projects --------- --*/}

      <div
        id="all-projects"
        className="w-full px-4 sm:px-6 lg:px-8 xl:px-[12%] py-20 pt-36"
      >
        <h4 className="text-left mb-2 text-3xl">Projects</h4>
        <p className="text-left max-w-2xl t-5 mb-12">
          You can check out my projects 😇
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 xl:gap-10">
          {workData.map((project, index) => (
            <div
              key={index}
              className="aspect-square bg-no-repeat bg-center rounded-lg relative cursor-pointer group transition-all duration-500 grayscale hover:grayscale-0"
              style={{
                backgroundImage: `url(${project.bgImage})`,
                backgroundSize: "cover",
              }}
            >
              <div className="bg-white w-5/6 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="font-semibold text-sm lg:text-base">
                    {project.title}
                  </h2>
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
      <div className="w-full flex justify-center pb-20">
        <Link
          href="/#project"
          className="flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-400 rounded-full py-3 px-10 hover:bg-violet-100 active:bg-violet-100 duration-500"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default page;
