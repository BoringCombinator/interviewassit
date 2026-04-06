import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InterviewAssist — Real-Time AI Coaching for Live Technical Interviews",
  description:
    "InterviewAssist listens to your interviewer and gives you precise coding guidance in under 5 seconds. Undetectable. Interview-tuned. Built for developers who are ready to level up their salary.",
  openGraph: {
    title: "InterviewAssist — Real-Time AI Coaching for Live Technical Interviews",
    description:
      "InterviewAssist listens to your interviewer and gives you precise coding guidance in under 5 seconds. Undetectable. Interview-tuned. Built for developers who are ready to level up their salary.",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}