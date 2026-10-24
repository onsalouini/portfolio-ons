import React from 'react';
import { useLang } from '../context/LanguageContext';
import { skills } from '../data/portfolioData';
import { GlyphML, GlyphNLP, GlyphCV, GlyphMLOps, GlyphWeb, Award } from './Icons';

// Accent and icon per group, in the order of the data file
const LOOK = [
  ['ml', GlyphML], ['nlp', Award], ['cv', GlyphCV], ['nlp', GlyphNLP],
  ['mlops', GlyphMLOps], ['web', GlyphWeb], ['ml', GlyphML], ['cv', Award],
];

export default function Skills() {
  const { t, tr } = useLang();
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="section-head reveal"><h2>{t.skills.title}</h2></div>
        <div className="skills">
          {skills.map((group, i) => {
            const [acc, Icon] = LOOK[i % LOOK.length];
            return (
              <div className={`tile skill reveal acc-${acc}`} key={group.name.en}>
                <h3><i aria-hidden="true"><Icon /></i>{tr(group.name)}</h3>
                <ul className="tags">
                  {group.items.map(item => { const label = tr(item); return <li key={label}>{label}</li>; })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
