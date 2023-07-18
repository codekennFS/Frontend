"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import Apple from "@/assets/svg/apple.svg";
import Facebook from "@/assets/svg/facebook.svg";
import Google from "@/assets/svg/google.svg";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import InputBox from "@/ui/inputs/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

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
    type: "text",
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

  const schema = yup.object().shape({
    email: yup.string().email().required("Please provide a functional email"),
    password: yup.string().required("Incorrect Password"),
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
                      <div className="my-[2.5rem]">
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
                    form.formState.errors.password?.message}
                </span>
                {isSuccess && (
                  <div className="absolute top-[0%] z-10 w-[100%] h-[100vh] bg-black/[0.05]">
                    <div className=" mt-[3rem] mr-[4rem] lg:mr-[10rem] sm:w-[50%] p-[1rem] float-right md:w-[35%]  h-[fit-content] border-l-4 border-[green] rounded-sm shadow-xl bg-white">
                    <button type="reset" className="float-right" onClick={onSubmit}>✖️</button>
                      <p className=" text-center">Login Successful</p> <br />
                    </div>
                  </div>
                )}
            <div className="flex items-center justify-end mb-5 gap-x-0">
              <Button modifier="plain" variant="primary">
                <Link href="/fpassword" className="pl-1 text-paragraph ">
                  Forgot password?
                </Link>
              </Button>
            </div>

            <div>
              <Button
                variant="neutral"
                rounded
                fullWidth
                className=" text-white py-[2rem] mb-[2rem]"
                type="submit"
              >
                <span className="uppercase text-paragraph ">Sign in </span>
              </Button>
            </div>

          </form>
        </Form>
            <div className="flex items-center justify-center gap-x-0">
              <p>Don&apos;t have an account?</p>

              <Button modifier="plain" variant="primary">
                <Link href="/signup" className="pl-1 text-paragraph ">
                  Sign up
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
