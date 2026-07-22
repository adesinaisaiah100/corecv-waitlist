"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const VisionCTA = () => {
  return (
    <section className="w-full bg-[#0F172A]">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 py-28 md:py-36">

        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 text-[#10B981] text-sm font-semibold tracking-widest uppercase mb-8 block"
        >
          <span className="w-5 h-px bg-[#10B981]" />
          The Vision
        </motion.span>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="text-[clamp(2.25rem,5vw,4rem)] font-extrabold text-white leading-[1.07] tracking-tight max-w-4xl mb-8"
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          Careers are built over years,
          <br />
          not applications.
        </motion.h2>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          className="max-w-2xl mb-14"
        >
          <p className="text-[1.125rem] text-gray-400 leading-[1.75] mb-5">
            Most career tools help you complete a task.
          </p>
          <p className="text-[1.125rem] text-gray-300 leading-[1.75] font-medium">
            CoreCV helps you build a career.
          </p>
          <p className="text-[1.0625rem] text-gray-400 leading-[1.75] mt-5">
            Because every project, every opportunity, every interview, and every
            lesson should make you more competitive for the next one.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
          className="flex flex-col sm:flex-row items-start gap-6"
        >
          <Link
            href="/login"
            className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-[#0F172A] font-semibold rounded-full transition-all duration-200 text-base hover:-translate-y-0.5 active:scale-95 shadow-lg shadow-black/20"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start for free
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
          <p className="text-sm text-gray-500 self-center">
            Free to start. No credit card required.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
