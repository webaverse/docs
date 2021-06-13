// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.
const siteConfig = {
  title: 'Webaverse',
  tagline: 'Webaverse',
  url: 'https://docs.webaverse.com',
  baseUrl: '/',

  projectName: 'docs',
  organizationName: 'webaverse',
  cname: 'docs.webaverse.com',

  headerLinks: [
    { doc: 'index', label: 'Docs' },
  ],

  headerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

  colors: {
    primaryColor: '#111',
    secondaryColor: '#940259',
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `© ${new Date().getFullYear()} Webaverse`,

  // Defaults to separate but needs to be present in order for nav to appear
  onPageNav: 'separate',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  enableUpdateTime: true,
  cleanUrl: true,

  docsSideNavCollapsible: false,
};

module.exports = siteConfig;
