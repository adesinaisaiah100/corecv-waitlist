"use client";

import React from "react";
import { motion } from "framer-motion";
import { ReversibleScrollSwing } from "./reversible-scroll-swing";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Bring your work together",
    desc: "Start with the projects, experience, skills, and evidence you already have.",
  },
  {
    step: "02",
    title: "Structure what you've done",
    desc: "Capture the context, contribution, outcome, and proof behind your work.",
  },
  {
    step: "03",
    title: "Keep your record updated",
    desc: "Every new experience becomes part of your professional history.",
  },
  {
    step: "04",
    title: "Let your work speak",
    desc: "When recruiters are looking for relevant talent, your record can help them understand what you can do.",
  },
];

export const PlatformOverviewSection = () => {
  return (
    <section id="how-it-works" className="w-full bg-[#0D1117] border-t border-white/10 py-18 md:py-24 text-white">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10">

        {/* ── TWO SIDES, ONE RECORD ── */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: EASE }}
            className="max-w-3xl mb-10"
          >
            <span
              className="text-[#10B981] text-xs font-mono font-bold tracking-widest uppercase block mb-3"
              style={{ fontFamily: "var(--font-space), monospace" }}
            >
              Two Sides, One Record
            </span>
            <h2
              className="text-[clamp(2.15rem,3.5vw,3.25rem)] font-extrabold leading-[1.12] tracking-tight mb-2"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              Professionals build the record.
            </h2>
            <h2
              className="text-[clamp(2.15rem,3.5vw,3.25rem)] font-extrabold leading-[1.12] tracking-tight text-[#10B981]"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              Recruiters discover through it.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-lg bg-[#0F172A] border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  For professionals
                </span>
                <p className="text-base text-slate-300 leading-relaxed font-normal">
                  CoreCV is a place to build and maintain the record of your work.
                </p>
              </div>
              <p className="text-sm font-bold text-emerald-400 mt-6 pt-4 border-t border-white/10">
                Your work becomes easier to represent.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#0F172A] border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  For recruiters
                </span>
                <p className="text-base text-slate-300 leading-relaxed font-normal">
                  It is a way to discover people based on the capabilities and evidence they need.
                </p>
              </div>
              <p className="text-sm font-bold text-emerald-400 mt-6 pt-4 border-t border-white/10">
                Your capabilities become easier to discover.
              </p>
            </div>
          </div>

          <p className="text-base font-medium text-slate-300 text-center py-2">
            The same record serves both sides.
          </p>
        </div>

        {/* Hairline Divider */}
        <div className="w-full h-px bg-white/10 my-16" />

        {/* ── WHY CORECV ── */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: EASE }}
              className="lg:col-span-5"
            >
              <span
                className="text-[#10B981] text-xs font-mono font-bold tracking-widest uppercase block mb-3"
                style={{ fontFamily: "var(--font-space), monospace" }}
              >
                Why CoreCV
              </span>
              <h3
                className="text-[clamp(1.85rem,3vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight mb-2"
                style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
              >
                Your professional story already exists.
              </h3>
              <h3
                className="text-[clamp(1.85rem,3vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight text-[#10B981] mb-6"
                style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
              >
                We bring it together.
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
              className="lg:col-span-7 space-y-4"
            >
              <div className="p-6 rounded-lg bg-[#0F172A] border border-white/10 space-y-4">
                <p className="text-base font-semibold text-white">
                  Your professional record should connect the pieces.
                </p>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  CoreCV connects your experience, work, capabilities, context, and evidence into one underlying source — giving you a verified record you own and keep building throughout your career.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300 pt-3 border-t border-white/10">
                  <span className="text-emerald-400">&#10003; Not another public profile</span>
                  <span>•</span>
                  <span className="text-emerald-400">&#10003; Not another place to apply</span>
                  <span>•</span>
                  <span className="text-emerald-400">&#10003; Your living source of truth</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="w-full h-px bg-white/10 my-16" />

        {/* ── HOW IT WORKS ── */}
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
              How It Works
            </span>
            <h3
              className="text-[clamp(1.85rem,3vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              Build it once. Keep building it.
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <ReversibleScrollSwing
                key={step.step}
                index={idx}
                total={HOW_IT_WORKS_STEPS.length}
                className="p-5 rounded-lg bg-[#0F172A] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#10B981] block mb-3">
                    {step.step}
                  </span>
                  <h4 className="text-base font-bold text-white mb-2" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
                    {step.title}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </ReversibleScrollSwing>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
