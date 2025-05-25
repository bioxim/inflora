import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'InFlora',
  tagline: 'Gaming Style',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://inflora.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bioxim', // Usually your GitHub org/user name.
  projectName: 'inflora-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-DN565CE4KC',
        anonymizeIP: true,
      },
    ],
  ],


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
      // Replace with your project's social card
      image: 'img/token_logo.png',
      navbar: {
        title: 'InFlora',
        logo: {
          alt: 'InFlora Logo',
          src: 'img/logo-transp.png',
        },
        items: [
          {href: '/#how-to-play', label: 'How to Play', position: 'left'},
          {to: '/#economy', label: 'Economy', position: 'left'},
          {to: '/swap', label: 'Swap', position: 'left'},
          {to: '/#roadmap', label: 'Roadmap', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://airdrop.inflora.cloud/',
            label: 'FOUNDATIONAL AIRDROP',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started/how-to-play',
              },
              {
                label: 'Tokenomics',
                to: '/docs/tokenomics/token-utility',
              },
              {
                label: 'Game Mechanics',
                to: '/docs/game-mechanics/jobs-roles',
              },
              {
                label: 'Governance',
                to: '/docs/governance/dao-system',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/InFloraGame',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/QHCf5tFXad',
              },
              {
                label: 'X',
                href: 'https://x.com/InfloraGame',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Wiki-Sheets',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/bioxim',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} InFlora, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
