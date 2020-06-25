---
id: creating-an-xrpk
title: Create Your First XRPackage
---

This guide will walk you through the basic steps for creating an XR Package for use in the Webaverse ecosystem. The term "XRPK" stands for "XR Package", which can be thought of as an "application" or "widget" in the Webaverse. XR Packages in the Webaverse are spatialized apps. Unlike traditional apps that exists on a 2D plane, XRPKs are applications that exist in three dimensional space.

XRPackage will be used to package the assets into a bundle. Although XRPackage supports multiple asset types, this guide demonstrates packaging an existing WebXR scene.

**Note**: This guide assumes you have read the [XRPackage Overview](./1-xrpackage-overview.md) or are familiar with what an XRPackage is.

If you're unfamiliar with WebXR, check out our quick [overview of WebXR](./6-webxr-overview.md)!

## Prerequisites

- Familiarity with the command line
- NodeJS and NPM installed and available on PATH. See the <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" target="_blank" rel="noopener noreferrer">NPMJS guide on installing Node</a> for setup instructions

## Install XRPackage

The first step is to install the <a href="https://www.npmjs.com/package/xrpk" target="_blank" rel="noopener noreferrer">XRPackage CLI</a>. This tool is used to create, test, and publish XRPackages.

```bash
$ npm install -g xrpk
```

## Project Files

XRPackages can be built from multiple asset types, including WebXR sites written with BabylonJS or vanilla JavaScript.

For the purposes of this guide, a barebones WebXR scene built with ThreeJS is available at the link below. This scene contains tracked controllers and an animated blob.

<a href="https://github.com/MLH-Fellowship/threejs-demo/archive/master.zip" target="_blank" rel="noopener noreferrer">`Click here to download the project files`</a>

You can also follow this guide to package an existing WebXR scene. If you are packaging an existing WebXR site, consider making the scene's [skybox](../glossary.md#skybox) transparent so that it can be composited along other XRPKs and the base reality layer. Additionally, be mindful of bundle sizes: excessively large bundles will result in a delayed loading experience for users.

If you're unfamiliar with WebXR, check out our [overview of WebXR](./6-webxr-overview.md)!

We also have example project files for an <a href="https://aframe.io/" target="_blank" rel="noopener noreferrer">A-Frame</a> project, available <a href="https://github.com/MLH-Fellowship/aframe-demo/archive/master.zip" target="_blank" rel="noopener noreferrer">here</a>!

## Create The Package Manifest

When building an XRPackage with the CLI, a `manifest.json` file in the root directory will be read to define the package's configuration. The sample below is the simplest possible manifest file. Copy the contents below into a file named `manifest.json` in the root directory of the package, or use the CLI `xrpk init` command to generate it for you:

```json
{
  "name": "XRPackage Tutorial",
  "description": "My first XRPackage",
  "xr_type": "webxr-site@0.0.1",
  "start_url": "index.html"
}
```

See the [XRPackage overview page](./index.md#package-configuration) for the full list of available configuration options.

The first two fields are self evident, they define the name and description that will be exposed to users who want to consume our package.

The third field, `xr_type` specifies what type of contents are contained in this package (see the [XRPackage overview page](./index.md#whats-in-a-package)). In this guide, we'll use `webxr-site@0.0.1`.

The last field defines the entry point for our package. Since this package is a `webxr-site` we're going to define our `index.html` as the entry point. This will load ThreeJS which creates our scene graph and attaches to the WebXR Device API. Your WebXR site can be built with BabylonJS, vanilla JavaScript, or any other WebXR compatible platform.

## Build The Package

Now that we have our WebXR site completed and we've added a manifest, we're ready to build our final output.

Open a command prompt and navigate to the project root where `manifest.json` is located. Then issue the `build` command as follows to build a new bundle from the contents of the current working directory:

```bash
$ cd project_root
$ xrpk build .
a.wbn
```

If everything went successfully you should see a line with like `filename.wbn`, which is the filename of our final XRPackage file.

To simplify the process, we even have a <a href="https://github.com/webaverse/xrpackage-build-action" target="_blank" rel="noopener noreferrer">GitHub action</a> to easily package and deploy your apps! Every `git push` action will verify your app, tag the release, build the package, and optionally release it!

## Test The Package

Now that we've created our bundle we should test it in a browser and make sure everything is still working as it should. Fortunately the XRPackage CLI makes testing a package really simple. Just use the `run` command to test in a browser:

```bash
$ xrpk run ./a.wbn
```

If everything looks good in the browser we can move onto the next step, [publishing our package](./3-distributing-xrpackage.md) to the decentralized IPFS network!
