
import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface NavbarProps {
    containerStyles: string;
    linkStyles?: string;
    underLineStyle?: string;
}

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Projects",
        path: "/projects",
    },
    {
        name: "Contact",
        path: "/contact",
    },
]

export const Navbar = ({
    containerStyles,
    linkStyles,
    underLineStyle,
}: NavbarProps) => {
    const pathname = usePathname();
    return (
        <nav className={cn(containerStyles)}>
            {links.map((link, i) => {
                return (
                    <Link 
                        href={link.path}
                        key={i}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
}