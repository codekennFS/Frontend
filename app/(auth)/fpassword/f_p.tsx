"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import InputBox from "@/ui/inputs/input";

type Props = {};

export default function ForgotPassword({}: Props) {
  return (
    <>
      <div className="w-full mt-[7rem]">
        <InputBox
          className="bg-neutral-10 border-[0]  w-[64rem] pl-[1.2rem] py-[2rem] font-normal text-paragraph rounded"
          name="forgot_password"
          placeholder="Provide us with your registered email"
        />
        <span className="flex justify-end gap-x-1">
          <p>Remember password? </p>
          <Button modifier="plain" variant="primary">
            <Link href="/login" className="text-paragraph"> LOG IN</Link>
          </Button>
        </span>
      </div>
      <Button
        variant="neutral"
        modifier="filled"
        rounded
        className="w-[100%] text-center text-sm py-[2rem] mt-[7rem]"
      >
        Continue
      </Button>
    </>
  );
}
