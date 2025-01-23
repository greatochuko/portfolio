import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const funnelDisplay = Funnel_Display({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: {
    absolute: "Great Ogheneochuko - Full Stack Developer",
    template: "%s - Great Ogheneochuko",
  },
  description:
    "Explore Great Ogheneochuko's portfolio of innovative web projects, featuring full-stack apps and user-focused designs",
  metadataBase: new URL(process.env.BASE_URL!),
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
