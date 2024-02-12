
import Link from "next/link";
import { ArrowDown, Download, Send, ChevronDown} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Socials } from "@/components/Socials";
import { DeveloperImg } from "@/components/DeveloperImg";

export const Hero = () => {
    return ( 
        <section className="h-[84vh] py-12 xl:py-24 xl:pt-28">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                        <h1 className="text-sm uppercase font-semibold text-primary tracking-[4px] mb-2">Web Developer</h1>
                        <h2 className="h2-header">Hello, I am <br /> Earl A. <span className="text-primary">Villapaz</span></h2>
                        <p className="text-muted-foreground mb-4 font-[400]">
                            A brief description with insights into myself, my experience, <br /> and 
                            what I do professionally.
                        </p>
                        <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                            <Link href="/contact">
                                <Button className="gap-x-2">
                                    Contact me
                                    <Send size={18} />
                                </Button>
                            </Link>
                            <Button className="gap-x-2" variant="secondary">
                                Resume
                                <Download size={18} />
                            </Button>
                        </div>
                        <Socials 
                            containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                            iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
                        />
                    </div>
                    <div className="hidden xl:flex relative">
                        <div className="bg-hero_shape3 dark:bg-hero_shape2 w-[500px] h-[500px] absolute bg-no-repeat -top-1 -right-2" />
                        <DeveloperImg 
                            imgSrc="/.png"
                            containerStyles="bg-hero_shape w-[510px] h-[462px] relative bg-bottom"
                        />
                    </div>
                </div>
                <div className="absolute hidden md:flex left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                    <ChevronDown className="text-primary h-7 w-7" />
                </div>
            </div>
        </section>
    );
}