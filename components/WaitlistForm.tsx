"use client";

import { useState } from "react";

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

  const isOther = careerPosition === "Other";
  const finalPosition = isOther ? otherPosition : careerPosition;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !finalPosition) return;

    setFormState("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          career_position: finalPosition,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setFormState("success");
        setMessage(data.message);
      } else {
        setFormState("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setFormState("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  };

  if (formState === "success") {
    return (
      <div className="w-full text-center py-10 px-6 flex flex-col items-center gap-4">
        {/* Success checkmark */}
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-2">
          <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white">You&apos;re on the list!</h3>
        <p className="text-slate-400 max-w-xs text-sm leading-relaxed">
          {message} Check your inbox for a confirmation email from us.
        </p>
        <p className="text-xs text-slate-600 mt-2">
          While you wait, spread the word 🚀
        </p>
        <div className="flex gap-3 mt-2">
          <a
            href={`https://twitter.com/intent/tweet?text=Just%20joined%20the%20CoreCV%20waitlist!%20The%20AI-powered%20career%20intelligence%20platform%20for%20professionals.%20%F0%9F%9A%80%20https://corecv.app`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
          >
            Share on X
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=https://corecv.app`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
          >
            Share on LinkedIn
          </a>
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
          {/* Chevron icon */}
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* "Other" text input — Tally-style reveal */}
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

      {/* Error message */}
      {formState === "error" && (
        <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 px-4 py-3 rounded-xl">
          {message}
        </p>
      )}

      {/* Submit button */}
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
            Join the Waitlist
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
