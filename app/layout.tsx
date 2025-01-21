import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

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
        className={`${inter.className} bg-background text-foreground antialiased`}
      >
        <main className="flex">
          <Sidebar />
          <div className="mx-auto max-w-7xl flex-1 p-12">{children}</div>
        </main>
      </body>
    </html>
  );
}
