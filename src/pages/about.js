import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function About() {
  return (
    <Layout title="About" description="About Janeera D A — Senior Technical Author">
      <div className="section" style={{ maxWidth: 860 }}>
        <h1 className="section-title">About Me</h1>
        <div className="section-divider" />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
              I'm a <strong>Senior Technical Author and Documentation Lead</strong> with over 10 years of experience
              building scalable documentation systems for SaaS, enterprise software, and AI products.
            </p>
            <p style={{ lineHeight: 1.8, color: 'var(--portfolio-text-muted)' }}>
              My journey started in academia — I taught engineering, led institutional documentation for
              accreditation, published 21 research articles, and earned a <strong>PhD in Information &amp; Communication
              Engineering</strong> from Anna University. That foundation gave me a deep appreciation for structured
              thinking, precision, and communicating complex ideas clearly.
            </p>
            <p style={{ lineHeight: 1.8, color: 'var(--portfolio-text-muted)' }}>
              I transitioned into industry technical writing at Aptean, then joined <strong>Kovai.co</strong>
              where I've grown from Senior Technical Writer to Senior Lead — building documentation teams,
              owning end-to-end documentation strategy, and integrating analytics to drive continuous
              improvement.
            </p>
            <p style={{ lineHeight: 1.8, color: 'var(--portfolio-text-muted)' }}>
              I believe great documentation is a product in itself: it reduces support load, accelerates
              onboarding, and builds user trust. I work at the intersection of <strong>engineering, product,
              UX, and support</strong> to make that happen.
            </p>
          </div>

          <div>
            {/* Quick Facts */}
            <div className="portfolio-card" style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--portfolio-text-muted)' }}>Quick Facts</h3>
              {[
                ['📍', 'Location', 'Tamil Nadu, India'],
                ['📧', 'Email', 'janeerada@gmail.com'],
                ['🔗', 'LinkedIn', 'linkedin.com/in/janeera'],
                ['🎓', 'Education', 'PhD · ME · BE (Engineering)'],
                ['🏢', 'Current Role', 'Senior Lead Technical Document Writer, Kovai.co'],
                ['🌐', 'Remote Ready', 'Yes — experienced with distributed teams'],
              ].map(([icon, label, value]) => (
                <div key={label} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.6rem', fontSize: '0.9rem' }}>
                  <span>{icon}</span>
                  <span style={{ color: 'var(--portfolio-text-muted)', minWidth: 90 }}>{label}</span>
                  <span style={{ fontWeight: 500 }}>{value}</span>
                </div>
              ))}
            </div>

            {/* Research */}
            <div className="portfolio-card">
              <h3 style={{ marginBottom: '1rem', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--portfolio-text-muted)' }}>Research Output</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  ['21', 'Research Articles'],
                  ['2', 'Patents'],
                  ['4', 'Book Chapters'],
                  ['1', 'Book'],
                ].map(([n, label]) => (
                  <div key={label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--ifm-color-primary)' }}>{n}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--portfolio-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--portfolio-bg-soft)', borderRadius: '12px', borderLeft: '4px solid var(--portfolio-gold)' }}>
          <h2 style={{ marginBottom: '0.5rem' }}>My Documentation Philosophy</h2>
          <p style={{ lineHeight: 1.8, color: 'var(--portfolio-text-muted)', marginBottom: 0 }}>
            I follow the <strong>Diátaxis framework</strong> — structuring content into tutorials, how-to guides,
            explanations, and references — to ensure every document serves the right user need at the right moment.
            I combine this with analytics (GA4, Hotjar, Clarity) to let actual user behavior guide what gets
            written, updated, or retired. Documentation should be <em>discoverable, accurate, and alive</em>.
          </p>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/experience" style={{ background: 'var(--ifm-color-primary)', color: 'white', padding: '0.65rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700 }}>
            See My Experience →
          </Link>
          <Link to="/achievements" style={{ border: '2px solid var(--ifm-color-primary)', color: 'var(--ifm-color-primary)', padding: '0.65rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700 }}>
            View Achievements
          </Link>
        </div>
      </div>
    </Layout>
  );
}
