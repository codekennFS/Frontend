"use client";

import Link from "next/link";

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
import { useState } from "react";
import { useForm } from "react-hook-form";

import { SignupSchema } from "../schema/schema";

interface InputField {
  id: number;
  name: "firstname" | "lastname" | "email" | "password" | "referrerId";
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
    name: "firstname",
    type: "text",
    placeholder: "John",
    label: "First name",
  },
  {
    id: 2,
    name: "lastname",
    type: "text",
    placeholder: "Joe",
    label: "Last name",
  },
  {
    id: 3,
    name: "email",
    type: "email",
    placeholder: "johnjoe@gmail.com",
    label: "E-mail",
  },

  {
    id: 4,
    name: "password",
    type: "password",
    placeholder: "********",
    label: "Password (8+ characters)",
  },

  {
    id: 5,
    name: "referrerId",
    type: "text",
    placeholder: "Enter the code here",
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
        <div className="flex items-center justify-center lg:hidden gap-x-0">
          <p>Already have an account?</p>

          <Button modifier="plain" variant="primary">
            <Link href="/login" className="pl-1 text-paragraph text-brandColor">
              Sign in
            </Link>
          </Button>
        </div>

        <span className="lg:hidden">
          <SocialSignup />
        </span>

        <Form {...form}>
          <form className="mt-4" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              {inputFields.map((input) => (
                <FormField
                  name={input.name}
                  key={input.id}
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <InputBox
                          label={input.label}
                          placeholder={input.placeholder}
                          type={input.type}
                          autoComplete={input.name}
                          error={
                            form.formState.errors[input.name]?.message || ""
                          }
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
                className="rounded-xs data-[state=checked]:bg-primary-90"
                required
              />
              <label
                htmlFor="terms and conditions"
                className="hidden italic text-paragraph lg:block"
              >
                I agree to the data{" "}
                <Link href={"#"} className="text-[#FF8B00]">
                  Privacy Policy
                </Link>
              </label>
              <label
                htmlFor="terms and conditions"
                className="italic text-paragraph lg:hidden"
              >
                By joining, you agree to the Primetasker terms of Service.
              </label>
            </div>

            <div>
              <Button
                variant="neutral"
                fullWidth
                className="py-3 mb-3 text-white rounded-sm bg-brandColor"
                type="submit"
              >
                <span className="text-xs font-normal">Sign up</span>
              </Button>
            </div>
          </form>
        </Form>

        <div className="items-center justify-center hidden lg:flex">
          <p>Already have an account?</p>

          <Button modifier="plain" variant="primary">
            <Link href="/login" className="pl-1 text-paragraph text-brandColor">
              Sign in
            </Link>
          </Button>
        </div>

        <span className="hidden lg:block">
          <SocialSignup />
        </span>
      </section>
    </>
  );
}
