"use client";

import { whatWeDo } from "@/data/content";
import { Reveal } from "@/components/ScrollReveal";

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform duration-200 group-hover:translate-x-0.5"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const icons: Record<string, React.ReactNode> = {
  layout: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M17.5 14v7M14 17.5h7" />
    </svg>
  ),
  phone: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
};

export default function WhatWeDo() {
  return (
    <section className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-16">
          <span className="text-[#4A8FD4] text-sm font-medium tracking-widest uppercase">
            {whatWeDo.kicker}
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#F0EEE8] tracking-tight">
            {whatWeDo.headline}
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {whatWeDo.cards.map((card, i) => (
            <Reveal
              key={card.id}
              delay={i * 120}
              className="group relative p-10 rounded-xl bg-[#141417] border border-[#1E1E24] hover:border-[#4A8FD4]/40 transition-colors duration-300"
            >
              <div className="inline-flex p-2.5 rounded-lg bg-[#4A8FD4]/10 text-[#4A8FD4] mb-5">
                {icons[card.icon]}
              </div>
              <h3 className="text-xl font-semibold text-[#F0EEE8] mb-3">
                {card.title}
              </h3>
              <p className="text-[#8A8A96] leading-relaxed text-sm mb-5">
                {card.description}
              </p>
              <span className="group/link inline-flex items-center gap-1.5 text-[#4A8FD4] hover:text-[#3a7bc4] text-sm font-medium transition-colors duration-200">
                {whatWeDo.linkLabel}
                <span className="inline-flex transition-transform duration-200 group-hover/link:translate-x-0.5">
                  <ArrowRight />
                </span>
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
