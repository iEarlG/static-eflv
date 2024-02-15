"use client"

import CountUp from "react-countup";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

interface DevBadgeProps {
    label: string;
    count: number;
    endcountText?: string;
    icon: React.ReactNode;
    containerStyles?: string;
};

export const DevBadge = ({
    label,
    count,
    endcountText,
    icon,
    containerStyles,
}: DevBadgeProps) => {
    return (
        <div className={cn("z-10 w-[200px] h-[68px] flex items-center gap-x-4 bg-white dark:backdrop-blur-[44px] shadow-lg p-4 rounded-md",containerStyles)}>
            <div className="text-3xl text-primary">{icon}</div>
            <div className="flex items-center gap-x-2">
                <div className="text-3xl leading-none font-bold text-primary">
                    <CountUp 
                        end={count}
                        delay={1}
                        duration={4}
                    />
                    {endcountText}
                </div>
                <span className="max-w-[70px] leading-none font-medium text-muted-foreground">{label}</span>
            </div>
        </div>
    );
}