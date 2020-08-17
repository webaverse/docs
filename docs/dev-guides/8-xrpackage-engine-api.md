---
id: xrpackage-engine-api
title: XRPackageEngine API
---

The `XRPackageEngine` API is documented here. See install instructions and development setup <a href="https://github.com/webaverse/xrpackage" target="_blank" rel="noopener noreferrer">at the GitHub repository</a>.

- The `XRPackage` API is documented [in the previous section](./7-xrpackage-api.md).
- The `XRPackageManager` API is documented [in the next section](./9-xrpackage-manager-api.md).

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

## `dispatchXrEvent(p, type, data, onresponse)`

_Sends an XR event message to all the children in this `XRPackageEngine` instance._

**Parameters**:

- `p` is an `XRPackage` that is sending the event
- `type` is the type of message
- `data` is the data to send
- `onresponse` is a function that is called with the parameter `response` when the event is handled

**Returns**: Nothing

## `async downloadScene(hash)`

_Downloads & imports an arbitrary scene from IPFS into the Engine._

**Parameters**: `hash` is the IPFS hash of the scene to be downloaded

**Returns**: a `Promise` that resolves when the scene is downloaded and imported successfully, or rejects when there is a non-200 response when downloading or the downloaded scene is invalid.

## `draw`

## `equip(slot)`

_Equips the relevant object (note: the engine must have an avatar/rig set)._

**Parameters**: The `slot` to store the object in, which must be a string out of `head`, `left`, `right`, and `back`.

**Returns**: Nothing

## `async exportScene()`

**Parameters**: None

**Returns**: a `Promise` that resolves with a `Uint8Array` representing the `.wbn` bundle for the current scene.

## `getContext(type, opts)`

_Wraps the <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext" target="_blank" rel="noopener noreferrer">`HTMLCanvasElement.getContext()`</a> method for this `XRPackageEngine` instance_.

**Parameters**:

- `type` corresponds to the `contextType` parameter from the <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext" target="_blank" rel="noopener noreferrer">`HTMLCanvasElement.getContext()`</a> method.
- `opts` corresponds to the `contextAttributes` parameter from the <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext" target="_blank" rel="noopener noreferrer">`HTMLCanvasElement.getContext()`</a> method.

**Returns**: The <a href="https://developer.mozilla.org/en-US/docs/Web/API/RenderingContext" target="_blank" rel="noopener noreferrer">`RenderingContext`</a> of the engine's canvas, or `null` if the context identifier is not supported.

## `getEnv(key)`

**Parameters**: the `key` for which you want to get the corresponding `value`.

**Returns**: the corresponding `value` for the given `key`.

## `getProxySession(options)`

_Gets the proxied <a href="https://developer.mozilla.org/en-US/docs/Web/API/XRSession" target="_blank" rel="noopener noreferrer">XRSession</a> for this engine instance._

**Parameters**: `options` is an Object with an optional `order` parameter (defaults to `0`).

**Returns**: an `Object` representing the proxied/hijacked <a href="https://developer.mozilla.org/en-US/docs/Web/API/XRSession" target="_blank" rel="noopener noreferrer">XRSession</a> for this engine instance.

## `grabdown(handedness)`

_Marks the given hand as in grabbing mode. Does nothing if there is no avatar/rig for this engine instance._

**Parameters**: `handedness` is a string out of `left`, `right` that represents which hand is grabbing.

**Returns**: Nothing

## `grabtriggerdown(handedness)`

_Triggers a grab attempt for the given hand._

**Parameters**: `handedness` is a string out of `left`, `right` that represents which hand is grabbing.

**Returns**: Nothing

## `grabtriggerup(handedness)`

_Triggers a release-grab attempt for the given hand._

**Parameters**: `handedness` is a string out of `left`, `right` that represents which hand is releasing the grab.

**Returns**: Nothing

## `grabup(handedness)`

_Releases the given hand from grabbing mode._

**Parameters**: `handedness` is a string out of `left`, `right` that represents which hand is grabbing.

**Returns**: Nothing

## `grabuse`

## `async importScene(uint8Array)`

_Imports a scene into the current `XRPackageEngine`._

**Parameters**: `uint8Array` is a `Uint8Array` representing an XRPackage `.wbn` file

**Returns**: a `Promise` that resolves when the package is loaded and added to this `XRPackageEngine` instance, and rejects if the `XRPackage` to be added is not an `xrpackage-scene@0.0.1`.

## `listen()`

_Attaches a `resize` event listener to automatically respond to resize events._

**Parameters**: None

**Returns**: Nothing

## `packageRequestAnimationFrame`

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

## `setEnv(key, value)`

_Sets a single key-value environment pair._

**Parameters**: a `key` and `value` to be associated with that `key`.

**Returns**: Nothing

## `setGamepadsConnected(connected)`

**Parameters**: `connected` is a `Boolean` representing whether the gamepads are now connected.

**Returns**: Nothing

## `setMatrix(m)`

_Sets the matrix for this `XRPackageEngine` and sets all the children to need their matrix world updating._

**Parameters**: `m` is the matrix to set.

**Returns**: Nothing

## `setMicrophoneMediaStream(mediaStream)`

**Parameters**: `mediaStream` is the media stream to set for this `XRPackageEngine`.

**Returns**: Nothing

**Example**:

```js
const pe = new XRPackageEngine();
const mediaStream = await navigator.mediaDevices.getUserMedia({
  audio: true,
});
pe.setMicrophoneMediaStream(mediaStream);
```

## `setRigMatrix(rigMatrix)`

_Sets the rig matrix (the offset of the user's avatar from the scene's camera, useful for implementing third-person view modes)._

**Parameters**: the `rigMatrix` to set. If this is falsy, the rig matrix is disabled.

**Returns**: Nothing

## `setScale(scale)`

**Parameters**: `scale` is the numeric scale to set for the Engine.

**Returns**: Nothing

## `async setSession(realSession)`

**Parameters**: `realSession` is the <a href="https://developer.mozilla.org/en-US/docs/Web/API/XRSession" target="_blank" rel="noopener noreferrer">`XRSession`</a> to set for this `XRPackageEngine` instance.

**Returns**: a `Promise` that resolves when the session has been successfully set.

## `setXrFramebuffer(xrfb)`

_Sets the XR Framebuffer for the engine's iframe._

**Parameters**: `xrfb`, the framebuffer to be set.

**Returns**: Nothing

## `tick`

## `updateMatrixWorld()`

_Updates the matrix world for all the children of this `XRPackageEngine`, if necessary._

**Parameters**: None

**Returns**: Nothing

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
