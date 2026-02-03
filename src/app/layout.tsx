// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lukas-juodeikis-portfolio.vercel.app"),
  title: "Lukas Juodeikis | Full-Stack Developer",
  description: "Premium tech portfolio — Lukas Juodeikis, Full-Stack Developer.",

  openGraph: {
    type: "website",
    url: "/",
    title: "Lukas Juodeikis | Full-Stack Developer",
    description: "Premium tech portfolio — Lukas Juodeikis, Full-Stack Developer.",
    images: [
      {
        url: "/og.webp", // ✅ iš public/og.jpg
        width: 1200,
        height: 630,
        alt: "Lukas Juodeikis portfolio preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lukas Juodeikis | Full-Stack Developer",
    description: "Premium tech portfolio — Lukas Juodeikis, Full-Stack Developer.",
    images: ["/og.jpg"],
  },
};

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
