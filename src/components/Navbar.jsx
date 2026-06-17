import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: "À propos", to: "about" },
  { label: "Compétences", to: "skills" },
  { label: "Projets", to: "projects" },
  { label: "Formation", to: "education" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? '0 1px 20px rgba(0,0,0,0.06)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '16px 24px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 22,
          fontWeight: 700, color: '#C96B6B' }}>Ons Alouini</span>

        <div style={{ display: 'flex', gap: 32 }}>
          {navLinks.map(link => (
            <button key={link.to} onClick={() => scrollTo(link.to)}
              style={{ background: 'none', border: 'none', cursor: 'pointer',
                color: '#2D2D2D', fontWeight: 500, fontSize: 14, fontFamily: 'Inter, sans-serif' }}>
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}