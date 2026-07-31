import React from 'react';

interface LogoProps {
  height?: number;
  showTagline?: boolean;
  variant?: 'dark' | 'light';
}

export default function Logo({ height = 44, showTagline = true, variant = 'dark' }: LogoProps) {
  // Trans color: Steel Blue (#0284C7 / #0A669D)
  // Parts color: Slate Dark (#334155 or #E2E8F0 if variant is light)
  // Subtitle color: #64748B or #94A3B8
  const transColor = '#0077A8';
  const partsColor = variant === 'light' ? '#F8FAFC' : '#3A4556';
  const taglineColor = variant === 'light' ? '#94A3B8' : '#64748B';

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', userSelect: 'none' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', position: 'relative', height: `${height}px` }}>
        {/* SVG for Logo text & Cog gear overlay above the 'P' */}
        <svg
          height={height}
          viewBox="0 0 320 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: `${height}px`, width: 'auto' }}
        >
          {/* Cog Wheel above the P (P starts at roughly X=162) */}
          <g transform="translate(164, 4)">
            <path
              d="M 12 18 
                 A 14 14 0 0 1 44 18 
                 L 41 20 
                 A 11 11 0 0 0 15 20 Z"
              fill={transColor}
            />
            {/* Gear teeth around top arc */}
            {/* Tooth 1 (-60 deg) */}
            <rect x="26" y="2" width="4" height="6" rx="1" fill={transColor} transform="rotate(-60 28 18)" />
            {/* Tooth 2 (-35 deg) */}
            <rect x="26" y="2" width="4" height="6" rx="1" fill={transColor} transform="rotate(-35 28 18)" />
            {/* Tooth 3 (-10 deg) */}
            <rect x="26" y="2" width="4" height="6" rx="1" fill={transColor} transform="rotate(-10 28 18)" />
            {/* Tooth 4 (15 deg) */}
            <rect x="26" y="2" width="4" height="6" rx="1" fill={transColor} transform="rotate(15 28 18)" />
            {/* Tooth 5 (40 deg) */}
            <rect x="26" y="2" width="4" height="6" rx="1" fill={transColor} transform="rotate(40 28 18)" />
            {/* Tooth 6 (65 deg) */}
            <rect x="26" y="2" width="4" height="6" rx="1" fill={transColor} transform="rotate(65 28 18)" />
          </g>

          {/* "Trans" in Steel Blue */}
          <text
            x="0"
            y="54"
            fill={transColor}
            fontFamily="'Space Grotesk', 'Inter', sans-serif"
            fontWeight="700"
            fontSize="46"
            letterSpacing="-0.03em"
          >
            Trans
          </text>

          {/* "Parts" in Dark Slate / Charcoal */}
          <text
            x="142"
            y="54"
            fill={partsColor}
            fontFamily="'Space Grotesk', 'Inter', sans-serif"
            fontWeight="700"
            fontSize="46"
            letterSpacing="-0.02em"
          >
            Parts
          </text>
        </svg>
      </div>

      {showTagline && (
        <div
          style={{
            fontSize: `${Math.max(10, height * 0.22)}px`,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            letterSpacing: '0.18em',
            color: taglineColor,
            textTransform: 'uppercase',
            marginTop: '-2px',
            paddingLeft: '2px'
          }}
        >
          PRECISION MACHINED PARTS
        </div>
      )}
    </div>
  );
}
