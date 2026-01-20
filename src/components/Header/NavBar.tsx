// src/components/NavBar.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./navbar.module.css";

const LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on outside click + ESC
  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (!open) return;
      if (!panelRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={styles.header}>
      {/* FULL WIDTH BAR */}
      <div className={styles.bar}>
        {/* MAX WIDTH INNER */}
        <div className={styles.inner}>
          <a className={styles.brand} href="#top">
            Lj<span className={styles.dot}>D</span>
          </a>

          <nav className={styles.nav}>
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className={styles.link}>
                {l.label}
              </a>
            ))}
          </nav>

          <a className={styles.cta} href="#contact">
            Language
          </a>

          <button
            type="button"
            className={`${styles.burger} ${open ? styles.open : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      {open && (
        <div className={styles.overlay}>
          <div ref={panelRef} className={styles.panel}>
            <div className={styles.panelTop}>
              <div className={styles.panelTitle}>
                Lj<span className={styles.dot}>D</span>
                <div className={styles.panelTitleLine}></div>
              </div>
             
            </div>

            <div className={styles.panelLinks}>
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={styles.panelLink}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className={styles.panelCta}
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
