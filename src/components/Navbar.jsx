import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { personal } from '../data/portfolioData';
import monogram from '../assets/monogram.png';
import { Download, Menu, Close } from './Icons';

const SECTIONS = ['experience', 'projects', 'skills', 'education', 'contact'];

export function LangToggle() {
  const { lang, toggle, t } = useLang();
  return (
    <button type="button" className="lang-toggle" onClick={toggle} aria-label={t.nav.switchTo}>
      <span data-on={lang === 'fr'}>FR</span>
      <span data-on={lang === 'en'}>EN</span>
    </button>
  );
}

export default function Navbar() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const prefix = pathname === '/' ? '' : '/';

  return (
    <header className="nav">
      <div className="wrap">
        <div className="nav-inner">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <img src={monogram} alt="" width="46" height="32" />
            <span>{personal.name}</span>
          </Link>
          <nav aria-label="Navigation">
            <ul className="nav-links">
              {SECTIONS.map(id => (
                <li key={id}><a href={`${prefix}#${id}`}>{t.nav[id]}</a></li>
              ))}
            </ul>
          </nav>
          <div className="nav-actions">
            <LangToggle />
            <a className="btn btn-primary btn-cv" href={personal.cv} download="CV_Ons_Alouini.pdf">
              <Download /> {t.nav.cv}
            </a>
            <button
              type="button"
              className="menu-btn"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(o => !o)}
            >
              {open ? <Close /> : <Menu />}
              <span className="sr-only">{t.nav.menu}</span>
            </button>
          </div>
        </div>
        <div id="mobile-menu" className="mobile-menu" data-open={open}>
          <ul>
            {SECTIONS.map(id => (
              <li key={id}><a href={`${prefix}#${id}`} onClick={() => setOpen(false)}>{t.nav[id]}</a></li>
            ))}
            <li><a href={personal.cv} download="CV_Ons_Alouini.pdf">{t.hero.downloadCV}</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
