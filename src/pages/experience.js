import React, { useState } from 'react';
import Layout from '@theme/Layout';

const jobs = [
  {
    role: 'Senior Lead Technical Document Writer',
    company: 'Kovai.co',
    date: 'Jan 2026 – Present',
    type: 'industry',
    bullets: [
      'Lead documentation strategy for enterprise SaaS and AI products across multiple teams.',
      'Drive AI-native documentation initiatives to improve discoverability, scalability, and self-service support.',
      'Manage writers, review quality standards, and improve delivery velocity.',
      'Use GA4, Hotjar, and Clarity to identify user behavior trends and optimise documentation performance.',
      'Partner with product and engineering teams to improve usability, onboarding, and release readiness.',
      'Build structured content systems, governance processes, and scalable documentation operations.',
    ],
  },
  {
    role: 'Lead Technical Document Writer',
    company: 'Kovai.co',
    date: 'Jan 2025 – Dec 2025',
    type: 'industry',
    bullets: [
      'Owned end-to-end documentation including user guides, release notes, product updates, UI text, and blogs.',
      'Led writers and coordinated delivery across engineering, QA, support, and product stakeholders.',
      'Improved documentation quality through audits, style consistency, and content lifecycle processes.',
      'Used GA4, Hotjar, and Microsoft Clarity insights to improve engagement and find content gaps.',
      'Provided product feedback based on user pain points and documentation trends.',
    ],
  },
  {
    role: 'Senior Technical Document Writer',
    company: 'Kovai.co',
    date: 'Apr 2024 – Dec 2024',
    type: 'industry',
    bullets: [
      'Managed documentation execution for SaaS products and supported daily team operations.',
      'Mentored writers and reviewed content for clarity, accuracy, and usability.',
      'Created onboarding flows, UI guidance, help content, and knowledge base articles.',
      'Used customer feedback systems to identify recurring friction points and improve content.',
      'Produced visual documentation assets and guided product walkthrough content.',
    ],
  },
  {
    role: 'Senior Technical Writer',
    company: 'Aptean',
    date: 'Apr 2023 – Apr 2024',
    type: 'industry',
    bullets: [
      'Created and improved enterprise software documentation for global users.',
      'Reviewed documentation for quality, compliance, terminology consistency, and usability.',
      'Led standups, coordinated documentation priorities, and improved workflow efficiency.',
      'Built training and onboarding content using video and interactive learning tools.',
      'Collaborated with product and engineering teams to support releases.',
    ],
  },
  {
    role: 'Technical Writer',
    company: 'Aptean',
    date: 'Aug 2021 – Mar 2023',
    type: 'industry',
    bullets: [
      'Produced user guides, release notes, tooltips, and help content in Agile product teams.',
      'Worked with Azure DevOps, Dynamics 365, SharePoint, and MadCap Flare environments.',
      'Maintained documentation aligned with Microsoft writing standards and product updates.',
      'Coordinated with developers, QA, and SMEs for accurate release documentation.',
      'Supported structured publishing workflows and version-controlled content updates.',
    ],
  },
  {
    role: 'Assistant Professor',
    company: 'Sri Krishna College of Engineering & Technology',
    date: 'Jul 2016 – Aug 2021',
    type: 'academic',
    bullets: [
      'Led institutional documentation for accreditation, rankings, audits, and strategic reports.',
      'Produced executive presentations, web content, public communication, and internal documentation.',
      'Managed budgets, academic reporting, student mentoring, and program operations.',
      'Developed research proposals, publications, and technical reports.',
    ],
  },
  {
    role: 'Assistant Professor',
    company: 'Dhanalakshmi Srinivasan College of Engineering',
    date: 'Jul 2014 – Jul 2016',
    type: 'academic',
    bullets: [
      'Taught Embedded Systems and Digital Signal Processing.',
      'Coordinated accreditation documentation and academic quality initiatives.',
      'Supported conferences, editorial activities, and curriculum delivery.',
    ],
  },
];

const education = [
  { degree: 'Ph.D., Information & Communication Engineering', school: 'Anna University', year: '2018 – 2024' },
  { degree: 'M.E., Applied Electronics', school: 'Anna University', year: '2012 – 2014' },
  { degree: 'B.E., Electronics & Communication Engineering', school: 'Karunya University', year: '2007 – 2011' },
];

export default function Experience() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? jobs : jobs.filter(j => j.type === filter);

  return (
    <Layout title="Experience" description="Janeera's professional experience in technical writing and documentation">
      <div className="section" style={{ maxWidth: 900 }}>
        <h1 className="section-title">Experience</h1>
        <div className="section-divider" />

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {[['all', 'All Roles'], ['industry', 'Industry'], ['academic', 'Academic']].map(([val, label]) => (
            <button key={val} onClick={() => setFilter(val)}
              style={{
                padding: '0.4rem 1.1rem', borderRadius: '999px', border: '2px solid var(--ifm-color-primary)',
                background: filter === val ? 'var(--ifm-color-primary)' : 'transparent',
                color: filter === val ? 'white' : 'var(--ifm-color-primary)',
                fontWeight: 600, cursor: 'pointer', fontSize: '0.875rem'
              }}>
              {label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="timeline">
          {filtered.map((job, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-date">{job.date}</div>
              <div className="timeline-role">{job.role}</div>
              <div className="timeline-company">{job.company}</div>
              <ul className="timeline-bullets">
                {job.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div style={{ marginTop: '4rem' }}>
          <h2 className="section-title">Education</h2>
          <div className="section-divider" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {education.map((e, i) => (
              <div key={i} className="portfolio-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem' }}>🎓 {e.degree}</div>
                  <div style={{ color: 'var(--portfolio-text-muted)', fontSize: '0.9rem' }}>{e.school}</div>
                </div>
                <div style={{ background: 'rgba(13,110,138,0.1)', color: 'var(--ifm-color-primary)', padding: '0.3rem 0.9rem', borderRadius: '999px', fontSize: '0.82rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
                  {e.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
