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

      {/* Social Buttons //TODO: Make reusable  */}
      <div className=" flex flex-row justify-between gap-[2rem] mt-5">
        <Button
          variant="neutral"
          modifier="filled"
          rounded
          className="py-[2rem] w-full text-center"
        >
          <span className="text-paragraph"> Sign in with Google</span>
        </Button>
      </div>
    </>
  );
};

export default SocialSignup;
