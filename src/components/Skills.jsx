import React from 'react';
import { useLang } from '../context/LanguageContext';
import { skills } from '../data/portfolioData';

export default function Skills() {
  const { t, tr } = useLang();
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="section-head"><h2>{t.skills.title}</h2></div>
        <div className="skills">
          {skills.map(group => (
            <div className="skill-row" key={group.name.en}>
              <h3>{tr(group.name)}</h3>
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
