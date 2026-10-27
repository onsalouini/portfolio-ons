import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useParams } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { projects } from '../data/portfolioData';
import Navbar from './Navbar';
import Footer from './Footer';
import ProjectCover from './ProjectCover';
import { ArrowLeft, GitHub, ArrowUpRight, Play, Close, ChevronLeft, ChevronRight, Expand } from './Icons';

const brandStyle = p => (p.brand ? { '--b1': p.brand[0], '--b2': p.brand[1], '--ba': p.brand[2] } : undefined);

// A branded poster first; the YouTube player only loads once the visitor asks for it
function Demo({ p, t, tr }) {
  const [playing, setPlaying] = useState(false);
  useEffect(() => { setPlaying(false); }, [p.id]);
  return (
    <div className="video">
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${p.video}?rel=0&autoplay=1`}
          title={`${t.detail.demo} — ${tr(p.title)}`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button type="button" className="poster" style={brandStyle(p)} onClick={() => setPlaying(true)}>
          <span className="orb o1" aria-hidden="true" />
          <span className="orb o2" aria-hidden="true" />
          {p.logo && <img className="poster-logo" src={p.logo} alt="" />}
          <span className="poster-play"><Play /></span>
          <span className="poster-label">{t.detail.play}</span>
        </button>
      )}
    </div>
  );
}

// Full-screen viewer: Esc closes, arrow keys browse, focus returns to the thumbnail
function Lightbox({ items, index, onClose, onMove, t, tr }) {
  const closeRef = useRef(null);
  const item = items[index];

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') onMove(1);
      else if (e.key === 'ArrowLeft') onMove(-1);
    };
    document.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = overflow; };
  }, [onClose, onMove]);

  // Portaled to <body> so no tile's stacking context can cover it
  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={tr(item.caption)} onClick={onClose}>
      <figure onClick={e => e.stopPropagation()}>
        <img key={item.src} src={`/projects/gallery/${item.src}.jpg`} alt={tr(item.caption)} />
        <figcaption>
          <span>{tr(item.caption)}</span>
          {items.length > 1 && <span className="lb-count">{index + 1} / {items.length}</span>}
        </figcaption>
      </figure>
      <button ref={closeRef} type="button" className="lb-btn lb-close" aria-label={t.detail.close} onClick={onClose}><Close /></button>
      {items.length > 1 && (
        <>
          <button type="button" className="lb-btn lb-prev" aria-label={t.detail.prev} onClick={e => { e.stopPropagation(); onMove(-1); }}><ChevronLeft /></button>
          <button type="button" className="lb-btn lb-next" aria-label={t.detail.next} onClick={e => { e.stopPropagation(); onMove(1); }}><ChevronRight /></button>
        </>
      )}
    </div>,
    document.body
  );
}

function Gallery({ items, t, tr }) {
  const [open, setOpen] = useState(-1);
  const thumbs = useRef([]);
  const openRef = useRef(-1);
  openRef.current = open;
  const close = useCallback(() => {
    thumbs.current[openRef.current]?.focus();
    setOpen(-1);
  }, []);
  const move = useCallback(step => setOpen(i => (i + step + items.length) % items.length), [items.length]);

  return (
    <div className="tile">
      <h2>{t.detail.gallery}</h2>
      <ul className={`gallery${items.length === 1 ? ' single' : ''}`}>
        {items.map((g, i) => (
          <li key={g.src}>
            <button type="button" ref={el => { thumbs.current[i] = el; }} onClick={() => setOpen(i)} aria-label={`${t.detail.zoom} : ${tr(g.caption)}`}>
              <img src={`/projects/gallery/${g.src}-thumb.jpg`} alt="" loading="lazy" />
              <span className="zoom" aria-hidden="true"><Expand /></span>
            </button>
            <p>{tr(g.caption)}</p>
          </li>
        ))}
      </ul>
      {open >= 0 && <Lightbox items={items} index={open} onClose={close} onMove={move} t={t} tr={tr} />}
    </div>
  );
}

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
                <ProjectCover domain={p.domains[0]} title={tr(p.title)} context={tr(p.context)} logo={p.logo} brand={p.brand} tagline={p.tagline && tr(p.tagline)} />
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
                      <Demo p={p} t={t} tr={tr} />
                      <a className="text-link" href={`https://youtu.be/${p.video}`} target="_blank" rel="noreferrer">
                        {t.detail.youtube} <ArrowUpRight />
                      </a>
                    </div>
                  )}
                  {p.gallery && <Gallery items={p.gallery} t={t} tr={tr} />}
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
