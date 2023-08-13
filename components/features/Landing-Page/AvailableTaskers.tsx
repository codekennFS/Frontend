import Link from "next/link";

import { Briefcase, Brush, Code, Cross, Home, ShoppingBag, Truck, Tv } from "lucide-react";
import React from "react";

const tasks = [
  {
    id: 1,
    title: "Delivery",
    icon: <Truck color="#FFF" size={60} />,
  },
  {
    id: 2,
    title: "Cleaning",
    icon: <Brush color="#FFF" size={60} />,
  },
  {
    id: 3,
    title: "Home",
    icon: <Home color="#FFF" size={60} />,
  },
  {
    id: 4,
    title: "Media",
    icon: <Tv color="#FFF" size={60} />,
  },
  {
    id: 5,
    title: "Health",
    icon: <Cross color="#FFF" size={60} />,
  },
  {
    id: 6,
    title: "Shopping",
    icon: <ShoppingBag color="#FFF" size={60} />,
  },
  {
    id: 7,
    title: "Tech",
    icon: <Code color="#FFF" size={60} />,
  },
];

const AvailableTaskers = () => {
  return (
    <section className="flex flex-col min-h-screen gap-6 p-6 lg:gap-8 lg:p-8 bg-[#F6F6F6]">
      <h1 className="text-lg">
        Post your first task right away. It&apos;s free.
      </h1>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 grow">
        {tasks.map((task) => {
          return (
            <Link
              key={task.id}
              href={"#"}
              className="relative bg-white border-4 rounded-lg border-[#E2E4EA]"
            >
              <div className="absolute bottom-0 left-0 w-full border-t-4 border-[#E2E4EA] rounded-lg h-1/2"></div>
              <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full w-[10.50rem] aspect-square bg-brandColor top-1/2 left-1/2 grid place-items-center">
                {task.icon}
              </div>
              <p className="absolute left-0 w-full text-sm font-semibold text-center bottom-5 text-brandColor">
                {task.title + " " + "tasks"}
              </p>
            </Link>
          );
        })}
        <Link
          href={"#"}
          className="relative bg-white border-4 rounded-lg border-[#E2E4EA]"
        >
          <div className="absolute bottom-0 left-0 w-full border-t-4 border-[#E2E4EA] rounded-lg h-1/2"></div>
          <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full w-[10.50rem] aspect-square bg-brandColor top-1/2 left-1/2 grid place-items-center">
            <Briefcase color="#FFF" size={60} />
          </div>
          <p className="absolute left-0 w-full text-sm font-semibold text-center bottom-5 text-brandColor">
            Something else
          </p>
        </Link>
      </div>
    </section>
  );
};

export default AvailableTaskers;
