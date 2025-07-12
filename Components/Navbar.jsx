import Image from "next/image";
import { assets } from "@/assets/assets";
import React, { useRef } from "react";

const Navbar = () => {
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <div>
      <nav className="w-full fixed px-4 py-8 lg:px-8 xl:px-[10%] flex items-center justify-between z-50">
        <a href="#top">
          <Image src={assets.logo} alt="logo" className="w-28 cursor-pointer" />
        </a>
        <ul className="hidden md:flex items-center gap-20 lg:gap-25 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#projects">
              Projects
            </a>
          </li>
        </ul>

        <div className="">
          <button className="hidden md:flex">
            <Image src={assets.moon_icon} alt="moon" className="w-6" />
          </button>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="moon" className="w-6" />
          </button>
        </div>

        {/*-- --------- Mobile Menu --------- --*/}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-5 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-fuchsia-100 transition duration-50"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt="close-icon"
              className="w-5 mt-3 cursor-pointer"
            />
          </div>
          <button>
            <Image
              src={assets.moon_icon}
              alt="moon"
              className="md:hidden w-6"
            />
          </button>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#top">
              🏡 Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#about">
              🐣 About Me
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#projects">
              💻 Projects
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#contact">
              💌 Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
