"use client";
import { motion } from "framer-motion";
import React from "react";

const Header = () => {
  return (
    <div
      id="header"
      className="bg-radial-[at_50%_25%] from-white via-purple-100 to-violet-200 to-90%"
    >
      <div
        className="w-11/12 max-w-4xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
        id="header"
      >
        <div className="w-7/8 ">
          <h2 className="text-2xl mb-5 ">Hi there! I'm Esra Ayaz,</h2>
          <p className="text-lg mx-auto mb-5">a self-made</p>
          <h1 className="text-3xl sm:text-4xl lg:text-[55px] mb-10">
            Front-End Web Developer
          </h1>
          <h2 className="text-xl sm:text-2xl mb-10">📍 Inverness, UK.</h2>
        </div>
        <div>
          <motion.button
            className="px-8 py-2.5 rounded-xl relative bg-white flex items-center gap-3 cursor-pointer"
            initial={{ "--x": "100%" }}
            animate={{ "--x": "-100%" }}
            whileHover={{
              backgroundColor: "#DDD6FF",
            }}
            transition={{
              repeat: Infinity,
              type: "tween",
              duration: 2,
              ease: "easeOut",
            }}
          >
            <span className="tracking-wide h-full w-full block relative linear-mask">
              <a href="#contact">Get in Touch</a>
            </span>
            <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Header;
