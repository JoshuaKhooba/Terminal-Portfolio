"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINES = [
  { prefix: "$ ",  text: "whoami",                                        color: "text-cyan-400" },
  { prefix: "→ ",  text: "Joshua Khooba",                                 color: "text-green-400 font-bold" },
  { prefix: "$ ",  text: "cat role.txt",                                   color: "text-cyan-400" },
  { prefix: "→ ",  text: "IT Support Specialist & Full-Stack Developer",   color: "text-slate-200" },
  { prefix: "$ ",  text: "cat location.txt",                               color: "text-cyan-400" },
  { prefix: "→ ",  text: "Orlando, Florida  🌴",                           color: "text-slate-200" },
  { prefix: "$ ",  text: "ls skills/",                                     color: "text-cyan-400" },
  { prefix: "→ ",  text: "TypeScript  Python  React  Next.js  AWS  Swift", color: "text-green-400" },
  { prefix: "$ ",  text: "echo $STATUS",                                   color: "text-cyan-400" },
  { prefix: "→ ",  text: "Available for opportunities 🚀",                 color: "text-cyan-300" },
];

export function Hero() {
  const [revealed, setRevealed] = useState<number[]>(Array(LINES.length).fill(0));
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine >= LINES.length) return;
    const full = LINES[currentLine].text.length;
    let i = 0;
    const tick = setInterval(() => {
      i++;
      setRevealed(prev => { const n = [...prev]; n[currentLine] = i; return n; });
      if (i >= full) {
        clearInterval(tick);
        setTimeout(() => setCurrentLine(l => l + 1), 150);
      }
    }, 18);
    return () => clearInterval(tick);
  }, [currentLine]);

  const done = currentLine >= LINES.length;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "rgba(0,0,0,0.6)" }}>


      {/* Ambient orbs */}
      <div className="orb orb-cyan absolute top-20 left-20 w-80 h-80" style={{ animationDuration: "10s" }} />
      <div className="orb orb-green absolute bottom-20 right-20 w-96 h-96" style={{ animationDuration: "12s" }} />
      <div className="orb orb-purple absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2" style={{ animationDuration: "15s" }} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-16 w-full">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="badge badge-cyan inline-flex items-center gap-2 py-1.5 px-4">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>Available for opportunities</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-7xl font-black mb-3 leading-none tracking-tight whitespace-nowrap">
            <span className="text-white">Joshua </span><span className="gradient-text">Khooba</span>
          </h1>
          <p className="text-slate-400 text-xl mb-10 font-mono">
            <span className="text-cyan-500">const</span>{" "}
            <span className="text-green-400">role</span>{" "}
            <span className="text-slate-500">=</span>{" "}
            <span className="text-yellow-300">&quot;IT Support &amp; Full-Stack Developer&quot;</span>
          </p>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="terminal-window max-w-2xl"
        >
          <div className="terminal-header">
            <span className="terminal-dot terminal-dot-red" />
            <span className="terminal-dot terminal-dot-yellow" />
            <span className="terminal-dot terminal-dot-green" />
            <span className="terminal-title">bash — portfolio@joshuakhooba</span>
          </div>
          <div className="terminal-body">
            {LINES.map((line, i) => {
              const chars = revealed[i] ?? 0;
              if (i > currentLine && chars === 0) return null;
              return (
                <div key={i} className="flex items-start">
                  <span className="text-slate-600 mr-1 select-none shrink-0">{line.prefix}</span>
                  <span className={line.color}>{line.text.slice(0, chars)}</span>
                  {i === currentLine && (
                    <span className="inline-block w-[7px] h-[1.1em] bg-cyan-400 ml-0.5 align-middle"
                      style={{ animation: "blink 1s step-end infinite" }} />
                  )}
                </div>
              );
            })}
            {done && (
              <div className="flex mt-1">
                <span className="text-slate-600 mr-1">$ </span>
                <span className="inline-block w-[7px] h-[1.1em] bg-cyan-400 align-middle"
                  style={{ animation: "blink 1s step-end infinite" }} />
              </div>
            )}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap gap-4 mt-8"
        >
          <motion.a href="#projects" className="btn-primary" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <span>./view_projects()</span>
            <span>→</span>
          </motion.a>
          <motion.a href="#contact" className="btn-outline" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <span>./contact.sh</span>
          </motion.a>
          <motion.a
            href="/assets/Joshua_Khooba_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>↓</span>
            <span>resume.pdf</span>
          </motion.a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-16 flex items-center gap-2 text-slate-600 text-xs"
        >
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >↓</motion.span>
          <span>scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}
