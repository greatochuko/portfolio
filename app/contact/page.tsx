import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Get in touch with me! Whether you're interested in collaborating on a project or have questions, I'm always open to new opportunities and discussions.",
};

const socialLinks = [
  {
    href: "https://linkedin.com/in/greatochuko",
    icon: FaLinkedin,
    name: "LinkedIn",
  },
  {
    href: "https://github.com/greatochuko",
    icon: FaGithub,
    name: "Github",
  },
  {
    href: "https://x.com/greatochuko14",
    icon: FaXTwitter,
    name: "Twitter",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-4xl font-medium sm:text-[42px] lg:text-5xl">
        My Tech Toolbox
      </h1>

      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="flex flex-1 flex-col gap-12 md:flex-row lg:order-2 lg:flex-col">
          <div className="flex flex-1 flex-col gap-6 lg:flex-none">
            <h2 className="text-lg font-medium">Contact</h2>
            <ul className="flex flex-col gap-4 text-sm text-accent-gray">
              <li>
                <Link
                  href={"mailto:greatochuko123@gmail.com"}
                  className="group flex items-center gap-2"
                >
                  <IoMdMail className="h-4 w-4 duration-300 group-hover:scale-125 group-hover:text-accent-green-100" />{" "}
                  <span className="duration-300 group-hover:text-accent-green-100">
                    greatochuko123@gmail.com
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-1 flex-col gap-6 lg:flex-none">
            <h2 className="text-lg font-medium">Social Media</h2>
            <ul className="flex flex-col gap-4 text-sm text-accent-gray">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2"
                  >
                    <link.icon className="h-4 w-4 duration-300 group-hover:scale-125 group-hover:text-accent-green-100" />{" "}
                    <span className="duration-300 group-hover:text-accent-green-100">
                      {link.href}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-6">
          <h2 className="text-lg font-medium">Message Me</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
