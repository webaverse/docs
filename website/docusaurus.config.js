module.exports={
  "title": "Webaverse",
  "tagline": "Webaverse",
  "url": "https://docs.webaverse.com",
  "baseUrl": "/",
  "organizationName": "webaverse",
  "projectName": "docs",
  "favicon": "img/webaverse-white.ico",
  "customFields": {},
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": false,
          "showLastUpdateTime": false,
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
        "src": "img/webaverse-lg.png",
		"href": "https://docs.webaverse.com/",
		"target": "_self"
      },
      "items": [
		{
		  "type": "search",
		  "position": "right"
		}
      ]
    },
    "footer": {
       links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/HxdjCDyq58',
            },
            {
              label: 'Github',
              // A full-page navigation, used for navigating outside of the website.
              href: 'https://github.com/webaverse',
            },
		  ],
	    },
        {
          title: 'Social',
          items: [

            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UC1OkR65VUqZRM9qQPU4nZPQ',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/webaverse',
            },
		  ],
	    },
      ],
	   "copyright": "© 2021 Webaverse",
	   "logo": {}
    },
  },
}
