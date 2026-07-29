'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Shield } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'Bulk Parts Quote',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>
      <div className="container">
        
        {/* Title */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem' }}>
          <span className="badge-tag badge-cyan" style={{ marginBottom: '0.75rem' }}>24/7 OEM Support</span>
          <h1 className="gradient-text" style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '0.75rem' }}>
            Contact Transparts Engineering Team
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Reach out for technical consultations, volume discount pricing, or expedited fleet shipping support.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          
          {/* Contact Details */}
          <div>
            <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
              <h3 style={{ color: '#FFF', fontSize: '1.3rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone color="#FF6B00" size={20} /> Direct Hotlines
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>North America Sales & Dispatch</div>
                  <div style={{ color: '#FFF', fontWeight: '600', fontSize: '1.05rem' }}>+1 (800) 555-PARTS (7278)</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>International Technical Line</div>
                  <div style={{ color: '#FFF', fontWeight: '600', fontSize: '1.05rem' }}>+1 (313) 555-0199</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Emergency AOG Fleet Response</div>
                  <div style={{ color: '#00F0FF', fontWeight: '600', fontSize: '1.05rem' }}>+1 (888) 99-TRANS</div>
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ color: '#FFF', fontSize: '1.3rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock color="#00E676" size={20} /> Operating Hours
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Monday - Friday:</span>
                  <span style={{ color: '#FFF' }}>24 Hours (3 Shifts)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Saturday:</span>
                  <span style={{ color: '#FFF' }}>08:00 - 18:00 EST</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Sunday:</span>
                  <span style={{ color: '#FF8833' }}>Emergency AOG Only</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(0, 230, 118, 0.15)', color: '#00E676', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <CheckCircle size={36} />
                </div>
                <h3 style={{ fontSize: '1.6rem', color: '#FFF', marginBottom: '0.5rem' }}>Message Transmitted</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '2rem' }}>
                  Thank you for contacting Transparts. A dedicated commercial account executive will review your request and reply shortly.
                </p>
                <button className="btn-secondary" onClick={() => setSubmitted(false)}>
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <h3 style={{ color: '#FFF', fontSize: '1.4rem', marginBottom: '0.5rem' }}>Send Us a Message</h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>Your Name</label>
                    <input 
                      type="text" 
                      required 
                      className="custom-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>Work Email</label>
                    <input 
                      type="email" 
                      required 
                      className="custom-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>Phone Number</label>
                    <input 
                      type="tel" 
                      className="custom-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>Company / Fleet Name</label>
                    <input 
                      type="text" 
                      className="custom-input"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })} 
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>Subject / Inquiry Type</label>
                  <select 
                    className="custom-input"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="Bulk Parts Quote">Bulk Parts Quote Request</option>
                    <option value="Technical Specification">Technical / Fitment Compatibility</option>
                    <option value="Dispatch Tracking">Order Dispatch & Tracking</option>
                    <option value="Distributor Partnership">Become a Regional Distributor</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>Message / Part Numbers Required</label>
                  <textarea 
                    rows="4" 
                    required 
                    placeholder="Describe your project requirements, quantities, or specific part numbers..." 
                    className="custom-input"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ resize: 'none' }}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ padding: '0.9rem' }}>
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
