"use client";

import Link from "next/link";

import Google from "@/assets/svg/google.svg";
import SocialSignup from "@/components/features/Shared/SocialSignup";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/ui/buttons/button";
import InputBox from "@/ui/inputs/input";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { SignupSchema } from "../schema/schema";

interface InputField {
  id: number;
  name: "fullname" | "email" | "password" | "referralCode";
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
    placeholder: "Your full name",
    label: "Full name",
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Your e-mail",
    label: "E-mail",
  },

  {
    id: 3,
    name: "password",
    type: "password",
    placeholder: "Your password",
    label: "Password (8+ characters)",
  },

  {
    id: 4,
    name: "referralCode",
    type: "text",
    placeholder: "Referrer Code",
    label: "Referrer code",
  },
];

export default function SignupForm() {
  const form = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const [isSuccess, setIsSuccess] = useState(form.formState.isSubmitSuccessful);
  const [isChecked, setIsChecked] = useState(false);

  const onCheck = () => {
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
            <div className="space-y-2">
              {inputFields.map((input) => (
                <FormField
                  name={input.name}
                  key={input.id}
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <InputBox
                          className="bg-neutral-10 border-[0] w-[64rem] pl-[1.2rem] py-[2rem] font-normal text-paragraph"
                          label={input.label}
                          placeholder={input.placeholder}
                          type={input.type}
                          autoComplete={input.name}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>

            {isSuccess && (
              <div className="absolute top-[0%] z-10 w-[100%] h-[100vh] bg-black/[0.05]">
                <div className=" mt-[3rem] mr-[4rem] lg:mr-[10rem] sm:w-[50%] p-[1rem] float-right md:w-[35%]  h-[fit-content] border-l-4 border-[green] rounded-sm shadow-xl bg-white">
                  <button
                    type="reset"
                    className="float-right"
                    onClick={onSubmit}
                  >
                    ✖️
                  </button>
                  <p className="text-center ">
                    Your account has been created Successfully
                  </p>
                  <br />
                </div>
              </div>
            )}

            <div className="flex items-center gap-x-[1.1rem] my-[30px]">
              <Checkbox
                id="terms and conditions"
                onCheckedChange={onCheck}
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
                className=" text-white py-[2rem] mb-[2rem]"
                type="submit"
              >
                <span className="text-xs font-normal">Sign up </span>
              </Button>
            </div>
          </form>
        </Form>

        <div className="flex items-center justify-center gap-x-1">
          <p>Have an account?</p>

          <Button modifier="plain" variant="primary">
            <Link href="/login" className="pl-1 text-paragraph ">
              Sign in
            </Link>
          </Button>
        </div>

        <SocialSignup />
      </section>
    </>
  );
}
