module.exports = {
  docs: {
    Webaverse: [
      'index',
      'webaverse/lore',
      'webaverse/silk',
      'webaverse/items',
      'webaverse/avatars',
      'webaverse/worlds',
      'webaverse/parcels',
      'webaverse/whitepaper',
	  'webaverse/faq',
      {
        type: 'category',
        label: 'Bots',
        items: [
          'webaverse/discord-bot',
	      'webaverse/twitter-bot'
        ]
      }
    ],
    Art: [
      'art/character-workflow',
      'art/style-guide',
    ],
    Engineering: [
      'engineering/application-startup',
      'engineering/blockchain-integration',
      {
        type: 'category',
        label: 'CLI',
        items: [
          'engineering/animation-baker',
        ]
      },
      {
        type: 'category',
        label: 'Components',
        items: [
          'engineering/metaverse-file',
          'engineering/screenshot-system',
        ]
      },
      {
        type: 'category',
        label: 'React Modules',
        items: [
          'engineering/drag-n-drop',
        ]
      },
      {
        type: 'category',
        label: 'Services',
        items: [
          'engineering/preview-system-service',
        ]
      }
    ]
  }
};
