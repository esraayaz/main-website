"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gitHub, linkedin, assets, workData } from "@/assets/assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  const [isScroll, setIsScroll] = useState(false);

  // Refs for animations
  const titleRef = useRef(null);
  const pRef = useRef(null);
  const projectsRef = useRef(null);
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

    // GSAP Animations
    const tl = gsap.timeline();

    gsap.fromTo(
      [titleRef.current, pRef.current],
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      projectsRef.current.children,
      {
        y: -100,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-radial-[at_50%_25%] from-slate-800 via-slate-900 to-slate-950 to-80% ">
      {/*-- --------- Navbar --------- --*/}
      <div>
        <nav
          className={`w-full fixed px-5 md:px-6 lg:px-8 xl:px-[8%] py-8 flex items-center justify-between z-50 ${
            isScroll ? "bg-black/30 text-white backdrop-blur-sm shadow-sm" : ""
          }`}
        >
          <a href="/#header" className="cursor-pointer">
            <Image src={assets.logo_dark} alt="logo" className="w-32" />
          </a>
          <ul
            className={`hidden md:flex items-center gap-4 lg:gap-8 xl:gap-12 rounded-full px-6 lg:px-8 xl:px-12 py-3 ${
              isScroll
                ? ""
                : "text-white bg-transparent border-1 border-slate-700 shadow-xl"
            }  mx-4`}
          >
            <li>
              <a
                className="hover:text-violet-800 active:text-violet-800 text-sm mx-3 lg:text-base"
                href="/#header"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:text-violet-800 active:text-violet-800 text-sm mx-3 lg:text-base"
                href="/#about"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                className="hover:text-violet-800 active:text-violet-800 text-sm mx-3 lg:text-base"
                href="/#project"
              >
                Projects
              </a>
            </li>
            {/*<li>
              <a
                className="hover:text-violet-800 active:text-violet-800 text-sm mx-3 lg:text-base"
                href="/#blog"
              >
                Blog
              </a>
            </li>
            */}
            <li>
              <a
                className="hover:text-violet-800 active:text-violet-800 text-sm mx-3 lg:text-base"
                href="/#contact"
              >
                Contact Me
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            {/* <button className="hidden md:flex cursor-pointer">
              <Image src={assets.sun_icon} alt="sun" className="w-10" />
            </button> */}
            <button
              className="block md:hidden cursor-pointer"
              onClick={openMenu}
            >
              <Image src={assets.menu_white} alt="menu-black" className="w-6" />
            </button>
          </div>

          {/*----------- Mobile Menu -----------*/}
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
              {/* <Image
                src={assets.sun_icon}
                alt="sun"
                className="md:hidden w-10 mb-4 cursor-pointer"
              /> */}
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
            {/*<li>
                      <a onClick={closeMenu} href="#blog">
                        🌱 Blog
                      </a>
                    </li>*/}
            <li>
              <a onClick={closeMenu} href="#contact">
                💌 Contact
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

      {/*-- --------- All Projects --------- --*/}

      <div
        id="all-projects"
        className="w-full px-4 sm:px-6 lg:px-8 xl:px-[12%] py-20 pt-36"
      >
        <h2
          ref={titleRef}
          className="text-left mb-2 sm:mt-10 mt-15 text-3xl text-white"
        >
          Projects
        </h2>
        <p ref={pRef} className="text-left max-w-2xl t-5 mb-15 text-white">
          You can check out my projects 😇
        </p>

        <div
          ref={projectsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 xl:gap-10"
        >
          {workData.map((project, index) => (
            <div
              key={index}
              className="aspect-square bg-no-repeat bg-center rounded-lg relative cursor-pointer group transition-all duration-500 grayscale hover:grayscale-0 active:grayscale-0 opacity-0 -translate-y-24 scale-75  w-5/6 sm:w-full mx-auto"
              style={{
                backgroundImage: `url(${project.bgImage})`,
                backgroundSize: "cover",
              }}
              onClick={() => window.open(project.url, "_blank")}
            >
              <div className="bg-white w-5/6 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="font-semibold text-sm lg:text-base">
                    {project.title}
                  </h2>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 group-active:bg-lime-300 transition">
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
          className="flex items-center justify-center gap-2 text-white border-[0.5px] border-gray-400 rounded-full py-3 px-10 hover:bg-gray-700 active:bg-gray-700 duration-500"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default page;
