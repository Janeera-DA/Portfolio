import React from 'react';
import Layout from '@theme/Layout';

const awards = [
  {
    icon: '🌍',
    title: 'Global Writers Award',
    org: 'Document360',
    year: '2026',
    desc: 'Recognised as a top technical writer globally by Document360 for outstanding documentation impact.',
  },
  {
    icon: '🏅',
    title: 'Best Mentor Award',
    org: 'Kovai.co',
    year: '2025',
    desc: 'Awarded for exceptional mentorship of writers, contributing to team growth and documentation quality.',
  },
  {
    icon: '🚀',
    title: 'Highflyer Award',
    org: 'Kovai.co',
    year: '2025',
    desc: 'Recognised for consistently high performance, leadership, and significant contribution to documentation strategy.',
  },
  {
    icon: '💎',
    title: 'Gem Award',
    org: 'Aptean',
    year: '2022',
    desc: 'Awarded for exceptional contribution to enterprise documentation quality and team collaboration.',
  },
  {
    icon: '⭐',
    title: 'Top Performing Mentor',
    org: 'NPTEL',
    year: '2018',
    desc: 'Recognised as a top-performing mentor across NPTEL courses for student engagement and outcomes.',
  },
];

const research = [
  { label: 'Research Articles', value: '21', icon: '📄' },
  { label: 'Patents', value: '2', icon: '🔬' },
  { label: 'Book Chapters', value: '4', icon: '📖' },
  { label: 'Books Published', value: '1', icon: '📚' },
];

const linkedInHighlights = [
  {
    icon: '✍️',
    title: 'Featured Posts & Articles',
    desc: 'Sharing insights on docs-as-code, Diátaxis, and documentation strategy with a growing professional network.',
  },
  {
    icon: '🤝',
    title: 'Community Recognition',
    desc: 'Active participant in the technical writing community — sharing tools, frameworks, and best practices.',
  },
  {
    icon: '📣',
    title: 'Recommendations',
    desc: 'Endorsed by colleagues and managers for documentation leadership, mentoring, and cross-functional collaboration.',
  },
  {
    icon: '🏷️',
    title: 'Skill Endorsements',
    desc: 'Top endorsed for Technical Writing, API Documentation, Docs-as-Code, and Information Architecture.',
  },
];

export default function Achievements() {
  return (
    <Layout title="Achievements" description="Awards, recognitions and research highlights">
      <div className="section" style={{ maxWidth: 900 }}>
        <h1 className="section-title">Achievements</h1>
        <div className="section-divider" />

        {/* Awards */}
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.25rem' }}>🏆 Industry Awards</h2>
        {awards.map((a, i) => (
          <div className="award-card" key={i}>
            <div className="award-icon">{a.icon}</div>
            <div>
              <div className="award-title">{a.title}</div>
              <div className="award-org">{a.org} · {a.year}</div>
              <div style={{ marginTop: '0.4rem', fontSize: '0.88rem', color: 'var(--portfolio-text-muted)' }}>{a.desc}</div>
            </div>
          </div>
        ))}

        {/* Research */}
        <div style={{ marginTop: '3.5rem' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.25rem' }}>🔬 Research & Publications</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            {research.map(r => (
              <div key={r.label} className="portfolio-card" style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>{r.icon}</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--ifm-color-primary)', lineHeight: 1 }}>{r.value}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--portfolio-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.3rem' }}>{r.label}</div>
              </div>
            ))}
          </div>
          <p style={{ color: 'var(--portfolio-text-muted)', fontSize: '0.92rem' }}>
            Research spans <strong>Information & Communication Engineering</strong>, published through
            Anna University during a concurrent PhD (2018–2024) alongside a full-time academic career.
            Two patents demonstrate applied innovation in the field.
          </p>
        </div>

        {/* LinkedIn Section */}
        <div style={{ marginTop: '3.5rem' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>🔗 LinkedIn Highlights</h2>
          <p style={{ color: 'var(--portfolio-text-muted)', marginBottom: '1.5rem' }}>
            My LinkedIn profile reflects a fuller picture of my professional journey — including recommendations
            from colleagues, skill endorsements, featured articles, and community engagement in the technical writing space.
          </p>
          <div className="card-grid">
            {linkedInHighlights.map(h => (
              <div className="portfolio-card" key={h.title}>
                <div className="card-icon">{h.icon}</div>
                <div className="card-title">{h.title}</div>
                <div className="card-body">{h.desc}</div>
              </div>
            ))}
          </div>

          <div className="linkedin-cta">
            <h3>See My Full LinkedIn Profile</h3>
            <p>Connect with me, view recommendations, featured posts, and detailed skill endorsements.</p>
            <a href="https://www.linkedin.com/in/janeera" target="_blank" rel="noreferrer">
              View LinkedIn Profile →
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
