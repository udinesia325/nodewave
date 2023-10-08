"use client";
import React, { useState } from "react";
import nodewave from "../assets/icons/nodewave.png";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import menu from "../assets/icons/menu.svg";
import x from "../assets/icons/x.svg";

const navbarData = [
  {
    text: "Website",
    href: "#",
  },
  {
    text: "Mobile Apps",
    href: "#howwework",
  },
  {
    text: "Portfolio",
    href: "#portfolio",
  },
  {
    text: "Make an App",
    href: "#",
  },
];
function Navbar() {
  const { scrollY } = useScroll();
  const [open, setOpen] = useState(false);
  const [yPos, setYpos] = useState(0);
  const [activeMenu, setActiveMenu] = useState("#");
  useMotionValueEvent(scrollY, "change", (latest) => {
    setYpos(latest);
  });
  const container = {
    hidden: { rotate: 90 },
    show: {
      rotate: 0,
      transition: {
        delayChildren: 0.5,
      },
    },
  };
  const menuContainer = {
    hidden: {
      height: 0,
      paddingTop: 0,
      paddingBottom: 0,
    },
    show: {
      height: "max-content",
      paddingTop: 20,
      paddingBottom: 20
    },
  };
  return (
    <div className="flex bg-black justify-between items-center px-5 py-3 sticky top-0 z-50 md:bg-transparent">
      <motion.div
        className="hidden md:block h-16 bg-gradient-to-r from-black to-transparent from-90% absolute -z-10 w-1 left-0 right-0 top-0"
        style={{
          width: `${yPos < 100 ? yPos : "100"}%`,
          background: yPos > 100 ? "black" : "",
        }}
      ></motion.div>
      <div className="w-[130px] flex">
        <a href="#" onClick={() =>{
          setActiveMenu("#")
          setOpen(false)
          }}>
          <Image src={nodewave} className="my-auto" alt="nodewave" />
        </a>
      </div>

      {/* only on desktop */}
      <ul className="hidden md:flex gap-x-8 text-sm">
        {navbarData.map((data, index) => (
          <li
            key={index}
            className={`py-2 px-3 rounded-full ${
              data.href == activeMenu && data.text != "Website"
                ? "bg-primary"
                : ""
            }`}
            onClick={() => setActiveMenu(data.href)}
          >
            <a href={data.href}>{data.text}</a>
          </li>
        ))}
      </ul>

      {/* for mobile menu */}
      <motion.div
        variants={container}
        initial="show"
        animate={open ? "hidden" : "show"}
        className="md:hidden"
      >
        {open ? (
          <Image
            src={x}
            alt="menu icon"
            className=""
            onClick={() => setOpen(!open)}
          />
        ) : (
          <Image
            src={menu}
            alt="menu icon"
            className=""
            onClick={() => setOpen(!open)}
          />
        )}
      </motion.div>
      <motion.ul
        variants={menuContainer}
        initial="hidden"
        animate={open ? "show" : "hidden"}
        className="flex flex-col items-start md:hidden gap-x-8 text-sm absolute top-10 left-0 right-0 px-5 pt-8 pb-4 bg-black/80 backdrop-blur-sm overflow-hidden"
      >
        {navbarData.map((data, index) => (
          <li
            key={index}
            className={`py-2 px-3 rounded-full ${
              data.href == activeMenu && data.text != "Website"
                ? "bg-primary"
                : ""
            }`}
            onClick={() => setActiveMenu(data.href)}
          >
            <a href={data.href}>{data.text}</a>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

export default Navbar;
