import Image from "next/image";
import Link from "next/link";

import PhoneScreen from "@/assets/others/phoneScreen.png";
import { ListChecks } from "lucide-react";

const RequestHelp = () => {
  return (
    <section className="flex w-full min-h-[70vh] bg-brandColor p-8 pb-0">
      <section className="flex flex-col justify-center gap-4 pb-8 text-white basis-1/2">
        <div>
          <p className="text-lg">Request help in seconds,</p>
          <p className="text-lg">Get more done within the hour</p>
        </div>

        <p className="max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in massa
          pellentesque, rutrum massa malesuada,
        </p>

        <Link
          href={"#"}
          className="text-[#646464] text-xs w-fit px-[8rem] py-[2rem] rounded-sm bg-white flex items-center gap-1"
        >
          <ListChecks />Post a task
        </Link>
      </section>

      <section className="flex justify-end basis-1/2">
        <div className="w-3/5 relative p-4 pb-0 bg-[url('../assets/others/phoneFrame.png')] bg-cover">
          <Image src={PhoneScreen} className="w-full" alt="phoneScreen" />
          <div className="absolute bg-white top-1/2 -translate-x-1/2 -translate-y-1/2 w-[35.625rem] h-[25rem] rounded-sm"></div>
        </div>
      </section>
    </section>
  );
};

export default RequestHelp;
