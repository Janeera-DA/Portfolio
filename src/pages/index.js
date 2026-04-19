import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

const skills = [
  'Docs-as-Code', 'Git / GitHub', 'Markdown', 'Docusaurus',
  'API Documentation', 'SaaS Product Docs', 'Diátaxis Framework',
  'Information Architecture', 'GA4 · Hotjar · Clarity',
  'MadCap Flare', 'Document360', 'Release Notes',
  'Team Leadership', 'Agile / Scrum', 'AI Product Documentation',
  'UX Writing', 'Content Governance', 'Linux / CLI',
];

const highlights = [
  {
    icon: '📝',
    title: 'Docs-as-Code Expert',
    body: 'Git-based documentation workflows, Markdown authoring, static site generation with Docusaurus and structured content pipelines.',
  },
  {
    icon: '🏗️',
    title: 'Documentation Strategy',
    body: 'Building scalable content systems, governance processes, and information architectures that grow with the product.',
  },
  {
    icon: '🤖',
    title: 'AI Product Documentation',
    body: 'Documenting AI-native SaaS platforms, improving discoverability and self-service support with analytics-driven insights.',
  },
  {
    icon: '📊',
    title: 'Analytics-Led Content',
    body: 'Using GA4, Hotjar, and Clarity to identify friction, close content gaps, and improve user engagement metrics.',
  },
  {
    icon: '👩‍💻',
    title: 'Developer Collaboration',
    body: 'Embedded in engineering teams, comfortable with Azure DevOps, Linux CLI, and working alongside product and QA.',
  },
  {
    icon: '🎓',
    title: 'Researcher & Educator',
    body: 'PhD in ICE, 21 research articles, 2 patents, and 5+ years of academic leadership before transitioning to tech.',
  },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Home" description="Janeera D A — Senior Technical Author and Documentation Lead with 10+ years of experience.">
      <Head>
        <meta property="og:title" content="Janeera D A | Senior Technical Author" />
        <meta property="og:description" content="10+ years in technical documentation, docs-as-code, AI product docs, and documentation leadership." />
      </Head>

      {/* ── Hero ── */}
      <div className="hero-banner">
        <h1>Janeera D A</h1>
        <p className="hero-subtitle">
          Senior Technical Author · Documentation Lead · Docs-as-Code Specialist
        </p>
        <div>
          <span className="hero-badge">📍 Tamil Nadu, India</span>
          <span className="hero-badge">⏱ 10+ Years Experience</span>
          <span className="hero-badge">🏆 Global Writers Award 2026</span>
          <span className="hero-badge">🎓 PhD in ICE</span>
        </div>
        <div className="hero-cta">
          <Link className="btn-primary" to="/experience">View Experience</Link>
          <Link className="btn-outline" to="/about">About Me</Link>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="stats-bar">
        {[
          { n: '10+', label: 'Years Experience' },
          { n: '21', label: 'Research Articles' },
          { n: '2', label: 'Patents' },
          { n: '5', label: 'Industry Awards' },
          { n: '4', label: 'Book Chapters' },
        ].map(s => (
          <div className="stat-item" key={s.label}>
            <div className="stat-number">{s.n}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── What I Do ── */}
      <div className="section">
        <h2 className="section-title">What I Do</h2>
        <div className="section-divider" />
        <div className="card-grid">
          {highlights.map(h => (
            <div className="portfolio-card" key={h.title}>
              <div className="card-icon">{h.icon}</div>
              <div className="card-title">{h.title}</div>
              <div className="card-body">{h.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Skills ── */}
      <div style={{ background: 'var(--portfolio-bg-soft)', borderTop: '1px solid var(--portfolio-border)', borderBottom: '1px solid var(--portfolio-border)' }}>
        <div className="section">
          <h2 className="section-title">Core Skills</h2>
          <div className="section-divider" />
          <div className="skills-cloud">
            {skills.map(s => <span className="skill-pill" key={s}>{s}</span>)}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="section" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Let's work together</h2>
        <p style={{ color: 'var(--portfolio-text-muted)', maxWidth: 500, margin: '0.5rem auto 1.5rem' }}>
          Open to senior technical writing roles, documentation leadership, and docs-as-code consulting.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:janeerada@gmail.com"
            style={{ background: 'var(--ifm-color-primary)', color: 'white', padding: '0.7rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700 }}>
            Email Me
          </a>
          <a href="https://www.linkedin.com/in/janeera" target="_blank" rel="noreferrer"
            style={{ border: '2px solid var(--ifm-color-primary)', color: 'var(--ifm-color-primary)', padding: '0.7rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700 }}>
            LinkedIn
          </a>
        </div>
      </div>
    </Layout>
  );
}
