import { useEffect } from 'react';

// Fades elements with the .reveal class in as they enter the viewport.
// Anything already scrolled past (fast scroll, jump from the menu) is shown too,
// so no content can stay hidden.
export default function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pending = () => document.querySelectorAll('.reveal:not([data-shown])');
    const show = el => el.setAttribute('data-shown', '');

    if (reduce) {
      pending().forEach(show);
      const mo = new MutationObserver(() => pending().forEach(show));
      mo.observe(document.body, { childList: true, subtree: true });
      return () => mo.disconnect();
    }

    let frame = 0;
    const check = () => {
      frame = 0;
      const limit = window.innerHeight * 0.94;
      pending().forEach(el => { if (el.getBoundingClientRect().top < limit) show(el); });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(check); };

    check();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    const mo = new MutationObserver(schedule);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      mo.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}
