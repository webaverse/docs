---
id: manifest-api
title: Manifest API
---

This page details the API of the manifest, which allows you to provide further details about the XRPackage.

**Example `manifest.json`**:

```json
{
  "name": "physicscube",
  "description": "Physics Cube XRPackage",
  "xr_type": "webxr-site@0.0.1",
  "start_url": "index.js"
}
```
## `name`

_Defines the name of the package._

**Format**: a string 

## `description`

_Defines the description for the package._

**Format**: a string

## `xr_type`

_Defines the type of application and the spec version for the package._

**Format**: a string (`webxr-site@0.0.1` or `gltf@0.0.1` or `vrm@0.0.1` or `vox@0.0.1`)

## `start_url`

_Defines the entry point for the package._

**Format**: a string, the path to the asset (gltf, glb, vrm, vox) or the website (html, js)

## `physics_url`

_Defines the physics .bin file for the package._

**Format**: a string that is the filename of the physics .bin which can be generated for .glb models [here](https://app.webaverse.com/build.html).
