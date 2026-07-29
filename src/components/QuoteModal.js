'use client';

import { useState } from 'react';
import { X, CheckCircle, Send, Package } from 'lucide-react';
import { partsCatalog } from '../data/partsData';

export default function QuoteModal({ isOpen, onClose, defaultPart = null }) {
  const [selectedPart, setSelectedPart] = useState(defaultPart ? defaultPart.id : '');
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(5, 7, 10, 0.85)',
      backdropFilter: 'blur(8px)',
      zIndex: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '560px',
        background: '#0D111A',
        border: '1px solid rgba(255, 107, 0, 0.3)',
        borderRadius: '16px',
        padding: '2rem',
        position: 'relative',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
      }}>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: 'none',
            color: 'var(--text-muted)',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(0, 230, 118, 0.15)', color: '#00E676', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <CheckCircle size={36} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#FFF' }}>Quote Request Sent!</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Thank you, <strong style={{ color: '#FFF' }}>{name || 'Valued Customer'}</strong>. Our heavy-parts technical representative will contact <span style={{ color: '#00F0FF' }}>{email}</span> within 2 hours with wholesale pricing.
            </p>
            <button className="btn-primary" onClick={handleReset}>
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <Package color="#FF6B00" size={24} />
              <h2 style={{ fontSize: '1.4rem', color: '#FFF' }}>Request Instant Quote</h2>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
              Get direct OEM component pricing, bulk discounts & expedited shipping estimates.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: '500' }}>
                  Select Component / Part
                </label>
                <select 
                  className="custom-input"
                  value={selectedPart}
                  onChange={(e) => setSelectedPart(e.target.value)}
                  style={{ width: '100%', cursor: 'pointer' }}
                  required
                >
                  <option value="">-- Choose from Catalog --</option>
                  {partsCatalog.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.partNumber})
                    </option>
                  ))}
                  <option value="custom">Other / Custom OEM Specification</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: '500' }}>
                    Required Quantity
                  </label>
                  <input 
                    type="number" 
                    min="1" 
                    className="custom-input" 
                    value={quantity} 
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: '500' }}>
                    Company Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g. Apex Fleet Ltd" 
                    className="custom-input" 
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: '500' }}>
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="custom-input" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: '500' }}>
                    Work Email
                  </label>
                  <input 
                    type="email" 
                    placeholder="john@fleet.com" 
                    className="custom-input" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: '500' }}>
                  Additional Notes / Vehicle VIN (Optional)
                </label>
                <textarea 
                  rows="3" 
                  placeholder="Specify model numbers, delivery deadline, or special packaging requests..." 
                  className="custom-input"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={{ resize: 'none' }}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem', width: '100%', padding: '0.9rem' }}>
                Submit Request <Send size={16} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
