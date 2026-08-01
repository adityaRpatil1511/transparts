import Link from 'next/link';
import { Mail, Phone, MapPin, Shield, Zap, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const NAV_LINKS = [
  { href: '/',        label: 'Home' },
  { href: '/catalog', label: 'Machining Capabilities' },
  { href: '/about',   label: 'About & Infrastructure' },
  { href: '/contact', label: 'Contact Us' },
];

const SERVICES = [
  'CNC Shaft & Spindle Turning',
  'Horizontal Precision Honing',
  'Gear Blank & Flange Machining',
  'Custom OEM Prototype Machining',
  'Batch Production & Quality QA',
  'High-Torque Powertrain Parts',
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--primary)', marginTop: '5rem' }}>

      {/* ── CTA Strip ── */}
      <div style={{ background: 'rgba(0,0,0,0.15)', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', textAlign: 'center' }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <Zap size={15} color="#FFFFFF" />
          </div>
          <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '0.88rem', lineHeight: 1.4 }}>
            <strong style={{ color: '#FFFFFF' }}>Precision Machined Components & Assemblies</strong> — Manufactured at Vasuli Industrial Zone, Pune.
          </p>
        </div>
      </div>

      {/* ── Footer Body ── */}
      <div className="container" style={{ padding: '3rem 1.5rem 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.5rem',
          marginBottom: '2.5rem',
        }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <Logo height={42} showTagline={false} variant="light" />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.865rem', lineHeight: 1.65, marginBottom: '1.25rem', maxWidth: '270px' }}>
              Emerging precision machining startup specializing in high-tolerance CNC turning, honing, and custom transport component manufacturing in Pune.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="badge-tag badge-white"><Shield size={11} /> GST: 27DNUPP9825G1Z3</span>
              <span className="badge-tag badge-white">100% Inspected</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.1rem', fontFamily: 'var(--font-main)' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="footer-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.1rem', fontFamily: 'var(--font-main)' }}>
              Capabilities
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {SERVICES.map((p) => (
                <li key={p} style={{ color: 'rgba(255,255,255,0.68)', fontSize: '0.875rem' }}>{p}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.78rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.1rem', fontFamily: 'var(--font-main)' }}>
              Manufacturing Works
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem', lineHeight: 1.5 }}>
                <MapPin size={15} color="rgba(255,255,255,0.9)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Gala No-2, Gate No-50, Village-Vasuli,<br />Dist-Pune, Maharashtra - 410501</span>
              </div>
              <a href="tel:+919892320872"
                style={{ display: 'flex', gap: '0.65rem', alignItems: 'center', color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem' }}>
                <Phone size={15} color="rgba(255,255,255,0.9)" style={{ flexShrink: 0 }} />
                +91 9892320872 / 9724419227
              </a>
              <a href="mailto:Transparts0125@gmail.com"
                style={{ display: 'flex', gap: '0.65rem', alignItems: 'center', color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem' }}>
                <Mail size={15} color="rgba(255,255,255,0.9)" style={{ flexShrink: 0 }} />
                Transparts0125@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.15)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '0.75rem',
          fontSize: '0.8rem',
          color: 'rgba(255,255,255,0.55)',
        }}>
          <span>© {new Date().getFullYear()} TransParts Precision Machined Parts. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {['Quality Policy', 'Terms of Supply', 'GST & Works Info'].map((item) => (
              <span key={item} style={{ cursor: 'pointer', transition: 'color 0.2s' }}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
