"use client";

import React from "react";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const TheReframeSection = () => {
  return (
    <section id="problem" className="w-full bg-[#F8F8F6] border-t border-gray-200/80 py-16 md:py-20 text-[#0F172A]">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10">

        {/* ── PART 1: THE PROBLEM ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
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
              The Problem
            </span>
            <h2
              className="text-[clamp(2.15rem,3.5vw,3.25rem)] font-extrabold leading-[1.12] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              Your work is bigger than your CV.
            </h2>
            <p className="text-base md:text-lg font-bold text-gray-900 border-l-2 border-[#10B981] pl-4 leading-snug">
              Your experience shouldn&apos;t have to be reconstructed every time someone wants to understand you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
            className="lg:col-span-7 space-y-4 text-[1.0625rem] text-gray-700 leading-relaxed font-normal"
          >
            <p className="leading-relaxed">
              You’ve built things, solved difficult problems, learned new skills, collaborated with teams, and shipped real projects. But when you put yourself out there, most of that depth gets flattened into a few lines on a PDF.
            </p>
            <p className="leading-relaxed">
              The rest stays scattered across GitHub repositories, portfolios, documents, certificates, and old project folders. When someone needs to understand what you can actually do, they have to piece it all together themselves.
            </p>
          </motion.div>
        </div>

        {/* Hairline Divider */}
        <div className="w-full h-px bg-gray-200 my-14" />

        {/* ── PART 2: THE NEW WAY ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
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
              The New Way
            </span>
            <h2
              className="text-[clamp(2.15rem,3.5vw,3.25rem)] font-extrabold leading-[1.12] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              Your CV is an output.
              <br />
              <span className="text-[#10B981]">Your professional record is the source.</span>
            </h2>
            <p className="text-[1.0625rem] text-gray-600 leading-relaxed">
              A CV gives someone a snapshot.
              <br />
              Your professional record holds the full story.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                { title: "What you contributed", desc: "The roles, responsibilities, and ownership you held" },
                { title: "What you built", desc: "Live products, systems, codebases, and projects" },
                { title: "What changed", desc: "The tangible impact and measurable results of your work" },
                { title: "What proves it", desc: "Direct repositories, documents, and verified evidence" },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-white border border-gray-200/90 shadow-2xs">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-xs bg-[#10B981] shrink-0" />
                    <span className="text-[0.95rem] font-bold text-gray-900">{item.title}</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-normal pl-3.5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-base md:text-lg font-bold text-gray-900 pt-4 border-t border-gray-200">
              CoreCV brings those pieces together in one living record.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
