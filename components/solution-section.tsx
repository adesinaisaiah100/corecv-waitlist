import React from "react";
import { Database, FileText, CheckCircle2 } from "lucide-react";

export const SolutionSection = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Copy */}
          <div>
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 inline-block">
              The solution
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Build your vault once.<br />
              Use it everywhere, forever.
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                CoreCV starts with your Master Vault — a structured store of your complete
                career history. Experiences. Projects. Education. Certifications. Achievements.
              </p>
              <p>
                You build it once. Every resume, cover letter, STAR story, TikTok script, and
                Instagram post CoreCV generates comes from this vault — never from imagination,
                never from a template someone else filled in.
              </p>
              <p>
                The longer you use CoreCV, the smarter it gets. Your vault is not a document.
                It is a system that works harder every time you update it.
              </p>
              <p className="font-medium text-gray-900 text-xl">
                And everything it generates is true. Because it all comes from you.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Mockup */}
          <div className="relative">
            {/* Visual Placeholder for Vault UI */}
            <div className="w-full bg-gray-50 rounded-3xl border border-gray-200 shadow-xl overflow-hidden p-6 md:p-8">
              {/* Fake UI Header */}
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <Database size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Master Vault</h3>
                  <p className="text-sm text-gray-500">Structured Career Data</p>
                </div>
              </div>

              {/* Fake UI Items */}
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-xs flex gap-4 items-start">
                  <FileText className="text-blue-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Senior Frontend Engineer</h4>
                    <p className="text-xs text-gray-500 mb-2">TechCorp Inc. • 2021 - Present</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] rounded-md font-medium">React</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] rounded-md font-medium">TypeScript</span>
                    </div>
                  </div>
                  <CheckCircle2 className="text-green-500 ml-auto" size={18} />
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-xs flex gap-4 items-start">
                  <FileText className="text-blue-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Led Migration to Next.js</h4>
                    <p className="text-xs text-gray-500 mb-2">Key Project • Increased performance by 40%</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] rounded-md font-medium">Performance</span>
                    </div>
                  </div>
                  <CheckCircle2 className="text-green-500 ml-auto" size={18} />
                </div>
              </div>
            </div>

            {/* Visual Caption */}
            <p className="text-center text-sm text-gray-500 mt-6 italic">
              Your career, structured. Nothing invented. Nothing repeated.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
