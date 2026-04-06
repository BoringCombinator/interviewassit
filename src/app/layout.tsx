import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InterviewAssit — AI Copilot for Technical Interviews",
  description:
    "Real-time, undetectable interview assistance. InterviewAssit listens to your interviewer and delivers precise coding answers in under 5 seconds. Built for FAANG-tier technical interviews.",
  keywords: [
    "technical interview",
    "FAANG interview",
    "coding interview help",
    "AI interview assistant",
    "interview copilot",
  ],
  openGraph: {
    title: "InterviewAssit — AI Copilot for Technical Interviews",
    description:
      "Real-time answers. No second screen. No one knows. Practice free, pay only when you interview for real.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise">
        {children}
      </body>
    </html>
  );
}
