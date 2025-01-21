"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo from "@/public/logo.png";
import { usePathname } from "next/navigation";
import { GoHomeFill } from "react-icons/go";
import { RiProjectorFill } from "react-icons/ri";
import { PiUserCircleFill } from "react-icons/pi";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { IoMdMail } from "react-icons/io";
import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: GoHomeFill,
  },
  {
    name: "About",
    href: "/about",
    icon: PiUserCircleFill,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: RiProjectorFill,
  },
  {
    name: "Stack",
    href: "/stack",
    icon: HiSquare3Stack3D,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: IoMdMail,
  },
  {
    name: "Resume",
    href: "/my-resume",
    icon: FaFileDownload,
  },
];

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
  {
    href: "mailto:greatochuko123@gmail.com",
    icon: IoMdMail,
    name: "Mail",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="no-scrollbar sticky top-0 hidden h-dvh flex-col gap-12 overflow-y-auto border-r border-neutral-700 p-6 min-[820px]:flex lg:px-12">
      <div className="flex flex-col gap-3">
        <Image
          src={logo}
          alt="logo"
          className="h-32 w-32 rounded-xl border border-neutral-700 object-cover lg:h-48 lg:w-48"
        />
        <p className="flex-center gap-2 rounded-full bg-accent-green-200 px-4 py-1 text-sm text-accent-green-100">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent-green-100"></span>{" "}
          Available <span className="hidden lg:inline">for work</span>
        </p>
      </div>
      <nav className="flex flex-col gap-2">
        {navLinks.map((navLink) => (
          <Link
            key={navLink.name}
            href={navLink.href}
            className={`group flex items-center gap-4 rounded-lg p-3 px-4 text-sm duration-300 ${
              pathname.startsWith(navLink.href)
                ? "bg-muted font-medium text-foreground"
                : "text-accent-gray hover:text-accent-green-100"
            }`}
          >
            <navLink.icon
              className={`h-4 w-4 duration-300 ${
                pathname.startsWith(navLink.href)
                  ? ""
                  : "group-hover:scale-125 group-hover:text-accent-green-100"
              }`}
            />
            <span className="hidde lg:inline">{navLink.name}</span>
          </Link>
        ))}
      </nav>
      <div className="mt-auto grid grid-cols-1 items-center lg:grid-cols-4">
        {socialLinks.map((socialLink, i) => (
          <Link
            key={i}
            href={socialLink.href}
            className="group flex items-center gap-2 p-3 text-sm text-accent-gray duration-300 lg:justify-center"
          >
            <socialLink.icon className="h-4 w-4 text-accent-gray duration-300 group-hover:scale-125 group-hover:text-accent-green-100" />
            <span className="lg:hidden">{socialLink.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
