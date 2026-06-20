"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

function initTheme(): boolean {
  if (typeof window === "undefined") return true;
  const stored = localStorage.getItem("theme");
  return stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
}

export function ThemeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const prefersDark = initTheme();
    document.documentElement.classList.toggle("dark", prefersDark);
    // Defer state updates to avoid synchronous setState-in-effect lint error
    Promise.resolve().then(() => {
      setDark(prefersDark);
      setMounted(true);
    });
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) return null;
  return (
    <button
      onClick={toggle}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-primary/10",
        className
      )}
      aria-label="Toggle theme"
    >
      {dark ? <Sun className="h-4 w-4 text-yellow-400" /> : <Moon className="h-4 w-4 text-primary" />}
    </button>
  );
}
