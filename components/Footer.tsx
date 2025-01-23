"use client";
import Link from "next/link";
import React from "react";
import { FaFileDownload } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-12">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <Link
          href={"/great_ogheneochuko_resume.pdf"}
          target="_blank"
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
