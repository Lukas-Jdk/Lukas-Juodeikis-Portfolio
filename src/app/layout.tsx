// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";

export const metadata: Metadata = {
  title: "Lukas Juodeikis | Full-Stack Developer",
  description: "Premium tech portfolio — Lukas Juodeikis, Full-Stack Developer.",
};

// UI font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Code font
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body>{children}</body>
    </html>
  );
}
