"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const page = () => {
  const h2Ref = useRef(null);
  const pRef = useRef(null);
  const h1Ref = useRef(null);
  const buttonRef = useRef(null);

  // Typewriter Efect
  const typewriterEffect = (element, text, delay = 0) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        element.textContent = "";
        element.style.opacity = "1";
        let i = 0;
        const typeInterval = setInterval(() => {
          element.textContent += text[i];
          i++;
          if (i >= text.length) {
            clearInterval(typeInterval);
            resolve();
          }
        }, 60);
      }, delay);
    });
  };

  useEffect(() => {
    // Hiding
    gsap.set([h2Ref.current, h1Ref.current], {
      opacity: 0,
    });

    gsap.set(pRef.current, {
      opacity: 0,
    });

    gsap.set(buttonRef.current, {
      y: 50,
      opacity: 0,
    });

    // In Order
    const runAnimations = async () => {
      // 1.
      await typewriterEffect(h2Ref.current, "I'm Esra Ayaz,", 500);
      await typewriterEffect(pRef.current, "a self-made", 300);
      await typewriterEffect(h1Ref.current, "Web Developer", 400);

      // 2.
      const tl = gsap.timeline();
      tl.to(
        buttonRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "sine.out",
        },
        "-=0.6"
      );
    };

    runAnimations();
  }, []);

  return (
    <div
      id="header"
      className="bg-radial-[at_50%_25%] from-slate-800 via-slate-900 to-slate-950 to-90% text-white"
    >
      <div
        className="w-11/12 max-w-4xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
        id="header"
      >
        <div className="w-7/8 ">
          <h2 ref={h2Ref} className="text-2xl mb-5 ">
            I'm Esra Ayaz,
          </h2>
          <p ref={pRef} className="text-slate-500 text-lg mx-auto mb-5">
            a self-made
          </p>
          <h1 ref={h1Ref} className="text-3xl sm:text-4xl lg:text-[55px] mb-10">
            Web Developer
          </h1>
        </div>
        <div>
          <motion.button
            ref={buttonRef}
            className="px-8 py-2.5 rounded-xl relative bg-slate-900 flex items-center gap-3 cursor-pointer hover:bg-slate-800 active:bg-slate-700 duration-500"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            initial={{ "--x": "100%" }}
            animate={{ "--x": "-100%" }}
            transition={{
              repeat: Infinity,
              type: "tween",
              duration: 2,
              ease: "easeOut",
            }}
          >
            <span className="tracking-wide h-full w-full block relative linear-mask">
              Get in Touch
            </span>
            <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default page;
