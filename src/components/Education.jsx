import React from 'react';
import { useLang } from '../context/LanguageContext';
import { education, languages, softSkills } from '../data/portfolioData';

export default function Education() {
  const { t, tr } = useLang();
  return (
    <section className="section" id="education">
      <div className="wrap">
        <div className="section-head reveal"><h2>{t.education.title}</h2></div>
        <div className="edu-grid">
          <div className="tile edu-main reveal">
            <ul className="edu-list">
              {education.map(e => (
                <li key={tr(e.degree)}>
                  <span className="edu-period">{tr(e.period)}</span>
                  <h3>{tr(e.degree)}</h3>
                  <p className="edu-school">{tr(e.school)}, {e.place}</p>
                  {e.note && <p className="edu-note">{tr(e.note)}</p>}
                </li>
              ))}
            </ul>
          </div>
          <div className="side-stack">
            <div className="tile side reveal">
              <h3>{t.education.languages}</h3>
              <ul className="lang-list">
                {languages.map(l => <li key={l.name.en}><strong>{tr(l.name)}</strong><span>{tr(l.level)}</span></li>)}
              </ul>
            </div>
            <div className="tile side reveal acc-nlp">
              <h3>{t.education.softSkills}</h3>
              <ul className="tags">{tr(softSkills).map(s => <li key={s}>{s}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
