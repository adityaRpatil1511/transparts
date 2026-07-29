import Link from 'next/link';
import { Truck, Mail, Phone, MapPin, Shield, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: '#05070B', borderTop: '1px solid var(--border-color)', paddingTop: '4rem', paddingBottom: '2rem', marginTop: '5rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem', marginBottom: '3.5rem' }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ 
                width: '36px', 
                height: '36px', 
                borderRadius: '8px', 
                background: 'linear-gradient(135deg, #FF6B00 0%, #B34400 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Truck size={20} color="#FFF" />
              </div>
              <span style={{ fontSize: '1.3rem', fontWeight: '800', color: '#FFF' }}>
                TRANS<span style={{ color: 'var(--primary-amber)' }}>PARTS</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              Global tier-1 distributor of heavy-duty transport, industrial transmission, and powertrain components engineered for peak performance and extreme durability.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span className="badge-tag badge-cyan">
                <Shield size={12} /> OEM Certified
              </span>
              <span className="badge-tag badge-amber">ISO 9001:2015</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1.05rem', marginBottom: '1.25rem', fontWeight: '600' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li>
                <Link href="/" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>Home Overview</Link>
              </li>
              <li>
                <Link href="/catalog" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>Full Parts Catalog</Link>
              </li>
              <li>
                <Link href="/about" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>About Transparts</Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}>Request Bulk Quote</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1.05rem', marginBottom: '1.25rem', fontWeight: '600' }}>Product Range</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <li>Powertrain & Gearboxes</li>
              <li>High-Pressure Hydraulics</li>
              <li>Air Disc Brake Systems</li>
              <li>Heavy Duty Twin Turbochargers</li>
              <li>Planetary Hub Assemblies</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1.05rem', marginBottom: '1.25rem', fontWeight: '600' }}>Global Headquarters</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={18} color="#FF6B00" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>100 Transparts Logistics Boulevard, Detroit, MI 48201, USA</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Phone size={18} color="#00F0FF" style={{ flexShrink: 0 }} />
                <span>+1 (800) 555-PARTS / +1 (313) 555-0199</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Mail size={18} color="#00E676" style={{ flexShrink: 0 }} />
                <span>orders@transparts-global.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div style={{ 
          borderTop: '1px solid var(--border-color)', 
          paddingTop: '1.5rem', 
          display: 'flex', 
          flexWrap: 'wrap',
          justifyContent: 'space-between', 
          alignItems: 'center', 
          fontSize: '0.85rem', 
          color: 'var(--text-dim)' 
        }}>
          <div>
            © {new Date().getFullYear()} Transparts Heavy Duty Technologies Inc. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Supply</span>
            <span>OEM Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
