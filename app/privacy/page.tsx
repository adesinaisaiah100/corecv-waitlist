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
  Mail,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — CoreCV",
  description:
    "Learn how CoreCV collects, protects, and processes your career data in compliance with the Nigeria Data Protection Act (NDPA) 2023 and global privacy standards.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0D1117] text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      <Navbar />

      <main className="flex-1 px-6 py-16 md:py-24 max-w-4xl mx-auto w-full">
        {/* ── HEADER ────────────────────────────────────────────────────── */}
        <div className="border-b border-slate-800/80 pb-10 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-medium text-emerald-400 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>NDPA 2023 Compliant</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm sm:text-base">
            Effective Date: August 2026 &bull; Applicable Law: Nigeria Data Protection Act (NDPA) 2023
          </p>
        </div>

        {/* ── AT A GLANCE (EXECUTIVE SUMMARY) ───────────────────────────── */}
        <div className="p-6 sm:p-8 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 mb-12">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5 text-emerald-400" />
            <span>CoreCV Privacy Commitment (At a Glance)</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-300">
            <div className="flex items-start gap-2.5">
              <EyeOff className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>We never sell your data:</strong> Your career history and personal info are never sold to advertisers or third-party brokers.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <Server className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Zero AI model training:</strong> We do not use your private resume, vault records, or applications to train public AI models.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <UserCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>You own your content:</strong> You maintain 100% full ownership over every bullet point, project, and document in your Vault.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <Trash2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Right to Erasure:</strong> You can export or permanently delete your account and all associated data at any time.
              </span>
            </div>
          </div>
        </div>

        {/* ── FULL LEGAL SECTIONS ───────────────────────────────────────── */}
        <div className="space-y-12 text-slate-300 leading-relaxed text-sm sm:text-base">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              1. Information We Collect
            </h2>
            <p>
              To provide the CoreCV Career Intelligence Platform and Master Vault services, we collect the following categories of information:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
              <li>
                <strong className="text-slate-100">Account Identifiers:</strong> Name, email address, and OAuth authentication tokens (when signing in via Google OAuth or LinkedIn OAuth).
              </li>
              <li>
                <strong className="text-slate-100">Master Vault Data:</strong> Work history, job titles, responsibilities, project descriptions, education, certifications, and uploaded resume files (PDF/DOCX).
              </li>
              <li>
                <strong className="text-slate-100">Application Telemetry:</strong> Job descriptions pasted for fit assessments, generated resume drafts, interview notes, and match score metrics.
              </li>
              <li>
                <strong className="text-slate-100">Technical & Device Data:</strong> IP addresses, browser type, operating system, and essential authentication cookies required to keep your session secure.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              2. Lawful Basis for Processing (NDPA 2023)
            </h2>
            <p>
              In accordance with Section 25 of the Nigeria Data Protection Act 2023, CoreCV processes personal data under the following lawful bases:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                <h4 className="font-semibold text-white mb-1">Contractual Necessity</h4>
                <p className="text-xs text-slate-400">Processing your career records to build your Vault, run role-fit scoring, and generate ATS-ready applications upon your request.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                <h4 className="font-semibold text-white mb-1">Explicit Consent</h4>
                <p className="text-xs text-slate-400">When you voluntarily join the Founding User waitlist, connect OAuth accounts, or request AI coaching assistance.</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              3. Artificial Intelligence & Third-Party Processing
            </h2>
            <p>
              CoreCV integrates advanced AI APIs (such as Google Gemini via the Vercel AI SDK) and search grounding engines (Tavily):
            </p>
            <div className="p-5 rounded-xl border border-slate-800 bg-[#121720]">
              <p className="text-sm text-slate-300 mb-3">
                <strong className="text-white">Strict Enterprise Isolation:</strong> When you request an AI assessment or resume draft, data is transmitted over encrypted TLS 1.3 tunnels to the model endpoint. 
              </p>
              <p className="text-sm text-emerald-400 font-medium">
                Under our API enterprise agreements, user personal career records are NOT stored by LLM providers, NOT visible to other users, and NOT used to train public foundational AI models.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              4. Infrastructure & Data Processors
            </h2>
            <p>
              We partner with industry-leading, SOC-2 and ISO-27001 certified cloud infrastructure providers to store and secure your records:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
              <li><strong className="text-slate-100">Database & Authentication:</strong> Supabase (PostgreSQL with AES-256 encryption at rest and Row-Level Security).</li>
              <li><strong className="text-slate-100">Hosting & Edge Compute:</strong> Vercel Inc.</li>
              <li><strong className="text-slate-100">Payment Processing:</strong> Dodo Payments / Stripe (CoreCV never stores raw debit/credit card numbers).</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              5. Your Data Rights & Deletion
            </h2>
            <p>
              Under the Nigeria Data Protection Act 2023 and global data protection regulations, you hold the following rights:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
              <li><strong className="text-slate-100">Right of Access:</strong> Request a complete copy of all career records stored in your Vault.</li>
              <li><strong className="text-slate-100">Right to Rectification:</strong> Edit, update, or correct any personal or career history entry at any time.</li>
              <li><strong className="text-slate-100">Right to Erasure (Right to be Forgotten):</strong> Permanently delete your account and all associated vault records from our database.</li>
              <li><strong className="text-slate-100">Right to Object:</strong> Withdraw consent for non-essential communications or specific processing activities.</li>
            </ul>
            <p className="pt-2 text-sm text-slate-400">
              To exercise any of these rights, email us directly at <a href="mailto:privacy@corecv.app" className="text-emerald-400 hover:underline">privacy@corecv.app</a>. We process all data deletion requests within 7 business days.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              6. Cookies & Tracking
            </h2>
            <p>
              CoreCV uses strictly necessary cookies to maintain authenticated sessions and protect against cross-site request forgery (CSRF). We do not use third-party behavioral advertising cookies.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              7. Contact the Data Protection Team
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our compliance with the Nigeria Data Protection Commission (NDPC), please contact our Data Protection Officer:
            </p>
            <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 text-sm">
              <p className="text-white font-semibold">CoreCV Data Protection Office</p>
              <p className="text-slate-400 mt-1">CoreCV Technologies, Ibadan, Oyo State, Nigeria</p>
              <p className="text-emerald-400 mt-1">Email: <a href="mailto:privacy@corecv.app">privacy@corecv.app</a></p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
