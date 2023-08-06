"use client";

import Image from "next/image";

// import InputBox from "@/ui/inputs/input";
import ArrowLeft from "@/assets/svg/arrow-left.svg";
import EyeOff from "@/assets/svg/eye-off.svg";
import MessageIcon from "@/assets/svg/fi-rr-envelope-download.svg";
import AvailableTaskers from "@/components/features/Landing-Page/AvailableTaskers";
import Blog from "@/components/features/Landing-Page/Blog";
import CompletedTasks from "@/components/features/Landing-Page/CompletedTasks";
import EarnAsATasker from "@/components/features/Landing-Page/EarnAsATasker";
import Hero from "@/components/features/Landing-Page/Hero";
import NewJobAlert from "@/components/features/Landing-Page/NewJobAlert";
import Footer from "@/components/features/Shared/Footer/Footer";
import Header from "@/components/features/Shared/Navbar/Header";
import { Button } from "@/ui/buttons/button";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen">
        <Hero />
        <NewJobAlert />
        <AvailableTaskers />
        <CompletedTasks />
        <EarnAsATasker />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
