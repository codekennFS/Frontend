import Google from "@/assets/auth/google.svg";
import { Button } from "@/components/ui/button";
import React from "react";

const SocialSignup = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-col">
      <div className="flex items-center justify-center mt-5 gap-x-4">
        <div className="w-full bg-black h-one"></div>
        <p>OR</p>
        <div className="w-full bg-black h-one"></div>
      </div>

      <div className="mt-5">
        <Button
          variant="neutral"
          modifier="filled"
          className="py-[2rem] w-full flex gap-2 bg-transparent border border-black rounded-sm"
        >
          <Google />
          <span className="text-black text-paragraph">
            Continue with Google
          </span>
        </Button>
      </div>
    </div>
  );
};

export default SocialSignup;
