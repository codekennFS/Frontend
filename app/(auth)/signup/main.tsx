"use client";

import Image from "next/image";
import Link from "next/link";

import Tasker from "@/assets/hero/tasker.png";
import Logo from "@/assets/svg/logo.svg";
import React from "react";

import SignupForm from "./signupForm";

type Props = {};

export default function Main({}: Props) {
  return (
    <section className="flex flex-row w-full">
      <article className="flex items-center justify-center w-screen min-h-screen lg:h-auto lg:w-auto lg:basis-1/2 p-[3rem]">
        <div className="w-full max-w-4xl">
          <div className="flex justify-center">
            <Link href="/">
              <Logo width={63} height={63} />
            </Link>
          </div>

          <div className="my-[1.9rem] space-y-3 text-center lg:text-left">
            <h1 className="text-md font-bold text-brandColor">
              Create a new account
            </h1>
            <p className="hidden lg:block">
              Lorem ipsum dolor sit amet consectetur. A purus nisl eu dignissim
              nec quam.
            </p>
          </div>

          <SignupForm />
        </div>
      </article>

      <div className="justify-end hidden min-h-screen basis-1/2 lg:flex">
        <div className="relative w-4/5 h-full overflow-hidden rounded-bl-max rounded-tl-max">
          <Image src={Tasker} fill placeholder="blur" className="object-cover" alt="A tasker at work" />
        </div>
      </div>
    </section>
  );
}
