import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext(null);
const STORAGE_KEY = 'portfolio-lang';

function initialLang() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'fr' || saved === 'en') return saved;
  } catch (e) { /* storage unavailable */ }
  const nav = (navigator.language || 'fr').toLowerCase();
  return nav.startsWith('fr') ? 'fr' : 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }, [lang]);

  const toggle = useCallback(() => setLang(l => (l === 'fr' ? 'en' : 'fr')), []);

  // tr() returns the right language for a bilingual value ({ fr, en }),
  // or the value itself when it is the same in both languages.
  const tr = useCallback(
    v => (v && typeof v === 'object' && !Array.isArray(v) && ('fr' in v || 'en' in v) ? v[lang] ?? v.fr : v),
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t: translations[lang], tr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
