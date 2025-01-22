import Link from "next/link";
import React from "react";
import { GoArrowLeft } from "react-icons/go";

export default function BackButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link href={href} className="group flex items-center gap-2">
      <GoArrowLeft className="h-4 w-4 duration-300 group-hover:-translate-x-1 group-hover:text-accent-green-100" />
      <span className="duration-300 group-hover:text-accent-green-100">
        {children}
      </span>
    </Link>
  );
}
