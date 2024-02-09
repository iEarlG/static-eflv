"use client"

import Link from "next/link";
import { FaYoutube, FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import { cn } from "@/lib/utils";

interface SocialsProps {
    containerStyles?: string;
    iconStyles?: string;
};

const icons = [
    {
        path: 'https://www.youtube.com/@iearlg',
        name: <FaYoutube />,
    },
    {
        path: 'https://www.facebook.com/TheProjectEarl',
        name: <FaFacebookF />,
    },
    {
        path: 'https://github.com/iEarlG',
        name: <FaGithub />,
    },
    {
        path: 'https://www.instagram.com/itsmearlofficial/',
        name: <FaInstagram />,
    },
    {
        path: 'https://www.linkedin.com/in/eflvillapaz/',
        name: <FaLinkedin />,
    }
];

export const Socials = ({
    containerStyles,
    iconStyles
}: SocialsProps) => {
    return (
        <div className={cn(containerStyles)}>
            {icons.map((icon, i) => {
                return (
                    <Link href={icon.path} key={i} target="_blank">
                        <div className={cn(iconStyles)}>
                            {icon.name}
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}