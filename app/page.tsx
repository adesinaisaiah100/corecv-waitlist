import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { Hero } from "@/components/hero";
import { ProblemSection } from "@/components/problem-section";
import { PillarsSection } from "@/components/pillars-section";
import { QuestionsSection } from "@/components/questions-section";
import { AudienceSection } from "@/components/audience-section";
import { FAQ } from "@/components/faq";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0D1117] text-foreground">
      {/* Top Dark Header & Hero Region */}
      <div className="w-full bg-[#0D1117]">
        <Navbar />
        <Hero />
      </div>

      <main className="w-full flex flex-col bg-background">
        <ProblemSection />

        <PillarsSection />

        <QuestionsSection />

        <AudienceSection />

        <FAQ />

        {/* Waitlist Section */}
        {/* Waitlist Section CTA */}
        <section className="w-full py-32 bg-[#0D1117] text-white flex justify-center border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(16,185,129,0.08) 0%, transparent 60%)" }} />
          <div className="w-full max-w-2xl px-6 flex flex-col items-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-8 border"
              style={{
                background: "rgba(16,185,129,0.08)",
                borderColor: "rgba(16,185,129,0.2)",
                color: "#10B981",
              }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Early Access — 500 Spots
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-center tracking-tight text-white" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
              Ready to upgrade your career?
            </h2>
            <p className="text-[#8892A4] text-center mb-10 text-lg md:text-xl max-w-lg">
              Apply to become a Founding Member today. Be among the first to get access and unlock the 30-Day Career Sprint package.
            </p>
            <Link
              href="/join"
              className="w-full sm:w-auto py-4 px-10 rounded-full font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1 active:scale-95 text-lg group"
              style={{
                background: "linear-gradient(135deg, #10B981, #059669)",
                boxShadow: "0 8px 32px rgba(16, 185, 129, 0.4)",
              }}
            >
              Apply for Early Access
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
