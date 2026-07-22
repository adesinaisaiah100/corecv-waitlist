import WaitlistForm from "@/components/WaitlistForm";

const FEATURES = [
  {
    icon: "🧠",
    title: "AI Career Intelligence",
    description:
      "Understand exactly where you're competitive and what gaps to close with AI-powered career analysis.",
  },
  {
    icon: "🗂️",
    title: "Master Vault",
    description:
      "One central hub for all your experiences, achievements, and career artifacts — structured and ready to deploy.",
  },
  {
    icon: "📄",
    title: "Tailored Applications",
    description:
      "Generate precision-tailored resumes, cover letters, and interview prep from your vault in seconds.",
  },
  {
    icon: "🌐",
    title: "Personal Storefront",
    description:
      "A professional public profile that showcases your story and makes recruiters find you instead.",
  },
];

const AVATARS = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
];

export default function WaitlistPage() {
  return (
    <main className="min-h-screen w-full flex flex-col" style={{ background: "#0D1117" }}>

      {/* ── Minimal Navbar ──────────────────────────────── */}
      <nav className="w-full flex items-center justify-center px-6 py-5">
        <div className="flex items-center gap-2.5">
          {/* Logo placeholder — logob.png rendered white */}
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-lg"
            style={{ background: "linear-gradient(135deg, #10B981, #059669)", color: "#fff" }}
          >
            C
          </div>
          <span
            className="text-xl font-extrabold tracking-tight"
            style={{ color: "#F1F5F9", fontFamily: "var(--font-outfit), sans-serif" }}
          >
            CoreCV
          </span>
        </div>
      </nav>

      {/* ── Hero + Form ─────────────────────────────────── */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">

        {/* Ambient glow */}
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 20%, rgba(16,185,129,0.07) 0%, transparent 60%)",
          }}
        />

        {/* Eyebrow pill */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-8 border"
          style={{
            background: "rgba(16,185,129,0.08)",
            borderColor: "rgba(16,185,129,0.2)",
            color: "#10B981",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Early Access — Limited Spots
        </div>

        {/* Headline */}
        <h1
          className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold leading-[1.1] tracking-tight mb-6 max-w-3xl"
          style={{ color: "#F1F5F9", fontFamily: "var(--font-outfit), sans-serif" }}
        >
          Your career shouldn&apos;t be built{" "}
          <span style={{ color: "#10B981" }}>on guesswork.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-[1.0625rem] md:text-[1.125rem] leading-[1.72] max-w-xl mb-10"
          style={{ color: "#64748B" }}
        >
          CoreCV is an AI-powered career intelligence platform. Join the waitlist
          to be first when we open doors — and shape the product as an early member.
        </p>

        {/* Social proof */}
        <div className="flex items-center gap-3 mb-10">
          <span className="flex -space-x-2.5">
            {AVATARS.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="CoreCV community member"
                className="w-8 h-8 rounded-full object-cover"
                style={{ border: "2px solid #0D1117" }}
              />
            ))}
          </span>
          <p className="text-sm" style={{ color: "#475569" }}>
            <span className="font-semibold" style={{ color: "#CBD5E1" }}>
              140+ professionals
            </span>{" "}
            already waiting
          </p>
        </div>

        {/* Form Card */}
        <div
          className="w-full max-w-md rounded-2xl p-7 sm:p-8 border"
          style={{
            background: "rgba(255,255,255,0.03)",
            borderColor: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 32px 64px rgba(0,0,0,0.4)",
          }}
        >
          <WaitlistForm />
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8">
          {["Free to join", "No spam ever", "Cancel anytime"].map((text) => (
            <span key={text} className="flex items-center gap-1.5 text-xs" style={{ color: "#334155" }}>
              <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {text}
            </span>
          ))}
        </div>
      </section>

      {/* ── Feature Teaser Strip ─────────────────────────── */}
      <section className="w-full max-w-5xl mx-auto px-6 pb-20">
        <p
          className="text-center text-xs font-semibold uppercase tracking-widest mb-10"
          style={{ color: "#334155" }}
        >
          What you&apos;re getting early access to
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-xl p-5 border"
              style={{
                background: "rgba(255,255,255,0.02)",
                borderColor: "rgba(255,255,255,0.06)",
              }}
            >
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3
                className="text-sm font-bold mb-2"
                style={{ color: "#E2E8F0" }}
              >
                {f.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "#475569" }}>
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer className="w-full border-t px-6 py-6 flex items-center justify-center" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
        <p className="text-xs" style={{ color: "#1E293B" }}>
          © {new Date().getFullYear()} CoreCV. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
