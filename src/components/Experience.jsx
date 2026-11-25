import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { navigateWithTransition } from '../viewTransition';
import { useLang } from '../context/LanguageContext';
import { experience, projects } from '../data/portfolioData';
import SplitTitle from './SplitTitle';

export default function Experience() {
  const { t, tr } = useLang();
  const navigate = useNavigate();
  const list = useRef(null);

  // A thread on the left fills as the reader scrolls through the internships;
  // each card's dot lights up when the thread reaches it.
  useEffect(() => {
    const el = list.current;
    if (!el) return undefined;
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const line = window.innerHeight * 0.6;
      const p = Math.min(1, Math.max(0, (line - r.top) / r.height));
      el.style.setProperty('--thread', p.toFixed(4));
      el.querySelectorAll(':scope > .xp').forEach(card => {
        const on = card.getBoundingClientRect().top + 40 < line;
        if (on !== card.hasAttribute('data-reached')) card.toggleAttribute('data-reached', on);
      });
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); if (frame) cancelAnimationFrame(frame); };
  }, []);
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="section-head reveal"><SplitTitle text={t.experience.title} /></div>
        <ol className="xp-list" ref={list}>
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
