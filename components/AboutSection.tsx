import React from "react";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function AboutSection() {
  return (
    <section className="flex flex-col gap-12">
      <h1 className="text-[2.625rem] font-medium">
        Hello Everyone!
        <br className="md:hidden" /> I&apos;m Great
      </h1>
      <p className="max-w-2xl text-accent-gray">
        A dedicated full-stack web developer with a passion for building
        scalable, user-friendly applications. Skilled in crafting seamless
        front-end interfaces and robust back-end solutions to bring ideas to
        life.
      </p>
      <div className="flex flex-wrap items-center gap-4 text-sm text-accent-gray">
        <p className="flex items-center gap-2">
          <FaLocationDot className="h-4 w-4 text-accent-green-100" />
          Benin City, Nigeria
        </p>
        <hr className="flex-1 border-dashed border-accent-gray" />
        <Link
          href={"/about"}
          className="flex-center mt-8 w-full gap-2 rounded-xl border border-accent-gray px-6 py-3 duration-300 hover:border-muted hover:bg-muted hover:text-accent-green-100 sm:mt-0 sm:w-fit"
        >
          More about me <FaArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
