"use client";

import Image from "next/image";
import Link from "next/link";

import Tasker from "@/assets/hero/tasker.png";
import Logo from "@/assets/svg/logo.svg";
import SocialSignup from "@/components/features/Shared/SocialSignup";
import { Button } from "@/ui/buttons/button";
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

            <div className="text-center lg:text-left my-[1.9rem] space-y-3">
              <h1 className="text-md font-bold text-brandColor">
                Forgot password
              </h1>
              <p className="hidden lg:block">
                This will only take few minutes!
              </p>
              <div className="lg:hidden flex items-center justify-center gap-x-0">
                <p>Remember your password?</p>

                <Button modifier="plain" variant="primary">
                  <Link
                    href="/login"
                    className="pl-1 text-paragraph text-brandColor"
                  >
                    Sign in
                  </Link>
                </Button>
              </div>

              <span className="lg:hidden">
                <SocialSignup />
              </span>
            </div>

            <ForgotPasswordForm />
          </div>
        </article>

        <div className="justify-end hidden min-h-screen basis-1/2 lg:flex">
          <div className="relative w-4/5 h-full overflow-hidden rounded-bl-max rounded-tl-max">
            <Image
              src={Tasker}
              fill
              placeholder="blur"
              alt="A tasker at work"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
