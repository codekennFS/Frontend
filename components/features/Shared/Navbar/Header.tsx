import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="w-full h-9 bg-white text-primary-main flex items-center ">
      <Link href="/about" className="text-heading-6 font-bold">
        Primetasker{" "}
      </Link>
    </div>
  );
}
