import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { personal } from '../data/portfolioData';
import photo from '../assets/photo.jpg';
import monogram from '../assets/monogram.png';
import { Download, GitHub, LinkedIn, Mail, Pin, ArrowUpRight } from './Icons';

const STACK = ['Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'XGBoost', 'LightGBM', 'SHAP', 'Hugging Face',
  'XLM-RoBERTa', 'YOLOv8', 'OpenCV', 'FastAPI', 'MLflow', 'Docker', 'GitHub Actions', 'React', 'TypeScript',
  'Laravel', 'MongoDB', 'MySQL'];

export default function Hero() {
  const { t, tr } = useLang();
  const stack = STACK;

  return (
    <section className="hero" id="top">
      <div className="wrap bento">
        <div className="tile b-intro">
          <p className="pill"><span className="status-dot" aria-hidden="true" />{tr(personal.role)}</p>
          <h1><span className="grad-text">{personal.name}</span></h1>
          <p className="headline">{tr(personal.headline)}</p>
          <p className="intro">{tr(personal.intro)}</p>
          <div className="cta">
            <a className="btn btn-primary" href={personal.cv} download="CV_Ons_Alouini.pdf"><Download /> {t.hero.downloadCV}</a>
            <a className="btn btn-ghost" href="#contact">{t.hero.contact}</a>
          </div>
        </div>

        <figure className="b-photo-wrap">
          <div className="tile b-photo">
            <img src={photo} alt={t.hero.photoAlt} width="960" height="1280" />
          </div>
          <figcaption className="photo-caption">
            <img src={monogram} alt="" width="40" height="28" />
            <span><strong>{personal.name}</strong>Data &amp; AI Engineer</span>
          </figcaption>
        </figure>

        <div className="tile b-avail">
          <p className="tile-label"><span className="status-dot" aria-hidden="true" />{t.hero.availableTitle}</p>
          <h2>{t.hero.availableText}</h2>
          <a className="text-link" href="#contact">{t.hero.contact}</a>
        </div>

        <Link className="tile b-latest" to="/projet/nexus-ai">
          <span className="corner" aria-hidden="true"><ArrowUpRight /></span>
          <p className="tile-label">{t.hero.latestTitle}</p>
          <h2>NEXUS AI</h2>
          <p>{t.hero.latestText}</p>
        </Link>

        <div className="tile b-stack">
          <p className="tile-label">{t.hero.stackTitle}</p>
          <div className="marquee">
            <div className="marquee-track">
              {stack.map(s => <span key={s}>{s}</span>)}
              {stack.map(s => <span key={`${s}-2`} aria-hidden="true">{s}</span>)}
            </div>
          </div>
        </div>

        <div className="tile b-social">
          <p className="tile-label">{t.hero.findMe}</p>
          <div className="socials">
            <a className="icon-btn" href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHub /></a>
            <a className="icon-btn" href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedIn /></a>
            <a className="icon-btn" href={`mailto:${personal.email}`} aria-label="E-mail"><Mail /></a>
          </div>
          <div className="where">
            <span><Pin />{tr(personal.location)}</span>
            <span>{t.hero.speaks}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
