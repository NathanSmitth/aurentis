"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface BeamsBackgroundProps {
  className?: string;
}

interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  hue: number;
  pulse: number;
  pulseSpeed: number;
}

function createBeam(width: number, height: number): Beam {
  const angle = -30 + Math.random() * 8;
  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 60 + Math.random() * 80,
    length: height * 2.8,
    angle,
    speed: 0.3 + Math.random() * 0.5,
    opacity: 0.08 + Math.random() * 0.1,
    hue: 205 + Math.random() * 15,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.012 + Math.random() * 0.018,
  };
}

const BEAM_COUNT = 12;

export function BeamsBackground({ className }: BeamsBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const beamsRef = useRef<Beam[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);

      beamsRef.current = Array.from({ length: BEAM_COUNT }, () =>
        createBeam(w, h)
      );
    };

    resize();
    window.addEventListener("resize", resize);

    function resetBeam(beam: Beam, index: number) {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const column = index % 4;
      const spacing = w / 4;
      beam.y = h + 100;
      beam.x =
        column * spacing +
        spacing / 2 +
        (Math.random() - 0.5) * spacing * 0.6;
      beam.width = 80 + Math.random() * 100;
      beam.speed = 0.3 + Math.random() * 0.5;
      beam.hue = 205 + Math.random() * 15;
      beam.opacity = 0.08 + Math.random() * 0.1;
      return beam;
    }

    function drawBeam(beam: Beam) {
      ctx!.save();
      ctx!.translate(beam.x, beam.y);
      ctx!.rotate((beam.angle * Math.PI) / 180);

      const pulsing = beam.opacity * (0.85 + Math.sin(beam.pulse) * 0.15);
      const grad = ctx!.createLinearGradient(0, 0, 0, beam.length);
      grad.addColorStop(0, `hsla(${beam.hue}, 75%, 55%, 0)`);
      grad.addColorStop(0.1, `hsla(${beam.hue}, 75%, 55%, ${pulsing * 0.4})`);
      grad.addColorStop(0.4, `hsla(${beam.hue}, 75%, 55%, ${pulsing})`);
      grad.addColorStop(0.6, `hsla(${beam.hue}, 75%, 55%, ${pulsing})`);
      grad.addColorStop(0.9, `hsla(${beam.hue}, 75%, 55%, ${pulsing * 0.4})`);
      grad.addColorStop(1, `hsla(${beam.hue}, 75%, 55%, 0)`);

      ctx!.fillStyle = grad;
      ctx!.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx!.restore();
    }

    function animate() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx!.clearRect(0, 0, w, h);
      ctx!.filter = "blur(40px)";

      beamsRef.current.forEach((beam, i) => {
        beam.y -= beam.speed;
        beam.pulse += beam.pulseSpeed;
        if (beam.y + beam.length < -100) resetBeam(beam, i);
        drawBeam(beam);
      });

      rafRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      className={cn("fixed inset-0 pointer-events-none", className)}
      style={{ zIndex: 0 }}
    >
      <div className="absolute inset-0 overflow-hidden" style={{ opacity: 0.25 }}>
        <canvas
          ref={canvasRef}
          className="absolute inset-0"
          style={{ filter: "blur(15px)" }}
        />
      </div>
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.02, 0.06, 0.02] }}
        transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
        style={{ background: "#4A8FD4", mixBlendMode: "screen" }}
      />
    </div>
  );
}
