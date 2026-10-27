import React from 'react';
import { GlyphML, GlyphNLP, GlyphCV, GlyphMLOps, GlyphWeb } from './Icons';

const GLYPHS = { ml: GlyphML, nlp: GlyphNLP, cv: GlyphCV, mlops: GlyphMLOps, web: GlyphWeb };

// A banner in the app's own colors with its logo; the domain glyph when there is no logo
export default function ProjectCover({ domain, title, context, logo, brand, tagline }) {
  if (logo && brand) {
    const [from, to, accent] = brand;
    return (
      <div className="cover banner" style={{ '--b1': from, '--b2': to, '--ba': accent }}>
        <span className="orb o1" aria-hidden="true" />
        <span className="orb o2" aria-hidden="true" />
        <span className="ctx">{context}</span>
        <div className="banner-row">
          <span className="cover-logo"><img src={logo} alt="" loading="lazy" /></span>
          <div className="banner-text">
            <span className="cover-title">{title}</span>
            {tagline && <span className="banner-tag">{tagline}</span>}
            <span className="banner-bar" aria-hidden="true" />
          </div>
        </div>
      </div>
    );
  }

  const Glyph = GLYPHS[domain] || GlyphML;
  return (
    <div className="cover">
      <span className="ctx">{context}</span>
      <Glyph />
      <span className="cover-title">{title}</span>
    </div>
  );
}
