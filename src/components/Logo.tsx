import React from 'react';
import logoImg from '../../public/images/logo.png';

interface LogoProps {
  height?: number;
  showTagline?: boolean;
  variant?: 'dark' | 'light';
  className?: string;
}

export default function Logo({ height = 56, variant = 'dark', className = '' }: LogoProps) {
  // If placed on dark background (variant="light"), add subtle light container for high contrast
  const isLightVariant = variant === 'light';

  return (
    <div
      className={`logo-wrapper ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: isLightVariant ? '#FFFFFF' : 'transparent',
        padding: isLightVariant ? '6px 12px' : '0',
        borderRadius: isLightVariant ? '6px' : '0',
        boxShadow: isLightVariant ? '0 2px 8px rgba(0,0,0,0.15)' : 'none',
        flexShrink: 0,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoImg.src}
        alt="TransParts - Precision Machined Parts"
        className="logo-img"
        style={{
          height: `${height}px`,
          width: 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
          display: 'block',
          mixBlendMode: isLightVariant ? 'normal' : 'multiply',
        }}
      />
    </div>
  );
}



