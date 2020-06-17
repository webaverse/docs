---
id: creating-an-xrpk
title: Create Your First XR Package
---

This guide will walk you through the basic steps for creating an XR Package for use in the Webaverse ecosystem. The term "XRPK" stands for "XR Package", which can be thought of as an "application" or "widget" in the Webaverse. XR Packages in the Webaverse are spatialized apps. Unlike traditional apps that exists on a 2D plane, XRPKs are applications that exist in three dimensional space.

XRPackage will be used to package the assets into a bundle. XRPackage supports multiple asset types, this guide will demonstrate packaging an existing WebXR scene. See the [XRPackage overview page](xrpackage-overview.md) for more information on XRPackage and other supported asset types.

# Table Of Contents

- [Prerequisites](#prerequisites)
- [Install XRPackage](#install-xrpackage)
- [Create The Package Manifest](#create-the-package-manifest)
- [Project Files](#project-files)
- [Build The Package](#build-the-package)
- [Test The Package](#test-the-package)

## Prerequisites

- Familiarity with the command line
- NodeJS and NPM installed and available on PATH. See the [NPMJS guide on installing Node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for setup instructions

## Install XRPackage

The first step is to install the [XRPackage CLI](https://www.npmjs.com/package/xrpk). This tool is used to create, test, and publish XRPackages.

```bash
$ npm install -g xrpk
```

## Project Files

XRPackages can be built from multiple asset types, including WebXR sites written with BabylonJS or vanilla Javascript.

For the purposes of this demonstration a barebones WebXR scene built with ThreeJS is available at the link below. This scene contains tracked controllers and an animated blob.

[`Click here to download the project files`](/my-first-aug.zip)

You can also follow this guide to package an existing WebXR scene. If you are packaging an existing WebXR site, consider making the scenes skybox transparent so that it can be composited along other XRPKs and the base reality layer. Additionally, be mindful of bundle sizes. Excessively large bundles will result in a delayed loading experience for users.

## Create The Package Manifest

When building an XRPackage with the CLI, a `manifest.json` file in the root directory will be read to define the packages configuration. The sample below is the simplest possible manifest file. Copy the contents below into a file named `manifest.json` in the root directory of the package.

```json
{
  "name": "XRPackage Tutorial",
  "description": "My first XRPackage",
  "xr_type": "webxr-site@0.0.1",
  "start_url": "index.html"
}
```

See the [XRPackage overview page](xrpackage-overview.md#package-configuration) for the full list of available configuration options.

The first two fields are self evident, they define the name and description that will be exposed to users who want to consume our package.

The third field, `xr_type` specifies what type of contents are contained in this package. In this example we're using a traditional WebXR site. Information on additional package types can be found in the [XRPackage overview page](xrpackage-overview.md#whats-in-a-package).

The last field defines the entry point for our package. Since this package is a `webxr-site` we're going to define our index.html as the entry point. This HTML file will load ThreeJS which then creates our scene graph and attaches to the WebXR Device API. This WebXR site could be built with BabylonJS, vanilla javascript, or any other WebXR compatible platforms.

## Build The Package

Now that we have our WebXR site completed and we've added a manifest, we're ready to build our final output.

Open a command prompt and navigate to the project root where the manifest.json is located. Then issue the command build command as follows to build a new bundle from the contents of the current working directory:

```bash
$ cd project_root
$ xrpk build .
a.wbn
```

If everything went successfully you should see a line with `filename.wbn`, which is the filename of our final XRPackage file.

## Test The Package

Now that we've created our bundle we should test it in a browser and make sure everything is still working as it should. Fortunately the XRPackage CLI makes testing a package really simple. Just use the `run` command to test in a browser:

```bash
$ xrpk run ./a.wbn
```

If everything looks good in the browser we can move onto the next step, [publishing our package](distributing-xrpackage.md) to the decentralized IPFS network!
