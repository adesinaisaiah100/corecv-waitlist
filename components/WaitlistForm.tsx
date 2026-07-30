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
      <div className="w-full flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-500">
        
        {/* VIP Pass Graphic */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl group" style={{ background: "linear-gradient(145deg, #1A2235, #0D1117)" }}>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full ease-out" />
          
          <div className="p-4 md:p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Status: Verified</span>
            </div>
            <div className="text-xs font-mono text-slate-500">EARLY ACCESS</div>
          </div>
          
          <div className="p-6 md:p-8 flex flex-col text-left gap-4 relative">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-2">🎉 You're on the Waitlist, {name.split(' ')[0]}!</h3>
              <p className="text-sm text-slate-400">
                We just sent a confirmation to <span className="text-white">{email}</span>
              </p>
            </div>

            <div className="w-full h-px bg-white/10 my-2" />

            <div className="flex flex-col gap-2">
              <p className="text-xs font-bold text-slate-500 tracking-widest uppercase">📍 Your Position:</p>
              <p className="text-3xl font-mono font-bold text-white">#{rank.toLocaleString()}</p>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <div className="flex justify-between items-end">
                <p className="text-xs font-bold text-slate-500 tracking-widest uppercase">💎 Founding Member Spots:</p>
                <p className="text-xs font-bold text-emerald-400">[{claimedSpots} / {totalSpots} Claimed]</p>
              </div>
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: \`\${scarcityPercent}%\` }} />
              </div>
            </div>
          </div>
        </div>

        {/* Gamified Reward Section */}
        <div className="w-full bg-[#0D1117] border border-emerald-500/30 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full" />
          
          <h4 className="text-lg font-bold text-white mb-2">🚀 Guarantee Your Spot & Unlock the Career Sprint</h4>
          <p className="text-sm text-slate-400 mb-4">
            Skip the line and unlock Founding Member status instantly by inviting 3 friends.
          </p>

          <div className="bg-white/5 rounded-xl p-4 mb-5 border border-white/10">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Your Rewards:</p>
            <ul className="text-sm text-slate-300 space-y-2">
              <li className="flex gap-2">✅ <span className="text-white font-medium">30 Days of CoreCV Pro (Free)</span> — Land a job on us.</li>
              <li className="flex gap-2">✅ <span className="text-white font-medium">The Insider ATS Playbook</span> (PDF)</li>
              <li className="flex gap-2">✅ <span className="text-white font-medium">Priority access</span> to unreleased AI tools</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Your Invite Link:</p>
            <div className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-xl p-1.5 pl-4">
              <code className="text-emerald-400 text-sm flex-1 truncate">early.corecv.app/?ref={referralCode}</code>
              <button 
                onClick={handleCopy}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all"
              >
                {copied ? "COPIED!" : "COPY"}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-widest">
              <span>Referrals:</span>
              <span>0 / 3</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full w-0" />
            </div>
          </div>

          <div className="flex gap-3 w-full justify-center mt-6">
            <a
              href={`https://twitter.com/intent/tweet?text=Just%20secured%20my%20spot%20as%20a%20CoreCV%20Founding%20Member!%20%F0%9F%9A%80%20The%20ultimate%20AI%20career%20intelligence%20platform.%20Join%20me%3A%20https://early.corecv.app/?ref=${referralCode}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-[#000000] border border-white/10 hover:border-white/30 hover:bg-[#111111] transition-all"
            >
              Share on X
            </a>
            
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https://early.corecv.app/?ref=${referralCode}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-[#0A66C2] border border-transparent hover:brightness-110 transition-all"
            >
              LinkedIn
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
