"use client";

import { useMemo, useRef } from "react";
import styles from "./orbit.module.css";

type IconItem = {
  name: string;
  delay: number;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
};

// ✅ leidžia CSS custom properties be `any`
type CSSVars = React.CSSProperties & {
  ["--angle"]?: string;
  ["--delay"]?: string;
};

/* =======================
   ORIGINAL SVG ICONS
======================= */

const Html5: IconItem["Svg"] = (props) => (
  <svg viewBox="0 0 256 256" {...props}>
    <path fill="#E44D26" d="M48 0h160l-14 182-66 18-66-18L48 0z" />
    <path fill="#F16529" d="M128 200l53-15 12-167H128v182z" />
    <path
      fill="#EBEBEB"
      d="M71 38h57v28H100l2 24h26v28H76L71 38zm6 96h51v28l-24 7-24-7v-28z"
    />
    <path
      fill="#fff"
      d="M128 38h57l-3 28h-54v24h52l-4 56-48 13v-29l22-6 2-27h-24V38z"
    />
  </svg>
);

const Css3: IconItem["Svg"] = (props) => (
  <svg viewBox="0 0 256 256" {...props}>
    <path fill="#1572B6" d="M48 0h160l-14 182-66 18-66-18L48 0z" />
    <path fill="#33A9DC" d="M128 200l53-15 12-167H128v182z" />
    <path
      fill="#EBEBEB"
      d="M76 38h52v28H104l2 24h22v28H80L76 38zm4 96h48v28l-22 7-22-7v-28z"
    />
    <path
      fill="#fff"
      d="M128 38h57l-3 28h-54v24h52l-4 56-48 13v-29l22-6 2-27h-24V38z"
    />
  </svg>
);

const Js: IconItem["Svg"] = (props) => (
  <svg viewBox="0 0 256 256" {...props}>
    <path fill="#F7DF1E" d="M0 0h256v256H0z" />
    <path
      fill="#000"
      d="M150 200c6 10 14 18 28 18 12 0 20-6 20-15 0-10-8-14-22-20l-8-3c-24-10-40-22-40-48 0-24 18-42 46-42 20 0 34 7 44 25l-24 15c-5-10-11-14-20-14-9 0-15 6-15 14 0 10 6 14 20 20l8 3c28 12 44 24 44 52 0 30-24 46-56 46-31 0-52-15-62-35l26-16zM74 202c5 9 10 16 22 16 11 0 18-4 18-22V114h32v84c0 35-21 52-51 52-27 0-43-14-51-31l30-17z"
    />
  </svg>
);

const Ts: IconItem["Svg"] = (props) => (
  <svg viewBox="0 0 256 256" {...props}>
    <path fill="#3178C6" d="M0 0h256v256H0z" />
    <path
      fill="#fff"
      d="M150 138c5-1 13-2 20-2 10 0 17 2 22 6 5 4 8 10 8 18 0 16-12 25-30 25-9 0-16-1-20-2v-16c4 1 10 2 16 2 9 0 14-3 14-9 0-6-5-8-16-12-16-5-24-12-24-25 0-14 12-25 32-25 9 0 16 1 21 3v16c-4-2-11-3-18-3-9 0-13 3-13 8 0 6 6 8 18 12 16 6 22 13 22 26 0 15-11 25-35 25-10 0-19-1-23-2v-16zM52 98h88v20H112v85H84v-85H52V98z"
    />
  </svg>
);

const ReactIcon: IconItem["Svg"] = (props) => (
  <svg viewBox="0 0 256 256" {...props}>
    <circle cx="128" cy="128" r="24" fill="#61DAFB" />
    <g fill="none" stroke="#61DAFB" strokeWidth="12">
      <ellipse cx="128" cy="128" rx="92" ry="36" />
      <ellipse cx="128" cy="128" rx="92" ry="36" transform="rotate(60 128 128)" />
      <ellipse cx="128" cy="128" rx="92" ry="36" transform="rotate(120 128 128)" />
    </g>
  </svg>
);

const MongoIcon: IconItem["Svg"] = (props) => (
  <svg viewBox="0 0 256 256" {...props}>
    <path
      fill="#10AA50"
      d="M128 18c22 30 41 58 41 104 0 55-28 89-38 98l-3 18-13-8-2-10c-12-10-40-41-40-98 0-45 20-74 43-104z"
    />
    <path
      fill="#B8C4C2"
      d="M128 18c0 33-6 64 2 92 7 24 16 32 15 64-1 27-10 49-17 64l-3 18-13-8-2-10c8-18 17-39 17-67 0-31-7-43-14-64-8-26-5-59-2-89z"
      opacity="0.55"
    />
  </svg>
);

const PostgresIcon: IconItem["Svg"] = (props) => (
  <svg viewBox="0 0 256 256" {...props}>
    <rect width="256" height="256" rx="44" fill="#336791" />
    <path
      fill="#fff"
      d="M88 184c-10 0-18-18-18-38 0-21 10-44 34-56 10-5 21-7 33-7 35 0 54 20 54 48 0 18-8 34-20 34-6 0-10-4-10-11 0-8 4-14 4-23 0-15-9-26-27-26-8 0-15 2-22 6-13 8-19 22-19 35 0 13 4 26 6 31 3 7 1 13-5 13z"
      opacity="0.9"
    />
  </svg>
);

/* =======================
   COMPONENT
======================= */

export default function OrbitShowcase() {
  const stageRef = useRef<HTMLDivElement>(null);

  const icons: IconItem[] = useMemo(
    () => [
      { name: "TypeScript", delay: 0.05, Svg: Ts },
      { name: "JavaScript", delay: 0.12, Svg: Js },
      { name: "HTML", delay: 0.18, Svg: Html5 },
      { name: "CSS", delay: 0.08, Svg: Css3 },
      { name: "React", delay: 0.22, Svg: ReactIcon },
      { name: "MongoDB", delay: 0.14, Svg: MongoIcon },
      { name: "PostgreSQL", delay: 0.1, Svg: PostgresIcon },
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
