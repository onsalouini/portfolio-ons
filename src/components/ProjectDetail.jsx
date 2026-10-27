import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { projects } from '../data/portfolioData';
import Navbar from './Navbar';
import Footer from './Footer';
import ProjectCover from './ProjectCover';
import { ArrowLeft, GitHub, ArrowUpRight } from './Icons';

export default function ProjectDetail() {
  const { id } = useParams();
  const { t, tr } = useLang();
  const p = projects.find(x => x.id === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);
  useEffect(() => {
    document.title = p ? `${tr(p.title)} — Ons Alouini` : 'Ons Alouini';
    return () => { document.title = 'Ons Alouini — Data Science & IA'; };
  }, [p, tr]);

  return (
    <>
      <div className="page-glow" aria-hidden="true"><span className="g1" /><span className="g2" /><span className="g3" /></div>
      <Navbar />
      <main className="detail">
        <div className="wrap">
          <Link className="back" to="/#projects"><ArrowLeft /> {t.detail.back}</Link>

          {!p ? (
            <p className="empty">{t.detail.notFound}</p>
          ) : (
            <div className={`acc-${p.domains[0]}`}>
              <div className="tile detail-hero">
                <ProjectCover domain={p.domains[0]} title={tr(p.title)} context={tr(p.context)} logo={p.logo} />
              </div>

              <div className="detail-grid">
                <div className="detail-col">
                  <div className="tile">
                    <h2>{t.detail.about}</h2>
                    <p className="detail-text">{tr(p.description)}</p>
                  </div>
                  {p.video && (
                    <div className="tile">
                      <h2>{t.detail.demo}</h2>
                      <div className="video">
                        <iframe
                          src={`https://www.youtube.com/embed/${p.video}?rel=0`}
                          title={`${t.detail.demo} — ${tr(p.title)}`}
                          loading="lazy"
                          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                          allowFullScreen
                        />
                      </div>
                      <a className="text-link" href={`https://youtu.be/${p.video}`} target="_blank" rel="noreferrer">
                        {t.detail.youtube} <ArrowUpRight />
                      </a>
                    </div>
                  )}
                </div>
                <div className="detail-col">
                  {p.metric && (
                    <div className="tile">
                      <h2>{t.detail.result}</h2>
                      <p className="result"><b>{tr(p.metric.value)}</b>{tr(p.metric.label)}</p>
                    </div>
                  )}
                  {tr(p.features).length > 0 && (
                    <div className="tile">
                      <h2>{t.detail.features}</h2>
                      <ul className="feature-list">{tr(p.features).map(f => <li key={f}>{f}</li>)}</ul>
                    </div>
                  )}
                  {p.tech.length > 0 && (
                    <div className="tile">
                      <h2>{t.detail.stack}</h2>
                      <ul className="tags">{p.tech.map(x => <li key={x}>{x}</li>)}</ul>
                    </div>
                  )}
                  {p.github && (
                    <a className="btn btn-primary" href={p.github} target="_blank" rel="noreferrer"><GitHub /> {t.detail.code}</a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
