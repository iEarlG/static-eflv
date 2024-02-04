"use client"

import { useState, useEffect } from "react";

import { Logo } from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import { Navbar } from "@/components/navigation/Navbar";
import { MobileNavbar } from "@/components/navigation/MobileNavbar";

export const Header = () => {
    return (
        <header>
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