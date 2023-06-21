import Link from "next/link";

import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="flex items-center w-full bg-white h-9 text-primary-main ">
      <Link href="/about" className="font-bold text-heading-6">
        Primetasker{" "}
      </Link>
    </div>
  );
}
