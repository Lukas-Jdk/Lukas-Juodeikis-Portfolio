// src/components/Contact.tsx
"use client";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className={styles.head}>
          <div className="eyebrow">Contact</div>
          <h2 className="h2">Let’s work together.</h2>
        </div>

        <div className={`${styles.wrap} card glow`}>
          <div className={styles.left}>
            <div className={styles.label}>Email</div>
            <a className={styles.email} href="mailto:lukas@example.com">
              lukas@example.com
            </a>

            <div className={styles.note}>
              Replace this email + add GitHub/LinkedIn when ready.
            </div>
          </div>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input className={styles.input} placeholder="Your name" />
            <input className={styles.input} placeholder="Your email" />
            <textarea className={styles.textarea} placeholder="Message" />
            <button className={styles.button} type="submit">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
