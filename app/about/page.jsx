"use client";
import { gitHub, linkedin, techIcon } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const page = () => {
  const techIcons = Object.entries(techIcon);

  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const textRefs = useRef([]);
  const circleRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    // Hiding
    gsap.set(containerRef.current, {
      y: 100,
      opacity: 0,
    });

    // Timeline
    const tl = gsap.timeline({
      delay: 0.2,
    });

    // Animation
    tl.to(containerRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
    })

      .from(
        titleRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.8"
      )

      //
      .from(
        textRefs.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.6"
      )

      //
      .from(
        circleRef.current,
        {
          scale: 0,
          rotation: 180,
          opacity: 0,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=0.8"
      )

      // Social media butonları
      .from(
        socialRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      );

    // Cleanup
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      id="about"
      className="w-full px-4 sm:px-6 lg:px-[12%] py-10 sm:py-20 scroll-mt-20 min-h-screen"
    >
      <div
        ref={containerRef}
        className="flex flex-col lg:flex-row w-full items-center justify-between gap-10 lg:gap-20"
      >
        {/* Content Section */}
        <div
          ref={contentRef}
          className="flex-1 text-base sm:text-lg order-1 lg:order-1"
        >
          <h1
            ref={titleRef}
            className="my-5 text-2xl sm:text-3xl text-center lg:text-left"
          >
            Me
          </h1>

          <p ref={(el) => (textRefs.current[0] = el)} className="text-xl my-10">
            📍 Inverness, UK
          </p>

          <p
            ref={(el) => (textRefs.current[1] = el)}
            className="text-balance leading-6 sm:leading-8 mb-5 w-full lg:w-10/12 text-left lg:text-left"
          >
            I completed{" "}
            <span className="italic font-semibold">
              Meta Front-End Developer
            </span>{" "}
            course and during this process, I also polished my knowledge with
            other platforms such as Scrimba, FreeCodeCamp, Codecademy, and
            Udemy.
          </p>

          <p
            ref={(el) => (textRefs.current[2] = el)}
            className="text-left lg:text-left mb-10 lg:mb-0"
          >
            <span className="italic font-semibold">
              I am looking a position
            </span>{" "}
            actively to develop my skills and gaining experience ✨
          </p>

          {/* Desktop - Social Media */}
          <div
            ref={socialRef}
            className="hidden lg:flex my-10 justify-start max-w-60 gap-10"
          >
            <div className="flex flex-col items-center">
              <div>
                <Image
                  className="my-4"
                  src={linkedin}
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </div>
              <button className="px-8 py-2.5 rounded-xl bg-sky-50 flex items-center gap-3 cursor-pointer hover:bg-sky-100 active:bg-sky-100 duration-500 text-base">
                <a href="https://www.linkedin.com/in/esraayaz/" target="_blank">
                  Linkedin
                </a>
              </button>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <Image
                  className="my-4"
                  src={gitHub}
                  alt="GitHub"
                  width={20}
                  height={20}
                />
              </div>
              <button className="px-8 py-2.5 rounded-xl bg-slate-50 flex items-center gap-3 cursor-pointer hover:bg-slate-100 active:bg-slate-100 duration-500 text-base">
                <a href="https://github.com/esraayaz" target="_blank">
                  GitHub
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Rotating Circle */}
        <div ref={circleRef} className="flex-shrink-0 order-2 lg:order-2">
          {/* Mobile Circle */}
          <div className="relative w-52 h-52 group block sm:hidden">
            <div
              className="absolute inset-0 animate-spin group-hover:[animation-play-state:paused]"
              style={{ animationDuration: "50s" }}
            >
              {techIcons.map(([name, src], index) => {
                const angle = (360 / techIcons.length) * index;
                const radius = 100; // Mobile radius
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <div
                    key={name}
                    className="absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-125"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                    }}
                  >
                    <div
                      className="w-full h-full animate-spin group-hover:[animation-play-state:paused]"
                      style={{
                        animationDuration: "50s",
                        animationDirection: "reverse",
                      }}
                    >
                      <Image
                        src={src}
                        alt={name}
                        width={32}
                        height={32}
                        className="w-full h-full object-contain duration-300"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div id="light"></div>
          </div>

          {/* Tablet Circle */}
          <div className="relative w-72 h-72 group hidden sm:block lg:hidden">
            <div
              className="absolute inset-0 animate-spin group-hover:[animation-play-state:paused]"
              style={{ animationDuration: "50s" }}
            >
              {techIcons.map(([name, src], index) => {
                const angle = (360 / techIcons.length) * index;
                const radius = 130; // Tablet radius
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <div
                    key={name}
                    className="absolute w-10 h-10 transform -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-150"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                    }}
                  >
                    <div
                      className="w-full h-full animate-spin group-hover:[animation-play-state:paused]"
                      style={{
                        animationDuration: "50s",
                        animationDirection: "reverse",
                      }}
                    >
                      <Image
                        src={src}
                        alt={name}
                        width={40}
                        height={40}
                        className="w-full h-full object-contain duration-300"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div id="light"></div>
          </div>

          {/* Desktop Circle */}
          <div className="relative w-80 h-80 group hidden lg:block">
            <div
              className="absolute inset-0 animate-spin group-hover:[animation-play-state:paused]"
              style={{ animationDuration: "50s" }}
            >
              {techIcons.map(([name, src], index) => {
                const angle = (360 / techIcons.length) * index;
                const radius = 160; // Desktop radius
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <div
                    key={name}
                    className="absolute w-12 h-12 transform -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-150"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                    }}
                  >
                    <div
                      className="w-full h-full animate-spin group-hover:[animation-play-state:paused]"
                      style={{
                        animationDuration: "50s",
                        animationDirection: "reverse",
                      }}
                    >
                      <Image
                        src={src}
                        alt={name}
                        width={48}
                        height={48}
                        className="w-full h-full object-contain duration-300"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div id="light"></div>
          </div>
        </div>

        {/* Mobile/Tablet - Social Media */}
        <div className="mt-10 flex lg:hidden order-3 w-full">
          <div
            ref={(el) => !socialRef.current && (socialRef.current = el)}
            className="flex justify-center max-w-full gap-4 sm:gap-10 mx-auto"
          >
            <div className="flex flex-col items-center">
              <div>
                <Image
                  className="my-2 sm:my-4"
                  src={linkedin}
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </div>
              <button className="px-3 sm:px-6 py-2 sm:py-2.5 rounded-xl border-[0.5px] border-sky-100 bg-sky-50 flex items-center gap-2 sm:gap-3 cursor-pointer hover:bg-sky-100 active:bg-sky-100 duration-500 text-sm sm:text-base">
                <a href="https://www.linkedin.com/in/esraayaz/" target="_blank">
                  Linkedin
                </a>
              </button>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <Image
                  className="my-2 sm:my-4"
                  src={gitHub}
                  alt="GitHub"
                  width={20}
                  height={20}
                />
              </div>
              <button className="px-3 sm:px-6 py-2 sm:py-2.5 rounded-xl border-[0.5px] border-slate-100 bg-slate-50 flex items-center gap-2 sm:gap-3 cursor-pointer hover:bg-slate-100 active:bg-slate-100 duration-500 text-sm sm:text-base">
                <a href="https://github.com/esraayaz" target="_blank">
                  GitHub
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
