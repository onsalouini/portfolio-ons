import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { navigateWithTransition } from '../viewTransition';
import { useLang } from '../context/LanguageContext';
import { experience, projects } from '../data/portfolioData';

export default function Experience() {
  const { t, tr } = useLang();
  const navigate = useNavigate();
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="section-head reveal"><h2>{t.experience.title}</h2></div>
        <ol className="xp-list">
          {experience.map(job => {
            const project = projects.find(p => p.id === job.projectId);
            return (
              <li key={job.company} className="tile xp reveal">
                <div className="xp-side">
                  {job.logo && (
                    <span className="xp-logo">
                      <img src={job.logo} alt={`Logo ${job.company}`} loading="lazy" />
                    </span>
                  )}
                  <span className="xp-period">{tr(job.period)}</span>
                  <p className="xp-company">{job.company}</p>
                  <p className="xp-place">{tr(job.place)}</p>
                </div>
                <div>
                  <h3>{tr(job.role)}</h3>
                  <p className="xp-project">
                    {project?.logo && <img src={project.logo} alt="" width="22" height="22" />}
                    {tr(job.project)}
                  </p>
                  <ul className="points">{tr(job.points).map(p => <li key={p}>{p}</li>)}</ul>
                  <div className="xp-foot">
                    <ul className="tags">{job.tech.map(x => <li key={x}>{x}</li>)}</ul>
                    <Link className="text-link" to={`/projet/${job.projectId}`} onClick={e => navigateWithTransition(e, navigate, `/projet/${job.projectId}`)}>{t.experience.seeProject}</Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
