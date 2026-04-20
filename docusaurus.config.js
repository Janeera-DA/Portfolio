// @ts-check
const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Janeera D A',
  tagline: 'Senior Technical Author · Documentation Lead · Docs-as-Code Specialist',
  favicon: 'img/favicon.ico',

  url: 'https://janeera-da.github.io',
  baseUrl: '/Portfolio/',

  organizationName: 'janeera-da',
  projectName: 'Portfolio',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Writing & Insights',
          blogDescription: 'Thoughts on technical writing, docs-as-code, and documentation strategy.',
          postsPerPage: 5,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/og-card.png',
      navbar: {
        title: 'Janeera D A',
        logo: {
          alt: 'Janeera Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/about', label: 'About', position: 'left' },
          { to: '/experience', label: 'Experience', position: 'left' },
          { to: '/skills', label: 'Skills', position: 'left' },
          { to: '/achievements', label: 'Achievements', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://www.linkedin.com/in/janeera',
            label: 'LinkedIn',
            position: 'right',
          },
          {
            href: 'mailto:janeerada@gmail.com',
            label: 'Contact',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Pages',
            items: [
              { label: 'About', to: '/about' },
              { label: 'Experience', to: '/experience' },
              { label: 'Skills', to: '/skills' },
              { label: 'Achievements', to: '/achievements' },
            ],
          },
          {
            title: 'Connect',
            items: [
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/janeera' },
              { label: 'Email', href: 'mailto:janeerada@gmail.com' },
              { label: 'GitHub', href: 'https://github.com/janeerada' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Blog', to: '/blog' },
              { label: 'Resume', to: '/resume' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Janeera D A · Senior Technical Author`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
