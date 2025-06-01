import React from 'react';

const HulyBackgroundCSS = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    {/* Base gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a1a] to-[#101a2b]" />

    {/* Glowing vertical beam */}
    <svg
      className="absolute left-1/2 top-0 -translate-x-1/2"
      width="100%"
      height="100%"
      viewBox="0 0 1200 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ pointerEvents: 'none' }}
    >
      <defs>
        <radialGradient id="beam-glow" cx="50%" cy="100%" r="100%" fx="50%" fy="100%">
          <stop offset="0%" stopColor="#a6bfff" stopOpacity="0.7" />
          <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="beam" x1="600" y1="0" x2="600" y2="900" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e0e7ff" stopOpacity="0.8" />
          <stop offset="0.5" stopColor="#60a5fa" stopOpacity="0.3" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Main vertical beam */}
      <rect x="570" y="0" width="60" height="900" fill="url(#beam)" filter="url(#blur)" />
      {/* Glow at the bottom */}
      <ellipse cx="600" cy="900" rx="350" ry="80" fill="url(#beam-glow)" />
    </svg>

    {/* Subtle fog/blur overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#3b82f6]/30 via-transparent to-transparent blur-2xl" />
  </div>
);

export default HulyBackgroundCSS; 