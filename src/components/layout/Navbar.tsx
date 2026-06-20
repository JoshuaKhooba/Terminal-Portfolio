"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "#education",    label: "./education" },
  { href: "#skills",       label: "./skills" },
  { href: "#experience",   label: "./experience" },
  { href: "#projects",     label: "./projects" },
  { href: "#contact",      label: "./contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ boxShadow: scrolled ? "0 4px 30px rgba(34,211,238,0.05)" : "none" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="gradient-text-static text-xl font-bold tracking-wide -ml-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          &lt;Joshua.Khooba /&gt;
        </motion.a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-mono relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              whileHover={{ y: -1 }}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.a
            href="/assets/Joshua_Khooba_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs px-4 py-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>resume.pdf</span>
          </motion.a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-cyan-400 transition-colors"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen
              ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-6 pb-4 flex flex-col gap-3 border-t border-cyan-500/10 pt-3">
              {NAV_LINKS.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/assets/Joshua_Khooba_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-4 py-2 self-start mt-1"
              >
                <span>resume.pdf</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
