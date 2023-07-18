"use client";

import Link from "next/link";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import InputBox from "@/ui/inputs/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type Props = {};

export default function ForgotPassword({}: Props) {
  const schema = yup.object().shape({
    email: yup.string().email().required("Please provide a functional email"),
  });

  const form = useForm({
    resolver: yupResolver(schema),
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
                <div className="w-full mt-[7rem]">
                  <InputBox
                    defaultValue=""
                    className="bg-neutral-10 border-[0]  w-[64rem] pl-[1.2rem] py-[2rem] font-normal text-paragraph rounded"
                    placeholder="Provide us with your registered email"
                    {...field}
                  />
                  <span className="pb-[1rem] text-[red] text-[medium]">{form.formState.errors.email?.message}</span>

                  {isSuccess && (
                  <div className="absolute top-[0%] z-10 w-[100%] h-[100vh] bg-black/[0.05]">
                    <div className=" mt-[3rem] mr-[4rem] lg:mr-[10rem] sm:w-[50%] p-[1rem] float-right md:w-[35%]  h-[fit-content] border-l-4 border-[green] rounded-sm shadow-xl bg-white">
                     <button type="reset" className="float-right" onClick={onSubmit}>✖️</button>
                      <p className=" text-center pt-[1rem]">A reset link has been sent to your email</p> <br />
                    </div>
                  </div>
                )}
                  <span className="flex justify-end gap-x-1 mt-[30px]">
                    <p>Remember password? </p>
                    <Button modifier="plain" variant="primary">
                      <Link href="/login" className="text-paragraph">
                        {" "}
                        LOG IN
                      </Link>
                    </Button>
                  </span>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          variant="neutral"
          modifier="filled"
          rounded
          className="w-[100%] text-center text-sm py-[2rem] mt-[7rem]"
          type="submit"
        >
          Continue
        </Button>
      </form>
    </Form>
  );
}
