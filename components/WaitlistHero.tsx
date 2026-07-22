"use client";

import React, { useEffect, useRef, useState } from "react";
import WaitlistForm from "./WaitlistForm";

// ── Typed ease curve ────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ── Social proof avatars ────────────────────────────────────────────────────
const AVATARS = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
];

// ── Method 1: Instant Z-Index Handoff Player ────────────────────────────────
function ZIndexSeamlessVideo() {
  const vid1Ref = useRef<HTMLVideoElement>(null);
  const vid2Ref = useRef<HTMLVideoElement>(null);
  const [topVideo, setTopVideo] = useState<1 | 2>(1);

  useEffect(() => {
    const vid1 = vid1Ref.current;
    const vid2 = vid2Ref.current;
    if (!vid1 || !vid2) return;

    vid1.play().catch(() => {});

    const onTimeUpdate1 = () => {
      if (vid1.duration && vid1.currentTime > vid1.duration - 0.15 && vid2.paused) {
        vid2.play().catch(() => {});
      }
    };
    const onEnded1 = () => {
      setTopVideo(2);
      vid1.currentTime = 0;
      vid1.pause();
    };
    const onTimeUpdate2 = () => {
      if (vid2.duration && vid2.currentTime > vid2.duration - 0.15 && vid1.paused) {
        vid1.play().catch(() => {});
      }
    };
    const onEnded2 = () => {
      setTopVideo(1);
      vid2.currentTime = 0;
      vid2.pause();
    };

    vid1.addEventListener("timeupdate", onTimeUpdate1);
    vid1.addEventListener("ended", onEnded1);
    vid2.addEventListener("timeupdate", onTimeUpdate2);
    vid2.addEventListener("ended", onEnded2);

    return () => {
      vid1.removeEventListener("timeupdate", onTimeUpdate1);
      vid1.removeEventListener("ended", onEnded1);
      vid2.removeEventListener("timeupdate", onTimeUpdate2);
      vid2.removeEventListener("ended", onEnded2);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[520px] mx-auto select-none flex items-center justify-center">
      {/* Ambient emerald glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          inset: "-15%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(16,185,129,0.16) 0%, transparent 60%)",
          zIndex: 0,
        }}
      />

      {/* Scaled 2.5× container with radial edge feathering */}
      <div
        className="relative w-full aspect-video scale-[2.5]"
        style={{
          zIndex: 1,
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 85%)",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 85%)",
        }}
      >
        <video
          ref={vid1Ref}
          src="/hero-video-zindex.mp4"
          muted
          playsInline
          preload="auto"
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", zIndex: topVideo === 1 ? 2 : 1,
          }}
          className="pointer-events-none"
        />
        <video
          ref={vid2Ref}
          src="/hero-video-zindex.mp4"
          muted
          playsInline
          preload="auto"
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", zIndex: topVideo === 2 ? 2 : 1,
          }}
          className="pointer-events-none"
        />
      </div>
    </div>
  );
}

// ── Main Waitlist Hero ──────────────────────────────────────────────────────
export default function WaitlistHero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div
      className="min-h-screen w-full flex flex-col overflow-x-hidden"
      style={{ background: "#0D1117" }}
    >
      {/* ── Navbar ──────────────────────────────────────── */}
      <nav className="w-full flex items-center justify-between px-6 md:px-10 py-5 z-50">
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-base"
            style={{ background: "linear-gradient(135deg, #10B981, #059669)", color: "#fff" }}
          >
            C
          </div>
          <span
            className="text-xl font-extrabold tracking-tight"
            style={{ color: "#F1F5F9", fontFamily: "var(--font-outfit), sans-serif" }}
          >
            CoreCV
          </span>
        </div>

        {/* Early access pill */}
        <div
          className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border"
          style={{
            background: "rgba(16,185,129,0.08)",
            borderColor: "rgba(16,185,129,0.2)",
            color: "#10B981",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Early Access Open
        </div>
      </nav>

      {/* ── Hero Section ────────────────────────────────── */}
      <section
        className="w-full flex-1 flex items-center relative overflow-hidden"
        style={{ minHeight: "calc(100vh - 72px)" }}
      >
        {/* Ambient bg glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 75% 40%, rgba(16,185,129,0.05) 0%, transparent 55%)",
          }}
        />

        <div className="relative w-full mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12 xl:gap-20">

            {/* ── LEFT: Editorial Copy + Form ──────────── */}
            <div className="flex-1 flex flex-col items-start lg:max-w-[580px] z-10">

              {/* Eyebrow */}
              <div
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mb-8"
                style={{
                  color: "#10B981",
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(14px)",
                  transition: `opacity 0.6s ${EASE.join(",")}, transform 0.6s ${EASE.join(",")}`,
                  transitionDelay: "0.1s",
                }}
              >
                <span className="w-5 h-px" style={{ background: "#10B981" }} />
                Join the Waitlist
              </div>

              {/* Headline */}
              <h1
                className="text-[clamp(2.5rem,5vw,4.25rem)] font-extrabold leading-[1.05] tracking-tight mb-6"
                style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  color: "#F1F5F9",
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(22px)",
                  transition: `opacity 0.78s ${EASE.join(",")}, transform 0.78s ${EASE.join(",")}`,
                  transitionDelay: "0.18s",
                }}
              >
                Careers shouldn&apos;t be<br />
                built on guesswork.
              </h1>

              {/* Subheadline */}
              <p
                className="text-[1.0625rem] md:text-[1.125rem] leading-[1.72] max-w-[440px] mb-10"
                style={{
                  color: "#8892A4",
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(18px)",
                  transition: `opacity 0.72s ${EASE.join(",")}, transform 0.72s ${EASE.join(",")}`,
                  transitionDelay: "0.3s",
                }}
              >
                CoreCV is an AI-powered career intelligence platform. Be among the first to
                get access and help shape how ambitious professionals build their careers.
              </p>

              {/* Waitlist Form Card */}
              <div
                className="w-full max-w-md rounded-2xl p-7 border mb-10"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.07)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 32px 64px rgba(0,0,0,0.4)",
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(14px)",
                  transition: `opacity 0.65s ${EASE.join(",")}, transform 0.65s ${EASE.join(",")}`,
                  transitionDelay: "0.42s",
                }}
              >
                <WaitlistForm />
              </div>

              {/* Social proof */}
              <div
                className="flex items-center gap-4"
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? "translateY(0)" : "translateY(10px)",
                  transition: `opacity 0.6s ${EASE.join(",")}, transform 0.6s ${EASE.join(",")}`,
                  transitionDelay: "0.58s",
                }}
              >
                <span className="flex -space-x-2.5">
                  {AVATARS.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="CoreCV community member"
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
                    already on the waitlist
                  </span>
                </div>
              </div>
            </div>

            {/* ── RIGHT: Hero Video (desktop only) ─────── */}
            <div
              className="hidden lg:flex flex-1 items-center justify-center z-0 overflow-visible"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "scale(1) translateY(0)" : "scale(0.94) translateY(20px)",
                transition: `opacity 1s ${EASE.join(",")}, transform 1s ${EASE.join(",")}`,
                transitionDelay: "0.3s",
              }}
            >
              <ZIndexSeamlessVideo />
            </div>

          </div>
        </div>
      </section>

      {/* ── Feature Teaser ───────────────────────────────── */}
      <section className="w-full max-w-5xl mx-auto px-6 pb-20">
        <p
          className="text-center text-xs font-semibold uppercase tracking-widest mb-10"
          style={{ color: "#334155" }}
        >
          What you&apos;re getting early access to
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: "🧠", title: "AI Career Intelligence", desc: "Understand where you're competitive and what gaps to close." },
            { icon: "🗂️", title: "Master Vault", desc: "One hub for all your experiences, achievements and career artifacts." },
            { icon: "📄", title: "Tailored Applications", desc: "Generate precision-tailored resumes and cover letters in seconds." },
            { icon: "🌐", title: "Personal Storefront", desc: "A public profile that makes recruiters come to you instead." },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-xl p-5 border transition-colors duration-200 hover:border-white/10"
              style={{
                background: "rgba(255,255,255,0.02)",
                borderColor: "rgba(255,255,255,0.05)",
              }}
            >
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="text-sm font-bold mb-2" style={{ color: "#E2E8F0" }}>{f.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#475569" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer
        className="w-full border-t px-6 py-6 flex items-center justify-center"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        <p className="text-xs" style={{ color: "#1E293B" }}>
          © {new Date().getFullYear()} CoreCV. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
