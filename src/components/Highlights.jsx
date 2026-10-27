import React, { useEffect, useRef, useState } from 'react';
import { useLang } from '../context/LanguageContext';
import { highlights } from '../data/portfolioData';

const format = (n, decimals, lang) =>
  n.toLocaleString(lang === 'fr' ? 'fr-FR' : 'en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

// Counts from 0 to the value once the strip is on screen (instant with reduced motion)
function Counter({ value, decimals = 0, suffix = '', run }) {
  const { lang } = useLang();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(value); return undefined; }
    let frame = 0;
    const start = performance.now();
    const tick = now => {
      const t = Math.min(1, (now - start) / 1400);
      setN(value * (1 - Math.pow(1 - t, 3)));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run, value]);
  return <>{format(n, decimals, lang)}{suffix}</>;
}

export default function Highlights() {
  const { t, tr, lang } = useLang();
  const ref = useRef(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setRun(true); io.disconnect(); } }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="highlights-wrap" aria-label={t.stats.label}>
      <div className="wrap">
        <ul className="highlights reveal" ref={ref}>
          {highlights.map((h, i) => (
            <li key={i} style={{ '--i': i }}>
              <b aria-hidden="true"><Counter {...h} run={run} /></b>
              <span className="sr-only">{format(h.value, h.decimals || 0, lang)}{h.suffix || ''} </span>
              <span>{tr(h.label)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
