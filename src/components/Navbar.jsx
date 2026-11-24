import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { personal } from '../data/portfolioData';
import monogram from '../assets/monogram.png';
import { Download, Menu, Close, Sun, Moon } from './Icons';
import { withTransition } from '../viewTransition';

const SECTIONS = ['experience', 'projects', 'skills', 'education', 'certifications', 'contact'];

function currentTheme() {
  const set = document.documentElement.getAttribute('data-theme');
  if (set === 'light' || set === 'dark') return set;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function ThemeToggle() {
  const { t } = useLang();
  const [theme, setTheme] = useState(currentTheme);
  const toggle = e => {
    const next = theme === 'dark' ? 'light' : 'dark';
    const apply = () => {
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('portfolio-theme', next); } catch (err) { /* ignore */ }
      setTheme(next);
    };
    // the new theme spreads out in a circle from the button
    const r = e.currentTarget.getBoundingClientRect();
    const x = r.left + r.width / 2;
    const y = r.top + r.height / 2;
    const vt = withTransition(apply, 'theme');
    if (!vt) return;
    const end = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    vt.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
        { duration: 700, easing: 'cubic-bezier(.65, 0, .35, 1)', pseudoElement: '::view-transition-new(root)' }
      );
    }).catch(() => {});
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

  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.setProperty('--p', max > 0 ? Math.min(window.scrollY / max, 1) : 0);
      setScrolled(window.scrollY > 24);
      if (pathname !== '/') { setActive(''); return; }
      // the active section is the last one whose top has passed 40% of the screen
      const line = window.innerHeight * 0.4;
      let current = '';
      SECTIONS.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = 'contact';
      setActive(current);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); if (frame) cancelAnimationFrame(frame); };
  }, [pathname]);

  return (
    <header className="nav" data-scrolled={scrolled}>
      <div className="nav-pill">
        <div className="scroll-progress" ref={bar} aria-hidden="true" />
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src={monogram} alt="" width="40" height="28" />
          <span>{personal.name}</span>
        </Link>
        <nav aria-label="Navigation">
          <ul className="nav-links">
            {SECTIONS.map(id => (
              <li key={id}>
                <a href={`${prefix}#${id}`} aria-current={active === id ? 'true' : undefined}>{t.nav[id]}</a>
              </li>
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
            <li key={id}><a href={`${prefix}#${id}`} aria-current={active === id ? "true" : undefined} onClick={() => setOpen(false)}>{t.nav[id]}</a></li>
          ))}
          <li><a href={personal.cv} download="CV_Ons_Alouini.pdf">{t.hero.downloadCV}</a></li>
        </ul>
      </div>
    </header>
  );
}
