import "./globals.css";
import Link from "next/link";
import { urbanist } from "@/ui/fonts/fonts";

export const metadata = {
  title: "Primetasker",
  description: "Expertise and skills anywhere, anytime.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
        font-brand 
        text-paragraph
           w-full 
           mx-auto 
        
           `}
      >
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Task">Tasks</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
//  max-w-[30.4rem]
//  md:max-w-[75.2rem]
//  lg:max-w-[113.6rem]
