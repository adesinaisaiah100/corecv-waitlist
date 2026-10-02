"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const Hero = () => {
  return (
    <section
      className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center py-16 md:py-24 overflow-hidden text-white"
      style={{ background: "#0D1117" }}
    >
      <div className="relative w-full max-w-[960px] mx-auto px-6 md:px-10 text-left md:text-center flex flex-col items-start md:items-center">
        <div className="flex flex-col items-start md:items-center text-left md:text-center max-w-4xl mx-auto">
          
          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-4"
          >
            <span
              className="text-[#10B981] text-xs font-mono font-bold tracking-widest uppercase"
              style={{ fontFamily: "var(--font-space), monospace" }}
            >
              Early Access • Founding Network
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.08 }}
            className="text-[32px] sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6"
            style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
          >
            Your professional record starts here.
          </motion.h1>

          {/* Subtitle / Body Copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.16 }}
            className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mb-8"
          >
            Build your Master Vault and bring together the work, experience, capabilities, and evidence that show what you can actually do.
          </motion.p>

          {/* CTAs (Waitlist Tailored) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.24 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start md:justify-center gap-3 sm:gap-4 w-full sm:w-auto mb-6"
          >
            <Link href="/join" className="w-full sm:w-auto">
              <button
                className="w-full sm:w-auto font-semibold py-3.5 px-7 rounded-lg text-base text-white transition-all duration-200 hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
                style={{
                  background: "#10B981",
                  boxShadow: "0 4px 20px rgba(16, 185, 129, 0.35)",
                }}
              >
                Join the waitlist &rarr;
              </button>
            </Link>

            <Link href="/join?type=recruiter" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto font-semibold py-3.5 px-6 rounded-lg text-base text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2">
                For recruiters &rarr; Early access
              </button>
            </Link>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xs text-slate-400 font-medium"
          >
            Build it once. Keep building it • Early access for founding members
          </motion.p>

        </div>
      </div>
    </section>
  );
};
