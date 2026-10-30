import type { Metadata } from "next";
import Link from "next/link";
import ArrowUpRight from "@/components/ui/ArrowUpRight";
import ContactForm from "@/components/home/ContactForm";
import { contactLinks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact | Great Ogheneochuko",
  description:
    "Get in touch about software engineering, cloud security, career growth, or your next product.",
};

const topics = [
  "Software engineering and career growth",
  "Getting into cloud security",
  "Technical decisions for founders and small teams",
  "Remote backend and cloud security roles",
];

export default function ContactPage() {
  return (
    <>
      <section className="flex flex-col gap-3 py-8 sm:gap-4 sm:py-12 lg:py-16">
        <p className="text-muted text-sm font-medium">Contact</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Let&apos;s talk
        </h1>
        <p className="text-muted max-w-xl text-sm leading-relaxed sm:text-base">
          I enjoy talking with folks about software engineering, career growth,
          and getting into cloud security. I also love helping founders and
          small teams with technical decisions, from picking the right stack to
          building products that last. Say hello anytime.
        </p>
      </section>

      <hr className="border-border" />

      <section className="flex flex-col gap-12 py-8 sm:py-12 lg:flex-row lg:gap-16 lg:py-16">
        <div className="flex flex-1 flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Find me online</h2>
            <ul className="border-border flex flex-col border-t">
              {contactLinks.map((link) => (
                <li key={link.label} className="border-border border-b">
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center justify-between gap-4 py-4"
                  >
                    <div className="flex flex-col gap-0.5">
                      <span className="font-medium">{link.label}</span>
                      <span className="text-muted text-sm">{link.detail}</span>
                    </div>
                    <span className="border-border text-secondary group-hover:bg-foreground group-hover:text-background group-hover:border-foreground flex size-9 shrink-0 items-center justify-center rounded-full border duration-300">
                      <ArrowUpRight className="size-4 duration-300 group-hover:rotate-12" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Good reasons to reach out</h2>
            <ul className="text-muted flex flex-col gap-2 text-sm sm:text-base">
              {topics.map((topic) => (
                <li key={topic} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="bg-secondary mt-2.5 size-1 shrink-0 rounded-full"
                  />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          <h2 className="text-lg font-semibold">Send a message</h2>
          <ContactForm />
        </div>
      </section>

      <hr className="border-border" />
    </>
  );
}
