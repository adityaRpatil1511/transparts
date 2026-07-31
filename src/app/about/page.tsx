'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Globe,
  CheckCircle,
  Factory,
  Wrench,
  Cpu,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Maximize2,
  X,
  Award,
  Sparkles
} from 'lucide-react';

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
    image: '/facility/factory-entrance.png',
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
    image: '/facility/cnc-02-lmw-sturn1.png',
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
    image: '/facility/cnc-precision-turning.png',
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
    image: '/facility/cnc-01-takisawa.png',
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
    image: '/facility/honing-machine.png',
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

export default function AboutPage() {
  const [activeImage, setActiveImage] = useState<MachineItem | null>(null);

  return (
    <div style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>
      <div className="container">
        {/* ── Page Header ── */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span className="badge-tag badge-steel">
              <Sparkles size={12} /> Infrastructure &amp; Fleet Powerhouse
            </span>
            <span className="badge-tag badge-cyan">ISO 9001:2015 Registered</span>
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
            padding: '2rem 2.5rem',
            color: '#FFFFFF',
            marginBottom: '4rem',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '2rem',
              alignItems: 'center'
            }}
            className="grid-4col"
          >
            <div style={{ borderRight: '1px solid rgba(255,255,255,0.15)', paddingRight: '1rem' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.8 }}>Registered GSTIN</div>
              <div style={{ fontSize: '1.25rem', fontWeight: '700', fontFamily: 'monospace', marginTop: '0.2rem' }}>27DNUPP9825G1Z3</div>
            </div>
            <div style={{ borderRight: '1px solid rgba(255,255,255,0.15)', paddingRight: '1rem' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.8 }}>Manufacturing Unit</div>
              <div style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '0.2rem' }}>Gala 2, Gate 50, Vasuli, Pune</div>
            </div>
            <div style={{ borderRight: '1px solid rgba(255,255,255,0.15)', paddingRight: '1rem' }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.8 }}>Direct Exports</div>
              <div style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '0.2rem' }}>export@transparts.in</div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.8 }}>Plant Support</div>
              <div style={{ fontSize: '1.05rem', fontWeight: '700', marginTop: '0.2rem' }}>+91 98923 20872</div>
            </div>
          </div>
        </div>

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
                    <div style={{ background: 'var(--bg-section)', border: '1px solid var(--border)', borderRadius: '8px', padding: '0.85rem', marginBottom: '1rem' }}>
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

                  <Link href="/contact" className="btn-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem', padding: '0.65rem' }}>
                    Request Specs &amp; Job Capacity <ArrowRight size={14} />
                  </Link>
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
                  top: '1rem',
                  right: '1rem',
                  zIndex: 10,
                  background: 'rgba(0,0,0,0.6)',
                  color: '#FFF',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
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

          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            <Link
              href="/contact"
              className="btn-primary"
              style={{ padding: '0.75rem 1.6rem', fontSize: '0.9rem' }}
            >
              Schedule Factory Audit <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
