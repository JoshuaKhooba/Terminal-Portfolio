"use client";
import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    let x = 0, y = 0;
    let tx = 0, ty = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const animate = () => {
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      el.style.transform = `translate(${x - 192}px, ${y - 192}px)`;
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    animId = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-96 h-96 pointer-events-none z-0"
      style={{
        background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(20px)",
        willChange: "transform",
      }}
    />
  );
}
