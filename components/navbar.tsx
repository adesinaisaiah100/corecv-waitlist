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
      className="relative pb-1 text-sm font-medium"
      style={{
        color: active || hovered ? "#F1F5F9" : "rgba(148, 163, 184, 0.85)",
        transition: "color 0.3s ease",
      }}
    >
      {name}
      <span
        className="pointer-events-none absolute left-0 -bottom-0.5 h-[1.5px] w-full origin-left rounded-xs"
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
    { name: "Master Vault", href: "/#master-vault" },
    { name: "For Recruiters", href: "/#recruiters" },
    { name: "How It Works", href: "/#how-it-works" },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full px-4 py-3 flex justify-center items-center"
    >
      <nav
        className="w-full max-w-7xl p-3 px-6 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center rounded-xl"
        style={{
          background: "rgba(13, 17, 23, 0.8)",
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
            aria-label="Toggle Navigation Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* ── NAV LINKS ────────────────────────────────────────────────── */}
        <ul
          className={cn(
            "flex flex-col md:flex-row items-center gap-7 w-full md:w-auto transition-all",
            open ? "flex pt-4 md:pt-0" : "hidden md:flex"
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

        {/* ── CTA BUTTONS (WAITLIST TAILORED) ─────────────────────────── */}
        <div
          className={cn(
            "flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto",
            open ? "flex pt-2 md:pt-0" : "hidden md:flex"
          )}
        >
          <Link
            href="/join"
            className="text-sm font-semibold text-slate-300 hover:text-white transition-colors px-2 py-1"
            onClick={() => setOpen(false)}
          >
            Founding Member
          </Link>
          <Link href="/join" className="w-full sm:w-auto" onClick={() => setOpen(false)}>
            <button
              className="w-full sm:w-auto font-semibold py-2 px-5 rounded-lg text-sm text-white transition-all duration-200 hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-1.5"
              style={{
                background: "#10B981",
                boxShadow: "0 4px 20px rgba(16, 185, 129, 0.35)",
              }}
            >
              Join the waitlist &rarr;
            </button>
          </Link>
        </div>
      </nav>
    </motion.header>
  );
};
