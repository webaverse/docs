---
id: mounts
title: Mounts and Vehicles
---

Mounts and vehicles are rigged glTF files that now have a place for your avatar to sit on and commandeer the object.

<iframe width="100%" height="400" src="https://www.youtube.com/embed/U_qhkB55gw0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Blender

The place where you avatar sits on is specified in the model as the `sitBone`:

```
{
  "name": "dragon-mount",
  "description": "Dragon Mount XRPackage",
  "xr_type": "webxr-site@0.0.1",
  "start_url": "dragon.glb",
  "components": [
    {
      "type": "sit",
      "subtype": "saddle",
      "sitBone": "Spine",
      "walkAnimation": "Armature|Armature|Hopping|Armature|Hopping"
    }
  ]
}
```

Locate the bone you want your avatar to sit on by selecting the armature in Blender, going into pose mode, then selecting the bone and checking the hierarchy for the name. Keep note of this bone name for now (in this case it is `Spine`) and the walk animation name.

![Select the sitting bone](/img/mountbone.jpg)

**Minting**

> Note: Minting vehicles and mounts is currently disabled right now

Afterwords export the model as a .glb and drag it into https://webaverse.com/mint.

The system will ask for the sit bone name for the mount and then the walk animation name. Input the names for both and preview to see if you're able to ride around your NFT mount before minting. Have fun!