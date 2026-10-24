import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { personal } from '../data/portfolioData';
import photo from '../assets/photo.jpg';
import { Download, GitHub, LinkedIn, Pin, Spark, Route } from './Icons';

export function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <span className="a1" /><span className="a2" /><span className="a3" />
    </div>
  );
}

export default function Hero() {
  const { t, tr } = useLang();

  return (
    <section className="hero" id="top">
      <Aurora />
      <div className="sparkles" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div>
          <p className="hero-role"><span className="status-dot" aria-hidden="true" />{tr(personal.role)}</p>
          <h1><span className="grad-text">{personal.name}</span></h1>
          <p className="hero-headline">{tr(personal.headline)}</p>
          <p className="hero-intro">{tr(personal.intro)}</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href={personal.cv} download="CV_Ons_Alouini.pdf">
              <Download /> {t.hero.downloadCV}
            </a>
            <a className="btn btn-ghost" href="#contact">{t.hero.contact}</a>
          </div>
          <ul className="hero-meta">
            <li>{tr(personal.availability)}</li>
            <li><Pin />{tr(personal.location)}</li>
            <li><a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHub /></a></li>
            <li><a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedIn /></a></li>
          </ul>
        </div>

        <div className="portrait">
          <div className="portrait-halo" aria-hidden="true" />
          <div className="portrait-frame">
            <img src={photo} alt={t.hero.photoAlt} width="960" height="1280" />
          </div>
          <Link className="float-card fc1" to="/projet/nexus-ai">
            <span className="swatch"><Spark /></span>
            <span><strong>{tr({ fr: '0,932', en: '0.932' })}</strong><small>{t.hero.fc1}</small></span>
          </Link>
          <Link className="float-card fc2" to="/projet/saferoad-ai">
            <span className="swatch"><Route /></span>
            <span><strong>{tr({ fr: '7,7 M', en: '7.7M' })}</strong><small>{t.hero.fc2}</small></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
