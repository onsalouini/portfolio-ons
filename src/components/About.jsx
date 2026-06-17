import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about } = portfolioData.personal;

  return (
    <section id="about" style={{ padding: '80px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 40,
          textAlign: 'center', color: '#2D2D2D', marginBottom: 8 }}>À Propos</h2>
        <div style={{ width: 64, height: 4, background: '#C96B6B',
          margin: '0 auto 48px', borderRadius: 4 }} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48 }}>
          <div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 24,
              color: '#C96B6B', marginBottom: 16 }}>Qui suis-je ?</h3>
            <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 24 }}>{about}</p>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 20,
              color: '#9B72CF', marginBottom: 12 }}>Soft Skills</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {portfolioData.softSkills.map((s, i) => (
                <span key={i} style={{ background: '#F9E8E8', color: '#C96B6B',
                  padding: '6px 16px', borderRadius: 50, fontSize: 13, fontWeight: 500 }}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 24,
              color: '#C96B6B', marginBottom: 24 }}>Langues</h3>
            {portfolioData.languages.map((l, i) => (
              <div key={i} style={{ marginBottom: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontWeight: 600, color: '#2D2D2D' }}>{l.lang}</span>
                  <span style={{ color: '#999', fontSize: 13 }}>{l.level}</span>
                </div>
                <div style={{ background: '#F9E8E8', borderRadius: 10, height: 8 }}>
                  <div style={{ width: `${l.percent}%`, height: 8, borderRadius: 10,
                    background: 'linear-gradient(to right, #E8A0A0, #9B72CF)',
                    transition: 'width 1s ease' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}