"use client";

import React from "react";
import { motion } from "framer-motion";

const audiences = [
  {
    label: "Entering the workforce",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    points: [
      "Build credibility before your first job",
      "Know what to learn and why",
      "Create evidence that gets noticed",
    ],
  },
  {
    label: "Early-career professionals",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    points: [
      "Apply with confidence, not hope",
      "Understand your strengths and gaps",
      "Grow intentionally, not randomly",
    ],
  },
  {
    label: "Experienced professionals",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    points: [
      "Target higher-impact opportunities",
      "Reuse your professional history intelligently",
      "Prepare strategically for every career move",
    ],
  },
];

export const AudienceSection = () => {
  return (
    <section id="audience" className="w-full bg-[#FAFAF9] border-t border-gray-100">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="text-[#10B981] text-sm font-semibold tracking-widest uppercase block mb-5">
            Who it's for
          </span>
          <h2
            className="text-[clamp(1.875rem,4vw,3rem)] font-extrabold text-[#0F172A] leading-[1.1] tracking-tight max-w-3xl"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            Whether you're just starting or
            <br />
            already experienced, CoreCV
            <br />
            meets you where you are.
          </h2>
        </motion.div>

        {/* Audience cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((audience, i) => (
            <motion.div
              key={audience.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#1E3A5F]/40 hover:shadow-md transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-[#1E3A5F]/[0.06] flex items-center justify-center text-[#1E3A5F] mb-6 group-hover:bg-[#1E3A5F]/10 transition-colors">
                {audience.icon}
              </div>

              {/* Label */}
              <h3
                className="text-[1.125rem] font-bold text-[#0F172A] mb-5 leading-tight"
                style={{ fontFamily: "var(--font-outfit), sans-serif" }}
              >
                {audience.label}
              </h3>

              {/* Points */}
              <ul className="space-y-3">
                {audience.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="mt-2 w-1 h-1 rounded-full bg-[#10B981] shrink-0" />
                    <span className="text-[0.9375rem] text-gray-500 leading-[1.6]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
