
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface NavbarProps {
    containerStyles: string;
    linkStyles?: string;
    underLineStyle?: string;
}

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "about",
        path: "/about",
    },
    {
        name: "projects",
        path: "/projects",
    },
    {
        name: "contact",
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
                        className={linkStyles}
                    >
                        {link.path === pathname && (
                            <motion.span 
                                initial={{ y: "-100%" }}
                                animate={{ y: 0 }}
                                transition={{type: "tween", }}
                                layoutId="underline"
                                className={underLineStyle}
                            />
                        )}
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
}