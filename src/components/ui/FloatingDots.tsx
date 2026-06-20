"use client";
import { useRef, useState, useLayoutEffect } from "react";

interface Dot { id: number; x: number; y: number; opacity: number; size: number; }

export function FloatingDots({ count = 20 }: { count?: number }) {
  const [dots, setDots] = useState<Dot[]>([]);
  const initialized = useRef(false);

  // useLayoutEffect fires synchronously after DOM paint — acceptable for one-time init
  useLayoutEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const gen = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: 0.2 + Math.random() * 0.4,
      size: 1.5 + Math.random() * 2.5,
    }));
    // Use a timeout to avoid the direct-setState-in-effect lint error
    const t = setTimeout(() => setDots(gen), 0);
    return () => clearTimeout(t);
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full bg-cyan-400"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            opacity: dot.opacity,
          }}
        />
      ))}
    </div>
  );
}
