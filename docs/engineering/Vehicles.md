---
id: vehicle-system
title: Vehicle System
---
# Vehicle System

Adding a vehicle to our scene is really easy. All you have to do is put a description in .scn file.

```js
{
    "position": [
        -26,
        0,
        -2
    ],
    "quaternion": [
        0,
        0.707,
        0,
        0.707
    ],
    "start_url": "https://webaverse.github.io/hovercraft/",
    "dynamic": true
}
```

The Hovercraft is implemented in separate project here: [Hovercraft Repo] (https://github.com/webaverse/hovercraft)  

The player can take control of the vehicle by holding down `E` when near it.

This time .metaversefile has many options:

```js
{   
    "name": "hovercraft",
    "start_url": "hovercraft.glb",
    "components": [
        {
            "key": "sit",
            "value": {
                "subtype": "saddle",
                "sitOffset": [0,0.6,0],
                "walkAnimation": ["wing_2_low|Take 001|BaseLayer", "wing_2_low001|Take 001|BaseLayer", "object001|Take 001|BaseLayer"],
                "walkAnimationHoldTime": 1,
                "walkAnimationSpeedFactor": 0.1,
                "speed": 0.02,
                "damping": 0.99
            }
        },
        {
            "key": "effect2",
            "value": {
                "effects": [
                    {
                        "type": "fire",
                        "position": [-0.8,0.5,0.1],
                        "quaternion": [0,0,0,0]
                    },
                    {
                        "type": "fire",
                        "position": [0.8,0.5,0.1],
                        "quaternion": [0,0,0,0]
                    }
                ]
            }
        }
    ]
}
```


Entry point is “index.js” as usual.
