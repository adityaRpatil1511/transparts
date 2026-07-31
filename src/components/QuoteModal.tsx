'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, Package } from 'lucide-react';
import { partsCatalog, Part } from '../data/partsData';

export interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPart?: Part | null;
}

export default function QuoteModal({ isOpen, onClose, defaultPart = null }: QuoteModalProps) {
  const [selectedPart, setSelectedPart] = useState<string>(defaultPart ? defaultPart.id : '');
  const [quantity, setQuantity] = useState<number | string>(1);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Sync defaultPart when it changes
  useEffect(() => {
    if (defaultPart) setSelectedPart(defaultPart.id);
  }, [defaultPart]);

  // Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(15, 30, 43, 0.55)',
        backdropFilter: 'blur(8px)',
        zIndex: 200,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        width: '100%', maxWidth: '560px',
        background: '#FFFFFF',
        border: '1px solid var(--border)',
        borderRadius: '18px',
        padding: 'clamp(1.5rem, 3vw, 2.25rem)',
        position: 'relative',
        boxShadow: '0 30px 60px rgba(0,30,60,0.2), 0 0 0 1px rgba(0,119,168,0.08)',
        maxHeight: '90vh',
        overflowY: 'auto',
      }}>
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '1.1rem', right: '1.1rem',
            background: 'var(--bg-input)', border: '1px solid var(--border)',
            color: 'var(--text-muted)', width: '32px', height: '32px',
            borderRadius: '50%', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s',
          }}
        >
          <X size={16} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{
              width: '72px', height: '72px', borderRadius: '50%',
              background: 'rgba(5,150,105,0.1)', border: '2px solid rgba(5,150,105,0.3)',
              color: 'var(--accent-green)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.5rem',
            }}>
              <CheckCircle size={36} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-heading)', fontFamily: 'var(--font-display)' }}>
              Quote Request Sent!
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.75rem', lineHeight: 1.65 }}>
              Thank you, <strong style={{ color: 'var(--text-heading)' }}>{name || 'Valued Customer'}</strong>. Our precision engineering rep will contact{' '}
              <span style={{ color: 'var(--primary)', fontWeight: '600' }}>{email}</span> within 2 hours with wholesale pricing.
            </p>
            <button className="btn-primary" onClick={handleReset} style={{ padding: '0.75rem 2rem' }}>
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--primary-bg2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Package color="var(--primary)" size={22} />
              </div>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--text-heading)', fontFamily: 'var(--font-display)' }}>
                Request Instant Quote
              </h2>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', marginBottom: '1.5rem', lineHeight: 1.55 }}>
              Get direct OEM component pricing, bulk discounts &amp; expedited shipping estimates.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.95rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Select Component / Part
                </label>
                <select className="custom-input" value={selectedPart} onChange={(e) => setSelectedPart(e.target.value)} style={{ cursor: 'pointer' }} required>
                  <option value="">-- Choose from Catalog --</option>
                  {partsCatalog.map((p) => (
                    <option key={p.id} value={p.id}>{p.name} ({p.partNumber})</option>
                  ))}
                  <option value="custom">Other / Custom OEM Specification</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }} className="grid-form">
                <div>
                  <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quantity</label>
                  <input type="number" min="1" className="custom-input" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Company Name</label>
                  <input type="text" placeholder="Apex Fleet Ltd" className="custom-input" value={company} onChange={(e) => setCompany(e.target.value)} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }} className="grid-form">
                <div>
                  <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Full Name *</label>
                  <input type="text" placeholder="John Doe" className="custom-input" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Work Email *</label>
                  <input type="email" placeholder="john@fleet.com" className="custom-input" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.73rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Notes / Vehicle VIN (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Model numbers, delivery deadline, or packaging requests..."
                  className="custom-input"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={{ resize: 'none' }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: '0.25rem', width: '100%', justifyContent: 'center', padding: '0.9rem', fontSize: '0.95rem' }}>
                Submit Request <Send size={16} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
