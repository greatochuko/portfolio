import Link from "next/link";
import React from "react";
import { FaFileDownload } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <p className="flex-center flex-col flex-wrap gap-8 text-sm text-accent-gray">
        <Link
          href={"/my-resume"}
          className="flex-center gap-2 text-accent-green-100 hover:underline"
        >
          <FaFileDownload className="h-4 w-4" />
          Download My Resume
        </Link>
        &copy; Copyright {new Date().getFullYear()}. All rights Reserved.{" "}
      </p>
    </div>
  );
}
