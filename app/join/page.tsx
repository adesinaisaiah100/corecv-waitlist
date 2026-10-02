"use client";

import React, { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import WaitlistForm from "@/components/WaitlistForm";
import RecruiterWaitlistForm from "@/components/RecruiterWaitlistForm";
import { User, Building2 } from "lucide-react";

function JoinContent() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") || searchParams.get("role") || "candidate";
  const [activeTab, setActiveTab] = useState<"candidate" | "recruiter">(
    initialType === "recruiter" || initialType === "hiring" ? "recruiter" : "candidate"
  );

  useEffect(() => {
    const typeParam = searchParams.get("type") || searchParams.get("role");
    if (typeParam === "recruiter" || typeParam === "hiring") {
      setActiveTab("recruiter");
    } else if (typeParam === "candidate") {
      setActiveTab("candidate");
    }
  }, [searchParams]);

  return (
    <div className="w-full max-w-xl flex flex-col items-center">
      {/* Main Headline */}
      <h1
        className="text-3xl md:text-5xl font-extrabold mb-4 text-center tracking-tight text-white leading-tight"
        style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
      >
        {activeTab === "candidate" ? "Apply for Early Access" : "Access Verified Talent"}
      </h1>

      {/* Subtitle */}
      <p className="text-slate-400 text-center mb-8 max-w-md text-base md:text-lg leading-relaxed">
        {activeTab === "candidate"
          ? "Join the waitlist to become a Founding User and unlock the 30-Day Career Sprint package."
          : "Register your hiring team for early access to search candidates by proven work, architecture, and measurable outcomes."}
      </p>

      {/* ── 2-Segment Switcher ────────────────────────────────────── */}
      <div className="w-full max-w-md p-1 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center mb-8">
        <button
          type="button"
          onClick={() => setActiveTab("candidate")}
          className={`flex-1 py-2.5 px-4 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
            activeTab === "candidate"
              ? "bg-[#10B981] text-white shadow-sm"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <User className="w-4 h-4" />
          I&apos;m a Candidate
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("recruiter")}
          className={`flex-1 py-2.5 px-4 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
            activeTab === "recruiter"
              ? "bg-[#10B981] text-white shadow-sm"
              : "text-slate-400 hover:text-white"
          }`}
        >
          <Building2 className="w-4 h-4" />
          I&apos;m Hiring / Recruiter
        </button>
      </div>

      {/* ── Form Card ────────────────────────────────────────────── */}
      <div
        className="w-full rounded-2xl p-6 sm:p-8 border relative overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.025)",
          borderColor: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(16px)",
          boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
        }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none" />

        {activeTab === "candidate" ? (
          <WaitlistForm />
        ) : (
          <RecruiterWaitlistForm />
        )}
      </div>
    </div>
  );
}

export default function JoinPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0D1117] text-white">
      <Navbar />

      <main className="flex-1 w-full flex flex-col items-center justify-center py-14 px-4 bg-[#0D1117]">
        <Suspense
          fallback={
            <div className="w-full max-w-xl py-20 flex flex-col items-center justify-center text-slate-500">
              <div className="w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-sm">Loading early access portal...</p>
            </div>
          }
        >
          <JoinContent />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
