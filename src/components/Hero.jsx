import React from 'react';
import { useLang } from '../context/LanguageContext';
import { personal } from '../data/portfolioData';
import photo from '../assets/photo.jpg';
import { Download, GitHub, LinkedIn, Pin } from './Icons';

export default function Hero() {
  const { t, tr } = useLang();

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <p className="hero-role">{tr(personal.role)}</p>
          <h1>{personal.name}</h1>
          <p className="hero-headline">{tr(personal.headline)}</p>
          <p className="hero-intro">{tr(personal.intro)}</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href={personal.cv} download="CV_Ons_Alouini.pdf">
              <Download /> {t.hero.downloadCV}
            </a>
            <a className="btn btn-ghost" href="#contact">{t.hero.contact}</a>
          </div>
          <ul className="hero-meta">
            <li><span className="status-dot" aria-hidden="true" />{tr(personal.availability)}</li>
            <li><Pin />{tr(personal.location)}</li>
            <li><a href={personal.github} target="_blank" rel="noreferrer"><GitHub /> <span className="sr-only">GitHub</span></a></li>
            <li><a href={personal.linkedin} target="_blank" rel="noreferrer"><LinkedIn /> <span className="sr-only">LinkedIn</span></a></li>
          </ul>
        </div>
        <div className="portrait">
          <div className="portrait-frame">
            <img src={photo} alt={t.hero.photoAlt} width="960" height="1280" />
          </div>
        </div>
      </div>
    </section>
  );
}
