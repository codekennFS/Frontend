import "./globals.css";
import { inter } from "@/ui/fonts/fonts";

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
        {children}
      </body>
    </html>
  );
}
