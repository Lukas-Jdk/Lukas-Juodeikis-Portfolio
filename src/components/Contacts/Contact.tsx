// src/components/Contact.tsx
"use client";

import styles from "./contact.module.css";
import { Github, Linkedin, Facebook, Mail } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    // (Optional) jei nori – minimalūs check'ai
    if (!message) return;

    const to = "lukas.juodeikis.dev@gmail.com";

    // Gmail compose: To + Subject + Body
    const url =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      `&to=${encodeURIComponent(to)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          My <span className={styles.headingSpan}>Contacts</span>
        </div>

        <div className={styles.grid}>
          {/* LEFT */}
          <div className={styles.left}>
            <h2 className={styles.title}>
              Let&apos;s <span>Connect</span>
            </h2>

            <p className={styles.text}>
              I&apos;m currently open to new opportunities and collaborations.
              Whether you have a question I&apos;ll try my best to get back to you!
            </p>

            <div className={styles.socials} aria-label="Social links">
              <a
                className={styles.iconBtn}
                href="https://github.com/Lukas-Jdk"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>

              <a
                className={styles.iconBtn}
                href="https://www.linkedin.com/in/lukas-juodeikis/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>

              <a
                className={styles.iconBtn}
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>

              <a
                className={styles.iconBtn}
                href="https://mail.google.com/mail/?view=cm&fs=1&to=lukas.juodeikis.dev@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* RIGHT (FORM CARD) */}
          <div className={`${styles.card} card glow`}>
            <form className={styles.form} onSubmit={handleSubmit}>
              {/* SUBJECT (vietoj Name) */}
              <label className={styles.label}>
                Subject
                <input
                  name="subject"
                  className={styles.input}
                  placeholder="Subject"
                  autoComplete="off"
                />
              </label>

              {/* EMAIL (paliekam, bet nenaudojam body) */}
              <label className={styles.label}>
                Email
                <input
                  name="email"
                  className={styles.input}
                  placeholder="your@email.com"
                  type="email"
                  autoComplete="email"
                />
              </label>

              {/* MESSAGE */}
              <label className={styles.label}>
                Message
                <textarea
                  name="message"
                  className={styles.textarea}
                  placeholder="Hello, I'd like to talk about..."
                />
              </label>

              <button className={styles.button} type="submit">
                Send Message
              </button>
            </form>

            {/* jei nori mažo paaiškinimo po forma (nebūtina) */}
            {/* <div className={styles.noteSmall}>Opens Gmail draft — you click Send.</div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
