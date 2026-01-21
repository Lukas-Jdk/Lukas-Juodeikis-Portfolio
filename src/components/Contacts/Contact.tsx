// src/components/Contact.tsx
"use client";

import styles from "./contact.module.css";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.heading}>My <span className={styles.headingSpan}>Contacts</span></div>
        <div className={styles.grid}>
          {/* LEFT */}
          <div className={styles.left}>
            <h2 className={styles.title}>
              Let&apos;s <span>Connect</span>
            </h2>

            <p className={styles.text}>
              I&apos;m currently open to new opportunities and collaborations.
              Whether you have a question  I&apos;ll try
              my best to get back to you!
            </p>

            <div className={styles.socials} aria-label="Social links">
              <a
                className={styles.iconBtn}
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>

              <a
                className={styles.iconBtn}
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>

              <a
                className={styles.iconBtn}
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
              >
                <Twitter size={24} />
              </a>

              <a
                className={styles.iconBtn}
                href="mailto:lukas.juodeikis.dev@gmail.com"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* RIGHT (FORM CARD) */}
          <div className={`${styles.card} card glow`}>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <label className={styles.label}>
                Name
                <input className={styles.input} placeholder="Your Name" />
              </label>

              <label className={styles.label}>
                Email
                <input
                  className={styles.input}
                  placeholder="your@email.com"
                  type="email"
                />
              </label>

              <label className={styles.label}>
                Message
                <textarea
                  className={styles.textarea}
                  placeholder="Hello, I'd like to talk about..."
                />
              </label>

              <button className={styles.button} type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
