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
  },
  {
    href: "https://github.com/greatochuko",
    icon: FaGithub,
  },
  {
    href: "https://x.com/greatochuko14",
    icon: FaXTwitter,
  },
  {
    href: "mailto:greatochuko123@gmail.com",
    icon: IoMdMail,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="p-6 hidden min-[820px]:flex lg:p-10 flex-col sticky no-scrollbar top-0 gap-8 border-r border-neutral-700 h-dvh overflow-y-auto justify-between">
      <div className="flex flex-col gap-4">
        <Image
          src={logo}
          alt="logo"
          className="rounded-xl border border-neutral-700 lg:w-44 lg:h-44 w-[120px] h-[120px]"
        />
        <p className="flex-center py-1 px-4 gap-2 text-sm bg-accent-green-200 rounded-full text-accent-green-100">
          <span className="w-2 h-2 animate-pulse rounded-full bg-accent-green-100"></span>{" "}
          Available <span className="hidden lg:inline">for work</span>
        </p>
      </div>
      <nav className="flex flex-col gap-2 ">
        {navLinks.map((navLink) => (
          <Link
            key={navLink.name}
            href={navLink.href}
            className={`flex items-center group gap-4 text-sm p-3 duration-300 px-4 rounded-lg  ${
              pathname.startsWith(navLink.href)
                ? "bg-muted font-medium"
                : "hover:text-accent-green-100"
            }`}
          >
            <navLink.icon
              className={`w-4 h-4 duration-300  ${
                pathname.startsWith(navLink.href)
                  ? ""
                  : "group-hover:scale-125 group-hover:text-accent-green-100"
              }`}
            />
            <span className="hidde lg:inline">{navLink.name}</span>
          </Link>
        ))}
      </nav>
      <div className="grid items-center  gap-4 grid-cols-2 lg:grid-cols-4">
        {socialLinks.map((socialLink, i) => (
          <Link
            key={i}
            href={socialLink.href}
            className="p-2 group hover:scale-125 duration-300 flex-center"
          >
            <socialLink.icon className="w-4 h-4 group-hover:text-accent-green-100 duration-300" />
          </Link>
        ))}
      </div>
    </div>
  );
}
