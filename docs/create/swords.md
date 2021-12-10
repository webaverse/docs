---
id: swords
title: Swords
---

Swords are currently one-handed weilded items that you can use to damage objects and NPCs in the world.


## Metaverse File

The `.metaversefile` goes in the directory with the GLB file in order to create the XRpackage.

This configuration is for wearing it on your avatar's back.

![](/img/sword.jpg)


```
{
  "name": "buster-sword",
  "description": "Buster Sword XRPackage",
  "xr_type": "webxr-site@0.0.1",
  "start_url": "buster-sword.glb",
  "components": [
    {
      "type": "wear",
      "position": [0, 0, 0]
    }
  ]
}
```

Here's the configuration for holding a sword and being able to slash attack.

![](/img/sword2.jpg)

```
{
  "name": "lightsaber",
  "description": "Lightsaber XRPackage",
  "xr_type": "webxr-site@0.0.1",
  "start_url": "index.js",
  "components": [
    {
      "type": "use",
      "subtype": "swing",
      "useAnimation": "slash"
    }
  ]
}
```