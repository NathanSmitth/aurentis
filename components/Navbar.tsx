"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { navigation } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D0F]/95 backdrop-blur-md border-b border-[#1E1E24]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center bg-transparent p-0 border-0 outline-none"
          aria-label="Aurentis home"
        >
          <Logo height={90} />
        </button>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.links.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className="text-sm text-[#8A8A96] hover:text-[#F0EEE8] transition-colors duration-200"
            >
              {link}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => handleNav("contact")}
          className="hidden md:inline-flex items-center px-4 py-2 rounded-md bg-[#4A8FD4] hover:bg-[#3a7bc4] text-white text-sm font-medium transition-colors duration-200"
        >
          {navigation.cta}
        </button>

        {/* Mobile menu trigger */}
        <button
          onClick={() => handleNav("contact")}
          className="md:hidden inline-flex items-center px-3 py-1.5 rounded-md bg-[#4A8FD4] text-white text-sm font-medium"
        >
          {navigation.cta}
        </button>
      </nav>
    </header>
  );
}
