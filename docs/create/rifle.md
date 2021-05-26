---
id: rifle 
title: Rifles
---

Rifles are items that can be used to shoot projectiles to damage enemies and objects in the world.

![](/img/rifle.jpg)


## Metaverse File

The `.metaversefile` goes in the directory with the GLB file in order to create the XRpackage.

```
{
  "name": "rifle",
  "description": "Rifle XRPackage",
  "xr_type": "webxr-site@0.0.1",
  "start_url": "rifle.glb",
  "components": [
    {
      "type": "use",
      "subtype": "gun",
      "useAnimation": "rifle"
    }
  ]
}
```