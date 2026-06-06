"use client";

import { motion } from "framer-motion";
import { hero } from "@/data/content";
import ShaderBackground from "@/components/ui/shader-background";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden"
      style={{ clipPath: "inset(0)" }}
    >
      {/* Shader layer — clipped to hero height by section overflow:hidden */}
      <div className="absolute inset-0 z-0" style={{ opacity: 0.35 }}>
        <ShaderBackground />
      </div>

      {/* Hero content — above shader */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block mb-6 text-[#4A8FD4] text-sm font-medium tracking-widest uppercase">
            Fredericton, NB
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F0EEE8] leading-[1.07] tracking-tight mb-6"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-[#8A8A96] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo("work")}
            className="px-7 py-3.5 rounded-md bg-[#4A8FD4] hover:bg-[#3a7bc4] text-white font-medium text-base transition-colors duration-200"
          >
            {hero.primaryCta}
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-7 py-3.5 rounded-md border border-[#1E1E24] hover:border-[#4A8FD4] text-[#F0EEE8] font-medium text-base transition-colors duration-200"
          >
            {hero.secondaryCta}
          </button>
        </motion.div>
      </div>

    </section>
  );
}
