import React from "react";
import Link from "next/link";

export const FinalCTA = () => {
  return (
    <section className="w-full bg-[#1A1A2E] py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-linear-to-t from-[#1A1A2E] to-[#121220] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-8">
          Your next opportunity is not waiting for a better resume.<br className="hidden md:block" />
          It is waiting for you to show up where it can find you.
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          Build your vault in 8 minutes. Free, forever, no credit card.<br className="hidden md:block" />
          Upgrade when you are ready. Cancel any time.
        </p>
        
        <div className="flex flex-col items-center">
          <Link 
            href="/login" 
            className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-colors text-xl shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_rgba(37,99,235,0.4)]"
          >
            Build my vault free
          </Link>
          <p className="mt-6 text-sm text-gray-400">
            Joined by 140+ job seekers already building their vault. <span className="mx-2">|</span> No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};
