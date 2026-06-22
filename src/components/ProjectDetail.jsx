import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

const statusColor = {
  "Complété": { bg: '#dcfce7', color: '#16a34a' },
  "En cours": { bg: '#fef9c3', color: '#ca8a04' },
  "60% complété": { bg: '#dbeafe', color: '#2563eb' },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = portfolioData.projects.find(p => p.id === id);

  if (!project) {
    return (
      <div style={{ textAlign: 'center', padding: 80 }}>
        <h2>Projet non trouvé</h2>
        <button onClick={() => navigate('/')} style={{
          background: '#C96B6B', color: '#fff', border: 'none',
          padding: '12px 24px', borderRadius: 50, cursor: 'pointer', marginTop: 16
        }}>← Retour</button>
      </div>
    );
  }

  const sc = statusColor[project.status] || { bg: '#f3f4f6', color: '#6b7280' };

  return (
    <div style={{ background: '#FDF8F5', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #F9E8E8, #EDE0F5)',
        padding: '60px 24px 40px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <button onClick={() => navigate('/')} style={{
            background: 'none', border: '2px solid #C96B6B', color: '#C96B6B',
            padding: '8px 20px', borderRadius: 50, cursor: 'pointer',
            fontWeight: 600, marginBottom: 32, fontSize: 14 }}>
            ← Retour au portfolio
          </button>

          <span style={{ background: sc.bg, color: sc.color,
            fontSize: 13, fontWeight: 600, padding: '5px 14px',
            borderRadius: 50, display: 'inline-block', marginBottom: 16 }}>
            {project.status}
          </span>

          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 48,
            color: '#2D2D2D', marginBottom: 16, lineHeight: 1.2 }}>
            {project.title}
          </h1>

          <p style={{ color: '#666', fontSize: 18, lineHeight: 1.7,
            maxWidth: 700, marginBottom: 24 }}>
            {project.description}
          </p>

          {/* Tech Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {project.tech.map((t, i) => (
              <span key={i} style={{ background: '#fff', color: '#9B72CF',
                padding: '6px 16px', borderRadius: 50, fontSize: 13,
                fontWeight: 600, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Contenu */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>

        {/* Vidéo démo */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 28,
            color: '#2D2D2D', marginBottom: 20 }}>🎬 Démonstration</h2>

          {project.video ? (
  <div style={{ borderRadius: 20, overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0,0,0,0.12)', position: 'relative',
    paddingBottom: '56.25%', height: 0 }}>
    <iframe
      src={`https://www.youtube.com/embed/${project.video}`}
      title={project.title}
      style={{ position: 'absolute', top: 0, left: 0,
        width: '100%', height: '100%', border: 'none' }}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
) : (
            <div style={{ background: '#fff', borderRadius: 20, padding: 48,
              textAlign: 'center', border: '2px dashed #E8A0A0' }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🎬</div>
              <p style={{ color: '#bbb', fontSize: 16 }}>
                Vidéo de démonstration bientôt disponible
              </p>
            </div>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>

          {/* Description détaillée */}
          <div style={{ background: '#fff', borderRadius: 20, padding: 32,
            boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 24,
              color: '#C96B6B', marginBottom: 16 }}>📋 Description</h2>
            <p style={{ color: '#666', lineHeight: 1.8, fontSize: 15 }}>
              {project.longDescription}
            </p>
          </div>

          {/* Fonctionnalités */}
          <div style={{ background: '#fff', borderRadius: 20, padding: 32,
            boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 24,
              color: '#9B72CF', marginBottom: 16 }}>✨ Fonctionnalités</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {project.features.map((f, i) => (
                <li key={i} style={{ display: 'flex', gap: 10,
                  marginBottom: 12, color: '#555', fontSize: 14, lineHeight: 1.6 }}>
                  <span style={{ color: '#C96B6B', fontWeight: 700, flexShrink: 0 }}>↳</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bouton GitHub */}
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href={project.github} target="_blank" rel="noreferrer" style={{
            display: 'inline-block',
            background: 'linear-gradient(to right, #C96B6B, #9B72CF)',
            color: '#fff', padding: '16px 40px', borderRadius: 50,
            fontWeight: 700, textDecoration: 'none', fontSize: 16,
            boxShadow: '0 4px 20px rgba(201,107,107,0.3)' }}>
            🔗 Voir le code sur GitHub
          </a>
        </div>
      </div>
    </div>
  );
}