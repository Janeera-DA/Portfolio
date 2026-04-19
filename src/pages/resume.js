import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Resume() {
  return (
    <Layout title="Resume" description="Janeera D A — Resume">
      <div className="section" style={{ maxWidth: 760 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.5rem' }}>
          <div>
            <h1 className="section-title">Janeera D A</h1>
            <p style={{ color: 'var(--portfolio-text-muted)', marginBottom: 0 }}>
              Senior Technical Author · Documentation Lead · Docs-as-Code Specialist
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="mailto:janeerada@gmail.com"
              style={{ background: 'var(--ifm-color-primary)', color: 'white', padding: '0.5rem 1.2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.875rem' }}>
              Email
            </a>
            <a href="https://www.linkedin.com/in/janeera" target="_blank" rel="noreferrer"
              style={{ background: '#0a66c2', color: 'white', padding: '0.5rem 1.2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.875rem' }}>
              LinkedIn
            </a>
          </div>
        </div>
        <div className="section-divider" />

        <p style={{ lineHeight: 1.8, marginBottom: '2rem' }}>
          Technical documentation leader with 10+ years of experience creating product, developer,
          enterprise SaaS, and AI-platform documentation. Proven success building scalable documentation
          systems, leading writers, improving product adoption, and partnering with engineering, product,
          support, and UX teams.
        </p>

        {/* Navigate to full sections */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
          {[
            { label: '💼 Experience', to: '/experience', desc: 'Full career timeline' },
            { label: '🛠️ Skills', to: '/skills', desc: 'Tools, platforms & frameworks' },
            { label: '🏆 Achievements', to: '/achievements', desc: 'Awards & research' },
            { label: '📝 Blog', to: '/blog', desc: 'Writing & insights' },
          ].map(item => (
            <Link key={item.label} to={item.to}
              style={{ display: 'block', padding: '1.25rem', background: 'var(--portfolio-card-bg)', border: '1px solid var(--portfolio-border)', borderRadius: '10px', textDecoration: 'none', transition: 'transform 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={e => e.currentTarget.style.transform = ''}>
              <div style={{ fontWeight: 700, color: 'var(--ifm-heading-color)' }}>{item.label}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--portfolio-text-muted)', marginTop: '0.2rem' }}>{item.desc}</div>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--portfolio-bg-soft)', borderRadius: '10px', textAlign: 'center', border: '1px solid var(--portfolio-border)' }}>
          <p style={{ marginBottom: '0.75rem', fontWeight: 600 }}>Want the full PDF resume?</p>
          <a href="mailto:janeerada@gmail.com?subject=Resume Request"
            style={{ background: 'var(--ifm-color-primary)', color: 'white', padding: '0.6rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>
            Request via Email →
          </a>
        </div>
      </div>
    </Layout>
  );
}
