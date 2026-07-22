import Image from "next/image";
import Link from "next/link";
import { Video } from "lucide-react";
import Logob from "./images/logob.png";

export default function Footer() {
	return (
		<footer className="w-full bg-[#1A1A2E] text-slate-300">
			<div className="mx-auto w-full max-w-7xl px-6 py-16">
				<div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
					{/* Column 1: Brand & Mission */}
					<div className="flex flex-col gap-6">
						<Link href="/" className="inline-flex items-center gap-2">
							<Image src={Logob} alt="CoreCV" width={28} height={28} />
							<span className="text-xl font-bold text-white">CoreCV</span>
						</Link>
						<p className="text-sm leading-relaxed">
							Talent is universal. Opportunity should be too.
						</p>
					</div>

					{/* Column 2: Product */}
					<div className="flex flex-col gap-4">
						<div className="text-sm font-bold text-white uppercase tracking-wider">Product</div>
						<Link href="/#how-it-works" className="text-sm hover:text-white transition-colors">How it works</Link>
						<Link href="/#features" className="text-sm hover:text-white transition-colors">Features</Link>
						<Link href="/#pricing" className="text-sm hover:text-white transition-colors">Pricing</Link>
						<Link href="/#solution" className="text-sm hover:text-white transition-colors">The Master Vault</Link>
						<Link href="/#features" className="text-sm hover:text-white transition-colors">Content Engine</Link>
					</div>

					{/* Column 3: Company */}
					<div className="flex flex-col gap-4">
						<div className="text-sm font-bold text-white uppercase tracking-wider">Company</div>
						<Link href="/about-us" className="text-sm hover:text-white transition-colors">About</Link>
						<Link href="/blog" className="text-sm hover:text-white transition-colors">Blog</Link>
						<Link href="#" className="text-sm hover:text-white transition-colors">Careers</Link>
						<Link href="mailto:wigoh100@gmail.com" className="text-sm hover:text-white transition-colors">Contact</Link>
					</div>

					{/* Column 4: Legal */}
					<div className="flex flex-col gap-4">
						<div className="text-sm font-bold text-white uppercase tracking-wider">Legal</div>
						<Link href="#" className="text-sm hover:text-white transition-colors">Privacy policy</Link>
						<Link href="#" className="text-sm hover:text-white transition-colors">Terms of service</Link>
						<Link href="#" className="text-sm hover:text-white transition-colors">Cookie settings</Link>
						<Link href="#" className="text-sm hover:text-white transition-colors">Security</Link>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="mt-16 border-t border-slate-700/50 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
					<p className="text-sm text-slate-400">© 2026 CoreCV. All rights reserved.</p>
					<p className="text-sm font-medium text-white">Get your career right.</p>
				</div>
			</div>
		</footer>
	);
}
