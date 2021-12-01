module.exports = {
  docs: {
    Webaverse: [
      'index',
    ],
    Art: [
      'art/character-workflow',
      'art/style-guide',
      'art/glb-export',
      'art/fbx-export',
    ],
    Engineering: [
      "engineering/webaverse-overview",
      'engineering/certificates',
      {
        type: 'category',
        label: 'App',
        items: [
          {
            type: 'doc',
            label: 'Quick Start Guide',
            id: 'engineering/app/app-quickstart'
          },
          {
            type: 'category',
            label: 'React',
            items: [
              {
                type: 'category',
                label: 'Components',
                items: [
                  "engineering/app/react/components/drag-n-drop",
                  ]
              },
              ]
          },
          {
            type: 'category',
            label: 'Scene',
            items: [
              "engineering/app/scene/lighting-shadows",
              "engineering/app/scene/scene-file-quickstart",
            ]
          },
          {
            type: 'category',
            label: 'Systems',
            items: [
              "engineering/app/screenshot-system",
              "engineering/app/systems/vehicle-system",
              ]
          },
          "engineering/app/animation-baker",
          "engineering/app/metaversefile",
          "engineering/app/avatar-system",
          "engineering/app/physx-workflow",
          ]
      },
      {
        type: 'category',
        label: 'API Backend',
        items: [
          "engineering/api-backend/ethereum-backend-quickstart",
          ]
      },
      {
        type: 'category',
        label: 'Blockchain',
        items: [
          "engineering/blockchain/smart-contracts-integration",

          ]
      },
      {
        type: 'category',
        label: 'Ethereum Bot',
        items: [
          "engineering/bot/ethereum-bot-quickstart"
          ]
      },
      {
        type: 'category',
        label: 'IPFS',
        items: [
          "engineering/ipfs/ipfs-backend-quickstart",
          ]
      },
      {
        type: 'category',
        label: 'MetaverseFile',
        items: [
          {
            type: 'category',
            label: 'Loaders',
            items: [
              "engineering/metaversefile/loaders/js/js-file-import",
              ]
          },
          ]
      },
      {
        type: 'category',
        label: 'Preview',
        items: [
          "engineering/preview/preview-backend-quickstart",
          ]
      },
      {
        type: 'category',
        label: 'WSRTC',
        items: [
          "engineering/wsrtc/wsrtc-quickstart",
          ]
      },
      {
        type: 'category',
        label: 'Worlds',
        items: [
          "engineering/worlds/worlds-backend-quickstart",
          ]
      },
      "engineering/setup-custom-host",
      // 'engineering/application-startup',
      // 'engineering/blockchain-integration',
      // 'engineering/physx-workflow',
      // 'engineering/lighting-shadows',
      // 'engineering/js-file-import',
      // 'engineering/ethereum-backend',
      // 'engineering/ethereum-bot',
      // 'engineering/ipfs-backend',
      // 'engineering/preview-backend',
      // 'engineering/setup-custom-host',
      // 'engineering/app',
      // 'engineering/worlds-backend',
      // 'engineering/wrstc',
      // {
      //   type: 'category',
      //   label: 'CLI',
      //   items: [
      //     'engineering/animation-baker',
      //   ]
      // },
      // {
      //   type: 'category',
      //   label: 'Components',
      //   items: [
      //     'engineering/metaverse-file',
      //     'engineering/screenshot-system',
      //     'engineering/avatar-system',
      //     'engineering/vehicle-system',
      //     'engineering/scene-file',
      //   ]
      // },
      // {
      //   type: 'category',
      //   label: 'React Modules',
      //   items: [
      //     'engineering/drag-n-drop',
      //     'engineering/smart-contracts',
      //   ]
      // },
      // {
      //   type: 'category',
      //   label: 'Services',
      //   items: [
      //     'engineering/preview-system-service',
      //   ]
      // }
    ]
  }
};
