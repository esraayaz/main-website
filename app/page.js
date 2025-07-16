"use client";
import Navbar from "@/app/Components/Navbar";
import Header from "@/app/Components/Header";
import About from "@/app/Components/About";
import Projects from "@/app/Components/Projects";
import Contact from "@/app/Components/Contact";
import page from "@/app/Allprojects/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
