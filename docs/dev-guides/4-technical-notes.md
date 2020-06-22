---
id: technical-notes
title: Technical Notes
---

This page contains technical notes that might help in development of specific kinds of XRPKs.

## Avatars

Avatars are representations of a user in a world, which you can control and view in first-person mode to see their perspective. They can be anything from a sword to a person, packaged into an XRPackage.

On a deeper level, avatars are usually <a href="https://vrm.dev/en" target="_blank" rel="noopener noreferrer">VRM files</a> (a file for handling humanoid 3D avatar data for VR apps). VRMs are built on top of <a href="https://www.khronos.org/gltf/" target="_blank" rel="noopener noreferrer">glTF binary (GLB)</a> files.

You can find avatars at <a href="hub.vroid.com" target="_blank" rel="noopener noreferrer">https://hub.vroid.com/</a>, which is the largest open public hub of avatars.

The three.js implementation which is used in our avatars is <a href="https://github.com/pixiv/three-vrm" target="_blank" rel="noopener noreferrer">`three-vrm`</a>, which can be used to aid development of avatars if using three.js.
