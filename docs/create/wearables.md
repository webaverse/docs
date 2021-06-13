---
id: wearables
title: Mint Avatar Wearables
---

> Note: minting wearables is currently disabled right now

In this guide you'll learn how to design and mint custom avatar wearables. All you need is a 3D model that you want for the type of wearable (hat, glasses, sword, etc) you want to make in glTF binary (.glb) file format. 

For presentation purposes only, we'll use this [Cat in hat](https://sketchfab.com/3d-models/cat-in-hat-a5301f9e3045462f8b023c20b7a1b2f2) by [patrakeevasveta](https://sketchfab.com/patrakeevasveta) to demonstrate.

![Cat in hat](/img/cathat.jpg)

The Web UI for minting wearables isn't ready at the moment so you'll need to manually build the [XRPK](https://docs.webaverse.com/docs/create/creating-an-xrpk). This involves making a zip file containing the .glb file and a manifest.json. In this example the manifest.json contains:

```
{
  "name": "cat-in-hat",
  "description": "Cat in Hat XRPackage",
  "xr_type": "webxr-site@0.0.1",
  "start_url": "cat-in-hat.glb",
  "components": [
    {
      "type": "wear",
      "bone": "Head",
      "position": [0, 0, 0],
      "scale": [0.1, 0.1, 0.1]
    }
  ]
}

```

