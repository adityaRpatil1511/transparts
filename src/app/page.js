'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Truck, ShieldCheck, Zap, Award, Search, ArrowRight, CheckCircle2, ChevronRight, SlidersHorizontal, Layers, Activity } from 'lucide-react';
import { partsCatalog, companyStats, testimonials, categories } from '../data/partsData';
import QuoteModal from '../components/QuoteModal';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedPartForQuote, setSelectedPartForQuote] = useState(null);

  const filteredParts = partsCatalog.filter((part) => {
    const matchesCategory = selectedCategory === 'all' || part.category === selectedCategory;
    const matchesSearch = part.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          part.partNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          part.compatibility.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOpenQuote = (part = null) => {
    setSelectedPartForQuote(part);
    setIsQuoteOpen(true);
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section style={{ 
        position: 'relative', 
        paddingTop: '4rem', 
        paddingBottom: '5rem', 
        overflow: 'hidden',
        background: 'radial-gradient(circle at 50% 20%, rgba(255, 107, 0, 0.15) 0%, rgba(7, 9, 14, 1) 70%)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <span className="badge-tag badge-amber animate-glow">
                <Zap size={13} /> Tier-1 OEM Heavy Duty Supply
              </span>
              <span className="badge-tag badge-cyan">Next-Day Dispatch</span>
            </div>

            <h1 className="gradient-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem' }}>
              Engineered Precision Heavy Duty <span className="gradient-amber">Transport Parts</span>
            </h1>

            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '2.5rem' }}>
              Direct supplier of high-torque transmissions, heavy hydraulics, pneumatic brake systems, and industrial powertrain components for commercial fleets worldwide.
            </p>

            {/* Quick Search Bar */}
            <div style={{ 
              background: 'rgba(15, 19, 28, 0.9)', 
              border: '1px solid var(--border-glow)', 
              borderRadius: '16px', 
              padding: '0.6rem',
              display: 'flex', 
              gap: '0.5rem',
              alignItems: 'center',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
              maxWidth: '680px',
              margin: '0 auto 3rem'
            }}>
              <div style={{ paddingLeft: '0.75rem', color: 'var(--text-muted)' }}>
                <Search size={20} />
              </div>
              <input 
                type="text" 
                placeholder="Search by Part # (e.g. TP-TX-9948), component name or truck model..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ 
                  flex: 1, 
                  background: 'none', 
                  border: 'none', 
                  color: '#FFF', 
                  fontSize: '0.95rem',
                  outline: 'none',
                  padding: '0.5rem 0'
                }}
              />
              <Link href="/catalog" className="btn-primary" style={{ padding: '0.7rem 1.4rem', whiteSpace: 'nowrap' }}>
                Browse Catalog
              </Link>
            </div>

            {/* Stats strip */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
              {companyStats.map((stat, idx) => (
                <div key={idx} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#FFF' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PARTS CATALOG SHOWCASE */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="badge-tag badge-cyan" style={{ marginBottom: '0.5rem' }}>Top Demand Components</span>
              <h2 style={{ fontSize: '2.2rem', color: '#FFF' }}>Featured Inventory</h2>
            </div>
            <Link href="/catalog" style={{ color: 'var(--primary-amber)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontWeight: '600' }}>
              View All 45,000+ Parts <ArrowRight size={16} />
            </Link>
          </div>

          {/* Category Pills */}
          <div style={{ display: 'flex', gap: '0.6rem', overflowX: 'auto', paddingBottom: '1rem', marginBottom: '2rem' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  background: selectedCategory === cat.id ? 'var(--primary-amber)' : 'rgba(255, 255, 255, 0.04)',
                  color: selectedCategory === cat.id ? '#FFF' : 'var(--text-muted)',
                  border: selectedCategory === cat.id ? 'none' : '1px solid var(--border-color)',
                  padding: '0.55rem 1.1rem',
                  borderRadius: '30px',
                  fontSize: '0.88rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s'
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Parts Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.75rem' }}>
            {filteredParts.slice(0, 6).map((part) => (
              <div key={part.id} className="glass-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <span className="badge-tag badge-emerald">{part.stock}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'monospace' }}>{part.partNumber}</span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', color: '#FFF', marginBottom: '0.6rem', lineHeight: '1.3' }}>
                    {part.name}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                    {part.description}
                  </p>

                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', borderRadius: '8px', padding: '0.8rem', marginBottom: '1.25rem', fontSize: '0.82rem' }}>
                    <div style={{ color: 'var(--text-dim)', marginBottom: '0.3rem' }}>Vehicle Compatibility:</div>
                    <div style={{ color: '#00F0FF', fontWeight: '500' }}>{part.compatibility}</div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>List Price</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#FFF' }}>{part.price}</div>
                  </div>
                  <button className="btn-primary" onClick={() => handleOpenQuote(part)} style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}>
                    Get Quote <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TRANSPARTS ENGINEERING ADVANTAGE */}
      <section style={{ padding: '5rem 0', background: 'rgba(15, 19, 28, 0.4)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
            <span className="badge-tag badge-amber" style={{ marginBottom: '0.5rem' }}>Engineering Excellence</span>
            <h2 style={{ fontSize: '2.4rem', color: '#FFF', marginBottom: '1rem' }}>Built for Heavy Transport Rigor</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
              Every component supplied by Transparts undergoes 100% rigorous stress-testing to meet or exceed OEM specifications.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 107, 0, 0.12)', color: '#FF6B00', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <ShieldCheck size={26} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#FFF', marginBottom: '0.75rem' }}>ISO 9001 Tested</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Full metallurgical and dynamic load verification guaranteed before any parts leave our logistics hubs.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 240, 255, 0.12)', color: '#00F0FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Zap size={26} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#FFF', marginBottom: '0.75rem' }}>24/7 Global Air Dispatch</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Strategic warehouse placement across North America, Europe, Asia, and Australia for zero fleet downtime.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 230, 118, 0.12)', color: '#00E676', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Award size={26} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#FFF', marginBottom: '0.75rem' }}>3-Year Extended Warranty</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Comprehensive coverage on all heavy powertrain transmission assemblies and hydraulic components.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="glass-card" style={{ 
            background: 'linear-gradient(135deg, rgba(255, 107, 0, 0.15) 0%, rgba(15, 19, 28, 0.95) 100%)',
            border: '1px solid rgba(255, 107, 0, 0.4)',
            padding: '3.5rem 2.5rem',
            borderRadius: '24px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <h2 style={{ fontSize: '2.5rem', color: '#FFF', marginBottom: '1rem' }}>
              Need Hard-to-Find Commercial Fleet Parts?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto 2rem' }}>
              Send us your vehicle VIN or original component part number. Our engineering support team will locate and dispatch it immediately.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button className="btn-primary" onClick={() => handleOpenQuote()} style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
                Request Wholesale Quote <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} defaultPart={selectedPartForQuote} />
    </div>
  );
}
