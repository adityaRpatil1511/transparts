import { ShieldCheck, Globe, Truck, Award, CheckCircle, Factory, Users } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
          <span className="badge-tag badge-amber" style={{ marginBottom: '0.75rem' }}>About Transparts Heavy Duty</span>
          <h1 className="gradient-text" style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>
            Powering Global Logistics & Fleet Reliability
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Founded to eliminate fleet downtime, Transparts is a premier tier-1 engineering distributor of heavy-duty transport gearboxes, hydraulic systems, and industrial powertrain components.
          </p>
        </div>

        {/* Global Network Section */}
        <div className="glass-card" style={{ padding: '3rem', marginBottom: '4rem', background: 'linear-gradient(135deg, rgba(15, 19, 28, 0.9) 0%, rgba(22, 29, 42, 0.6) 100%)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="badge-tag badge-cyan" style={{ marginBottom: '0.75rem' }}>Global Presence</span>
              <h2 style={{ fontSize: '2rem', color: '#FFF', marginBottom: '1rem' }}>28 Worldwide Logistics Hubs</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                With strategically located distribution centers in North America, Europe, Asia-Pacific, and the Middle East, Transparts maintains an inventory of over 45,000 active OEM parts ready for immediate air freight dispatch.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#FFF', fontSize: '0.95rem' }}>
                  <CheckCircle size={18} color="#00E676" /> Same-day order processing & express dispatch
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#FFF', fontSize: '0.95rem' }}>
                  <CheckCircle size={18} color="#00E676" /> Direct partnerships with Volvo, Scania, CAT, & Komatsu suppliers
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#FFF', fontSize: '0.95rem' }}>
                  <CheckCircle size={18} color="#00E676" /> Full traceability & metallurgical test certificates
                </div>
              </div>
            </div>

            <div style={{ background: 'rgba(7, 9, 14, 0.8)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2rem', textAlign: 'center' }}>
              <Globe size={64} color="#FF6B00" style={{ margin: '0 auto 1.5rem', opacity: 0.9 }} />
              <h3 style={{ color: '#FFF', fontSize: '1.4rem', marginBottom: '0.5rem' }}>Global Supply Chain Matrix</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
                Serving over 1,200 commercial transportation companies, mining conglomerates, and heavy earthmoving operators across 6 continents.
              </p>
              <Link href="/contact" className="btn-primary" style={{ width: '100%' }}>
                Contact Distribution Center
              </Link>
            </div>
          </div>
        </div>

        {/* Quality Certifications */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <Factory color="#FF6B00" size={36} style={{ marginBottom: '1rem' }} />
            <h3 style={{ color: '#FFF', fontSize: '1.25rem', marginBottom: '0.5rem' }}>OEM Grade Standards</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
              All gears, hydraulic pumps, and brake calipers are manufactured in accordance with strict TS 16949 automotive quality standards.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem' }}>
            <ShieldCheck color="#00F0FF" size={36} style={{ marginBottom: '1rem' }} />
            <h3 style={{ color: '#FFF', fontSize: '1.25rem', marginBottom: '0.5rem' }}>ISO 9001 Certified</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
              Certified management workflows ensuring zero-defect inventory holding and audited supplier verification.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem' }}>
            <Users color="#00E676" size={36} style={{ marginBottom: '1rem' }} />
            <h3 style={{ color: '#FFF', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Dedicated Support Engineers</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
              In-house technical engineers ready to assist with cross-referencing OEM numbers and custom component requests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
