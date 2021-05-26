---
id: vehicles
title: Vehicles
---




```
{
  "name": "hovercraft",
  "description": "Hovercraft XRPackage",
  "xr_type": "webxr-site@0.0.1",
  "start_url": "hovercraft.glb",
  "components": [
    {
      "type": "sit",
      "subtype": "saddle",
      "sitOffset": [0, 0.6, 0],
      "walkAnimation": ["wing_2_low|Take 001|BaseLayer", "wing_2_low001|Take 001|BaseLayer", "Object001|Take 001|BaseLayer", "Object002|Take 001|BaseLayer", "Object003|Take 001|BaseLayer", "Object004|Take 001|BaseLayer"],
      "walkAnimationHoldTime": 1,
      "walkAnimationSpeedFactor": 0.1,
      "speed": 0.02,
      "damping": 0.99
    },
    {
      "type": "effect",
      "effects": [
        {
          "type": "fire",
          "position": [-0.8, 0.5, 0.1],
          "quaternion": [-0.4999999999999999, -0.4999999999999999, -0.4999999999999999, 0.4999999999999999]
        },
        {
          "type": "fire",
          "position": [0.8, 0.5, 0.1],
          "quaternion": [-0.4999999999999999, -0.4999999999999999, -0.4999999999999999, 0.4999999999999999]
        }
      ]
    }
  ]
}
```