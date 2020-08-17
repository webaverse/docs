---
id: xrpackage-api
title: XRPackage API
---

The `XRPackage` API is documented here. See install instructions and development setup <a href="https://github.com/webaverse/xrpackage" target="_blank" rel="noopener noreferrer">at the GitHub repository</a>.

- The `XRPackageEngine` API is documented [in the next section](./8-xrpackage-engine-api.md).
- The `XRPackageManager` API is documented [in a later section](./9-xrpackage-manager-api.md).

**Note: This page is still in development, whilst the API is documented**.

## `constructor(a)`

**Parameters**: `a` can either be an `XRPackage` instance (to duplicate it), or a `Uint8Array` of data for a `.wbn` XRPackage.

**Returns**: an `XRPackage` instance.

**Throws**: an `Error` if `a.byteLength > 0` and either:

- no `manifest.json` was found in the package,
- no `xr_type` or `start_url` is find in the manifest,
- an unknown `xr_type` was provided

**Example**:

```js
const p = await fetch("/a.wbn")
  .then((res) => res.arrayBuffer())
  .then((uint8Array) => new XRPackage(uint8Array));
```

## `async add(p, options)`

_Adds an XRPackage to this instance._

**Parameters**:

- `p` is the `XRPackage` instance to add.
- `options` is an Object with the following optional parameters:

| Key       | Default | Description                                                         |
| --------- | ------- | ------------------------------------------------------------------- |
| `reason`  | N/A     | String describing why the package is added                          |
| `timeout` | 30000   | Milliseconds after which this method should reject if loading fails |

**Returns**: A `Promise` that resolves when the package loads successfully, or rejects if the `timeout` is reached before the load occurs.

## `addFile(pathname, data, type)`

_Adds a file to the XRPackage._

**Parameters**:

- `pathname` is the path for the file to add
- `data` is a string or `Uint8Array` representing the file to add
- `type` is the <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types" target="_blank" rel="noopener noreferrer">MIME type</a> for the file to add

**Returns**: Nothing

**Example**:

```js
const uint8Array = await fetch("/avatar.vrm").then((res) => res.arrayBuffer());
const xrpk = new XRPackage();
xrpk.addFile(
  "manifest.json",
  JSON.stringify({ start_url: "avatar.vrm", xr_type: "vrm@0.0.1" }),
  "application/json"
);
xrpk.addFile("avatar.vrm", uint8Array, "application/octet-stream");
```

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

**Parameters**: `files` is an array of objects with keys `url`, `type`, `data` for the path, MIME type, and body (string or `Uint8Array`) of each file in the XRPackage to be compiled.

**Returns**: A `Uint8Array` representing the `XRPackage` for the files passed in.

**Example**:

```js
const uint8Array = XRPackage.compileRaw([
  {
    url: "/manifest.json",
    type: "application/json",
    data: JSON.stringify({
      xr_type: "webxr-site@0.0.1",
      start_url: "index.html",
    }),
  },
  {
    url: "/index.html",
    type: "text/html",
    data: "<html>...</html>",
  },
]);
const p = new XRPackage(uint8Array);
await p.waitForLoad();
await packageEngine.add(p);
```

## `async download(hash)`

_Downloads and returns an XRPackage object with the specified hash from IPFS._

**Parameters**: `hash`, a string of the IPFS package hash to be downloaded.

**Returns**: `p`. an `XRPackage` object

## `ensureRunStop`

## `export()`

**Parameters**: None

**Returns**: a `Uint8Array` representing the XRPackage's data.

## `getAabb()`

**Parameters**: None

**Returns**: `null` if this package's manifest is missing/invalid/has no `aabb` property, or the `THREE.Box3` representing this package's AABB Box.

## `async getHash()`

**Parameters**: None

**Returns**: a `Promise` that resolves to the hash of this package's data.

## `getMainData()`

**Parameters**: None

**Returns**: the body of the contents of the `start_url` file of this package.

## `getManifestJson()`

**Parameters**: None

**Returns**: an object representing the package's root `manifest.json`, or `null` if the file is not found.

## `async getModel()`

**Parameters**: None

**Returns**: a `Promise` that resolves to `null` if there is no model defined in this package's manifest, otherwise the parsed model for this package.

## `getParentEngine()`

**Parameters**: None

**Returns**: `null` if there is no parent `XRPackageEngine`, or the `XRPackageEngine` instance for this package.

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

**Returns**: an <a href="https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL" target="_blank" rel="noopener noreferrer">Object URL</a> for the first image in the manifest's `icons` array, or `null` if there is no manifest/icon.

## `async getVolumeMesh()`

_Retrieve the collision mesh of the XRPackage if it exists._

**Parameters**: None

**Returns**: A <a href="https://threejs.org/docs/#api/en/scenes/Scene" target="_blank" rel="noopener noreferrer">`Scene`</a> object for the package volume mesh if it exists, or `null` if a volume mesh does not exist.

## `grabrelease()`

_Releases all grabs on the current package._

**Parameters**: None

**Returns**: Nothing

## `isAttached()`

**Parameters**: None

**Returns**: a `Boolean` representing whether the current package is attached to an `XRPackageEngine` instance.

## `async loadAvatar()`

_Waits for the avatar to load, if applicable._

**Parameters**: None

**Returns**: A `Promise` that resolves when the avatar is loaded/immediately if loading was not applicable.

## `remove(p, options)`

_Removes an XRPackage from this instance._

**Parameters**:

- `p` is the `XRPackage` instance to remove.
- `options` is an Object with the following optional parameters:

| Key      | Default | Description                                  |
| -------- | ------- | -------------------------------------------- |
| `reason` | N/A     | String describing why the package is removed |

**Returns**: Nothing.

## `removeFile(pathname)`

_Removes a file from the XRPackage._

**Parameters**: `pathname` is the path of the file to remove from the package.

**Returns**: Nothing

## `setMatrix(m)`

**Parameters**: the matrix `m` to set.

**Returns**: Nothing

## `setPose`

## `setSchema`

## `async upload()`

_Uploads the XRPackage to the IPFS directory and returns the IPFS hash of the package._

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

## `async waitForRun()`

**Parameters**: None

**Returns**: a `Promise` that resolves once this package is attached to an `XRPackageEngine` instance.
