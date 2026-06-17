import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { email, phone, github, linkedin, cv } = portfolioData.personal;
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = () => { setSent(true); setForm({ name: '', email: '', message: '' }); };

  return (
    <section id="contact" style={{ padding: '80px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 40,
          textAlign: 'center', color: '#2D2D2D', marginBottom: 8 }}>Contact</h2>
        <div style={{ width: 64, height: 4, background: '#C96B6B',
          margin: '0 auto 48px', borderRadius: 4 }} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48 }}>
          <div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 24,
              color: '#C96B6B', marginBottom: 24 }}>Restons en contact ✨</h3>
            {[
              { icon: '📧', label: email, href: `mailto:${email}` },
              { icon: '📱', label: phone, href: `tel:${phone}` },
              { icon: '💻', label: 'GitHub', href: github },
              { icon: '💼', label: 'LinkedIn', href: linkedin },
            ].map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: 12, color: '#666',
                textDecoration: 'none', marginBottom: 16, fontSize: 15 }}>
                <span style={{ fontSize: 20 }}>{item.icon}</span> {item.label}
              </a>
            ))}
            <a href={cv} download style={{
              display: 'inline-block', marginTop: 8,
              background: 'linear-gradient(to right, #C96B6B, #9B72CF)',
              color: '#fff', padding: '12px 24px', borderRadius: 50,
              fontWeight: 600, textDecoration: 'none', fontSize: 14 }}>
              📄 Télécharger mon CV
            </a>
          </div>

          <div>
            {sent ? (
              <div style={{ textAlign: 'center', paddingTop: 40 }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🌸</div>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, color: '#C96B6B' }}>
                  Message envoyé !
                </p>
                <p style={{ color: '#999', fontSize: 14 }}>Je vous répondrai très bientôt.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {['name', 'email'].map(field => (
                  <input key={field} type={field} name={field}
                    placeholder={field === 'name' ? 'Votre nom' : 'Votre email'}
                    value={form[field]} onChange={handleChange}
                    style={{ border: '1px solid #E8A0A0', borderRadius: 12,
                      padding: '12px 16px', fontSize: 14, background: '#FDF8F5',
                      outline: 'none', width: '100%', boxSizing: 'border-box' }} />
                ))}
                <textarea name="message" placeholder="Votre message..."
                  rows={5} value={form.message} onChange={handleChange}
                  style={{ border: '1px solid #E8A0A0', borderRadius: 12,
                    padding: '12px 16px', fontSize: 14, background: '#FDF8F5',
                    outline: 'none', resize: 'none', width: '100%', boxSizing: 'border-box' }} />
                <button onClick={handleSubmit} style={{
                  background: 'linear-gradient(to right, #C96B6B, #9B72CF)',
                  color: '#fff', padding: '14px', borderRadius: 12, border: 'none',
                  fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>
                  Envoyer ✨
                </button>
              </div>
            )}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 64, color: '#ccc', fontSize: 13 }}>
          © 2026 Ons Alouini — Fait avec 🌸 React.js
        </div>
      </div>
    </section>
  );
}