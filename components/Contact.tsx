"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { contact } from "@/data/content";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", business: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-md bg-[#0D0D0F] border border-[#1E1E24] text-[#F0EEE8] placeholder-[#8A8A96] text-sm focus:outline-none focus:border-[#4A8FD4] transition-colors duration-200";

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: headline */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#4A8FD4] text-sm font-medium tracking-widest uppercase">
              Contact
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#F0EEE8] tracking-tight leading-tight">
              {contact.headline}
            </h2>
            <p className="mt-5 text-[#8A8A96] text-lg leading-relaxed">
              {contact.subtext}
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="inline-block mt-8 text-[#4A8FD4] hover:text-[#6aafec] transition-colors duration-200 text-sm"
            >
              {contact.email}
            </a>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.65,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {status === "sent" ? (
              <div className="p-8 rounded-xl bg-[#141417] border border-[#1E1E24] text-center">
                <div className="inline-flex p-3 rounded-full bg-[#4A8FD4]/10 text-[#4A8FD4] mb-4">
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
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#F0EEE8] mb-2">
                  Message received.
                </h3>
                <p className="text-[#8A8A96] text-sm">
                  Message sent — I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-xl bg-[#141417] border border-[#1E1E24] space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-[#8A8A96] mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#8A8A96] mb-1.5">
                      Business Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Smith Plumbing"
                      value={form.business}
                      onChange={(e) =>
                        setForm({ ...form, business: e.target.value })
                      }
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#8A8A96] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@smithplumbing.ca"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#8A8A96] mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your business and what you need..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3 rounded-md bg-[#4A8FD4] hover:bg-[#3a7bc4] disabled:opacity-60 text-white font-medium text-sm transition-colors duration-200"
                >
                  {status === "sending" ? "Sending..." : contact.submitLabel}
                </button>
                {status === "error" && (
                  <p className="text-sm text-red-400 text-center">
                    Something went wrong. Email me directly at{" "}
                    <a
                      href={`mailto:${contact.email}`}
                      className="underline hover:text-red-300"
                    >
                      {contact.email}
                    </a>
                    .
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
