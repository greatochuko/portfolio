import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const funnelDisplay = Funnel_Display({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Great Ogheneochuko - Full Stack Developer",
  description:
    "Explore Great Ogheneochuko's portfolio showcasing innovative web development projects, including scalable full-stack applications and user-focused designs. Specializing in Next.js, React, Node.js, and TypeScript for dynamic, high-performing web solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${funnelDisplay.className} bg-background text-foreground antialiased`}
      >
        <main className="flex">
          <Sidebar />
          <div className="mx-auto max-w-7xl flex-1 p-6 sm:p-12">{children}</div>
        </main>
      </body>
    </html>
  );
}
