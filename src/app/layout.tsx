import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ofir Dror - CV & Portfolio",
  description: "Professional CV and portfolio website showcasing experience, skills, and achievements in software development.",
  keywords: ["software engineer", "developer", "portfolio", "CV", "resume", "Ofir Dror"],
  authors: [{ name: "Ofir Dror" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans" style={{backgroundColor: '#0F172A', color: '#E2E8F0'}}>
        {children}
      </body>
    </html>
  );
}
