"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo } from "@/data/portfolio";

const CARDS = [
  { id: "email",    label: "EMAIL",     value: personalInfo.email,   href: `mailto:${personalInfo.email}`, icon: "✉️",  dot: "glow-dot-cyan" },
  { id: "github",   label: "GITHUB",    value: "JoshuaKhooba",        href: personalInfo.github,           icon: "⌥",   dot: "glow-dot-green" },
  { id: "linkedin", label: "LINKEDIN",  value: "joshua-khooba",       href: personalInfo.linkedin,         icon: "◈",   dot: "glow-dot-cyan" },
  { id: "location", label: "LOCATION",  value: personalInfo.location,  href: null,                          icon: "⌖",   dot: "glow-dot-green" },
  { id: "instagram",label: "INSTAGRAM", value: "@luckystraight_777",   href: "https://instagram.com/luckystraight_777", icon: "◉", dot: "glow-dot-cyan" },
  { id: "resume",   label: "RESUME",    value: "Joshua_Khooba_Resume.pdf", href: "/assets/Joshua_Khooba_Resume.pdf", icon: "↓", dot: "glow-dot-green" },
];

export function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="contact" className="py-24 section-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-full opacity-15 pointer-events-none" />
      <div className="orb orb-cyan absolute top-10 left-10 w-80 h-80 opacity-20" />
      <div className="orb orb-green absolute bottom-10 right-10 w-72 h-72 opacity-20" />

      <div className="max-w-5xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-heading mb-3">
            <div className="section-dash section-dash-cyan" />
            <h2 className="section-title gradient-text">📡 Contact.sh</h2>
            <div className="section-dash section-dash-cyan-r" />
          </div>
          <p className="section-subtitle">{"// Let's build something together"}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CARDS.map((card, i) => {
              const inner = (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.08 + 0.1 }}
                  whileHover={{ scale: 1.03, x: 4 }}
                  className="card-neon group relative pl-7 cursor-pointer"
                >
                  <div className={`glow-dot ${card.dot}`} />
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{card.icon}</span>
                    <div className="overflow-hidden">
                      <div className="text-slate-500 text-xs font-mono mb-0.5">{card.label}</div>
                      <div className="text-slate-200 text-xs font-mono group-hover:text-cyan-400 transition-colors truncate">
                        {card.value}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );

              return card.href ? (
                <a key={card.id} href={card.href}
                  target={card.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer" className="block">
                  {inner}
                </a>
              ) : (
                <div key={card.id}>{inner}</div>
              );
            })}
          </div>

          {/* Terminal connect block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="terminal-window relative overflow-hidden"
          >
            {/* Inner orbs */}
            <div className="orb orb-cyan absolute -top-10 -right-10 w-40 h-40 opacity-30" />
            <div className="orb orb-green absolute -bottom-10 -left-10 w-32 h-32 opacity-20" />

            <div className="terminal-header">
              <span className="terminal-dot terminal-dot-red" />
              <span className="terminal-dot terminal-dot-yellow" />
              <span className="terminal-dot terminal-dot-green" />
              <span className="terminal-title">connect.sh</span>
            </div>
            <div className="terminal-body text-sm space-y-2 relative z-10">
              <div className="text-slate-600 text-xs mb-4">{"// Ready to connect? Let's talk."}</div>

              <div><span className="text-purple-400">while </span><span className="text-cyan-400">(true)</span><span className="text-slate-500"> {"{"}</span></div>
              <div className="pl-4 space-y-1">
                {[
                  ["connect",    '"Joshua"'],
                  ["build",      '"something amazing"'],
                  ["learn",      '"grow together"'],
                  ["repeat",     '"forever"'],
                ].map(([fn, arg]) => (
                  <motion.div key={fn} whileHover={{ x: 4 }} className="cursor-default">
                    <span className="text-green-400">{fn}</span>
                    <span className="text-slate-500">(</span>
                    <span className="text-yellow-400">&ldquo;{arg.replace(/"/g, "")}&rdquo;</span>
                    <span className="text-slate-500">)</span>
                  </motion.div>
                ))}
              </div>
              <div><span className="text-slate-500">{"}"}</span></div>

              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent my-4" />

              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="btn-primary w-full justify-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>✉</span>
                <span>Send Email</span>
                <span>→</span>
              </motion.a>

              <div className="text-center mt-2">
                <span className="text-slate-600 text-xs">response_time: </span>
                <span className="text-green-400 text-xs">&ldquo;within 24h&rdquo;</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
