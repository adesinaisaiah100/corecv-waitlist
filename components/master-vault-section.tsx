"use client";

import React from "react";
import { motion } from "framer-motion";
import { ReversibleScrollSwing } from "./reversible-scroll-swing";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const VAULT_ITEMS = [
  {
    title: "Experience",
    body: "The roles you've held, what you worked on, and what you contributed.",
  },
  {
    title: "Projects",
    body: "The things you've built, the problems you solved, and the work you've shipped.",
  },
  {
    title: "Capabilities",
    body: "The skills and abilities your work demonstrates.",
  },
  {
    title: "Evidence",
    body: "GitHub repositories, live products, documents, images, videos, certificates, testimonials, and other supporting proof.",
  },
  {
    title: "Context",
    body: "The details that explain why the work mattered and what made it meaningful.",
  },
];

const STORY_QUESTIONS = [
  { step: "01", label: "The Problem", question: "What was the problem?" },
  { step: "02", label: "Action", question: "What did you do?" },
  { step: "03", label: "Ownership", question: "What did you own?" },
  { step: "04", label: "Friction", question: "What was difficult?" },
  { step: "05", label: "Outcome", question: "What was the result?" },
];

const EVIDENCE_ROWS = [
  { claim: "Built the product", proof: "Live product & deployments" },
  { claim: "Designed the system", proof: "Repository or technical architecture" },
  { claim: "Led the project", proof: "Project context, contribution, testimonials" },
  { claim: "Solved the problem", proof: "Measurable metrics & supporting evidence" },
];

const POKER_SPRING = {
  type: "spring" as const,
  stiffness: 220,
  damping: 20,
  mass: 0.85,
};

// 3 visible cards fanned out like a physical poker hand
const FAN_STACK = [
  { rotate: -4, x: -12, y: 0, scale: 1, zIndex: 10, opacity: 1 },
  { rotate: 1, x: 6, y: -8, scale: 0.96, zIndex: 8, opacity: 0.88 },
  { rotate: 6, x: 22, y: -16, scale: 0.92, zIndex: 6, opacity: 0.65 },
];

const VaultPokerDeck = () => {
  const [deck, setDeck] = React.useState(VAULT_ITEMS);
  const [dealDirection, setDealDirection] = React.useState<"forward" | "backward" | null>(null);
  const [isPaused, setIsPaused] = React.useState(false);

  const shuffleForward = React.useCallback(() => {
    if (dealDirection) return;
    setDealDirection("forward");

    setTimeout(() => {
      setDeck((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
      setDealDirection(null);
    }, 280);
  }, [dealDirection]);

  const shuffleBackward = React.useCallback(() => {
    if (dealDirection) return;
    setDealDirection("backward");

    setTimeout(() => {
      setDeck((prev) => {
        const last = prev[prev.length - 1];
        const rest = prev.slice(0, prev.length - 1);
        return [last, ...rest];
      });
      setDealDirection(null);
    }, 280);
  }, [dealDirection]);

  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      shuffleForward();
    }, 3600);
    return () => clearInterval(timer);
  }, [isPaused, shuffleForward]);

  return (
    <div 
      className="block md:hidden w-full my-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => {
        setTimeout(() => setIsPaused(false), 2500);
      }}
    >
      <div 
        className="relative h-[230px] w-full max-w-[340px] mx-auto select-none"
        style={{ perspective: "1000px" }}
      >
        {deck.map((item, idx) => {
          if (idx > 2) return null;
          const isTop = idx === 0;
          const config = FAN_STACK[idx];

          return (
            <motion.div
              key={item.title}
              layout
              initial={false}
              animate={
                isTop && dealDirection === "forward"
                  ? { x: -140, y: -24, rotate: -16, opacity: 0, scale: 0.95 }
                  : isTop && dealDirection === "backward"
                  ? { x: 140, y: -24, rotate: 16, opacity: 0, scale: 0.95 }
                  : {
                      x: config.x,
                      y: config.y,
                      rotate: config.rotate,
                      scale: config.scale,
                      zIndex: config.zIndex,
                      opacity: config.opacity,
                    }
              }
              transition={POKER_SPRING}
              drag={isTop ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(_e, info) => {
                if (info.offset.x < -30 || info.velocity.x < -180) {
                  shuffleForward();
                } else if (info.offset.x > 30 || info.velocity.x > 180) {
                  shuffleBackward();
                }
              }}
              onClick={(e) => {
                if (!isTop) return;
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                if (clickX < rect.width * 0.35) {
                  shuffleBackward();
                } else {
                  shuffleForward();
                }
              }}
              className={`absolute inset-0 p-6 rounded-xl bg-[#0F172A] border border-slate-800 shadow-2xl flex flex-col justify-between ${
                isTop ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"
              }`}
            >
              <div>
                <h3
                  className="text-xl font-bold text-white mb-2 tracking-tight"
                  style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {item.body}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const EvidencePokerDeck = () => {
  const [deck, setDeck] = React.useState(EVIDENCE_ROWS);
  const [dealDirection, setDealDirection] = React.useState<"forward" | "backward" | null>(null);
  const [isPaused, setIsPaused] = React.useState(false);

  const shuffleForward = React.useCallback(() => {
    if (dealDirection) return;
    setDealDirection("forward");

    setTimeout(() => {
      setDeck((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
      setDealDirection(null);
    }, 280);
  }, [dealDirection]);

  const shuffleBackward = React.useCallback(() => {
    if (dealDirection) return;
    setDealDirection("backward");

    setTimeout(() => {
      setDeck((prev) => {
        const last = prev[prev.length - 1];
        const rest = prev.slice(0, prev.length - 1);
        return [last, ...rest];
      });
      setDealDirection(null);
    }, 280);
  }, [dealDirection]);

  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      shuffleForward();
    }, 3800);
    return () => clearInterval(timer);
  }, [isPaused, shuffleForward]);

  return (
    <div 
      className="block md:hidden w-full my-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => {
        setTimeout(() => setIsPaused(false), 2500);
      }}
    >
      <div 
        className="relative h-[210px] w-full max-w-[340px] mx-auto select-none"
        style={{ perspective: "1000px" }}
      >
        {deck.map((item, idx) => {
          if (idx > 2) return null;
          const isTop = idx === 0;
          const config = FAN_STACK[idx];

          return (
            <motion.div
              key={item.claim}
              layout
              initial={false}
              animate={
                isTop && dealDirection === "forward"
                  ? { x: -140, y: -24, rotate: -16, opacity: 0, scale: 0.95 }
                  : isTop && dealDirection === "backward"
                  ? { x: 140, y: -24, rotate: 16, opacity: 0, scale: 0.95 }
                  : {
                      x: config.x,
                      y: config.y,
                      rotate: config.rotate,
                      scale: config.scale,
                      zIndex: config.zIndex,
                      opacity: config.opacity,
                    }
              }
              transition={POKER_SPRING}
              drag={isTop ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(_e, info) => {
                if (info.offset.x < -30 || info.velocity.x < -180) {
                  shuffleForward();
                } else if (info.offset.x > 30 || info.velocity.x > 180) {
                  shuffleBackward();
                }
              }}
              onClick={(e) => {
                if (!isTop) return;
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                if (clickX < rect.width * 0.35) {
                  shuffleBackward();
                } else {
                  shuffleForward();
                }
              }}
              className={`absolute inset-0 p-6 rounded-xl bg-[#0F172A] border border-slate-800 shadow-2xl flex flex-col justify-between ${
                isTop ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"
              }`}
            >
              <div>
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400 block mb-2">
                  Claim &amp; Proof
                </span>
                <h4
                  className="text-lg font-bold text-white tracking-tight"
                  style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                >
                  {item.claim}
                </h4>
              </div>
              <div className="pt-3 border-t border-white/10 flex items-center gap-2">
                <span className="text-emerald-400 text-sm font-semibold">&rarr;</span>
                <span className="text-sm font-semibold text-emerald-400">
                  {item.proof}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export const MasterVaultSection = () => {
  return (
    <section id="master-vault" className="w-full bg-[#0D1117] border-t border-white/10 py-18 md:py-24 text-white">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10">

        {/* ── 01: MEET YOUR MASTER VAULT ── */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: EASE }}
            className="max-w-3xl mb-12"
          >
            <span
              className="text-[#10B981] text-xs font-mono font-bold tracking-widest uppercase block mb-3"
              style={{ fontFamily: "var(--font-space), monospace" }}
            >
              Master Vault
            </span>
            <h2
              className="text-[clamp(2.15rem,3.5vw,3.25rem)] font-extrabold leading-[1.12] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              Meet your Master Vault.
            </h2>
            <p className="text-[1.125rem] text-slate-300 font-medium mb-1">
              Your Master Vault is your living professional record.
            </p>
            <p className="text-[1.0625rem] text-slate-400">
              Bring together the things that make up your professional experience:
            </p>
          </motion.div>

          {/* Mobile: 3D Interactive Poker Deck */}
          <VaultPokerDeck />

          {/* Desktop: 3-Column Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VAULT_ITEMS.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, ease: EASE, delay: idx * 0.06 }}
                className="p-6 rounded-lg bg-[#0F172A] border border-white/10"
              >
                <h3
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-outfit), sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {item.body}
                </p>
              </motion.div>
            ))}

            <div className="p-6 rounded-lg bg-[#0F172A] border border-white/10 flex items-center justify-center text-center">
              <p
                className="text-lg font-bold text-slate-200"
                style={{ fontFamily: "var(--font-outfit), sans-serif" }}
              >
                One record. Everything that matters.
              </p>
            </div>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="w-full h-px bg-white/10 my-16" />

        {/* ── 02: BUILDING YOUR RECORD ── */}
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
                Building Your Record
              </span>
              <h3
                className="text-[clamp(1.85rem,3vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight mb-4"
                style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
              >
                Don&apos;t just list what you did.
                <br />
                Capture the story behind it.
              </h3>
              <p className="text-slate-300 text-base leading-relaxed mb-3">
                CoreCV helps you turn your experiences into structured, compelling records.
              </p>
              <p className="text-slate-400 text-sm">
                Start with any project or role, and answer the five foundational questions:
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
              className="lg:col-span-7 space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {STORY_QUESTIONS.map((item, idx) => (
                  <ReversibleScrollSwing
                    key={item.step}
                    index={idx}
                    total={STORY_QUESTIONS.length}
                    className="p-3.5 rounded-lg bg-[#0F172A] border border-white/10 flex items-center gap-3"
                  >
                    <span className="text-xs font-mono font-bold text-emerald-400">{item.step}</span>
                    <span className="text-sm font-semibold text-slate-100">{item.question}</span>
                  </ReversibleScrollSwing>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <p className="text-sm text-slate-300 leading-relaxed">
                  CoreCV structures those answers into a verified record and links them directly to the supporting proof.
                </p>
                <p className="text-sm font-semibold text-emerald-400">
                  Your record comes from your real work — not from sounding artificially impressive.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="w-full h-px bg-white/10 my-16" />

        {/* ── 03: EVIDENCE ── */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: EASE }}
            className="max-w-3xl mb-8"
          >
            <span
              className="text-[#10B981] text-xs font-mono font-bold tracking-widest uppercase block mb-3"
              style={{ fontFamily: "var(--font-space), monospace" }}
            >
              Evidence
            </span>
            <h3
              className="text-[clamp(1.85rem,3vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight mb-3"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              Claims are easy. Evidence is better.
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              A professional record becomes indispensable when the work behind it is tangible and visible.
            </p>
          </motion.div>

          {/* Mobile: 3D Interactive Poker Deck */}
          <EvidencePokerDeck />

          {/* Desktop: 2-Column Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-4 mb-6">
            {EVIDENCE_ROWS.map((row, idx) => (
              <ReversibleScrollSwing
                key={row.claim}
                index={idx}
                total={EVIDENCE_ROWS.length}
                className="p-5 rounded-lg bg-[#0F172A] border border-white/10 flex flex-col justify-between"
              >
                <span className="text-base font-bold text-white" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
                  {row.claim}
                </span>
                <span className="text-sm font-semibold text-emerald-400 mt-2 flex items-center gap-2">
                  <span>&rarr;</span>
                  <span>{row.proof}</span>
                </span>
              </ReversibleScrollSwing>
            ))}
          </div>

          <p className="text-sm text-slate-400 pt-2">
            CoreCV seamlessly connects what you say you&apos;ve done with the artifacts that prove it.
          </p>
        </div>

        {/* Hairline Divider */}
        <div className="w-full h-px bg-white/10 my-16" />

        {/* ── 04: IT KEEPS GROWING ── */}
        <div>
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
                It Keeps Growing
              </span>
              <h3
                className="text-[clamp(1.85rem,3vw,2.75rem)] font-extrabold leading-[1.15] tracking-tight mb-4"
                style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
              >
                Your career changes.
                <br />
                Your record should too.
              </h3>
              <p className="text-slate-300 text-base leading-relaxed font-medium">
                Your professional record isn&apos;t a static file you write once and forget.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
              className="lg:col-span-7 space-y-4"
            >
              <div className="p-6 rounded-lg bg-[#0F172A] border border-white/10 space-y-3">
                <p className="text-sm font-semibold text-slate-200">
                  Every milestone compounds into your record:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-xs bg-[#10B981] shrink-0" />
                    <span>New projects and deployments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-xs bg-[#10B981] shrink-0" />
                    <span>New roles and responsibilities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-xs bg-[#10B981] shrink-0" />
                    <span>Demonstrated capabilities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-xs bg-[#10B981] shrink-0" />
                    <span>Verified evidence & testimonials</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-sm text-slate-400 mb-2 leading-relaxed">
                  Over time, your Master Vault becomes a richer, more accurate representation of your professional journey.
                </p>
                <p className="text-base font-bold text-emerald-400">
                  You keep moving forward. Your record keeps up.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};
