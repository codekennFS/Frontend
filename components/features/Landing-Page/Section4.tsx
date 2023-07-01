import Link from "next/link";

import React from "react";

const Section4 = () => {
  const texts = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis suscipit nisi, at congue dolor",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis suscipit nisi, at congue dolor",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis suscipit nisi, at congue dolor",
    },
  ];

  return (
    <section className="flex flex-col p-8 px-0 bg-[#3267E3] gap-[300px]">
      <div className="flex flex-col gap-8 lg:pr-8 lg:flex-row">
        <div className="flex flex-col gap-5 px-6 text-white basis-1/2 lg:px-0">
          <h1 className="text-xl">Lorem ipsum fusce</h1>
          <p className="text-sm">
            Phasellus ut sem sed magna interdum semper. Sed dui nunc, pulvinar
            vitae molestie vitae,
          </p>
          <div className="space-y-5">
            {texts.map((text) => {
              return (
                <div key={text.id} className="flex max-w-2xl gap-5">
                  <div className="pt-1">
                    <div className="w-3 border border-black rounded-full aspect-square"></div>
                  </div>
                  <p>{text.text}</p>
                </div>
              );
            })}
          </div>
          <Link
            href={"/earnAsTasker"}
            className="px-3 py-2 text-black bg-white rounded-xs w-fit"
          >
            Earn money as a tasker
          </Link>
        </div>
        <div className="basis-3/4 flex justify-center lg:justify-end lg:pr-[85px] lg:pt-2">
          <div className="w-[473px] h-[495px] bg-[#E9E9E9] rounded-md relative">
            <div className="w-[316px] h-[169px] rounded-md absolute -left-[40%] bg-[#E0D6D6] top-[40%] shadow-md"></div>
            <div className="w-[274px] h-[313px] bg-[#E9E9E9] absolute -right-[80px] rounded-md top-[55%] shadow-md"></div>
          </div>
        </div>
      </div>
      <div className="overflow-scroll">
        <div className="flex gap-[200px] w-fit px-6 lg:px-0">
          <div className="w-[860px] h-[419px] bg-[#E9E9E9] rounded-[18px]"></div>
          <div className="w-[860px] h-[419px] bg-[#E9E9E9] rounded-[18px]"></div>
          <div className="w-[860px] h-[419px] bg-[#E9E9E9] rounded-[18px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
