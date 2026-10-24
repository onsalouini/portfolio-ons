import React from 'react';
import { useLang } from '../context/LanguageContext';
import { personal } from '../data/portfolioData';
import photo from '../assets/photo.jpg';
import { Download, GitHub, LinkedIn, Mail, Pin } from './Icons';

export default function Hero() {
  const { t, tr } = useLang();

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <p className="hero-role">{tr(personal.role)}</p>
          <h1>{personal.name}</h1>
          <p className="hero-headline">{tr(personal.headline)}</p>
          <p className="hero-intro">{tr(personal.intro)}</p>

          <div className="cta">
            <a className="btn btn-primary" href={personal.cv} download="CV_Ons_Alouini.pdf"><Download /> {t.hero.downloadCV}</a>
            <a className="btn btn-ghost" href="#contact">{t.hero.contact}</a>
          </div>

          <div className="hero-meta">
            <p className="hero-available"><span className="status-dot" aria-hidden="true" />{tr(personal.availability)}</p>
            <div className="hero-links">
              <span><Pin />{tr(personal.location)}</span>
              <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHub /></a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedIn /></a>
              <a href={`mailto:${personal.email}`} aria-label="E-mail"><Mail /></a>
            </div>
          </div>
        </div>

        <figure className="portrait">
          <div className="portrait-arch">
            <img src={photo} alt={t.hero.photoAlt} width="960" height="1280" />
          </div>
        </figure>
      </div>
    </section>
  );
}
