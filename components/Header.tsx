"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/public/logo.png";
import Link from "next/link";
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
    name: "About",
    href: "/about",
    icon: PiUserCircleFill,
  },
  {
    name: "Works",
    href: "/works",
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

export default function Header() {
  const pathname = usePathname();

  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    if (dropdown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [dropdown]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 820) return;

      document.body.style.overflow = "auto";
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="sticky top-0 z-20 flex items-center gap-4 bg-background p-6 min-[820px]:hidden">
        <Image
          src={logo}
          alt="Logo"
          className="h-12 w-12 rounded-md border border-neutral-700"
        />
        <p className="flex-center gap-2 rounded-full bg-accent-green-200 px-4 py-1 text-sm text-accent-green-100">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent-green-100"></span>{" "}
          Available for work
        </p>
        <div
          className="ml-auto flex h-6 w-6 flex-col justify-evenly"
          onClick={() => setDropdown(!dropdown)}
          role="button"
        >
          <hr
            className={`border-foreground duration-300 ${dropdown ? "translate-y-1 -rotate-45" : ""}`}
          />
          <hr
            className={`border-foreground duration-300 ${dropdown ? "-translate-y-1 rotate-45" : ""}`}
          />
        </div>
      </div>

      <div
        className={`fixed left-0 top-0 z-10 flex h-full w-full flex-col bg-background p-6 pt-24 text-sm duration-300 min-[820px]:hidden ${dropdown ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0"}`}
      >
        <nav className="flex flex-col gap-2">
          <Link
            href={"/"}
            onClick={() => setDropdown(false)}
            className={`group flex items-center gap-4 rounded-lg p-3 px-4 text-sm duration-300 ${
              pathname === "/"
                ? "bg-muted font-medium text-foreground"
                : "text-accent-gray hover:text-accent-green-100"
            }`}
          >
            <GoHomeFill
              className={`h-4 w-4 duration-300 ${
                pathname === "/"
                  ? ""
                  : "group-hover:scale-125 group-hover:text-accent-green-100"
              }`}
            />
            <span className="hidde lg:inline">Home</span>
          </Link>
          {navLinks.map((navLink) => (
            <Link
              key={navLink.name}
              href={navLink.href}
              onClick={() => setDropdown(false)}
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
        <div className="mt-auto flex items-center justify-between">
          {socialLinks.map((socialLink, i) => (
            <Link
              key={i}
              href={socialLink.href}
              className="group flex w-fit items-center gap-2 p-3 text-accent-gray duration-300 lg:justify-center"
            >
              <socialLink.icon className="h-4 w-4 text-accent-gray duration-300 group-hover:scale-125 group-hover:text-accent-green-100" />
              <span className="max-[480px]:hidden">{socialLink.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
