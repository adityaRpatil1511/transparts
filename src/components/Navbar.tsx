'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PhoneCall, Menu, X, ChevronRight, ShieldCheck, Wrench } from 'lucide-react';
import Logo from './Logo';
import QuoteModal from './QuoteModal';

const NAV_LINKS = [
  { href: '/',        label: 'Home' },
  { href: '/catalog', label: 'Machining Capabilities' },
  { href: '/about',   label: 'About & Infrastructure' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen]   = useState(false);
  const [scrolled, setScrolled]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsMobileOpen(false); }, [pathname]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          boxShadow: scrolled ? '0 2px 20px rgba(0,60,100,0.10)' : 'none',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        {/* ── Top Bar (blue strip) ── */}
        <div className="topbar">
          <div
            className="container"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', color: 'rgba(255,255,255,0.9)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <ShieldCheck size={13} strokeWidth={2.2} />
                GSTIN: 27DNUPP9825G1Z3
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <Wrench size={13} strokeWidth={2.2} />
                Vasuli, Pune Machining Unit
              </span>
            </div>
            <a
              href="tel:+919892320872"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                color: '#FFFFFF', fontWeight: '600', fontSize: '0.78rem', letterSpacing: '0.01em',
              }}
            >
              <PhoneCall size={12} strokeWidth={2.2} />
              +91 98923 20872 / 97244 19227
            </a>
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
            }}
          >
            {/* Logo — unchanged */}
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}>
              <Logo height={36} showTagline={false} variant="dark" />
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
              <button
                className="btn-primary"
                onClick={() => setIsQuoteOpen(true)}
                style={{ padding: '0.58rem 1.2rem', fontSize: '0.86rem' }}
              >
                Request RFQ / Quote <ChevronRight size={15} />
              </button>

              {/* Mobile toggle */}
              <button
                className="mobile-toggle"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label="Toggle menu"
                style={{
                  display: 'none',
                  background: 'var(--primary-bg)',
                  border: '1.5px solid var(--border-blue)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--primary)',
                  width: '40px', height: '40px',
                  cursor: 'pointer',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s',
                }}
              >
                {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
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
                        padding: '0.85rem 0.5rem',
                        color: isActive ? 'var(--primary)' : 'var(--text-body)',
                        fontWeight: isActive ? '600' : '500',
                        fontSize: '0.95rem',
                        borderBottom: '1px solid var(--border)',
                      }}
                    >
                      {label}
                    </Link>
                  );
                })}
                <button
                  className="btn-primary"
                  onClick={() => { setIsQuoteOpen(true); setIsMobileOpen(false); }}
                  style={{ marginTop: '1rem', width: '100%', justifyContent: 'center', padding: '0.8rem' }}
                >
                  Request RFQ / Quote <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
