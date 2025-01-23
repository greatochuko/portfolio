import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Get in touch with me! Whether you're interested in collaborating on a project or have questions, I'm always open to new opportunities and discussions.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-4xl font-medium sm:text-[42px] lg:text-5xl">
        My Tech Toolbox
      </h1>
      <div className="flex flex-col gap-12 lg:flex-row">
        <div className="flex flex-col gap-6">
          <h2 className="text-lg font-medium">Message Me</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
