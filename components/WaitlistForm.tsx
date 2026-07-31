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
      <div className="w-full flex flex-col gap-6 animate-in fade-in zoom-in duration-500">
        
        {/* TOP CARD: The Ticket / Rank */}
        <div className="w-full relative rounded-2xl overflow-hidden border border-white/10 bg-black/20 p-6 md:p-8 flex flex-col items-center text-center">
           <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-500" />
           <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 mt-2">Your Waitlist Position</p>
           <div className="text-6xl md:text-7xl font-mono font-black text-white tracking-tighter mb-6" style={{ textShadow: "0 4px 24px rgba(255,255,255,0.15)" }}>
             #{rank.toLocaleString()}
           </div>
           
           <div className="flex flex-col w-full max-w-xs gap-2">
             <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
               <span>Spots Claimed</span>
               <span className="text-emerald-400">[{claimedSpots} / {totalSpots}]</span>
             </div>
             <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
               <div className="h-full bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" style={{ width: `${scarcityPercent}%` }} />
             </div>
           </div>
        </div>

        {/* BOTTOM CARD: The Gamification / Referrals */}
        <div className="w-full rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.02] p-6 md:p-8 flex flex-col text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />
          
          <h4 className="text-xl font-extrabold text-white mb-2">🚀 Skip the line</h4>
          <p className="text-sm text-slate-400 mb-6">
            Invite 3 professionals to unlock Founding Member status instantly.
          </p>

          <div className="flex flex-col gap-4 mb-8 bg-black/20 p-5 rounded-xl border border-white/5">
             <div className="flex items-center gap-4">
               <div className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold border border-emerald-500/30">1</div>
               <p className="text-sm font-medium text-slate-300">Get 30 Days of CoreCV Pro (Free)</p>
             </div>
             <div className="flex items-center gap-4">
               <div className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold border border-emerald-500/30">2</div>
               <p className="text-sm font-medium text-slate-300">The Insider ATS Playbook (PDF)</p>
             </div>
             <div className="flex items-center gap-4">
               <div className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold border border-emerald-500/30">3</div>
               <p className="text-sm font-medium text-slate-300">Priority access to unreleased AI</p>
             </div>
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Your Invite Link</p>
            <div className="flex items-center bg-[#000000] border border-white/10 rounded-xl p-1.5 pl-4 transition-all focus-within:border-white/30">
              <input 
                readOnly
                value={`early.corecv.app/?ref=${referralCode}`}
                className="bg-transparent border-none outline-none text-slate-300 text-sm flex-1 w-full truncate select-all"
              />
              <button 
                onClick={handleCopy}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-lg text-xs font-bold transition-all ml-2"
              >
                {copied ? "COPIED" : "COPY"}
              </button>
            </div>
          </div>

          {/* Progress to reward */}
          <div className="flex flex-col gap-2 mb-8">
            <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-widest">
              <span>Referrals</span>
              <span className="text-emerald-400">0 / 3</span>
            </div>
            <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full w-0" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Just secured my spot as a CoreCV Founding Member! The ultimate AI career intelligence platform. Join me:")}&url=${encodeURIComponent(`https://early.corecv.app/?ref=${referralCode}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#111111] border border-white/10 hover:border-white/30 transition-all"
            >
              Share on X
            </a>
            
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://early.corecv.app/?ref=${referralCode}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0A66C2] border border-transparent hover:brightness-110 transition-all"
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
