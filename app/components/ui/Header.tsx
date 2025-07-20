"use client";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        bg-[rgba(242,230,215,0.6)]
        backdrop-blur-md
        flex items-center justify-between
        px-6 py-4
        transition-border duration-300
        ${scrolled ? "shadow-md" : ""}
      `}
    >
      <div className="w-12 h-8 bg-[#292524] rounded-sm"></div>
      <button
        className="px-4 py-2 rounded-lg font-semibold bg-[#292524] text-[#f2e6d7] hover:opacity-90 transition-opacity"
      >
        Bouton
      </button>
    </header>
  );
}