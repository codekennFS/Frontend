import { ChevronRight } from "lucide-react";
import React from "react";

export default function RightArrow() {
  return (
    <button
      title="Next item"
      className="absolute right-0 z-10 flex items-center justify-center w-6 text-white -translate-y-1/2 disabled:opacity-0 lg:right-3 button-swipe-next top-1/2 sm:w-4"
    >
      <ChevronRight size={50} />
    </button>
  );
}
