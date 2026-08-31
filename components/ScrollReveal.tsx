"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fades an element up into view the first time it crosses into the
 * viewport. Lightweight IntersectionObserver-based alternative to a
 * full animation library — used where we don't want to pull in
 * framer-motion just for a scroll reveal.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15
) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, visible]);

  return { ref, visible };
}

export function Reveal({
  children,
  delay = 0,
  threshold = 0.15,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
  className?: string;
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>(threshold);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
