"use client";

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

import { LoginSchema } from "../schema/schema";

interface InputField {
  id: number;
  name: "password";
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
    name: "password",
    type: "password",
    placeholder: "********",
    label: "Enter a new password (8+ characters)",
  },
  {
    id: 2,
    name: "password",
    type: "password",
    placeholder: "********",
    label: "Re-enter the new password (8+ characters)",
  },
];

export default function ResetPasswordForm() {
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
                          error={form.formState.errors[input.name]?.message}
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

            <div>
              <Button
                variant="neutral"
                fullWidth
                className="py-3 mt-4 text-white rounded-sm bg-brandColor"
                type="submit"
              >
                <span className="text-xs font-normal">Reset password</span>
              </Button>
            </div>
          </form>
        </Form>
      </section>
    </>
  );
}
