"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
  { href: "/", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <nav className="flex flex-wrap items-center justify-between gap-4 gap-y-2 font-mono text-sm">
        <Link href={"/"} className="uppercase">
          Great Ochuko
        </Link>

        <ul className="flex items-center gap-4">
          {navlinks.map((navlink, i) => {
            const isActive = pathname === navlink.href;

            return (
              <li key={i}>
                <Link
                  href={navlink.href}
                  className={`block p-2 duration-200 ${isActive ? "text-foreground" : "text-muted hover:text-foreground"}`}
                >
                  {navlink.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
