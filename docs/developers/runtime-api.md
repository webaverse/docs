---
id: runtime-api
title: Runtime API
---

The Runtime API exposes everything you could possibly want to access within Webaverse. This includes access to crypto minting, world physics, ui building, and more.

You can call these directly within your app without any extra requirements on your end. This is because the Runtime API is injected to your code at runtime.

## `renderer`
This provides a THREE.js renderer at runtime that can be used to `setAnimationLoop` on.

## `scene`
This provides a THREE.js scene at runtime.

## `camera`
This provides a THREE.js camera at runtime.

## `crypto`

### `mintToken`

#### Parameters

| Name| Type | Description |
| --- | ---- | ----------- |
| `file` | blob | The data of the file to be tokenized |
| `options` | object | You can define the `description` of the token here |

#### Returns
| Name| Type | Description |
| --- | ---- | ----------- |
| `tokenId` | number | The id of the newly minted token |

-------------------

## `physics`

### `addGeometry`

#### Parameters

| Name| Type |
| --- | ---- | 
| `mesh` | mesh |

-------------------

### `removeGeometry`

#### Parameters

| Name| Type |
| --- | ---- | 
| `physicsId` | number |

-------------------

### `getRigTransforms`

#### Returns
```js
[
  {
    position: this.localRig.inputs.leftGamepad.position,
    quaternion: this.localRig.inputs.leftGamepad.quaternion,
  },
  {
    position: this.localRig.inputs.rightGamepad.position,
    quaternion: this.localRig.inputs.rightGamepad.quaternion,
  },
];
```

-------------------


## `app`

### `object.add`

#### Parameters

| Name| Type |
| --- | ---- | 
| `mesh` | mesh |

-------------------

### `files[]`

This is an array of files to load from relative paths.

-------------------

### `unload`

This is an event that gets emitted when the app instance is deleted.

-------------------

### `onBeforeRender()`

This is a function to run alongside anything you want to run before rendering.

-------------------

### `onAfterRender()`

This is a function to run alongisde anyhting you want to run after rendering.

-------------------

## `runtime`

### `loadFile`

#### Parameters

| Name| Type |
| --- | ---- | 
| `file` | file |
| `opts` | object |

## `world`

### `addObject`

#### Parameters

| Name| Type |
| --- | ---- | 
| `contentId` | number |
| `parentId` | number |
| `position` | THREE.Vector3 |
| `quaternion` | THREE.Quaternion |
| `options` | object |
