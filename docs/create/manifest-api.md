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
  "start_url": "index.js"
}
```
## `name`

_Defines the name of the package._

**Format**: a string 

## `description`

_Defines the description for the package._

**Format**: a string

## `start_url`

_Defines the entry point for the package._

**Format**: a string, the path to the asset (gltf, glb, vrm, vox) or the website (html, js)

## `physics_url`

_Defines the physics .bin file for the package._

**Format**: a string that is the filename of the physics .bin which can be generated for .glb models [here](https://app.webaverse.com/build.html).
