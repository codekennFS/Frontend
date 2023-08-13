import Image from "next/image";
import Link from "next/link";

import Feature1 from "@/assets/hero/feature1.svg";
import Feature2 from "@/assets/hero/feature2.svg";
import Feature3 from "@/assets/hero/feature3.svg";
import Feature4 from "@/assets/hero/feature4.svg";
import Tasker from "@/assets/hero/tasker.png";
import React from "react";

const features = [
  {
    id: 1,
    name: "Post a to-do",
    description:
      "Lorememm fkskfhfyeuejfheururkjd hfhfjeyekegsf Lemsisdhhdjskddd",
    img: <Feature1 width={100} height={100} />,
  },
  {
    id: 2,
    name: "List your skills",
    description:
      "Lorememm fkskfhfyeuejfheururkjd hfhfjeyekegsf Lemsisdhhdjskddd",
    img: <Feature2 width={100} height={100} />,
  },
  {
    id: 3,
    name: "Find an item",
    description:
      "Lorememm fkskfhfyeuejfheururkjd hfhfjeyekegsf Lemsisdhhdjskddd",
    img: <Feature3 width={100} height={100} />,
  },
  {
    id: 4,
    name: "Earn money",
    description:
      "Lorememm fkskfhfyeuejfheururkjd hfhfjeyekegsf Lemsisdhhdjskddd",
    img: <Feature4 width={100} height={100} />,
  },
];

const Hero = () => {
  return (
    <section className="flex flex-col w-full min-h-screen">
      <section className="flex flex-col items-center justify-center h-screen px-6 pb-6 lg:flex-row bg-hero lg:px-8 pt-9 lg:py-0 lg:gap-8">
        <div className="flex flex-col justify-center h-full gap-5 text-white basis-1/2">
          <h1 className="text-xl">
            Manage daily tasks easily anywhere, at all times
          </h1>
          <p className="w-full max-w-[550px] text-paragraph text-reserved-150">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            convallis suscipit nisi, at congue dolor accumsan id. Donec id
            tempor risus. Etiam cursus risus quis luctus luctus. Curabitur
            tempor nec enim
          </p>
          <div className="flex gap-4">
            <Link
              href={"/signup"}
              className="px-8 py-3 rounded-sm bg-brandColor"
            >
              Post a task for free
            </Link>
            <Link href={"/signup"} className="px-8 py-3 border rounded-sm">
              Earn money with ease
            </Link>
          </div>
        </div>

        <div className="flex w-full h-full place-items-center basis-1/2">
          <div className="relative w-[75%] aspect-square ml-4">
            <Image src={Tasker} fill alt="A tasker at work"/>
            <div className="absolute -translate-x-1/2 translate-y-1/2 w-[28rem] h-[20rem] bg-white rounded-sm"></div>
            <div className="absolute -right-[28%] top-0 w-[28rem] h-[25rem] bg-white rounded-sm"></div>
            <div className="absolute h-9 bg-white -right-4 -bottom-5 rounded-sm w-[17rem]"></div>
          </div>
        </div>
      </section>

      <section className="flex items-center py-6 justify-evenly">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-center justify-center space-y-2"
          >
            {feature.img}
            <p className="text-sm font-bold text-center text-brandColor">
              {feature.name}
            </p>
            <p className="max-w-md text-center opacity-60">{feature.description}</p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Hero;
