---
id: xrpackage-manager-api
title: XRPackageManager API
---

The `XRPackageManager` API is documented here. See install instructions and development setup <a href="https://github.com/webaverse/xrpackage" target="_blank" rel="noopener noreferrer">at the GitHub repository</a>.

- The `XRPackage` API is documented [in an earlier section](./7-xrpackage-api.md).
- The `XRPackageEngine` API is documented [in the previous section](./8-xrpackage-engine-api.md).

The `XRPackageManager` API is exposed to `iframe`s that are running `XRPackage`s, in the form of an `XRPackageManager` instance as the iframe's `window.xrpackage` variable.

## constructor()

**Parameters**: None

**Returns**: an `XRPackageManager` instance.

## get engine

**Returns**: the `XRPackageEngine` instance for this `iframe`.

## get package

**Returns**: the `XRPackage` instance that this `iframe` is representing.

## get children

**Returns**: an `Array` of `XRPackage` instances that are children of the `XRPackage` that this `iframe` is representing.

## add(p)

**Parameters**: `p` is an `XRPackage` instance to add to the `XRPackage` that this `iframe` represents.

**Returns**: a `Promise` that resolves when the package is added successfully, or rejects if adding the package times out.

## getAvatar()

**Parameters**: None

**Returns**: the rig for the avatar that this `XRPackage` is, if applicable.

## getEnv(key)

_Gets the value for the provided `key` for the `XRPackageEngine` for this `iframe`._

**Parameters**: `key` is the key for which the corresponding value should be returned.

**Returns**: the value that corresponds to the provided `key`.

## iframeInit

## remove(p)

**Parameters**: `p` is the `XRPackage` instance that is to be removed from the `XRPackage` that this iframe represents.

**Returns**: Nothing

## render(width, height, viewMatrix, projectionMatrix, framebuffer)

_Performs a render of the `XRPackageEngine` instance for this `iframe`._

**Parameters**: all parameters are required, as follows:

| Key                | Description                                                                                                                                                                              |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `width`            | The new width of the renderer                                                                                                                                                            |
| `height`           | The new height of the renderer                                                                                                                                                           |
| `viewMatrix`       | The camera's matrix                                                                                                                                                                      |
| `projectionMatrix` | The camera's projection matrix                                                                                                                                                           |
| `framebuffer`      | The <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createFramebuffer" target="_blank" rel="noopener noreferrer">`WebGLFramebuffer`</a> for the renderer |

**Returns**: Nothing

## setMatrix(matrixArray)

**Parameters**: `matrixArray` is the offset matrix between the camera and the avatar.

**Returns**: Nothing

## setSchema(key, value)

**Parameters**: the `key` and corresponding `value` to set for the schema for the `XRPackage` this iframe represents.

**Returns**: Nothing

## setXrFramebuffer(xrfb)

**Parameters**: `xrfb` is the <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createFramebuffer" target="_blank" rel="noopener noreferrer">`WebGLFramebuffer`</a> to set for the XRSession being used in this `iframe`.

**Returns**: Nothing
