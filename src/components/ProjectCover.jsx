import React from 'react';
import { GlyphML, GlyphNLP, GlyphCV, GlyphMLOps, GlyphWeb } from './Icons';

const GLYPHS = { ml: GlyphML, nlp: GlyphNLP, cv: GlyphCV, mlops: GlyphMLOps, web: GlyphWeb };

export default function ProjectCover({ domain, title, context }) {
  const Glyph = GLYPHS[domain] || GlyphML;
  return (
    <div className="cover">
      <span className="ctx">{context}</span>
      <Glyph />
      <span className="cover-title">{title}</span>
    </div>
  );
}
