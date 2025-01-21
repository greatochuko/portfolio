import Link from "next/link";
import React from "react";

export default function ContactSection() {
  return (
    <div>
      <Link
        href={"/contact"}
        className="border-b border-dashed text-[12.5vw] duration-300 hover:translate-x-6 hover:text-accent-green-100 min-[820px]:text-[10vw] lg:text-[9vw]"
      >
        Let&apos;s Connect
      </Link>
    </div>
  );
}
