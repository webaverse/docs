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

**Parameters**: None

**Returns**: An `Object` containing metadata and positional geometry data for the package if a volume mesh exists, or `null` if a volume mesh does not exist.

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

## `waitForLoad`

## `waitForRun`
