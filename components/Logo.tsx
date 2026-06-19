"use client";

import { useState } from "react";
import Image from "next/image";

interface LogoProps {
  height?: number;
  className?: string;
}

export default function Logo({ height = 36, className = "" }: LogoProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <span
        className={`font-bold tracking-[0.15em] text-[#F0EEE8] uppercase ${className}`}
        style={{ fontSize: height * 0.55 }}
      >
        AURENTIS
      </span>
    );
  }

  return (
    <Image
      src="/images/aurentis.logo.png"
      alt="Aurentis"
      height={height}
      width={height * 3.3}
      className={`object-contain brightness-110 block ${className}`}
      style={{ mixBlendMode: "lighten", height: `${height}px`, width: "auto", background: "none" }}
      priority
      onError={() => setError(true)}
      unoptimized
    />
  );
}
