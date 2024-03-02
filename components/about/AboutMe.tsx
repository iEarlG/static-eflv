
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

const skills = [
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
                <div className="flex flex-col xl:flex-row">
                    <div className="hidden xl:flex flex-1 relative">
                        <DeveloperImg 
                            imgSrc="/aboutpic.png"
                            containerStyles="relative bg-about_light dark:bg-about_dark w-[505px] h-[505px] bg-no-repeat"
                        />
                    </div>
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList>
                                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                                <TabsTrigger value="qualifications">Qualification</TabsTrigger>
                                <TabsTrigger value="skills">Skills</TabsTrigger>
                            </TabsList>
                            <div className="text-lg mt-12 xl:mt-8">
                                <TabsContent value="personal">Personal Info</TabsContent>
                                <TabsContent value="qualifications">qualifications</TabsContent>
                                <TabsContent value="skills">skills</TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
}