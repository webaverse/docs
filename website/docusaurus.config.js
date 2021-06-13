module.exports={
  "title": "Webaverse",
  "tagline": "Webaverse",
  "url": "https://docs.webaverse.com",
  "baseUrl": "/",
  "organizationName": "webaverse",
  "projectName": "docs",
  "favicon": "img/favicon.ico",
  "customFields": {},
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "../docs",
          "sidebarPath": require.resolve('./sidebars.js')
        },
        "blog": {},
        "theme": {
          "customCss": [require.resolve('./src/css/customTheme.css')]
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "title": "Webaverse",
      "logo": {
        "src": "img/favicon.ico"
      },
      "items": [
        {
          "to": "docs/",
          "label": "Docs",
          "position": "left"
        }
      ]
    },
    "footer": {
      "links": [],
      "copyright": "© 2021 Webaverse",
      "logo": {}
    }
  }
}
