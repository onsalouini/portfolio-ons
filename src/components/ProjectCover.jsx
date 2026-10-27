import React from 'react';
import { GlyphML, GlyphNLP, GlyphCV, GlyphMLOps, GlyphWeb } from './Icons';

const GLYPHS = { ml: GlyphML, nlp: GlyphNLP, cv: GlyphCV, mlops: GlyphMLOps, web: GlyphWeb };

// A real screenshot when the project has one, otherwise the domain glyph
export default function ProjectCover({ domain, title, context, image }) {
  const Glyph = GLYPHS[domain] || GlyphML;
  return (
    <div className={`cover${image ? ' has-img' : ''}`}>
      {image ? <img className="cover-img" src={image} alt="" loading="lazy" /> : <Glyph />}
      <span className="ctx">{context}</span>
      <span className="cover-title">{title}</span>
    </div>
  );
}
