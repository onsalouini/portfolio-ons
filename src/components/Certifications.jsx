import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const [selected, setSelected] = useState(null);

  // Vérification et sécurité
  const certifications = portfolioData.certifications || [];

  // Si pas de certifications, afficher un message
  if (certifications.length === 0) {
    return (
      <section id="certifications" style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 40,
            textAlign: 'center', color: '#2D2D2D', marginBottom: 8 }}>
            Certifications 🏅
          </h2>
          <p>Aucune certification pour le moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="certifications" style={{ padding: '80px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ 
          fontFamily: 'Playfair Display, serif', 
          fontSize: 40,
          textAlign: 'center', 
          color: '#2D2D2D', 
          marginBottom: 8 
        }}>
          Certifications 🏅
        </h2>
        <div style={{ 
          width: 64, 
          height: 4, 
          background: '#C96B6B',
          margin: '0 auto 48px', 
          borderRadius: 4 
        }} />

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: 24 
        }}>
          {certifications.map((cert, i) => (
            <div 
              key={i} 
              onClick={() => setSelected(cert)}
              style={{ 
                background: '#FDF8F5', 
                borderRadius: 24, 
                overflow: 'hidden',
                border: '1px solid #F9E8E8', 
                cursor: 'pointer',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s, box-shadow 0.3s' 
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(201,107,107,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)';
              }}
            >
              {/* Header coloré */}
              <div style={{ 
                background: 'linear-gradient(135deg, #F9E8E8, #EDE0F5)',
                padding: '32px 24px', 
                textAlign: 'center', 
                position: 'relative' 
              }}>
                <div style={{ fontSize: 56, marginBottom: 8 }}>{cert.badge || '🏅'}</div>
                {cert.nft && (
                  <span style={{ 
                    position: 'absolute', 
                    top: 12, 
                    right: 12,
                    background: 'linear-gradient(135deg, #C96B6B, #9B72CF)',
                    color: '#fff', 
                    fontSize: 10, 
                    fontWeight: 700,
                    padding: '3px 10px', 
                    borderRadius: 20 
                  }}>
                    NFT ✨
                  </span>
                )}
                <div style={{ 
                  background: '#fff', 
                  display: 'inline-block',
                  padding: '4px 12px', 
                  borderRadius: 20, 
                  fontSize: 12,
                  color: '#9B72CF', 
                  fontWeight: 600 
                }}>
                  ⏱️ {cert.duration || 'N/A'}
                </div>
              </div>

              {/* Contenu */}
              <div style={{ padding: 24 }}>
                <h3 style={{ 
                  fontFamily: 'Playfair Display, serif', 
                  fontSize: 19,
                  color: '#2D2D2D', 
                  marginBottom: 6, 
                  fontWeight: 700, 
                  lineHeight: 1.3 
                }}>
                  {cert.title}
                </h3>
                <p style={{ 
                  color: '#C96B6B', 
                  fontSize: 13, 
                  fontWeight: 600, 
                  marginBottom: 4 
                }}>
                  {cert.issuer}
                </p>
                <p style={{ color: '#bbb', fontSize: 12, marginBottom: 12 }}>
                  {cert.date}
                </p>
                <p style={{ 
                  color: '#888', 
                  fontSize: 13, 
                  lineHeight: 1.6, 
                  marginBottom: 16 
                }}>
                  {cert.description ? cert.description.slice(0, 100) + '...' : ''}
                </p>

                {/* Skills */}
                {cert.skills && cert.skills.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {cert.skills.map((s, j) => (
                      <span 
                        key={j} 
                        style={{ 
                          background: '#EDE0F5', 
                          color: '#9B72CF',
                          padding: '3px 10px', 
                          borderRadius: 50, 
                          fontSize: 11, 
                          fontWeight: 500 
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                <div style={{ 
                  marginTop: 16, 
                  color: '#C96B6B', 
                  fontSize: 13,
                  fontWeight: 600 
                }}>
                  👁️ Voir le certificat →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div 
          onClick={() => setSelected(null)}
          style={{ 
            position: 'fixed', 
            inset: 0, 
            background: 'rgba(0,0,0,0.85)',
            zIndex: 1000, 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center', 
            padding: 24 
          }}
        >
          <div 
            onClick={e => e.stopPropagation()}
            style={{ 
              background: '#fff', 
              borderRadius: 24, 
              maxWidth: 680,
              width: '100%', 
              maxHeight: '90vh', 
              overflowY: 'auto',
              boxShadow: '0 24px 80px rgba(0,0,0,0.4)' 
            }}
          >
            {/* Header modal */}
            <div style={{ 
              background: 'linear-gradient(135deg, #F9E8E8, #EDE0F5)',
              padding: '40px 32px', 
              textAlign: 'center', 
              position: 'relative' 
            }}>
              <button 
                onClick={() => setSelected(null)}
                style={{ 
                  position: 'absolute', 
                  top: 16, 
                  right: 16,
                  background: 'rgba(255,255,255,0.8)', 
                  border: 'none',
                  width: 32, 
                  height: 32, 
                  borderRadius: '50%', 
                  cursor: 'pointer',
                  fontSize: 16, 
                  fontWeight: 700, 
                  color: '#2D2D2D' 
                }}
              >
                ✕
              </button>
              <div style={{ fontSize: 64, marginBottom: 12 }}>
                {selected.badge || '🏅'}
              </div>
              {selected.nft && (
                <span style={{ 
                  background: 'linear-gradient(135deg, #C96B6B, #9B72CF)',
                  color: '#fff', 
                  fontSize: 12, 
                  fontWeight: 700,
                  padding: '4px 14px', 
                  borderRadius: 20 
                }}>
                  Certificat NFT ✨
                </span>
              )}
            </div>

            {/* Détails */}
            <div style={{ padding: 32 }}>
              <h2 style={{ 
                fontFamily: 'Playfair Display, serif', 
                fontSize: 26,
                color: '#2D2D2D', 
                marginBottom: 8 
              }}>
                {selected.title}
              </h2>
              <p style={{ color: '#C96B6B', fontWeight: 600, marginBottom: 4 }}>
                {selected.issuer}
              </p>
              <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
                <span style={{ color: '#bbb', fontSize: 13 }}>📅 {selected.date}</span>
                <span style={{ color: '#bbb', fontSize: 13 }}>⏱️ {selected.duration}</span>
              </div>

              <p style={{ color: '#666', lineHeight: 1.8, marginBottom: 20, fontSize: 15 }}>
                {selected.description}
              </p>

              {/* Skills */}
              {selected.skills && selected.skills.length > 0 && (
                <div style={{ marginBottom: 24 }}>
                  <p style={{ 
                    fontWeight: 600, 
                    color: '#2D2D2D', 
                    marginBottom: 10, 
                    fontSize: 14 
                  }}>
                    Compétences acquises :
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {selected.skills.map((s, j) => (
                      <span 
                        key={j} 
                        style={{ 
                          background: '#EDE0F5', 
                          color: '#9B72CF',
                          padding: '6px 14px', 
                          borderRadius: 50, 
                          fontSize: 13, 
                          fontWeight: 500 
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Boutons */}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {selected.pdf && (
                  <a 
                    href={selected.pdf} 
                    target="_blank" 
                    rel="noreferrer"
                    style={{ 
                      background: 'linear-gradient(to right, #C96B6B, #9B72CF)',
                      color: '#fff', 
                      padding: '12px 24px', 
                      borderRadius: 50,
                      fontWeight: 600, 
                      textDecoration: 'none', 
                      fontSize: 14 
                    }}
                  >
                    📄 Voir le PDF
                  </a>
                )}
                {selected.link && (
                  <a 
                    href={selected.link} 
                    target="_blank" 
                    rel="noreferrer"
                    style={{ 
                      border: '2px solid #C96B6B', 
                      color: '#C96B6B',
                      padding: '12px 24px', 
                      borderRadius: 50,
                      fontWeight: 600, 
                      textDecoration: 'none', 
                      fontSize: 14 
                    }}
                  >
                    🔗 Site officiel
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}