import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { Hero } from "@/components/hero";
import { ProblemSection } from "@/components/problem-section";
import { PillarsSection } from "@/components/pillars-section";
import { QuestionsSection } from "@/components/questions-section";
import { AudienceSection } from "@/components/audience-section";
import { Testimonials } from "@/components/testimonials";
import Pricing from "@/components/pricing";
import { FAQ } from "@/components/faq";
import WaitlistForm from "@/components/WaitlistForm";

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

        <div id="pricing" className="w-full">
          <Testimonials />
          <Pricing />
        </div>

        <FAQ />

        {/* Waitlist Section */}
        <section id="waitlist" className="w-full py-24 bg-[#0D1117] text-white flex justify-center">
          <div className="w-full max-w-xl px-6 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-8 border"
              style={{
                background: "rgba(16,185,129,0.08)",
                borderColor: "rgba(16,185,129,0.2)",
                color: "#10B981",
              }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Early Access — Limited Spots
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center tracking-tight" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
              Secure your spot.
            </h2>
            <p className="text-[#8892A4] text-center mb-10 max-w-md">
              Join the waitlist today. Be among the first to get access and help shape how ambitious professionals build their careers.
            </p>
            <div className="w-full rounded-2xl p-7 border" style={{
              background: "rgba(255,255,255,0.03)",
              borderColor: "rgba(255,255,255,0.07)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 32px 64px rgba(0,0,0,0.4)"
            }}>
              <WaitlistForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
