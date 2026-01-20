"use client";

import { useMemo, useState } from "react";
import styles from "./projects.module.css";
import Image from "next/image";

type Category = "All" | "Websites" | "Chatbots" | "Applications";
type Level = "Simple" | "Intermediate" | "Advanced";

type Project = {
  title: string;
  description: string;
  category: Exclude<Category, "All">;
  level: Level;
  tags: string[];
  image: string;
};

const PROJECTS: Project[] = [
  // -----------------
  // WEBSITES
  // -----------------
  {
    title: "Landing Page",
    description:
      "High-converting landing page with premium UI, responsive layout, and performance-first structure.",
    category: "Websites",
    level: "Simple",
    tags: ["HTML", "CSS", "SEO"],
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1600&q=70",
  },
  {
    title: "Business Website",
    description:
      "Multi-page business website with reusable sections, smooth navigation, and scalable design system.",
    category: "Websites",
    level: "Intermediate",
    tags: ["Next.js", "UX", "Performance"],
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=70",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce solution with real-time inventory, secure payments, and admin workflows.",
    category: "Websites",
    level: "Advanced",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=70",
  },

  // -----------------
  // CHATBOTS
  // -----------------
  {
    title: "FAQ Chatbot",
    description:
      "Simple FAQ chatbot with guided flows and clean chat UI for fast customer support.",
    category: "Chatbots",
    level: "Simple",
    tags: ["Chat UI", "Flows", "UX"],
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=70",
  },
  {
    title: "Support Assistant Bot",
    description:
      "Support chatbot concept with chat history, categories, and integrations-ready architecture.",
    category: "Chatbots",
    level: "Intermediate",
    tags: ["React", "TypeScript", "API-ready"],
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=70",
  },
  {
    title: "AI Customer Support Bot",
    description:
      "AI-driven customer support bot concept: intent routing, smart replies, and ticket automation.",
    category: "Chatbots",
    level: "Advanced",
    tags: ["LLM", "NLP", "Automation"],
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=70",
  },

  // -----------------
  // APPLICATIONS
  // -----------------
  {
    title: "Tool / Tracker App",
    description:
      "Minimal tracker tool with CRUD flows, clean UI, and practical daily-use features.",
    category: "Applications",
    level: "Simple",
    tags: ["CRUD", "UI", "Fast"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=70",
  },
  {
    title: "Full-Stack Platform",
    description:
      "Advanced full-stack platform concept: auth, APIs, database, roles, and deployment-ready structure.",
    category: "Applications",
    level: "Advanced",
    tags: ["Full-Stack", "APIs", "DB"],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=70",
  },
];

const FILTERS: Category[] = ["All", "Websites", "Chatbots", "Applications"];
const CATEGORIES: Exclude<Category, "All">[] = ["Websites", "Chatbots", "Applications"];

export default function Projects() {
  const [active, setActive] = useState<Category>("All");

  // Grouped data, but respects selected filter
  const grouped = useMemo(() => {
    const wanted = active === "All" ? CATEGORIES : ([active] as Exclude<Category, "All">[]);
    return wanted
      .map((cat) => ({
        category: cat,
        items: PROJECTS.filter((p) => p.category === cat),
      }))
      .filter((g) => g.items.length > 0);
  }, [active]);

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            My <span>Projects</span>
          </h2>
          <p className={styles.subtitle}>
            A collection of my work grouped by category.
          </p>

          <div className={styles.filters} role="tablist" aria-label="Projects filter">
            {FILTERS.map((f) => {
              const isActive = f === active;
              return (
                <button
                  key={f}
                  type="button"
                  className={`${styles.filterBtn} ${isActive ? styles.filterActive : ""}`}
                  onClick={() => setActive(f)}
                  aria-pressed={isActive}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.groups}>
          {grouped.map((g) => (
            <div key={g.category} className={styles.categoryBlock}>
              <div className={styles.categoryLabel}>{g.category}</div>

              <div className={styles.grid}>
                {g.items.map((p) => (
                  <article key={p.title} className={styles.card}>
                    <div className={styles.media}>
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 900px) 100vw, 33vw"
                        className={styles.image}
                      />
                      <div className={styles.level}>{p.level}</div>
                      <div className={styles.mediaOverlay} />
                    </div>

                    <div className={styles.body}>
                      <h3 className={styles.cardTitle}>{p.title}</h3>
                      <p className={styles.desc}>{p.description}</p>

                      <div className={styles.tags}>
                        {p.tags.map((t) => (
                          <span key={t} className={styles.tag}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
