"use client";

import { services, webDesign } from "@/data/content";
import { Reveal } from "@/components/ScrollReveal";

const icons: Record<string, React.ReactNode> = {
  design: (
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
  mobile: (
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
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <circle cx="12" cy="17" r="1" />
    </svg>
  ),
  support: (
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
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
      <path d="M9 9a3 3 0 1 1 4.927 2.293C13.376 11.699 13 12.306 13 13v0" />
      <circle cx="12" cy="17" r="0.5" fill="currentColor" />
    </svg>
  ),
};

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  return (
    <Reveal
      delay={index * 120}
      className="group relative p-8 rounded-xl bg-[#141417] border border-[#1E1E24] hover:border-[#4A8FD4]/40 transition-colors duration-300"
    >
      <div className="inline-flex p-2.5 rounded-lg bg-[#4A8FD4]/10 text-[#4A8FD4] mb-5">
        {icons[service.icon]}
      </div>
      <h3 className="text-lg font-semibold text-[#F0EEE8] mb-3">
        {service.title}
      </h3>
      <p className="text-[#8A8A96] leading-relaxed text-sm">
        {service.description}
      </p>
    </Reveal>
  );
}

export default function WebDesign() {
  return (
    <section id="web-design" className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-16">
          <span className="text-[#4A8FD4] text-sm font-medium tracking-widest uppercase">
            {webDesign.kicker}
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#F0EEE8] tracking-tight">
            {webDesign.headline}
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
