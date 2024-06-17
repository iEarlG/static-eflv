
import { Briefcase, GraduationCap, Mail, MapPin, Phone, User2, } from "lucide-react";
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

const qualifications = [
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
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title)
    };    
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
                                    <div className="text-center xl:text-left mx-auto xl:mx-0">
                                        <h1 className="text-3xl font-bold mb-4">I am EARL A. <span className="text-primary">VILLAPAZ</span>,</h1>
                                        <p className="subtitle">I am League Esports enthusiast and Junior Web Developer. When I'm not cheering on the competition at NCGC Esports 
                                            <span className="text-primary"> where I serve as both Ambassador & Marshal!</span>, I'm putting my web development skills to work, 
                                            having <span className="text-primary">graduated with High Honors from STI College of Davao's MAWD program (Mobile Application & Web Development)</span>.
                                            Beyond the digital world, I'm also <span className="text-primary">passionate about building PCs</span> from scratch and 
                                            keeping them running smoothly with deep cleaning services.
                                        </p>
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {infoDataMe.map((item, i) => {
                                                return (
                                                    <div key={i} className="flex items-center gap-x-4 mx-auto xl:mx-0">
                                                        <div className="text-primary">{item.icon}</div>
                                                        <div>{item.name}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="qualifications">
                                    <div>
                                        <h2 className="text-3xl font-bold mb-8 text-center xl:text-left">My Journey</h2>
                                        <div className="grid md:grid-cols-2 gap-y-8">
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex items-center gap-x-4 text-[18px]">
                                                    <Briefcase className="text-primary" />
                                                    <span className="capitalize font-medium">
                                                        {getData(qualifications, "Experience").title}
                                                    </span>
                                                </div>
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(qualifications, "Experience").data.map((item, i) => {
                                                        const { company, position, year } = item;
                                                        return (
                                                            <div key={i} className="flex gap-x-8 group">
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                    <div className="h-[11px] w-[11px] rounded-full bg-primary absolute -left-[5px] 
                                                                    group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                </div>
                                                                <div>
                                                                    <div className="font-semibold text-lg leading-none mb-2">{company}</div>
                                                                    <div className="text-lg leading-none text-muted-foreground mb-4">{position}</div>
                                                                    <div className="text-base font-medium">{year}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            {/* EDUCATION */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex items-center gap-x-4 text-[18px]">
                                                    <GraduationCap className="text-primary" />
                                                    <span className="capitalize font-medium">
                                                        {getData(qualifications, "Education").title}
                                                    </span>
                                                </div>
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(qualifications, "Education").data.map((item, i) => {
                                                        const { university, strand, year, } = item;
                                                        return (
                                                            <div key={i} className="flex gap-x-8 group">
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                    <div className="h-[11px] w-[11px] rounded-full bg-primary absolute -left-[5px] 
                                                                    group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                </div>
                                                                <div>
                                                                    <div className="font-semibold text-lg leading-none mb-2">{university}</div>
                                                                    <div className="text-lg leading-none text-muted-foreground mb-4">{strand}</div>
                                                                    <div className="text-base font-medium">{year}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="skills">
                                    <div className="text-center xl:text-left">
                                        <h3 className="text-3xl font-bold mb-8">Tools that I used everyday</h3>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
}