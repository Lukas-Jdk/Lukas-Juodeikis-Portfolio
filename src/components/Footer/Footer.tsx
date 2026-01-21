// src/components/Footer.tsx 
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          {/* <div className={styles.brand}>
           Lj<span className={styles.dot}>D.</span>
          </div> */}
          <div className={styles.copy}> 
            © {new Date().getFullYear()} LjD. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
