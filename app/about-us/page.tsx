import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import {
  Sparkles,
  Layers,
  FileCheck2,
  ArrowRight,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About CoreCV — Your Career is More Than a Document",
  description:
    "CoreCV is building the Career Intelligence Platform. We help ambitious professionals turn scattered work into a verified Master Vault of career evidence.",
};

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0D1117] text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* ── HERO SECTION ──────────────────────────────────────────────── */}
        <section className="relative px-6 pt-20 pb-16 md:pt-28 md:pb-24 border-b border-slate-800/80 overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full opacity-20 blur-[100px]"
            style={{
              background: "radial-gradient(circle, #10B981 0%, #3B82F6 100%)",
            }}
          />

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-medium text-emerald-400 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The CoreCV Vision</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Your career is more than a{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
                static document.
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-300 leading-relaxed">
              We are building the <strong className="text-white font-semibold">Career Intelligence Platform</strong>—a system that transforms your scattered work history, projects, and achievements into a permanent, verified record of career capability.
            </p>
          </div>
        </section>

        {/* ── THE PROBLEM ──────────────────────────────────────────────── */}
        <section className="px-6 py-20 max-w-5xl mx-auto border-b border-slate-800/80">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5">
              <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
                Why We Built It
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                Hiring is broken. Your ability shouldn't be trapped in a 1-page PDF.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
              <p>
                Every time you apply for a job, you are forced to start from zero. Your real accomplishments are scattered across obsolete CV files, GitHub repos, LinkedIn updates, internal docs, and forgotten performance reviews.
              </p>
              <p>
                To apply, you compress years of hard-won experience into a 1-page flat document, tweaking Word margins and guessing keywords to appease automated filters. The result? A 75%+ ghosting rate and exhaustion for qualified candidates.
              </p>
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-200 text-base">
                <strong className="text-emerald-400 block mb-1">Our Core Belief:</strong>
                Getting hired shouldn't be harder than doing the actual work. You deserve a professional memory layer that works for you.
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT WE'RE BUILDING ───────────────────────────────────────── */}
        <section className="px-6 py-20 max-w-6xl mx-auto border-b border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
              The Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              What we're building
            </h2>
            <p className="text-slate-400 mt-3 text-base">
              CoreCV eliminates career guesswork by giving you three unified engines.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl border border-slate-800/90 bg-[#121720]/80 flex flex-col justify-between hover:border-slate-700 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">The Master Vault</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  A persistent professional memory layer. Write and document your projects, metrics, STAR stories, and certificates once—own your verified evidence forever.
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero hallucination guarantee</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Structure any industry experience</span>
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl border border-slate-800/90 bg-[#121720]/80 flex flex-col justify-between hover:border-slate-700 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Career Intelligence</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Real-time role-fit diagnostics and deep company research. See exactly how your skills map to a job description before spending hours applying.
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Objective 0–100 fit scoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Triage risky applications</span>
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl border border-slate-800/90 bg-[#121720]/80 flex flex-col justify-between hover:border-slate-700 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-6">
                  <FileCheck2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Application Studio</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Generate tailored, ATS-compliant resumes and structured interview prep kits pulled directly from your Master Vault evidence—without buzzword slop.
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Clean ATS-proof PDF & Word</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Evidence-backed interview answers</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── WHO IT'S FOR (UNIVERSAL SCOPE) ─────────────────────────────── */}
        <section className="px-6 py-20 max-w-5xl mx-auto border-b border-slate-800/80">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
              Universal Inclusivity
            </span>
            <h2 className="text-3xl font-bold text-white mt-2">
              Built for every career, in every industry.
            </h2>
            <p className="text-slate-400 mt-2">
              CoreCV is not just for tech. It is built for anyone whose career deserves credibility and visibility.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40">
              <h4 className="font-semibold text-white mb-1">Tech & Engineering</h4>
              <p className="text-xs text-slate-400">Software engineers, QA, mechanical & automotive engineers, cloud architects.</p>
            </div>
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40">
              <h4 className="font-semibold text-white mb-1">Product & Design</h4>
              <p className="text-xs text-slate-400">UI/UX designers, product managers, user researchers, brand leads.</p>
            </div>
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40">
              <h4 className="font-semibold text-white mb-1">Business & Finance</h4>
              <p className="text-xs text-slate-400">Financial analysts, accountants, project managers, operations leads.</p>
            </div>
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40">
              <h4 className="font-semibold text-white mb-1">Healthcare & Science</h4>
              <p className="text-xs text-slate-400">Medical practitioners, researchers, lab coordinators, pharmacists.</p>
            </div>
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40">
              <h4 className="font-semibold text-white mb-1">Marketing & Sales</h4>
              <p className="text-xs text-slate-400">Growth marketers, account executives, content strategists, copywriters.</p>
            </div>
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40">
              <h4 className="font-semibold text-white mb-1">Students & Switchers</h4>
              <p className="text-xs text-slate-400">Recent graduates, interns, and professionals transitioning to new industries.</p>
            </div>
          </div>
        </section>

        {/* ── WHERE WE ARE NOW (WAITLIST) ────────────────────────────────── */}
        <section className="px-6 py-20 max-w-4xl mx-auto text-center">
          <div className="p-10 rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-emerald-950/20 to-[#121720]/80">
            <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
              Current Status
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
              We are currently in active private rollout.
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto text-base sm:text-lg mb-8 leading-relaxed">
              We are admitting early cohorts of <strong className="text-white">Founding Users</strong> to test the Master Vault, provide direct feedback, and secure lifetime early-adopter benefits.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/join"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold text-white transition-all hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #10B981, #059669)",
                  boxShadow: "0 4px 18px rgba(16,185,129,0.35)",
                }}
              >
                <span>Become a Founding User</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full text-base font-medium text-slate-300 hover:text-white border border-slate-700 hover:border-slate-600 transition-colors"
              >
                Contact the Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
