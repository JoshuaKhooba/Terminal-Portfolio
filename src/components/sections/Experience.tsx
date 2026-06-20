"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experience } from "@/data/portfolio";

export function Experience() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="experience" className="py-24 section-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-full opacity-15 pointer-events-none" />
      <div className="orb orb-green absolute top-20 left-0 w-80 h-80 opacity-15" />

      <div className="max-w-5xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-heading mb-3">
            <div className="section-dash section-dash-cyan" />
            <h2 className="section-title gradient-text-static">📋 Experience.json</h2>
            <div className="section-dash section-dash-cyan-r" />
          </div>
          <p className="section-subtitle">{"// Where I've worked & learned"}</p>
        </motion.div>

        <div className="space-y-6">
          {experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="card-neon-green group"
            >
              {/* Header bar */}
              <div className="terminal-header -mx-7 -mt-7 mb-5 rounded-t-xl">
                <span className="terminal-dot terminal-dot-red" />
                <span className="terminal-dot terminal-dot-yellow" />
                <span className="terminal-dot terminal-dot-green" />
                <span className="terminal-title">{job.company.toLowerCase().replace(/\s+/g, "_")}.json</span>
                <span className="ml-auto badge badge-blue">{job.type}</span>
              </div>

              <div className="line-gutter">
                <div className="line-numbers">
                  {Array.from({ length: 5 + job.bullets.length }, (_, n) => (
                    <span key={n} className="line-num">{n + 1}</span>
                  ))}
                </div>
                <div className="line-content font-mono text-sm leading-relaxed space-y-1">
                  <div>
                    <span className="text-purple-400">function </span>
                    <span className="text-cyan-400 font-bold">{job.title.replace(/[\s/-]+/g, "")}()</span>
                    <span className="text-slate-500">{" {"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-500">{"// "}</span>
                    <span className="text-green-400 font-semibold">{job.company}</span>
                    <span className="text-slate-600 ml-2 text-xs">@ {job.location}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-amber-400">period</span>
                    <span className="text-slate-500">: </span>
                    <span className="text-slate-300">&ldquo;{job.period}&rdquo;</span>
                  </div>
                  <div className="pl-4 mt-2">
                    <span className="text-slate-500">{"// "}</span>
                    <span className="text-yellow-400">⚡ Key Achievements</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-amber-400">achievements</span>
                    <span className="text-slate-500">: [</span>
                  </div>
                  {job.bullets.map((b, j) => (
                    <motion.div
                      key={j}
                      className="pl-8 border-l-cyan ml-4"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: i * 0.1 + j * 0.05 + 0.3 }}
                    >
                      <span className="text-slate-300 text-xs leading-relaxed">
                        <span className="text-green-400 mr-1">▸</span>{b}
                      </span>
                    </motion.div>
                  ))}
                  <div className="pl-4"><span className="text-slate-500">]</span></div>
                  <div><span className="text-slate-500">{"}"}</span></div>
                </div>
              </div>

              <div className="absolute top-4 right-4 text-3xl opacity-10 group-hover:opacity-40 transition-opacity duration-500">
                {job.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
