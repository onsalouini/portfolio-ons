import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '80px 24px', background: '#FDF8F5' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 40,
          textAlign: 'center', color: '#2D2D2D', marginBottom: 8 }}>Compétences</h2>
        <div style={{ width: 64, height: 4, background: '#C96B6B',
          margin: '0 auto 48px', borderRadius: 4 }} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {portfolioData.skills.map((skill, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 20, padding: 24,
              boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 17,
                  color: '#2D2D2D', fontWeight: 600 }}>{skill.category}</h3>
                <span style={{ color: '#C96B6B', fontWeight: 700, fontSize: 13 }}>{skill.level}%</span>
              </div>
              <div style={{ background: '#F9E8E8', borderRadius: 10, height: 8, marginBottom: 16 }}>
                <div style={{ width: `${skill.level}%`, height: 8, borderRadius: 10,
                  background: 'linear-gradient(to right, #E8A0A0, #9B72CF)' }} />
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {skill.items.map((item, j) => (
                  <span key={j} style={{ background: '#EDE0F5', color: '#9B72CF',
                    padding: '4px 12px', borderRadius: 50, fontSize: 12, fontWeight: 500 }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}