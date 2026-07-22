"use client";

import React from "react";
import { motion } from "framer-motion";

export const ProblemSection = () => {
  return (
    <section id="problem" className="w-full bg-[#F8F8F6] border-t border-gray-200/60">

      {/* ── Top editorial block ─────────────────────────────── */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <span className="text-[#10B981] text-sm font-semibold tracking-widest uppercase block mb-6">
              The Problem
            </span>
            <h2
              className="text-[clamp(2rem,4vw,3.25rem)] font-extrabold text-[#0F172A] leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-outfit), sans-serif" }}
            >
              Hiring has become
              <br />
              an <span className="text-[#10B981]">information</span>
              <br />
              problem.
            </h2>
          </motion.div>

          {/* Right: Body */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.15 }}
            className="flex flex-col justify-center pt-2 lg:pt-16"
          >
            <p className="text-[1.125rem] text-gray-600 leading-[1.75] mb-6">
              Every day, professionals spend hours applying to jobs without knowing
              whether they&apos;re genuinely competitive. They rewrite resumes, chase ATS
              scores, and hope for replies — while recruiters struggle to identify
              the right candidates among thousands of applications.
            </p>
            <p className="text-[1.125rem] text-gray-600 leading-[1.75] mb-8">
              The problem isn&apos;t a lack of effort.
              <br />
              It&apos;s a lack of intelligence.
            </p>
            <p className="text-[1.125rem] text-gray-600 leading-[1.75]">
              CoreCV helps professionals understand where they stand today, what
              they need to improve, and how to approach every opportunity
              strategically.
            </p>
          </motion.div>

        </div>
      </div>

      {/* ── Divider ─────────────────────────────────────────── */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="h-px bg-gray-200" />
      </div>

      {/* ── Guesswork quotes block ───────────────────────────── */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-10"
        >
          What professionals say every day
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          {[
            "I've applied to 500 jobs and heard nothing.",
            "I don't know what I'm doing wrong.",
            "Should I rewrite my CV again?",
            "Should I build more projects?",
            "Should I even apply for this role?",
            "What should I learn next?",
          ].map((quote, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: i * 0.07 }}
              className="flex items-start gap-3"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
              <p className="text-[1rem] text-gray-500 leading-[1.6] italic">
                &ldquo;{quote}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.45 }}
          className="mt-16"
        >
          <p
            className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold text-[#0F172A] leading-[1.25] max-w-3xl"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            They&apos;re not asking for a resume builder.
            <br />
            They&apos;re asking:{" "}
            <span className="text-[#10B981]">what should I do next?</span>
          </p>
          <p className="mt-4 text-gray-500 text-[1.0625rem]">
            That is the product.
          </p>
        </motion.div>
      </div>

    </section>
  );
};
