"use client";

import Link from "next/link";

import SocialSignup from "@/components/features/Shared/SocialSignup";
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
import { EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { LoginSchema } from "../schema/schema";

interface InputField {
  id: number;
  name: "email" | "password";
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
    placeholder: "Your email",
    label: "E-mail",
  },
  {
    id: 2,
    name: "password",
    type: "password",
    placeholder: "Your Password",
    label: "Password (8+ characters)",
  },
];

export default function LoginForm() {
  const form = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const [isSuccess, setIsSuccess] = useState(form.formState.isSubmitSuccessful);

  const onSubmit = (data: any) => {
    setIsSuccess(!isSuccess);
    console.log(data);
  };

  return (
    <>
      <section>
        <div className="lg:hidden flex items-center justify-center gap-x-0">
          <p>Don&apos;t have an account?</p>

          <Button modifier="plain" variant="primary">
            <Link
              href="/signup"
              className="pl-1 text-paragraph text-brandColor"
            >
              Sign up
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
                          className="border"
                          label={input.label}
                          placeholder={input.placeholder}
                          type={input.type}
                          EndIcon={input.type === "password" && <EyeOff />}
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
                  <p className="text-center ">Login Successful</p> <br />
                </div>
              </div>
            )}

            <div className="flex items-center justify-end my-4 gap-x-0">
              <Button modifier="plain" variant="primary">
                <Link
                  href="/forgotpassword"
                  className="text-paragraph text-brandColor"
                >
                  Forgot password?
                </Link>
              </Button>
            </div>

            <div>
              <Button
                variant="neutral"
                fullWidth
                className="text-white py-3 bg-brandColor rounded-sm mb-3"
                type="submit"
              >
                <span className="text-xs font-normal">Sign in</span>
              </Button>
            </div>
          </form>
        </Form>

        <div className="lg:flex hidden items-center justify-center">
          <p>Don&apos;t have an account?</p>

          <Button modifier="plain" variant="primary">
            <Link
              href="/signup"
              className="pl-1 text-paragraph text-brandColor"
            >
              Sign up
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
