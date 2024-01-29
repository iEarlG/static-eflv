import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const pops = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "600", "800", "900"]
});

export const metadata: Metadata = {
  title: "Static EFLV Portfolio",
  description: "Static EFLV Portfolio built with NextJS 14, TypeScript & Shadcn  UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pops.className}>
        {children}
      </body>
    </html>
  );
}
