'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Zap, Award, Search, ArrowRight, ChevronRight, CheckCircle, Truck, Clock, Wrench, FileText } from 'lucide-react';
import { partsCatalog, companyStats, categories } from '../data/partsData';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredParts = partsCatalog.filter((part) => {
    const matchesCategory = selectedCategory === 'all' || part.category === selectedCategory;
    const matchesSearch =
      part.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      part.partNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      part.compatibility.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(145deg, #EBF4FA 0%, #FFFFFF 50%, #EEF4F9 100%)',
        paddingTop: '3.5rem',
        paddingBottom: '4.5rem',
        borderBottom: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px', width: '360px', height: '360px',
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,119,168,0.09) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative' }}>
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>

            {/* Badges */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <span className="badge-tag badge-steel animate-glow"><Zap size={12} />Precision Machining Startup</span>
              <span className="badge-tag badge-cyan">GSTIN: 27DNUPP9825G1Z3</span>
            </div>

            <h1 className="gradient-text hero-title" style={{
              fontSize: 'clamp(2.1rem, 5vw, 3.8rem)', fontWeight: '800',
              lineHeight: 1.15, marginBottom: '1.25rem',
            }}>
              High-Precision CNC Machined &amp;<br />
              <span className="gradient-blue">Honed Transport Parts</span>
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.1rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.7, marginBottom: '2.25rem',
              maxWidth: '660px', margin: '0 auto 2.25rem',
            }}>
              Agile OEM precision machining shop in Pune. Equipped with Takisawa &amp; LMW CNC turning centers and horizontal honing machines for custom gear shafts, hydraulic sleeves, and drive components.
            </p>

            {/* Stats strip */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem',
              borderTop: '1px solid var(--border)',
              paddingTop: '1.75rem',
            }}
              className="grid-4col"
            >
              {companyStats.map((stat, idx) => (
                <div key={idx} style={{ textAlign: 'center', padding: '0.4rem' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem', letterSpacing: '0.02em' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TRUST BADGES ROW
      ══════════════════════════════════════ */}
      <section style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border)', padding: '1rem 0' }}>
        <div className="container">
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '2.5rem', flexWrap: 'wrap',
          }}>
            {[
              { icon: <ShieldCheck size={16} />, text: '100% Quality Inspected' },
              { icon: <Wrench size={16} />, text: 'Takisawa & LMW CNC Lathes' },
              { icon: <FileText size={16} />, text: 'Custom Drawing Capabilities' },
              { icon: <Clock size={16} />, text: 'On-Time Production Dispatch' },
              { icon: <Truck size={16} />, text: 'Vasuli, Pune Manufacturing Hub' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                color: 'var(--text-muted)', fontSize: '0.84rem', fontWeight: '500',
              }}>
                <span style={{ color: 'var(--primary)' }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MACHINING CAPABILITIES & FEATURED PARTS
      ══════════════════════════════════════ */}
      <section style={{ padding: '4.25rem 0', background: 'var(--bg-page)' }}>
        <div className="container">

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-label">Production Line Capabilities</span>
              <h2 className="section-h2" style={{ fontSize: '2rem', color: 'var(--text-heading)', fontFamily: 'var(--font-display)' }}>
                Sample Machined Components
              </h2>
            </div>
            <Link href="/catalog" style={{ color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: '600', fontSize: '0.9rem' }}>
              Explore All Capabilities <ArrowRight size={16} />
            </Link>
          </div>

          {/* Category Pills */}
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '1rem', marginBottom: '1.75rem' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  background: selectedCategory === cat.id ? 'var(--primary)' : '#FFFFFF',
                  color: selectedCategory === cat.id ? '#FFF' : 'var(--text-muted)',
                  border: selectedCategory === cat.id ? '1.5px solid var(--primary)' : '1.5px solid var(--border)',
                  padding: '0.5rem 1.1rem', borderRadius: '30px', fontSize: '0.85rem',
                  fontWeight: '500', cursor: 'pointer', whiteSpace: 'nowrap',
                  transition: 'all 0.2s', fontFamily: 'var(--font-main)',
                  boxShadow: selectedCategory === cat.id ? '0 2px 8px rgba(0,119,168,0.25)' : 'none',
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Parts Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {filteredParts.slice(0, 6).map((part) => (
              <div key={part.id} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flex: 1 }}>
                  {/* Top row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                    <span className="badge-tag badge-emerald">{part.stock}</span>
                    <span style={{
                      fontSize: '0.75rem', color: 'var(--primary)', fontFamily: 'monospace',
                      background: 'var(--primary-bg)', padding: '0.18rem 0.55rem',
                      borderRadius: '4px', border: '1px solid var(--border-blue)',
                    }}>
                      {part.partNumber}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.05rem', color: 'var(--text-heading)', marginBottom: '0.5rem', lineHeight: 1.35, fontFamily: 'var(--font-display)' }}>
                    {part.name}
                  </h3>

                  <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '1rem' }}>
                    {part.description}
                  </p>

                  <div style={{
                    background: 'var(--primary-bg)', border: '1px solid var(--border-blue)',
                    borderRadius: '8px', padding: '0.65rem 0.85rem', marginBottom: '1rem',
                  }}>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Component Application</div>
                    <div style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.85rem' }}>{part.compatibility}</div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '0.9rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Availability</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-heading)', fontFamily: 'var(--font-display)' }}>{part.price}</div>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-teal)', fontWeight: '600' }}>Custom Specs</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/catalog" className="btn-secondary" style={{ padding: '0.8rem 2rem' }}>
              View All Machining Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY TRANSPARTS (OUR ADVANTAGE)
      ══════════════════════════════════════ */}
      <section style={{ padding: '4.5rem 0', background: 'var(--bg-white)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '660px', margin: '0 auto 3rem' }}>
            <span className="section-label">Precision Machining Excellence</span>
            <h2 className="section-h2" style={{ fontSize: '2.1rem', marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>
              Why Choose TransParts?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.65 }}>
              Combining Japanese CNC accuracy, dedicated honing setups, and responsive engineering support for custom transport parts.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }} className="grid-3col">
            {[
              {
                icon: <Wrench size={26} />, color: 'var(--primary)', bg: 'var(--primary-bg2)',
                title: 'High-Rigidity CNC Turning',
                body: 'Takisawa TC-2 and LMW S Turn 1 CNC lathes for tight-tolerance shaft turning, bearing seats, and flange profiles.',
              },
              {
                icon: <Zap size={26} />, color: 'var(--accent-teal)', bg: 'rgba(0,151,178,0.1)',
                title: 'Precision Internal Honing',
                body: 'Dedicated horizontal honing setups ensuring cross-hatch pattern finishes for high-pressure hydraulic cylinder sleeves.',
              },
              {
                icon: <Award size={26} />, color: 'var(--accent-green)', bg: 'rgba(5,150,105,0.1)',
                title: '100% Quality Inspection',
                body: 'Dimensional, hardness, and surface roughness reports provided with every production batch.',
              },
            ].map((card, i) => (
              <div key={i} className="glass-card" style={{ padding: '2rem' }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '12px',
                  background: card.bg, color: card.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}>
                  {card.icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-heading)', marginBottom: '0.65rem', fontFamily: 'var(--font-display)' }}>{card.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROCESS STEPS
      ══════════════════════════════════════ */}
      <section style={{ padding: '4.25rem 0', background: 'var(--bg-section)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            <span className="section-label">Manufacturing Workflow</span>
            <h2 className="section-h2" style={{ fontSize: '2rem', fontFamily: 'var(--font-display)' }}>
              3-Step Custom Manufacturing Process
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }} className="grid-3col">
            {[
              { step: '01', title: 'Share Component Specs', desc: 'Provide us your 2D/3D component drawing or sample part with required material grade.' },
              { step: '02', title: 'Technical Feasibility & QA', desc: 'Our engineering team reviews machining tolerances, tooling setups, and quality parameters.' },
              { step: '03', title: 'CNC Turning & Dispatch', desc: 'Precision CNC turning, honing, 100% QA dimensional inspection, and doorstep delivery.' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'var(--bg-white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '1.5rem', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{
                  flexShrink: 0, width: '44px', height: '44px', borderRadius: '10px',
                  background: 'var(--primary)', color: '#FFF',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: '800', fontSize: '0.9rem', fontFamily: 'var(--font-display)',
                }}>
                  {s.step}
                </div>
                <div>
                  <h3 style={{ fontSize: '1rem', color: 'var(--text-heading)', marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════ */}
      <section style={{ padding: '4.5rem 0', background: 'var(--bg-page)' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
            borderRadius: '20px',
            padding: 'clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 3rem)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', pointerEvents: 'none' }} />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <CheckCircle size={16} color="rgba(255,255,255,0.85)" />
              <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Vasuli, Pune Production Unit
              </span>
            </div>

            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: '#FFFFFF', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>
              Looking for Precision Machined Parts?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1rem', maxWidth: '580px', margin: '0 auto 2rem', lineHeight: 1.65 }}>
              Explore our CNC turning infrastructure, precision honing setups, and component portfolio.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/about" className="btn-primary" style={{ background: '#FFFFFF', color: 'var(--primary)', fontWeight: '700', padding: '0.9rem 2rem', fontSize: '0.95rem', boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}>
                View Machinery Infrastructure <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


