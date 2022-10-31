---
id: xrpackage-overview
title: XRPackage Overview
---

<img src="/img/xrpk-logo.png" width="250px" height="250px" />

XRPackage turns 3D apps into a file you can load anywhere.

![Moving an XRPK around in a scene](/img/xrpks.gif)

It uses standards like WebGL, WebXR, GLTF, and WebBundle to package an app into a `.wbn` file.

## What's in a package?

An XRPackage is a bundle of files. The entry point is a `manifest.json` (following the <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest" target="_blank" rel="noopener noreferrer">Web App Manifest</a> standard). The rest of the files in the bundle are the source files for the app.

```
$ cat manifest.json
{
  "name": "cube",
  "description": "Cube XRPackage",
  "start_url": "index.js"
}
```

The `start_url` field depends on the type of package:

1. Asset packages

   For the following types of packages, the `start_url` references the single static asset file to be loaded:

   - `glb@0.0.1`
   - `vrm@0.0.1`
   - `vox@0.0.1`

2) WebXR packages

   For WebXR packages, the `start_url` references the `index.js` entry point for the app. `index.js` should have any assets referenced using relative paths.

## Package configuration

The package manifest contains fields to describe aspects of your XRPackage such as name, description, etc.

See [Manifest API](./manifest-api.md) for more details on these properties.

## Building a package

Regardless of package type, packages are built with the `xrpk` tool which you can get on `npm`:

```bash
$ npm install -g xrpk
```

To build a package with `manifest.json` in the current directory:

```bash
$ xrpk build .
cube.wbn
```

The resulting package is `cube.wbn`.

There is also a [GUI](https://utils.webaverse.com/). See [Create An XRPackage](./creating-an-xrpk.md) for more info on how to create an XRPackage.

## Design Guidelines:

- Use transparent skyboxes to make it easier to compose multiple apps together.
- Be mindful of size to improve loading speeds, keep packages under 100mb.

See [Design Guidelines](./xrpackage-design-guidelines.md) for more.
