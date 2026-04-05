import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InterviewAssist — Real-Time AI Help for Technical Interviews",
  description:
    "Get precise, real-time coding guidance during your technical interview — in under 5 seconds, undetected. Built for developers who are ready to level up their salary, not just their skills.",
  openGraph: {
    title: "InterviewAssist — Real-Time AI Help for Technical Interviews",
    description:
      "Get precise, real-time coding guidance during your technical interview — in under 5 seconds, undetected.",
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
      <body>{children}</body>
    </html>
  );
}