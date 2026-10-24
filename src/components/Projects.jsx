import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { projects, domains } from '../data/portfolioData';
import ProjectCover from './ProjectCover';
import { GitHub } from './Icons';

export default function Projects() {
  const { t, tr } = useLang();
  const [filter, setFilter] = useState('all');

  const featured = projects.filter(p => p.metric);
  const others = projects.filter(p => !p.metric);
  const shown = featured.filter(p => filter === 'all' || p.domains.includes(filter));
  const shownOthers = filter === 'all' || filter === 'web' ? others : [];

  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <h2>{t.projects.title}</h2>
            <p style={{ marginTop: 10 }}>{t.projects.intro}</p>
          </div>
          <div className="filters" role="group" aria-label={t.projects.filterLabel}>
            {Object.keys(domains).map(key => (
              <button key={key} type="button" className="chip" aria-pressed={filter === key} onClick={() => setFilter(key)}>
                {tr(domains[key])}
              </button>
            ))}
          </div>
        </div>

        {shown.length === 0 ? (
          <p className="empty">{t.projects.empty}</p>
        ) : (
          <ul className="proj-grid">
            {shown.map((p, i) => (
              <li key={p.id} className={`tile lift proj tilt reveal acc-${p.domains[0]}${i === 0 && filter === 'all' ? ' wide' : ''}`}>
                <ProjectCover domain={p.domains[0]} title={tr(p.title)} context={tr(p.context)} />
                <div className="proj-body">
                  <p className="result"><b>{tr(p.metric.value)}</b>{tr(p.metric.label)}</p>
                  <p>{tr(p.summary)}</p>
                  <ul className="tags">{p.tech.slice(0, 6).map(x => <li key={x}>{x}</li>)}</ul>
                  <div className="proj-links">
                    <Link className="text-link stretch" to={`/projet/${p.id}`}>{t.projects.details}</Link>
                    {p.github && (
                      <a className="text-link" href={p.github} target="_blank" rel="noreferrer"><GitHub /> {t.projects.code}</a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {shownOthers.length > 0 && (
          <div className="others reveal">
            <h3>{t.projects.others}</h3>
            <ul>
              {shownOthers.map(p => (
                <li key={p.id}>
                  {p.description && p.tech.length ? (
                    <Link to={`/projet/${p.id}`}><strong>{tr(p.title)}</strong><p>{tr(p.summary)}</p></Link>
                  ) : (
                    <><strong>{tr(p.title)}</strong><p>{tr(p.summary)}</p></>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
