import React from 'react';
import Layout from '@theme/Layout';

const skillGroups = [
  {
    icon: '📝',
    title: 'Documentation & Authoring',
    skills: ['Technical Documentation Strategy', 'Docs-as-Code', 'Markdown', 'HTML', 'CSS', 'Structured Authoring', 'Diátaxis Framework', 'Information Architecture', 'Content Governance', 'API Documentation', 'User Documentation', 'Release Notes', 'UX Writing / Microcopy'],
  },
  {
    icon: '🛠️',
    title: 'Tools & Platforms',
    skills: ['Docusaurus', 'Document360', 'MadCap Flare', 'Azure DevOps', 'SharePoint', 'Dynamics 365', 'Git / GitHub', 'Linux / Command Line'],
  },
  {
    icon: '📊',
    title: 'Analytics & Insights',
    skills: ['Google Analytics 4 (GA4)', 'Hotjar', 'Microsoft Clarity', 'Heap', 'Content Gap Analysis', 'User Behavior Analysis', 'Documentation Performance Metrics'],
  },
  {
    icon: '🎥',
    title: 'Visual & Media',
    skills: ['Snagit', 'Camtasia', 'Loom', 'Floik', 'Colossyan', 'Video Documentation', 'Product Walkthrough Content', 'Visual Documentation Assets'],
  },
  {
    icon: '🤝',
    title: 'Collaboration & Process',
    skills: ['Agile / Scrum', 'Cross-functional Stakeholder Management', 'Developer Collaboration', 'Engineering Partnership', 'Team Leadership & Mentoring', 'Documentation Quality Standards', 'Release Documentation Coordination'],
  },
  {
    icon: '🤖',
    title: 'Domain Expertise',
    skills: ['AI Product Documentation', 'SaaS Product Documentation', 'Enterprise Software Documentation', 'Knowledge Base Management', 'Developer Documentation', 'Onboarding Content', 'Help Center Design'],
  },
];

const tools = [
  { name: 'Docusaurus', level: 95 },
  { name: 'Git / GitHub', level: 90 },
  { name: 'Markdown', level: 98 },
  { name: 'MadCap Flare', level: 88 },
  { name: 'Document360', level: 92 },
  { name: 'GA4 / Analytics', level: 85 },
  { name: 'HTML / CSS', level: 80 },
  { name: 'Azure DevOps', level: 82 },
];

export default function Skills() {
  return (
    <Layout title="Skills" description="Janeera's technical writing skills and tools">
      <div className="section" style={{ maxWidth: 1060 }}>
        <h1 className="section-title">Skills & Tools</h1>
        <div className="section-divider" />

        <div className="card-grid">
          {skillGroups.map(group => (
            <div className="portfolio-card" key={group.title}>
              <div className="card-icon">{group.icon}</div>
              <div className="card-title">{group.title}</div>
              <div className="skills-cloud" style={{ marginTop: '0.75rem' }}>
                {group.skills.map(s => <span className="skill-pill" key={s}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency bars */}
        <div style={{ marginTop: '4rem' }}>
          <h2 className="section-title">Tool Proficiency</h2>
          <div className="section-divider" />
          <div style={{ maxWidth: 640 }}>
            {tools.map(t => (
              <div key={t.name} style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontWeight: 600, fontSize: '0.9rem' }}>
                  <span>{t.name}</span>
                  <span style={{ color: 'var(--portfolio-text-muted)' }}>{t.level}%</span>
                </div>
                <div style={{ background: 'var(--portfolio-border)', borderRadius: '999px', height: '8px', overflow: 'hidden' }}>
                  <div style={{ width: `${t.level}%`, height: '100%', background: 'linear-gradient(90deg, var(--ifm-color-primary), var(--ifm-color-primary-light))', borderRadius: '999px', transition: 'width 0.6s ease' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications / frameworks callout */}
        <div style={{ marginTop: '4rem', padding: '2rem', background: 'var(--portfolio-bg-soft)', borderRadius: '12px', borderLeft: '4px solid var(--portfolio-gold)' }}>
          <h3 style={{ marginBottom: '0.75rem' }}>Frameworks & Standards</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {[
              ['📐', 'Diátaxis', 'Tutorials, How-To Guides, Explanations, Reference'],
              ['🔁', 'Agile Docs', 'Sprint-aligned documentation delivery'],
              ['🧱', 'Docs-as-Code', 'Git versioning, CI/CD-ready content pipelines'],
              ['📏', 'Microsoft Style Guide', 'Applied at Aptean across enterprise docs'],
            ].map(([icon, name, desc]) => (
              <div key={name} style={{ flex: '1 1 200px', padding: '1rem', background: 'var(--portfolio-card-bg)', borderRadius: '8px', border: '1px solid var(--portfolio-border)' }}>
                <div style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{icon} <strong>{name}</strong></div>
                <div style={{ fontSize: '0.82rem', color: 'var(--portfolio-text-muted)' }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
