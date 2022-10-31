---
id: runtime-api
title: Runtime API
---

The Runtime API exposes everything you could possibly want to access within the Webaverse runtime. This includes access to crypto minting, the world scene, camera, physics, and more.

You can call these directly within your app without any extra requirements on your end. This is because the Runtime API is exposed to your code at runtime.

## `renderer`
This provides a THREE.js renderer at runtime that can be used to `setAnimationLoop` on.

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

This is a map of relative file URL -> file load URL you can `fetch`.

No matter how you are loading the package, whether it is an XRPK or a URL or an NFT, this map should let you access all of the app's files.

**Note:** Files in this map are prefixed with `./`

-------------------

### `unload`

This is an event that gets emitted when the app instance is deleted. You should clean up anything you app is doing here, such as removing physics, objects, timers, etc.

**Note:** The `app.object` will be automatically removed from the scene so there is no need to clean up that.

-------------------

### `onBeforeRender()`

This is a function to run alongside anything you want to run before rendering.

**Note:** If you do mirror rendering, it should occur between `onBeforeRender` and `onAfterRender` to ensure proper recursion.

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

### `object`

`app.object` is a THREE.js  object where you should attach your app (using `app.object.add`, see below), this should be used instead of a `scene.`

### `addObject`

#### Parameters

| Name| Type |
| --- | ---- | 
| `contentId` | number *or* URL |
| `parentId` | number |
| `position` | THREE.Vector3 |
| `quaternion` | THREE.Quaternion |
| `options` | object |
