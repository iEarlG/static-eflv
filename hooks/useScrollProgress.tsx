import { useEffect, useState } from "react";

export const useScrollProgress = () => {
    const [isCompletion, setIsCompletion] = useState(0);

    useEffect(() => {
      const updateScroll = () => {
        const currentProgress = window.scrollY;
        const scrollHeight = document.body.scrollHeight - window.innerHeight;

        if (scrollHeight) {
            setIsCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
        }
        return (

        )
      }
    }, []);
    
    return (
        <div>
            scroll
        </div>
    );
}