import Image from "next/image";
import Link from "next/link";

import Check from "@/assets/svg/fi-rr-check.svg";
import { taskers } from "@/static-data/data";
import { DollarSign, Star } from "lucide-react";
import React from "react";

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

const EarnAsATasker = () => {
  return (
    <section className="flex flex-col p-8 bg-[#3267E3] px-0 gap-[200px]">
      <section className="flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-col gap-5 px-6 text-white lg:pr-0 lg:pl-8 basis-1/2">
          <h1 className="text-xl">
            The perfect side hustle, anywhere, anytime
          </h1>

          <p className="max-w-3xl text-sm">
            Phasellus ut sem sed magna interdum semper. Sed dui nunc, pulvinar
            vitae molestie vitae,
          </p>

          <div className="space-y-5">
            {texts.map((text) => {
              return (
                <div key={text.id} className="flex max-w-2xl gap-4">
                  <div className="pt-1">
                    <div className="w-4 bg-white rounded-[2px] aspect-square grid place-items-center">
                      <Check width={15} height={15} />
                    </div>
                  </div>
                  <p>{text.text}</p>
                </div>
              );
            })}
          </div>

          <Link
            href={"/signup"}
            className="text-[#646464] text-xs w-fit px-[8rem] py-[2rem] rounded-sm bg-white flex items-center gap-1"
          >
            <DollarSign /> Start earning now
          </Link>
        </div>

        <div className="flex justify-center basis-[59%]">
          <div className="w-full max-w-[373px] h-[495px] bg-reserved-150 rounded-md relative">
            <div className="w-[316px] h-[169px] rounded-md absolute -left-[60%] bg-[#E0D6D6] top-[20%] shadow-md"></div>
            <div className="w-[274px] h-[313px] bg-reserved-150 absolute -right-[35%] rounded-md top-[55%] shadow-md"></div>
          </div>
        </div>
      </section>

      <section className="overflow-scroll">
        <div className="flex gap-[130px] w-fit px-6 lg:px-8">
          {taskers.map((tasker) => (
            <article
              key={tasker.id}
              className="w-[980px] h-[450px] bg-white rounded-[18px] p-5 flex flex-col gap-5"
            >
              <section className="flex justify-between">
                <p className="text-md">
                  <span className="font-bold">{tasker.name}</span> |{" "}
                  {tasker.profession}
                </p>
                <p className="flex items-center gap-1 text-sm">
                  <Star fill="#FFC107" color="#FFC107" /> {tasker.rating}
                </p>
              </section>

              <section className="flex gap-5 grow">
                <div className="relative w-full max-w-md overflow-hidden rounded-md">
                  <Image
                    src={tasker.img}
                    fill
                    placeholder="blur"
                    alt="A tasker at work"
                  />
                </div>

                <div className="space-y-3 grow">
                  <section>
                    <p className="text-xs font-semibold text-brandColor">
                      About
                    </p>
                    <p>{tasker.bio}</p>
                  </section>

                  <section className="space-y-2">
                    <p className="text-xs font-semibold text-brandColor">
                      Skills and specialities
                    </p>
                    <div className="flex gap-2">
                      {tasker.skills.map((skill) => (
                        <div
                          key={skill.id}
                          className="px-3 py-1 font-semibold bg-white border rounded-[30px] border-brandColor text-brandColor"
                        >
                          {skill.skill}
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <p className="text-xs font-semibold text-brandColor">
                      What people say about my work
                    </p>
                    <div>
                      {tasker.reviews.map((review) => (
                        <div key={review.id}>
                          <p>
                            {review.id}. {review.review} - {review.author}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </section>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
};

export default EarnAsATasker;
