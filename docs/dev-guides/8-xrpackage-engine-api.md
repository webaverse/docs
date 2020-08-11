---
id: xrpackage-engine-api
title: XRPackageEngine API
---

The `XRPackageEngine` API is documented here. See install instructions and development setup <a href="https://github.com/webaverse/xrpackage" target="_blank" rel="noopener noreferrer">at the GitHub repository</a>.

The `XRPackage` API is documented [in the previous section](./7-xrpackage-api.md).

**Note: This page is still in development, whilst the API is documented**.

## `constructor(options)`

**Parameters**: `options` is an optional Object, where all the following keys are also optional:

| Key                | Default                   | Description                                       |
| ------------------ | ------------------------- | ------------------------------------------------- |
| `width`            | `window.innerWidth`       | The width of the renderer                         |
| `height`           | `window.innerHeight`      | The height of the renderer                        |
| `devicePixelRatio` | `window.devicePixelRatio` | The pixel ratio of the renderer                   |
| `autoStart`        | `true`                    | Whether to auto start the XR Session              |
| `autoListen`       | `true`                    | Whether to automatically listen to window resizes |

**Returns**: an `XRPackageEngine` instance.

## `async add(p, reason)`

_Adds an `XRPackage` to the engine, and blocks until it is loaded._

**Parameters**:

- `p`: the `XRPackage` object to add
- `reason`: an optional string describing the reason for adding the package

**Returns**: a `Promise` that resolves when the package is fully loaded.

## `defaultAvatar()`

_Sets the avatar of this XRPackageEngine to the default avatar, with fingers and hair, in debug mode._

**Parameters**: None

**Returns**: Nothing

## `dispatchXrEvent`

## `async downloadScene(hash)`

_Downloads & imports an arbitrary scene from IPFS into the Engine._

**Parameters**: `hash` is the IPFS hash of the scene to be downloaded

**Returns**: a `Promise` that resolves when the scene is downloaded and imported successfully, or rejects when there is a non-200 response when downloading or the downloaded scene is invalid.

## `draw`

## `equip`

## `async exportScene()`

**Parameters**: None

**Returns**: a `Promise` that resolves with a `Uint8Array` representing the `.wbn` bundle for the current scene.

## `getContext`

## `getEnv`

## `getProxySession`

## `getUserMedia`

## `grabdown`

## `grabtriggerdown`

## `grabup`

## `grabuse`

## `async importScene(uint8Array)`

_Imports a scene into the current `XRPackageEngine`._

**Parameters**: `uint8Array` is a `Uint8Array` representing an XRPackage `.wbn` file

**Returns**: a `Promise` that resolves when the package is loaded and added to this `XRPackageEngine` instance, and rejects if the `XRPackage` to be added is not an `xrpackage-scene@0.0.1`.

## `listen`

## `packageCancelAnimationFrame`

## `packageRequestAnimationFrame`

## `packageRequestPresent`

## `remove(p, reason)`

_Removes an XRPackage from the Engine._

**Parameters**:

- `p` is the `XRPackage` to remove
- `reason` is an optional string describing why the package is being removed

**Returns**: Nothing

**Throws** an `Error` if the given `p` is not a child of this `XRPackageEngine` instance.

## `render`

## `reset()`

_Removes all the children of the XRPackageEngine instance._

**Parameters**: None

**Returns**: Nothing

## `resize(width, height, devicePixelRatio)`

_Resizes this XRPackageEngine instance._

**Parameters**: all parameters are optional, with defaults as follows:

| Key                | Default                         | Description                         |
| ------------------ | ------------------------------- | ----------------------------------- |
| `width`            | `this.options.width`            | The new width of the renderer       |
| `height`           | `this.options.height`           | The new height of the renderer      |
| `devicePixelRatio` | `this.options.devicePixelRatio` | The new pixel ratio of the renderer |

**Returns**: Nothing |

## `setCamera(camera)`

**Parameters**: `camera` is the camera to set for the Engine (e.g. a `Three.PerspectiveCamera`)

**Returns**: Nothing

## `setClearFreeFramebuffer`

## `setEnv`

## `setGamepadsConnected(connected)`

**Parameters**: `connected` is a `Boolean` representing whether the gamepads are now connected.

**Returns**: Nothing

## `setMatrix`

## `setMicrophoneMediaStream`

## `setRigMatrix`

## `setScale(scale)`

**Parameters**: `scale` is the numeric scale to set for the Engine.

**Returns**: Nothing

## `setSession`

## `setXrFramebuffer`

## `start`

## `tick`

## `updateMatrixWorld`

## `start`

## `tick`

## `updateMatrixWorld`

## `async uploadScene()`

_Uploads the current scene to the Webaverse IPFS backend._

**Parameters**: None

**Returns**: a `Promise` that resolves with a string which is the IPFS hash of the uploaded scene.

**Throws**: an `Error` if there is an error uploading the scene (i.e. if the network request does not return a 200 status).

## `waitForLoad()`

**Parameters**: None

**Returns**: a Promise that resolves when the `XRPackageInstance` is initialised and the service worker has been registered successfully.

## `wearAvatar`

Wear the specified package as an avatar.

**Parameters**: `p`, an `XRPackage` object.

**Returns**: None
