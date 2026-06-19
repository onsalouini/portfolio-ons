import React, { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { useLang } from '../context/LanguageContext';
import photo from '../assets/photo.jpg';
import logo from '../assets/logo.png';

function Particles() {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 5 + 2,
    duration: Math.random() * 14 + 8,
    delay: Math.random() * 6,
    color: ['#E8A0A0', '#9B72CF', '#A8C8E8'][i % 3],
  }));

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
      {particles.map(p => (
        <div key={p.id} style={{
          position: 'absolute', left: `${p.x}%`, top: `${p.y}%`,
          width: p.size, height: p.size, borderRadius: '50%',
          background: p.color, opacity: 0.18,
          animation: `floatP ${p.duration}s ${p.delay}s infinite ease-in-out alternate`,
        }} />
      ))}
      <style>{`
        @keyframes floatP {
          from { transform: translateY(0) scale(1); opacity: 0.12; }
          to { transform: translateY(-22px) scale(1.4); opacity: 0.35; }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-32px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(32px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.22); opacity: 0; }
        }
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes scrollB {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(9px); }
        }
        @keyframes greenPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
          50% { box-shadow: 0 0 0 5px rgba(34,197,94,0); }
        }
        @keyframes logoFloat {
          0%, 100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
          50% { transform: translate(-50%, -50%) scale(1.04) rotate(2deg); }
        }
      `}</style>
    </div>
  );
}

function TypingText({ texts }) {
  const [displayed, setDisplayed] = useState('');
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const cur = texts[idx];
    const speed = deleting ? 40 : 90;
    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplayed(cur.slice(0, displayed.length + 1));
        if (displayed.length + 1 === cur.length)
          setTimeout(() => setDeleting(true), 1800);
      } else {
        setDisplayed(cur.slice(0, displayed.length - 1));
        if (displayed.length === 0) {
          setDeleting(false);
          setIdx((idx + 1) % texts.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [displayed, deleting, idx, texts]);

  return (
    <span>
      <span style={{ color: '#C96B6B', fontWeight: 600 }}>{displayed}</span>
      <span style={{ animation: 'blink 0.7s infinite',
        borderRight: '2.5px solid #C96B6B', marginLeft: 1 }} />
    </span>
  );
}

export default function Hero() {
  const { t } = useLang();
  const { name, github, linkedin, cv } = portfolioData.personal;

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      background: 'linear-gradient(145deg, #FFFAFA 0%, #FEF0F0 25%, #F7F0FC 60%, #EEF5FD 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '110px 40px 70px', position: 'relative', overflow: 'hidden',
    }}>
      <Particles />

      {/* Logo en arrière-plan transparent */}
      <img src={logo} alt="" style={{
        position: 'absolute', top: '50%', left: '50%',
        width: 520, height: 520, objectFit: 'contain',
        opacity: 0.1, filter: 'grayscale(100%)',
        animation: 'logoFloat 8s infinite ease-in-out',
        zIndex: 0, pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
      }} />

      {/* Blobs doux */}
      <div style={{ position: 'absolute', top: '-8%', right: '-8%', width: 440, height: 440,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,160,160,0.1) 0%, transparent 70%)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-8%', left: '-8%', width: 380, height: 380,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(155,114,207,0.09) 0%, transparent 70%)', zIndex: 0 }} />

      {/* Contenu principal — 2 colonnes */}
      <div style={{
        maxWidth: 1200, width: '100%',
        display: 'grid', gridTemplateColumns: '1.1fr 0.9fr',
        gap: 72, alignItems: 'center',
        position: 'relative', zIndex: 1,
      }}>

        {/* ── Gauche : Texte ── */}
        <div style={{ animation: 'fadeLeft 0.8s 0.1s ease both' }}>

          {/* Badge disponible */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28,
            background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(14px)',
            border: '1px solid rgba(34,197,94,0.25)', borderRadius: 30,
            padding: '8px 20px',
            boxShadow: '0 2px 16px rgba(34,197,94,0.08)',
          }}>
            <div style={{ width: 9, height: 9, borderRadius: '50%',
              background: '#22c55e', animation: 'greenPulse 2s infinite' }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: '#444',
              textTransform: 'uppercase', letterSpacing: 1.5 }}>
              {t.hero.available}
            </span>
          </div>

          {/* Nom */}
          <h1 style={{
            fontSize: 60, fontWeight: 800, lineHeight: 1.08, marginBottom: 16,
            fontFamily: 'Playfair Display, serif',
            background: 'linear-gradient(135deg, #1a1a2e 20%, #C96B6B 80%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            {name}
          </h1>

          {/* Typing */}
          <div style={{ fontSize: 21, marginBottom: 18, minHeight: 38, color: '#666' }}>
            <TypingText texts={t.hero.typing} />
          </div>

          {/* Ligne déco */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
            <div style={{ height: 2, width: 52,
              background: 'linear-gradient(to right, #C96B6B, #9B72CF)', borderRadius: 2 }} />
            <span style={{ color: '#C96B6B', fontSize: 16 }}>✦</span>
            <div style={{ height: 2, width: 52,
              background: 'linear-gradient(to right, #9B72CF, #A8C8E8)', borderRadius: 2 }} />
          </div>

          {/* Bio */}
          <p style={{ color: '#6b7280', lineHeight: 1.9, fontSize: 15.5,
            marginBottom: 32, maxWidth: 500 }}>
            {t.hero.bio}
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 14, marginBottom: 36, flexWrap: 'wrap' }}>
            {[
              { val: '95%', label: 'AI Accuracy', icon: '🤖', color: '#C96B6B' },
              { val: '6+', label: t.nav?.projects || 'Projets', icon: '💡', color: '#9B72CF' },
              { val: '3', label: t.about?.languages || 'Langues', icon: '🌍', color: '#A8C8E8' },
            ].map((s, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(14px)',
                border: `1px solid ${s.color}25`,
                borderRadius: 20, padding: '14px 22px', textAlign: 'center',
                boxShadow: `0 4px 20px ${s.color}10`,
                minWidth: 96, transition: 'transform 0.25s, box-shadow 0.25s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = `0 10px 30px ${s.color}25`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 4px 20px ${s.color}10`;
                }}>
                <div style={{ fontSize: 20, marginBottom: 5 }}>{s.icon}</div>
                <div style={{ fontSize: 24, fontWeight: 800, color: s.color,
                  fontFamily: 'Playfair Display, serif' }}>{s.val}</div>
                <div style={{ fontSize: 10, color: '#aaa', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: 1, marginTop: 3 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Boutons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a href={cv} download style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'linear-gradient(135deg, #C96B6B 0%, #9B72CF 100%)',
              color: '#fff', padding: '15px 30px', borderRadius: 50,
              fontWeight: 700, textDecoration: 'none', fontSize: 14,
              boxShadow: '0 6px 24px rgba(201,107,107,0.32)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 14px 36px rgba(201,107,107,0.42)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(201,107,107,0.32)';
              }}>
              {t.hero.downloadCV}
            </a>

            {[
              { href: github, label: '💻 GitHub', c: '#C96B6B', hbg: '#FEF0F0' },
              { href: linkedin, label: '💼 LinkedIn', c: '#9B72CF', hbg: '#F5EEF8' },
            ].map((btn, i) => (
              <a key={i} href={btn.href} target="_blank" rel="noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(12px)',
                border: `2px solid ${btn.c}35`, color: btn.c,
                padding: '15px 26px', borderRadius: 50, fontWeight: 700,
                textDecoration: 'none', fontSize: 14,
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = btn.hbg;
                  e.currentTarget.style.borderColor = btn.c;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.88)';
                  e.currentTarget.style.borderColor = `${btn.c}35`;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                {btn.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Droite : Photo ── */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',
          animation: 'fadeRight 0.9s 0.2s ease both' }}>
          <div style={{ position: 'relative' }}>

            {/* Anneaux pulsants */}
            <div style={{ position: 'absolute', inset: -14, borderRadius: '50%',
              border: '1.5px solid rgba(201,107,107,0.2)',
              animation: 'pulseRing 3s infinite ease-out' }} />
            <div style={{ position: 'absolute', inset: -30, borderRadius: '50%',
              border: '1px solid rgba(155,114,207,0.12)',
              animation: 'pulseRing 3s 0.9s infinite ease-out' }} />

            {/* Photo — format portrait professionnel */}
            <div style={{
              width: 340, height: 420,
              borderRadius: '50% 50% 48% 52% / 44% 44% 56% 56%',
              overflow: 'hidden',
              border: '5px solid rgba(255,255,255,0.9)',
              boxShadow: '0 32px 80px rgba(201,107,107,0.18), 0 0 0 1px rgba(232,160,160,0.2)',
              background: 'linear-gradient(180deg, #F9E8E8 0%, #EDE0F5 100%)',
            }}>
              <img src={photo} alt={name} style={{
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'top center',
              }} />
            </div>

            {/* Badge localisation */}
            <div style={{
              position: 'absolute', top: -14, left: -10,
              background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(16px)',
              borderRadius: 18, padding: '9px 16px',
              boxShadow: '0 6px 24px rgba(168,200,232,0.2)',
              border: '1px solid rgba(168,200,232,0.35)',
              display: 'flex', alignItems: 'center', gap: 7,
              fontSize: 12, fontWeight: 700, color: '#444',
            }}>
              📍 Monastir, Tunisie
            </div>

            {/* Badge AI */}
            <div style={{
              position: 'absolute', top: 60, right: -32,
              background: 'linear-gradient(135deg, #C96B6B, #9B72CF)',
              borderRadius: 20, padding: '9px 18px',
              boxShadow: '0 6px 22px rgba(201,107,107,0.3)',
              fontSize: 12, fontWeight: 700, color: '#fff',
              whiteSpace: 'nowrap',
            }}>
              🤖 AI & Data Science
            </div>

            {/* Badge disponible */}
            <div style={{
              position: 'absolute', bottom: 28, left: -28,
              background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(16px)',
              borderRadius: 22, padding: '11px 20px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.09)',
              border: '1px solid rgba(34,197,94,0.2)',
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%',
                background: '#22c55e', animation: 'greenPulse 2s infinite',
                flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 12, fontWeight: 800, color: '#2D2D2D' }}>
                  {t.hero.available}
                </div>
                <div style={{ fontSize: 10, color: '#aaa', fontWeight: 500 }}>
                  Stage PFE 2027 🎯
                </div>
              </div>
            </div>

            {/* Badge ESPRIM */}
            <div style={{
              position: 'absolute', bottom: -10, right: -16,
              background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(16px)',
              borderRadius: 18, padding: '9px 16px',
              boxShadow: '0 6px 24px rgba(155,114,207,0.15)',
              border: '1px solid rgba(155,114,207,0.2)',
              fontSize: 11, fontWeight: 700, color: '#9B72CF',
              whiteSpace: 'nowrap',
            }}>
              🎓 ESPRIM Monastir
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: 22, left: '50%',
        transform: 'translateX(-50%)', textAlign: 'center', zIndex: 1 }}>
        <div style={{ color: '#ccc', fontSize: 10, letterSpacing: 3,
          textTransform: 'uppercase', marginBottom: 9, fontWeight: 600 }}>Scroll</div>
        <div style={{ width: 28, height: 46, border: '2px solid rgba(201,107,107,0.3)',
          borderRadius: 14, margin: '0 auto', display: 'flex',
          alignItems: 'flex-start', justifyContent: 'center', padding: 5 }}>
          <div style={{ width: 4, height: 10, borderRadius: 2, background: '#C96B6B',
            animation: 'scrollB 1.6s infinite ease-in-out' }} />
        </div>
      </div>
    </section>
  );
}