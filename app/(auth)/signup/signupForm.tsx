"use client";

import React, { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import InputBox from "@/ui/inputs/input";
import Google from "@/assets/svg/google.svg";
import Apple from "@/assets/svg/apple.svg";
import Facebook from "@/assets/svg/facebook.svg";
import { useRouter } from "next/navigation";

type Props = {};

interface InputField {
  id: number;
  name: string;
  type: string;
  placeholder: string;
  label: string;
  inputmode?: string;
  required?: boolean;
  labelStyle?: string;
}

const inputFields: InputField[] = [
  {
    id: 1,
    name: "fullname",
    type: "text",
    placeholder: "Full name",
    label: "Full name",
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "E-mail",
    label: "E-mail",
  },

  {
    id: 3,
    name: "password",
    type: "password",
    placeholder: "Password (8+ characters)",
    label: "Full name",
  },

  {
    id: 4,
    name: "referral code",
    type: "text",
    placeholder: "Referrer Code",
    label: "Referrer code",
  },
];

export default function SignupForm({}: Props) {
  const router = useRouter();

  return (
    <>
      <section>
        {inputFields.map((input, idx) => (
          <div key={idx} className="my-[3rem]">
            <InputBox
              className="bg-neutral-10 border-[0]  w-[64rem] pl-[1.2rem] py-[2rem] font-normal text-paragraph"
              labelStyle={input.labelStyle}
              label={input.label}
              name={input.name}
              placeholder={input.placeholder}
              type={input.type}
            />
          </div>
        ))}

        <div
          className="
    flex items-center gap-x-[1.1rem]"
        >
          <Checkbox className="h-[3.6rem] w-[3.6rem] rounded-[0.5rem] border-[#d9d9d9] data-[state=checked]:bg-primary-90 data-[state=checked]:text-critical-60 " />
          <label
            htmlFor="terms and conditions"
            className="text-paragraph italic "
          >
            I agree to the data privacy policy
          </label>
        </div>

        <div>
          <Button
            variant="neutral"
            rounded
            fullWidth
            className=" text-white py-[2rem] mt-[5.2rem] mb-[2rem]"
            onClick={() => {}}
          >
            <span className="uppercase text-paragraph ">Sign up </span>
          </Button>
        </div>
        <div className="flex items-center justify-center  gap-x-0">
          <p>Have an account?</p>

          <Button modifier="plain" variant="primary">
            <span className="text-paragraph pl-1 ">Login</span>
          </Button>
        </div>

        {/* Social Buttons //TODO: Make reusable  */}
        <div className=" flex flex-row justify-between gap-[2rem] mt-[5.2rem] pb-[5rem]">
          <Button
            variant="neutral"
            modifier="filled"
            rounded
            className="py-[2rem] w-[20rem] text-center"
          >
            <span className="text-paragraph"> Sign up with Google</span>
          </Button>
          <Button
            variant="neutral"
            modifier="filled"
            rounded
            className="w-[20rem] text-center py-[2rem]"
          >
            <span className="text-paragraph "> Sign up with Facebook</span>
          </Button>

          <Button
            variant="neutral"
            modifier="filled"
            rounded
            className="w-[20rem] text-center py-[2rem]"
            onClick={() => router.push("/login")}
          >
            <span className="text-paragraph "> Sign up with Apple</span>
          </Button>
        </div>
      </section>
    </>
  );
}
