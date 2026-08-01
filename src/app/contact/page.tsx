'use client';

import React from 'react';
import { Phone, Clock, Mail, MapPin, Wrench, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  return (
    <div style={{ paddingTop: '2.5rem', paddingBottom: '5rem' }}>
      <div className="container">

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
          <span className="section-label">Direct Works &amp; Plant Information</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', marginBottom: '0.75rem', fontFamily: 'var(--font-display)', color: 'var(--text-heading)' }}>
            TransParts Manufacturing Works &amp; Location
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.65 }}>
            Direct contact information and plant location details for our Pune precision machining &amp; honing unit.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }} className="grid-2col">

          {/* ── Left column: Phone & Working Hours ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            {/* Direct Phone */}
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <h3 style={{ color: 'var(--text-heading)', fontSize: '1.1rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-display)' }}>
                <Phone size={18} color="var(--primary)" /> Plant Hotlines &amp; WhatsApp
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { label: 'Plant Direct & Works Inquiry', value: '+91 98923 20872', highlight: false },
                  { label: 'Technical & Production Line', value: '+91 97244 19227', highlight: false },
                  { label: 'Export & Dispatch Terminal', value: '+91 99320 56070', highlight: true },
                ].map((item, i) => (
                  <div key={i}>
                    <div style={{ fontSize: '0.73rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>{item.label}</div>
                    <a href={`tel:${item.value.replace(/\s+/g, '')}`} style={{ color: item.highlight ? 'var(--accent-teal)' : 'var(--primary)', fontWeight: '700', fontSize: '1.05rem', fontFamily: 'var(--font-display)' }}>{item.value}</a>
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
                  { day: 'Works Status', time: 'Active Manufacturing Unit', highlight: true },
                ].map((row, i) => (
                  <div key={i} style={{
                    display: 'flex', justifyContent: 'space-between',
                    padding: '0.75rem 0',
                    borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
                    fontSize: '0.88rem',
                  }}>
                    <span style={{ color: 'var(--text-body)' }}>{row.day}</span>
                    <span style={{ color: row.highlight ? 'var(--accent-green)' : 'var(--text-heading)', fontWeight: '600' }}>{row.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── Right column: Works Address & Plant Details ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            {/* Works Address & GST */}
            <div className="glass-card" style={{ padding: '1.75rem' }}>
              <h3 style={{ color: 'var(--text-heading)', fontSize: '1.1rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-display)' }}>
                <MapPin size={18} color="var(--primary)" /> Registered Works Address
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', color: 'var(--text-heading)', fontWeight: '600', lineHeight: 1.5 }}>
                  <MapPin size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Gala No-2, Gate No-50, Village-Vasuli,<br />Dist-Pune, Maharashtra - 410501, India</span>
                </div>
                <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center', color: 'var(--text-body)' }}>
                  <Wrench size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
                  <span style={{ fontWeight: '700', color: 'var(--text-heading)' }}>GSTIN: 27DNUPP9825G1Z3</span>
                </div>
                <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center', color: 'var(--text-body)' }}>
                  <Mail size={16} color="var(--accent-teal)" style={{ flexShrink: 0 }} />
                  <a href="mailto:Transparts0125@gmail.com" style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.95rem' }}>Transparts0125@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Static Inquiry Information Card */}
            <div className="glass-card" style={{ padding: '1.75rem', background: 'var(--primary-bg)', border: '1.5px solid var(--border-blue)' }}>
              <h3 style={{ color: 'var(--primary)', fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-display)' }}>
                <FileCheck size={20} /> Static Information Portal
              </h3>
              <p style={{ color: 'var(--text-body)', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                For component specifications, drawing evaluation, or batch manufacturing requirements, please contact our Pune plant team directly via phone or email.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  'Direct Phone / WhatsApp: +91 98923 20872',
                  'Official Email: Transparts0125@gmail.com',
                  'Physical Plant Audits & Inspection Welcome'
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.84rem', color: 'var(--primary)', fontWeight: '600' }}>
                    <CheckCircle2 size={14} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

