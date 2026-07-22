"use client";

import React, { useEffect, useState } from "react";

const fonts = [
  { name: "Nunito (Current)", var: "var(--font-nunito)" },
  { name: "Plus Jakarta Sans", var: "var(--font-jakarta)" },
  { name: "Outfit", var: "var(--font-outfit)" },
  { name: "Space Grotesk", var: "var(--font-space)" },
];

export const FontTester = () => {
  const [activeFont, setActiveFont] = useState(fonts[0].var);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    document.documentElement.style.setProperty("--hero-font", activeFont);
  }, [activeFont]);

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-[9999] bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium shadow-xl"
      >
        Open Font Tester
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 left-4 z-[9999] bg-white p-4 rounded-xl shadow-2xl border border-gray-200 flex flex-col gap-2 w-64">
      <div className="flex justify-between items-center mb-1">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Test Headline Fonts</p>
        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">✕</button>
      </div>
      {fonts.map((f) => (
        <button
          key={f.name}
          onClick={() => setActiveFont(f.var)}
          style={{ fontFamily: f.var }}
          className={`px-4 py-3 text-sm rounded-md text-left transition-colors ${
            activeFont === f.var ? "bg-blue-600 text-white font-medium shadow-md" : "bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200"
          }`}
        >
          {f.name}
        </button>
      ))}
    </div>
  );
};
