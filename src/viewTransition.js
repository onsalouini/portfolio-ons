import { flushSync } from 'react-dom';

// View Transitions API: smooth morphs between pages and themes.
// Browsers without it (or visitors who prefer less motion) get the instant change.
export const canTransition = () =>
  typeof document !== 'undefined' &&
  typeof document.startViewTransition === 'function' &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function withTransition(update, kind = 'page') {
  if (!canTransition()) { update(); return null; }
  const root = document.documentElement;
  root.dataset.vt = kind;
  const vt = document.startViewTransition(() => flushSync(update));
  vt.finished.finally(() => { if (root.dataset.vt === kind) delete root.dataset.vt; });
  return vt;
}

const plainClick = e => e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;

// onClick for a router <Link>: navigates inside a view transition.
// `morph` is an element that should grow into the next page's banner.
export function navigateWithTransition(e, navigate, to, morph) {
  if (!plainClick(e) || !canTransition()) return;
  e.preventDefault();
  if (morph) morph.style.viewTransitionName = 'proj-cover';
  const vt = withTransition(() => navigate(to));
  if (vt && morph) vt.finished.finally(() => { morph.style.viewTransitionName = ''; });
}
