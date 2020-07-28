---
id: xrpackage-api
title: XRPackage API
---

The `XRPackage` API is documented here. See install instructions and development setup <a href="https://github.com/webaverse/xrpackage" target="_blank" rel="noopener noreferrer">at the GitHub repository</a>.

The `XRPackageEngine` API is documented [in the next section](./8-xrpackage-engine-api.md).

**Note: This page is still in development, whilst the API is documented**.

## `constructor(a)`

**Parameters**: `a` can either be an `XRPackage` instance (to duplicate it), or a `Uint8Array` of data for a `.wbn` XRPackage.

**Returns**: an `XRPackage` instance.

**Example**:

```js
const p = await fetch("/a.wbn")
  .then((res) => res.arrayBuffer())
  .then((uint8Array) => new XRPackage(uint8Array));
```

## `add`

## `addFile`

## `clone()`

**Parameters**: None

**Returns**: an `XRPackage` instance duplicating the current XRPackage.

## `async compileFromFile(blob)`

**Parameters**: `blob` is a <a href="https://developer.mozilla.org/en-US/docs/Web/API/Blob" target="_blank" rel="noopener noreferrer">`Blob`</a> object representing the asset that is to be compiled into an `XRPackage`.

**Returns**: A `Uint8Array` representing the `XRPackage` for the asset in `blob`.

**Example**:

```js
const path = "/camera.glb";
const blob = await fetch(path).then((res) => res.blob());
blob.name = path.split("/").pop();
const uint8Array = await XRPackage.compileFromFile(blob);
const p = new XRPackage(uint8Array);
await p.waitForLoad();
await packageEngine.add(p);
```

## `compileRaw(files)`

## `download`

Downloads and returns an XRPackage object with the specified hash from IPFS.

**Parameters**: `hash`, a string of the IPFS package hash to be downloaded.

**Returns**: `p`. an `XRPackage` object


## `ensureRunStop`

## `export`

## `getAabb`

## `getHash`

## `getMainData`

## `getManifestJson()`

**Parameters**: None

**Returns**: an object representing the package's root `manifest.json`, or `null` if the file is not found.

## `getModel`

## `getParentEngine`

## `async getScreenshotImage()`

**Parameters**: None

**Returns**: an <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image" target="_blank" rel="noopener noreferrer">`Image`</a> object with `src` set to the result of [`getScreenshotImageUrl()`](#getscreenshotimageurl), or `null` if no image is available.

**Example**:

```js
const image = await p.getScreenshotImage();
if (image) document.getElementById("image").appendChild(image);
```

## `async getScreenshotImageUrl()`

**Parameters**: None

**Returns**: a <a href="https://developer.mozilla.org/en-US/docs/Web/API/DOMString" target="_blank" rel="noopener noreferrer">`DOMString`</a> for the first image in the manifest's `icons` array, or `null` if there is no manifest/icon.

## `getVolumeMesh`

Retrieve the collision mesh of the XRPackage if it exists.

**Parameters**: None

**Returns**: A <a href="https://threejs.org/docs/#api/en/scenes/Scene" target="_blank" rel="noopener noreferrer">`Scene`</a> object for the package volume mesh if it exists, or `null` if a volume mesh does not exist.

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

## `async waitForLoad()`

**Parameters**: None

**Returns**: a `Promise` that resolves when the package has been parsed and it's loader completes successfully.

**Example**:

```js
const p = new XRPackage(uint8Array);
await p.waitForLoad();
await packageEngine.add(p);
```

## `waitForRun`
