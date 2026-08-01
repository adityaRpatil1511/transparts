'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PhoneCall, Mail, Menu, X, ChevronRight, ShieldCheck, Wrench } from 'lucide-react';
import Logo from './Logo';

const NAV_LINKS = [
  { href: '/',        label: 'Home' },
  { href: '/catalog', label: 'Machining Capabilities' },
  { href: '/about',   label: 'About & Infrastructure' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsMobileOpen(false); }, [pathname]);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        boxShadow: scrolled ? '0 4px 24px rgba(0,60,100,0.12)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {/* ── Top Bar (blue strip) ── */}
      <div className="topbar">
        <div
          className="container"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}
        >
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', color: 'rgba(255,255,255,0.95)' }}>
            <span className="topbar-gst" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <ShieldCheck size={14} strokeWidth={2.2} />
              GSTIN: 27DNUPP9825G1Z3
            </span>
            <span className="topbar-unit" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Wrench size={14} strokeWidth={2.2} />
              Vasuli, Pune Unit
            </span>
          </div>

          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }} className="topbar-contact-group">
            <a
              href="mailto:Transparts0125@gmail.com"
              className="topbar-email"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                color: '#FFFFFF', fontWeight: '500', fontSize: '0.8rem',
              }}
            >
              <Mail size={13} strokeWidth={2.2} />
              Transparts0125@gmail.com
            </a>
            <a
              href="tel:+919892320872"
              className="topbar-phone"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                color: '#FFFFFF', fontWeight: '600', fontSize: '0.82rem',
              }}
            >
              <PhoneCall size={13} strokeWidth={2.2} />
              +91 98923 20872
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <div className="glass-nav">
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 'var(--nav-height)',
            gap: '1.5rem',
          }}
        >
          {/* Prominent Logo */}
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0, padding: '4px 0' }}>
            <Logo height={58} showTagline={false} variant="dark" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="desktop-links" style={{ display: 'flex', gap: '2.25rem', alignItems: 'center' }}>
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
              return (
                <Link key={href} href={href} className={`nav-link${isActive ? ' active' : ''}`}>
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Mobile toggle button (controlled by CSS @media queries) */}
            <button
              className="mobile-toggle"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle navigation menu"
              style={{
                background: 'var(--primary-bg)',
                border: '1.5px solid var(--border-blue)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--primary)',
                width: '44px', height: '44px',
                cursor: 'pointer',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s',
                flexShrink: 0,
              }}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        {isMobileOpen && (
          <div
            className="mobile-menu"
            style={{
              borderTop: '1px solid var(--border)',
              background: 'var(--bg-white)',
              padding: '0.75rem 0 1.25rem',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            }}
          >
            <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {NAV_LINKS.map(({ href, label }) => {
                const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    style={{
                      display: 'block',
                      padding: '0.95rem 0.5rem',
                      color: isActive ? 'var(--primary)' : 'var(--text-heading)',
                      fontWeight: isActive ? '700' : '600',
                      fontSize: '1.05rem',
                      borderBottom: '1px solid var(--border)',
                    }}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

