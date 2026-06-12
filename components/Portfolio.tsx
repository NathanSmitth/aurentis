"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { portfolio } from "@/data/content";

function MaisonNoirPreview() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: "#0A0A0B" }}>
      {/* Ambient glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(35% 0.08 74 / 0.18) 0%, transparent 70%)",
        }}
      />
      {/* Faux nav */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-3 border-b border-[rgba(201,168,76,0.12)]">
        <span
          className="text-[9px] tracking-widest italic"
          style={{ color: "#C9A84C", fontFamily: "Georgia, serif" }}
        >
          Maison Noir
        </span>
        <div className="flex gap-3">
          {["Menu", "About", "Reserve"].map((l) => (
            <span key={l} className="text-[6px] tracking-[0.18em] uppercase" style={{ color: "rgba(240,237,230,0.35)" }}>
              {l}
            </span>
          ))}
        </div>
      </div>
      {/* Hero text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pb-4">
        <span
          className="text-[7px] tracking-[0.3em] uppercase"
          style={{ color: "#C9A84C" }}
        >
          Fredericton, NB
        </span>
        <span
          className="text-[18px] leading-tight italic text-center px-4"
          style={{ color: "#F0EDE6", fontFamily: "Georgia, serif" }}
        >
          Where Silence<br />Speaks Loudest
        </span>
        <div className="w-8 h-px mt-1" style={{ background: "rgba(201,168,76,0.4)" }} />
      </div>
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12"
        style={{ background: "linear-gradient(to top, #0A0A0B, transparent)" }}
      />
    </div>
  );
}

function EmptyPreview() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #4A8FD4 1px, transparent 1px),
            linear-gradient(to bottom, #4A8FD4 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />
      <span className="relative text-[#2A2A32] text-xs tracking-[0.2em] uppercase font-medium">
        Coming Soon
      </span>
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof portfolio)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const hasContent = project.id !== "project-2" && project.id !== "project-3" && project.id !== "project-4";

  const cardContent = (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative rounded-xl overflow-hidden bg-[#141417] border transition-colors duration-300 ${
        hasContent
          ? "border-[#C9A84C]/20 hover:border-[#C9A84C]/40"
          : "border-[#1E1E24]"
      }`}
    >
      {/* Preview area */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0F0F12]">
        {project.id === "maison-noir" ? <MaisonNoirPreview /> : <EmptyPreview />}
        {/* Hover overlay for live projects */}
        {hasContent && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: "rgba(10,10,11,0.6)" }}>
            <span className="text-[10px] tracking-[0.25em] uppercase font-medium"
              style={{ color: "#C9A84C" }}>
              View Site ↗
            </span>
          </div>
        )}
      </div>

      {/* Card info */}
      <div className="p-5">
        <span className={`text-xs font-medium tracking-wider uppercase ${hasContent ? "text-[#C9A84C]/60" : "text-[#4A8FD4]/60"}`}>
          {project.industry}
        </span>
        <h3 className={`mt-1.5 text-base font-semibold ${hasContent ? "text-[#F0EDE6]" : "text-[#8A8A96]"}`}>
          {project.name}
        </h3>
      </div>
    </motion.div>
  );

  if (hasContent && project.url) {
    return (
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="work" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="text-[#4A8FD4] text-sm font-medium tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#F0EEE8] tracking-tight">
            Our Work
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {portfolio.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
