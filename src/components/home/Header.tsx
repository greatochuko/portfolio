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
      <nav className="flex flex-wrap items-center justify-between gap-2 gap-y-3 font-mono text-sm sm:gap-4">
        <Link href={"/"} className="text-lg font-medium uppercase sm:text-xl">
          Great Ochuko
        </Link>

        <ul className="border-foreground/10 bg-foreground/5 order-last flex w-full items-center justify-center gap-1 rounded-full border p-1 backdrop-blur-md sm:order-0 sm:w-auto">
          {navlinks.map((navlink, i) => {
            const isActive =
              navlink.href === "/"
                ? pathname === navlink.href
                : pathname.startsWith(navlink.href);

            return (
              <li key={i} className="flex-1 sm:flex-none">
                <Link
                  href={navlink.href}
                  className={`block rounded-full py-1.5 text-center duration-200 sm:px-3 md:px-4 ${
                    isActive
                      ? "bg-background text-foreground font-medium shadow-sm"
                      : "text-muted hover:text-foreground"
                  }`}
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
