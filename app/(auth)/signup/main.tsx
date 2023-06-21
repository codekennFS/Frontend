"use client";
import React from "react";
import SignupForm from "./signupForm";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/svg/logo.svg";

type Props = {};

export default function Main({}: Props) {
  return (
    <section className="flex flex-row w-full  ">
      <article className="pl-[7rem] lg:max-w-[84rem] pr-[13rem] pt-[3.3rem]">
        <div className="flex justify-center">
          <Link href="/">
            <Logo width={63} height={63} />
          </Link>
        </div>

        <div className="text-center mt-[1.9rem]">
          <h1 className="text-md font-bold mb-[1.9rem]">Create your account</h1>
          <p className="mb-[6.3rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus at
            quos quidem ex temporibus expedita doloribus eveniet
          </p>
        </div>

        <SignupForm />
      </article>
      <div className="min-h-screen flex flex-col">
        <div className="h-full bg-neutral-20 flex-1"></div>
      </div>
    </section>
  );
}
