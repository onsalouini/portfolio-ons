import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { certifications, activities } from '../data/portfolioData';
import { Award, ArrowUpRight } from './Icons';

export default function Certifications() {
  const { t, tr } = useLang();
  const featured = certifications.filter(c => c.featured);
  const courses = certifications.filter(c => !c.featured);

  return (
    <section className="section" id="certifications">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <h2>{t.certs.title}</h2>
            <p style={{ marginTop: 10 }}>{t.certs.intro}</p>
          </div>
        </div>

        <div className="cert-grid">
          {featured.map(c => (
            <a key={c.title} className="tile cert-card reveal" href={c.pdf} target="_blank" rel="noreferrer">
              <div className="cert-thumb">
                <img src={c.thumb} alt="" loading="lazy" width="640" height="455" />
              </div>
              <div className="cert-meta">
                <span className="cert-date">{tr(c.date)}</span>
                <h3>{c.title}</h3>
                <p>{c.issuer}</p>
                <span className="text-link">{t.certs.open} <ArrowUpRight /></span>
              </div>
            </a>
          ))}

          <div className="tile cert-more reveal">
            <h3>{t.certs.courses}</h3>
            <ul>
              {courses.map(c => (
                <li key={c.title}>
                  <span className="badge" aria-hidden="true"><Award /></span>
                  <div><strong>{c.title}</strong><span>{tr(c.issuer)}</span></div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="sub-head reveal">{t.certs.activities}</h3>
        <ul className="activity-grid">
          {activities.map(a => (
            <li key={tr(a.title)} className="tile activity reveal">
              <p className="activity-role">{tr(a.role)}</p>
              <h4>{tr(a.title)}</h4>
              <p>{tr(a.text)}</p>
              {a.projectId && <Link className="text-link" to={`/projet/${a.projectId}`}>{t.certs.seeProject} <ArrowUpRight /></Link>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
