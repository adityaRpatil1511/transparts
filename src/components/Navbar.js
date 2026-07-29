'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Truck, ShieldCheck, Menu, X, PhoneCall, ChevronRight } from 'lucide-react';
import QuoteModal from './QuoteModal';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <header className="glass-nav" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
        {/* Top Info Bar */}
        <div style={{ background: 'rgba(255, 107, 0, 0.08)', borderBottom: '1px solid var(--border-color)', fontSize: '0.8rem', padding: '0.4rem 0' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-muted)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <ShieldCheck size={14} color="#00F0FF" /> ISO 9001:2015 Certified Supplier
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <Truck size={14} color="#FF6B00" /> Worldwide Express Dispatch
              </span>
            </div>
            <div style={{ color: 'var(--text-muted)' }}>
              <a href="tel:+18005557278" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#FF8833', fontWeight: '500' }}>
                <PhoneCall size={13} /> +1 (800) 555-PARTS
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '8px', 
              background: 'linear-gradient(135deg, #FF6B00 0%, #B34400 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(255, 107, 0, 0.4)'
            }}>
              <Truck size={22} color="#FFF" />
            </div>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: '800', letterSpacing: '-0.03em', color: '#FFF', lineHeight: '1' }}>
                TRANS<span style={{ color: 'var(--primary-amber)' }}>PARTS</span>
              </div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '2px' }}>
                Heavy Duty Technologies
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-links">
            <Link href="/" style={{ color: 'var(--text-main)', fontWeight: '500', transition: 'color 0.2s' }}>
              Home
            </Link>
            <Link href="/catalog" style={{ color: 'var(--text-muted)', fontWeight: '500', transition: 'color 0.2s' }}>
              Parts Catalog
            </Link>
            <Link href="/about" style={{ color: 'var(--text-muted)', fontWeight: '500', transition: 'color 0.2s' }}>
              About Us
            </Link>
            <Link href="/contact" style={{ color: 'var(--text-muted)', fontWeight: '500', transition: 'color 0.2s' }}>
              Contact
            </Link>
          </nav>

          {/* Action Button */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button className="btn-primary" onClick={() => setIsQuoteOpen(true)}>
              Request Quote <ChevronRight size={16} />
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              style={{ background: 'none', border: 'none', color: '#FFF', cursor: 'pointer', display: 'none' }}
              className="mobile-toggle"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
