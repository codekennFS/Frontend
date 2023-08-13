import Google from "@/assets/auth/google.svg";
import { Button } from "@/components/ui/button";
import React from "react";

const SocialSignup = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-5 gap-x-4">
        <div className="w-full bg-black h-one"></div>
        <p>OR</p>
        <div className="w-full bg-black h-one"></div>
      </div>

      <div className="mt-5">
        <Button
          variant="neutral"
          modifier="filled"
          rounded
          className="py-[2rem] w-full flex gap-2 bg-transparent border border-black"
        >
          <Google />
          <span className="text-paragraph text-black">Continue with Google</span>
        </Button>
      </div>
    </>
  );
};

export default SocialSignup;
