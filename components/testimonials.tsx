"use client";

import React from "react";
import { UserCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const Testimonials = () => {
  return (
    <section className="w-full bg-[#FAFAFA] py-32 overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] tracking-tight" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
            From the people using it
          </h2>
          <p className="text-gray-500 mt-4 text-lg">Real results from the CoreCV private beta.</p>
        </div>

        {/* The Fan Container */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative flex justify-center items-center h-[550px] w-full max-w-4xl mx-auto"
        >
          
          {/* Card 1 (Left Wing of Fan) */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, rotate: 0, y: 150 },
              show: { opacity: 1, rotate: -12, x: "-50%", y: 40, transition: { type: "spring", bounce: 0.4, duration: 1.5 } }
            }}
            style={{ transformOrigin: "bottom center" }}
            className="absolute w-[90%] max-w-[340px] bg-white rounded-3xl p-8 border border-gray-200 shadow-xl flex flex-col z-10 hover:z-40 hover:scale-105 transition-all duration-300"
          >
            <div className="mb-6 flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed mb-8 grow italic text-base">
              "I had been applying for three months with no results. I added the
              LinkedIn post generator and started posting twice a week from my vault.
              A recruiter reached out after my second post. I didn't even apply to that company."
            </p>
            <div className="flex flex-col gap-4">
              <div className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-lg inline-block self-start">
                Recruiter DM within 2 weeks
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Babatunde O." className="w-10 h-10 rounded-full border border-gray-200 object-cover shrink-0" />
                <div>
                  <p className="font-bold text-gray-900 text-sm">Babatunde O.</p>
                  <p className="text-xs text-gray-500">Software Engineer</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 (Right Wing of Fan) */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, rotate: 0, y: 150 },
              show: { opacity: 1, rotate: 12, x: "50%", y: 40, transition: { type: "spring", bounce: 0.4, duration: 1.5, delay: 0.1 } }
            }}
            style={{ transformOrigin: "bottom center" }}
            className="absolute w-[90%] max-w-[340px] bg-white rounded-3xl p-8 border border-gray-200 shadow-xl flex flex-col z-20 hover:z-40 hover:scale-105 transition-all duration-300"
          >
            <div className="mb-6 flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed mb-8 grow italic text-base">
              "I generated my public storefront link, put it in my Twitter bio, 
              and literally forgot about it. Three weeks later, a VP of Sales 
              found it on Google and booked time on my calendar. The system works while you sleep."
            </p>
            <div className="flex flex-col gap-4">
              <div className="bg-[#10B981]/10 text-[#10B981] text-xs font-bold px-3 py-1.5 rounded-lg inline-block self-start">
                Inbound job offer via Storefront
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah K." className="w-10 h-10 rounded-full border border-gray-200 object-cover shrink-0" />
                <div>
                  <p className="font-bold text-gray-900 text-sm">Sarah K.</p>
                  <p className="text-xs text-gray-500">Sales Director</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 (Center of Fan) */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, rotate: 0, y: 150 },
              show: { opacity: 1, rotate: 0, x: 0, y: -20, transition: { type: "spring", bounce: 0.4, duration: 1.5, delay: 0.2 } }
            }}
            style={{ transformOrigin: "bottom center" }}
            className="absolute w-[90%] max-w-[340px] bg-white rounded-3xl p-8 border border-gray-200 shadow-2xl flex flex-col z-30 hover:z-40 hover:scale-105 transition-all duration-300"
          >
            <div className="mb-6 flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed mb-8 grow italic text-base">
              "I built my vault in about 10 minutes and the first resume it generated
              was better than anything I had written manually in the last six months.
              The STAR stories actually surprised me — I had forgotten I had done half this stuff."
            </p>
            <div className="flex flex-col gap-4">
              <div className="bg-[#F59E0B]/10 text-[#F59E0B] text-xs font-bold px-3 py-1.5 rounded-lg inline-block self-start">
                2 interviews in the first week
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="David G." className="w-10 h-10 rounded-full border border-gray-200 object-cover shrink-0" />
                <div>
                  <p className="font-bold text-gray-900 text-sm">David G.</p>
                  <p className="text-xs text-gray-500">Product Designer</p>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};
