"use client";

import { automations, navigation } from "@/data/content";
import { Reveal } from "@/components/ScrollReveal";

function SparkleIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2l1.8 5.6L19 9.5l-5.2 1.9L12 17l-1.8-5.6L5 9.5l5.2-1.9L12 2z" />
    </svg>
  );
}

function MissedCallPreview() {
  return (
    <div className="rounded-xl bg-[#141417] border border-[#1E1E24] p-5">
      <span className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-wide uppercase text-[#e05a4e] bg-[#e05a4e]/10 px-2 py-1 rounded-full">
        Missed Call · 2:14 PM
      </span>

      <div className="mt-4 flex flex-col gap-2.5">
        <div className="self-end max-w-[85%] bg-[#4A8FD4] text-white text-sm leading-snug rounded-xl rounded-br-sm px-3.5 py-2.5">
          Hey! Sorry we missed your call — reply here and we&apos;ll get right back to you.
        </div>
        <div className="self-start max-w-[85%] bg-[#0D0D0F] border border-[#1E1E24] text-[#F0EEE8] text-sm leading-snug rounded-xl rounded-bl-sm px-3.5 py-2.5">
          Hi, need a quote for brake replacement
        </div>
        <div className="self-end max-w-[85%] bg-[#4A8FD4] text-white text-sm leading-snug rounded-xl rounded-br-sm px-3.5 py-2.5">
          Got it — we&apos;ll text you a quote within the hour!
        </div>
      </div>
    </div>
  );
}

function ReviewPreview() {
  return (
    <div className="rounded-xl bg-[#141417] border border-[#1E1E24] p-5">
      <div className="flex items-center gap-1 text-[#4A8FD4]">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l2.9 6.6 7.1.7-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.3l7.1-.7L12 2z" />
          </svg>
        ))}
      </div>
      <p className="mt-2.5 text-sm font-semibold text-[#F0EEE8]">Danielle R.</p>
      <p className="mt-1 text-sm text-[#8A8A96] leading-relaxed">
        &ldquo;Fixed my brakes same day for $80 less than the dealer quoted. Didn&apos;t expect that.&rdquo;
      </p>

      <div className="mt-4 pt-4 border-t border-[#1E1E24]">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-wide uppercase text-[#4A8FD4]">
          <SparkleIcon />
          Auto-drafted reply
        </span>
        <p className="mt-2 text-sm text-[#8A8A96] leading-relaxed">
          Thanks so much, Danielle — glad we could get you back on the road quickly. See you next time!
        </p>
        <span className="mt-3 inline-flex items-center px-3 py-1.5 rounded-md bg-[#4A8FD4] text-white text-xs font-medium">
          Approve &amp; Send
        </span>
      </div>
    </div>
  );
}

function ReminderPreview() {
  return (
    <div className="rounded-xl bg-[#141417] border border-[#1E1E24] p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-[#F0EEE8]">Appointment reminder</p>
          <p className="mt-0.5 text-xs text-[#8A8A96]">Tomorrow · 10:00 AM oil change</p>
        </div>
        <span className="shrink-0 text-[10px] font-medium tracking-wide uppercase text-[#4A8FD4] bg-[#4A8FD4]/10 px-2 py-1 rounded-full">
          Reminder sent
        </span>
      </div>

      <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#1E1E24]">
        <div>
          <p className="text-sm font-semibold text-[#F0EEE8]">New lead — web form</p>
          <p className="mt-0.5 text-xs text-[#8A8A96]">&ldquo;Need a quote for a transmission check&rdquo;</p>
        </div>
        <span className="shrink-0 text-[10px] font-medium tracking-wide uppercase text-[#4A8FD4] bg-[#4A8FD4]/10 px-2 py-1 rounded-full">
          Texted in 45s
        </span>
      </div>
    </div>
  );
}

const previews: Record<string, () => React.ReactNode> = {
  "missed-call": MissedCallPreview,
  reviews: ReviewPreview,
  reminders: ReminderPreview,
};

export default function Automations() {
  return (
    <section id="automations" className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-16 max-w-[640px]">
          <span className="text-[#4A8FD4] text-sm font-medium tracking-widest uppercase">
            {automations.kicker}
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#F0EEE8] tracking-tight">
            {automations.headline}
          </h2>
          <p className="mt-5 text-base text-[#8A8A96] leading-relaxed">
            {automations.subheadline}
          </p>
        </Reveal>

        <div className="flex flex-col">
          {automations.rows.map((row, i) => {
            const Preview = previews[row.id];
            const reversed = i % 2 === 1;
            return (
              <div
                key={row.id}
                className={`flex flex-col ${
                  reversed ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-10 md:gap-16 ${i !== 0 ? "mt-20 md:mt-28" : ""}`}
              >
                <Reveal className="w-full md:w-1/2">
                  <Preview />
                </Reveal>
                <Reveal delay={150} className="w-full md:w-1/2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#4A8FD4]/40 text-[#4A8FD4] font-semibold text-sm mb-5">
                    {row.number}
                  </div>
                  <h3 className="text-[28px] font-bold text-[#F0EEE8] mb-3">
                    {row.title}
                  </h3>
                  <p className="text-[#8A8A96] leading-relaxed">
                    {row.description}
                  </p>
                </Reveal>
              </div>
            );
          })}
        </div>

        <Reveal className="mt-20 md:mt-24 flex justify-center">
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center px-4 py-2 rounded-md bg-[#4A8FD4] hover:bg-[#3a7bc4] text-white text-sm font-medium transition-colors duration-200"
          >
            {navigation.cta}
          </button>
        </Reveal>
      </div>
    </section>
  );
}
