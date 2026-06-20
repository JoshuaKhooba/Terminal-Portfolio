"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "@/data/portfolio";

const CAT_META: Record<string, { icon: string; color: string; tagClass: string; glow: string }> = {
  Languages:  { icon: "💻", color: "text-cyan-400",   tagClass: "tag-cyan",   glow: "rgba(34,211,238,0.15)" },
  Frontend:   { icon: "⚛️",  color: "text-green-400",  tagClass: "tag-green",  glow: "rgba(74,222,128,0.15)" },
  Backend:    { icon: "🔧", color: "text-blue-400",   tagClass: "tag-cyan",   glow: "rgba(96,165,250,0.15)" },
  Databases:  { icon: "🗄️", color: "text-amber-400",  tagClass: "tag-amber",  glow: "rgba(251,191,36,0.15)" },
  Cloud:      { icon: "☁️", color: "text-purple-400", tagClass: "tag-purple", glow: "rgba(167,139,250,0.15)" },
  Tools:      { icon: "🛠️", color: "text-pink-400",   tagClass: "tag-cyan",   glow: "rgba(244,114,182,0.15)" },
};

export function Skills() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="skills" className="py-24 section-darker relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-full opacity-10 pointer-events-none" />
      <div className="orb orb-cyan absolute top-10 right-10 w-72 h-72 opacity-20" />
      <div className="orb orb-green absolute bottom-10 left-10 w-72 h-72 opacity-20" />

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-heading mb-3">
            <div className="section-dash section-dash-green" />
            <h2 className="section-title" style={{ background: "linear-gradient(to right, #4ade80, #22d3ee)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              &lt;&gt; Skills.db
            </h2>
            <div className="section-dash section-dash-green-r" />
          </div>
          <p className="section-subtitle">{"// Technologies & tools in my stack"}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([cat, items], i) => {
            const meta = CAT_META[cat] ?? CAT_META.Languages;
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  boxShadow: `0 0 30px ${meta.glow.replace("0.15", "0.6")}, 0 0 70px ${meta.glow.replace("0.15", "0.25")}, 0 0 120px ${meta.glow.replace("0.15", "0.1")}, inset 0 0 25px ${meta.glow.replace("0.15", "0.1")}`,
                }}
                className="card-neon group cursor-default"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{meta.icon}</div>
                  <h3 className={`font-bold text-sm ${meta.color}`}>{cat}</h3>
                  <div className="ml-auto">
                    <span className="badge badge-cyan text-xs">{items.length}</span>
                  </div>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <motion.span
                      key={skill.name}
                      className={`${meta.tagClass} cursor-default`}
                      whileHover={{ scale: 1.08 }}
                    >
                      {skill.icon} {skill.name}
                    </motion.span>
                  ))}
                </div>

                {/* Decorative bottom line */}
                <div className="mt-4 h-px w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: `linear-gradient(to right, ${meta.glow.replace("0.15", "0.8")}, transparent)` }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
