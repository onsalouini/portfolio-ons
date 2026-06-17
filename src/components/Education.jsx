import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" style={{ padding: '80px 24px', background: '#FDF8F5' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 40,
          textAlign: 'center', color: '#2D2D2D', marginBottom: 8 }}>Formation</h2>
        <div style={{ width: 64, height: 4, background: '#C96B6B',
          margin: '0 auto 48px', borderRadius: 4 }} />

        <div style={{ borderLeft: '2px solid #E8A0A0', paddingLeft: 32, marginLeft: 12 }}>
          {portfolioData.education.map((edu, i) => (
            <div key={i} style={{ marginBottom: 32, position: 'relative' }}>
              <div style={{ position: 'absolute', left: -44, top: 4,
                width: 24, height: 24, borderRadius: '50%', background: '#C96B6B',
                border: '4px solid #FDF8F5', boxShadow: '0 0 0 2px #E8A0A0' }} />
              <div style={{ background: '#fff', borderRadius: 20, padding: 24,
                border: '1px solid #F9E8E8', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <span style={{ color: '#9B72CF', fontSize: 12, fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: 1 }}>{edu.period}</span>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 20,
                  color: '#2D2D2D', margin: '6px 0 4px' }}>{edu.degree}</h3>
                <p style={{ color: '#C96B6B', fontWeight: 500, fontSize: 14, marginBottom: 4 }}>
                  {edu.school}
                </p>
                <p style={{ color: '#bbb', fontSize: 12, marginBottom: edu.highlight ? 12 : 0 }}>
                  {edu.location}
                </p>
                {edu.highlight && (
                  <span style={{ background: '#F9E8E8', color: '#C96B6B',
                    fontSize: 12, padding: '4px 12px', borderRadius: 50, fontWeight: 500 }}>
                    ⭐ {edu.highlight}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 36,
          textAlign: 'center', color: '#2D2D2D', margin: '64px 0 8px' }}>Expérience</h2>
        <div style={{ width: 64, height: 4, background: '#9B72CF',
          margin: '0 auto 40px', borderRadius: 4 }} />

        <div style={{ borderLeft: '2px solid #9B72CF', paddingLeft: 32, marginLeft: 12 }}>
          {portfolioData.experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: 32, position: 'relative' }}>
              <div style={{ position: 'absolute', left: -44, top: 4,
                width: 24, height: 24, borderRadius: '50%', background: '#9B72CF',
                border: '4px solid #FDF8F5' }} />
              <div style={{ background: '#fff', borderRadius: 20, padding: 24,
                border: '1px solid #EDE0F5' }}>
                <span style={{ color: '#C96B6B', fontSize: 12, fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: 1 }}>{exp.period}</span>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 20,
                  color: '#2D2D2D', margin: '6px 0 4px' }}>{exp.role}</h3>
                <p style={{ color: '#9B72CF', fontWeight: 500, fontSize: 14, marginBottom: 12 }}>
                  {exp.company} — {exp.location}
                </p>
                {exp.tasks.map((task, j) => (
                  <p key={j} style={{ color: '#888', fontSize: 14, marginBottom: 6 }}>
                    <span style={{ color: '#C96B6B' }}>↳</span> {task}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}