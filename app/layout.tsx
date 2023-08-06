import Providers from "./Providers";
import "./globals.css";

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
        className={`font-brand text-paragraph w-screen overflow-x-hidden h-full`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
//  max-w-[30.4rem]
//  md:max-w-[75.2rem]
//  lg:max-w-[113.6rem]
