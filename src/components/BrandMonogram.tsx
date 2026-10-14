import React from 'react';

interface BrandMonogramProps {
  size?: number;
  animated?: boolean;
  className?: string;
}

export const BrandMonogram: React.FC<BrandMonogramProps> = ({ 
  size = 40, 
  animated = false,
  className = "" 
}) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-label="Sarathi R Brand Monogram"
    >
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        <defs>
          <linearGradient id="petrolBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00A3C4" />
            <stop offset="100%" stopColor="#0A232C" />
          </linearGradient>
          <filter id="monogramBlueGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="2.5" floodColor="#00A3C4" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Outer subtle geometric boundary in architectural ice/mist */}
        <rect
          x="3"
          y="3"
          width="58"
          height="58"
          rx="16"
          fill="#FFFFFF"
          stroke="#D5E5EB"
          strokeWidth="1.5"
        />

        {/* Orbiting dashed ring */}
        <circle
          cx="32"
          cy="32"
          r="22"
          stroke="url(#petrolBlueGrad)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.45"
          className={animated ? "animate-spin-slow origin-center" : ""}
        />

        {/* Geometric S Monogram / Neural Arc */}
        <path
          d="M 40 21 C 39 16 34.5 14 29.5 14 C 23 14 18 19 18 26 C 18 34.5 46 32 46 41.5 C 46 48.5 40.5 52 32.5 52 C 24 52 19.5 47.5 19 43"
          stroke="url(#petrolBlueGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#monogramBlueGlow)"
        />

        {/* AI Circuit Connected Nodes in Electric Blue & Petrol */}
        <circle cx="29.5" cy="14" r="2.8" fill="#00A3C4" />
        <circle cx="32" cy="33.5" r="2.8" fill="#0A232C" />
        <circle cx="32.5" cy="52" r="2.8" fill="#00A3C4" />
        <circle cx="44" cy="24" r="1.8" fill="#00A3C4" opacity="0.85" />
        <circle cx="20" cy="40" r="1.8" fill="#0A232C" opacity="0.85" />
      </svg>
    </div>
  );
};
