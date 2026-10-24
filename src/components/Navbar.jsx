import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { personal } from '../data/portfolioData';
import monogram from '../assets/monogram.png';
import { Download, Menu, Close, Sun, Moon } from './Icons';

const SECTIONS = ['experience', 'projects', 'skills', 'education', 'contact'];

function currentTheme() {
  const set = document.documentElement.getAttribute('data-theme');
  if (set === 'light' || set === 'dark') return set;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function ThemeToggle() {
  const { t } = useLang();
  const [theme, setTheme] = useState(currentTheme);
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('portfolio-theme', next); } catch (e) { /* ignore */ }
    setTheme(next);
  };
  return (
    <button type="button" className="icon-btn" onClick={toggle} aria-label={theme === 'dark' ? t.theme.light : t.theme.dark}>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  );
}

function LangToggle() {
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
  const bar = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.setProperty('--p', max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, [pathname]);

  return (
    <header className="nav">
      <div className="nav-pill">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src={monogram} alt="" width="40" height="28" />
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
          <ThemeToggle />
          <a className="btn btn-primary btn-cv" href={personal.cv} download="CV_Ons_Alouini.pdf">
            <Download /> {t.nav.cv}
          </a>
          <button type="button" className="icon-btn menu-btn" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(o => !o)}>
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
      <div className="scroll-progress" ref={bar} aria-hidden="true" />
    </header>
  );
}
