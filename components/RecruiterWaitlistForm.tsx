"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Building2, User, Mail, Briefcase, Phone, Search } from "lucide-react";

const RECRUITER_ROLE_OPTIONS = [
  "Founder / CEO",
  "CTO",
  "HR",
  "Recruiter / Talent Acquisition",
  "Engineering Manager / Tech Lead",
  "Hiring Manager",
  "Agency Recruiter",
  "Other",
];

type FormState = "idle" | "loading" | "success" | "error";

export default function RecruiterWaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [otherRole, setOtherRole] = useState("");
  const [hiringNeeds, setHiringNeeds] = useState("");
  const [phone, setPhone] = useState("");
  const [subscribeUpdates, setSubscribeUpdates] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [formState, setFormState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  const isOther = role === "Other";
  const finalRole = isOther ? otherRole.trim() : role;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !companyName || !finalRole || !hiringNeeds || !agreeTerms) {
      setMessage("Please complete all required fields and accept the Terms of Service.");
      setFormState("error");
      return;
    }

    setFormState("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          company_name: companyName.trim(),
          company_role: finalRole,
          hiring_needs: hiringNeeds.trim(),
          phone: phone.trim() || undefined,
          role_type: "recruiter",
          subscribed_to_updates: subscribeUpdates,
          agree_terms: agreeTerms,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setFormState("success");
        setMessage(data.message || "Your recruiter access request has been received.");
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
      <div className="w-full flex flex-col gap-6 animate-in fade-in zoom-in-95 duration-500 text-left">
        <div className="w-full relative rounded-2xl overflow-hidden border border-emerald-500/30 bg-emerald-500/[0.03] p-7 md:p-8 flex flex-col items-start">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5">
            <CheckCircle2 className="w-6 h-6" />
          </div>

          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-2">
            Priority Partner Request Confirmed
          </span>

          <h3
            className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-3"
            style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
          >
            Welcome to the Founding Recruiter Network
          </h3>

          <p className="text-sm md:text-base text-slate-300 leading-relaxed mb-6">
            We’ve registered <span className="font-semibold text-white">{companyName}</span> for early access to CoreCV’s verified candidate evidence pool.
          </p>

          <div className="w-full rounded-xl bg-black/40 border border-white/5 p-4 mb-6 flex flex-col gap-2.5 text-xs text-slate-300">
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Registered Lead:</span>
              <span className="font-semibold text-white">{name} ({finalRole})</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Work Email:</span>
              <span className="font-semibold text-white">{email}</span>
            </div>
            {phone && (
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Direct Contact:</span>
                <span className="font-semibold text-emerald-400">{phone}</span>
              </div>
            )}
            <div className="flex items-center justify-between">
              <span className="text-slate-500">Target Roles:</span>
              <span className="font-semibold text-white truncate max-w-[200px]">{hiringNeeds}</span>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Our founding team will reach out directly to coordinate your 1-on-1 walkthrough and tailor initial candidate evidence filters for your open roles.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 text-left">
      {/* Full Name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="recruiter-name" className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
          <User className="w-3.5 h-3.5 text-slate-500" />
          Full Name
        </label>
        <input
          id="recruiter-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 text-sm outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 transition-all"
          disabled={formState === "loading"}
        />
      </div>

      {/* Work Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="recruiter-email" className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
          <Mail className="w-3.5 h-3.5 text-slate-500" />
          Work Email
        </label>
        <input
          id="recruiter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jane@company.com"
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 text-sm outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 transition-all"
          disabled={formState === "loading"}
        />
      </div>

      {/* Company Name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="company-name" className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
          <Building2 className="w-3.5 h-3.5 text-slate-500" />
          Company / Organisation Name
        </label>
        <input
          id="company-name"
          type="text"
          required
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Acme Technologies"
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 text-sm outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 transition-all"
          disabled={formState === "loading"}
        />
      </div>

      {/* Role Dropdown */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="company-role" className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
          <Briefcase className="w-3.5 h-3.5 text-slate-500" />
          Your Role
        </label>
        <div className="relative">
          <select
            id="company-role"
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 transition-all appearance-none cursor-pointer disabled:opacity-50"
            style={{ color: role ? "white" : "#64748B" }}
            disabled={formState === "loading"}
          >
            <option value="" disabled style={{ color: "#64748B", background: "#0D1117" }}>
              Select your role...
            </option>
            {RECRUITER_ROLE_OPTIONS.map((opt) => (
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

      {/* "Other" Role text input */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOther ? "85px" : "0px", opacity: isOther ? 1 : 0 }}
      >
        <div className="flex flex-col gap-1.5 pt-1">
          <label htmlFor="other-role" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Tell us your role
          </label>
          <input
            id="other-role"
            type="text"
            required={isOther}
            value={otherRole}
            onChange={(e) => setOtherRole(e.target.value)}
            placeholder="e.g. VP of People, Co-Founder"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 text-sm outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 transition-all"
            disabled={formState === "loading"}
          />
        </div>
      </div>

      {/* What roles are you looking to hire? */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="hiring-needs" className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
          <Search className="w-3.5 h-3.5 text-slate-500" />
          What roles are you looking to hire?
        </label>
        <input
          id="hiring-needs"
          type="text"
          required
          value={hiringNeeds}
          onChange={(e) => setHiringNeeds(e.target.value)}
          placeholder="e.g. Senior Backend Engineers, Product Designers"
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 text-sm outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 transition-all"
          disabled={formState === "loading"}
        />
      </div>

      {/* Phone (Optional - WhatsApp Preferred) */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <label htmlFor="recruiter-phone" className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-slate-500" />
            Phone
          </label>
          <span className="text-[11px] text-slate-500 font-normal">
            (optional - whatsapp preferred)
          </span>
        </div>
        <input
          id="recruiter-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+234 800 000 0000"
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 text-sm outline-none focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20 transition-all"
          disabled={formState === "loading"}
        />
      </div>

      {/* Checkbox 1: Product & Talent Updates */}
      <label className="flex items-start gap-3 cursor-pointer pt-2 group">
        <input
          type="checkbox"
          checked={subscribeUpdates}
          onChange={(e) => setSubscribeUpdates(e.target.checked)}
          className="mt-0.5 w-4 h-4 rounded border-slate-700 bg-white/5 text-emerald-500 focus:ring-emerald-500/30 accent-emerald-500 cursor-pointer"
        />
        <span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
          Keep me updated on platform releases, product insights, and newly verified talent.
        </span>
      </label>

      {/* Checkbox 2: Terms & Privacy Agreement */}
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          type="checkbox"
          required
          checked={agreeTerms}
          onChange={(e) => setAgreeTerms(e.target.checked)}
          className="mt-0.5 w-4 h-4 rounded border-slate-700 bg-white/5 text-emerald-500 focus:ring-emerald-500/30 accent-emerald-500 cursor-pointer"
        />
        <span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
          I agree to CoreCV&apos;s{" "}
          <Link href="/terms" target="_blank" className="text-emerald-400 hover:text-emerald-300 underline font-medium">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" target="_blank" className="text-emerald-400 hover:text-emerald-300 underline font-medium">
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      {formState === "error" && (
        <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 px-4 py-3 rounded-xl mt-1">
          {message}
        </p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={formState === "loading" || !name || !email || !companyName || !finalRole || !hiringNeeds || !agreeTerms}
        className="w-full mt-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-white transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 active:scale-95"
        style={{
          background: "#10B981",
          boxShadow: "0 4px 20px rgba(16, 185, 129, 0.3)",
        }}
      >
        {formState === "loading" ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Submitting Request...
          </>
        ) : (
          <>
            Request Recruiter Access &rarr;
          </>
        )}
      </button>

      <p className="text-center text-xs text-slate-500 mt-0.5">
        Priority vetting • Direct candidate evidence access • No upfront fee
      </p>
    </form>
  );
}
