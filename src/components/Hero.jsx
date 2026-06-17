import React from 'react';
import { portfolioData } from '../data/portfolioData';
import photo from '../assets/photo.jpg';
export default function Hero() {
  const { name, title, github, linkedin, cv } = portfolioData.personal;

  return (
    <section id="hero" style={{
      minHeight: '100vh', background: '#FDF8F5',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '80px 24px 40px'
    }}>
      <div style={{ maxWidth: 1100, width: '100%', display: 'flex',
        flexWrap: 'wrap', alignItems: 'center', gap: 48, justifyContent: 'center' }}>
        <div style={{ flexShrink: 0 }}>
          <div style={{ width: 280, height: 280, borderRadius: '50%',
            overflow: 'hidden', border: '4px solid #E8A0A0',
            boxShadow: '0 20px 60px rgba(201,107,107,0.2)' }}>
            <img src={photo}
              alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 280 }}>
          <p style={{ color: '#9B72CF', fontWeight: 600, letterSpacing: 3,
            fontSize: 13, textTransform: 'uppercase', marginBottom: 8 }}>
            Bienvenue sur mon portfolio
          </p>
          <h1 style={{ fontSize: 52, fontWeight: 700, color: '#2D2D2D',
            fontFamily: 'Playfair Display, serif', marginBottom: 8, lineHeight: 1.2 }}>
            {name}
          </h1>
          <h2 style={{ fontSize: 20, color: '#C96B6B', fontWeight: 500, marginBottom: 16 }}>
            {title}
          </h2>
          <p style={{ color: '#888', maxWidth: 480, lineHeight: 1.7, marginBottom: 32 }}>
            Passionnée par l'IA appliquée et le développement web full-stack.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a href={cv} download style={{ background: '#C96B6B', color: '#fff',
              padding: '12px 24px', borderRadius: 50, fontWeight: 600,
              textDecoration: 'none' }}>📄 Télécharger CV</a>
            <a href={github} target="_blank" rel="noreferrer" style={{
              border: '2px solid #C96B6B', color: '#C96B6B', padding: '12px 24px',
              borderRadius: 50, fontWeight: 600, textDecoration: 'none' }}>GitHub</a>
            <a href={linkedin} target="_blank" rel="noreferrer" style={{
              border: '2px solid #9B72CF', color: '#9B72CF', padding: '12px 24px',
              borderRadius: 50, fontWeight: 600, textDecoration: 'none' }}>LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}