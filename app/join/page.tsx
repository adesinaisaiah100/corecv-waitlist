import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import WaitlistForm from "@/components/WaitlistForm";

export default function JoinPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0D1117] text-foreground">
      <Navbar />

      <main className="flex-1 w-full flex flex-col items-center justify-center py-16 px-4 bg-[#0D1117]">
        <div className="w-full max-w-xl flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 border"
            style={{
              background: "rgba(16,185,129,0.08)",
              borderColor: "rgba(16,185,129,0.2)",
              color: "#10B981",
            }}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Early Access — 500 Spots
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-center tracking-tight text-white" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
            Apply for Early Access
          </h1>
          <p className="text-[#8892A4] text-center mb-10 max-w-md text-lg">
            Join the waitlist to become a Founding User and unlock the 30-Day Career Sprint package.
          </p>

          <div className="w-full rounded-2xl p-7 border relative overflow-hidden" style={{
            background: "rgba(255,255,255,0.03)",
            borderColor: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 32px 64px rgba(0,0,0,0.4)"
          }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none" />
            <WaitlistForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
