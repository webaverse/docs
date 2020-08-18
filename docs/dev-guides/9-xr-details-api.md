---
id: xr-details-api
title: xr_details API
---

An overview of XRPackages and the `manifest.json` file is provided in [the XRPackage Overview](./1-xrpackage-overview.md).

This page details the API of the `xr_details` field, which allows you to provide further details about how a package should be treated by a compatible runtime.

Each heading below corresponds to the _optional_ key in the `xr_details` object of your XRPackage `manifest.json`.

## `schema`

_Describes the configurable properties of the package, which can be interpreted by the package code as needed._

**Format**: an Object with any number of customizable keys, which can be accessed and used by the package code however it is needed. The value must currently be an Object that contains a `type` key equalling `string`.

The `iframe` will dispatch the `schemachange` event for each schema key-value pair on initialisation.

**Example**:

_manifest.json_

```json
{
  "xr_type": "webxr-site@0.0.1",
  "start_url": "cube.html",
  "xr_details": {
    "schema": {
      "color": { "type": "string" }
    }
  }
}
```

_your package code_

```js
const cubeMesh = getCubeMeshObject();
navigator.xr.addEventListener("schemachange", (e) => {
  const { key, value } = e.data;
  if (key === "color" && value) {
    console.log("update cube color", value, cubeMesh.material);
    cubeMesh.material.color.set(value);
  }
});
```

## `events`

## `aabb`

## `wearable`

## `physics`
