import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 py-8">
      <section className="flex flex-col gap-12">
        <h1 className="text-[2.625rem] font-medium">
          Hello Everyone!
          <br className="md:hidden" /> I&apos;m Great
        </h1>
        <p className="text-accent-gray max-w-2xl">
          A dedicated full-stack web developer with a passion for building
          scalable, user-friendly applications. Skilled in crafting seamless
          front-end interfaces and robust back-end solutions to bring ideas to
          life.
        </p>
        <div className="flex gap-4 items-center">
          <p className="flex-items-center gap-2">Benin City, Nigeria</p>
          <hr className="border-dashed border-accent-gray flex-1" />
          <Link
            href={"/about"}
            className="flex-center gap-2 rounded-lg border border-accent-gray p-4 py-2 hover:bg-accent-gray hover:text-accent-green-100 duration-300"
          >
            More about me <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
