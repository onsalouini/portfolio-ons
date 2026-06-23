import React, { useState, useEffect } from 'react';
import { useLang } from '../context/LanguageContext';
import logo from '../assets/logo.png';

export default function Navbar() {
  const { lang, toggle, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setMenuOpen(false);
  };

  const navLinks = [
    { label: t.nav.about, to: 'about' },
    { label: t.nav.skills, to: 'skills' },
    { label: t.nav.projects, to: 'projects' },
    { label: t.nav.education, to: 'education' },
    { label: t.nav.certifications, to: 'certifications' },
    { label: t.nav.contact, to: 'contact' },
  ];

  return (
    <>
      <style>{`
        .nav-pill {
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
          color: #555;
          font-weight: 500;
          font-size: 13.5px;
          font-family: 'Inter', sans-serif;
          padding: 7px 14px;
          border-radius: 20px;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .nav-pill:hover {
          color: #C96B6B;
          background: rgba(201,107,107,0.08);
        }
        .nav-pill.active {
          color: #C96B6B;
          background: rgba(201,107,107,0.1);
          font-weight: 700;
        }
        .lang-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, rgba(201,107,107,0.1), rgba(155,114,207,0.1));
          border: 1.5px solid rgba(201,107,107,0.2);
          border-radius: 22px;
          padding: 7px 16px;
          cursor: pointer;
          font-weight: 700;
          font-size: 12px;
          color: #C96B6B;
          transition: all 0.2s;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.5px;
        }
        .lang-btn:hover {
          background: linear-gradient(135deg, rgba(201,107,107,0.18), rgba(155,114,207,0.18));
          border-color: #C96B6B;
          transform: scale(1.04);
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .desktop-links { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
        @media (min-width: 901px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>

      {/* Navbar — flottante avec cadre */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? '10px 24px' : '16px 24px',
        transition: 'all 0.35s ease',
        display: 'flex', justifyContent: 'center',
      }}>
        {/* Barre intérieure cadrée */}
        <div style={{
          maxWidth: 1200, width: '100%',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: scrolled
            ? 'rgba(255,255,255,0.92)'
            : 'rgba(255,255,255,0.75)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: 24,
          border: '1px solid rgba(201,107,107,0.15)',
          boxShadow: scrolled
            ? '0 8px 40px rgba(201,107,107,0.12), 0 0 0 1px rgba(255,255,255,0.8)'
            : '0 4px 24px rgba(0,0,0,0.06), 0 0 0 1px rgba(255,255,255,0.6)',
          padding: '10px 20px',
          transition: 'all 0.35s ease',
        }}>

          {/* Logo + Nom */}
          <div onClick={() => scrollTo('hero')}
            style={{ display: 'flex', alignItems: 'center', gap: 10,
              cursor: 'pointer', flexShrink: 0 }}>
            <div style={{
              width: 38, height: 38, borderRadius: '50%',
              overflow: 'hidden',
              border: '2px solid rgba(201,107,107,0.25)',
              boxShadow: '0 2px 12px rgba(201,107,107,0.15)',
              flexShrink: 0,
            }}>
              <img src={logo} alt="Logo"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div>
              <div style={{
                fontFamily: 'Playfair Display, serif', fontSize: 17, fontWeight: 700,
                background: 'linear-gradient(135deg, #1a1a2e, #C96B6B)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                lineHeight: 1.1,
              }}>
                Ons Alouini
              </div>
              <div style={{ fontSize: 9, color: '#aaa', fontWeight: 600,
                textTransform: 'uppercase', letterSpacing: 1.5 }}>
                AI & Data Science
              </div>
            </div>
          </div>

          {/* Desktop links */}
          <div className="desktop-links"
            style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {navLinks.map(link => (
              <button key={link.to}
                className={`nav-pill ${active === link.to ? 'active' : ''}`}
                onClick={() => scrollTo(link.to)}>
                {link.label}
              </button>
            ))}
          </div>

          {/* Toggle FR/EN + mobile burger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <button className="lang-btn" onClick={toggle}>
              <span style={{ fontSize: 16 }}>{lang === 'fr' ? '🇫🇷' : '🇬🇧'}</span>
              <span>{lang === 'fr' ? 'EN' : 'FR'}</span>
            </button>

            {/* Burger mobile */}
            <button className="mobile-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'rgba(201,107,107,0.1)', border: '1px solid rgba(201,107,107,0.2)',
                borderRadius: 12, width: 38, height: 38, cursor: 'pointer',
                display: 'none', alignItems: 'center', justifyContent: 'center',
                fontSize: 18, color: '#C96B6B' }}>
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu mobile */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 80, left: 16, right: 16, zIndex: 99,
          background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(20px)',
          borderRadius: 20, padding: '16px',
          boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
          border: '1px solid rgba(201,107,107,0.15)',
          animation: 'slideDown 0.25s ease',
        }}>
          {navLinks.map(link => (
            <button key={link.to} onClick={() => scrollTo(link.to)}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                border: 'none', cursor: 'pointer',
                padding: '12px 16px', fontSize: 15, fontWeight: 500,
                color: active === link.to ? '#C96B6B' : '#444',
                borderRadius: 12, marginBottom: 4,
                fontFamily: 'Inter, sans-serif',
                background: active === link.to ? 'rgba(201,107,107,0.08)' : 'none',
              }}>
              {link.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}