import Link from "next/link";
import { contactLinks } from "@/lib/data";
import ArrowUpRight from "../ui/ArrowUpRight";
import CurrentYear from "./CurrentYear";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="flex flex-col gap-8 py-8 sm:gap-12 sm:py-12 lg:py-16">
      <div className="flex flex-col gap-8 sm:gap-12 md:flex-row md:justify-between">
        <div className="flex max-w-xs flex-col gap-3">
          <p className="font-semibold">Great Ogheneochuko</p>
          <p className="text-muted text-sm leading-relaxed">
            Software engineer building for the web and growing into cloud
            security.
          </p>
        </div>

        <div className="flex gap-12 sm:gap-16">
          <nav aria-label="Footer" className="flex flex-col gap-3">
            <h2 className="text-secondary text-sm font-medium">Pages</h2>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-foreground text-sm duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <h2 className="text-secondary text-sm font-medium">Elsewhere</h2>
            <ul className="flex flex-col gap-2">
              {contactLinks.map((link) => {
                const isExternal = link.href.startsWith("http");

                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="text-muted hover:text-foreground group inline-flex items-center gap-1 text-sm duration-200"
                    >
                      {link.label}
                      {isExternal && (
                        <ArrowUpRight className="size-3.5 opacity-0 duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-border" />

      <div className="text-muted flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          © <CurrentYear /> Great Ogheneochuko. All rights reserved.
        </p>
        <p>Built with Next.js and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
