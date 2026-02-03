// src/components/Projects/Projects.tsx
"use client";

import { useMemo, useState } from "react";
import styles from "./projects.module.css";
import Image from "next/image";

type Category = "All" | "Websites" | "Chatbots" | "Applications";
type LinkType = "website" | "demo";

type Project = {
  title: string;
  description: string;
  category: Exclude<Category, "All">;
  tags: string[];
  image: string;

  linkUrl?: string;
  linkType?: LinkType;

  caseStudyUrl?: string;
  repoUrl?: string;

  status?: "live" | "soon";
};

const PROJECTS: Project[] = [
  // -----------------
  // WEBSITES
  // -----------------
  {
    title: "JoEstetikGlow",
    description:
      "Modern landing page for an aesthetics clinic with fast performance, and seamless redirection to bookings and Messenger.",
    category: "Websites",
    tags: ["Next.js", "CSS", "Performance"],
    image: "/projects/joestetikglow.webp",
    status: "live",
    linkUrl: "https://joestetiskglow.no/",
    linkType: "website",
  },
  {
    title: "HeelsByKristi",
    description:
      "HeelsByKristi is a dance studio platform for class registration and online payments, focused on performance, UX, and secure payments.",
    category: "Websites",
    tags: ["Next.js", "UX", "Performance", "Stripe"],
    image: "/projects/heel.webp",
    status: "live",
    linkUrl: "https://www.heelsbykristi.no",
    linkType: "website",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce solution with real-time inventory, secure payments, and admin workflows.",
    category: "Websites",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    image: "/projects/eshop.webp",
    status: "soon",
  },

  // -----------------
  // CHATBOTS
  // -----------------
  {
    title: "ChatBots",
    description:
      "4 chatbot demos from FAQ to Sales, showing how guided chat flows turn visitors into structured inquiries.",
    category: "Chatbots",
    tags: ["React", "TypeScript", "i18n", "Chat UI"],
    image: "/projects/chats.webp",
    status: "live",
    linkUrl: "https://example.com",
    linkType: "demo",
  },
  // {
  //   title: "Support Assistant Bot",
  //   description:
  //     "Support chatbot concept with chat history, categories, and integrations-ready architecture.",
  //   category: "Chatbots",
  //   tags: ["React", "TypeScript", "API-ready"],
  //   image: "/projects/support-bot.webp",
  //   status: "soon",
  // },
  // {
  //   title: "AI Customer Support Bot",
  //   description:
  //     "AI-driven customer support bot concept: intent routing, smart replies, and ticket automation.",
  //   category: "Chatbots",
  //   tags: ["LLM", "NLP", "Automation"],
  //   image: "/projects/ai-bot.webp",
  //   status: "soon",
  // },

  // -----------------
  // APPLICATIONS
  // -----------------
  {
    title: "Tool / Tracker App",
    description:
      "Minimal tracker tool with CRUD flows, clean UI, and practical daily-use features.",
    category: "Applications",
    tags: ["CRUD", "UI", "Fast"],
    image: "/projects/tools.webp",
    status: "soon",
  },
  {
    title: "Full-Stack Platform",
    description:
      "Advanced full-stack platform concept: auth, APIs, database, roles, and deployment-ready structure.",
    category: "Applications",
    tags: ["Full-Stack", "APIs", "DB"],
    image: "/projects/fullstack.webp",
    status: "soon",
  },
];

const FILTERS: Category[] = ["All", "Websites", "Chatbots", "Applications"];
const CATEGORIES: Exclude<Category, "All">[] = [
  "Websites",
  "Chatbots",
  "Applications",
];

export default function Projects() {
  const [active, setActive] = useState<Category>("All");

  const grouped = useMemo(() => {
    const wanted =
      active === "All"
        ? CATEGORIES
        : ([active] as Exclude<Category, "All">[]);
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

          <div
            className={styles.filters}
            role="tablist"
            aria-label="Projects filter"
          >
            {FILTERS.map((f) => {
              const isActive = f === active;
              return (
                <button
                  key={f}
                  type="button"
                  className={`${styles.filterBtn} ${
                    isActive ? styles.filterActive : ""
                  }`}
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
                        alt={`${p.title} preview`}
                        fill
                        sizes="(max-width: 900px) 100vw, 33vw"
                        className={styles.image}
                      />
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

                      <div className={styles.ctaRow}>
                        {p.status === "soon" || !p.linkUrl ? (
                          <span
                            className={`${styles.ctaPrimary} ${styles.ctaDisabled}`}
                          >
                            Coming soon
                          </span>
                        ) : (
                          <a
                            className={styles.ctaPrimary}
                            href={p.linkUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {p.linkType === "website"
                              ? "View Website"
                              : "View Demo"}
                          </a>
                        )}

                        {p.caseStudyUrl && (
                          <a
                            className={styles.ctaSecondary}
                            href={p.caseStudyUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Case Study
                          </a>
                        )}

                        {p.repoUrl && (
                          <a
                            className={styles.ctaGhost}
                            href={p.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Code
                          </a>
                        )}
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
