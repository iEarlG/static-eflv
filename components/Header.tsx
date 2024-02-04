"use client"

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import { Navbar } from "@/components/navigation/Navbar";
import { MobileNavbar } from "@/components/navigation/MobileNavbar";
import { cn } from "@/lib/utils";

export const Header = () => {
    const pathname = usePathname();
    const [isHeader, setIsHeader] = useState(false);

    useEffect(() => {
        const scrollYPos = window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setIsHeader(true) : setIsHeader(false);
        })

        return () => window.removeEventListener("scroll", () => scrollYPos)

      }, []);

    return (
        <header className={cn("sticky top-0 z-30 transition-all",
            isHeader ? "py-4 bg-white shadow-lg dark:shadow-md dark:bg-background dark:shadow-white/35" : "py-6 dark:bg-transparent"
        )}>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Logo />
                    <div className="flex items-center gap-x-6">
                        <Navbar 
                            containerStyles="hidden xl:flex lg:flex items-center gap-x-8"
                            linkStyles="relative hover:text-primary transition-all capitalize"
                            underLineStyle="absolute w-full top-full h-[1px] bg-primary"
                        />
                        <ModeToggle />
                        <div className="xl:hidden lg:hidden">
                            <MobileNavbar />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}