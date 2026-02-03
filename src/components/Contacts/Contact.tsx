// src/components/Contact.tsx
// src/components/Contact.tsx
"use client";

import styles from "./contact.module.css";
import { Github, Linkedin, Facebook, Mail } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (!message) return;

    const to = "lukass.juodeikis.dev@gmail.com";

    const body = [
      message,
      "",
      "----",
      `From: ${email || "not provided"}`,
    ].join("\n");

    //  Gmail compose
    const gmailUrl =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      `&to=${encodeURIComponent(to)}` +
      `&su=${encodeURIComponent(subject || "Message from portfolio")}` +
      `&body=${encodeURIComponent(body)}`;

    // Fallback: default mail app
    const mailtoUrl =
      `mailto:${encodeURIComponent(to)}` +
      `?subject=${encodeURIComponent(subject || "Message from portfolio")}` +
      `&body=${encodeURIComponent(body)}`;

    const win = window.open(gmailUrl, "_blank", "noopener,noreferrer");

 
    if (!win) {
      window.location.href = mailtoUrl;
    }

    // optional UX: reset form
    form.reset();
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>
          My <span>Contacts</span>
        </h2>

        <div className={styles.grid}>
          {/* LEFT */}
          <div className={styles.left}>
            <h2 className={styles.title}>
              Let&apos;s <span>Connect</span>
            </h2>

            <p className={styles.text}>
              I&apos;m currently open to new opportunities and collaborations.
              Whether you have a question, I&apos;ll try my best to get back to you!
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
                href="mailto:lukass.juodeikis.dev@gmail.com"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* RIGHT (FORM CARD) */}
          <div className={`${styles.card} card glow`}>
            <form className={styles.form} onSubmit={handleSubmit}>
              {/* SUBJECT */}
              <label className={styles.label}>
                Subject
                <input
                  name="subject"
                  className={styles.input}
                  placeholder="Subject"
                  autoComplete="off"
                />
              </label>

              {/* EMAIL */}
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
                  required
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
