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

## `defaultAvatar`

## `dispatchXrEvent`

## `downloadScene`

## `draw`

## `equip`

## `exportScene`

## `getContext`

## `getEnv`

## `getProxySession`

## `getUserMedia`

## `grabdown`

## `grabtriggerdown`

## `grabup`

## `grabuse`

## `importScene`

## `listen`

## `packageCancelAnimationFrame`

## `packageRequestAnimationFrame`

## `packageRequestPresent`

## `render`

## `reset()`

_Removes all the children of the XRPackageEngine instance._

**Parameters**: None

**Returns**: Nothing

## `resize`

## `setCamera`

## `setClearFreeFramebuffer`

## `setEnv`

## `setGamepadsConnected`

## `setMatrix`

## `setMicrophoneMediaStream`

## `setRigMatrix`

## `setScale`

## `setSession`

## `setXrFramebuffer`

## `start`

## `tick`

## `updateMatrixWorld`

## `start`

## `tick`

## `updateMatrixWorld`

## `uploadScene`

## `waitForLoad`

## `wearAvatar`

Wear the specified package as an avatar.

**Parameters**: `p`, an `XRPackage` object.

**Returns**: None
