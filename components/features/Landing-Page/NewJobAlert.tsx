"use client";

import Link from "next/link";

import Check from "@/assets/svg/fi-rr-check.svg";
import Play from "@/assets/svg/play.svg";
import LeftArrow from "@/ui/buttons/LeftArrow";
import RightArrow from "@/ui/buttons/RightArrow";
import { Bell, HeartHandshake } from "lucide-react";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const task = [
  {
    id: 1,
    task: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis suscipit nisi, at congue dolor",
  },
  {
    id: 2,
    task: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis suscipit nisi, at congue dolor",
  },
];

const alerts = [{ id: 1 }, { id: 2 }, { id: 3 }];

const NewJobAlert = () => {
  return (
    <section className="overflow-scroll bg-brandColor">
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".button-swipe-next",
          prevEl: ".button-swipe-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <LeftArrow />
        
        {alerts.map((alert) => (
          <SwiperSlide key={alert.id} className="relative h-full py-6 lg:p-8">
            <article className="flex flex-col gap-5 p-8 rounded-md bg-[#F4F4F4] space-y-7 lg:gap-0">
              <div className="flex items-center gap-2 py-2 bg-white rounded-sm shadow-xl px-7 w-fit">
                <Bell fill="black" /> New Job Alert
              </div>

              <div className="flex flex-col gap-9 lg:flex-row">
                <section className="flex flex-col gap-4 basis-1/2">
                  <h1 className="text-lg font-semibold">
                    Daily tasks should be fun
                  </h1>

                  {task.map((taskInfo) => {
                    return (
                      <div key={taskInfo.id} className="flex items-start gap-3">
                        <Check width={44} height={40} />
                        <div className="space-y-3">
                          <h2 className="w-full text-sm opacity-70">
                            {taskInfo.task}
                          </h2>
                          <p className="opacity-60 text-[18px]">
                            {taskInfo.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}

                  <Link
                    href={"/login"}
                    className="text-white bg-brandColor w-fit px-[8rem] py-[2rem] rounded-sm text-xs flex items-center gap-1"
                  >
                    <HeartHandshake /> Get more done
                  </Link>
                </section>

                <section className="bg-[#A1ACB9] rounded-md basis-3/4 grid place-items-center">
                  <Play width={200} height={200} />
                </section>
              </div>
            </article>
          </SwiperSlide>
        ))}

        <RightArrow />
      </Swiper>
    </section>
  );
};

export default NewJobAlert;
