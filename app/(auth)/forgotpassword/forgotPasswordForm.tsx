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
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="w-full mt-[2rem]">
                  <InputBox
                    defaultValue=""
                    className="bg-neutral-10 border-[0]  w-[64rem] pl-[1.2rem] py-[2rem] font-normal text-paragraph rounded"
                    placeholder="Provide us with your registered email"
                    {...field}
                  />
                </div>
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
            rounded
            fullWidth
            className=" text-white py-[2rem] my-[2rem]"
            type="submit"
          >
            <span className="text-xs font-normal">Continue </span>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-x-0">
          <p>Remember your password?</p>

          <Button modifier="plain" variant="primary">
            <Link href="/login" className="pl-1 text-paragraph ">
              Sign in
            </Link>
          </Button>
        </div>

        <SocialSignup />
      </form>
    </Form>
  );
}
