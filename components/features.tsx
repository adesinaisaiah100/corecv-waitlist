"use client";

import React, { useRef } from "react";
import { CheckCircle2, Database, Briefcase, Globe, Sparkles } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "0.6 1"] // Start when top of container hits bottom of viewport. End when container is 60% up from the bottom. This feels natural before it reaches center.
  });

  // Left Card (The Vault)
  const x1 = useTransform(scrollYProgress, [0, 1], ["105%", "0%"]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [-8, 0]);
  
  // Center Card (The Application Journey)
  const y2 = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  // Right Card (The Presence Engine)
  const x3 = useTransform(scrollYProgress, [0, 1], ["-105%", "0%"]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [8, 0]);

  return (
    <section id="features" className="w-full bg-white py-24 md:py-32 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.05)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#10B981] font-semibold tracking-wider uppercase text-sm mb-4 inline-flex items-center gap-2">
            <Sparkles size={16} /> The Professional OS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight flex flex-col items-center gap-2" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
            <span>Everything you need.</span>
            <span>Powered by one vault.</span>
          </h2>
        </div>

        {/* BENTO GRID (Scroll Target) */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 relative"
        >
          
          {/* ── PILLAR 1: THE VAULT ──────────────────────────────── */}
          <motion.div 
            style={{ x: x1, rotate: rotate1 }}
            className="group bg-[#FAFAFA] rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-500/50 transition-all duration-500 flex flex-col z-10"
          >
            <div className="h-56 md:h-64 w-full relative overflow-hidden">
              <Image src="/vault_mockup.jpg" alt="CoreCV Vault Diagram" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="p-8 md:p-10 flex flex-col grow bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                <Database className="text-blue-600" /> The Vault
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Your career is not a static PDF. Upload an old resume or chat with our AI Interview Coach to uncover your past. CoreCV automatically extracts and structures your raw history into granular Evidence Cards (metrics, projects) and STAR Stories.
              </p>
              <ul className="space-y-3 mt-auto">
                {["AI Interview Agent to extract history", "Structured STAR Story framework", "Verifiable Evidence Cards"].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-600 mt-1 shrink-0" size={18} />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ── PILLAR 2: THE APPLICATION JOURNEY ────────────────── */}
          <motion.div 
            style={{ y: y2, scale: scale2 }}
            className="group bg-[#FAFAFA] rounded-3xl overflow-hidden border border-gray-200 shadow-xl hover:-translate-y-1 hover:border-[#10B981]/50 transition-all duration-500 flex flex-col z-20"
          >
            <div className="h-56 md:h-64 w-full relative overflow-hidden">
              <Image src="/application_mockup.jpg" alt="CoreCV Application Journey Diagram" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="p-8 md:p-10 flex flex-col grow bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                <Briefcase className="text-[#10B981]" /> The Application
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Paste a job link. CoreCV cross-references the requirements against your Vault to run a Fit Assessment. It then automatically selects the exact Evidence Cards needed to construct a highly tailored resume, cover letter, and interview prep guide.
              </p>
              <ul className="space-y-3 mt-auto">
                {["AI Job Fit Assessment", "Perfectly tailored resumes", "Live Mock Interviews on your exact stories"].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#10B981] mt-1 shrink-0" size={18} />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ── PILLAR 3: THE PRESENCE ENGINE ────────────────────── */}
          <motion.div 
            style={{ x: x3, rotate: rotate3 }}
            className="group bg-[#1E3A5F] rounded-3xl overflow-hidden border border-[#1E3A5F] shadow-sm hover:shadow-[0_20px_50px_rgba(30,58,95,0.4)] hover:-translate-y-1 transition-all duration-500 flex flex-col relative z-10"
          >
            <div className="h-56 md:h-64 w-full relative overflow-hidden">
              <Image src="/feature_storefront_v2.jpg" alt="CoreCV Presence Engine" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="p-8 md:p-10 flex flex-col grow border-t border-white/10 bg-[#1E3A5F]">
              <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                <Globe className="text-[#F59E0B]" /> The Presence
              </h3>
              <p className="text-white/70 leading-relaxed mb-8">
                Be found while you sleep. Automatically publish a beautiful Storefront portfolio, and let our Content Engine draft authentic LinkedIn posts directly from your Vault.
              </p>
              <ul className="space-y-3 mt-auto">
                {["Google-indexed Storefront URL", "Automated Content Engine for LinkedIn", "No generic advice, just your truth"].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#F59E0B] mt-1 shrink-0" size={18} />
                    <span className="text-white/90 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Features;