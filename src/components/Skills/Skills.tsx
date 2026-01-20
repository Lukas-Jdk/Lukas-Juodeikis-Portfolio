// src/components/Skills.tsx
import styles from "./skills.module.css";
import type { ComponentType, CSSProperties } from "react";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiExpress, SiPostgresql, SiMongodb, SiPrisma, SiDocker } from "react-icons/si";
import { FiLink } from "react-icons/fi";

type Skill = {
  name: string;
  value: number;
  Icon: ComponentType<{ size?: number; className?: string; style?: CSSProperties }>;
  color: string;
};

const data: { title: string; items: Skill[] }[] = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", value: 88, Icon: FaHtml5, color: "#E34F26" },
      { name: "CSS", value: 84, Icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", value: 86, Icon: FaJs, color: "#F7DF1E" },
      { name: "TypeScript", value: 80, Icon: SiTypescript, color: "#3178C6" },
      { name: "React", value: 83, Icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", value: 78, Icon: SiNextdotjs, color: "#FFFFFF" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", value: 79, Icon: FaNodeJs, color: "#3C873A" },
      { name: "Express.js", value: 74, Icon: SiExpress, color: "#AAAAAA" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", value: 73, Icon: SiPostgresql, color: "#336791" },
      { name: "MongoDB", value: 70, Icon: SiMongodb, color: "#47A248" },
      { name: "Prisma", value: 72, Icon: SiPrisma, color: "#00B5A5" },
    ],
  },
  {
    title: "APIs & Tools",
    items: [
      { name: "REST APIs", value: 82, Icon: FiLink, color: "#00CCFF" },
      { name: "Git", value: 80, Icon: FaGitAlt, color: "#F05032" },
      
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className={styles.head}>
          <div className={styles.skillsTitle}>
            My <span className={styles.skillsTitleSpan}>Skills</span>
          </div>
          <div className={styles.skillsSubtitle}>
            Tech stack and what I use daily.
          </div>
        </div>

        <div className={styles.grid}>
          {data.map((group) => (
            <div key={group.title} className={`${styles.card} card glow`}>
              <div className={styles.cardTitle}>{group.title}</div>

              <div className={styles.list}>
                {group.items.map((s) => (
                  <div key={s.name} className={styles.row}>
                    <div className={styles.meta}>
                      <span className={styles.name}>
                        <s.Icon
                          size={16}
                          style={{ color: s.color }}
                          className={styles.icon}
                        />
                        {s.name}
                      </span>
                      <span className={styles.value}>{s.value}%</span>
                    </div>

                    <div className={styles.track}>
                      <div
                        className={styles.fill}
                        style={{ width: `${s.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
