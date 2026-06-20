import type { Metadata } from "next";
import "./globals.css";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { ParticleCanvas } from "@/components/ui/ParticleCanvas";

export const metadata: Metadata = {
  title: "Joshua Khooba | Full Stack Developer & IT Specialist",
  description: "Portfolio of Joshua Khooba — Full Stack Developer, IT Support Specialist, and Data Analyst based in Orlando, FL.",
  keywords: ["Joshua Khooba", "Full Stack Developer", "Data Analyst", "UCF", "Orlando", "IT Specialist"],
  authors: [{ name: "Joshua Khooba", url: "https://github.com/JoshuaKhooba" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Joshua Khooba | Full Stack Developer",
    description: "Portfolio of Joshua Khooba — Full Stack Developer, IT Specialist, Data Analyst.",
    siteName: "Joshua Khooba Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Khooba | Full Stack Developer",
    description: "Portfolio of Joshua Khooba — Full Stack Developer, IT Specialist, Data Analyst.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Global grid — fixed, behind all content */}
        <div className="grid-fixed" aria-hidden="true" />
        {/* Global particle canvas — fixed, behind all content */}
        <ParticleCanvas />
        {/* Cursor reactive glow */}
        <CursorGlow />
        {/* Subtle CRT scan line */}
        <div className="scan-line" aria-hidden="true" />
        {/* Page content sits above z-0 canvas */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
