import Image from "next/image";
import Link from "next/link";

import Tasker from "@/assets/auth/tasker2.png";
import { Button } from "@/ui/buttons/button";
import React from "react";

const Maintenance = () => {
  return (
    <section className="flex h-screen">
      <div className="flex items-center p-8 lg:p-0 lg:pl-9 lg:basis-1/2">
        <div className="flex flex-col gap-5 text-center lg:text-left">
          <h1 className="text-md lg:text-xl text-critical-60">
            This page is under Maintenance
          </h1>
          <p className="font-extralight text-md">We&apos;re working on it!</p>
          <Link
            href="/"
            className="text-xs text-white py-3 px-8 bg-brandColor rounded-sm w-fit mx-auto lg:mx-0"
          >
            Go to Homepage
          </Link>
        </div>
      </div>

      <div className="justify-end hidden min-h-screen basis-1/2 lg:flex">
        <div className="relative w-4/5 h-full overflow-hidden rounded-bl-max rounded-tl-max">
          <Image src={Tasker} fill placeholder="blur" alt="A tasker at work" />
        </div>
      </div>
    </section>
  );
};

export default Maintenance;
