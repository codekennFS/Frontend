"use client";

import { useRouter } from "next/navigation";

import Apple from "@/assets/svg/apple.svg";
import Facebook from "@/assets/svg/facebook.svg";
import Google from "@/assets/svg/google.svg";
import { Button } from "@/components/ui/button";
import InputBox from "@/ui/inputs/input";

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
    name: "email",
    type: "email",
    placeholder: "E-mail",
    label: "E-mail",
  },
  {
    id: 2,
    name: "password",
    type: "password",
    placeholder: "Password (8+ characters)",
    label: "Full name",
  },
];

export default function LoginForm({}: Props) {
  const router = useRouter();

  return (
    <>
      <section>
        {inputFields.map((input, idx) => (
          <div key={idx} className="my-[2.5rem]">
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

        <div className="flex items-center justify-end mb-5 gap-x-0">
          <Button modifier="plain" variant="primary">
            <span className="pl-1 text-paragraph ">Forgot password?</span>
          </Button>
        </div>

        <div>
          <Button
            variant="neutral"
            rounded
            fullWidth
            className=" text-white py-[2rem] mb-[2rem]"
            onClick={() => {}}
          >
            <span className="uppercase text-paragraph ">Sign in </span>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-x-0">
          <p>Don&apos;t have an account?</p>

          <Button modifier="plain" variant="primary">
            <span className="pl-1 text-paragraph ">Sign up</span>
          </Button>
        </div>

        <div className="flex items-center justify-center mt-5 gap-x-4">
          <div className="w-full h-one bg-black"></div>
          <p>OR</p>
          <div className="w-full h-one bg-black"></div>
        </div>

        {/* Social Buttons //TODO: Make reusable  */}
        <div className=" flex flex-row justify-between gap-[2rem] mt-5">
          <Button
            variant="neutral"
            modifier="filled"
            rounded
            className="py-[2rem] w-[20rem] text-center"
          >
            <span className="text-paragraph"> Sign in with Google</span>
          </Button>

          <Button
            variant="neutral"
            modifier="filled"
            rounded
            className="w-[20rem] text-center py-[2rem]"
          >
            <span className="text-paragraph "> Sign in with Facebook</span>
          </Button>

          <Button
            variant="neutral"
            modifier="filled"
            rounded
            className="w-[20rem] text-center py-[2rem]"
            onClick={() => router.push("/login")}
          >
            <span className="text-paragraph "> Sign in with Apple</span>
          </Button>
        </div>
      </section>
    </>
  );
}
