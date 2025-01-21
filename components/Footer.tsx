import Link from "next/link";
import React from "react";
import { FaFileDownload } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12 flex flex-col gap-12">
      <Link
        href={"/contact"}
        className="border-b border-dashed border-[#666] text-[12.5vw] duration-300 hover:-rotate-3 hover:text-accent-green-100 min-[820px]:text-[10vw] lg:text-[9vw]"
      >
        Let&apos;s Connect
      </Link>
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <Link
          href={"/my-resume"}
          className="flex-center gap-2 text-sm text-accent-green-100 hover:underline sm:order-2"
        >
          <FaFileDownload className="h-4 w-4" />
          Download My Resume
        </Link>
        <p className="flex-center flex-col flex-wrap gap-8 text-sm text-accent-gray">
          &copy; Copyright {new Date().getFullYear()}. All rights Reserved.{" "}
        </p>
      </div>
    </footer>
  );
}
