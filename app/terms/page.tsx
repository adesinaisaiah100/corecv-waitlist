import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import {
  Scale,
  FileText,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  Briefcase,
  UserCheck,
  Building2,
  ShieldAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service — CoreCV",
  description:
    "Review the terms and conditions governing candidate Master Vaults, recruiter capability discovery, and early access programs on CoreCV.",
};

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0D1117] text-slate-100 font-sans selection:bg-[#10B981] selection:text-white">
      <Navbar />

      <main className="flex-1 px-6 py-16 md:py-24 max-w-4xl mx-auto w-full">
        {/* ── HEADER ────────────────────────────────────────────────────── */}
        <div className="border-b border-slate-800 pb-10 mb-12 text-left">
          <div className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-5">
            <Scale className="w-4 h-4 text-emerald-400" />
            <span>Platform Agreement &amp; Operating Standards</span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3"
            style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
          >
            Terms of Service
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Effective Date: October 2026 &bull; Governing Jurisdiction: Federal Republic of Nigeria &bull; Version 2.1
          </p>
        </div>

        {/* ── AT A GLANCE (KEY RULES) ───────────────────────────────────── */}
        <div className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-[#121720] mb-12">
          <h3
            className="text-lg font-bold text-white mb-5 flex items-center gap-2.5"
            style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
          >
            <FileText className="w-5 h-5 text-emerald-400" />
            <span>Core Agreement Highlights</span>
          </h3>

          <div className="grid sm:grid-cols-2 gap-5 text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">You own 100% of your content:</strong> All resumes, work history, code repos, designs, and STAR stories remain your exclusive intellectual property.
              </span>
            </div>

            <div className="flex items-start gap-3">
              <ShieldAlert className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">Authenticity of Evidence:</strong> Candidates certify that all project repos, metrics, and role claims represent authentic personal or team contributions.
              </span>
            </div>

            <div className="flex items-start gap-3">
              <Building2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">Strict Recruiter Anti-Scraping:</strong> Recruiters may use candidate records solely for bona fide hiring; scraping, re-selling, or republishing talent data is strictly prohibited.
              </span>
            </div>

            <div className="flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">AI is advisory:</strong> CoreCV provides intelligence and structuring tools, but you are responsible for reviewing and verifying the accuracy of submitted applications.
              </span>
            </div>
          </div>
        </div>

        {/* ── FULL LEGAL SECTIONS ───────────────────────────────────────── */}
        <div className="space-y-12 text-slate-300 leading-relaxed text-sm sm:text-base text-left">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-white"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, registering for an account, submitting an early access request, or utilizing the services provided by **CoreCV Technologies** (&quot;CoreCV&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you agree to be legally bound by these Terms of Service. If you do not agree to these terms, you must discontinue your use of the platform immediately.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              2. User Classes &amp; Account Eligibility
            </h2>
            <p>
              CoreCV operates a two-sided platform supporting two distinct account categories:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <UserCheck className="w-4 h-4" />
                  <span>Candidate Accounts</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Individual professionals who construct a Master Vault, compile verified work evidence, tailor job applications, and opt in to recruiter capability discovery.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <Building2 className="w-4 h-4" />
                  <span>Recruiter &amp; Hiring Partner Accounts</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Companies, founders, talent acquisition professionals, and hiring managers authorized to search, review, and evaluate candidates based on demonstrated proof of work.
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              You must be at least 16 years of age (or the legal age of majority in your jurisdiction) and possess the authority to enter into this binding agreement.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-white"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              3. Candidate Content &amp; Intellectual Property Ownership
            </h2>
            <p>
              <strong className="text-white">Your Work Belongs to You:</strong> Candidates retain 100% full, unrestricted ownership of all text, documents, code repositories, STAR stories, portfolio assets, and career records uploaded or linked to CoreCV (&quot;User Content&quot;).
            </p>
            <p>
              <strong className="text-white">Limited Operational License:</strong> By submitting User Content to the Master Vault, you grant CoreCV a limited, non-exclusive, worldwide, royalty-free license solely to host, store, parse, index, and display your data to provide platform functionality (such as resume generation, role-fit scoring, and recruiter capability matching).
            </p>
            <p>
              <strong className="text-emerald-400 font-medium">
                We do NOT sell candidate content to third parties, and we do NOT use your private records to train public AI foundation models.
              </strong>
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              <ShieldAlert className="w-5 h-5 text-emerald-400" />
              <span>4. Candidate Authenticity &amp; Evidence Warranty</span>
            </h2>
            <p>
              The foundational premise of CoreCV is trust through verified capability. As a candidate, you warrant that:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
              <li>
                All work experience, accomplishments, and metrics documented in your Master Vault represent truthful, authentic professional contributions.
              </li>
              <li>
                All code repositories, design prototypes, live deployments, and publications submitted as evidence are genuine work that you authored or contributed to with proper attribution.
              </li>
              <li>
                You will not upload plagiarized repositories, falsified degrees, or fraudulent employment claims. Violation of this warranty results in immediate account revocation.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              <Building2 className="w-5 h-5 text-emerald-400" />
              <span>5. Recruiter &amp; Employer Obligations (Anti-Scraping &amp; Permitted Use)</span>
            </h2>
            <p>
              Recruiters and hiring organizations accessing candidate evidence agree to the following enforceable terms:
            </p>
            <div className="p-5 rounded-xl border border-slate-800 bg-[#121720] space-y-3">
              <ul className="list-disc list-inside space-y-2 pl-1 text-slate-300 text-xs sm:text-sm">
                <li>
                  <strong className="text-white">Bona Fide Hiring Purpose:</strong> Candidate evidence and contact coordinates may only be accessed for evaluating real, currently open employment or contracting roles.
                </li>
                <li>
                  <strong className="text-white">Strict Anti-Scraping Prohibition:</strong> Recruiters are expressly prohibited from using automated scripts, scrapers, crawlers, or AI extraction tools to harvest candidate profiles or evidence archives from CoreCV.
                </li>
                <li>
                  <strong className="text-white">Zero Resale or Syndication:</strong> Candidate records may not be resold, leased, republished, or syndicated to external job boards, talent marketplaces, or recruitment databases.
                </li>
                <li>
                  <strong className="text-white">Contact Protocol:</strong> Recruiters agree to reach out respectfully and directly regarding specific role matches without unsolicited bulk marketing spam.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              <AlertCircle className="w-5 h-5 text-amber-400" />
              <span>6. AI Assistance &amp; Accuracy Disclaimer</span>
            </h2>
            <p>
              CoreCV integrates generative AI to assist users with structuring STAR stories, tailoring resume copy, and highlighting role fit. 
            </p>
            <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-950/20 text-slate-200 text-sm">
              <p>
                <strong className="text-amber-400">Human-in-the-Loop Requirement:</strong> AI recommendations and generated drafts are advisory. You are solely responsible for reviewing, verifying, and approving any application, resume, or statement before delivering it to a prospective employer. CoreCV is not liable for errors, omissions, or algorithmic phrasing interpretations.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-white"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              7. Opportunities &amp; No Guarantee of Employment
            </h2>
            <p>
              CoreCV is a career intelligence software platform and evidence discovery infrastructure. CoreCV does not operate as an employment agency, headhunting brokerage, or employer. We make no warranty or guarantee that using CoreCV will result in job interviews, job offers, or salary increments.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-white"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              8. Early Access &amp; Waitlist Terms
            </h2>
            <p>
              Participation in the CoreCV Founding User or Recruiter Early Access waitlist is granted on a priority basis. We reserve the right to prioritize admissions, adjust beta quotas, or modify prospective features at our sole discretion. No upfront payment is required to join the waitlist.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-white"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              9. Governing Law &amp; Dispute Resolution
            </h2>
            <p>
              These Terms shall be governed by, and construed in accordance with, the laws of the **Federal Republic of Nigeria**. Any dispute, claim, or controversy arising out of or in connection with these Terms shall be settled amicably or resolved through the competent courts of Nigeria.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-white"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              10. Legal Contact Information
            </h2>
            <p>
              For legal inquiries, contractual notices, or terms clarification:
            </p>
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 text-sm">
              <p className="text-white font-semibold">CoreCV Legal &amp; Compliance Team</p>
              <p className="text-slate-400 mt-1">CoreCV Technologies, Ibadan, Oyo State, Nigeria</p>
              <p className="text-emerald-400 mt-1">
                Direct Email: <a href="mailto:legal@corecv.app" className="underline">legal@corecv.app</a> / <a href="mailto:hello@corecv.app" className="underline">hello@corecv.app</a>
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
