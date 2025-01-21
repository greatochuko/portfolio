import React from "react";
import typescriptLogo from "@/public/typescript-logo.png";
import nodeJSLogo from "@/public/nodejs-icon.svg";
import reactLogo from "@/public/react-logo.png";
import tailwindLogo from "@/public/tailwind-logo.svg";
import Image from "next/image";
import ViewAllButton from "./ViewAllButton";

const techStack = [
  {
    name: "TypeScript",
    description: "Typed Javascript",
    logo: typescriptLogo,
  },
  {
    name: "React",
    description: "JavaScript UI library",
    logo: reactLogo,
  },
  {
    name: "NodeJS",
    description: "JavaScript runtime",
    logo: nodeJSLogo,
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework",
    logo: tailwindLogo,
  },
];

export default function StackSection() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-2xl font-medium">Stack</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {techStack.map((stack) => (
          <div
            key={stack.name}
            className="flex flex-1 items-center gap-4 rounded-lg bg-muted p-6"
          >
            <Image
              src={stack.logo}
              alt={stack.name + " logo"}
              className="h-12 w-12 rounded-md object-contain"
            />
            <div className="flex flex-col">
              <h3 className="text-lg font-medium">{stack.name}</h3>
              <p className="text-sm text-accent-gray">{stack.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-4 text-sm text-accent-gray">
        <hr className="hidden flex-1 border-dashed border-[#666] sm:block" />
        <ViewAllButton href="/stack" className="mt-0">
          View All Stack
        </ViewAllButton>
      </div>
    </section>
  );
}
