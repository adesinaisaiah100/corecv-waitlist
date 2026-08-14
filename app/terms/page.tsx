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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service — CoreCV",
  description:
    "Review the terms and conditions governing the use of CoreCV's Career Intelligence Platform, Master Vault, and waitlist services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0D1117] text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      <Navbar />

      <main className="flex-1 px-6 py-16 md:py-24 max-w-4xl mx-auto w-full">
        {/* ── HEADER ────────────────────────────────────────────────────── */}
        <div className="border-b border-slate-800/80 pb-10 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-medium text-emerald-400 mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>Platform Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            Terms of Service
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Effective Date: August 2026 &bull; Governing Jurisdiction: Federal Republic of Nigeria
          </p>
        </div>

        {/* ── AT A GLANCE (KEY RULES) ───────────────────────────────────── */}
        <div className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-[#121720] mb-12">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-400" />
            <span>Core Agreement Highlights</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-300">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>You own your content:</strong> All resumes, work history, STAR stories, and portfolio assets remain your exclusive intellectual property.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>AI is advisory:</strong> CoreCV provides intelligence and drafting tools, but you are responsible for reviewing and verifying the accuracy of submitted applications.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <Briefcase className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>
                <strong>No hiring guarantee:</strong> CoreCV is a career intelligence platform, not an employer or recruiter. We do not guarantee job offers or interviews.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <HelpCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <span>
                <strong>Fair usage:</strong> You agree not to reverse engineer algorithms, scrape user data, or submit fraudulent work credentials.
              </span>
            </div>
          </div>
        </div>

        {/* ── FULL LEGAL SECTIONS ───────────────────────────────────────── */}
        <div className="space-y-12 text-slate-300 leading-relaxed text-sm sm:text-base">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, registering for an account, or joining the waitlist of **CoreCV Technologies** (&quot;CoreCV&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, you must discontinue use of the platform immediately.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              2. Eligibility & Account Responsibilities
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
              <li><strong className="text-slate-100">Age Requirement:</strong> You must be at least 16 years of age (or the legal age of majority in your jurisdiction) to use CoreCV.</li>
              <li><strong className="text-slate-100">Truthful Information:</strong> You agree to provide accurate and authentic career records and not impersonate other professionals.</li>
              <li><strong className="text-slate-100">Account Security:</strong> You are responsible for safeguarding your credentials and for all activities that occur under your authenticated account.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              3. User Content & Intellectual Property Ownership
            </h2>
            <p>
              <strong className="text-white">Your Career Data Belongs to You:</strong> You retain 100% full ownership of all text, documents, STAR stories, portfolio links, and career records you upload or input into CoreCV (&quot;User Content&quot;).
            </p>
            <p>
              <strong className="text-white">Limited Operational License:</strong> By inputting User Content into the Master Vault, you grant CoreCV a limited, worldwide, royalty-free license solely to host, store, parse, format, and display your data for the purpose of providing CoreCV features to you. We do not sell your content or use it to train public AI models.
            </p>
            <p>
              <strong className="text-white">CoreCV Platform IP:</strong> The design, layout, code, brand assets, logos, and proprietary scoring algorithms of CoreCV remain the exclusive property of CoreCV Technologies.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              4. Acceptable Use Policy
            </h2>
            <p>You agree not to engage in any of the following prohibited activities:</p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
              <li>Reverse engineering, decompiling, or attempting to extract the underlying source code, system prompts, or algorithms of CoreCV.</li>
              <li>Scraping or harvesting user information or opportunity data using automated bots or scrapers without express written permission.</li>
              <li>Using CoreCV to create fraudulent resumes or misrepresent credentials to prospective employers.</li>
              <li>Bypassing security barriers, rate limits, or abusing token quotas.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              5. AI Assistance & Accuracy Disclaimer
            </h2>
            <p>
              CoreCV utilizes generative artificial intelligence to assist with resume tailoring, STAR story structuring, and interview preparation. 
            </p>
            <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-950/20 text-slate-200 text-sm">
              <p>
                <strong className="text-amber-400">Important:</strong> AI outputs are advisory tools. You are solely responsible for reviewing, proofreading, and verifying the accuracy and truthfulness of any application document, resume, or answer before submitting it to an employer.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              6. Opportunities & No Guarantee of Employment
            </h2>
            <p>
              CoreCV is a career intelligence and productivity software platform. We do not act as an employment agency, headhunter, or employer. We make no guarantees or warranties regarding whether you will receive job offers, interview invitations, or employment as a result of using the platform.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              7. Service Modifications & Termination
            </h2>
            <p>
              We reserve the right to modify, update, temporarily suspend, or discontinue any feature of the platform or waitlist program at our sole discretion. We may suspend or terminate accounts that violate these Terms.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              8. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, CoreCV Technologies, its directors, and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of (or inability to access or use) the service.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              9. Governing Law & Dispute Resolution
            </h2>
            <p>
              These Terms shall be governed by, and construed in accordance with, the laws of the **Federal Republic of Nigeria**. Any legal action or dispute arising under these Terms shall be resolved in the competent courts of Nigeria.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              10. Contact Information
            </h2>
            <p>
              For legal notices, terms clarification, or general questions:
            </p>
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 text-sm">
              <p className="text-white font-semibold">CoreCV Legal Team</p>
              <p className="text-slate-400 mt-1">CoreCV Technologies, Ibadan, Oyo State, Nigeria</p>
              <p className="text-emerald-400 mt-1">Email: <a href="mailto:hello@corecv.app">hello@corecv.app</a> / <a href="mailto:legal@corecv.app">legal@corecv.app</a></p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
