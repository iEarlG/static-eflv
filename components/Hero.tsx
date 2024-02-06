
import Link from "next/link";
import { ArrowDown, Download, Send, ChevronDown} from "lucide-react";

import { Button } from "@/components/ui/button";

export const Hero = () => {
    return ( 
        <section className="h-[84vh] py-12 xl:py-24 xl:pt-28">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                        <h1 className="text-sm uppercase font-semibold text-primary tracking-[4px] mb-2">Web Developer</h1>
                        <h2 className="h2-header">Hello, I am <br /> Earl A. <span className="text-primary">Villapaz</span></h2>
                        <p className="text-muted-foreground mt-2 font-[400]">
                            A brief description with insights into myself, my experience, <br /> and 
                            what I do professionally.
                        </p>
                        <div>
                            <Link href="/contact">
                                <Button>Contact me</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden xl:flex relative">
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