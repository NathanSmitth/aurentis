"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { portfolio } from "@/data/content";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof portfolio)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isEmpty = !project.image;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative rounded-xl overflow-hidden bg-[#141417] border border-[#1E1E24] transition-colors duration-300"
    >
      {/* Image / placeholder area */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0F0F12]">
        {isEmpty ? (
          <div className="absolute inset-0 flex items-center justify-center">
            {/* subtle grid */}
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
        ) : null}
      </div>

      {/* Card info */}
      <div className="p-5">
        <span className="text-xs text-[#4A8FD4]/60 font-medium tracking-wider uppercase">
          {project.industry}
        </span>
        <h3 className="mt-1.5 text-base font-semibold text-[#8A8A96]">
          {project.name}
        </h3>
      </div>
    </motion.div>
  );
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
