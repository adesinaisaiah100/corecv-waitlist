"use client";

import { useState, useEffect } from "react";

const CAREER_OPTIONS = [
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Full-Stack Developer",
  "Product Manager",
  "UX / Product Designer",
  "Data Scientist / Analyst",
  "DevOps / Platform Engineer",
  "Marketing Professional",
  "HR / Talent Recruiter",
  "Founder / Entrepreneur",
  "Student / Recent Graduate",
  "Other",
];

type FormState = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [careerPosition, setCareerPosition] = useState("");
  const [otherPosition, setOtherPosition] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [rank, setRank] = useState(1);
  const [copied, setCopied] = useState(false);

  const isOther = careerPosition === "Other";
  const finalPosition = isOther ? otherPosition : careerPosition;
  
  // Calculate mock scarcity for visual effect
  // Real world: fetch this from API. For now, assume 412/500 are taken.
  const claimedSpots = 412;
  const totalSpots = 500;
  const scarcityPercent = Math.round((claimedSpots / totalSpots) * 100);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !finalPosition) return;

    setFormState("loading");

    // Grab referral code from URL safely on the client
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get("ref");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          career_position: finalPosition,
          ref, // Pass the ref code to the backend
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setFormState("success");
        setMessage(data.message);
        setReferralCode(data.referral_code);
        setRank(data.rank);
      } else {
        setFormState("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setFormState("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://early.corecv.app/?ref=${referralCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (formState === "success") {
    return (
      <div className="w-full flex flex-col items-center text-center animate-in fade-in zoom-in duration-500 py-4">
        
        {/* Animated Check */}
        <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Hero Typography */}
        <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
          You're in, {name.split(' ')[0]}.
        </h3>
        
        {/* Gamified Rank Display */}
        <div className="flex flex-col items-center justify-center gap-1 mb-8 mt-2">
          <p className="text-xs font-bold text-slate-500 tracking-widest uppercase">Your Position</p>
          <div className="text-5xl md:text-6xl font-mono font-black text-white tracking-tighter" style={{ textShadow: "0 4px 24px rgba(255,255,255,0.15)" }}>
            #{rank.toLocaleString()}
          </div>
          <div className="flex items-center gap-2 mt-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
            <p className="text-xs font-semibold tracking-widest uppercase text-emerald-400">Early Access Confirmed</p>
          </div>
        </div>

        {/* The Hack / Gamification */}
        <div className="w-full max-w-sm flex flex-col items-center">
          <p className="text-sm text-slate-300 mb-6 leading-relaxed">
            Want to secure your spot and unlock the 30-Day Career Sprint? Invite 3 professionals using your unique link.
          </p>

          {/* Clean Input & Copy */}
          <div className="w-full flex items-center bg-[#000000] border border-white/10 rounded-xl p-1.5 pl-4 mb-6 transition-all hover:border-white/20 focus-within:border-white/30 focus-within:ring-1 focus-within:ring-white/10">
            <input 
              readOnly
              value={`early.corecv.app/?ref=${referralCode}`}
              className="bg-transparent border-none outline-none text-slate-300 text-sm flex-1 w-full truncate select-all"
            />
            <button 
              onClick={handleCopy}
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all ml-2"
            >
              {copied ? "COPIED" : "COPY"}
            </button>
          </div>

          {/* Socials (Monochrome Minimalist) */}
          <div className="flex gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Just secured my spot as a CoreCV Founding Member! The ultimate AI career intelligence platform. Join me:")}&url=${encodeURIComponent(`https://early.corecv.app/?ref=${referralCode}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2"
              title="Share on X"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://early.corecv.app/?ref=${referralCode}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2"
              title="Share on LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
      {/* Full Name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Isaiah Adesina"
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 text-sm outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 transition-all"
          disabled={formState === "loading"}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 text-sm outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 transition-all"
          disabled={formState === "loading"}
        />
      </div>

      {/* Career Position Dropdown */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="career" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Career / Profession
        </label>
        <div className="relative">
          <select
            id="career"
            required
            value={careerPosition}
            onChange={(e) => setCareerPosition(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 transition-all appearance-none cursor-pointer disabled:opacity-50"
            style={{ color: careerPosition ? "white" : "#475569" }}
            disabled={formState === "loading"}
          >
            <option value="" disabled style={{ color: "#475569", background: "#0D1117" }}>
              Select your profession...
            </option>
            {CAREER_OPTIONS.map((opt) => (
              <option key={opt} value={opt} style={{ background: "#0D1117", color: "white" }}>
                {opt}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* "Other" text input */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOther ? "80px" : "0px", opacity: isOther ? 1 : 0 }}
      >
        <div className="flex flex-col gap-1.5">
          <label htmlFor="other-position" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Tell us your profession
          </label>
          <input
            id="other-position"
            type="text"
            required={isOther}
            value={otherPosition}
            onChange={(e) => setOtherPosition(e.target.value)}
            placeholder="e.g. Cybersecurity Analyst"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 text-sm outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 transition-all"
            disabled={formState === "loading"}
          />
        </div>
      </div>

      {formState === "error" && (
        <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 px-4 py-3 rounded-xl">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={formState === "loading" || !name || !email || !finalPosition}
        className="w-full mt-1 py-3.5 px-6 rounded-xl font-semibold text-sm text-white transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 active:scale-95"
        style={{
          background: "linear-gradient(135deg, #10B981, #059669)",
          boxShadow: "0 4px 24px rgba(16, 185, 129, 0.3)",
        }}
      >
        {formState === "loading" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Joining...
          </>
        ) : (
          <>
            Become a Founding Member
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>

      <p className="text-center text-xs text-slate-600 mt-1">
        No spam. No credit card. Just early access.
      </p>
    </form>
  );
}
