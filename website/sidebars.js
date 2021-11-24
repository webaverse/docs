module.exports = {
  docs: {
    Webaverse: [
      'index',
      'webaverse/lore',
    ],
    Art: [
      'art/character-workflow',
      'art/style-guide',
      'art/glb-export',
      'art/fbx-export',
    ],
    Engineering: [
      'engineering/application-startup',
      'engineering/blockchain-integration',
      'engineering/physx-workflow',
      'engineering/lighting-shadows',
      'engineering/js-file-import',
      'engineering/ethereum-backend',
      'engineering/ethereum-bot',
      'engineering/ipfs-backend',
      'engineering/preview-backend',
      'engineering/setup-custom-host',
      'engineering/app',
      'engineering/worlds-backend',
      'engineering/wrstc',
      'engineering/certificates',
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
          'engineering/avatar-system',
          'engineering/vehicle-system',
          'engineering/scene-file',
        ]
      },
      {
        type: 'category',
        label: 'React Modules',
        items: [
          'engineering/drag-n-drop',
          'engineering/smart-contracts',
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
