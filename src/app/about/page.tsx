'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle,
  Wrench,
  Cpu,
  MapPin,
  Maximize2,
  X,
  Sparkles,
  Building2,
  Award,
  FileCheck,
  ExternalLink
} from 'lucide-react';

import IMAGES from '../../data/images';

interface MachineItem {
  id: string;
  name: string;
  code: string;
  category: string;
  image: string;
  specs: string[];
  description: string;
  badge: string;
}

const facilityMachines: MachineItem[] = [
  {
    id: 'entrance',
    name: 'TransParts Manufacturing & Logistics Center',
    code: 'FACILITY-01',
    category: 'Manufacturing Facility',
    image: IMAGES.facility.factoryEntrance.src,
    specs: [
      'GST: 27DNUPP9825G1Z3',
      'Vasuli Industrial Zone, Pune',
      'Direct Export & Logistics Terminal'
    ],
    description:
      'Primary production & export facility in Pune, Maharashtra. Equipped with heavy material handling, ISO-certified quality inspection bay, and high-speed dispatch terminal.',
    badge: 'HQ Facility'
  },
  {
    id: 'lmw-cnc02',
    name: 'LMW S TURN 1 CNC Turning Center',
    code: 'CNC-02',
    category: 'CNC Turning',
    image: IMAGES.facility.cncLmw.src,
    specs: [
      'Fanuc High-Precision Controller',
      'Max Turning Length: 500mm',
      'Sub-Micron Repeatability Tolerance'
    ],
    description:
      'High-speed heavy-duty CNC turning machine for precision transmission shafts, planetary gear blanks, and heavy axle components.',
    badge: 'High Precision'
  },
  {
    id: 'precision-turning',
    name: 'Heavy Duty Shaft Turning Operations',
    code: 'OPER-01',
    category: 'Precision Machining',
    image: IMAGES.facility.cncPrecision.src,
    specs: [
      'Multi-Station Hydraulic Turret',
      'High-Pressure Coolant Jet Injection',
      'Hardened Steel & Alloy Turning'
    ],
    description:
      'Live machining operation showing precision turning of stepped powertrain shafts with mirror-surface finish tolerances.',
    badge: 'Live Production'
  },
  {
    id: 'takisawa-tc2',
    name: 'Takisawa TC-2 Heavy CNC Lathe',
    code: 'CNC-01',
    category: 'CNC Heavy Lathe',
    image: IMAGES.facility.cncTakisawa.src,
    specs: [
      'Heavy Cast Iron Bed Rigidity',
      'High Torque Spindle Drive',
      'Batch Component Production'
    ],
    description:
      'Japanese precision TC-2 CNC lathe dedicated to heavy transmission gear blanks, flange hubs, and high-torque commercial truck drive parts.',
    badge: 'Heavy Machining'
  },
  {
    id: 'honing-mc',
    name: 'Horizontal Industrial Honing Machine',
    code: 'HONING M/C',
    category: 'Internal Boring & Honing',
    image: IMAGES.facility.honingMachine.src,
    specs: [
      'Digital Bore Size Controller',
      'Sub-Micron Cylinder Surface Finish',
      'Hydraulic Bore Fine Finishing'
    ],
    description:
      'Specialized horizontal honing setup for ultra-smooth internal cylinder bores, hydraulic pump housings, and valve sleeves.',
    badge: 'Ultra Finish'
  }
];

const clientCompanies = [
  {
    name: 'Four Star Industries Pvt. Ltd.',
    category: 'Automotive & Precision Components',
    tag: 'Valued Partner',
    desc: 'Leading manufacturer of automotive assemblies and high-precision engineered components.',
  },
  {
    name: 'Stawn Precision Private Limited',
    category: 'High-Tolerance Machined Parts',
    tag: 'OEM Partner',
    desc: 'Specialists in micro-tolerance machining, industrial assemblies, and custom gear shafts.',
  },
  {
    name: 'Bijur Delimon India Private Limited',
    category: 'Centralized Lubrication & Fluid Systems',
    tag: 'Key Client',
    desc: 'Global leaders in centralized lubrication systems, heavy machinery pumps, and fluid valves.',
  },
  {
    name: 'Nirmal Aquasol',
    category: 'Water Treatment & Industrial Engineering',
    tag: 'Valued Partner',
    desc: 'Pioneers in industrial water treatment, heavy filtration shafts, and hydraulic components.',
  },
];

export default function AboutPage() {
  const [activeImage, setActiveImage] = useState<MachineItem | null>(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState<boolean>(false);

  return (
    <div style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>
      <div className="container">
        {/* ── Page Header ── */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span className="badge-tag badge-steel">
              <Sparkles size={12} /> Infrastructure &amp; Quality Powerhouse
            </span>
            <span className="badge-tag badge-cyan">ISO 9001:2015 Certified</span>
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              fontWeight: '800',
              marginBottom: '1rem',
              fontFamily: 'var(--font-display)',
              color: 'var(--text-heading)'
            }}
          >
            State-of-the-Art <span className="gradient-blue">Machining Infrastructure</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            TransParts operates advanced CNC turning centers, heavy-duty lathes, and precision honing machinery at our Pune industrial plant to manufacture OEM transport &amp; transmission parts engineered to sub-micron tolerances.
          </p>
        </div>

        {/* ── Pune Plant Highlights Bar ── */}
        <div
          style={{
            background: 'linear-gradient(135deg, #0077A8 0%, #005E88 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: 'clamp(1.25rem, 3vw, 2.25rem)',
            color: '#FFFFFF',
            marginBottom: '4rem',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.5rem',
              alignItems: 'center'
            }}
            className="plant-highlights-grid"
          >
            <div className="plant-highlight-item">
              <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.85 }}>Registered GSTIN</div>
              <div style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontWeight: '700', fontFamily: 'monospace', marginTop: '0.2rem' }}>27DNUPP9825G1Z3</div>
            </div>
            <div className="plant-highlight-item">
              <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.85 }}>ISO Certification</div>
              <div style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', fontWeight: '700', marginTop: '0.2rem' }}>ISO 9001:2015 Certified</div>
            </div>
            <div className="plant-highlight-item">
              <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.85 }}>Direct Exports Email</div>
              <div style={{ fontSize: 'clamp(0.85rem, 2vw, 1rem)', fontWeight: '700', marginTop: '0.2rem', wordBreak: 'break-word' }}>Transparts0125@gmail.com</div>
            </div>
            <div className="plant-highlight-item">
              <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.85 }}>Plant Location</div>
              <div style={{ fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', fontWeight: '700', marginTop: '0.2rem' }}>Vasuli, Pune (Gala 2)</div>
            </div>
          </div>
        </div>

        {/* ── ISO 9001:2015 CERTIFICATE SHOWCASE ── */}
        <section style={{ marginBottom: '5rem' }}>
          <div className="glass-card" style={{ padding: 'clamp(1.25rem, 3.5vw, 2.75rem)', background: '#FFFFFF', border: '1.5px solid var(--border-blue)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
              
              {/* Certificate Image Box */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  boxShadow: '0 10px 30px rgba(0,60,100,0.12)',
                  background: '#F9FBFD',
                  cursor: 'pointer',
                  maxWidth: '480px',
                  margin: '0 auto',
                  width: '100%',
                }}
                onClick={() => setIsCertModalOpen(true)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={IMAGES.isoCertificate.src}
                  alt="TransParts ISO 9001:2015 Certificate of Registration"
                  style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.3s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <button
                  style={{
                    position: 'absolute',
                    bottom: '0.85rem', right: '0.85rem',
                    background: 'rgba(15, 30, 43, 0.85)',
                    backdropFilter: 'blur(4px)',
                    color: '#FFF', border: 'none',
                    padding: '0.45rem 0.85rem', borderRadius: '6px',
                    fontSize: '0.78rem', fontWeight: '600',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem',
                  }}
                >
                  <Maximize2 size={13} /> View Full HD Certificate
                </button>
              </div>

              {/* Certificate Details */}
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}>
                  <span className="badge-tag badge-emerald"><Award size={13} /> Official Quality Certification</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: 'var(--text-heading)', fontFamily: 'var(--font-display)', marginBottom: '0.85rem', lineHeight: 1.25 }}>
                  ISO 9001 : 2015<br />
                  <span className="gradient-blue">Certified Quality Management</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  TRANSPARTS is audited and certified by Robust Certifications Pvt. Ltd. conforming strictly to ISO 9001:2015 requirements for <strong>Manufacturing of Machining Component Parts</strong>.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.85rem', background: 'var(--bg-page)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1rem', marginBottom: '1.25rem' }}>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '700' }}>Certificate No.</div>
                    <div style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.92rem', fontFamily: 'monospace', marginTop: '0.15rem' }}>905937/2026/R</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '700' }}>Registration Date</div>
                    <div style={{ color: 'var(--text-heading)', fontWeight: '600', fontSize: '0.88rem', marginTop: '0.15rem' }}>17 / 07 / 2026</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '700' }}>Expiry Date</div>
                    <div style={{ color: 'var(--text-heading)', fontWeight: '600', fontSize: '0.88rem', marginTop: '0.15rem' }}>16 / 07 / 2029</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '700' }}>Accreditation</div>
                    <div style={{ color: 'var(--accent-teal)', fontWeight: '700', fontSize: '0.88rem', marginTop: '0.15rem' }}>IAF / EIAC</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <button
                    className="btn-primary"
                    onClick={() => setIsCertModalOpen(true)}
                    style={{ padding: '0.65rem 1.3rem', fontSize: '0.85rem', borderRadius: '8px' }}
                  >
                    Open Certificate Preview <Maximize2 size={14} />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── TRUSTED OEM CLIENTS SECTION ── */}
        <section style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem' }}>
            <span className="section-label">Trusted Industrial Clients</span>
            <h2 style={{ fontSize: '2.1rem', fontFamily: 'var(--font-display)', color: 'var(--text-heading)' }}>
              Valued OEM Client Partners
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
              TransParts supplies high-tolerance CNC turned and honed component parts to leading OEM &amp; industrial companies across India.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }} className="grid-2col">
            {clientCompanies.map((client, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  background: '#FFFFFF',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '10px',
                      background: 'var(--primary-bg2)', color: 'var(--primary)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Building2 size={22} />
                    </div>
                    <span className="badge-tag badge-steel">{client.tag}</span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', color: 'var(--text-heading)', fontFamily: 'var(--font-display)', marginBottom: '0.4rem', lineHeight: 1.3 }}>
                    {client.name}
                  </h3>
                  <div style={{ fontSize: '0.78rem', color: 'var(--primary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                    {client.category}
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                    {client.desc}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--border)', marginTop: '1.25rem', paddingTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--accent-green)', fontWeight: '600' }}>
                  <CheckCircle size={14} /> Quality Component Supplier
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FACILITY MACHINERY SHOWCASE (HD GALLERY) ── */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-label">Machinery &amp; Equipment Inventory</span>
            <h2 style={{ fontSize: '2.1rem', fontFamily: 'var(--font-display)', color: 'var(--text-heading)' }}>
              In-House Precision Manufacturing Line
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '600px', margin: '0.5rem auto 0' }}>
              Explore our real factory CNC units, honing bays, and production setups producing high-torque commercial transport spares.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {facilityMachines.map((machine) => (
              <div
                key={machine.id}
                className="glass-card"
                style={{
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 'var(--radius-md)',
                  background: '#FFFFFF'
                }}
              >
                {/* HD Image Banner with Zoom Trigger */}
                <div
                  style={{
                    position: 'relative',
                    height: '240px',
                    width: '100%',
                    background: 'var(--bg-section)',
                    cursor: 'pointer',
                    overflow: 'hidden'
                  }}
                  onClick={() => setActiveImage(machine)}
                >
                  <img
                    src={machine.image}
                    alt={machine.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      display: 'flex',
                      gap: '0.4rem'
                    }}
                  >
                    <span className="badge-tag badge-steel" style={{ background: '#FFFFFF', boxShadow: 'var(--shadow-sm)' }}>
                      {machine.code}
                    </span>
                    <span className="badge-tag badge-cyan" style={{ background: 'var(--primary)', color: '#FFF' }}>
                      {machine.badge}
                    </span>
                  </div>

                  <button
                    style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      right: '0.75rem',
                      background: 'rgba(15, 30, 43, 0.75)',
                      backdropFilter: 'blur(4px)',
                      border: 'none',
                      color: '#FFF',
                      padding: '0.4rem 0.7rem',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontWeight: '600'
                    }}
                  >
                    <Maximize2 size={13} /> View HD Image
                  </button>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.35rem' }}>
                      {machine.category}
                    </div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text-heading)', marginBottom: '0.65rem', fontFamily: 'var(--font-display)', lineHeight: 1.3 }}>
                      {machine.name}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {machine.description}
                    </p>

                    {/* Specs Pills */}
                    <div style={{ background: 'var(--bg-section)', border: '1px solid var(--border)', borderRadius: '8px', padding: '0.85rem' }}>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem', fontWeight: '700' }}>
                        Key Technical Specifications
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                        {machine.specs.map((spec, idx) => (
                          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.83rem', color: 'var(--text-body)' }}>
                            <CheckCircle size={14} color="var(--primary)" style={{ flexShrink: 0 }} />
                            {spec}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── MODAL FOR HD FULLSCREEN IMAGE PREVIEW ── */}
        {activeImage && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(10, 20, 30, 0.88)',
              backdropFilter: 'blur(10px)',
              zIndex: 300,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}
            onClick={() => setActiveImage(null)}
          >
            <div
              style={{
                position: 'relative',
                maxWidth: '900px',
                width: '100%',
                background: '#FFFFFF',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px rgba(0,0,0,0.4)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveImage(null)}
                style={{
                  position: 'absolute',
                  top: '1rem', right: '1rem',
                  zIndex: 10,
                  background: 'rgba(0,0,0,0.6)',
                  color: '#FFF', border: 'none',
                  borderRadius: '50%',
                  width: '36px', height: '36px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={18} />
              </button>

              <div style={{ maxHeight: '65vh', width: '100%', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={activeImage.image}
                  alt={activeImage.name}
                  style={{ maxHeight: '65vh', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>

              <div style={{ padding: '1.75rem', background: '#FFFFFF' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span className="badge-tag badge-steel">{activeImage.code}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{activeImage.category}</span>
                </div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-heading)', fontFamily: 'var(--font-display)', marginBottom: '0.5rem' }}>
                  {activeImage.name}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>{activeImage.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* ── MODAL FOR ISO CERTIFICATE PREVIEW ── */}
        {isCertModalOpen && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(10, 20, 30, 0.90)',
              backdropFilter: 'blur(12px)',
              zIndex: 300,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}
            onClick={() => setIsCertModalOpen(false)}
          >
            <div
              style={{
                position: 'relative',
                maxWidth: '780px',
                width: '100%',
                maxHeight: '90vh',
                background: '#FFFFFF',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
                display: 'flex',
                flexDirection: 'column',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsCertModalOpen(false)}
                style={{
                  position: 'absolute',
                  top: '1rem', right: '1rem',
                  zIndex: 10,
                  background: 'rgba(0,0,0,0.7)',
                  color: '#FFF', border: 'none',
                  borderRadius: '50%',
                  width: '40px', height: '40px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>

              <div style={{ overflowY: 'auto', padding: '1rem', display: 'flex', justifyContent: 'center', background: '#F5F8FA' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={IMAGES.isoCertificate.src}
                  alt="TransParts ISO 9001:2015 Certificate Full Size"
                  style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
                />
              </div>
            </div>
          </div>
        )}

        {/* ── CORE CAPABILITIES & CERTIFICATIONS ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem', marginBottom: '4rem' }} className="grid-3col">
          {[
            {
              icon: <Wrench size={32} />,
              color: 'var(--primary)',
              bg: 'var(--primary-bg2)',
              title: 'Sub-Micron Turning',
              body: 'High-rigidity Takisawa & LMW CNC lathes delivering micro-finish gear blanks, splined shafts, and bearing housings.'
            },
            {
              icon: <Cpu size={32} />,
              color: 'var(--accent-teal)',
              bg: 'rgba(0,151,178,0.1)',
              title: 'Precision Cylinder Honing',
              body: 'Dedicated horizontal honing setups guaranteeing cross-hatch pattern honing for high-pressure hydraulic cylinders.'
            },
            {
              icon: <ShieldCheck size={32} />,
              color: 'var(--accent-green)',
              bg: 'rgba(5,150,105,0.1)',
              title: 'Metallurgical QA Bay',
              body: 'Complete hardness testing, dimensional CMM inspection, and dynamic load testing before dispatch.'
            }
          ].map((card, i) => (
            <div key={i} className="glass-card" style={{ padding: '2rem' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: card.bg,
                  color: card.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}
              >
                {card.icon}
              </div>
              <h3 style={{ color: 'var(--text-heading)', fontSize: '1.15rem', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>
                {card.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>{card.body}</p>
            </div>
          ))}
        </div>

        {/* ── PUNE PLANT LOCATION FOOTNOTE CARD ── */}
        <div
          style={{
            background: 'linear-gradient(135deg, #EBF4FA 0%, #FFFFFF 100%)',
            border: '1px solid var(--border-blue)',
            borderRadius: '20px',
            padding: 'clamp(2rem, 4vw, 3rem)',
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                background: 'var(--primary-bg2)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <MapPin size={26} />
            </div>
            <div>
              <div style={{ color: 'var(--primary)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '700', marginBottom: '0.25rem' }}>
                Official Works &amp; Registered Office
              </div>
              <div style={{ color: 'var(--text-heading)', fontWeight: '700', fontSize: '1.15rem', fontFamily: 'var(--font-display)' }}>
                TransParts Precision Machined Parts
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.2rem' }}>
                Gala No. 2, Gate No. 50, Village-Vasuli, Dist-Pune, Maharashtra - 410501
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

