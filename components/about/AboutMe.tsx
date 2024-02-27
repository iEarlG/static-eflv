
import Image from "next/image";
import { GraduationCap, Mail, MapPin, Phone, User2, } from "lucide-react";
import { SiDiscord, SiGithub, SiStackoverflow, SiVisualstudiocode, SiWindows10 } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DeveloperImg } from "@/components/DeveloperImg";

const infoDataMe = [
    {
        icon: <User2 size={18} />,
        name: "Earl Villapaz"
    },
    {
        icon: <Phone size={18} />,
        name: "+63 9774227996"
    },
    {
        icon: <Mail size={18} />,
        name: "villapa.earl03@gmail.com"
    },
    {
        icon: <GraduationCap size={18} />,
        name: "MAWD - Mobile Application & Web Development"
    },
    {
        icon: <MapPin size={18} />,
        name: "Davao City, Philippines"
    },
];

const qualiications = [
    {
        title: "Education",
        data: [
            {
                university: "STI College of Davao",
                strand: "MAWD - Mobile Application & Web Development",
                year: "2020 - 2022"
            }
        ]
    },
    {
        title: "Experience",
        data: [
            {
                company: "NCGC Esports",
                position: "League Esports Ambassador & Marshal",
                year: "2023 - Present"
            },
            {
                company: "Dragon Phoenix Guild",
                position: "Former NFT Discord Head Admin & Hiring Manager",
                year: "2021 - 2023"
            }
        ]
    },
];

const setSkills = [
    {
        title: "Skills",
        data: [
            {
                name: "HTML, CSS, JS",
            },
            {
                name: "Frontend Development",
            },
            {
                name: "Backend Development",
            }
        ]
    },
    {
        title: "Tools",
        data: [
            {
                icons: <SiVisualstudiocode size={18} />,
            },
            {
                icons: <SiGithub size={18} />,
            },
            {
                icons: <SiStackoverflow size={18} />,
            },
            {
                icons: <SiDiscord size={18} />,
            },
            {
                icons: <SiWindows10 size={18} />,
            },
        ]
    },
];

export const AboutMe = () => {
    const getData = (arr: any, title: string) => {
        return arr.find((item: any) => item.title === title)
    }
    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About Me</h2>
                <div>

                    <div>
                        <DeveloperImg 
                            imgSrc="/eflv.png"
                            containerStyles="relative bg-about_light dark:bg-about_dark w-[505px] h-[505px] bg-no-repeat"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}