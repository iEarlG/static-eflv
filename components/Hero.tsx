
import Link from "next/link";
import { ArrowDown, Download, Send, ChevronDown} from "lucide-react";

import { Button } from "@/components/ui/button";

export const Hero = () => {
    return ( 
        <section className="h-[84vh] py-12 xl:py-24 xl:pt-28">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">

                    <div>
                        Text
                    </div>
                    <div>
                        Image
                    </div>
                </div>
                <div className="absolute hidden md:flex left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                    <ChevronDown className="text-primary h-7 w-7" />
                </div>
            </div>
        </section>
    );
}