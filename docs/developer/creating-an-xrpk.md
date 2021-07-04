---
id: creating-an-xrpk
title: Create An XRPackage
---

This guide will walk you through the basic steps for creating an XRPackage for use in the Webaverse ecosystem.

The term "XRPK" stands for "XRPackage", which can be thought of as an "application" or "widget" in the Webaverse. 

XRPackages in the Webaverse are spatialized apps. Unlike traditional apps that exists on a 2D plane, XRPKs are applications that exist in three dimensional space.

**Note**: This guide assumes you have read the [XRPackage Overview](./xrpackage-overview.md) or are familiar with what an XRPackage is.


## GUI

Creators can build a XRPK from directory at [https://utils.webaverse.com/](https://utils.webaverse.com/). The only requirement is placing a compatible asset file somewhere in the directory. The package [`manifest.json`](https://docs.webaverse.com/docs/developer/xrpackage-overview#whats-in-a-package) describes aspects of the XRPK. If no manifest.json exists one will be generated for you.

The minting flow on [Webaverse.com](https://https://webaverse.com) aims to streamline the process, although its slower to implement any new experimental new NFT types.




## Command Line

The `xrpk` command line tool will be used to package the assets into a bundle. Although XRPackage supports multiple asset types, this guide demonstrates packaging an existing ThreeJS 3d website scene.

### Prerequisites

- Familiarity with the command line
- NodeJS

## Install XRPackage

The first step is to install the <a href="https://www.npmjs.com/package/xrpk" target="_blank" rel="noopener noreferrer">XRPackage CLI</a>. This tool is used to create and test XRPackages.

```bash
$ npm install -g xrpk
```

## Clone The Project Repository

For the purposes of this guide, a barebones 3D website scene built with ThreeJS is available at the repository below. This scene contains a simple cube with physics.

```bash
$ git clone https://github.com/madjin/physicscube
```

You can also follow this guide to package an existing WebXR scene. If you are packaging an existing WebXR site, consider making the scene's skybox transparent so that it can be composited along other XRPKs and the base reality layer. 

Additionally, be mindful of bundle sizes: excessively large bundles will result in a delayed loading experience for users. Try to stay below 100mb.

## Create The Package Manifest

When building an XRPackage with the CLI, a `manifest.json` file in the root directory will be read to define the package's configuration. The sample below is the simplest possible manifest file. Copy the contents below into a file named `manifest.json` in the root directory of the package, or use the CLI `xrpk init` command to generate it for you:

```json
{
  "name": "physicscube",
  "description": "Physics Cube XRPackage",
  "start_url": "index.js"
}
```

See the [XRPackage Manifest API](./manifest-api.md) for the full list of available configuration options.

The first two fields define the name and description that will be exposed to users who want to consume our package.

The last field defines the entry point for our package. Since this package is a 3d WebXR website, we're going to define our `index.js` as the entry point. This will load ThreeJS which creates our scene.

## Build The Package

Now that we have our WebXR site completed and we've added a manifest, we're ready to build our final output.

Open a terminal and navigate to the project root where `manifest.json` is located. Then issue the `build` command as follows to build a new bundle from the contents of the current working directory:

```bash
$ xrpk build .
physicscube.wbn
```

If everything went successfully you should see a line with like `physicscube.wbn`, which is the filename of our final XRPackage file.

To simplify the process, we even have a <a href="https://github.com/webaverse/xrpackage-build-action" target="_blank" rel="noopener noreferrer">GitHub action</a> to easily package and deploy your apps! Every `git push` action will verify your app, tag the release, build the package, and optionally release it!

## Mint the XRPackage

Now that we've created our XRPackage, you can now [mint it as an NFT](/create/mint.md).
