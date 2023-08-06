import Link from "next/link";

import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col w-full md:h-screen">
      <div className="h-[78dvh] flex flex-col lg:flex-row items-center bg-reserved-100 px-6 lg:px-8 justify-center pt-9 lg:py-0 pb-6 lg:gap-8">
        <div className="flex flex-col justify-center h-full gap-5 text-white basis-1/2">
          <h1 className="text-xl">
            Manage daily tasks easily anywhere, at all times
          </h1>
          <p className="w-full max-w-[550px] text-paragraph text-reserved-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            convallis suscipit nisi, at congue dolor accumsan id. Donec id
            tempor risus. Etiam cursus risus quis luctus luctus. Curabitur
            tempor nec enim
          </p>
          <div className="flex gap-4">
            <Link href={"/signup"} className="px-8 py-3 rounded-sm bg-primary-40">
              Post a task for free
            </Link>
            <Link href={"/signup"} className="px-8 py-3 border rounded-sm">
              Earn money with ease
            </Link>
          </div>
        </div>
        <div className="bg-white w-full basis-1/2 h-[408px]"></div>
      </div>
      <div className="flex items-center justify-evenly grow">
        <div className="w-[218px] h-[134px] rounded-[17px] bg-[#BDBDBD]"></div>
        <div className="w-[218px] h-[134px] rounded-[17px] bg-[#BDBDBD]"></div>
        <div className="w-[218px] h-[134px] rounded-[17px] bg-[#BDBDBD]"></div>
      </div>
    </section>
  );
};

export default Hero;
