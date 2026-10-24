import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { experience } from '../data/portfolioData';

export default function Experience() {
  const { t, tr } = useLang();
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="section-head reveal"><h2>{t.experience.title}</h2></div>
        <ol className="xp-list">
          {experience.map(job => (
            <li key={job.company} className="tile xp reveal">
              <div className="xp-side">
                <span className="xp-period">{tr(job.period)}</span>
                <p className="xp-company">{job.company}</p>
                <p className="xp-place">{tr(job.place)}</p>
              </div>
              <div>
                <h3>{tr(job.role)}</h3>
                <p className="xp-project">{tr(job.project)}</p>
                <ul className="points">{tr(job.points).map(p => <li key={p}>{p}</li>)}</ul>
                <div className="xp-foot">
                  <ul className="tags">{job.tech.map(x => <li key={x}>{x}</li>)}</ul>
                  <Link className="text-link" to={`/projet/${job.projectId}`}>{t.experience.seeProject}</Link>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
