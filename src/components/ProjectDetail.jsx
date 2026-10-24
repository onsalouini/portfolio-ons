import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { projects } from '../data/portfolioData';
import Navbar from './Navbar';
import Footer from './Footer';
import { ArrowLeft, GitHub } from './Icons';

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
      <Navbar />
      <main className="detail">
        <div className="wrap">
          <Link className="back" to="/#projects"><ArrowLeft /> {t.detail.back}</Link>

          {!p ? (
            <p className="empty">{t.detail.notFound}</p>
          ) : (
            <>
              <div className="detail-head">
                <div>
                  <h1>{tr(p.title)}</h1>
                  <p className="model-context">{tr(p.context)}</p>
                </div>
                {p.metric && (
                  <p className="model-metric">
                    <span className="sr-only">{t.detail.result} : </span>
                    <span className="value">{tr(p.metric.value)}</span>
                    <span className="label">{tr(p.metric.label)}</span>
                  </p>
                )}
              </div>

              <div className="detail-body">
                <div>
                  <div className="block">
                    <h2>{t.detail.about}</h2>
                    <p className="detail-text">{tr(p.description)}</p>
                  </div>
                  {p.video && (
                    <div className="block">
                      <h2>{t.detail.demo}</h2>
                      <div className="video">
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/${p.video}`}
                          title={`${t.detail.demo} — ${tr(p.title)}`}
                          loading="lazy"
                          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  {tr(p.features).length > 0 && (
                    <div className="block">
                      <h2>{t.detail.features}</h2>
                      <ul className="feature-list">{tr(p.features).map(f => <li key={f}>{f}</li>)}</ul>
                    </div>
                  )}
                  {p.tech.length > 0 && (
                    <div className="block">
                      <h2>{t.detail.stack}</h2>
                      <ul className="tags">{p.tech.map(x => <li key={x}>{x}</li>)}</ul>
                    </div>
                  )}
                  {p.github && (
                    <div className="block">
                      <a className="btn btn-primary" href={p.github} target="_blank" rel="noreferrer">
                        <GitHub /> {t.detail.code}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
