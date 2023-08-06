"use client";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/svg/logo.svg";
import React from "react";

import ForgotPasswordForm from "./forgotPasswordForm";

export default function Main() {
  return (
    <>
      <section className="flex flex-row w-full">
        <article className="flex items-center justify-center w-screen min-h-screen py-6 lg:h-auto lg:w-auto lg:basis-1/2 px-[3rem]">
          <div className="w-full max-w-4xl">
            <div className="flex justify-center">
              <Link href="/">
                <Logo width={63} height={63} />
              </Link>
            </div>

            <div className="text-center mt-[1.9rem]">
              <h1 className="text-md font-bold mb-[1.9rem]">
                Let&apos;s help you reset your password
              </h1>
              <p className="mb-[1.9rem]">This will only take few minutes!</p>
            </div>
            <ForgotPasswordForm />
          </div>
        </article>

        <div className="flex-col hidden min-h-screen basis-1/2 lg:flex">
          <div className="flex-1 h-full bg-neutral-20"></div>
        </div>
      </section>
    </>
  );
}
