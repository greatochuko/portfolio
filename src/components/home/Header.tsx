"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../layout/ThemeToggle";

const navlinks = [
  { href: "/", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <nav className="flex flex-wrap items-center justify-between gap-2 gap-y-2 font-mono text-sm sm:gap-4">
        <Link href={"/"} className="uppercase">
          Great Ochuko
        </Link>

        <ul className="flex items-center gap-2 sm:gap-4">
          {navlinks.map((navlink, i) => {
            const isActive =
              navlink.href === "/"
                ? pathname === navlink.href
                : pathname.startsWith(navlink.href);

            return (
              <li key={i}>
                <Link
                  href={navlink.href}
                  className={`block p-2 duration-200 ${isActive ? "text-foreground font-medium" : "text-muted hover:text-foreground"}`}
                >
                  {navlink.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}
