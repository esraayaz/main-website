"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { toast, ToastContainer } from "react-toastify";

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7420d471-6f98-4d7a-b000-db5de3f3dea8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Boom! Message delivered 💥");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  const containerRef = useRef(null);
  const h4Ref = useRef(null);
  const pRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.set([h4Ref.current, pRef.current, formRef.current], {
      x: 100,
      opacity: 0,
    });

    // Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animations in order
    tl.to(h4Ref.current, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    })
      .to(
        pRef.current,
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .to(
        formRef.current,
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      );

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="contact"
      className="w-full min-h-screen px-[12%] py-20 scroll-mt-20 bg-radial-[ellipse_70%_70%_at_50%_50%] from-gray-800 from-2% via-gray-900 to-gray-950 to-90% text-white"
    >
      <h4 ref={h4Ref} className="text-center mb-2 text-3xl">
        Get in Touch
      </h4>
      <p ref={pRef} className="text-center max-w-2xl mx-auto mt-5 mb-12">
        Feel free to contact me
      </p>

      <form ref={formRef} onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-2 gap-6 mt-10 mb-8">
          <input
            name="name"
            className="sm:text-sm flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-transparent"
            type="text"
            placeholder="Your name"
            required
          />
          <input
            name="email"
            className="sm:text-sm flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-transparent"
            type="email"
            placeholder="Your email"
            required
          />
        </div>
        <textarea
          name="message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-transparent mb-6"
          rows="6"
          placeholder="Your message"
          required
        ></textarea>

        <button
          className="py-3 px-8 w-max flex items-center justify-between gap-2 rounded-full mx-auto border-[0.5px] border-gray-400 bg-slate-900/70 hover:bg-slate-800 active:bg-slate-800 duration-500"
          type="submit"
        >
          {result ? result : "Send"}
        </button>
      </form>
      <ToastContainer
        theme="dark"
        toastStyle={{
          backgroundColor: "#000",
          color: "#fff",
        }}
      />
    </div>
  );
};

export default page;
