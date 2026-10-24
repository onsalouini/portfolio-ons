import React, { useEffect, useRef, useState } from 'react';
import { useLang } from '../context/LanguageContext';

// Floating "back to top" button with a reading-progress ring
export default function ToTop() {
  const { lang } = useLang();
  const [show, setShow] = useState(false);
  const btn = useRef(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setShow(window.scrollY > window.innerHeight * 0.8);
      if (btn.current) btn.current.style.setProperty('--p', max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); if (frame) cancelAnimationFrame(frame); };
  }, []);

  return (
    <button
      ref={btn}
      type="button"
      className="to-top"
      data-show={show}
      aria-label={lang === 'fr' ? 'Revenir en haut de la page' : 'Back to top'}
      tabIndex={show ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg className="ring" viewBox="0 0 50 50" aria-hidden="true">
        <defs><linearGradient id="ringGrad" x1="0" x2="1"><stop offset="0" stopColor="#b23a5e" /><stop offset="1" stopColor="#c98d5f" /></linearGradient></defs>
        <circle cx="25" cy="25" r="23" />
      </svg>
      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5" /><path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
}
