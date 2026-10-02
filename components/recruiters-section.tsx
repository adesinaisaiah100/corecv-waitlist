"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const RECRUITER_STEPS = [
  {
    step: "01",
    title: "Define what you need",
    desc: "Describe the role, capabilities, experience, and other requirements that matter.",
  },
  {
    step: "02",
    title: "Discover relevant professionals",
    desc: "CoreCV searches the professional evidence pool for records that match what you're looking for.",
  },
  {
    step: "03",
    title: "Understand the evidence",
    desc: "See the work, contributions, capabilities, and supporting proof behind the match.",
  },
  {
    step: "04",
    title: "Build your shortlist",
    desc: "Move the people worth speaking to forward.",
  },
];

export const RecruitersSection = () => {
  return (
    <section id="recruiters" className="w-full bg-[#F8F8F6] border-t border-gray-200/80 py-18 md:py-24 text-[#0F172A]">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10">

        {/* ── FOR RECRUITERS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: EASE }}
            className="lg:col-span-6"
          >
            <span
              className="text-[#10B981] text-xs font-mono font-bold tracking-widest uppercase block mb-3"
              style={{ fontFamily: "var(--font-space), monospace" }}
            >
              For Recruiters
            </span>
            <h2
              className="text-[clamp(2.15rem,3.5vw,3.25rem)] font-extrabold leading-[1.12] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              Stop starting with a pile of profiles.
            </h2>
            <div className="space-y-4 text-[1.0625rem] text-gray-700 leading-relaxed font-normal">
              <p>
                When you need to hire, you already know what you&apos;re looking for.
              </p>
              <p>
                The challenge is finding people who actually demonstrate it.
              </p>
              <p>
                With CoreCV, recruiters can describe the capabilities, experience, and context they need and discover professionals whose records contain relevant evidence.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col gap-4 pt-2"
          >
            <div className="p-6 rounded-lg bg-white border border-gray-200 opacity-75">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-500 block mb-2">
                Instead of asking:
              </span>
              <p className="text-xl font-bold text-gray-800 italic" style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}>
                &ldquo;Who looks qualified?&rdquo;
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white border-2 border-[#10B981]/50 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[#10B981] block mb-2">
                You can start asking:
              </span>
              <p className="text-xl font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}>
                &ldquo;Who has evidence of doing this work?&rdquo;
              </p>
            </div>
          </motion.div>
        </div>

        {/* Hairline Divider */}
        <div className="w-full h-px bg-gray-200 my-14" />

        {/* ── RECRUITER FLOW ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: EASE }}
            className="mb-10 max-w-2xl"
          >
            <span
              className="text-[#10B981] text-xs font-mono font-bold tracking-widest uppercase block mb-3"
              style={{ fontFamily: "var(--font-space), monospace" }}
            >
              Recruiter Flow
            </span>
            <h3
              className="text-[clamp(1.85rem,3vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              From requirement to relevant people.
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {RECRUITER_STEPS.map((step) => (
              <div key={step.step} className="p-5 rounded-lg bg-white border border-gray-200 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-[#10B981] block mb-3">
                    {step.step}
                  </span>
                  <h4 className="text-base font-bold text-[#0F172A] mb-2" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-gray-200">
            <p className="text-base md:text-lg font-bold text-[#0F172A]" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
              Less digging. More relevant people.
            </p>
            <Link
              href="/join"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#10B981] hover:bg-[#0ea872] text-white font-semibold rounded-lg transition-all text-sm active:scale-95 shadow-md shadow-emerald-500/20"
            >
              Join recruiter waitlist &rarr;
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
