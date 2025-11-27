import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const funnelDisplay = Funnel_Display({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL("https://greatochuko.com"),
  title: {
    default: "Great Ogheneochuko — Full-Stack Engineer",
    template: "%s | Great Ogheneochuko",
  },
  description:
    "Portfolio of Full-Stack Developer Great Ogheneochuko — building high-performance web apps, healthcare systems, SaaS platforms, and digital products.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Node.js Engineer",
    "Web Developer Portfolio",
    "Software Engineer",
    "Great Ochuko",
    "Great Software developer",
    "Great web developer",
    "React developer",
  ],
  openGraph: {
    type: "website",
    url: "https://greatochuko.com",
    title: "Great Ogheneochuko — Full-Stack Engineer",
    description:
      "Building SaaS products & modern web apps with React, Node.js & TypeScript.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Great Ogheneochuko Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Great Ogheneochuko — Full-Stack Engineer",
    description:
      "Creating web products with impact — healthcare systems, SaaS apps & dashboards.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://greatochuko.com",
  },
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
        <main className="flex min-h-dvh flex-col min-[820px]:flex-row">
          <Header />
          <Sidebar />
          <div className="flex flex-1 flex-col">
            <div className="mx-auto flex w-[90%] max-w-6xl flex-1 flex-col gap-12 py-12">
              {children}
              <Footer />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
