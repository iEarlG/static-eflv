"use client"

import { motion } from "framer-motion";

import { useScrollProgress } from "@/hooks/useScrollProgress";

const variant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Template({ 
  children,
}: {children: React.ReactNode}) {
    const completion = useScrollProgress();
    return (
      <>
        <motion.main
          variants={variant} 
          initial="hidden" 
          animate="visible"
          transition={{type: "linear", delay: 0.2, duration: 0.4 }}
        >
          {children}
        </motion.main>
        <span 
          style={{transform: `translateY(${completion - 100}%)`}}
          className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700">
        </span>
        <div className="h-[4000px]">
        </div>
      </>
    );
  }