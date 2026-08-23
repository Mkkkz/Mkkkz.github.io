"use client";

import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "#hero", label: "Home" },
    { href: "#sobre", label: "Sobre" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contato", label: "Contatos" },
  ];

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#hero" className="navbar__logo">
          Miguel Inácio
        </a>

        <nav className={`navbar__menu${open ? " is-open" : ""}`} id="menu" aria-label="Navegação principal" ref={menuRef}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="navbar__link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="navbar__toggle"
          ref={toggleRef}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}