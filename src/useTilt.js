import { useEffect } from 'react';

// Adds a gentle 3D tilt + light glare to every .tilt element under the pointer.
export default function useTilt() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;
    let current = null;
    const onMove = e => {
      const card = e.target.closest && e.target.closest('.tilt');
      if (current && current !== card) { current.classList.remove('is-tilting'); current = null; }
      if (!card) return;
      current = card;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.style.setProperty('--ry', `${(px - 0.5) * 6}deg`);
      card.style.setProperty('--rx', `${(0.5 - py) * 6}deg`);
      card.style.setProperty('--gx', `${px * 100}%`);
      card.style.setProperty('--gy', `${py * 100}%`);
      card.classList.add('is-tilting');
    };
    const onLeave = () => { if (current) { current.classList.remove('is-tilting'); current = null; } };
    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    return () => { document.removeEventListener('pointermove', onMove); document.removeEventListener('pointerleave', onLeave); };
  }, []);
}
