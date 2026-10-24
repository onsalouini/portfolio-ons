import React from 'react';
import { useLang } from '../context/LanguageContext';
import { personal } from '../data/portfolioData';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="wrap">
        <p>© {new Date().getFullYear()} {personal.name}. {t.footer}</p>
        <p>
          <a href={personal.github} target="_blank" rel="noreferrer">GitHub</a>
          {'  ·  '}
          <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </div>
    </footer>
  );
}
