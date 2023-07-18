"use client";
import Link from "next/link";
import Logo from "@/assets/svg/logo.svg";
import ForgotPassword from "./f_p";

export default function Main() {
  return (
    <>
      <section className="flex flex-row w-full">
        <div className="flex lg:justify-center w-screen min-h-screen py-6 lg:h-auto lg:w-auto lg:basis-1/2 px-[3rem]">
          <div className="w-[90%] max-w-4xl">
            <div className="flex justify-center">
              <Link href="/">
                <Logo width={63} height={63} />
              </Link>
            </div>

            <div className="text-left md:mt-[17rem] sm:mt-[7rem] mt-[7rem]">
              <h1 className="md:text-md font-bold mb-[1.9rem] sm:text-sm">
              Let’s help you reset your password
              </h1>
              <p className="mb-[3rem]">
              This will only take few minutes!
              </p>
            </div>
            <ForgotPassword />
          </div>
        </div>
      </section>
    </>
  );
}
