"use client";

import React, { useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const KiraSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "0.6 0.5"] // Starts when top enters bottom of viewport, ends slightly past center
  });

  // Card 1
  const x1 = useTransform(scrollYProgress, [0.0, 0.4], ["100%", "0%"]);
  const rotate1 = useTransform(scrollYProgress, [0.0, 0.4], [15, 0]);
  const opacity1 = useTransform(scrollYProgress, [0.0, 0.4], [0, 1]);

  // Card 2
  const x2 = useTransform(scrollYProgress, [0.3, 0.7], ["100%", "0%"]);
  const rotate2 = useTransform(scrollYProgress, [0.3, 0.7], [15, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);

  // Card 3
  const x3 = useTransform(scrollYProgress, [0.6, 1.0], ["100%", "0%"]);
  const rotate3 = useTransform(scrollYProgress, [0.6, 1.0], [15, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.6, 1.0], [0, 1]);

  return (
    <section 
      ref={containerRef}
      className="w-full bg-[#0A1628] py-24 md:py-32 relative overflow-hidden z-30 shadow-[0_-20px_50px_rgba(0,0,0,0.2)]"
    >
      {/* Subtle background glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1000px] bg-[#F59E0B]/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10"
      >
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column: Heading & Intro */}
          <div className="w-full lg:w-5/12 flex flex-col items-start">
            
            {/* The Constellation Icon & Name */}
            <div className="flex items-center gap-4 mb-8">
              {/* Constellation SVG */}
              <div className="w-12 h-12 relative flex items-center justify-center shrink-0">
                <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="50" r="4" fill="#F59E0B" className="animate-pulse" style={{ animationDelay: '0ms' }} />
                  <circle cx="35" cy="35" r="3" fill="#F59E0B" opacity="0.8" className="animate-pulse" style={{ animationDelay: '300ms' }} />
                  <circle cx="35" cy="65" r="3" fill="#F59E0B" opacity="0.8" className="animate-pulse" style={{ animationDelay: '600ms' }} />
                  <circle cx="55" cy="25" r="2" fill="#F59E0B" opacity="0.6" className="animate-pulse" style={{ animationDelay: '900ms' }} />
                  <circle cx="55" cy="50" r="5" fill="#F59E0B" className="animate-pulse" style={{ animationDelay: '1200ms' }} />
                  <circle cx="55" cy="75" r="2" fill="#F59E0B" opacity="0.6" className="animate-pulse" style={{ animationDelay: '1500ms' }} />
                  <circle cx="75" cy="35" r="3" fill="#F59E0B" opacity="0.8" className="animate-pulse" style={{ animationDelay: '1800ms' }} />
                  <circle cx="75" cy="65" r="3" fill="#F59E0B" opacity="0.8" className="animate-pulse" style={{ animationDelay: '2100ms' }} />
                  <circle cx="90" cy="50" r="4" fill="#F59E0B" className="animate-pulse" style={{ animationDelay: '2400ms' }} />
                  
                  {/* Subtle connecting lines */}
                  <path d="M20 50 L35 35 L55 25 L75 35 L90 50 L75 65 L55 75 L35 65 Z M35 35 L55 50 L75 35 M35 65 L55 50 L75 65" stroke="#F59E0B" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
                Meet Kira.
              </h2>
            </div>

            <h3 className="text-2xl md:text-3xl font-medium text-white mb-6 leading-snug">
              Most tools wait for you to ask for help. <span className="text-[#F59E0B]">Kira does not.</span>
            </h3>
            
            <p className="text-[#8B9BB4] text-lg leading-relaxed mb-8">
              Kira is your Career Coach inside CoreCV. She watches your vault, your applications, your content, and your pipeline — and tells you exactly what to do next before you have to ask.
            </p>

            <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 border border-[#F59E0B]/20 px-5 py-2.5 rounded-full">
              <Sparkles size={16} className="text-[#F59E0B]" />
              <span className="text-sm font-bold text-[#F59E0B] uppercase tracking-widest">Included in Pro</span>
            </div>
          </div>

          {/* Right Column: The "Watching" Features */}
          <div className="w-full lg:w-7/12 flex flex-col gap-6 relative">
            
            {/* Card 1 */}
            <motion.div 
              style={{ x: x1, rotate: rotate1, opacity: opacity1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group hover:border-[#F59E0B]/40 transition-colors duration-300 transform-gpu origin-right"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_12px_#F59E0B]" />
              <p className="text-[#8B9BB4] text-lg leading-relaxed mb-5">
                Your Storefront has been viewed 6 times this week but your skills have no proof attached.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <span className="text-white font-bold tracking-wide">Kira flags it.</span>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              style={{ x: x2, rotate: rotate2, opacity: opacity2 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group hover:border-[#F59E0B]/40 transition-colors duration-300 transform-gpu origin-right"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_12px_#F59E0B]" />
              <p className="text-[#8B9BB4] text-lg leading-relaxed mb-5">
                You have an interview in 2 days and have not run a single practice session.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <span className="text-white font-bold tracking-wide">Kira reminds you.</span>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              style={{ x: x3, rotate: rotate3, opacity: opacity3 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group hover:border-[#F59E0B]/40 transition-colors duration-300 transform-gpu origin-right"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_12px_#F59E0B]" />
              <p className="text-[#8B9BB4] text-lg leading-relaxed mb-5">
                You have not posted in 14 days and your visibility score is dropping.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <span className="text-white font-bold tracking-wide">Kira tells you.</span>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Centered Disclaimer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.8 }}
          className="mt-20 max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center gap-4 text-center"
        >
          <div className="w-10 h-10 rounded-full bg-[#F59E0B]/10 flex items-center justify-center shrink-0">
            <ArrowRight size={20} className="text-[#F59E0B]" />
          </div>
          <p className="text-[#8B9BB4] text-lg md:text-xl leading-relaxed">
            <strong className="text-white font-medium">Not generic advice. Not motivational nudges.</strong> Specific, data-driven recommendations based on your actual career state — right now.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
};
