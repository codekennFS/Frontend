"use client";

import Link from "next/link";

import Logo from "@/assets/svg/logo.svg";
import React, { useEffect, useState } from "react";

const links = [
  {
    id: 1,
    text: "About",
    link: "/about",
  },
  {
    id: 2,
    text: "Post a to-do",
    link: "/postYourProduct",
  },
  {
    id: 3,
    text: "Categories",
    link: "/categories",
  },
  {
    id: 4,
    text: "How it works",
    link: "howItWorks",
  },
];

export default function Header() {
  const [topPosition, setTopPosition] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setTopPosition(false);
      } else {
        setTopPosition(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-30 flex items-center justify-between w-screen px-8 h-[80px] duration-100 ${
        topPosition ? "bg-transparent text-white" : "bg-white text-black"
      }`}
    >
      <Link href="/about" className="font-bold text-heading-6">
        <Logo width={43} height={43} />
      </Link>

      <nav>
        <ul className="items-center hidden gap-8 lg:flex">
          {links.map((link) => {
            return (
              <Link href={link.link} key={link.id}>
                <li>{link.text}</li>
              </Link>
            );
          })}
        </ul>
      </nav>

      <div className="flex items-center gap-3">
        <Link href={"/login"}>Sign-in</Link>|
        <Link
          href={"/signup"}
          className="px-6 py-2 text-white rounded-sm bg-brandColor"
        >
          Get started
        </Link>
      </div>
    </header>
  );
}
