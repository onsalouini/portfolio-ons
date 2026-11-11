import React from 'react';
import { useLang } from '../context/LanguageContext';
import { skills } from '../data/portfolioData';

// A slow band of technologies between the key figures and the experience.
// The list is drawn twice so the loop is seamless; the copy is hidden from screen readers.
export default function Marquee() {
  const { tr, t } = useLang();
  const items = [...new Set(skills.flatMap(g => g.items.slice(0, 4).map(tr)))];
  const row = hidden => (
    <span aria-hidden={hidden || undefined}>
      {items.map(x => (
        <React.Fragment key={x}>
          <em>{x}</em>
          <svg viewBox="0 0 24 24" className="marquee-star"><path d="M12 0c.6 6.2 5.8 11.4 12 12-6.2.6-11.4 5.8-12 12-.6-6.2-5.8-11.4-12-12C6.2 11.4 11.4 6.2 12 0z" /></svg>
        </React.Fragment>
      ))}
    </span>
  );
  return (
    <section className="marquee" aria-label={t.hero.stackTitle}>
      <div className="marquee-track">{row(false)}{row(true)}</div>
    </section>
  );
}
