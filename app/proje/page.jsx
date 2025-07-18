"use client";
import { workData } from "@/assets/assets";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  const projectRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, 4);

    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.set(card, {
          y: -100,
          opacity: 0,
        });

        gsap.to(card, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: projectRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      id="project"
      ref={projectRef}
      className="w-full px-4 sm:px-6 lg:px-8 xl:px-[12%] py-10 sm:py-20 scroll-mt-20 min-h-screen bg-radial-[ellipse_70%_70%_at_50%_50%] from-purple-900 from-2% via-purple-950 to-slate-900 to-90% text-white"
    >
      <div className="flex w-full flex-col items-center">
        <div className="w-full max-w-6xl">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-20">
            {workData.slice(0, 4).map((project, index) => {
              const { title, description } = project;
              const colors = [
                "hover:bg-indigo-300/70 active:bg-indigo-300/70",
                "hover:bg-amber-300/70 active:bg-amber-300/70",
                "hover:bg-emerald-300/70 active:bg-emerald-300/70",
                "hover:bg-fuchsia-300/70 active:bg-fuchsia-300/70",
              ];

              return (
                <li
                  ref={(el) => (cardsRef.current[index] = el)}
                  className={`text-left border-[0.5px] border-gray-400 hover:border-black active:border-black p-6 sm:p-8 rounded-xl cursor-pointer ${colors[index]} hover:-translate-y-1 duration-500 hover:shadow-[10px_10px_1px_rgba(0,0,0,1)] active:shadow-[10px_10px_1px_rgba(0,0,0,1)] hover:text-black active:text-black hover:shadow-black min-h-[160px] sm:min-h-[180px] flex flex-col justify-between`}
                  key={index}
                  onClick={() => {
                    if (project.url) {
                      window.open(project.url, "_blank");
                    }
                  }}
                >
                  <h3 className="font-semibold text-base sm:text-lg leading-tight">
                    {title}
                  </h3>
                  <p className="text-gray-200 text-sm mt-3 sm:mt-4 leading-relaxed">
                    {description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <Link
          href="all"
          className="flex items-center justify-center gap-2 border-[0.5px] border-gray-400 rounded-full py-3 px-10 mx-auto my-20 bg-purple-950/50 hover:bg-purple-800 active:bg-purple-800 duration-500"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default page;
