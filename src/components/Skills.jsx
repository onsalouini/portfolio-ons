import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import { skills } from '../data/portfolioData';
import { countFor, matchesFor } from '../skillMatch';
import { navigateWithTransition } from '../viewTransition';
import { GlyphML, GlyphNLP, GlyphCV, GlyphMLOps, GlyphWeb, Award, Close } from './Icons';
import SplitTitle from './SplitTitle';

// Accent and icon per group, in the order of the data file
const LOOK = [
  ['ml', GlyphML], ['nlp', Award], ['cv', GlyphCV], ['nlp', GlyphNLP],
  ['mlops', GlyphMLOps], ['web', GlyphWeb], ['ml', GlyphML], ['cv', Award],
];

const keyOf = item => (typeof item === 'string' ? item : item.en);

// Where a skill was used: projects and internships, each a link to its page
function Proof({ item, onClose, t, tr }) {
  const navigate = useNavigate();
  const found = matchesFor(item);
  return (
    <div className="skill-proof" role="region" aria-live="polite" aria-label={tr(item)}>
      <div className="skill-proof-head">
        <p><b>{tr(item)}</b> · {t.skills.used(found.length)}</p>
        <button type="button" className="proof-close" onClick={onClose} aria-label={t.skills.close}><Close /></button>
      </div>
      <ul>
        {found.map((e, i) => (
          <li key={e.key} style={{ '--i': i }}>
            <Link to={`/projet/${e.id}`} onClick={ev => navigateWithTransition(ev, navigate, `/projet/${e.id}`)}>
              {e.logo && <img src={e.logo} alt="" width="22" height="22" />}
              <span>{tr(e.title)}</span>
              {e.kind === 'xp' && <em>{t.skills.internship}</em>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  const { t, tr } = useLang();
  const [open, setOpen] = useState(null); // { group, key }

  useEffect(() => {
    if (!open) return undefined;
    const onKey = e => { if (e.key === 'Escape') setOpen(null); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <SplitTitle text={t.skills.title} />
            <p style={{ marginTop: 10 }}>{t.skills.intro}</p>
          </div>
        </div>
        <div className="skills">
          {skills.map((group, gi) => {
            const [acc, Icon] = LOOK[gi % LOOK.length];
            const selected = open && open.group === gi ? group.items.find(it => keyOf(it) === open.key) : null;
            return (
              <div className={`tile skill reveal acc-${acc}${selected ? ' has-proof' : ''}`} key={group.name.en}>
                <h3><i aria-hidden="true"><Icon /></i>{tr(group.name)}</h3>
                <ul className="tags">
                  {group.items.map(item => {
                    const label = tr(item);
                    const n = countFor(item);
                    if (!n) return <li key={label}>{label}</li>;
                    const on = !!selected && keyOf(item) === open.key;
                    return (
                      <li key={label} className="tag-btn">
                        <button
                          type="button"
                          aria-pressed={on}
                          title={t.skills.count(n)}
                          onClick={() => setOpen(on ? null : { group: gi, key: keyOf(item) })}
                        >
                          {label}<sup aria-label={t.skills.count(n)}>{n}</sup>
                        </button>
                      </li>
                    );
                  })}
                </ul>
                {selected && <Proof key={open.key} item={selected} onClose={() => setOpen(null)} t={t} tr={tr} />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
