import React from "react";

export const SocialProofBar = () => {
  return (
    <section className="w-full bg-[#FAFAFA] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">46%</span>
            <p className="text-gray-700 font-medium mb-2 text-lg">
              of Gen Z has secured a job through TikTok.
            </p>
            <p className="text-xs text-gray-400 mt-auto">
              Source: Zety 2025 Gen Z Career Trends Report
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">76%</span>
            <p className="text-gray-700 font-medium mb-2 text-lg">
              use Instagram for career content — over twice the rate of LinkedIn.
            </p>
            <p className="text-xs text-gray-400 mt-auto">
              Source: Zety 2025 Gen Z Career Trends Report
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-5xl md:text-6xl font-bold text-blue-600 mb-4">78%</span>
            <p className="text-gray-700 font-medium mb-2 text-lg">
              of employers check your social media before they decide.
            </p>
            <p className="text-xs text-gray-400 mt-auto">
              Source: Zety 2025 Gen Z Career Trends Report
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
