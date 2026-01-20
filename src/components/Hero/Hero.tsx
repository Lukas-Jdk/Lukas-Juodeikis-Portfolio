// src/components/Hero.tsx
import styles from "./hero.module.css";
import OrbitShowcase from "./OrbitShowcase";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className="container">
        
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.pill}>
              <span className={styles.pulse} />
              Portfolio
            </div>

            <h1 className={styles.h1}>
           <span className={styles.accent}>Lukas Juodeikis</span>
              <br />
              <span className={styles.accentProf}>Full-Stack Developer</span>
            </h1>

            <p className={styles.lead}>
              I design and build modern web applications, custom tools, systems and chatbots.
            </p>

            <p className={styles.sub}>
              <span className={styles.markSub}>|</span> Focused on clean code, performance, and user-centered solutions.
            </p>

            <div className={styles.actions}>
              <a className={styles.primary} href="#projects">
                View Projects
              </a>
              <a className={styles.secondary} href="#contact">
                Contact Me
              </a>
            </div>
          </div>

          {/* IMPORTANT: no card/glow classes here */}
          <div className={styles.right}>
            <OrbitShowcase />
          </div>
        </div>
      </div>
      <a href="#projects" className={styles.scrollMouse} aria-label="Scroll to projects">
  <span className={styles.mouseWheel} />
</a>
    </section>
  );
}
