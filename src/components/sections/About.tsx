"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { education } from "@/data/portfolio";

export function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="education" className="py-24 section-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-full opacity-20 pointer-events-none" />
      <div className="orb orb-purple absolute top-0 right-0 w-64 h-64 opacity-30" />

      <div className="max-w-5xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-heading mb-3">
            <div className="section-dash section-dash-cyan" />
            <h2 className="section-title gradient-text">🎓 Education.log</h2>
            <div className="section-dash section-dash-cyan-r" />
          </div>
          <p className="section-subtitle">{"// My academic journey"}</p>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: i * 0.15 + 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="card-neon group"
            >
              <div className="terminal-header -mx-6 -mt-6 mb-5 rounded-t-xl">
                <span className="terminal-dot terminal-dot-red" />
                <span className="terminal-dot terminal-dot-yellow" />
                <span className="terminal-dot terminal-dot-green" />
                <span className="terminal-title">{edu.school.toLowerCase().replace(/\s+/g, "_")}.log</span>
              </div>

              <div className="line-gutter">
                <div className="line-numbers">
                  {Array.from({ length: 8 }, (_, n) => <span key={n} className="line-num">{n + 1}</span>)}
                </div>
                <div className="line-content font-mono text-sm leading-relaxed space-y-1">
                  <div>
                    <span className="text-purple-400">class </span>
                    <span className="text-cyan-400 font-bold">{edu.school.replace(/\s+/g, "")}</span>
                    <span className="text-slate-500">{" {"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-green-400">@ </span>
                    <span className="text-white font-semibold">{edu.school}</span>
                    <span className="text-slate-600 ml-2 text-xs">{" // "}{edu.location}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-amber-400">degree</span>
                    <span className="text-slate-500">: </span>
                    <span className="text-slate-200">&ldquo;{edu.degree}&rdquo;</span>
                  </div>
                  {edu.minor && (
                    <div className="pl-4">
                      <span className="text-amber-400">minor</span>
                      <span className="text-slate-500">: </span>
                      <span className="text-slate-200">&ldquo;{edu.minor}&rdquo;</span>
                    </div>
                  )}
                  <div className="pl-4">
                    <span className="text-amber-400">period</span>
                    <span className="text-slate-500">: </span>
                    <span className="text-slate-200">&ldquo;{edu.period}&rdquo;</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-amber-400">gpa</span>
                    <span className="text-slate-500">: </span>
                    <span className="text-cyan-300 font-semibold">{edu.gpa.toFixed(2)}</span>
                    <span className="text-slate-500"> {" // "} </span>
                    <span className="text-slate-400 text-xs">{edu.gpa >= 3.9 ? "summa cum laude" : "dean's list"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-amber-400">status</span>
                    <span className="text-slate-500">: </span>
                    <span className="text-green-400">&ldquo;{i === 0 ? "graduated May 2026 ✓" : "graduated Apr 2022 ✓"}&rdquo;</span>
                  </div>
                  <div><span className="text-slate-500">{"}"}</span></div>
                </div>
              </div>

              <div className="absolute top-4 right-4 text-4xl opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                {edu.logo}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
