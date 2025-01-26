"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { useRouter } from 'next/navigation';
import { useState } from "react";

export function HeroHighlightDemo() {
    const [role, setRole] = useState<"celeb" | "brand" | null>(null);
    const router = useRouter();
    
     const handleClientSignup = () => {
     setRole("celeb");
        router.push(`/client/signup`);
      };
    
      const handleBrandSignup = () => {
        setRole("brand");
        router.push(`/brand/signup`);
      };

  return (
    <HeroHighlight>
    <motion.h1
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [20, -5, 0],
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
    >
      
    </motion.h1>
  
    {/* Add Buttons Section */}
    <div className="mt-8 flex justify-center gap-4">
      <button
        onClick={() => handleBrandSignup()}
        className="px-12 text-xl py-3 bg-transparent border-2 border-black dark:border-white text-black dark:text-white font-semibold rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
      >
        Sign in as Brand
      </button>
      <button
        onClick={() => handleClientSignup()}
        className="px-12    text-xl py-3 bg-transparent border-2 border-black dark:border-white text-black dark:text-white font-semibold rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
      >
        Sign in as Celebrity
      </button>
    </div>
  </HeroHighlight>
  
  );
}
