"use client";

import React, { useRef, useEffect, useState } from "react";

export const ScrollLinkedUnderline = () => {
  const ref = useRef<HTMLSpanElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Position du centre de l'élément par rapport au viewport
      const elementCenterY = rect.top + rect.height / 2;

      // Plage d'animation personnalisée (milieu de l'écran ± 200px)
      const start = windowHeight / 2 + 200;
      const end = windowHeight / 2 - 200;

      // Progression : 0 quand au-dessus, 1 quand complètement en dessous
      const clampedProgress = Math.min(
        1,
        Math.max(0, (elementCenterY - start) / (end - start))
      );

      setProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // init

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <span
      ref={ref}
      className="underline-animate font-semibold inline-block"
      style={{
        backgroundSize: `${progress * 100}% 0.5rem`,
      }}
    >
      Software Engineer
    </span>
  );
};
