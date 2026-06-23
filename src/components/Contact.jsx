import React, { useState} from 'react';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolioData';

// ✅ TES CLÉS EMAILJS (mises à jour)
const SERVICE_ID = 'service_r5p9p7e';
const TEMPLATE_ID = 'template_yw8hpzr';  // ← NOUVEAU template ID
const PUBLIC_KEY = 'EXTbFDV0ngaZ8OfJq';

export default function Contact() {
  const { email, phone, github, linkedin, cv } = portfolioData.personal;
  //const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault(); // ← Empêche le rechargement de la page
    
    // Validation
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      // Envoi du formulaire via EmailJS
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      );

      console.log('✅ Email envoyé avec succès:', result.text);
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('❌ Erreur EmailJS:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" style={{ padding: '80px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 40,
          textAlign: 'center', color: '#2D2D2D', marginBottom: 8 }}>Contact</h2>
        <div style={{ width: 64, height: 4, background: '#C96B6B',
          margin: '0 auto 48px', borderRadius: 4 }} />

        <div style={{ display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48 }}>

          {/* Infos contact */}
          <div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 24,
              color: '#C96B6B', marginBottom: 24 }}>Restons en contact ✨</h3>

            {[
              { icon: '📧', label: email, href: `mailto:${email}` },
              { icon: '📱', label: phone, href: `tel:${phone}` },
              { icon: '💻', label: 'GitHub', href: github },
              { icon: '💼', label: 'LinkedIn', href: linkedin },
            ].map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 12,
                  color: '#666', textDecoration: 'none', marginBottom: 16,
                  fontSize: 15, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#C96B6B'}
                onMouseLeave={e => e.currentTarget.style.color = '#666'}>
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

            {/* Disponibilité */}
            <div style={{ marginTop: 32, background: '#F9E8E8', borderRadius: 16,
              padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%',
                  background: '#22c55e' }} />
                <span style={{ fontWeight: 700, color: '#2D2D2D', fontSize: 14 }}>
                  Disponible pour un stage
                </span>
              </div>
              <p style={{ color: '#888', fontSize: 13, lineHeight: 1.6 }}>
                Je recherche un stage PFE en Data Science / IA pour 2027,
                idéalement en France. N'hésitez pas à me contacter ! 🌸
              </p>
            </div>
          </div>

          {/* Formulaire */}
          <div>
            {status === 'sent' ? (
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <div style={{ fontSize: 64, marginBottom: 16 }}>🌸</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 24,
                  color: '#C96B6B', marginBottom: 8 }}>Message envoyé !</h3>
                <p style={{ color: '#999', marginBottom: 24 }}>
                  Je vous répondrai dans les plus brefs délais.
                </p>
                <button onClick={() => setStatus('idle')}
                  style={{ border: '2px solid #C96B6B', color: '#C96B6B',
                    background: 'none', padding: '10px 24px', borderRadius: 50,
                    cursor: 'pointer', fontWeight: 600 }}>
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#2D2D2D',
                    display: 'block', marginBottom: 6 }}>Votre nom *</label>
                  <input type="text" name="name"
                    placeholder="Jean Dupont"
                    value={form.name} onChange={handleChange}
                    style={{ border: '2px solid #F9E8E8', borderRadius: 12,
                      padding: '12px 16px', fontSize: 14, background: '#FDF8F5',
                      outline: 'none', width: '100%', boxSizing: 'border-box',
                      transition: 'border-color 0.2s' }}
                    onFocus={e => e.target.style.borderColor = '#C96B6B'}
                    onBlur={e => e.target.style.borderColor = '#F9E8E8'} />
                </div>

                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#2D2D2D',
                    display: 'block', marginBottom: 6 }}>Votre email *</label>
                  <input type="email" name="email"
                    placeholder="jean@company.com"
                    value={form.email} onChange={handleChange}
                    style={{ border: '2px solid #F9E8E8', borderRadius: 12,
                      padding: '12px 16px', fontSize: 14, background: '#FDF8F5',
                      outline: 'none', width: '100%', boxSizing: 'border-box',
                      transition: 'border-color 0.2s' }}
                    onFocus={e => e.target.style.borderColor = '#C96B6B'}
                    onBlur={e => e.target.style.borderColor = '#F9E8E8'} />
                </div>

                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#2D2D2D',
                    display: 'block', marginBottom: 6 }}>Votre message *</label>
                  <textarea name="message"
                    placeholder="Bonjour, je suis recruteur chez... je souhaite vous proposer..."
                    rows={5} value={form.message} onChange={handleChange}
                    style={{ border: '2px solid #F9E8E8', borderRadius: 12,
                      padding: '12px 16px', fontSize: 14, background: '#FDF8F5',
                      outline: 'none', resize: 'none', width: '100%',
                      boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                    onFocus={e => e.target.style.borderColor = '#C96B6B'}
                    onBlur={e => e.target.style.borderColor = '#F9E8E8'} />
                </div>

                {status === 'error' && (
                  <p style={{ color: '#ef4444', fontSize: 13, margin: 0 }}>
                    ❌ Erreur lors de l'envoi. Vérifiez votre connexion ou contactez-moi directement.
                  </p>
                )}

                <button type="submit"
                  disabled={status === 'sending'}
                  style={{ background: status === 'sending'
                    ? '#ccc' : 'linear-gradient(to right, #C96B6B, #9B72CF)',
                    color: '#fff', padding: '14px', borderRadius: 12,
                    border: 'none', fontWeight: 600, fontSize: 15,
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    transition: 'opacity 0.2s' }}>
                  {status === 'sending' ? '⏳ Envoi en cours...' : 'Envoyer ✨'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', marginTop: 64,
          color: '#ccc', fontSize: 13 }}>
          © 2026 Ons Alouini — Fait avec 🌸 React.js
        </div>
      </div>
    </section>
  );
}