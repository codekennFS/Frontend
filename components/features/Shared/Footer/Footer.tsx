import Link from "next/link";

import Naira from "@/assets/svg/naira.svg";
import { Facebook, GlobeIcon, Instagram } from "lucide-react";
import React from "react";

const linkBlocks = [
  {
    id: 1,
    heading: "Support",
    links: [
      { id: 1, text: "Lorem ipsum", link: "#" },
      { id: 2, text: "Lorem ipsum", link: "#" },
      { id: 3, text: "Lorem ipsum", link: "#" },
      { id: 4, text: "Lorem ipsum", link: "#" },
      { id: 5, text: "Lorem ipsum", link: "#" },
      { id: 6, text: "Lorem ipsum", link: "#" },
    ],
  },
  {
    id: 2,
    heading: "Community",
    links: [
      { id: 1, text: "Lorem ipsum", link: "#" },
      { id: 2, text: "Lorem ipsum", link: "#" },
      { id: 3, text: "Lorem ipsum", link: "#" },
      { id: 4, text: "Lorem ipsum", link: "#" },
    ],
  },
  {
    id: 3,
    heading: "Hosting",
    links: [
      { id: 1, text: "Lorem ipsum", link: "#" },
      { id: 2, text: "Lorem ipsum", link: "#" },
      { id: 3, text: "Lorem ipsum", link: "#" },
      { id: 4, text: "Lorem ipsum", link: "#" },
      { id: 5, text: "Lorem ipsum", link: "#" },
    ],
  },
  {
    id: 4,
    heading: "About",
    links: [
      { id: 1, text: "Lorem ipsum", link: "#" },
      { id: 2, text: "Lorem ipsum", link: "#" },
      { id: 3, text: "Lorem ipsum", link: "#" },
      { id: 4, text: "Lorem ipsum", link: "#" },
      { id: 5, text: "Lorem ipsum", link: "#" },
      { id: 6, text: "Lorem ipsum", link: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-col p-6 lg:p-8">
      <section className="flex justify-around basis-3/4">
        {linkBlocks.map((linkBlock) => {
          return (
            <div key={linkBlock.id} className="space-y-3">
              <h4 className="font-bold">{linkBlock.heading}</h4>
              <div className="flex flex-col space-y-2">
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
      </section>

      <section className="flex justify-between pt-6 lg:pt-8 mt-6 lg:mt-8 border-t basis-1/4 grow text-[#D8D8D8]">
        <section className="flex items-center gap-2">
          <p>© 2023 Primetasker</p>{" "}
          <div className="w-[2px] aspect-square border rounded-full"></div>{" "}
          <Link href={"#"}>Privacy</Link>
        </section>

        <section className="flex items-center gap-2">
          <GlobeIcon color="#D8D8D8" size={20} />
          <p>English (NG)</p>
          <Naira width={24} height={24} />
          <Facebook color="#D8D8D8" size={20} />
          <Instagram color="#D8D8D8" size={20} />
        </section>
      </section>
    </footer>
  );
};

export default Footer;
