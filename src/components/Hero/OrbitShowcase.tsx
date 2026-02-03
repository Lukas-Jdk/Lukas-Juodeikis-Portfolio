"use client";

import { useMemo, useRef } from "react";
import styles from "./orbit.module.css";

type IconItem = {
  name: string;
  delay: number;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
};

// ✅ CSS custom properties be `any`
type CSSVars = React.CSSProperties & {
  ["--angle"]?: string;
  ["--delay"]?: string;
};

/* --- SVG ICONS --- */

const Html5: IconItem["Svg"] = (props) => (
  <svg viewBox="0 0 256 256" {...props}>
    <path fill="#E44D26" d="M48 0h160l-14 182-66 18-66-18L48 0z" />
    <path fill="#F16529" d="M128 200l53-15 12-167H128v182z" />
  </svg>
);

const Css3: IconItem["Svg"] = (props) => (
  <svg viewBox="0 0 256 256" {...props}>
    <path fill="#1572B6" d="M48 0h160l-14 182-66 18-66-18L48 0z" />
  </svg>
);

const Js: IconItem["Svg"] = (props) => (
  <svg viewBox="0 0 256 256" {...props}>
    <path fill="#F7DF1E" d="M0 0h256v256H0z" />
  </svg>
);

const Ts: IconItem["Svg"] = (props) => (
  <svg viewBox="0 0 256 256" {...props}>
    <path fill="#3178C6" d="M0 0h256v256H0z" />
  </svg>
);

const ReactIcon: IconItem["Svg"] = (props) => (
  <svg viewBox="0 0 256 256" {...props}>
    <circle cx="128" cy="128" r="24" fill="#61DAFB" />
  </svg>
);

export default function OrbitShowcase() {
  const stageRef = useRef<HTMLDivElement>(null);

  const icons: IconItem[] = useMemo(
    () => [
      { name: "TypeScript", delay: 0.05, Svg: Ts },
      { name: "JavaScript", delay: 0.12, Svg: Js },
      { name: "HTML", delay: 0.18, Svg: Html5 },
      { name: "CSS", delay: 0.08, Svg: Css3 },
      { name: "React", delay: 0.22, Svg: ReactIcon },
    ],
    []
  );

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = stageRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--mx", String(nx));
    el.style.setProperty("--my", String(ny));
  }

  function onLeave() {
    const el = stageRef.current;
    if (!el) return;
    el.style.setProperty("--mx", "0");
    el.style.setProperty("--my", "0");
  }

  return (
    <div
      ref={stageRef}
      className={styles.stage}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className={styles.center}>
        <div className={styles.orb} />
        <div className={styles.ring} />
        <div className={styles.ring2} />
      </div>

      <div className={styles.orbit} aria-hidden="true">
        {icons.map((it, idx) => (
          <div
            key={it.name}
            className={styles.orbitItem}
            style={
              {
                "--angle": `${(360 / icons.length) * idx}deg`,
                "--delay": `${it.delay}s`,
              } as CSSVars
            }
            title={it.name}
          >
            <div className={styles.iconCard}>
              <it.Svg className={styles.iconSvg} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
