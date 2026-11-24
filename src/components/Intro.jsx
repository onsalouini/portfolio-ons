import React, { useEffect, useState } from 'react';

// The "AO" monogram draws itself, then the curtain lifts onto the hero.
// Plays once per visit, on the home page only; index.html decides (class "intro")
// before the first paint so the hero waits for it. Purely visual: no clicks blocked.
let played = false;

export default function Intro() {
  const [show, setShow] = useState(() => !played && document.documentElement.classList.contains('intro'));

  useEffect(() => {
    if (!show) return undefined;
    if (!played) {
      played = true;
      // once every hero entrance has finished, the delay is no longer needed
      // (coming back to the home page later must not wait again)
      setTimeout(() => document.documentElement.classList.remove('intro'), 4000);
    }
    const hide = setTimeout(() => setShow(false), 1700);
    return () => clearTimeout(hide);
  }, [show]);

  if (!show) return null;
  return (
    <div className="intro-curtain" aria-hidden="true">
      <svg viewBox="0 0 240 160" className="intro-mark">
        <defs>
          <linearGradient id="introGrad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" style={{ stopColor: 'var(--rose)' }} />
            <stop offset=".55" style={{ stopColor: 'var(--plum)' }} />
            <stop offset="1" style={{ stopColor: 'var(--coral)' }} />
          </linearGradient>
        </defs>
        <text x="120" y="118" textAnchor="middle">AO</text>
        <line x1="70" x2="170" y1="140" y2="140" />
      </svg>
    </div>
  );
}
