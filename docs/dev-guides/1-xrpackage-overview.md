---
id: xrpackage-overview
title: What is XRPackage?
---

<img src="/img/xrpk-logo.png" width="250px" height="250px" />

XRPackage turns 3D apps into a file you can load anywhere.

It uses standards like WebGL, WebXR, GLTF, and WebBundle to package an app into a `.wbn` file.

## What's in a package?

An XRPackage is a bundle of files. The entry point is a `manifest.json` (following the <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest" target="_blank" rel="noopener noreferrer">Web App Manifest</a> standard). The rest of the files in the bundle are the source files for the app.

The main addition to the Web App Manifest specification is the `xr_type` field, which specifies the type of application and the spec version.

```
$ cat manifest.json
{
  "xr_type": "webxr-site@0.0.1",
  "start_url": "cube.html"
}
```

`xr_type` can currently be:

- `webxr-site@0.0.1`
- `gltf@0.0.1`
- `vrm@0.0.1`
- `vox@0.0.1`

See also the <a href="https://github.com/webaverse/xrpackage/tree/master/examples" target="_blank" rel="noopener noreferrer">examples</a>.

The `start_url` field depends on the type of package:

1. Asset packages

   For the following types of packages, the `start_url` references the single static asset file to be loaded:

   - `gltf@0.0.1`
   - `vrm@0.0.1`
   - `vox@0.0.1`

2) WebXR packages

   For WebXR packages, the `start_url` references the `index.html` entry point for the WebXR app. `index.html` should be a regular WebXR application, with assets referenced using relative paths.

   Because XRPackage is a spatial packaging format, the main additional requirement is that the WebXR application automatically starts its WebXR session upon receiving the `sessiongranted` event (see the <a href="https://github.com/immersive-web/webxr/blob/master/designdocs/navigation.md" target="_blank" rel="noopener noreferrer">WebXR Navigation Specification</a> and the <a href="https://github.com/webaverse/xrpackage/blob/88a87d296019530f4f76ec18ce64f9397cd4b27d/examples/html/cube.html#L25" target="_blank" rel="noopener noreferrer">example</a>.

## Package icons

Packages can contain icons that represent them in previews. Multiple icons can be in the same package, with different types. The icon files are included along with the package as regular files and referenced in the manifest. This follows the web bundle standard.

Icons are used to both render a preview for the package, and specify how it behaves in relation to other packages. For example, the collision mesh icon type (`"model/gltf-binary+preview"`) specifies the collision boundary geometry that the package uses, in GLTF form.

```json
{
  "xr_type": "webxr-site@0.0.1",
  "start_url": "cube.html",
  "icons": [
    {
      "src": "icon.gif",
      "type": "image/gif" // screen capture
    },
    {
      "src": "collision.glb",
      "type": "model/gltf-binary+preview" // collision mesh
    },
    {
      "src": "xrpackage_model.glb",
      "type": "model/gltf-binary" // gltf preview
    }
  ]
}
```

## Package configuration

The package manifest can contain an `xr_details` field which further specifies how it should be treated by a compatible runtime.

```json
{
  "xr_type": "webxr-site@0.0.1",
  "start_url": "cube.html",
  "xr_details": {
    "schema": { // describes configurable properties of the package
      "floofiness": {
        "type": "string", // currently only "string"
        "default": "very"
      }
    },
    "events": { // describes events the we can receive from other packages
      "refloof": {
        "type": "string"
      }
    },
    "aabb": [ // axis-aligned bounding box
      [-1, -1, -1], // min point
      [1, 1, 1] // max point
    ],
    "wearable": { // how this package can be worn on an avatar
      "head": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], // matrix offset from specified bone to package
      "hand": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      "back": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    },
    "physics": "static" // physics mode for the packge: null (no physics, default), "static", or "dynamic"
  }
}
```

See [`xr_details` API](./10-xr-details-api.md) for more details on these properties.

## Building a package

Regardless of package type, packages are built with the `xrpk` tool which you can get on `npm`:

```bash
$ npm install -g xrpk
```

To build a package with `manifest.json` in the current directory:

```bash
$ xrpk build .
a.wbn
```

Note: this will open up your browser to perform screenshotting of the application; you can close that tab when it completes.

The resulting package is `a.wbn`.

## Test the package

Once you have an XRPackage (`a.wbn`), you can run it in your browser like so:

```bash
$ xrpk run ./a.wbn
```

This will open up the `xrpackage.js` runtime in your browser and load the given file for viewing.
  

## Design Guidelines:

- Use transparent skyboxes to make it easier to compose multiple apps together.
- Be mindful of size to improve loading speeds, keep packages under 100mb.

See [Design Guidelines](./15-xrpackage-design-guidelines.md) for more.
