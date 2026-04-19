# Janeera D A — Portfolio Site

> Built with [Docusaurus 3](https://docusaurus.io/) · Deployed on GitHub Pages

A professional portfolio and documentation showcase for Janeera D A, Senior Technical Author.

---

## 🚀 Quick Start (Local Development)

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### 1. Clone the repository

```bash
git clone https://github.com/janeerada/janeera-portfolio.git
cd janeera-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start local dev server

```bash
npm start
```

The site opens at **http://localhost:3000/janeera-portfolio/**

---

## 📁 Project Structure

```
janeera-portfolio/
├── blog/                        # Blog posts (Markdown)
│   ├── 2025-09-01-docs-as-code.md
│   └── 2025-11-15-diataxis-framework.md
├── docs/                        # Docs section (optional)
│   └── intro.md
├── src/
│   ├── css/
│   │   └── custom.css           # Theme & custom styles
│   └── pages/                   # React page components
│       ├── index.js             # Homepage
│       ├── about.js             # About page
│       ├── experience.js        # Career timeline
│       ├── skills.js            # Skills & tools
│       ├── achievements.js      # Awards & LinkedIn
│       └── resume.js            # Resume overview
├── static/
│   └── img/
│       └── logo.svg             # Site logo
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions auto-deploy
├── docusaurus.config.js         # Main site configuration
├── sidebars.js                  # Docs sidebar config
└── package.json
```

---

## ✏️ How to Edit Content

### Update your personal info / links

Open **`docusaurus.config.js`** and update:

```js
url: 'https://YOUR_GITHUB_USERNAME.github.io',
organizationName: 'YOUR_GITHUB_USERNAME',
projectName: 'janeera-portfolio',
```

Also update the navbar social links:
```js
{ href: 'https://www.linkedin.com/in/YOUR_PROFILE', label: 'LinkedIn' }
```

### Edit a page

Each page is a React component in `src/pages/`. They're straightforward to edit — just update the text, arrays, or objects at the top of each file.

| File | What it controls |
|------|-----------------|
| `src/pages/index.js` | Homepage hero, stats, highlights |
| `src/pages/about.js` | Bio, quick facts, philosophy |
| `src/pages/experience.js` | Career timeline, education |
| `src/pages/skills.js` | Skills grid, proficiency bars |
| `src/pages/achievements.js` | Awards, research stats, LinkedIn CTA |
| `src/pages/resume.js` | Resume landing page |

### Add a blog post

Create a new file in `blog/` following the naming convention:

```
blog/YYYY-MM-DD-your-post-title.md
```

Add frontmatter at the top:

```md
---
slug: your-post-slug
title: Your Post Title
authors:
  - name: Janeera D A
    title: Senior Lead Technical Document Writer
    url: https://www.linkedin.com/in/janeera
tags: [docs-as-code, documentation]
date: 2026-01-15
---

Your intro paragraph here.

<!-- truncate -->

Rest of the post...
```

### Update the colour theme

Open `src/css/custom.css`. The primary colour is set via CSS variables:

```css
:root {
  --ifm-color-primary: #0d6e8a;   /* Main teal */
  --portfolio-gold: #c9952a;       /* Accent gold (awards, dividers) */
}
```

Change these to match your personal brand.

---

## 🌐 Deploy to GitHub Pages

### One-time setup

1. **Create a GitHub repository** named `janeera-portfolio` (or anything you prefer)

2. **Update `docusaurus.config.js`**:
   ```js
   url: 'https://YOUR_USERNAME.github.io',
   baseUrl: '/janeera-portfolio/',
   organizationName: 'YOUR_USERNAME',
   projectName: 'janeera-portfolio',
   ```

3. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/janeera-portfolio.git
   git push -u origin main
   ```

4. **Enable GitHub Pages** in your repo:
   - Go to **Settings → Pages**
   - Set Source to **Deploy from a branch**
   - Select branch: **gh-pages**, folder: **/ (root)**
   - Save

### Auto-deploy (already configured)

The `.github/workflows/deploy.yml` workflow automatically builds and deploys your site **every time you push to `main`**. No manual steps needed after the one-time setup.

Your site will be live at:
```
https://YOUR_USERNAME.github.io/janeera-portfolio/
```

---

## 🔧 Useful Commands

| Command | What it does |
|---------|-------------|
| `npm start` | Start local dev server (with hot reload) |
| `npm run build` | Build the production site to `build/` |
| `npm run serve` | Serve the built site locally |
| `npm run clear` | Clear Docusaurus cache |

---

## 📝 Adding Your LinkedIn Achievements

The **Achievements** page (`src/pages/achievements.js`) has a LinkedIn section ready for your highlights. To add specific posts or recommendations:

1. Screenshot notable LinkedIn posts or save them as images
2. Place images in `static/img/`
3. Edit `achievements.js` to add an image gallery or embed card section

You can also embed a LinkedIn "share" badge by adding a LinkedIn badge script to the page.

---

## 💡 Customisation Tips

- **Add a profile photo**: Place `profile.jpg` in `static/img/` and reference it in `about.js`
- **Add a PDF resume**: Place `resume.pdf` in `static/` and link it directly from `resume.js`
- **Google Analytics**: Add your GA4 measurement ID in `docusaurus.config.js` under `gtag`
- **Custom domain**: Add a `CNAME` file in `static/` with your domain name

---

## 🤝 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Docusaurus 3 |
| Language | JavaScript (React) |
| Styling | Custom CSS with CSS variables |
| Content | Markdown + MDX |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |

---

*Built and maintained by Janeera D A · [janeerada@gmail.com](mailto:janeerada@gmail.com)*
