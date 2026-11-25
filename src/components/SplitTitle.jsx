import React from 'react';

// A short section title whose letters rise one after another when the
// section is revealed (.section-head[data-shown] / .reveal[data-shown]).
// Screen readers get the plain title; words never break mid-word.
export default function SplitTitle({ text }) {
  let i = 0;
  return (
    <h2 className="split-title" aria-label={text}>
      {text.split(' ').map((word, w) => (
        <span className="st-word" key={w} aria-hidden="true">
          {[...word].map(ch => <span className="st-char" key={i} style={{ '--c': i++ }}>{ch}</span>)}
          {' '}
        </span>
      ))}
    </h2>
  );
}
