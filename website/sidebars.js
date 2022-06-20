module.exports = {
  docs: {
    Webaverse: [
      'index',
    ],
    Art: [
      'art/character-workflow',
      // 'art/style-guide',
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
              {
                type: 'doc',
                label: 'Quick Start Guide',
                id: 'engineering/app/scene/scene-file-quickstart'
              },
              "engineering/app/scene/lighting-shadows",
            ]
          },
          {
            type: 'category',
            label: 'Systems',
            items: [
              "engineering/app/systems/screenshot-system",
              "engineering/app/systems/vehicle-system",
            ]
          },
          "engineering/app/animation-baker",
          "engineering/app/totum",
          "engineering/app/avatar-system",
          "engineering/app/physx-workflow",
        ]
      },
      {
        type: 'category',
        label: 'Ethereum Backend',
        items: [
          {
            type: 'doc',
            label: 'Quick Start Guide',
            id: "engineering/api-backend/ethereum-backend-quickstart"
          },
        ]
      },
      {
        type: 'category',
        label: 'Blockchain',
        items: [
          "engineering/blockchain/nft-voucher-library",
          "engineering/blockchain/sidechain-metamask",
          "engineering/blockchain/smart-contracts-integration",

        ]
      },
      {
        type: 'category',
        label: 'Ethereum Bot',
        items: [
          {
            type: 'doc',
            label: 'Quick Start Guide',
            id: "engineering/bot/ethereum-bot-quickstart"
          },
        ]
      },
      {
        type: 'category',
        label: "Miscellaneous",
        items: [
          {
            type: 'doc',
            label: 'Unsorted',
            id: "engineering/miscellaneous/graves-notes-unsorted"
          },
        ]
      },
      {
        type: 'category',
        label: 'IPFS',
        items: [

          {
            type: 'doc',
            label: 'Quick Start Guide',
            id: "engineering/ipfs/ipfs-backend-quickstart"
          },
        ]
      },
      {
        type: 'category',
        label: 'Multiplayer',
        items: [
          {
            type: 'doc',
            label: 'Overview',
            id: "engineering/multiplayer/multiplayer-overview"
          },
          {
            type: 'doc',
            label: 'Call Stack Flow',
            id: "engineering/multiplayer/multiplayer-stack-flow"
          }
        ]
      },
      {
        type: 'category',
        label: 'Preview',
        items: [
          {
            type: 'doc',
            label: 'Quick Start Guide',
            id: "engineering/preview/preview-backend-quickstart"
          },
        ]
      },
      {
        type: 'category',
        label: 'Totum',
        items: [
          {
            type: 'category',
            label: 'Loaders',
            items: [
              "engineering/totum/loaders/js/js-file-import",
            ]
          },
        ]
      },
      {
        type: 'category',
        label: 'Worlds',
        items: [
          {
            type: 'doc',
            label: 'Quick Start Guide',
            id: "engineering/worlds/worlds-backend-quickstart"
          },

        ]
      },
      {
        type: 'category',
        label: 'WSRTC',
        items: [
          {
            type: 'doc',
            label: 'Quick Start Guide',
            id: "engineering/wsrtc/wsrtc-quickstart"
          },

        ]
      },
      {
        type: 'category',
        label: 'zjs',
        items: [
          {
            type: 'doc',
            label: 'Quick Start',
            id: "engineering/zjs/zjs-quickstart"
          }
        ]
      },
      "engineering/setup-custom-host",
      'engineering/quick-start-basics',
    ]
  }
};
