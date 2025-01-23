import Link from "next/link";
import React from "react";
import { GoArrowLeft } from "react-icons/go";

export default function NotFoundPage() {
  return (
    <div className="flex-center flex-1 flex-col gap-8 p-6 text-center text-sm">
      <h1 className="text-4xl font-medium">404</h1>
      <div className="flex flex-col gap-4 text-accent-gray">
        <p>OOPS!</p>
        <p>The page you are looking for wasn&apos;t found!</p>
      </div>
      <Link
        href={"/"}
        className="flex items-center gap-2 rounded-lg bg-accent-green-100 px-6 py-3 font-medium text-background duration-300 hover:bg-accent-green-100/80"
      >
        <GoArrowLeft className="h-4 w-4" />
        Back Home
      </Link>
    </div>
  );
}
