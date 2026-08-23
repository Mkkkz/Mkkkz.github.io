"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contatos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-100 h-[var(--nav-height)] border-b backdrop-blur-md transition-colors duration-300 ${
        scrolled
          ? "border-white/10 bg-black/80"
          : "border-white/5 bg-black/50"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[var(--max-width)] items-center justify-between gap-6 px-7">
        <a href="#hero" className="text-[1.05rem] font-bold tracking-tight">
          Miguel Inácio
        </a>

        <nav
          className={`fixed left-0 right-0 top-[var(--nav-height)] flex-col items-start gap-0 border-b border-white/10 bg-black px-7 pb-5 pt-2.5 transition-all duration-300 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 ${
            open
              ? "visible flex translate-y-0 opacity-100"
              : "invisible -translate-y-3 opacity-0 md:visible md:translate-y-0 md:opacity-100"
          }`}
          aria-label="Navegação principal"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="w-full border-b border-white/5 py-3.5 text-base font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)] md:w-auto md:border-0 md:py-0 md:text-[0.92rem]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="flex h-11 w-11 flex-col items-center justify-center rounded-xl border border-white/10 md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}
              >
                <X size={20} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.15 }}
              >
                <Menu size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </header>
  );
}