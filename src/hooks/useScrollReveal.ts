"use client";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export { useInView };

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.1
) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("revealed"); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}
