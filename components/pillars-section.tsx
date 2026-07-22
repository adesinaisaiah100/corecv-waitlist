"use client";

import React from "react";
import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    color: "#1E3A5F",
    name: "Professional Memory",
    headline: "Capture your work once.",
    body: "Turn projects, achievements, and experiences into structured evidence you can reuse throughout your career. Your professional history shouldn't live in a dusty PDF — it should be searchable, provable, and ready.",
  },
  {
    number: "02",
    color: "#10B981",
    name: "Career Intelligence",
    headline: "Know where you're competitive.",
    body: "Discover what you're missing before you apply. Receive personalised guidance based on your actual vault of evidence, not generic career advice that ignores who you are.",
  },
  {
    number: "03",
    color: "#1E3A5F",
    name: "Opportunity Journey",
    headline: "Research every company.",
    body: "Understand every role. Prepare strategically. Reflect and improve after every application. Career growth isn't a single decision — it's a compounding series of better ones.",
  },
];

export const PillarsSection = () => {
  return (
    <section id="pillars" className="w-full bg-white border-t border-gray-100">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <span className="text-[#10B981] text-sm font-semibold tracking-widest uppercase block mb-5">
            The Platform
          </span>
          <h2
            className="text-[clamp(1.875rem,4vw,3rem)] font-extrabold text-[#0F172A] leading-[1.1] tracking-tight max-w-2xl"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            Everything starts with
            <br />
            understanding you.
          </h2>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="bg-white p-10 md:p-12 flex flex-col group hover:bg-[#FAFAF9] transition-colors duration-300"
            >
              <span
                className="text-[3rem] font-black leading-none mb-8 tabular-nums"
                style={{ color: pillar.color, fontFamily: "var(--font-outfit), sans-serif", opacity: 0.18 }}
              >
                {pillar.number}
              </span>

              <span className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">
                {pillar.name}
              </span>

              <h3
                className="text-[1.375rem] font-bold text-[#0F172A] leading-[1.3] mb-5"
                style={{ fontFamily: "var(--font-outfit), sans-serif" }}
              >
                {pillar.headline}
              </h3>

              <p className="text-[1rem] text-gray-500 leading-[1.7]">
                {pillar.body}
              </p>

              {/* Bottom accent line */}
              <div
                className="mt-10 h-0.5 w-8 group-hover:w-full transition-all duration-500 ease-out rounded-full"
                style={{ backgroundColor: pillar.color }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
