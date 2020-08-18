---
id: xr-details-api
title: xr_details API
---

An overview of XRPackages and the `manifest.json` file is provided in [the XRPackage Overview](./1-xrpackage-overview.md).

This page details the API of the `xr_details` field, which allows you to provide further details about how a package should be treated by a compatible runtime.

Each heading below corresponds to the _optional_ key in the `xr_details` object of your XRPackage `manifest.json`.

## `aabb`

_Defines the <a href="https://developer.mozilla.org/en-US/docs/Games/Techniques/3D_collision_detection" target="_blank" rel="noopener noreferrer">axis-aligned bounding box</a> for this package._

**Format**: a 2D array with the first inner array defining the minimum point, and second inner array defining the maximum point.

**Example**:

_manifest.json_

```json
{
  "xr_type": "webxr-site@0.0.1",
  "start_url": "cube.html",
  "xr_details": {
    "aabb": [
      [-1, -1, -1], // min point
      [1, 1, 1] // max point
    ]
  }
}
```

## `events`

_Describes events the package can receive from other packages._

**Format**: an Object with keys corresponding to the event names to be received, and values being an object that is `{"type": "string"}`. Currently, the `type` _must_ be `string`.

**Example**: in this example, we state that this package can receive the `reloof` event from other packages, with the payload type being a `string`.

_manifest.json_

```json
{
  "xr_type": "webxr-site@0.0.1",
  "start_url": "cube.html",
  "xr_details": {
    "events": {
      "dock": { "type": "string" }
    }
  }
}
```

_your package code_

```js
const listener = new THREE.AudioListener();
camera.add(listener);
const sound = new THREE.Audio(listener);
const audioLoader = new THREE.AudioLoader();

navigator.xr.addEventListener("event", (e) => {
  const { package, type, data, respond } = e.data;
  if (type === "dock") {
    console.log("docked");
    audioLoader.load("sounds/docked.ogg", function (buffer) {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.5);
      sound.play();
    });
  }
});
```

## `physics`

_Defines the physics mode for the package._

**Format**: a string (`static`, or `default`), or `null` (no physics &mdash; the default)

**Example**:

```json
{
  "xr_type": "webxr-site@0.0.1",
  "start_url": "cube.html",
  "xr_details": { "physics": "static" }
}
```

## `schema`

_Describes the configurable properties of the package, which can be interpreted by the package code as needed._

**Format**: an Object with any customizable keys and values, which can be accessed and used by the package code however it is needed. The value must currently be an Object that contains a `type` key equalling `string`.

The `iframe` will dispatch the `schemachange` event for each schema key-value pair on initialisation.

**Example**:

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

## `wearable`

_Defines how this package can be worn as an avatar._

**Format**: an Object with 3 keys: `head`, `hand`, `back` that are arrays defining the bone offset matrix (from the named bone) to the package.

**Example**:

```json
{
  "xr_type": "webxr-site@0.0.1",
  "start_url": "cube.html",
  "xr_details": {
    "wearable": {
      "head": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      "hand": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      "back": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    }
  }
}
```
