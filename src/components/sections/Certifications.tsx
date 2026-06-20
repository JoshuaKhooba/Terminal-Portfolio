"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="certifications" className="py-24 section-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-full opacity-15 pointer-events-none" />
      <div className="orb orb-purple absolute bottom-20 right-20 w-80 h-80 opacity-20" />

      <div className="max-w-5xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="section-heading mb-3">
            <div className="section-dash section-dash-amber" />
            <h2 className="section-title gradient-text-amber">🏆 Certs.verified</h2>
            <div className="section-dash section-dash-amber-r" />
          </div>
          <p className="section-subtitle">{"// Verified credentials & certifications"}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="card-neon-amber group"
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  className="icon-box icon-box-amber text-2xl"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  {cert.icon}
                </motion.div>
                <div>
                  <h3 className="gradient-text-amber font-bold text-sm leading-snug">{cert.title}</h3>
                  <p className="text-slate-400 text-xs mt-0.5">{cert.subtitle}</p>
                </div>
              </div>

              <div className="font-mono text-xs space-y-1.5 mb-4">
                <div className="flex gap-2">
                  <span className="text-amber-400 shrink-0">issued_by:</span>
                  <span className="text-slate-300">{cert.issuer}</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-amber-400 shrink-0">date:</span>
                  <span className="text-slate-300">{cert.date}</span>
                </div>
                {cert.hours && (
                  <div className="flex gap-2">
                    <span className="text-amber-400 shrink-0">hours:</span>
                    <span className="text-slate-300">{cert.hours}</span>
                  </div>
                )}
                {cert.credentialId && (
                  <div className="flex gap-2">
                    <span className="text-amber-400 shrink-0">credential_id:</span>
                    <span className="text-slate-300">{cert.credentialId}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map(s => <span key={s} className="tag-amber">{s}</span>)}
              </div>

              {cert.verifyUrl && (
                <motion.a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-xs py-1.5 self-start"
                  whileHover={{ scale: 1.05 }}
                >
                  <span>✓</span> verify_cert()
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
