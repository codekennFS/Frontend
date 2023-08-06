import Link from "next/link";

import Logo from "@/assets/svg/logo.svg";
import React from "react";

type Props = {};

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

export default function Header({}: Props) {
  return (
    <header className="fixed top-0 z-30 flex items-center justify-between w-screen px-8 h-9 text-primary-main bg-reserved-100">
      <Link href="/about" className="font-bold text-heading-6">
        <Logo width={43} height={43} />
      </Link>

      <ul className="items-center hidden gap-8 lg:flex">
        {links.map((link) => {
          return (
            <Link href={link.link} key={link.id}>
              <li>{link.text}</li>
            </Link>
          );
        })}
      </ul>

      <div className="flex items-center gap-3">
        <Link href={"/login"}>Sign-in</Link>|
        <Link href={"/signup"} className="px-6 py-2 bg-white rounded-sm">
          Get started
        </Link>
      </div>
    </header>
  );
}
