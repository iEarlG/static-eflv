
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
                            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                                <TabsTrigger value="personal" className="w-[162px] xl:w-auto">Personal Info</TabsTrigger>
                                <TabsTrigger value="qualifications" className="w-[162px] xl:w-auto">Qualification</TabsTrigger>
                                <TabsTrigger value="skills" className="w-[162px] xl:w-auto">Skills</TabsTrigger>
                            </TabsList>
                            <div className="text-lg mt-12 xl:mt-8">
                                <TabsContent value="personal">
                                    <div>
                                        <h1 className="text-3xl font-bold mb-4">I'm EARL A. <span className="text-primary">VILLAPAZ</span>,</h1>
                                        <p className="subtitle">I am League Esports enthusiast and Junior Web Developer. When I'm not cheering on the competition at NCGC Esports 
                                            <span className="text-primary"> where I serve as both Ambassador & Marshal!</span>, I'm putting my web development skills to work, 
                                            having <span className="text-primary">graduated with High Honors from STI College of Davao's MAWD program (Mobile Application & Web Development)</span>.
                                            Beyond the digital world, I'm also <span className="text-primary">passionate about building PCs</span> from scratch and 
                                            keeping them running smoothly with deep cleaning services.
                                        </p>
                                    </div>
                                </TabsContent>
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