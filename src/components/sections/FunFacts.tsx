"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { funFacts } from "@/data/portfolio";

export function FunFacts() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="py-24 section-darker relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-full opacity-10 pointer-events-none" />
      <div className="orb orb-cyan absolute top-20 right-0 w-80 h-80 opacity-20" />

      <div className="max-w-5xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-heading mb-3">
            <div className="section-dash section-dash-green" />
            <h2 className="section-title gradient-text-static">🎯 About.me()</h2>
            <div className="section-dash section-dash-green-r" />
          </div>
          <p className="section-subtitle">{"// Beyond the terminal — who I am"}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-neon"
          >
            <div className="terminal-header -mx-6 -mt-6 mb-5 rounded-t-xl">
              <span className="terminal-dot terminal-dot-red" />
              <span className="terminal-dot terminal-dot-yellow" />
              <span className="terminal-dot terminal-dot-green" />
              <span className="terminal-title">Hobbies.array</span>
            </div>
            <div className="font-mono text-sm mb-3">
              <span className="text-purple-400">const </span>
              <span className="text-cyan-400">hobbies</span>
              <span className="text-slate-500"> = [</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {funFacts.hobbies.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  whileHover={{ scale: 1.05, x: 4 }}
                  className="flex items-center gap-2 bg-black/40 border border-cyan-500/10 rounded-lg px-3 py-2 hover:border-cyan-500/30 transition-colors cursor-default"
                >
                  <span className="text-lg">{h.emoji}</span>
                  <span className="text-slate-300 text-xs">{h.label}</span>
                </motion.div>
              ))}
            </div>
            <div className="font-mono text-sm mt-3"><span className="text-slate-500">]</span></div>
          </motion.div>

          {/* Fun facts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-neon"
          >
            <div className="terminal-header -mx-6 -mt-6 mb-5 rounded-t-xl">
              <span className="terminal-dot terminal-dot-red" />
              <span className="terminal-dot terminal-dot-yellow" />
              <span className="terminal-dot terminal-dot-green" />
              <span className="terminal-title">Fun_facts.log</span>
            </div>
            <div className="font-mono text-sm mb-3">
              <span className="text-purple-400">const </span>
              <span className="text-cyan-400">funFacts</span>
              <span className="text-slate-500"> = [</span>
            </div>
            <ul className="space-y-3">
              {funFacts.facts.map((fact, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-lg shrink-0">{fact.emoji}</span>
                  <span className="text-slate-300 text-xs leading-relaxed">{fact.text}</span>
                </motion.li>
              ))}
            </ul>
            <div className="font-mono text-sm mt-3"><span className="text-slate-500">]</span></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
