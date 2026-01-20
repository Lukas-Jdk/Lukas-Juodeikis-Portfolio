// src/components/Footer.tsx 
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            Lukas<span className={styles.dot}>.</span>
          </div>
          <div className={styles.copy}>
            © {new Date().getFullYear()} Lukas Juodeikis. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
