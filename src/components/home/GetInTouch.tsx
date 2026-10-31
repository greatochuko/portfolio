import Link from "next/link";
import ContactForm from "./ContactForm";
import { contactLinks } from "@/lib/data";

export default function GetInTouch() {
  return (
    <section className="flex flex-col gap-8 py-8 sm:gap-12 sm:py-12 lg:flex-row lg:gap-16 lg:py-16">
      <div className="flex flex-1 flex-col gap-4">
        <h2 className="text-xl font-semibold sm:text-2xl">Get in touch</h2>
        <p className="text-muted flex flex-col gap-4 text-sm leading-relaxed sm:text-base">
          I enjoy talking with folks about software engineering, career growth,
          and getting into cloud security. I also love helping founders and
          small teams with technical decisions, from picking the right stack to
          building products that last. Say hello anytime.
        </p>
        <ul className="flex gap-2">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                target="_blank"
                className="hover:text-accent p-2 text-sm font-medium underline duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1">
        <ContactForm />
      </div>
    </section>
  );
}
