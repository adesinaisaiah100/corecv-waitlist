"use client";

import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const FAQS = [
  {
    question: "What is CoreCV, and how is it different from LinkedIn or a resume builder?",
    answer: "CoreCV is not a resume generator or a social network. It is a persistent professional evidence record and talent discovery engine.\n\nInstead of a static 1-page summary or an endless feed of posts, you maintain a Master Vault connecting what you did with the actual work that proves it (code, live deployments, documents, and context). Recruiters search that evidence pool directly to find talent with proven capability.",
  },
  {
    question: "How do recruiters actually discover me?",
    answer: "Recruiters don't sift through stacks of buzzword resumes. They describe specific requirements (e.g., 'a backend engineer who has shipped production APIs' or 'an operations lead who scaled fulfillment').\n\nCoreCV matches their requirements against the documented evidence in the candidate pool, showing them the real work behind the match so they can move the right people directly onto their shortlist.",
  },
  {
    question: "Does CoreCV independently verify everything in my vault?",
    answer: "CoreCV does not act as a formal background check agency. Instead, it provides the structure for you to link documented supporting evidence—live deployments, repositories, context, and project outcomes.\n\nRecruiters evaluate your real artifacts directly rather than taking generic claims at face value.",
  },
  {
    question: "Is CoreCV only for software developers?",
    answer: "No.\n\nCoreCV is built for any professional whose work produces tangible proof—engineers, product designers, marketers, operations leads, data analysts, and founders. If your career involves solving problems, shipping projects, or driving measurable outcomes, CoreCV gives you a place to anchor that proof.",
  },
  {
    question: "Do I have control over my privacy and what recruiters see?",
    answer: "Yes.\n\nYour Master Vault is your private professional record. You control your visibility settings, choose what evidence is shared for discovery, and decide when you are open to recruiter outreach.",
  },
  {
    question: "Is CoreCV free to use for professionals?",
    answer: "Yes.\n\nBuilding, updating, and maintaining your Master Vault is 100% free for professionals. Companies and hiring teams pay for access to search the evidence pool and connect with qualified talent.",
  },
];

export const FoundingAndFaqSection = () => {
  return (
    <>
      {/* ── FOUNDING NETWORK & FAQ ── */}
      <section className="w-full bg-[#F8F8F6] border-t border-gray-200/80 py-18 md:py-24 text-[#0F172A]">
        <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10">

          {/* Founding Network */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span
              className="text-[#10B981] text-xs font-mono font-bold tracking-widest uppercase block mb-3"
              style={{ fontFamily: "var(--font-space), monospace" }}
            >
              Founding Network
            </span>
            <h2
              className="text-[clamp(2.15rem,3.5vw,3.25rem)] font-extrabold leading-[1.12] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              We&apos;re building CoreCV with the people who will use it.
            </h2>
            <div className="space-y-4 text-[1.0625rem] text-gray-700 leading-relaxed font-normal mb-8 max-w-2xl mx-auto">
              <p>
                We&apos;re starting with students, early-career professionals, developers, designers, engineers, analysts, and other people building their careers.
              </p>
              <p>
                They&apos;re helping us shape how professional experience should be captured, understood, and discovered.
              </p>
            </div>
            <Link
              href="/join"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#10B981] hover:bg-[#0ea872] text-white font-semibold rounded-lg transition-all text-sm active:scale-95 shadow-md shadow-emerald-500/20"
            >
              Join the CoreCV founding network &rarr;
            </Link>
          </div>

          {/* Hairline Divider */}
          <div className="w-full max-w-3xl mx-auto h-px bg-gray-200 my-16" />

          {/* FAQ */}
          <div id="faq" className="max-w-3xl mx-auto">
            <div className="mb-10 text-center">
              <span
                className="text-[#10B981] text-xs font-mono font-bold tracking-widest uppercase block mb-3"
                style={{ fontFamily: "var(--font-space), monospace" }}
              >
                FAQ
              </span>
              <h3
                className="text-[clamp(1.85rem,3vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight"
                style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
              >
                Frequently Asked Questions
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Clear answers to how the Master Vault, talent discovery, and evidence matching work.
              </p>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-white rounded-lg border border-gray-200 shadow-xs overflow-hidden transition-all duration-200"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none">
                    <h4
                      className="text-base font-bold text-[#0F172A] pr-4 leading-snug text-left"
                      style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                    >
                      {faq.question}
                    </h4>
                    <span className="text-[#10B981] group-open:rotate-180 transition-transform duration-300 shrink-0">
                      <ChevronDown size={18} />
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-700 leading-relaxed pt-2 border-t border-gray-100 whitespace-pre-line text-sm text-left">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── FINAL WAITLIST CTA ── */}
      <section className="w-full bg-[#0D1117] border-t border-white/10 py-20 md:py-28 text-center text-white relative overflow-hidden">
        <div className="relative w-full max-w-[1200px] mx-auto px-6 md:px-10 z-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: EASE }}
            className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-extrabold text-white leading-[1.1] tracking-tight max-w-3xl mx-auto mb-6"
            style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
          >
            Your work deserves more than a few lines.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
            className="text-[1.0625rem] md:text-[1.125rem] text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed font-normal"
          >
            Join the waitlist to secure early access as a founding member and start building your living professional record.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.18 }}
            className="flex flex-col items-center justify-center gap-4"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                href="/join"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#10B981] hover:bg-[#0ea872] text-white font-semibold rounded-lg transition-all duration-200 text-base active:scale-95 shadow-lg shadow-emerald-500/25"
              >
                <div className="absolute inset-0 w-full h-full -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine pointer-events-none" />
                <span className="relative z-10 flex items-center gap-2">
                  Join the waitlist &rarr;
                </span>
              </Link>

              <Link
                href="/join?type=recruiter"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold rounded-lg border border-slate-700/80 bg-white/[0.02] text-slate-200 hover:text-white hover:border-slate-500 transition-all duration-200 text-base hover:-translate-y-0.5"
              >
                For recruiters &rarr; Early access
              </Link>
            </div>

            <Link
              href="/join"
              className="text-xs font-semibold text-slate-400 hover:text-white transition-colors mt-2"
            >
              Early access for founding members • Limited spots available.
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};
