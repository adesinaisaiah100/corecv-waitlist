import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import {
  Mail,
  Handshake,
  ShieldCheck,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact CoreCV — Get in Touch",
  description:
    "Get in touch with the CoreCV team for general inquiries, early access support, institutional partnerships, and data privacy requests.",
};

export default function ContactPage() {
  const contactChannels = [
    {
      title: "General & Early Access",
      email: "hello@corecv.app",
      description:
        "Questions about our waitlist, feedback on features, or general platform inquiries.",
      response: "Within 24–48 hours",
      icon: Mail,
      accent: "emerald",
    },
    {
      title: "Strategic Partnerships",
      email: "partnerships@corecv.app",
      description:
        "Universities, student engineering hubs, bootcamps, and career service organizations.",
      response: "Within 24 hours",
      icon: Handshake,
      accent: "blue",
    },
    {
      title: "Data Privacy & Security",
      email: "privacy@corecv.app",
      description:
        "Direct inquiries to our Data Protection team regarding personal data and NDPA rights.",
      response: "Within 48 hours",
      icon: ShieldCheck,
      accent: "teal",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#0D1117] text-slate-100 font-sans selection:bg-emerald-500 selection:text-white">
      <Navbar />

      <main className="flex-1 px-6 py-20 md:py-28 max-w-5xl mx-auto w-full">
        {/* ── HEADER ────────────────────────────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-medium text-emerald-400 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Support & Channels</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Get in touch with the team.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We are building in the open and always eager to speak with candidates, hiring managers, and partners.
          </p>
        </div>

        {/* ── CONTACT GRID ──────────────────────────────────────────────── */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactChannels.map((channel) => {
            const Icon = channel.icon;
            return (
              <div
                key={channel.email}
                className="p-8 rounded-2xl border border-slate-800/90 bg-[#121720]/90 flex flex-col justify-between hover:border-slate-700 transition-all group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {channel.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {channel.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <a
                    href={`mailto:${channel.email}`}
                    className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 text-sm group/link"
                  >
                    <span>{channel.email}</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Avg response: {channel.response}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── LOCATION & OPERATIONAL DETAILS ─────────────────────────────── */}
        <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 shrink-0">
              <MapPin className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-base">
                CoreCV Technologies
              </h4>
              <p className="text-sm text-slate-400">
                Ibadan, Oyo State, Nigeria. Building globally for the future of work.
              </p>
            </div>
          </div>

          <Link
            href="/join"
            className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shrink-0"
          >
            Join Founding Waitlist
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
