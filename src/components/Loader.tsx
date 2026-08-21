import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const greetings = [
  "السلام عليكم", // Arabic
  "Welcome", // English
  "你好", // Chinese
  "Привет", // Russian
  "こんにちは", // Japanese
];

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === greetings.length - 1) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 600);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 300); 

    return () => clearTimeout(timeout);
  }, [index, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg text-primary"
    >
      <div className="flex items-center gap-4 h-16 overflow-hidden">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-2 h-2 rounded-full bg-accent" 
        />
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-medium tracking-wide"
          >
            {greetings[index]}
          </motion.h1>
        </AnimatePresence>
      </div>
      
      {/* Decorative Loading Line */}
      <div className="absolute bottom-1/4 w-64 h-[1px] bg-border overflow-hidden">
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: (greetings.length * 0.3) + 0.6, ease: "linear" }}
          className="w-full h-full bg-accent"
        />
      </div>
    </motion.div>
  );
}
