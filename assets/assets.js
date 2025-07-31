// -------------------------- LOGO -------------------------- //
import logo from "./logo.svg";
import logo_dark from "./logo_dark.svg";

// -------------------------- ICONS -------------------------- //
import right_arrow_white from "./right-arrow-white.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

// -------------------------- TECH ICONS -------------------------- //
import Bootstrap from "./Bootstrap.png";
import Canva from "./Canva.png";
import CSS from "./CSS.png";
import Figma from "./Figma.png";
import GitHub from "./GitHub.png";
import HTML from "./HTML.png";
import JavaScript from "./JavaScript.png";
import Linkedin from "./Linkedin.png";
import Next from "./Next.png";
import Tailwind from "./Tailwind.png";
import React from "./React.png";

export const assets = {
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const techIcon = {
  Bootstrap,
  Canva,
  CSS,
  Figma,
  HTML,
  JavaScript,
  Next,
  Tailwind,
  React,
};

export const linkedin = Linkedin;

export const gitHub = GitHub;

export const categories = [
  "UX/UI Design",
  "Front-End Projects",
  "Advanced Projects",
  "Micro Projects",
];

// Function grouping projects by categories
export const getProjectsByCategory = () => {
  return categories.reduce((acc, category) => {
    acc[category] = workData.filter((project) => project.category === category);
    return acc;
  }, {});
};

export const workData = [
  {
    title: "Figma Prototype",
    description: "Food Delivery App | Figma",
    bgImage: "/work_1.png",
    url: "https://www.figma.com/design/RmTG5VmXeg1b4TEmzsbn8N/Little-Lemon-Prototype?node-id=0-1&t=fnObPAE59nZQZSFB-1",
    category: "UX/UI Design",
  },
  {
    title: "Calculator",
    description: "React + CSS",
    bgImage: "/work_2.png",
    url: "https://venerable-fudge-23278b.netlify.app/",
    category: "Front-End Projects",
  },
  {
    title: "Agency Website",
    description: "React + Tailwind + Framer Motion",
    bgImage: "/work_3.png",
    url: "https://moonlit-sundae-393839.netlify.app/",
    category: "Advanced Projects",
  },
  {
    title: "Task Manager",
    description: "HTML + CSS + JS + Tailwind",
    bgImage: "/work_8.png",
    url: "https://admirable-caramel-242cd9.netlify.app/",
    category: "Front-End Projects",
  },
  {
    title: "Registration Component",
    description: "React + CSS",
    bgImage: "/work_4.png",
    url: "https://monumental-haupia-eae978.netlify.app/",
    category: "Front-End Projects",
  },
  {
    title: "To-Do App",
    description: "JS + CSS + HTML",
    bgImage: "/work_5.png",
    url: "https://incandescent-monstera-580c26.netlify.app/",
    category: "Micro Projects",
  },
  {
    title: "Loading Bar",
    description: "HTML + CSS + JS",
    bgImage: "/work_7.png",
    url: "https://gorgeous-otter-d34d6f.netlify.app/",
    category: "Micro Projects",
  },
  {
    title: "Recipe Website",
    description: "JS + CSS + HTML",
    bgImage: "/work_6.png",
    url: "https://musical-paletas-41c815.netlify.app/",
    category: "Micro Projects",
  },
];
