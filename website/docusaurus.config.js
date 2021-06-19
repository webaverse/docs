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
		  "href": "https://webaverse.com",
		  "label": "Dashboard"
		},
		{
		  "href": "https://blog.webaverse.com",
		  "label": "Blog"
		},
		{
		  "href": "https://github.com/webaverse",
		  "label": "Github"
		},
		{ "href": "https://discord.gg/R5wqYhvv53",
		  "label": "Discord"
		},
		{ "href": "https://www.notion.so/webaverse/Webaverse-is-Hiring-8fb49c069c2f450f93ebb911149f21bd",
		  "label": "Hiring"
		},
		{
		  "type": "search",
		  "position": "right"
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
