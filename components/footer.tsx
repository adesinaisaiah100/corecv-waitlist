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
						<Link href="/" className="inline-flex items-center gap-2">
							<Image src={Logob} alt="CoreCV" width={28} height={28} />
							<span className="text-xl font-bold text-white tracking-tight">
								Core<span className="text-emerald-400">CV</span>
							</span>
						</Link>
						<p className="text-sm leading-relaxed text-slate-400">
							Your career is more than a static document. Build your Master Vault and make smarter career decisions.
						</p>
					</div>

					{/* Column 2: Product */}
					<div className="flex flex-col gap-4">
						<div className="text-sm font-bold text-white uppercase tracking-wider">Product</div>
						<Link href="/#how-it-works" className="text-sm hover:text-white transition-colors">How it works</Link>
						<Link href="/#features" className="text-sm hover:text-white transition-colors">Features</Link>
						<Link href="/#solution" className="text-sm hover:text-white transition-colors">The Master Vault</Link>
						<Link href="/join" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors font-medium">Join Founding Waitlist</Link>
					</div>

					{/* Column 3: Company */}
					<div className="flex flex-col gap-4">
						<div className="text-sm font-bold text-white uppercase tracking-wider">Company</div>
						<Link href="/about-us" className="text-sm hover:text-white transition-colors">About Us</Link>
						<Link href="/contact" className="text-sm hover:text-white transition-colors">Contact</Link>
						<Link href="mailto:partnerships@corecv.app" className="text-sm hover:text-white transition-colors">Partnerships</Link>
					</div>

					{/* Column 4: Legal */}
					<div className="flex flex-col gap-4">
						<div className="text-sm font-bold text-white uppercase tracking-wider">Legal & Trust</div>
						<Link href="/privacy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link>
						<Link href="/terms" className="text-sm hover:text-white transition-colors">Terms of Service</Link>
						<Link href="/privacy#ai" className="text-sm hover:text-white transition-colors">AI & Data Privacy</Link>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="mt-16 border-t border-slate-800/80 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
					<p className="text-sm text-slate-400">© 2026 CoreCV Technologies. All rights reserved.</p>
					<p className="text-sm font-medium text-slate-300">
						Built with conviction for ambitious careers.
					</p>
				</div>
			</div>
		</footer>
	);
}
