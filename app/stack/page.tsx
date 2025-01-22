import React from "react";
import techStack from "@/data/stack.json";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-4xl font-medium sm:text-[42px] lg:text-5xl">
        My Tech Toolbox
      </h1>
      <ul className="flex flex-col gap-6">
        {techStack.map((stack) => (
          <li
            key={stack.name}
            className="flex flex-col gap-4 rounded-lg bg-muted p-6"
          >
            <div className="flex gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-md">
                <Image
                  src={stack.logo}
                  alt={stack.name}
                  fill
                  sizes="96px"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium">{stack.name}</h3>
                <p className="text-sm text-accent-gray">{stack.subTitle}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-center w-12">
                <div className="h-full border-l border-dashed border-[#666]"></div>
              </div>
              <p className="flex-1 text-sm text-accent-gray">
                {stack.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
