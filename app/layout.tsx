import "./globals.css";
import { inter } from "@/ui/fonts/fonts";
import Link from "next/link";

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
      <body className={`${inter.variable} bg-slate-800 text-white`}>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="Task">Task</Link></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
