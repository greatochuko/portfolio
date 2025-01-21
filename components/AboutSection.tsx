import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import ViewAllButton from "./ViewAllButton";

export default function AboutSection() {
  return (
    <section className="flex flex-col gap-12">
      <h1 className="text-[2.625rem] font-medium">
        Hello Everyone!
        <br className="md:hidden" /> I&apos;m Great
      </h1>
      <p className="max-w-2xl text-accent-gray">
        A dedicated full-stack web developer with a passion for building
        scalable, user-friendly applications.
      </p>
      <div className="flex flex-wrap items-center gap-4 text-sm text-accent-gray">
        <p className="flex items-center gap-2">
          <FaLocationDot className="h-4 w-4 text-accent-green-100" />
          Benin City, Nigeria
        </p>
        <hr className="flex-1 border-dashed border-[#666]" />
        <ViewAllButton href="/about">More About Me</ViewAllButton>
      </div>
    </section>
  );
}
