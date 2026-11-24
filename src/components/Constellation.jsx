import React, { useEffect, useRef } from 'react';

// A quiet "neural network" behind the hero: rose and mauve points that drift
// and link up when close, and reach toward the pointer. Paused off screen,
// drawn once (static) when the visitor prefers less motion.
export default function Constellation() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const host = canvas.parentElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const LINK = 130;
    const REACH = 170;
    let w = 0, h = 0, pts = [], frame = 0, onScreen = true, colors = {};
    const mouse = { x: -1e4, y: -1e4 };

    const readColors = () => {
      const cs = getComputedStyle(document.documentElement);
      colors = { a: cs.getPropertyValue('--rose').trim(), b: cs.getPropertyValue('--plum').trim(), c: cs.getPropertyValue('--coral').trim() };
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;
      ctx.strokeStyle = colors.b;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < LINK) {
            ctx.globalAlpha = (1 - d / LINK) * 0.32;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
        const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (dm < REACH) {
          ctx.strokeStyle = colors.a;
          ctx.globalAlpha = (1 - dm / REACH) * 0.55;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
          ctx.strokeStyle = colors.b;
        }
      }
      for (const p of pts) {
        ctx.globalAlpha = 0.75;
        ctx.fillStyle = colors[p.k];
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const step = () => {
      for (const p of pts) {
        const dx = mouse.x - p.x, dy = mouse.y - p.y;
        const dm = Math.hypot(dx, dy);
        if (dm < REACH && dm > 1) { p.vx += (dx / dm) * 0.006; p.vy += (dy / dm) * 0.006; }
        p.vx *= 0.995; p.vy *= 0.995;
        const sp = Math.hypot(p.vx, p.vy);
        if (sp < 0.08) { p.vx += (Math.random() - 0.5) * 0.02; p.vy += (Math.random() - 0.5) * 0.02; }
        if (sp > 0.6) { p.vx *= 0.6 / sp; p.vy *= 0.6 / sp; }
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
    };

    const loop = () => {
      frame = 0;
      if (!onScreen || document.hidden) return;
      step(); draw();
      frame = requestAnimationFrame(loop);
    };
    const start = () => { if (!reduce && !frame) frame = requestAnimationFrame(loop); };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = host.clientWidth; h = host.clientHeight;
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(70, Math.max(22, (w * h) / 15000)));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.8,
        k: Math.random() < 0.15 ? 'c' : Math.random() < 0.5 ? 'a' : 'b',
      }));
      draw();
    };

    readColors();
    resize();
    start();

    const ro = new ResizeObserver(() => resize());
    ro.observe(host);
    const io = new IntersectionObserver(([e]) => { onScreen = e.isIntersecting; if (onScreen) start(); });
    io.observe(host);
    const onMove = e => { const r = host.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; };
    const onLeave = () => { mouse.x = -1e4; mouse.y = -1e4; };
    const onVis = () => start();
    if (!reduce) {
      host.addEventListener('pointermove', onMove, { passive: true });
      host.addEventListener('pointerleave', onLeave);
      document.addEventListener('visibilitychange', onVis);
    }
    // repaint in the right colors when the theme changes
    const mo = new MutationObserver(() => { readColors(); draw(); });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onScheme = () => { readColors(); draw(); };
    mq.addEventListener('change', onScheme);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      ro.disconnect(); io.disconnect(); mo.disconnect();
      mq.removeEventListener('change', onScheme);
      host.removeEventListener('pointermove', onMove);
      host.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return <canvas className="constellation" ref={ref} aria-hidden="true" />;
}
