"use client";

import React from "react";
import { motion } from "framer-motion";

const before = [
  "Why am I getting rejected?",
  "Should I rewrite my resume again?",
  "Should I even apply for this role?",
  "Do I have enough experience?",
  "What should I learn next?",
];

const after = [
  "Here's why this role isn't a strong fit.",
  "These two projects would make you competitive.",
  "Your experience already matches 78% of this role.",
  "This company values your exact strengths.",
  "Here's exactly how to prepare for your interview.",
];

export const QuestionsSection = () => {
  return (
    <section id="questions" className="w-full bg-[#0F172A]">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 py-24 md:py-32">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2
            className="text-[clamp(1.875rem,4vw,3rem)] font-extrabold text-white leading-[1.1] tracking-tight max-w-3xl"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            Stop guessing.
            <br />
            <span className="text-gray-400 font-medium">Start getting answers.</span>
          </h2>
        </motion.div>

        {/* Split table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">

          {/* Before column */}
          <div className="flex flex-col gap-2">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-gray-500">
                Questions you're asking now
              </span>
            </div>
            {before.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                className="flex items-start gap-4 bg-white/[0.04] border border-white/[0.06] rounded-xl px-6 py-5"
              >
                <span className="text-red-400 text-lg leading-none mt-0.5 shrink-0">✗</span>
                <p className="text-gray-300 text-[1rem] leading-[1.55]">{item}</p>
              </motion.div>
            ))}
          </div>

          {/* After column */}
          <div className="flex flex-col gap-2">
            <div className="mb-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#10B981]">
                Answers you'll have instead
              </span>
            </div>
            {after.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 + 0.05 }}
                className="flex items-start gap-4 bg-[#10B981]/[0.08] border border-[#10B981]/20 rounded-xl px-6 py-5"
              >
                <span className="text-[#10B981] text-lg leading-none mt-0.5 shrink-0">✓</span>
                <p className="text-gray-200 text-[1rem] leading-[1.55]">{item}</p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
