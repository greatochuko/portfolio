import ViewAllButton from "@/components/ViewAllButton";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { TbDeviceImacCode } from "react-icons/tb";

const experienceList = [
  {
    title: "Freelance Full Stack Web Developer",
    companyName: "Upwork",
    icon: TbDeviceImacCode,
    fromDate: "Nov 2024",
    toDate: "Present",
  },
  {
    title: "Full Stack Web Developer Intern",
    companyName: "ABR Technologies",
    icon: TbDeviceImacCode,
    fromDate: "Jan 2024",
    toDate: "Mar 2024",
  },
];

const educationList = [
  {
    title: "BSc Computer Science",
    companyName: "University of Benin",
    icon: TbDeviceImacCode,
    fromDate: "Aug 2020",
    toDate: "Jan 2025",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col gap-12">
        <h1 className="text-[2.625rem] font-medium">Get to know Me</h1>
        <p className="max-w-2xl text-accent-gray">
          Hello, I&apos;m Great Ogheneochuko, and I&apos;m more than just a web
          developer; I&apos;m a creator of digital experiences. My journey in
          tech has been fueled by a passion for problem-solving and a dedication
          to crafting web solutions that are both visually stunning and highly
          functional. I thrive on building platforms that connect people, drive
          engagement, and deliver exceptional user experiences.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-accent-gray">
          <p className="flex items-center gap-2">
            <FaLocationDot className="h-4 w-4 text-accent-green-100" />
            Benin City, Nigeria
          </p>
          <hr className="flex-1 border-dashed border-[#666]" />
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl">Experience</h2>
        <ul className="flex flex-col">
          {experienceList.map((experience, index) => (
            <li key={index}>
              <div key={index} className="flex gap-2">
                <experience.icon className="mt-1.5 h-4 w-4" />
                <div>
                  <p className="font-medium sm:text-lg">{experience.title}</p>
                  <p className="text-sm text-accent-gray sm:text-base">
                    {experience.companyName}, {experience.fromDate} -{" "}
                    {experience.toDate}
                  </p>
                </div>
              </div>
              <div
                className={`h-10 -translate-y-4 translate-x-2 border-l border-dashed border-[#666] ${index === experienceList.length - 1 ? "hidden" : ""}`}
              ></div>
            </li>
          ))}
        </ul>
        <hr className="mt-4 hidden flex-1 border-dashed border-[#666] sm:block" />
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl">Education</h2>
        <ul className="flex flex-col">
          {educationList.map((education, index) => (
            <li key={index}>
              <div key={index} className="flex gap-2">
                <education.icon className="mt-1.5 h-4 w-4" />
                <div>
                  <p className="font-medium sm:text-lg">{education.title}</p>
                  <p className="text-sm text-accent-gray sm:text-base">
                    {education.companyName}, {education.fromDate} -{" "}
                    {education.toDate}
                  </p>
                </div>
              </div>
              <div
                className={`h-10 -translate-y-4 translate-x-2 border-l border-dashed border-[#666] ${index === educationList.length - 1 ? "hidden" : ""}`}
              ></div>
            </li>
          ))}
        </ul>
        <hr className="mt-4 hidden flex-1 border-dashed border-[#666] sm:block" />
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl">Stack</h2>
        <p className="max-w-2xl text-accent-gray">
          My technical expertise encompasses a strong command of HTML, CSS,{" "}
          JavaScript, TypeScript, and modern frameworks like React, Next.js, and
          Express.js. I am proficient in building responsive web applications,
          ensuring seamless functionality and user experience across various
          devices. Additionally, I have hands-on experience with MongoDB and
          Supabase for efficient data management, along with tools like Git and{" "}
          GitHub for version control.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-accent-gray">
          <hr className="hidden flex-1 border-dashed border-[#666] sm:block" />
          <ViewAllButton href="/stack" className="mt-0">
            View All Stack
          </ViewAllButton>
        </div>
      </section>
    </div>
  );
}
