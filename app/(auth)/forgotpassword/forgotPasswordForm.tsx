"use client";

import Link from "next/link";

import SocialSignup from "@/components/features/Shared/SocialSignup";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import InputBox from "@/ui/inputs/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { ForgotPasswordSchema } from "../schema/schema";

export default function ForgotPasswordForm() {
  const form = useForm({
    resolver: yupResolver(ForgotPasswordSchema),
  });

  const [isSuccess, setIsSuccess] = useState(form.formState.isSubmitSuccessful);

  const onSubmit = (data: any) => {
    setIsSuccess(!isSuccess);
    console.log(data);
  };

  return (
    <Form {...form}>
      <form className="mt-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputBox
                  label="Provide us with your registered E-mail address"
                  className="border"
                  placeholder="johnjoe@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {isSuccess && (
          <div className="absolute top-[0%] z-10 w-[100%] h-[100vh] bg-black/[0.05]">
            <div className=" mt-[3rem] mr-[4rem] lg:mr-[10rem] sm:w-[50%] p-[1rem] float-right md:w-[35%]  h-[fit-content] border-l-4 border-[green] rounded-sm shadow-xl bg-white">
              <button type="reset" className="float-right" onClick={onSubmit}>
                ✖️
              </button>
              <p className=" text-center pt-[1rem]">
                A reset link has been sent to your email
              </p>
              <br />
            </div>
          </div>
        )}

        <div>
          <Button
            variant="neutral"
            fullWidth
            className="text-white py-3 bg-brandColor rounded-sm my-3"
            type="submit"
          >
            <span className="text-xs font-normal">Continue</span>
          </Button>
        </div>

        <div className="lg:flex hidden items-center justify-center">
          <p>Remember your password?</p>

          <Button modifier="plain" variant="primary">
            <Link href="/login" className="pl-1 text-paragraph text-brandColor">
              Sign in
            </Link>
          </Button>
        </div>

        <span className="hidden lg:block">
          <SocialSignup />
        </span>
      </form>
    </Form>
  );
}
