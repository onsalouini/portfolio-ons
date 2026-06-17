import React from 'react';
import { portfolioData } from '../data/portfolioData';

const statusColor = {
  "Complété": { bg: '#dcfce7', color: '#16a34a' },
  "En cours": { bg: '#fef9c3', color: '#ca8a04' },
  "60% complété": { bg: '#dbeafe', color: '#2563eb' },
};

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '80px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 40,
          textAlign: 'center', color: '#2D2D2D', marginBottom: 8 }}>Projets</h2>
        <div style={{ width: 64, height: 4, background: '#C96B6B',
          margin: '0 auto 48px', borderRadius: 4 }} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {portfolioData.projects.map((project, i) => {
            const sc = statusColor[project.status] || { bg: '#f3f4f6', color: '#6b7280' };
            return (
              <div key={i} style={{ background: '#FDF8F5', borderRadius: 20, padding: 24,
                border: '1px solid #F9E8E8', display: 'flex', flexDirection: 'column',
                justifyContent: 'space-between', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <div>
                  <span style={{ background: sc.bg, color: sc.color,
                    fontSize: 12, fontWeight: 600, padding: '4px 12px', borderRadius: 50 }}>
                    {project.status}
                  </span>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 20,
                    color: '#2D2D2D', margin: '12px 0 8px' }}>{project.title}</h3>
                  <p style={{ color: '#888', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                    {project.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                    {project.tech.map((t, j) => (
                      <span key={j} style={{ background: '#EDE0F5', color: '#9B72CF',
                        padding: '3px 10px', borderRadius: 50, fontSize: 12, fontWeight: 500 }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <a href={project.github} target="_blank" rel="noreferrer"
                  style={{ color: '#C96B6B', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
                  🔗 Voir sur GitHub
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}