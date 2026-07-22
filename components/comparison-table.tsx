import React from "react";
import { Check, X } from "lucide-react";

export const ComparisonTable = () => {
  const features = [
    { name: "Persistent career vault (no re-entering data)", corecv: true, teal: false, kickresume: false, resumeio: false },
    { name: "AI resume tailoring from real data", corecv: true, teal: true, kickresume: true, resumeio: true },
    { name: "STAR interview stories from your experience", corecv: true, teal: false, kickresume: false, resumeio: false },
    { name: "Live AI mock interview", corecv: true, teal: false, kickresume: false, resumeio: false },
    { name: "LinkedIn post generator from vault", corecv: true, teal: false, kickresume: false, resumeio: false },
    { name: "TikTok & Instagram scripts from career data", corecv: true, teal: false, kickresume: false, resumeio: false },
    { name: "Public Storefront Profile (Google-indexed)", corecv: true, teal: false, kickresume: false, resumeio: false },
    { name: "Application tracker", corecv: true, teal: true, kickresume: false, resumeio: false },
  ];

  return (
    <section className="w-full bg-[#FAFAFA] py-24 border-y border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-[#10B981] font-semibold tracking-wider uppercase text-sm mb-4 inline-block">
            Why CoreCV
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] tracking-tight leading-tight" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
            Every other tool does part of this.<br className="hidden md:block" />
            CoreCV is the only one that does all of it.
          </h2>
        </div>

        <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="py-5 px-6 font-semibold text-gray-900 w-2/5">Feature</th>
                  <th className="py-5 px-6 font-bold text-[#1E3A5F] text-center border-l border-r border-gray-200 bg-blue-50/50">CoreCV</th>
                  <th className="py-5 px-6 font-medium text-gray-500 text-center">Teal</th>
                  <th className="py-5 px-6 font-medium text-gray-500 text-center">Kickresume</th>
                  <th className="py-5 px-6 font-medium text-gray-500 text-center">Resume.io</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {features.map((feature, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-6 text-gray-700 font-medium">{feature.name}</td>
                    
                    <td className="py-4 px-6 text-center border-l border-r border-gray-200 bg-blue-50/20">
                      {feature.corecv ? <Check className="inline text-[#10B981]" size={24} strokeWidth={3} /> : <X className="inline text-red-400" size={24} strokeWidth={2} />}
                    </td>
                    
                    <td className="py-4 px-6 text-center">
                      {feature.teal ? <Check className="inline text-gray-400" size={24} strokeWidth={2} /> : <X className="inline text-gray-200" size={24} strokeWidth={2} />}
                    </td>
                    
                    <td className="py-4 px-6 text-center">
                      {feature.kickresume ? <Check className="inline text-gray-400" size={24} strokeWidth={2} /> : <X className="inline text-gray-200" size={24} strokeWidth={2} />}
                    </td>
                    
                    <td className="py-4 px-6 text-center">
                      {feature.resumeio ? <Check className="inline text-gray-400" size={24} strokeWidth={2} /> : <X className="inline text-gray-200" size={24} strokeWidth={2} />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-xl font-medium text-[#1E3A5F] mb-4">
            Other tools make resumes. CoreCV makes you visible.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The vault is the difference. It remembers you so you never start from scratch.
            And the content layer is ours alone — no other career platform generates
            your personal brand and Google-indexed storefront from your real career history.
          </p>
        </div>

      </div>
    </section>
  );
};
