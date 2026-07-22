"use client";

import React, { useEffect, useMemo, useState } from "react";
import Logob from "./images/logob.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

// ── NavItem ───────────────────────────────────────────────────────────────────
type NavItemProps = {
  name: string;
  href: string;
  active: boolean;
  onClick?: () => void;
};

function NavItem({ name, href, active, onClick }: NavItemProps) {
  const [hovered, setHovered] = useState(false);
  const showUnderline = active || hovered;

  return (
    <Link
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative pb-1"
      style={{
        color: active || hovered ? "#F1F5F9" : "rgba(148, 163, 184, 0.85)",
        transition: "color 0.3s ease",
      }}
    >
      {name}
      <span
        className="pointer-events-none absolute left-0 -bottom-0.5 h-[1.5px] w-full origin-left rounded-full"
        style={{
          background: "linear-gradient(to right, #10B981, #60A5FA)",
          transform: showUnderline ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 0.3s ease",
        }}
      />
    </Link>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────────────
export const Navbar = () => {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [open, setOpen] = useState(false);

  // ── Hash tracking ───────────────────────────────────────────────────────────
  useEffect(() => {
    const update = () => setHash(window.location.hash ?? "");
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  // ── Active link detection ───────────────────────────────────────────────────
  const isActive = useMemo(() => {
    const clean = (v: string) => (v.length > 1 ? v.replace(/\/+$/, "") : v);
    const currentPath = clean(pathname || "/");
    const currentHash = hash || "";
    return (href: string) => {
      const [hrefPathRaw, hrefHashRaw] = href.split("#");
      const hrefPath = clean(hrefPathRaw || "/");
      if (hrefHashRaw) return currentPath === hrefPath && currentHash === `#${hrefHashRaw}`;
      if (hrefPath === "/") return currentPath === "/" && !currentHash;
      return currentPath === hrefPath || currentPath.startsWith(`${hrefPath}/`);
    };
  }, [pathname, hash]);

  const handleLinkClick = (href: string) => {
    setOpen(false);
    setHash(href.includes("#") ? href.substring(href.indexOf("#")) : "");
  };

  const Navlinks = [
    { name: "How it works", href: "/#how-it-works" },
    { name: "Features",     href: "/#features" },
    { name: "Pricing",      href: "/#pricing" },
    { name: "Blog",         href: "/blog" },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full px-4 py-3 flex justify-center items-center"
    >
      <nav
        className="w-full max-w-7xl p-3 px-6 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center rounded-2xl"
        style={{
          background: "rgba(13, 17, 23, 0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
        }}
      >
        {/* ── LOGO ─────────────────────────────────────────────────────── */}
        <div className="text-lg font-semibold flex items-center w-full md:w-auto justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-[28px] h-[28px] flex items-center justify-center">
              <Image
                src={Logob}
                alt="CoreCV Logo"
                width={28}
                height={28}
                style={{
                  filter: "brightness(0) invert(1)", // Turn black logo into crisp white
                }}
              />
            </div>
            <span className="font-bold text-white tracking-tight">
              Core<span style={{ color: "#10B981" }}>CV</span>
            </span>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* ── NAV LINKS ────────────────────────────────────────────────── */}
        <ul
          className={cn(
            "flex flex-col md:flex-row items-center gap-6 w-full md:w-auto transition-all",
            open ? "flex" : "hidden md:flex"
          )}
        >
          {Navlinks.map((link) => (
            <li key={link.name}>
              <NavItem
                name={link.name}
                href={link.href}
                active={isActive(link.href)}
"use client";

import React, { useEffect, useMemo, useState } from "react";
import Logob from "./images/logob.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

// ── NavItem ───────────────────────────────────────────────────────────────────
type NavItemProps = {
  name: string;
  href: string;
  active: boolean;
  onClick?: () => void;
};

function NavItem({ name, href, active, onClick }: NavItemProps) {
  const [hovered, setHovered] = useState(false);
  const showUnderline = active || hovered;

  return (
    <Link
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative pb-1"
      style={{
        color: active || hovered ? "#F1F5F9" : "rgba(148, 163, 184, 0.85)",
        transition: "color 0.3s ease",
      }}
    >
      {name}
      <span
        className="pointer-events-none absolute left-0 -bottom-0.5 h-[1.5px] w-full origin-left rounded-full"
        style={{
          background: "linear-gradient(to right, #10B981, #60A5FA)",
          transform: showUnderline ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 0.3s ease",
        }}
      />
    </Link>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────────────
export const Navbar = () => {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [open, setOpen] = useState(false);

  // ── Hash tracking ───────────────────────────────────────────────────────────
  useEffect(() => {
    const update = () => setHash(window.location.hash ?? "");
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  // ── Active link detection ───────────────────────────────────────────────────
  const isActive = useMemo(() => {
    const clean = (v: string) => (v.length > 1 ? v.replace(/\/+$/, "") : v);
    const currentPath = clean(pathname || "/");
    const currentHash = hash || "";
    return (href: string) => {
      const [hrefPathRaw, hrefHashRaw] = href.split("#");
      const hrefPath = clean(hrefPathRaw || "/");
      if (hrefHashRaw) return currentPath === hrefPath && currentHash === `#${hrefHashRaw}`;
      if (hrefPath === "/") return currentPath === "/" && !currentHash;
      return currentPath === hrefPath || currentPath.startsWith(`${hrefPath}/`);
    };
  }, [pathname, hash]);

  const handleLinkClick = (href: string) => {
    setOpen(false);
    setHash(href.includes("#") ? href.substring(href.indexOf("#")) : "");
  };

  const Navlinks = [
    { name: "How it works", href: "/#how-it-works" },
    { name: "Features",     href: "/#features" },
    { name: "Pricing",      href: "/#pricing" },
    { name: "Blog",         href: "/blog" },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full px-4 py-3 flex justify-center items-center"
    >
      <nav
        className="w-full max-w-7xl p-3 px-6 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center rounded-2xl"
        style={{
          background: "rgba(13, 17, 23, 0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
        }}
      >
        {/* ── LOGO ─────────────────────────────────────────────────────── */}
        <div className="text-lg font-semibold flex items-center w-full md:w-auto justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-[28px] h-[28px] flex items-center justify-center">
              <Image
                src={Logob}
                alt="CoreCV Logo"
                width={28}
                height={28}
                style={{
                  filter: "brightness(0) invert(1)", // Turn black logo into crisp white
                }}
              />
            </div>
            <span className="font-bold text-white tracking-tight">
              Core<span style={{ color: "#10B981" }}>CV</span>
            </span>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* ── NAV LINKS ────────────────────────────────────────────────── */}
        <ul
          className={cn(
            "flex flex-col md:flex-row items-center gap-6 w-full md:w-auto transition-all",
            open ? "flex" : "hidden md:flex"
          )}
        >
          {Navlinks.map((link) => (
            <li key={link.name}>
              <NavItem
                name={link.name}
                href={link.href}
                active={isActive(link.href)}
                onClick={() => handleLinkClick(link.href)}
              />
            </li>
          ))}
        </ul>

        {/* ── CTA BUTTON ───────────────────────────────────────────────── */}
        <div
          className={cn(
            "flex flex-col md:flex-row items-center gap-3 w-full md:w-auto",
            open ? "flex" : "hidden md:flex"
          )}
        >
          <Link
            href="#waitlist"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold text-slate-300 hover:text-white transition-colors w-full md:w-auto text-center py-2 md:py-0 md:mr-3"
          >
            Join Waitlist
          </Link>
          <Link
            href="#waitlist"
            onClick={() => setOpen(false)}
            className="w-full md:w-auto px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95 text-center"
            style={{
              background: "linear-gradient(135deg, #10B981, #059669)",
              boxShadow: "0 4px 14px rgba(16,185,129,0.3)",
            }}
          >
            Get Early Access
          </Link>
        </div>
      </nav>
    </motion.header>
  );
};
