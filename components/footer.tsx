import Image from "next/image";
import Link from "next/link";
import Logob from "./images/logob.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0D1117] border-t border-slate-800 text-slate-300">
      <div className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand & Mission */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image src={Logob} alt="CoreCV" width={28} height={28} className="brightness-0 invert" />
              <span className="text-xl font-bold text-white tracking-tight">
                CoreCV
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Your professional record, built on what you&apos;ve actually done. Build it once. Keep building it.
            </p>
          </div>

          {/* Column 2: Product */}
          <div className="flex flex-col gap-4">
            <div className="text-sm font-bold text-white uppercase tracking-wider">Product</div>
            <Link href="/#master-vault" className="text-sm text-slate-400 hover:text-white transition-colors">Master Vault</Link>
            <Link href="/#recruiters" className="text-sm text-slate-400 hover:text-white transition-colors">For Recruiters</Link>
            <Link href="/#how-it-works" className="text-sm text-slate-400 hover:text-white transition-colors">How It Works</Link>
            <Link href="/join" className="text-sm text-white hover:text-slate-300 transition-colors font-medium">Join Founding Waitlist &rarr;</Link>
          </div>

          {/* Column 3: Founding Network */}
          <div className="flex flex-col gap-4">
            <div className="text-sm font-bold text-white uppercase tracking-wider">Early Access</div>
            <Link href="/join" className="text-sm text-slate-400 hover:text-white transition-colors">Join Candidate Waitlist</Link>
            <Link href="/join" className="text-sm text-slate-400 hover:text-white transition-colors">Recruiter Partner Access</Link>
            <Link href="mailto:hello@corecv.app" className="text-sm text-slate-400 hover:text-white transition-colors">Contact Founders</Link>
          </div>

          {/* Column 4: Legal */}
          <div className="flex flex-col gap-4">
            <div className="text-sm font-bold text-white uppercase tracking-wider">Legal & Trust</div>
            <Link href="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy#ai" className="text-sm text-slate-400 hover:text-white transition-colors">AI & Data Privacy</Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-slate-800/80 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">© 2026 CoreCV Technologies. All rights reserved.</p>
          <p className="text-sm font-medium text-slate-400">
            One record. Everything that matters.
          </p>
        </div>
      </div>
    </footer>
  );
}
