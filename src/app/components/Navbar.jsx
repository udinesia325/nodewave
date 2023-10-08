"use client";
import React, { useState } from "react";
import nodewave from "../assets/icons/nodewave.png";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const navbarData = [
  {
    text: "Website",
    href: "#",
    active: false,
  },
  {
    text: "Mobile Apps",
    href: "#",
    active: false,
  },
  {
    text: "Portfolio",
    href: "#",
    active: false,
  },
  {
    text: "Make an App",
    href: "#",
    active: true,
  },
];
function Navbar() {
  const { scrollY } = useScroll();
  const [yPos, setYpos] = useState(0);
  useMotionValueEvent(scrollY, "change", (latest) => {
    setYpos(latest);
  });
  return (
    <div className="flex justify-between items-center px-5 pt-3 sticky top-0 z-50">
      <motion.div
        className="h-16 bg-gradient-to-r from-black to-transparent from-90% absolute -z-10 w-1 left-0 right-0 top-0"
        style={{
          width: `${yPos < 100 ? yPos : "100"}%`,
          background: yPos > 100 ? "black" : "",
        }}
      ></motion.div>
      <div className="w-[130px] flex">
        <Image src={nodewave} className="my-auto" alt="nodewave" />
      </div>

      <ul className="flex gap-x-8 text-sm">
        {navbarData.map((data, index) => (
          <li
            key={index}
            className={`py-2 px-3 rounded-full ${
              data.active ? "bg-primary" : ""
            }`}
          >
            <a href={data.href}>{data.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
