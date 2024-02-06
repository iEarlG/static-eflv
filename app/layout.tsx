import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { ThemeProvider } from "@/components/providers/ThemeProviders";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const pops = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "800", "900"]
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
    <html lang="en" suppressHydrationWarning>
      <body className={pops.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
