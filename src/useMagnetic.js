import { useEffect } from 'react';

// Buttons with the .magnetic class lean a little toward the pointer.
// Uses the CSS `translate` property so it never fights hover transforms.
export default function useMagnetic() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;
    let current = null;
    const reset = el => { el.style.removeProperty('--tx'); el.style.removeProperty('--ty'); };
    const onMove = e => {
      const el = e.target.closest && e.target.closest('.magnetic');
      if (current && current !== el) { reset(current); current = null; }
      if (!el) return;
      current = el;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--tx', `${((e.clientX - r.left) / r.width - 0.5) * 12}px`);
      el.style.setProperty('--ty', `${((e.clientY - r.top) / r.height - 0.5) * 10}px`);
    };
    const onLeave = () => { if (current) { reset(current); current = null; } };
    document.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      document.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, []);
}
