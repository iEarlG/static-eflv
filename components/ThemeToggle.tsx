"use client"

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";


export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div>
            <Button variant="ghost">
                <Sun size={18} className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon size={18} className="absolute" />
            </Button>
        </div>
    );
}