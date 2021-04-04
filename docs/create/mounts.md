---
id: mounts 
title: How To Mint Mounts 
---

## Blender

Mounts are similar to pets in that they're based on animated glTF files but now have a place for your avatar to sit on and control the pet like a vehicle. This is specified in the model as the `sitBone`:

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

Afterwords export the model as a .glb and drag it into https://webaverse.com/mounts.

The system will ask for the sit bone name for the mount and then the walk animation name. Input the names for both and preview to see if you're able to ride around your NFT mount before minting. Have fun!