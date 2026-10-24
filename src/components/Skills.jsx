import React from 'react';
import { useLang } from '../context/LanguageContext';
import { skills } from '../data/portfolioData';

const ACCENTS = ['ml', 'nlp', 'cv', 'nlp', 'mlops', 'web', 'ml', 'cv'];

export default function Skills() {
  const { t, tr } = useLang();
  return (
    <section className="section tint-blush" id="skills">
      <div className="wrap">
        <div className="section-head reveal"><h2>{t.skills.title}</h2></div>
        <div className="skills">
          {skills.map((group, i) => (
            <div className={`skill-row reveal accent-${ACCENTS[i % ACCENTS.length]}`} key={group.name.en}>
              <h3><i aria-hidden="true" />{tr(group.name)}</h3>
              <ul className="tags">
                {group.items.map(item => {
                  const label = tr(item);
                  return <li key={label}>{label}</li>;
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
