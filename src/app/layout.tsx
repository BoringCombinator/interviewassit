import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InterviewAssist — Real-Time AI Help During Your Technical Interview",
  description:
    "InterviewAssist listens to your interviewer and gives you precise coding answers in under 5 seconds. Undetectable. Interview-tuned. Free to practice, pay only when you interview for real.",
  openGraph: {
    title: "InterviewAssist — Real-Time AI Help During Your Technical Interview",
    description:
      "InterviewAssist listens to your interviewer and gives you precise coding answers in under 5 seconds. Undetectable. Interview-tuned.",
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