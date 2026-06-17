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

function BaysideAutoPreview() {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        background: "#1B2A4A",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "28px 28px",
      }}
    >
      {/* Faux nav */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-3 border-b border-white/[0.07]">
        <div className="flex flex-col leading-none">
          <span className="text-[7px] tracking-widest font-bold uppercase" style={{ color: "#FFFFFF" }}>
            BAYSIDE AUTO
          </span>
          <span className="text-[7px] tracking-widest font-bold uppercase" style={{ color: "#E8612C" }}>
            & REPAIR
          </span>
        </div>
        <div className="flex gap-3">
          {["Services", "About", "Book"].map((l) => (
            <span key={l} className="text-[6px] tracking-[0.18em] uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
              {l}
            </span>
          ))}
        </div>
      </div>
      {/* Hero content */}
      <div className="absolute inset-0 flex flex-col items-start justify-center gap-2 px-5 pb-4 pt-10">
        <span
          className="text-[6px] tracking-[0.25em] uppercase px-2 py-1 rounded-full font-bold"
          style={{ background: "#E8612C", color: "#FFFFFF" }}
        >
          20+ Years Serving Moncton
        </span>
        <div className="flex flex-col leading-none gap-0.5 mt-1">
          <span className="text-[11px] font-black uppercase tracking-tight" style={{ color: "#FFFFFF" }}>
            Moncton&apos;s Most
          </span>
          <span className="text-[11px] font-black uppercase tracking-tight" style={{ color: "#E8612C" }}>
            Trusted
          </span>
          <span className="text-[11px] font-black uppercase tracking-tight" style={{ color: "#FFFFFF" }}>
            Auto Shop
          </span>
        </div>
      </div>
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-10"
        style={{ background: "linear-gradient(to top, #1B2A4A, transparent)" }}
      />
    </div>
  );
}

function NorthPeakPreview() {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        background: "#1e3a5f",
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 18px,
          rgba(255,255,255,0.03) 18px,
          rgba(255,255,255,0.03) 19px
        )`,
      }}
    >
      {/* Faux nav */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-3 border-b border-white/[0.08]">
        <div className="flex flex-col leading-none">
          <span className="text-[7px] tracking-widest font-bold uppercase" style={{ color: "#FFFFFF" }}>
            NorthPeak
          </span>
          <span className="text-[6px] tracking-wider font-medium uppercase" style={{ color: "rgba(255,255,255,0.45)" }}>
            Plumbing & Heating
          </span>
        </div>
        <div className="flex gap-3">
          {["Services", "About", "Contact"].map((l) => (
            <span key={l} className="text-[6px] tracking-[0.18em] uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
              {l}
            </span>
          ))}
        </div>
      </div>
      {/* Hero content */}
      <div className="absolute inset-0 flex flex-col items-start justify-center gap-2 px-5 pb-4 pt-10">
        <span
          className="text-[6px] tracking-[0.22em] uppercase px-2 py-0.5 rounded-full font-semibold"
          style={{ background: "#dc2626", color: "#FFFFFF" }}
        >
          24/7 Emergency Service
        </span>
        <div className="flex flex-col leading-snug gap-0.5 mt-1">
          <span className="text-[10px] font-black tracking-tight" style={{ color: "#FFFFFF" }}>
            Fredericton&apos;s Trusted
          </span>
          <span className="text-[10px] font-black tracking-tight" style={{ color: "#FFFFFF" }}>
            Plumbing & Heating
          </span>
          <span className="text-[10px] font-black tracking-tight" style={{ color: "#FFFFFF" }}>
            Experts
          </span>
        </div>
        <div className="flex gap-1.5 mt-1">
          <span className="text-[6px] px-2 py-0.5 rounded font-semibold" style={{ background: "#FFFFFF", color: "#1e3a5f" }}>
            Free Quote
          </span>
          <span className="text-[6px] px-2 py-0.5 rounded font-semibold" style={{ background: "#dc2626", color: "#FFFFFF" }}>
            Emergency Call
          </span>
        </div>
      </div>
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-10"
        style={{ background: "linear-gradient(to top, #152d4a, transparent)" }}
      />
    </div>
  );
}

function EmberLoomPreview() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: "#F9F6F1" }}>
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 100% 80% at 30% 110%, rgba(184,134,90,0.1) 0%, transparent 60%)",
        }}
      />
      {/* Faux nav */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-3 border-b border-[rgba(44,31,20,0.08)]">
        <span
          className="text-[9px] tracking-widest italic"
          style={{ color: "#2C1F14", fontFamily: "Georgia, serif" }}
        >
          Ember &amp; Loom
        </span>
        <div className="flex gap-3">
          {["Shop", "Story", "Contact"].map((l) => (
            <span key={l} className="text-[6px] tracking-[0.18em] uppercase" style={{ color: "rgba(44,31,20,0.35)" }}>
              {l}
            </span>
          ))}
        </div>
      </div>
      {/* Hero content */}
      <div className="absolute inset-0 flex flex-col items-start justify-center gap-1.5 px-5 pb-4 pt-10">
        <span className="text-[6px] tracking-[0.28em] uppercase" style={{ color: "#B8865A" }}>
          New Collection — Spring
        </span>
        <div className="flex flex-col leading-none gap-0.5 mt-1">
          <span className="text-[13px] leading-tight italic" style={{ color: "#2C1F14", fontFamily: "Georgia, serif", letterSpacing: "-0.02em" }}>
            A home that
          </span>
          <span className="text-[13px] leading-tight italic" style={{ color: "#2C1F14", fontFamily: "Georgia, serif", letterSpacing: "-0.02em" }}>
            feels like you.
          </span>
        </div>
        <span className="text-[6px] tracking-[0.18em] uppercase mt-1.5" style={{ color: "#2C1F14", opacity: 0.45 }}>
          Explore Collection →
        </span>
      </div>
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-10" style={{ background: "linear-gradient(to top, #F9F6F1, transparent)" }} />
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
  const hasContent = !!project.url;

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
        {project.id === "maison-noir" ? (
                  <MaisonNoirPreview />
                ) : project.id === "bayside-auto" ? (
                  <BaysideAutoPreview />
                ) : project.id === "northpeak" ? (
                  <NorthPeakPreview />
                ) : project.id === "ember-loom" ? (
                  <EmberLoomPreview />
                ) : (
                  <EmptyPreview />
                )}
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
