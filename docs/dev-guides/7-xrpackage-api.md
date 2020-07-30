---
id: xrpackage-api
title: XRPackage API
---

The `XRPackage` API is documented here. See install instructions and development setup <a href="https://github.com/webaverse/xrpackage" target="_blank" rel="noopener noreferrer">at the GitHub repository</a>.

The `XRPackageEngine` API is documented [in the next section](./8-xrpackage-engine-api.md).

**Note: This page is still in development, whilst the API is documented**.

## `constructor`

## `add`

## `addFile`

## `clone`

## `compileFromFile`

## `compileRaw`

## `download`

Downloads and returns an XRPackage object with the specified hash from IPFS.

**Parameters**: `hash`, a string of the IPFS package hash to be downloaded.

**Returns**: `p`. an `XRPackage` object


## `ensureRunStop`

## `export`

## `getAabb`

## `getHash`

## `getMainData`

## `getManifestJson`

## `getModel`

## `getParentEngine`

## `getScreenshotImage()`

**Parameters**: None

**Returns**: an <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image" target="_blank" rel="noopener noreferrer">`Image`</a> object with `src` set to the result of [`getScreenshotImageUrl()`](#getscreenshotimageurl), or `null` if no image is available.

## `getScreenshotImageUrl()`

**Parameters**: None

**Returns**: a <a href="https://developer.mozilla.org/en-US/docs/Web/API/DOMString" target="_blank" rel="noopener noreferrer">`DOMString`</a> for the first image in the manifest's `icons` array, or `null` if there is no manifest/icon.

## `getVolumeMesh`

Retrieve the collision mesh of the XRPackage if it exists.

**Parameters**: None

**Returns**: A <a href="https://threejs.org/docs/#api/en/scenes/Scene" target="_blank" rel="noopener noreferrer">`Scene`</a> object in JSON format with metadata for the package if a volume mesh exists, or `null` if a volume mesh does not exist. See <a href="https://github.com/mrdoob/three.js/wiki/JSON-Object-Scene-format-4" target="_blank" rel="noopener noreferrer">`JSON Object Scene Format`</a> and <a href="https://github.com/mrdoob/three.js/blob/master/src/scenes/Scene.js" target="_blank" rel="noopener noreferrer">`Scene.js`</a> for more information.


## `grabrelease`

## `isAttached`

## `load`

## `loadAvatar`

## `remove`

## `removeFile`

## `setMatrix`

## `setPose`

## `setSchema`

## `setXrFramebuffer`

## `upload`

Uploads the XRPackage to the IPFS directory and returns the IPFS hash of the package.

**Parameters**: None

**Returns**: `hash`, a string containing the IPFS hash of the newly uploaded package.


## `waitForLoad`

## `waitForRun`
