import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

export default function ViewAllButton({
  href,
  children,
  className = "mt-8",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`flex-center group w-full gap-2 rounded-lg border border-accent-gray px-6 py-3 font-medium duration-300 hover:border-muted hover:bg-muted sm:mt-0 sm:w-fit sm:px-4 sm:py-2 ${className}`}
    >
      <span className="group-hover:text-accent-green-100">{children}</span>
      <GoArrowRight className="h-4 w-4 duration-300 group-hover:translate-x-2 group-hover:text-accent-green-100" />
    </Link>
  );
}
