import React, { useEffect, useRef } from 'react';

// A soft rose light that trails the pointer, and a ring that grows over links.
// Desktop only (fine pointer), off with reduced motion. The native cursor stays.
export default function CursorGlow() {
  const glow = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return undefined;
    const g = glow.current;
    const r = ring.current;
    let x = -400, y = -400, gx = x, gy = y, rx = x, ry = y, frame = 0;
    const loop = () => {
      gx += (x - gx) * 0.12; gy += (y - gy) * 0.12;
      rx += (x - rx) * 0.3; ry += (y - ry) * 0.3;
      g.style.transform = `translate3d(${gx}px, ${gy}px, 0)`;
      r.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      frame = Math.abs(x - gx) + Math.abs(y - gy) > 0.3 ? requestAnimationFrame(loop) : 0;
    };
    const onMove = e => {
      x = e.clientX; y = e.clientY;
      document.body.dataset.cursor = 'on';
      const hot = e.target.closest && e.target.closest('a, button, [role="button"], input, textarea');
      r.dataset.hot = hot ? 'true' : 'false';
      if (!frame) frame = requestAnimationFrame(loop);
    };
    const onLeave = () => { document.body.dataset.cursor = 'off'; };
    document.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      document.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <span className="cursor-glow" ref={glow} aria-hidden="true" />
      <span className="cursor-ring" ref={ring} aria-hidden="true" />
    </>
  );
}
