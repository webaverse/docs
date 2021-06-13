---
id: guns
title: Guns
---

Guns are grabbable items that can be used to shoot projectiles to damage enemies and objects in the world.


## Metaverse File

The `.metaversefile` goes in the directory with the GLB file in order to create the XRpackage.

### Rifle

![](/img/rifle.jpg)


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

### Pistol

![](/img/pistol.jpg) 

```
{
  "name": "pistol",
  "description": "Pistol XRPackage",
  "xr_type": "webxr-site@0.0.1",
  "start_url": "pistol.glb",
  "components": [
    {
      "type": "use",
      "subtype": "gun",
      "useAnimation": "pistol"
    }
  ]
}
```