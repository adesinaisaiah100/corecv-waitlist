import React from 'react';

/**
 * A beautiful, animated fluid mesh gradient using CoreCV brand colors.
 * Designed to be placed inside a relative container to act as a background.
 * Requires the parent container to have `relative` and `overflow-hidden`.
 */
export const BrandMesh = () => {
  return (
    <>
      {/* Base Canvas */}
      <div className="absolute inset-0 bg-[#1E3A5F]"></div>
      
      {/* Constellation Blobs */}
      <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-[#10B981] rounded-full mix-blend-screen filter blur-[80px] opacity-30 animate-blob"></div>
      
      <div className="absolute top-[60%] right-[10%] w-[400px] h-[400px] bg-[#60A5FA] rounded-full mix-blend-screen filter blur-[90px] opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="absolute bottom-[10%] left-[40%] w-[350px] h-[350px] bg-[#D1D5DB] rounded-full mix-blend-overlay filter blur-[80px] opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="absolute top-[30%] right-[30%] w-[250px] h-[250px] bg-[#10B981] rounded-full mix-blend-screen filter blur-[70px] opacity-25 animate-blob"></div>
      
      {/* Bottom fade overlay to ensure text readability if placed at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/90 via-transparent to-transparent z-0 pointer-events-none"></div>
    </>
  );
};
