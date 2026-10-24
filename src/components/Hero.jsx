import React, { useEffect, useRef, useState } from 'react';
import { useLang } from '../context/LanguageContext';
import { personal } from '../data/portfolioData';
import photo from '../assets/photo.jpg';
import { Download, GitHub, LinkedIn, Mail, Pin } from './Icons';

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Cycles through words with a soft slide, one every 2.6 s
function RotatingWord({ words }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    setI(0);
    if (reduceMotion()) return undefined;
    const id = setInterval(() => setI(n => (n + 1) % words.length), 2600);
    return () => clearInterval(id);
  }, [words]);
  return (
    <span className="rotator" aria-live="off">
      <span key={`${words[i]}-${i}`} className="rotator-word">{words[i]}</span>
    </span>
  );
}

export default function Hero() {
  const { t, tr } = useLang();
  const hero = useRef(null);
  const portrait = useRef(null);

  // Soft spotlight that follows the pointer, and a gentle parallax on the portrait
  useEffect(() => {
    const el = hero.current;
    if (!el || reduceMotion()) return undefined;
    let frame = 0;
    const onMove = e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty('--mx', `${x}px`);
        el.style.setProperty('--my', `${y}px`);
        if (portrait.current) {
          const dx = (x / r.width - 0.5) * 14;
          const dy = (y / r.height - 0.5) * 10;
          portrait.current.style.setProperty('--px', `${dx}px`);
          portrait.current.style.setProperty('--py', `${dy}px`);
        }
      });
    };
    el.addEventListener('pointermove', onMove);
    return () => { el.removeEventListener('pointermove', onMove); if (frame) cancelAnimationFrame(frame); };
  }, []);

  const letters = personal.name.split('');

  return (
    <section className="hero" id="top" ref={hero}>
      <div className="spotlight" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-text">
          <p className="hero-role stagger" style={{ '--d': '0ms' }}>
            <span>{t.hero.rolePrefix}</span> <RotatingWord words={t.hero.roleWords} />
          </p>
          <h1 aria-label={personal.name}>
            {letters.map((ch, i) => (
              <span key={i} className="letter" aria-hidden="true" style={{ '--i': i }}>{ch === ' ' ? '\u00a0' : ch}</span>
            ))}
            <span className="name-shine" aria-hidden="true">
              {letters.map((ch, i) => <span key={i}>{ch === ' ' ? '\u00a0' : ch}</span>)}
            </span>
          </h1>
          <p className="hero-headline stagger" style={{ '--d': '450ms' }}>{tr(personal.headline)}</p>
          <p className="hero-intro stagger" style={{ '--d': '600ms' }}>{tr(personal.intro)}</p>

          <div className="cta stagger" style={{ '--d': '750ms' }}>
            <a className="btn btn-primary" href={personal.cv} download="CV_Ons_Alouini.pdf"><Download /> {t.hero.downloadCV}</a>
            <a className="btn btn-ghost" href="#contact">{t.hero.contact}</a>
          </div>

          <div className="hero-meta stagger" style={{ '--d': '900ms' }}>
            <p className="hero-available"><span className="status-dot" aria-hidden="true" />{tr(personal.availability)}</p>
            <div className="hero-links">
              <span><Pin />{tr(personal.location)}</span>
              <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHub /></a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedIn /></a>
              <a href={`mailto:${personal.email}`} aria-label="E-mail"><Mail /></a>
            </div>
          </div>
        </div>

        <figure className="portrait" ref={portrait}>
          <div className="sparkles" aria-hidden="true">
            {[0, 1, 2, 3, 4, 5].map(n => (
              <svg key={n} className={`spark s${n}`} viewBox="0 0 24 24"><path d="M12 0c.6 6.2 5.8 11.4 12 12-6.2.6-11.4 5.8-12 12-.6-6.2-5.8-11.4-12-12C6.2 11.4 11.4 6.2 12 0z" /></svg>
            ))}
          </div>
          <div className="portrait-arch">
            <img src={photo} alt={t.hero.photoAlt} width="960" height="1280" />
          </div>
        </figure>
      </div>
    </section>
  );
}
