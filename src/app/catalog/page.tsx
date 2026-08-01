'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ShieldCheck, ChevronRight, Info, FileText } from 'lucide-react';
import { partsCatalog, categories } from '../../data/partsData';

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeSpecPart, setActiveSpecPart] = useState<string | null>(null);

  const filteredParts = partsCatalog.filter((part) => {
    return selectedCategory === 'all' || part.category === selectedCategory;
  });

  return (
    <div style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
      <div className="container">

        {/* ── Header ── */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="section-label">Machining Capabilities &amp; Portfolio</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', marginBottom: '0.75rem', fontFamily: 'var(--font-display)', color: 'var(--text-heading)' }}>
            Precision CNC &amp; Honed Components
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '680px', lineHeight: 1.65 }}>
            Browse sample turned shafts, hydraulic cylinder sleeves, and custom OEM precision machining capabilities produced at our Vasuli, Pune facility.
          </p>
        </div>

        {/* ── Filter Bar ── */}
        <div style={{
          background: 'var(--bg-white)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-md)',
          padding: '0.85rem 1.25rem',
          marginBottom: '2rem',
          display: 'flex', gap: '0.5rem', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'center',
          boxShadow: 'var(--shadow-sm)',
        }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                background: selectedCategory === cat.id ? 'var(--primary)' : 'transparent',
                color: selectedCategory === cat.id ? '#FFF' : 'var(--text-muted)',
                border: selectedCategory === cat.id ? '1.5px solid var(--primary)' : '1.5px solid var(--border)',
                padding: '0.5rem 1rem', borderRadius: '30px', fontSize: '0.85rem',
                cursor: 'pointer', fontWeight: '500', transition: 'all 0.2s',
                fontFamily: 'var(--font-main)',
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* ── Results bar ── */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
            Showing <strong style={{ color: 'var(--text-heading)' }}>{filteredParts.length}</strong> machining categories &amp; components
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-teal)', fontSize: '0.82rem', fontWeight: '600' }}>
            <ShieldCheck size={15} /> 100% Quality Inspected
          </div>
        </div>

        {/* ── Catalog Grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {filteredParts.map((part) => (
            <div key={part.id} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                  <span className="badge-tag badge-emerald">{part.stock}</span>
                  <span style={{
                    fontSize: '0.73rem', color: 'var(--primary)', fontFamily: 'monospace',
                    background: 'var(--primary-bg)', padding: '0.2rem 0.5rem',
                    borderRadius: '4px', border: '1px solid var(--border-blue)',
                  }}>
                    {part.partNumber}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.05rem', color: 'var(--text-heading)', marginBottom: '0.65rem', lineHeight: 1.35, fontFamily: 'var(--font-display)' }}>
                  {part.name}
                </h3>

                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '1rem' }}>
                  {part.description}
                </p>

                {/* Compatibility */}
                <div style={{ background: 'var(--primary-bg)', border: '1px solid var(--border-blue)', borderRadius: '8px', padding: '0.7rem 0.9rem', marginBottom: '0.85rem' }}>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Component Application</div>
                  <div style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: '600' }}>{part.compatibility}</div>
                </div>

                {/* Specs toggle */}
                {activeSpecPart === part.id ? (
                  <div style={{ background: 'var(--bg-section)', border: '1px solid var(--border)', borderRadius: '8px', padding: '0.85rem', marginBottom: '0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem', fontSize: '0.72rem', color: 'var(--primary)', fontWeight: '700', letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                      <span>Technical Specifications</span>
                      <button onClick={() => setActiveSpecPart(null)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.75rem' }}>Hide</button>
                    </div>
                    {Object.entries(part.specs).map(([key, val]) => (
                      <div key={key} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', padding: '0.3rem 0', borderBottom: '1px solid var(--border)' }}>
                        <span style={{ color: 'var(--text-muted)' }}>{key}</span>
                        <span style={{ color: 'var(--text-heading)', fontWeight: '600' }}>{val}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <button
                    onClick={() => setActiveSpecPart(part.id)}
                    style={{ background: 'none', border: 'none', color: 'var(--accent-teal)', fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer', marginBottom: '0.85rem', fontFamily: 'var(--font-main)', fontWeight: '500' }}
                  >
                    <Info size={14} /> View Technical Specifications
                  </button>
                )}
              </div>

              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Availability</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-heading)', fontFamily: 'var(--font-display)' }}>{part.price}</div>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-teal)', fontWeight: '600' }}>Custom Specs</span>
              </div>
            </div>
          ))}
        </div>

        {/* Drawing upload hint banner */}
        <div style={{
          marginTop: '3.5rem',
          background: 'var(--bg-white)',
          border: '1.5px dashed var(--border-blue)',
          borderRadius: 'var(--radius-md)',
          padding: '2rem',
          textAlign: 'center',
        }}>
          <FileText size={36} color="var(--primary)" style={{ margin: '0 auto 0.75rem' }} />
          <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-display)', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
            Have a Custom 2D/3D Drawing for Machining?
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', maxWidth: '550px', margin: '0 auto', lineHeight: 1.6 }}>
            Directly share your engineering drawings (PDF, STEP, IGES, DXF) with our Vasuli, Pune plant engineering team.
          </p>
        </div>

      </div>
    </div>
  );
}

