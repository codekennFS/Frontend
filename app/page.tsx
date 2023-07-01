"use client";

import Image from "next/image";

// import InputBox from "@/ui/inputs/input";
import ArrowLeft from "@/assets/svg/arrow-left.svg";
import EyeOff from "@/assets/svg/eye-off.svg";
import MessageIcon from "@/assets/svg/fi-rr-envelope-download.svg";
import Footer from "@/components/features/Shared/Footer/Footer";
import Hero from "@/components/features/Landing-Page/Hero";
import Section1 from "@/components/features/Landing-Page/Section1";
import Section2 from "@/components/features/Landing-Page/Section2";
import Section3 from "@/components/features/Landing-Page/Section3";
import Section4 from "@/components/features/Landing-Page/Section4";
import Section5 from "@/components/features/Landing-Page/Section5";
import Header from "@/components/features/Shared/Navbar/Header";
import Button from "@/ui/buttons/button";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen">
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </main>
      <Footer />
    </>
  );
}
