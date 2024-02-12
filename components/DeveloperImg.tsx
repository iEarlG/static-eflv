
import { cn } from "@/lib/utils";
import Image from "next/image";

interface DeveloperImgProps {
    imgSrc: string;
    containerStyles?: string;
}

export const DeveloperImg = ({
    imgSrc,
    containerStyles
}: DeveloperImgProps) => {
    return (
        <div className={cn(containerStyles)}>
            <Image 
                src={imgSrc}
                alt="dev"
                fill
                priority
            />
        </div>
    );
}