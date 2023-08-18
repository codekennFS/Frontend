import { ChevronLeft } from "lucide-react";
import React from "react";

export default function LeftArrow() {
  return (
    <button
      title="Previous item"
      className="absolute left-0 z-10 flex items-center justify-center w-6 text-white -translate-y-1/2 disabled:opacity-0 button-swipe-prev top-1/2 lg:left-3 sm:w-4 "
    >
      <ChevronLeft />
    </button>
  );
}
