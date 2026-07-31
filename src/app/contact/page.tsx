'use client';

import React, { useState } from 'react';
import { Phone, Send, CheckCircle, Clock, Mail, MapPin, Wrench } from 'lucide-react';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '', email: '', phone: '', company: '',
    subject: 'Custom Drawing Machining RFQ', message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>
      <div className="container">

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
          <span className="section-label">Fast Engineering RFQ Support</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', marginBottom: '0.75rem', fontFamily: 'var(--font-display)', color: 'var(--text-heading)' }}>
            Contact TransParts Works &amp; Engineering Team
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.65 }}>
            Reach out to our Pune plant team for custom drawing quotes, CNC turning feasibility, or batch component inquiries.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }} className="grid-2col">

          {/* ── Left column: info cards ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            {/* Direct Phone */}
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <h3 style={{ color: 'var(--text-heading)', fontSize: '1.1rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-display)' }}>
                <Phone size={18} color="var(--primary)" /> Plant Hotlines &amp; WhatsApp
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { label: 'Plant Direct / Quotations', value: '+91 98923 20872', highlight: false },
                  { label: 'Technical & Production Line', value: '+91 97244 19227', highlight: false },
                  { label: 'Export & Dispatch Inquiry', value: '+91 99320 56070', highlight: true },
                ].map((item, i) => (
                  <div key={i}>
                    <div style={{ fontSize: '0.73rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>{item.label}</div>
                    <a href={`tel:${item.value.replace(/\s+/g, '')}`} style={{ color: item.highlight ? 'var(--accent-teal)' : 'var(--primary)', fontWeight: '700', fontSize: '0.98rem', fontFamily: 'var(--font-display)' }}>{item.value}</a>
                  </div>
                ))}
              </div>
            </div>

            {/* Shift Hours */}
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <h3 style={{ color: 'var(--text-heading)', fontSize: '1.1rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-display)' }}>
                <Clock size={18} color="var(--accent-green)" /> Plant Working Hours
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {[
                  { day: 'Monday – Saturday', time: '09:00 – 19:00 IST', highlight: false },
                  { day: 'Sunday', time: 'Closed (Weekly Off)', highlight: false },
                  { day: 'RFQ Response Time', time: 'Within 2 Hours', highlight: true },
                ].map((row, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between',
                    padding: '0.7rem 0',
                    borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                    fontSize: '0.88rem',
                  }}>
                    <span style={{ color: 'var(--text-body)' }}>{row.day}</span>
                    <span style={{ color: row.highlight ? 'var(--accent-teal)' : 'var(--text-heading)', fontWeight: '600' }}>{row.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Works Address & GST */}
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <h3 style={{ color: 'var(--text-heading)', fontSize: '1.1rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-display)' }}>
                <MapPin size={18} color="var(--accent-teal)" /> Registered Works Address
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem' }}>
                <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', color: 'var(--text-body)' }}>
                  <MapPin size={15} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Gala No-2, Gate No-50, Village-Vasuli, Dist-Pune, Maharashtra - 410501, India</span>
                </div>
                <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', color: 'var(--text-body)' }}>
                  <Wrench size={15} color="var(--primary)" style={{ flexShrink: 0 }} />
                  <span style={{ fontWeight: '600', color: 'var(--text-heading)' }}>GSTIN: 27DNUPP9825G1Z3</span>
                </div>
                <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', color: 'var(--text-body)' }}>
                  <Mail size={15} color="var(--accent-green)" style={{ flexShrink: 0 }} />
                  <a href="mailto:export@transparts.in" style={{ color: 'var(--primary)', fontWeight: '500' }}>export@transparts.in</a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right column: form ── */}
          <div className="glass-card" style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{
                  width: '72px', height: '72px', borderRadius: '50%',
                  background: 'rgba(5,150,105,0.1)', border: '2px solid rgba(5,150,105,0.3)',
                  color: 'var(--accent-green)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                }}>
                  <CheckCircle size={36} />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-heading)', marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>
                  RFQ Request Received!
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '2rem', fontSize: '0.92rem' }}>
                  Thank you for reaching TransParts Pune. Our engineering team will review your drawing/specs and contact you within 2 hours.
                </p>
                <button className="btn-secondary" onClick={() => setSubmitted(false)}>
                  Submit Another RFQ
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div>
                  <h3 style={{ color: 'var(--text-heading)', fontSize: '1.3rem', marginBottom: '0.3rem', fontFamily: 'var(--font-display)' }}>
                    Send RFQ / Technical Inquiry
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem' }}>Fill in details below for quick quotation response.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="grid-form">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Your Name *</label>
                    <input type="text" required className="custom-input" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Email Address *</label>
                    <input type="email" required className="custom-input" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="grid-form">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Phone / Mobile *</label>
                    <input type="tel" required className="custom-input" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Company Name</label>
                    <input type="text" className="custom-input" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Inquiry Type</label>
                  <select className="custom-input" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} style={{ cursor: 'pointer' }}>
                    <option value="Custom Drawing Machining RFQ">Custom Drawing Machining RFQ</option>
                    <option value="CNC Shaft Turning Inquiry">CNC Shaft Turning Inquiry</option>
                    <option value="Horizontal Honing Inquiry">Horizontal Honing Inquiry</option>
                    <option value="Batch Manufacturing Inquiry">Batch Manufacturing Inquiry</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Drawing Details / Specifications *</label>
                  <textarea
                    rows={4} required
                    placeholder="Provide dimensions, material grade (e.g. EN24, SAE8620), batch quantity, or drawing link..."
                    className="custom-input"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ resize: 'none' }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ padding: '0.9rem', width: '100%', justifyContent: 'center', fontSize: '0.95rem' }}>
                  Submit Inquiry <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
