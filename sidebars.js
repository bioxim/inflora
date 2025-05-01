// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'AIRDROP',
      items: [
        'airdrop',
      ],
    },
    {
      type: 'category',
      label: 'Overview',
      items: [
        'overview/what-is-inflora',
        'overview/problem-solutions',
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/how-to-play',
        'getting-started/supported-blockchains',
        'getting-started/network-fees',
        'getting-started/earning-model',
        'getting-started/user-progression',
      ],
    },
    {
      type: 'category',
      label: 'Tokenomics',
      items: [
        'tokenomics/token-utility',
        'tokenomics/emission-sustainability',
        'tokenomics/inflation-control',
        'tokenomics/rewards-system',
      ],
    },
    {
      type: 'category',
      label: 'Game Mechanics',
      items: [
        'game-mechanics/jobs-roles',
        'game-mechanics/marketplace',
        'game-mechanics/nft-assets',
        'game-mechanics/upgrades-levels',
      ],
    },
    {
      type: 'category',
      label: 'Roadmap',
      items: [
        'roadmap/development-phases',
      ],
    },
    {
      type: 'category',
      label: 'Governance',
      items: [
        'governance/dao-system',
        'governance/voting-mechanism',
        'governance/roles-responsabilities',
      ],
    },
    {
      type: 'category',
      label: 'Team & Community',
      items: [
        'team-community/founders',
        'team-community/community-involvement',
        'team-community/partnerships',
      ],
    },
    {
      type: 'category',
      label: 'FAQs',
      items: [
        'faqs/general-questions',
        'faqs/troubleshooting',
        'faqs/contact-support',
      ],
    },
  ],
};

export default sidebars;
