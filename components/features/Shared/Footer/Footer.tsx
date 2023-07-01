import Link from "next/link";

import Logo from "@/assets/svg/logo.svg";
import React from "react";

const linkBlocks = [
  {
    id: 1,
    heading: "How it works",
    links: [
      { id: 1, text: "Lorem ipsum", link: "" },
      { id: 2, text: "Lorem ipsum", link: "" },
      { id: 3, text: "Lorem ipsum", link: "" },
    ],
  },
  {
    id: 2,
    heading: "Post your product",
    links: [
      { id: 1, text: "Lorem ipsum", link: "" },
      { id: 2, text: "Lorem ipsum", link: "" },
      { id: 3, text: "Lorem ipsum", link: "" },
      { id: 4, text: "Lorem ipsum", link: "" },
    ],
  },
  {
    id: 3,
    heading: "Categories",
    links: [
      { id: 1, text: "Lorem ipsum", link: "" },
      { id: 2, text: "Lorem ipsum", link: "" },
      { id: 3, text: "Lorem ipsum", link: "" },
    ],
  },
  {
    id: 4,
    heading: "About",
    links: [
      { id: 1, text: "Lorem ipsum", link: "" },
      { id: 2, text: "Lorem ipsum", link: "" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="p-6 lg:p-8 lg:pt-0">
      <section className="flex flex-col lg:flex-row gap-5 lg:gap-0 lg:h-[368px] bg-reserved-50 rounded-md md:p-7 lg:py-8 lg:px-9">
        <div className="space-y-4 basis-1/2">
          <Link href="/home">
            <div className="w-6 aspect-square text-[7.8px] grid place-items-center rounded-full bg-reserved-200">
              LOGO
            </div>
          </Link>
          <p className="max-w-xl text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            convallis suscipit nisi, at congue dolor
          </p>
          <div className="h-4 bg-black w-[200px]"></div>
        </div>
        <div className="flex justify-between basis-3/4">
          {linkBlocks.map((linkBlock) => {
            return (
              <div key={linkBlock.id} className="space-y-3">
                <h4 className="font-bold">{linkBlock.heading}</h4>
                <div className="flex flex-col space-y-2 text-xs">
                  {linkBlock.links.map((link) => {
                    return (
                      <Link key={link.id} href={link.link}>
                        {link.text}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
