"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "@/data/portfolio";

const CAT_COLORS: Record<string, string> = {
  "iOS":        "badge-purple",
  "Full-Stack": "badge-cyan",
  "Blockchain": "badge-amber",
  "Data":       "badge-green",
  "Java":       "badge-blue",
  "Web":        "badge-cyan",
};

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const visible = showAll ? projects : projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-24 section-darker relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-full opacity-10 pointer-events-none" />
      <div className="orb orb-cyan absolute top-10 right-10 w-96 h-96 opacity-15" />
      <div className="orb orb-purple absolute bottom-10 left-10 w-80 h-80 opacity-15" />

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-heading mb-3">
            <div className="section-dash section-dash-green" />
            <h2 className="section-title" style={{ background: "linear-gradient(to right, #4ade80, #22d3ee)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              📁 Projects/
            </h2>
            <div className="section-dash section-dash-green-r" />
          </div>
          <p className="section-subtitle">{"$ ls -la ~/projects | grep featured"}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="card-neon group flex flex-col"
              >
                {/* Top */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{project.emoji}</span>
                    <h3 className="text-white font-bold text-sm leading-tight group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <span className={`badge ${CAT_COLORS[project.category] ?? "badge-cyan"} shrink-0 text-xs`}>
                    {project.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-xs leading-relaxed mb-4 flex-1">
                  <span className="text-cyan-600 mr-1">|</span>
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map(t => (
                    <span key={t} className="tag-cyan text-xs py-0.5">{t}</span>
                  ))}
                </div>

                {/* Divider */}
                <div className="neon-divider mb-4" />

                {/* Links */}
                <div className="flex items-center gap-2">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-glow text-xs py-1.5 px-3"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span>⌥</span> view_code()
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-xs py-1.5 px-3"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span>↗</span> live_demo()
                    </motion.a>
                  )}
                  {project.featured && (
                    <span className="ml-auto badge badge-amber text-xs">⭐ featured</span>
                  )}
                </div>

                {/* Shimmer overlay */}
                <div className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "linear-gradient(105deg, transparent 40%, rgba(34,211,238,0.04) 50%, transparent 60%)", backgroundSize: "200% 100%", animation: "shimmer 2s infinite" }} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-10"
        >
          <motion.button
            onClick={() => setShowAll(v => !v)}
            className="btn-outline px-8 py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {showAll
              ? "$ ls  // show featured only"
              : `$ ls -a  // show all ${projects.length} repos`}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
