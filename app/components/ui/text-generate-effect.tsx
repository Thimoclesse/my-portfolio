"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion"; // Changed from motion/react to framer-motion
import { cn } from "../../lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  boldWords = [],
  fontWeight = 600,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  boldWords?: string[];
  fontWeight?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: [0, 1],
        y: [10, 0],
        scale: [0.95, 1],
        filter: filter ? ["blur(10px)", "blur(0px)"] : ["none", "none"],
      },
      {
        duration: duration ?? 1,
        delay: stagger(0.1),
        ease: "easeOut",
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="flex flex-nowrap justify-center gap-x-1 whitespace-nowrap">
        {wordsArray.map((word, idx) => {
          const isBold = boldWords.includes(word.toLowerCase());
          return (
            <motion.span
              key={word + idx}
              className={cn(
                "opacity-0 text-3xl tracking-wide transition-transform duration-500 hover:scale-105 whitespace-nowrap",
                isBold ? `font-${fontWeight}` : "font-normal"
              )}
              style={{
                filter: filter ? "blur(10px)" : "none",
                transform: "translateY(10px) scale(0.95)",
                display: "inline-block",
              }}
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};