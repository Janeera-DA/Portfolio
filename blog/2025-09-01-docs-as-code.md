---
slug: why-docs-as-code-changed-how-i-work
title: Why Docs-as-Code Changed How I Work
authors:
  - name: Janeera D A
    title: Senior Lead Technical Document Writer
    url: https://www.linkedin.com/in/janeera
tags: [docs-as-code, git, documentation, workflow]
date: 2025-09-01
---

When I first started using Git for documentation, I'll be honest — it felt like overkill. Why would a technical writer need branches, pull requests, and merge conflicts? That was a developer problem.

Three years later, I can't imagine working any other way.

<!-- truncate -->

## The shift that changed everything

The turning point came when I joined a team that already had a docs-as-code pipeline set up. Every documentation change went through a pull request. Engineers reviewed docs the same way they reviewed code. And instead of emailing updated PDFs or uploading files to a shared drive, content was deployed automatically when a PR merged.

The impact was immediate:

- **Collaboration improved** — engineers could catch inaccuracies before they went live
- **History was clear** — every change was traceable, every decision had a reason
- **Reviews became meaningful** — comments were inline, contextual, and resolved

## What docs-as-code actually means in practice

For me, docs-as-code means:

1. Writing in **Markdown** — plain text that's portable, version-controllable, and easy to review
2. Using **Git** for branching, committing, and reviewing changes
3. Building with **Docusaurus** or similar static site generators
4. Deploying via **CI/CD** (GitHub Actions is my go-to)

The toolchain feels technical, but the benefits are entirely human: better communication, faster iteration, and documentation that stays in sync with the product.

## The Diátaxis layer on top

Docs-as-code gives you the *infrastructure*. Diátaxis gives you the *architecture*. Since I started applying the framework — separating tutorials, how-to guides, explanations, and references — I've seen search drop-off rates decrease significantly.

Users find what they need faster. Support tickets for "how do I…" questions go down. And writers have a clear framework for deciding *what kind of document* to write before they write it.

## Where to start

If you're a technical writer curious about docs-as-code, you don't need to overhaul everything overnight. Start here:

1. **Pick up Markdown** — it's a 30-minute investment
2. **Learn basic Git** — commit, branch, pull request is enough
3. **Try Docusaurus locally** — scaffold a site and play with it
4. **Pitch a small pilot** — one doc set, one repo, one PR workflow

The tooling is the easy part. The real value is the mindset shift: documentation is a software artifact, and it deserves the same rigor as code.

---

*Have questions about docs-as-code workflows? Connect with me on [LinkedIn](https://www.linkedin.com/in/janeera).*
