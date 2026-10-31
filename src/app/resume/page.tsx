import type { Metadata } from "next";
import Link from "next/link";
import GetInTouch from "@/components/home/GetInTouch";
import ArrowUpRight from "@/components/ui/ArrowUpRight";
import { resume } from "@/lib/resume";

export const metadata: Metadata = {
  title: "Resume | Great Ogheneochuko",
  description:
    "Experience, skills, and education of Great Ogheneochuko, a software engineer building full-stack web products.",
};

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 3v12m0 0-4-4m4 4 4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}

export default function ResumePage() {
  return (
    <>
      <section className="flex flex-col gap-6 py-8 sm:gap-8 sm:py-12 lg:py-16">
        <div className="flex flex-col gap-3 sm:gap-4">
          <p className="text-muted font-mono text-sm font-medium">Resume</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Great Ogheneochuko
          </h1>
          <p className="text-muted max-w-xl text-sm leading-relaxed sm:text-base">
            {resume.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={resume.pdfUrl}
            download
            className="bg-foreground text-background border-foreground group flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium duration-300 hover:opacity-80"
          >
            Download PDF
            <DownloadIcon className="size-4 duration-300 group-hover:translate-y-0.5" />
          </a>
          <a
            href={resume.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border text-secondary hover:bg-foreground hover:text-background hover:border-foreground group flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium duration-300"
          >
            View PDF
            <ArrowUpRight className="size-4 duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </section>

      <hr className="border-border" />

      <section className="flex flex-col gap-8 py-8 sm:gap-12 sm:py-12 lg:gap-16 lg:py-16">
        <h2 className="text-xl font-semibold sm:text-2xl">Experience</h2>
        <ul className="flex flex-col gap-10 sm:gap-12">
          {resume.experience.map((job) => (
            <li
              key={`${job.company}-${job.period}`}
              className="grid gap-2 md:grid-cols-[10rem_1fr] md:gap-8 lg:gap-16"
            >
              <p className="text-muted font-mono text-sm md:pt-1">
                {job.period}
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-mono font-semibold sm:text-lg">
                    {job.role}
                  </h3>
                  {job.companyUrl ? (
                    <Link
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-foreground group inline-flex items-center gap-1 self-start text-sm duration-200"
                    >
                      {job.company}
                      <ArrowUpRight className="size-3.5 duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  ) : (
                    <p className="text-secondary text-sm">{job.company}</p>
                  )}
                </div>

                <ul className="text-muted flex flex-col gap-2 text-sm leading-relaxed sm:text-base">
                  {job.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="bg-secondary mt-2.5 size-1 shrink-0 rounded-full"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <hr className="border-border" />

      <section className="flex flex-col gap-8 py-8 sm:gap-12 sm:py-12 lg:gap-16 lg:py-16">
        <h2 className="text-xl font-semibold sm:text-2xl">Skills</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {resume.skills.map((group) => (
            <div key={group.category} className="flex flex-col gap-3">
              <h3 className="text-secondary font-mono text-sm font-medium">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-border text-secondary rounded-full border px-3 py-1 font-mono text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {resume.education.length > 0 && (
        <>
          <hr className="border-border" />
          <section className="flex flex-col gap-8 py-8 sm:gap-12 sm:py-12 lg:gap-16 lg:py-16">
            <h2 className="text-xl font-semibold sm:text-2xl">Education</h2>
            <ul className="flex flex-col gap-8">
              {resume.education.map((item) => (
                <li
                  key={`${item.school}-${item.period}`}
                  className="grid gap-2 md:grid-cols-[12rem_1fr] md:gap-8 lg:gap-16"
                >
                  <p className="text-muted font-mono text-sm md:pt-1">
                    {item.period}
                  </p>
                  <div className="flex flex-col gap-0.5">
                    <h3 className="font-semibold sm:text-lg">{item.degree}</h3>
                    <p className="text-secondary text-sm">{item.school}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}

      <hr className="border-border" />
      <GetInTouch />
      <hr className="border-border" />
    </>
  );
}
