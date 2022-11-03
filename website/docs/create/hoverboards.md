---
id: hoverboards
title: Hoverboards
---

Hoverboards are rideable NFTs you can use to speed around the map. Surf the internet in style! You can accelerate pretty fast on these baords, someday there may be ramps for you to jump from too.


<iframe width="720" height="400" src="https://www.youtube.com/embed/rNtFumWOBPk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

All you need is a glTF file to stand on, and a manifest.json in order to build the [XRPK](../developer/creating-an-xrpk). Below is an example manifest.json for the hoverboard.

```
{
  "name": "hoverboard",
  "description": "Hoverboard XRPackage",
  "xr_type": "webxr-site@0.0.1",
  "start_url": "hoverboard.glb",
  "components": [
    {
      "type": "sit",
      "subtype": "stand",
      "sitOffset": [0, 0.7, 0],
      "speed": 0.01,
      "damping": 0.99
    },
    {
      "type": "effect",
      "effects": [
        {
          "type": "fire",
          "position": [0, 0.45, -1],
          "quaternion": [-0.4999999999999999, -0.4999999999999999, -0.4999999999999999, 0.4999999999999999]
        }
      ]
    }
  ]
}
```


There's no drag and drop web UI for minting hoverboards yet so you'll have to build it yourself. The instructions for that are [here](../developer/creating-an-xrpk) if you're comfortable with command line. If not, there's a web UI here: https://app.webaverse.com/build.html.
