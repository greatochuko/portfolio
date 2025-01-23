import Link from "next/link";
import React from "react";

export default function LetsConnectSection() {
  return (
    <Link
      href={"/contact"}
      className="border-b border-dashed border-[#666] text-[12.5vw] duration-300 hover:-rotate-3 hover:text-accent-green-100 min-[820px]:text-[10vw] lg:text-[min(9.5vw,_160px)]"
    >
      Let&apos;s Connect!
    </Link>
  );
}
