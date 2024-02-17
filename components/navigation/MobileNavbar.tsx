import { AlignJustify } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Navbar } from "@/components/navigation/Navbar";
import { Socials } from "@/components/Socials";
import { Logo } from "@/components/Logo";

export const MobileNavbar = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <AlignJustify />
            </SheetTrigger>
            <SheetContent>
                <div className="flex flex-col items-center justify-between h-full py-8">
                    <div className="flex flex-col items-center gap-y-32">
                        <Logo />
                        <Navbar 
                            containerStyles="flex flex-col items-center gap-y-6 capitalize"
                        />
                    </div>
                    <Socials 
                        containerStyles="flex gap-x-4"
                        iconStyles="text-[20px] leading-[24px]"
                    />
                </div>
            </SheetContent>
        </Sheet>
    );
}