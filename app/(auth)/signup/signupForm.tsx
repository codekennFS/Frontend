"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import Apple from "@/assets/svg/apple.svg";
import Facebook from "@/assets/svg/facebook.svg";
import Google from "@/assets/svg/google.svg";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import InputBox from "@/ui/inputs/input";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { SignupSchema } from "../schema/schema";

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
    name: "referralCode",
    type: "text",
    placeholder: "Referrer Code",
    label: "Referrer code",
  },
];

export default function SignupForm({}: Props) {
  const router = useRouter();

  const form = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const [isSuccess, setIsSuccess] = useState(form.formState.isSubmitSuccessful);
  const [isChecked, setIsChecked] = useState(false);

  const oncheck = () => {
    setIsChecked(!isChecked);
  };

  const onSubmit = (data: any) => {
    setIsSuccess(!isSuccess);
    console.log(data);
  };

  return (
    <>
      <section>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {inputFields.map((input, idx) => (
              <FormField
                name={input.name}
                key={idx}
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="mb-[2.5rem]">
                        <InputBox
                          className="bg-neutral-10 border-[0]  w-[64rem] pl-[1.2rem] py-[2rem] font-normal text-paragraph"
                          labelStyle={input.labelStyle}
                          label={input.label}
                          placeholder={input.placeholder}
                          type={input.type}
                          {...field}
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            ))}

            <span className="pb-[1rem] text-[red] text-[medium]">
              {form.formState.errors.email?.message ||
                form.formState.errors.password?.message || form.formState.errors.fullname?.message ||
                form.formState.errors.referralCode?.message}
            </span>

            {isSuccess && (
                  <div className="absolute top-[0%] z-10 w-[100%] h-[100vh] bg-black/[0.05]">
                    <div className=" mt-[3rem] mr-[4rem] lg:mr-[10rem] sm:w-[50%] p-[1rem] float-right md:w-[35%]  h-[fit-content] border-l-4 border-[green] rounded-sm shadow-xl bg-white">
                    <button type="reset" className="float-right" onClick={onSubmit}>✖️</button>
                      <p className=" text-center">Your account has been created Successfully</p> <br />
                    </div>
                  </div>
                )}
            <div className="flex items-center gap-x-[1.1rem] mt-[30px]">
              <Checkbox
                onCheckedChange={oncheck}
                className="h-[3.6rem] w-[3.6rem] rounded-[0.5rem] border-reserved-50 data-[state=checked]:bg-primary-90 data-[state=checked]:text-critical-60"
                required
              />
              <label
                htmlFor="terms and conditions"
                className="italic text-paragraph"
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
                type="submit"
                disabled={isChecked !== true}
              >
                <span className="uppercase text-paragraph ">Sign up </span>
              </Button>
            </div>
          </form>
        </Form>

        <div className="flex items-center justify-center gap-x-0">
          <p>Have an account?</p>

          <Button modifier="plain" variant="primary">
            <Link href="/login" className="pl-1 text-paragraph ">
              Sign in
            </Link>
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
