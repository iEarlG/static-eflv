import { useEffect, useState } from "react";

export const useScrollProgress = () => {
    const [isCompletion, setIsCompletion] = useState(0);

    useEffect(() => {
      const updateScroll = () => {
        const currentProgress = window.scrollY;
        const scrollHeight = document.body.scrollHeight - window.innerHeight;

        if (scrollHeight) {
          setIsCompletion((currentProgress / scrollHeight) * 100);
        }
      };
      window.addEventListener("scroll", updateScroll);

      return () => window.removeEventListener("scroll", updateScroll);
    }, []);
    
    return isCompletion;
}