import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import {
  ShieldCheck,
  Lock,
  EyeOff,
  UserCheck,
  Server,
  Trash2,
  Phone,
  Building2,
  FileCheck2,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — CoreCV",
  description:
    "Learn how CoreCV protects and processes candidate Master Vault records and recruiter information under the Nigeria Data Protection Act (NDPA) 2023 and global privacy standards.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0D1117] text-slate-100 font-sans selection:bg-[#10B981] selection:text-white">
      <Navbar />

      <main className="flex-1 px-6 py-16 md:py-24 max-w-4xl mx-auto w-full">
        {/* ── HEADER ────────────────────────────────────────────────────── */}
        <div className="border-b border-slate-800 pb-10 mb-12 text-left">
          <div className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>NDPA 2023 &amp; Global Privacy Compliant</span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3"
            style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
          >
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Effective Date: October 2026 &bull; Applicable Law: Nigeria Data Protection Act (NDPA) 2023 &bull; Version 2.1
          </p>
        </div>

        {/* ── AT A GLANCE (EXECUTIVE COMMITMENT) ─────────────────────────── */}
        <div className="p-6 sm:p-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.03] mb-12">
          <h3
            className="text-lg font-bold text-white mb-5 flex items-center gap-2.5"
            style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
          >
            <Lock className="w-5 h-5 text-emerald-400" />
            <span>CoreCV Privacy Commitment (At a Glance)</span>
          </h3>

          <div className="grid sm:grid-cols-2 gap-5 text-sm text-slate-300">
            <div className="flex items-start gap-3">
              <EyeOff className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">We never sell your data:</strong> Your career record, contact numbers, and company inquiries are never sold to advertisers or third-party data brokers.
              </span>
            </div>

            <div className="flex items-start gap-3">
              <Server className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">Zero AI model training:</strong> Private Master Vaults, STAR stories, resumes, and recruiter search queries are never used to train public foundational AI models.
              </span>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">Strict Phone / WhatsApp Shield:</strong> Optional phone numbers are strictly confidential, never displayed publicly, and only used for verified platform communications.
              </span>
            </div>

            <div className="flex items-start gap-3">
              <Trash2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">Guaranteed Right to Erasure:</strong> You maintain complete ownership. You can export or permanently delete your account and all records at any time.
              </span>
            </div>
          </div>
        </div>

        {/* ── FULL LEGAL SECTIONS ───────────────────────────────────────── */}
        <div className="space-y-12 text-slate-300 leading-relaxed text-sm sm:text-base text-left">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              1. Scope &amp; Two-Sided Platform Architecture
            </h2>
            <p>
              CoreCV Technologies (&quot;CoreCV&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates a two-sided Career Intelligence Platform connecting:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <UserCheck className="w-4 h-4" />
                  <span>Candidates</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Professionals across all industries who compile their authentic work, projects, verified evidence, and career history into a persistent Master Vault.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <Building2 className="w-4 h-4" />
                  <span>Recruiters &amp; Hiring Teams</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Founders, hiring managers, and talent acquisition teams seeking to identify verified candidate capabilities backed by proof rather than self-reported resume claims.
                </p>
              </div>
            </div>
            <p>
              This Privacy Policy applies equally to candidates, recruiters, waitlist participants, and site visitors.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-white"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              2. Information We Collect
            </h2>
            <p>
              We collect information directly from you when you register, request early access, or build your Master Vault:
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-xl border border-slate-800 bg-[#121720]">
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-emerald-400" />
                  <span>A. Candidate Information</span>
                </h3>
                <ul className="list-disc list-inside space-y-1.5 pl-1 text-slate-300 text-xs sm:text-sm">
                  <li><strong className="text-slate-100">Identity &amp; Account:</strong> Full name, primary email address, authentication credentials, and OAuth tokens (Google / LinkedIn).</li>
                  <li><strong className="text-slate-100">Career &amp; Evidence Records:</strong> Profession, work experience, responsibilities, STAR stories, outcome metrics, and uploaded resumes (PDF / DOCX).</li>
                  <li><strong className="text-slate-100">Work Artifacts &amp; Proof:</strong> Public repository URLs (e.g. GitHub), live deployment URLs, published case studies, architecture briefs, and portfolio links you explicitly connect.</li>
                  <li><strong className="text-slate-100">Optional Contact Information:</strong> Direct phone or WhatsApp number provided during early access registration or onboarding.</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-[#121720]">
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-emerald-400" />
                  <span>B. Recruiter &amp; Hiring Team Information</span>
                </h3>
                <ul className="list-disc list-inside space-y-1.5 pl-1 text-slate-300 text-xs sm:text-sm">
                  <li><strong className="text-slate-100">Representative Identity:</strong> Full name, work email address, and official organizational title or role (e.g. Founder, CTO, HR, Hiring Manager).</li>
                  <li><strong className="text-slate-100">Company Details:</strong> Company or organization name, website domain, and industry domain.</li>
                  <li><strong className="text-slate-100">Hiring Needs:</strong> Open positions, technical capabilities, experience levels, and talent criteria submitted.</li>
                  <li><strong className="text-slate-100">Direct Contact:</strong> Optional phone or WhatsApp number submitted for priority walkthroughs and candidate introductions.</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-[#121720]">
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-emerald-400" />
                  <span>C. Technical &amp; Security Telemetry</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  IP addresses, browser type, operating system, and essential authentication cookies required to maintain encrypted session security and prevent CSRF attacks.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              <Phone className="w-5 h-5 text-emerald-400" />
              <span>3. Strict Phone &amp; WhatsApp Privacy Shield</span>
            </h2>
            <p>
              When you optionally provide your telephone or WhatsApp contact number to CoreCV, we enforce a strict protective protocol:
            </p>
            <div className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-950/20 space-y-3">
              <p className="text-sm font-semibold text-emerald-400">
                Our Guarantee: Zero Public Phone Exposure &bull; Zero Spam &bull; Zero Resale
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-1 text-xs sm:text-sm text-slate-300">
                <li><strong className="text-white">Never Publicly Displayed:</strong> Your direct phone number is never shown on public profiles, discovery engines, or external storefronts.</li>
                <li><strong className="text-white">Strict Internal Use:</strong> Used exclusively by CoreCV’s founding team to send high-priority onboarding updates, account security notices, or to coordinate verified candidate-recruiter introductions upon mutual consent.</li>
                <li><strong className="text-white">Zero Third-Party Sharing:</strong> We do not sell, rent, or lease phone numbers to recruiters, third-party marketing brokers, or advertising networks under any circumstances.</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-white"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              4. Documented Evidence vs. Sensitive Personal Data
            </h2>
            <p>
              CoreCV is built around **verifiable professional capability**. We make a strict distinction between professional evidence and sensitive private data:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
              <li>
                <strong className="text-slate-100">Professional Proof:</strong> Repositories, deployed systems, published articles, and outcome metrics that you explicitly link are processed to verify capabilities and match you with relevant hiring teams.
              </li>
              <li>
                <strong className="text-slate-100">Exclusion of Sensitive PII:</strong> CoreCV does not request, index, or store government national identification numbers (e.g. NIN, SSN, BVN), personal residential addresses, financial account details, or sensitive personal demographic data.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <span>5. Artificial Intelligence &amp; Zero-Model-Training Guarantee</span>
            </h2>
            <p>
              CoreCV utilizes enterprise AI models (such as Google Gemini via the Vercel AI SDK) for intelligent structuring, STAR story refinement, and capability matching:
            </p>
            <div className="p-5 rounded-xl border border-slate-800 bg-[#121720] space-y-3">
              <p className="text-sm text-slate-300">
                <strong className="text-white">Enterprise Data Isolation:</strong> All AI interactions occur via secure, encrypted TLS 1.3 connections under strict enterprise API terms.
              </p>
              <p className="text-sm text-emerald-400 font-medium">
                Under our enterprise API agreements, your career records, Master Vault contents, interview notes, and recruiter inquiries are NOT stored by foundation LLM providers and are NEVER used to train public or commercial AI models.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-white"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              6. Recruiter Search &amp; Discovery Governance
            </h2>
            <p>
              To protect candidate privacy and maintain executive trust across the platform:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
              <li>
                <strong className="text-slate-100">Candidate Privacy Controls:</strong> Candidates can choose whether their Master Vault is visible for recruiter capability discovery or kept strictly private for personal job application tailoring.
              </li>
              <li>
                <strong className="text-slate-100">Recruiter Vetting:</strong> All hiring organizations undergo verification before receiving access to candidate evidence records.
              </li>
              <li>
                <strong className="text-slate-100">Confidentiality of Hiring Intel:</strong> Search parameters, team size, and role requirements entered by recruiters are treated as strictly confidential proprietary information.
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-white"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              7. Lawful Basis for Processing (NDPA 2023)
            </h2>
            <p>
              In strict accordance with the **Nigeria Data Protection Act (NDPA) 2023**, CoreCV processes personal data under the following legal bases:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                <h4 className="font-semibold text-white mb-1">Contractual Necessity</h4>
                <p className="text-xs text-slate-400">Processing Master Vault data, generating applications, and facilitating hiring partner introductions requested by you.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                <h4 className="font-semibold text-white mb-1">Explicit Consent</h4>
                <p className="text-xs text-slate-400">Voluntarily joining the waitlist, connecting external OAuth accounts, or opting in to recruiter talent discovery.</p>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-white"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              8. Your Legal Rights &amp; Permanent Erasure
            </h2>
            <p>
              Under the Nigeria Data Protection Act 2023 and international data privacy frameworks (including GDPR), you retain the following enforceable rights:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
              <li><strong className="text-slate-100">Right of Access &amp; Portability:</strong> Request a complete structured export of your Master Vault data at any time.</li>
              <li><strong className="text-slate-100">Right to Rectification:</strong> Edit, update, or correct any career record or recruiter contact detail instantly in your dashboard.</li>
              <li><strong className="text-slate-100">Right to Erasure (Right to be Forgotten):</strong> Permanently delete your account and all associated vault records from our database.</li>
              <li><strong className="text-slate-100">Right to Withdraw Consent:</strong> Unsubscribe from marketing updates or pause recruiter discovery at any moment without penalty.</li>
            </ul>
            <p className="pt-2 text-sm text-slate-400">
              To exercise your data privacy rights, email our Data Protection Officer at{" "}
              <a href="mailto:privacy@corecv.app" className="text-emerald-400 hover:underline font-medium">
                privacy@corecv.app
              </a>
              . All data deletion requests are permanently executed within 7 business days.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2
              className="text-xl sm:text-2xl font-bold text-white"
              style={{ fontFamily: "var(--font-bricolage), var(--font-outfit), sans-serif" }}
            >
              9. Contact Data Protection Office
            </h2>
            <p>
              For legal inquiries, data rights execution, or regulatory questions under the Nigeria Data Protection Commission (NDPC):
            </p>
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 text-sm">
              <p className="text-white font-semibold">CoreCV Data Protection Office</p>
              <p className="text-slate-400 mt-1">CoreCV Technologies, Ibadan, Oyo State, Nigeria</p>
              <p className="text-emerald-400 mt-1">
                Direct Email: <a href="mailto:privacy@corecv.app" className="underline">privacy@corecv.app</a> / <a href="mailto:legal@corecv.app" className="underline">legal@corecv.app</a>
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
