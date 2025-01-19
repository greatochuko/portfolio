export default function Home() {
  return (
    <div className="flex flex-col gap-12 py-8">
      <section className="flex flex-col gap-12 py-8">
        <h1 className="text-[2.625rem] font-medium">
          Hello Everyone!
          <br className="md:hidden" /> I&apos;m Great
        </h1>
        <p className="text-muted max-w-2xl">
          A dedicated full-stack web developer with a passion for building
          scalable, user-friendly applications. Skilled in crafting seamless
          front-end interfaces and robust back-end solutions to bring ideas to
          life.
        </p>
        <div className="flex gap-4 items-center">
          <p className="flex-items-center gap-2">Benin City, Nigeria</p>
          <hr className="border-dashed border-muted flex-1" />
        </div>
      </section>
    </div>
  );
}
