'use client';

import { useState } from 'react';
import { Search, Filter, ShieldCheck, ChevronRight, CheckCircle2, Info } from 'lucide-react';
import { partsCatalog, categories } from '../../data/partsData';
import QuoteModal from '../../components/QuoteModal';

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPartForModal, setSelectedPartForModal] = useState(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [activeSpecPart, setActiveSpecPart] = useState(null);

  const filteredParts = partsCatalog.filter((part) => {
    const matchesCategory = selectedCategory === 'all' || part.category === selectedCategory;
    const matchesSearch = part.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          part.partNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          part.compatibility.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOpenQuote = (part) => {
    setSelectedPartForModal(part);
    setIsQuoteOpen(true);
  };

  return (
    <div style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="badge-tag badge-amber" style={{ marginBottom: '0.5rem' }}>Direct Supply Inventory</span>
          <h1 className="gradient-text" style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '0.75rem' }}>
            Heavy Duty Parts Catalog
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '700px' }}>
            Explore certified heavy transmission assemblies, hydraulic systems, air brake components, and powertrain replacement units.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="glass-card" style={{ padding: '1.25rem', marginBottom: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flex: 1, minWidth: '280px', background: 'var(--bg-input)', padding: '0.6rem 1rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <Search size={18} color="var(--text-muted)" />
            <input 
              type="text" 
              placeholder="Search by name, part # or vehicle model (e.g. Cummins, Volvo, CAT)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ background: 'none', border: 'none', color: '#FFF', outline: 'none', width: '100%', fontSize: '0.9rem' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  background: selectedCategory === cat.id ? 'var(--primary-amber)' : 'rgba(255, 255, 255, 0.04)',
                  color: selectedCategory === cat.id ? '#FFF' : 'var(--text-muted)',
                  border: selectedCategory === cat.id ? 'none' : '1px solid var(--border-color)',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  fontWeight: '500',
                  transition: 'all 0.2s'
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          <div>Showing <strong style={{ color: '#FFF' }}>{filteredParts.length}</strong> matching component assemblies</div>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <ShieldCheck size={16} color="#00F0FF" /> Guaranteed OEM Quality
          </div>
        </div>

        {/* Catalog Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '2rem' }}>
          {filteredParts.map((part) => (
            <div key={part.id} className="glass-card" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="badge-tag badge-emerald">{part.stock}</span>
                  <span style={{ fontSize: '0.8rem', color: '#00F0FF', fontFamily: 'monospace', background: 'rgba(0, 240, 255, 0.08)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                    {part.partNumber}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: '#FFF', marginBottom: '0.75rem', lineHeight: '1.3' }}>
                  {part.name}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                  {part.description}
                </p>

                {/* Compatibility */}
                <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '0.85rem', marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '0.25rem' }}>Compatible Vehicles / Engines</div>
                  <div style={{ color: '#FFF', fontSize: '0.88rem', fontWeight: '500' }}>{part.compatibility}</div>
                </div>

                {/* Technical Specs Accordion Toggle */}
                {activeSpecPart === part.id ? (
                  <div style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(0, 240, 255, 0.2)', borderRadius: '8px', padding: '0.85rem', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', fontSize: '0.8rem', color: '#00F0FF', fontWeight: '600' }}>
                      <span>TECHNICAL SPECIFICATIONS</span>
                      <button onClick={() => setActiveSpecPart(null)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.75rem' }}>Hide</button>
                    </div>
                    {Object.entries(part.specs).map(([key, val]) => (
                      <div key={key} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', padding: '0.25rem 0', borderBottom: '1px border var(--border-color)' }}>
                        <span style={{ color: 'var(--text-muted)' }}>{key}:</span>
                        <span style={{ color: '#FFF', fontWeight: '500' }}>{val}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <button 
                    onClick={() => setActiveSpecPart(part.id)}
                    style={{ background: 'none', border: 'none', color: '#00F0FF', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem', cursor: 'pointer', marginBottom: '1.25rem' }}
                  >
                    <Info size={14} /> View Technical Specifications
                  </button>
                )}
              </div>

              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>List Price</div>
                  <div style={{ fontSize: '1.35rem', fontWeight: '800', color: '#FFF' }}>{part.price}</div>
                </div>

                <button className="btn-primary" onClick={() => handleOpenQuote(part)}>
                  Request Quote <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} defaultPart={selectedPartForModal} />
    </div>
  );
}
