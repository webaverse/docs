// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.
const siteConfig = {
  title: 'Webaverse Documentation',
  tagline: 'Webaverse Documentation',
  url: 'https://docs.webaverse.com',
  baseUrl: '/',

  projectName: 'docs',
  organizationName: 'webaverse',
  cname: 'docs.webaverse.com',

  headerLinks: [
    { doc: 'about', label: 'What Is Webaverse?' },
    { doc: 'getting-started', label: 'Getting Started' },
    { doc: 'other-projects', label: 'Other Projects' },
    { doc: 'glossary', label: 'Glossary' },
  ],

  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

  colors: {
    primaryColor: '#111',
    secondaryColor: '#ff7043',
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Webaverse`,

  // Defaults to separate but needs to be present in order for nav to appear
  onPageNav: 'separate',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  enableUpdateTime: true,
  cleanUrl: true,
};

module.exports = siteConfig;
