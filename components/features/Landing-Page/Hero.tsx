import Link from "next/link";

import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col w-full md:h-screen">
      <div className="h-[78dvh] flex flex-col lg:flex-row items-center bg-reserved-100 px-6 lg:px-8 justify-center pt-9 lg:py-0 pb-6 lg:gap-8">
        <div className="flex flex-col justify-center h-full gap-5 basis-1/2">
          <h1 className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <p className="w-full text-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            convallis suscipit nisi, at congue dolor accumsan id. Donec id
            tempor risus. Etiam cursus risus quis luctus luctus. Curabitur
            tempor nec enim
          </p>
          <div className="flex gap-4">
            <Link
              href={"/getStarted"}
              className="px-8 py-3 bg-white rounded-xs"
            >
              Get started
            </Link>
            <Link
              href={"/getStarted"}
              className="px-8 py-3 bg-white rounded-xs"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="w-full h-full basis-1/2"></div>
      </div>
      <div className="flex items-center justify-evenly grow">
        <div className="w-[218px] h-[134px] rounded-[17px] bg-reserved-100"></div>
        <div className="w-[218px] h-[134px] rounded-[17px] bg-reserved-100"></div>
        <div className="w-[218px] h-[134px] rounded-[17px] bg-reserved-100"></div>
      </div>
    </section>
  );
};

export default Hero;
