"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion"; // Changed from motion/react to framer-motion
import { cn } from "../../lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
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
      <motion.div ref={scope} className="flex flex-wrap justify-center gap-x-1">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="opacity-0 text-2xl font-semibold tracking-wide transition-transform duration-300 hover:scale-105"
            style={{
              filter: filter ? "blur(10px)" : "none",
              transform: "translateY(10px) scale(0.95)",
              display: "inline-block",
            }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
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