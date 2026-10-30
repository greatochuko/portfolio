import Image from "next/image";

const highlights = [
  {
    label: "Production",
    value: "10+",
    description: "apps shipped",
  },
  {
    label: "Experience",
    value: "3+",
    description: "years building software",
  },
  {
    label: "Focus",
    value: "Cloud",
    description: "security & infrastructure",
  },
  {
    label: "Stack",
    value: "TS · Go",
    description: "backend & systems",
  },
];

export default function Hero() {
  return (
    <section className="flex flex-col gap-8 py-8 sm:gap-12 sm:py-12 lg:flex-row lg:gap-16 lg:py-16">
      {/* Intro */}
      <div className="flex flex-1 flex-col justify-center">
        <div className="mb-6 flex flex-col gap-4">
          <Image
            src="/images/profile-picture.png"
            alt="Great Ogheneochuko"
            width={72}
            height={72}
            priority
            className="rounded-2xl"
          />

          <div className="text-muted font-mono text-xs">
            <span className="text-blue-500">●</span> Available for opportunities
          </div>
        </div>

        <div className="max-w-2xl">
          <p className="text-muted mb-4 font-mono text-sm">
            Software Engineer · Cloud Security
          </p>

          <h1 className="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            I build software
            <br />
            <span className="text-accent">that holds up.</span>
          </h1>

          <p className="text-secondary mt-6 text-sm leading-7 sm:text-base">
            I&apos;m{" "}
            <span className="text-foreground font-medium">
              Great Ogheneochuko
            </span>
            , a Software Engineer with 3+ years of experience building and
            shipping full-stack applications. I&apos;ve pushed 10+ production
            apps, working across TypeScript, backend systems, PostgreSQL,
            Docker, and cloud infrastructure.
          </p>

          <p className="text-secondary mt-4 text-sm leading-7 sm:text-base">
            I&apos;m currently going deeper into Go, cloud security, application
            security, IAM, and secure system design. I like understanding
            systems from the ground up and figuring out where they can break.
          </p>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <a
            href="/work"
            className="bg-foreground text-background rounded-lg px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
          >
            View my work
          </a>

          <a
            href="/contact"
            className="border-border hover:bg-muted/10 rounded-lg border px-5 py-3 text-sm font-semibold transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="border-border bg-border grid w-full flex-1 grid-cols-2 gap-px self-center overflow-hidden rounded-2xl border md:grid-cols-4 lg:max-w-130 lg:grid-cols-2">
        {highlights.map((item) => (
          <div
            key={item.label}
            className="bg-background hover:bg-muted/5 flex min-h-44 flex-col justify-between p-6 transition-colors sm:p-7"
          >
            <span className="text-muted font-mono text-xs tracking-wider uppercase">
              {item.label}
            </span>

            <div>
              <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {item.value}
              </p>

              <p className="text-muted mt-1 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
