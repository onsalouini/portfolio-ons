import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { experience } from '../data/portfolioData';

export default function Experience() {
  const { t, tr } = useLang();
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="section-head"><h2>{t.experience.title}</h2></div>
        <ol className="timeline">
          {experience.map(job => (
            <li key={job.company}>
              <p className="tl-when"><strong>{tr(job.period)}</strong>{tr(job.place)}</p>
              <div className="tl-body">
                <h3>{tr(job.role)}</h3>
                <p className="tl-company">{job.company} — {tr(job.project)}</p>
                <ul className="points">
                  {tr(job.points).map(p => <li key={p}>{p}</li>)}
                </ul>
                <div className="tl-foot">
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
