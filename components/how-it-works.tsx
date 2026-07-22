"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full bg-[#F3F4F6] py-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
            One Vault. Infinite Output.
          </h2>
          <p className="mt-4 text-xl text-gray-600">The entire system is powered by your professional evidence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Step 1: The Vault */}
          <motion.div 
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            style={{ transformOrigin: "top center" }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xs flex flex-col"
          >
            <span className="text-5xl font-black text-blue-600 mb-6">01</span>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Build Your Master Vault</h3>
            <p className="text-gray-600 leading-relaxed">
              Upload your old resumes or chat with our AI Interview Agent to extract your career history. CoreCV converts your chaotic past into structured Evidence Cards and STAR Stories. You only do this once.
            </p>
          </motion.div>

          {/* Step 2: The Application Journey */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xs flex flex-col"
          >
            <span className="text-5xl font-black text-blue-600 mb-6">02</span>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Conquer The Application Journey</h3>
            <p className="text-gray-600 leading-relaxed">
              Found a job? Paste the URL. Our Fit Assessment identifies exactly where you fall short. Then, generate a flawlessly tailored resume, a matching cover letter, and a custom interview prep guide.
            </p>
          </motion.div>

          {/* Step 3: Presence */}
          <motion.div 
            animate={{ rotate: [2, -2, 2] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            style={{ transformOrigin: "top center" }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xs flex flex-col"
          >
            <span className="text-5xl font-black text-blue-600 mb-6">03</span>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Automate Your Presence</h3>
            <p className="text-gray-600 leading-relaxed">
              Don't want to apply? Turn on the Content Engine to automatically draft LinkedIn posts from your Vault evidence. Publish your public Storefront so opportunities find you while you sleep.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/login" 
            className="inline-block px-8 py-4 bg-[#1E3A5F] hover:bg-[#1E3A5F]/90 text-white font-medium rounded-full transition-colors text-lg shadow-lg hover:shadow-xl"
          >
            Start Building Your Vault — <span className="font-normal opacity-90">Free Forever.</span>
          </Link>
        </div>

      </motion.div>
    </section>
  );
}
