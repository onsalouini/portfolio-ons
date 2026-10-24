import React from 'react';
import { useLang } from '../context/LanguageContext';
import { education, certifications, languages, softSkills } from '../data/portfolioData';

export default function Education() {
  const { t, tr } = useLang();
  return (
    <section className="section" id="education">
      <div className="wrap">
        <div className="section-head"><h2>{t.education.title}</h2></div>
        <div className="edu-grid">
          <ul className="edu-list">
            {education.map(e => (
              <li key={tr(e.degree)}>
                <p className="edu-period">{tr(e.period)}</p>
                <h3>{tr(e.degree)}</h3>
                <p className="edu-school">{tr(e.school)}, {e.place}</p>
                {e.note && <p className="edu-note">{tr(e.note)}</p>}
              </li>
            ))}
          </ul>

          <div>
            <div className="side">
              <h3>{t.education.certifications}</h3>
              <ul className="cert-list">
                {certifications.map(c => (
                  <li key={c.title}>
                    <strong>{c.title}</strong>
                    <span>{tr(c.issuer)}</span>
                    {c.pdf && (
                      <a className="text-link" href={c.pdf} target="_blank" rel="noreferrer">{t.education.viewPdf}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="side">
              <h3>{t.education.languages}</h3>
              <ul className="lang-list">
                {languages.map(l => (
                  <li key={l.name.en}><strong>{tr(l.name)}</strong><span>{tr(l.level)}</span></li>
                ))}
              </ul>
            </div>
            <div className="side">
              <h3>{t.education.softSkills}</h3>
              <ul className="tags">{tr(softSkills).map(s => <li key={s}>{s}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
