import React from "react";
import Image from "next/image";
import ViewAllButton from "./ViewAllButton";
import techStack from "@/data/stack.json";

export default function StackSection() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-2xl font-medium">Stack</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {techStack
          .filter((stack) => stack.preview)
          .map((stack) => (
            <div
              key={stack.name}
              className="flex flex-1 items-center gap-4 rounded-lg bg-muted p-6"
            >
              <div className="relative h-12 w-12 overflow-hidden rounded-md">
                <Image
                  src={stack.logo}
                  alt={stack.name + " logo"}
                  fill
                  sizes="96px"
                  className="h-full w-full rounded-md object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-medium">{stack.name}</h3>
                <p className="text-sm text-accent-gray">{stack.subTitle}</p>
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
