import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InterviewAssist — Real-Time AI Help During Your Technical Interview",
  description:
    "InterviewAssist listens to your interviewer and feeds you precise coding answers in under 5 seconds. Undetectable. Interview-tuned. Free to practice, pay only when it counts.",
  openGraph: {
    title: "InterviewAssist — Real-Time AI Help During Your Technical Interview",
    description:
      "InterviewAssist listens to your interviewer and feeds you precise coding answers in under 5 seconds. Undetectable. Interview-tuned. Free to practice, pay only when it counts.",
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
      <body
        style={{
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}