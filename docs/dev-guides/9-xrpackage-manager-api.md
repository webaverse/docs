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

## getAvatar

## getEnv

## iframeInit

## remove

## render

## setMatrix

## setSchema

## setXrFramebuffer
