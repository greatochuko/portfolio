import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

const stack = [
  {
    label: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "React Router"],
  },
  { label: "Backend", items: ["Node.js", "Express", "Prisma", "PostgreSQL"] },
  {
    label: "Integrations",
    items: ["Meta Graph API", "Cloudinary", "Anthropic API", "Stripe"],
  },
  { label: "Tooling", items: ["Vite", "ESLint", "Git", "Vercel / Railway"] },
];

export default function Home() {
  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 bg-grain pointer-events-none opacity-3.5"
      />

      <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-[5%] py-4.5">
          <a
            href="#top"
            className="flex items-center gap-2 font-mono text-sm font-semibold tracking-wide"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_3px_rgba(255,195,0,0.25)]" />
            GREAT OGHENEOCHUKO
          </a>
          <ul className="hidden gap-7 font-mono text-[13px] tracking-wide md:flex">
            {["Work", "Stack", "About", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="border-b font-medium border-transparent pb-1 text-ink-soft transition-colors hover:border-ink hover:text-ink"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="mailto:greatochuko123@gmail.com"
            className="rounded-full bg-ink px-4 py-2.5 font-mono text-[13px] text-paper-raised transition-all hover:-translate-y-0.5 hover:bg-cobalt md:inline-block"
          >
            Say hello →
          </a>
        </nav>
      </header>

      <main id="top" className="relative z-10">
        {/* HERO */}
        <section className="px-[5%] pb-16 pt-22">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-9 md:grid-cols-[1.6fr_1fr]">
            <div>
              <p className="mb-5 flex items-center gap-2.5 font-mono text-[13px] uppercase tracking-wider text-ink-soft before:h-px before:w-5.5 before:bg-ink-soft before:content-['']">
                Full-stack engineer · TypeScript
              </p>
              <h1 className="mb-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
                I build products,
                <br />
                not just{" "}
                <span className="underline-accent whitespace-nowrap">
                  interfaces.
                </span>
              </h1>
              <p className="mb-8 max-w-md text-lg text-ink-soft">
                I&apos;m Great — a full-stack developer who takes SaaS ideas
                from a blank Prisma schema to something people actually open
                every day. Frontend, backend, integrations, and the small design
                decisions in between.
              </p>
              <div className="flex flex-wrap gap-3.5">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5.5 py-3.5 font-mono text-sm text-paper-raised transition-all hover:-translate-y-0.5 hover:bg-cobalt"
                >
                  View the work
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-5.5 py-3.5 font-mono text-sm transition-all hover:-translate-y-0.5 hover:border-ink"
                >
                  Get in touch
                </a>
              </div>
            </div>

            <div
              role="img"
              aria-label="Status panel showing current focus and stack"
              className="rounded-2xl bg-ink px-5.5 pb-5 pt-5.5 font-mono text-[13px] text-[#DCE0D9] shadow-[0_24px_48px_-20px_rgba(20,23,26,0.35)]"
            >
              <div className="mb-4 flex items-center gap-1.5 opacity-80">
                <span className="h-2.5 w-2.5 rounded-full bg-[#E05252]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#E0B152]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#5FAE6B]" />
                <span className="ml-2 text-xs text-[#8A8F82]">
                  ~/great/status
                </span>
              </div>

              {[
                { key: "role", val: "Software Engineer" },
                { key: "focus", val: "TopWork NG", accent: true },
                { key: "stack", val: "TS · React · Node · Prisma" },
                { key: "based", val: "Nigeria (WAT)" },
                { key: "open to", val: "product-minded roles" },
              ].map((row, i, arr) => (
                <div
                  key={row.key}
                  className={`flex justify-between gap-3 py-2 ${
                    i !== arr.length - 1
                      ? "border-b border-dashed border-[#33372f]"
                      : ""
                  }`}
                >
                  <span className="text-[#8A8F82]">{row.key}</span>
                  <span
                    className={`text-right ${
                      row.accent ? "text-accent" : "text-[#F2F3EC]"
                    }`}
                  >
                    {row.val}
                    {row.accent && (
                      <span
                        aria-hidden="true"
                        className="animate-blink ml-0.5 inline-block h-3.5 w-1.5 bg-accent align-middle"
                      />
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="border-t border-line px-[5%] py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-11 flex flex-wrap justify-between gap-6">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Shipped &amp; shipping
              </h2>
              <p className="max-w-xs text-right font-mono text-[13px] text-ink-faint sm:text-left">
                A running log of products I&apos;ve built, not a portfolio of
                screenshots.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
          </div>
        </section>

        {/* STACK */}
        <section id="stack" className="border-t border-line px-[5%] py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-11 flex flex-wrap items-baseline justify-between gap-6">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                The toolkit
              </h2>
              <p className="max-w-xs text-right font-mono text-[13px] text-ink-faint sm:text-left">
                What&apos;s actually in the dependency tree, grouped by job.
              </p>
            </div>

            <div className="grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
              {stack.map((col) => (
                <div
                  key={col.label}
                  className="border-b border-r border-line px-5.5 py-6.5"
                >
                  <p className="mb-4 font-mono text-xs uppercase tracking-wide text-ink-faint">
                    {col.label}
                  </p>
                  <ul className="font-display text-base">
                    {col.items.map((item, i, arr) => (
                      <li
                        key={item}
                        className={`py-1.5 ${
                          i !== arr.length - 1
                            ? "border-b border-dashed border-line-soft"
                            : ""
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-t border-line px-[5%] py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 md:grid-cols-[0.9fr_1.4fr] md:gap-12">
            <p className="font-display text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
              Good software feels <span className="text-cobalt">obvious</span>{" "}
              in hindsight. Getting there is the hard part.
            </p>
            <div>
              <p className="max-w-2xl text-[17px] text-ink-soft">
                I care about the parts most engineers skip past — the loading
                state, the empty screen, the copy on an error message. Product
                thinking and engineering aren&apos;t separate jobs to me; a
                well-typed schema and a well-considered layout come from the
                same instinct.
              </p>
              <p className="mt-4 max-w-2xl text-[17px] text-ink-soft">
                I&apos;m also allergic to templated design. If a page could
                belong to any product, it&apos;s not finished. That shows up in
                how I build: real content before real components, restraint
                before decoration, and a hard rule against gradient blobs.
              </p>
              <ul className="mt-6.5 grid gap-2.5">
                {[
                  "Ship in public, iterate in private",
                  "Type everything that can break silently",
                  "Design the empty state before the full one",
                  "No decoration without a job to do",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 font-mono text-[13px] text-ink-soft before:font-semibold before:text-cobalt before:content-['×']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="border-t border-line bg-ink px-[5%] py-20 text-paper"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Info Column */}
              <div>
                <h2 className="mb-4.5 max-w-md font-display text-4xl font-semibold leading-[1.04] tracking-tight sm:text-6xl">
                  Let&apos;s build something{" "}
                  <span className="underline-accent">worth shipping.</span>
                </h2>
                <p className="mb-8 max-w-md font-mono text-sm text-[#9AA095]">
                  Open to global full-stack roles and product collaborations.
                  Remote-first, working seamlessly across international time
                  zones from Nigeria.
                </p>
                <div className="flex flex-col gap-2.5 font-mono text-[15px]">
                  {[
                    {
                      label: "↳ greatochuko123@gmail.com",
                      href: "mailto:greatochuko123@gmail.com",
                    },
                    { label: "↳ github.com/great", href: "https://github.com" },
                    {
                      label: "↳ linkedin.com/in/great",
                      href: "https://linkedin.com",
                    },
                    { label: "↳ x.com/great", href: "https://x.com" },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http") ? "noopener" : undefined
                      }
                      className="w-fit border-b border-transparent pb-0.5 transition-colors hover:border-accent hover:text-accent"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Form Column */}
              <div className="flex flex-col gap-4">
                <form className="flex flex-col gap-4 font-mono text-sm">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-[#9AA095] text-xs uppercase tracking-wider"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-lg border border-[#2b2f26] bg-[#1a1d17] p-3 text-paper outline-hidden transition-colors focus:border-accent"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-[#9AA095] text-xs uppercase tracking-wider"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-[#2b2f26] bg-[#1a1d17] p-3 text-paper outline-hidden transition-colors focus:border-accent"
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-[#9AA095] text-xs uppercase tracking-wider"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full resize-none rounded-lg border border-[#2b2f26] bg-[#1a1d17] p-3 text-paper outline-hidden transition-colors focus:border-accent"
                      placeholder="Let's talk about your project details..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full cursor-pointer rounded-lg bg-paper p-3 font-semibold text-ink transition-all hover:bg-accent hover:text-ink hover:-translate-y-0.5"
                  >
                    Send message →
                  </button>
                </form>

                <p className="text-center font-mono text-xs text-[#7a8074]">
                  Prefer direct lines? Drop an email to{" "}
                  <a
                    href="mailto:greatochuko123@gmail.com"
                    className="text-[#9AA095] underline hover:text-accent"
                  >
                    greatochuko123@gmail.com
                  </a>{" "}
                  instead.
                </p>
              </div>
            </div>

            <footer className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-[#2b2f26] pt-5.5 font-mono text-xs text-[#7a8074]">
              <span>
                © 2026 Great · Built with React, TypeScript, and zero gradient
                blobs
              </span>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
