import Link from "next/link";

import { Button } from "@/components/ui/button";
import React from "react";

const Maintenance = () => {
  return (
    <section className="flex h-screen">
      <div className="flex items-center pl-9 basis-3/4">
        <div className="space-y-5">
          <h1 className="text-xl">This page is under Maintenance</h1>
          <p className="font-extralight text-md">We&apos;re working on it!</p>
          <Button size={"regular"} rounded asChild className="bg-reserved-200">
            <Link href={"/"}>Go to Homepage</Link>
          </Button>
        </div>
      </div>
      <div className="bg-reserved-50 rounded-bl-max rounded-tl-max basis-1/2"></div>
    </section>
  );
};

export default Maintenance;
