module.exports = {
  "guides": {
    "Webaverse": [
      "index",
      "webaverse/silk",
      "webaverse/items",
      "webaverse/avatars",
      "webaverse/worlds",
      "webaverse/parcels",
      "webaverse/whitepaper",
	  "webaverse/faq",
      {
        "type": "category",
        "label": "Bots",
        "items": [
          "webaverse/discord-bot",
	      "webaverse/twitter-bot"
        ]
      }
    ],
    "Market": [
      "market/silk-guide",
      "market/nfts-guide",
      "market/matic-guide"
    ],
    "Create": [
      "create/overview",
      "create/mint",
      "create/mint-discord",
	  "create/mint-html",
	  "create/scenes",
      {
        "type": "category",
        "label": "Season 0: Genesis",
        "items": [
          "create/guidelines"
        ]
      },
      {
        "type": "category",
        "label": "3D Models",
        "items": [
          "create/import-blender",
          "create/bake-physics",
          "create/multiple-animations",
          "create/import-magicavoxel"
        ]
      },
      {
        "type": "category",
        "label": "Avatars",
        "items": [
          "create/import-vroid",
	      "create/import-meebit",
	      "create/wearables"
        ]
      },
      {
        "type": "category",
        "label": "Weapons",
        "items": [
          "create/sword",
          "create/pickaxe",
	      "create/guns"
        ]
      },	  
	  {
        "type": "category",
        "label": "Pets and Vehicles",
        "items": [
          "create/pets",
	      "create/mounts",
	      "create/hoverboards"
        ]
      },
	  ],
    "Developer": [
	   "developer/architecture",
	  {
        "type": "category",
        "label": "XRPackage",
        "items": [
          "developer/xrpackage-overview",
          "developer/creating-an-xrpk",
          "developer/xrpackage-design-guidelines",
          "developer/monetization",
          "developer/examples"
        ]
      },
      {
        "type": "category",
        "label": "API",
        "items": [
          "developer/runtime-api",
          "developer/manifest-api",
          "developer/monetization-api"
        ]
      }
	]
  }
};
