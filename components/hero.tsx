"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const AVATARS = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
];

// Typed cubic bezier for Framer Motion
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ── Method 1: Instant Z-Index Handoff Player (Zero Fading, Zero Double-Frame Freeze) ──

function ZIndexSeamlessHeroVideo() {
  const vid1Ref = useRef<HTMLVideoElement>(null);
  const vid2Ref = useRef<HTMLVideoElement>(null);
  const [topVideo, setTopVideo] = useState<1 | 2>(1);

  useEffect(() => {
    const vid1 = vid1Ref.current;
    const vid2 = vid2Ref.current;
    if (!vid1 || !vid2) return;

    // Autoplay initial video
    vid1.play().catch(() => {});

    // ── Vid1 Events ──────────────────────────────────────────────────────────
    const handleTimeUpdate1 = () => {
      // 0.15s before Vid1 ends, prime & start Vid2 in the background
      if (vid1.duration && vid1.currentTime > vid1.duration - 0.15 && vid2.paused) {
        vid2.play().catch(() => {});
      }
    };

    const handleEnded1 = () => {
      // Instantly flip zIndex (No fading / opacity dimming!)
      setTopVideo(2);
      vid1.currentTime = 0;
      vid1.pause();
    };

    // ── Vid2 Events ──────────────────────────────────────────────────────────
    const handleTimeUpdate2 = () => {
      // 0.15s before Vid2 ends, prime & start Vid1 in the background
      if (vid2.duration && vid2.currentTime > vid2.duration - 0.15 && vid1.paused) {
        vid1.play().catch(() => {});
      }
    };

    const handleEnded2 = () => {
      // Instantly flip zIndex (No fading / opacity dimming!)
      setTopVideo(1);
      vid2.currentTime = 0;
      vid2.pause();
    };

    vid1.addEventListener("timeupdate", handleTimeUpdate1);
    vid1.addEventListener("ended", handleEnded1);
    vid2.addEventListener("timeupdate", handleTimeUpdate2);
    vid2.addEventListener("ended", handleEnded2);

    return () => {
      vid1.removeEventListener("timeupdate", handleTimeUpdate1);
      vid1.removeEventListener("ended", handleEnded1);
      vid2.removeEventListener("timeupdate", handleTimeUpdate2);
      vid2.removeEventListener("ended", handleEnded2);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[560px] mx-auto select-none flex items-center justify-center">
      {/* Ambient emerald glow behind video */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          inset: "-15%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(16,185,129,0.18) 0%, transparent 60%)",
          zIndex: 0,
        }}
      />

      {/* Scaled 2.5x Video Container with Radial Edge Feathering Mask */}
      <div
        className="relative w-full aspect-video scale-[2.5] transition-transform duration-500"
        style={{
          zIndex: 1,
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 85%)",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 85%)",
        }}
      >
        {/* Video 1 */}
        <video
          ref={vid1Ref}
          muted
          playsInline
          preload="auto"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: topVideo === 1 ? 2 : 1,
          }}
          className="pointer-events-none"
        >
          <source src="/hero-video-zindex.webm" type="video/webm" />
          <source src="/hero-video-zindex-compressed.mp4" type="video/mp4" />
        </video>

        {/* Video 2 */}
        <video
          ref={vid2Ref}
          muted
          playsInline
          preload="auto"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: topVideo === 2 ? 2 : 1,
          }}
          className="pointer-events-none"
        >
          <source src="/hero-video-zindex.webm" type="video/webm" />
          <source src="/hero-video-zindex-compressed.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

// ── Hero Section ──────────────────────────────────────────────────────────────

export const Hero = () => {
  return (
    <section
      className="w-full min-h-[calc(100vh-80px)] flex items-center relative overflow-hidden"
      style={{ background: "#0D1117" }}
    >
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 75% 40%, rgba(16,185,129,0.05) 0%, transparent 55%)",
        }}
      />

      <div className="relative w-full mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12 xl:gap-20">

          {/* ── LEFT: Editorial Copy ────────────────────────────── */}
          <div className="flex-1 flex flex-col items-start lg:max-w-[620px] z-10">

            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mb-8"
              style={{ color: "#10B981" }}
            >
              <span className="w-5 h-px" style={{ background: "#10B981" }} />
              Career Intelligence Platform
            </motion.span>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.78, delay: 0.18, ease: EASE }}
              className="text-[clamp(2.5rem,5vw,4.25rem)] font-extrabold leading-[1.05] tracking-tight mb-8"
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                color: "#F1F5F9",
              }}
            >
              Careers shouldn&apos;t be<br />
              built on guesswork.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.3, ease: EASE }}
              className="text-[1.0625rem] md:text-[1.125rem] leading-[1.72] max-w-[420px] mb-12"
              style={{ color: "#8892A4" }}
            >
              Understand where you&apos;re competitive, prove what you can do, and
              make better career decisions with AI-powered career intelligence.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.42, ease: EASE }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14"
            >
              <Link
                href="#waitlist"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-full transition-all duration-200 text-base hover:-translate-y-0.5 active:scale-95"
                style={{
                  background: "#10B981",
                  color: "#fff",
                  boxShadow: "0 4px 24px rgba(16,185,129,0.25)",
                }}
                onMouseEnter={e =>
                  ((e.currentTarget as HTMLElement).style.background = "#0ea872")
                }
                onMouseLeave={e =>
                  ((e.currentTarget as HTMLElement).style.background = "#10B981")
                }
              >
                <div className="absolute inset-0 w-full h-full -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine pointer-events-none" />
                <span className="relative z-10 flex items-center gap-2">
                  Join the Waitlist
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>

              <Link
                href="#problem"
                className="inline-flex items-center gap-2 font-medium text-base border-b pb-px transition-colors duration-200 text-slate-500 hover:text-slate-300 border-slate-700 hover:border-slate-500"
              >
                See how it works
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.58, ease: EASE }}
              className="flex items-center gap-4"
            >
              <span className="flex -space-x-2.5">
                {AVATARS.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="CoreCV user"
                    className="w-9 h-9 rounded-full object-cover"
                    style={{ border: "2px solid #0D1117" }}
                  />
                ))}
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold" style={{ color: "#CBD5E1" }}>
                  140+ professionals
                </span>
                <span className="text-xs" style={{ color: "#475569" }}>
                  building their career intelligence
                </span>
              </div>
            </motion.div>

          </div>

          {/* ── RIGHT: Hero Video (desktop only) ──────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.3, ease: EASE }}
            className="hidden lg:flex flex-1 items-center justify-center z-0 overflow-visible"
          >
            <ZIndexSeamlessHeroVideo />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
