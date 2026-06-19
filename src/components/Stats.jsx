import React, { useState, useEffect, useRef } from 'react';

function CountUp({ target, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = Date.now();
        const tick = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
          else setCount(target);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { icon: "🤖", value: 95, suffix: "%", label: "Accuracy MedVision AI", color: "#C96B6B" },
  { icon: "📊", value: 6, suffix: "+", label: "Projets réalisés", color: "#9B72CF" },
  { icon: "💻", value: 10, suffix: "+", label: "Technologies maîtrisées", color: "#C96B6B" },
  { icon: "🏆", value: 2, suffix: "", label: "Stages professionnels", color: "#9B72CF" },
  { icon: "📈", value: 92, suffix: "%", label: "mAP Détection dentaire", color: "#C96B6B" },
  { icon: "🌍", value: 3, suffix: "", label: "Langues parlées", color: "#9B72CF" },
];

export default function Stats() {
  return (
    <section style={{ padding: '64px 24px',
      background: 'linear-gradient(135deg, #F9E8E8 0%, #EDE0F5 100%)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 36,
          textAlign: 'center', color: '#2D2D2D', marginBottom: 8 }}>
          En chiffres ✨
        </h2>
        <div style={{ width: 64, height: 4, background: '#C96B6B',
          margin: '0 auto 48px', borderRadius: 4 }} />

        <div style={{ display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24 }}>
          {stats.map((stat, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 20, padding: '28px 20px',
              textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              transition: 'transform 0.3s, box-shadow 0.3s' }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
              }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{stat.icon}</div>
              <div style={{ fontSize: 40, fontWeight: 800, color: stat.color,
                fontFamily: 'Playfair Display, serif', lineHeight: 1 }}>
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div style={{ color: '#888', fontSize: 13, marginTop: 8,
                fontWeight: 500, lineHeight: 1.4 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}