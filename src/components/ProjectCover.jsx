import React from 'react';
import { GlyphML, GlyphNLP, GlyphCV, GlyphMLOps, GlyphWeb } from './Icons';

const GLYPHS = { ml: GlyphML, nlp: GlyphNLP, cv: GlyphCV, mlops: GlyphMLOps, web: GlyphWeb };

// The app's own logo when the project has one, otherwise the domain glyph
export default function ProjectCover({ domain, title, context, logo }) {
  const Glyph = GLYPHS[domain] || GlyphML;
  return (
    <div className="cover">
      <span className="ctx">{context}</span>
      {logo ? <span className="cover-logo"><img src={logo} alt="" loading="lazy" /></span> : <Glyph />}
      <span className="cover-title">{title}</span>
    </div>
  );
}
