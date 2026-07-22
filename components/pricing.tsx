import React from "react";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import UpgradeButton from './UpgradeButton';

export default async function Pricing() {
  const isLoggedIn = false;

  // We will assume these env vars exist in .env.local
  const monthlyProductId = process.env.NEXT_PUBLIC_DODO_PRO_MONTHLY_ID || 'dummy_monthly_id';
  const sprintProductId = process.env.NEXT_PUBLIC_DODO_PRO_SPRINT_ID || 'dummy_sprint_id';

  return (
    <section id="pricing" className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 inline-block">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Start free. Upgrade when you are ready.
          </h2>
          <p className="text-xl text-gray-600">
            No credit card for the free tier. Cancel Pro anytime.
          </p>
          <div className="mt-4 inline-block bg-blue-50 text-blue-700 text-sm px-4 py-2 rounded-full font-medium shadow-sm border border-blue-100">
            🌍 Prices are automatically adjusted to your local currency at checkout!
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          
          {/* Free Tier */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-200 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
            <div className="mb-4">
              <span className="text-5xl font-black text-gray-900">$0</span>
              <span className="text-gray-500 font-medium ml-2">/ forever</span>
            </div>
            <p className="text-gray-600 font-medium mb-8">Build your Vault for free.</p>
            
            <ul className="space-y-4 mb-10 flex-1">
              {[
                "Full Master Vault (unlimited data entry)",
                "3 AI resume tailors per month",
                "1 cover letter per month",
                "Application tracker (up to 10 applications)",
                "PDF download (first 3 unwatermarked)",
                "1 AI-generated post per week",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-gray-400 mt-1 shrink-0" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Link 
              href="#waitlist" 
              className="w-full text-center px-6 py-4 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-900 font-bold rounded-full transition-colors"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Pro Tier */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border-2 border-blue-600 shadow-2xl flex flex-col relative">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Most popular
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
            <div className="mb-4 flex flex-col">
              <div className="flex items-baseline">
                <span className="text-5xl font-black text-gray-900">$19</span>
                <span className="text-gray-500 font-medium ml-2">/ month</span>
              </div>
              <span className="text-sm text-gray-500 font-medium mt-1">or $144 / year ($12/mo)</span>
            </div>
            <p className="text-blue-600 font-medium mb-8">The full system. Unlimited.</p>
            
            <p className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Includes everything in Free, plus:</p>
            <ul className="space-y-4 mb-10 flex-1">
              {[
                "Unlimited resume tailoring",
                "Unlimited cover letters and follow-up emails",
                "Unlimited application tracking",
                "Full STAR Stories Vault",
                "Live AI mock interview",
                "Full content engine (TikTok, Instagram, LinkedIn)",
                "7-day content calendar",
                "Cross-platform profile identity package",
                "No watermark on PDF downloads",
                "Full ATS Match Score Breakdown",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 mt-1 shrink-0" size={20} />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            {isLoggedIn ? (
              <UpgradeButton 
                productId={monthlyProductId} 
                buttonText="Upgrade to Pro" 
                className="w-full rounded-full py-4 text-lg shadow-xl"
              />
            ) : (
              <Link 
                href="#waitlist" 
                className="w-full text-center px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-colors"
              >
                Join Waitlist
              </Link>
            )}
          </div>

        </div>

        {/* Sprint Plan Banner */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 to-indigo-900 rounded-3xl p-8 md:p-10 shadow-xl flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <span className="text-indigo-300 font-semibold tracking-wider uppercase text-xs mb-2 inline-block">
              Just need it for one job search?
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">The Job Seeker Sprint</h3>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold text-white">$39</span>
              <span className="text-indigo-200">/ 3 months</span>
            </div>
            <p className="text-indigo-100 mb-4 text-sm">
              Full Pro access for the length of a typical job search. Pay once. Done.
            </p>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="text-indigo-400 mt-0.5 shrink-0" size={16} />
              <span className="text-sm text-indigo-200">Everything in Pro. No auto-renew. Cancel or let it expire.</span>
            </div>
          </div>
          <div className="w-full md:w-auto shrink-0 mt-4 md:mt-0">
            {isLoggedIn ? (
              <UpgradeButton 
                productId={sprintProductId} 
                buttonText="Get the Sprint" 
                className="w-full bg-white text-indigo-900 hover:bg-gray-100 py-4 px-8 rounded-full"
              />
            ) : (
              <Link 
                href="#waitlist" 
                className="block w-full text-center px-8 py-4 bg-white hover:bg-gray-50 text-indigo-900 font-bold rounded-full transition-colors"
              >
                Join Waitlist
              </Link>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
