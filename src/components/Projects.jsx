import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { projects, domains } from '../data/portfolioData';
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
        <div className="section-head">
          <h2>{t.projects.title}</h2>
          <p>{t.projects.intro}</p>
        </div>

        <div className="filters" role="group" aria-label={t.projects.filterLabel}>
          {Object.keys(domains).map(key => (
            <button
              key={key}
              type="button"
              className="chip"
              aria-pressed={filter === key}
              onClick={() => setFilter(key)}
            >
              {tr(domains[key])}
            </button>
          ))}
        </div>

        {shown.length === 0 ? (
          <p className="empty">{t.projects.empty}</p>
        ) : (
          <ul className="model-list">
            {shown.map(p => (
              <li className="model" key={p.id}>
                <p className="model-metric">
                  <span className="value">{tr(p.metric.value)}</span>
                  <span className="label">{tr(p.metric.label)}</span>
                </p>
                <div>
                  <h3><Link to={`/projet/${p.id}`}>{tr(p.title)}</Link></h3>
                  <p className="model-context">{tr(p.context)}</p>
                  <p className="model-summary">{tr(p.summary)}</p>
                  <ul className="tags">{p.tech.slice(0, 7).map(x => <li key={x}>{x}</li>)}</ul>
                </div>
                <div className="model-links">
                  <Link className="text-link" to={`/projet/${p.id}`}>{t.projects.details}</Link>
                  {p.github && (
                    <a className="text-link" href={p.github} target="_blank" rel="noreferrer">
                      <GitHub /> {t.projects.code}
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}

        {shownOthers.length > 0 && (
          <div className="others">
            <h3>{t.projects.others}</h3>
            <ul>
              {shownOthers.map(p => (
                <li key={p.id}>
                  {p.description && p.tech.length ? (
                    <Link to={`/projet/${p.id}`}>
                      <strong>{tr(p.title)}</strong>
                      <p>{tr(p.summary)}</p>
                    </Link>
                  ) : (
                    <>
                      <strong>{tr(p.title)}</strong>
                      <p>{tr(p.summary)}</p>
                    </>
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
