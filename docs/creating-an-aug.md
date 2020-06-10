---
id: creating-an-aug
title: Create Your First Aug
---

This guide will walk you through the basic steps for creating an aug for use in the Webaverse ecosystem. The term "aug" is an abbreviation for "augmentation" in the same way that "app" is the abbreviation of "application". Augs in the Webaverse are spatialized apps. Unlike traditional apps that exists on a 2D plane, augs are applications that exist in three dimensional space.

In this guide we're going to be using the XRPackage standard to create our bundle. XRPackage supports multiple asset types, this guide will demonstrate packaging an existing WebXR scene. See the [XRPackage overview page](xrpackage-overview.md) for more information on how XRPackage works and the types it supports.

# Table Of Contents
[Table Of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Install XRPackage](#install-xrpackage)
  - [Create The Package Manifest](#create-the-package-manifest)
  - [Project Files](#project-files)
  - [Build The Package](#build-the-package)
  - [Test The Package](#test-the-package)

## Prerequisites

* Familiarity with the command line
* NodeJS and NPM installed and available on PATH. See the [NPMJS guide on installing Node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for setup instructions

## Install XRPackage

The first step is to install the [XRPackage CLI](https://www.npmjs.com/package/xrpk). This tool is used to create, test, and publish XRPackages.

```bash
$ npm install -g xrpk
```

## Project Files

XRPackages can be built from multiple asset types, including WebXR sites written with BabylonJS or vanilla Javascript.

For the purposes of this demonstration a barebones WebXR scene built with ThreeJS is available from the link below. This scene contains tracked controllers and a sphere with a Perlin noise algorithm animating it's vertices.

[`Click here to download the project files`](/my-first-aug.zip)

You can also follow this guide to package your existing WebXR scene. Two things to consider when packaging existing sites is file sizes and transparent skyboxes. Keeping file sizes low makes packages faster to download and run. Making the scenes skybox transparent allows your package to be composited into a base reality layer, and run alongside other packages.


## Create The Package Manifest

When we build our package with the CLI tool, it will look for a file called `manifest.json` which contains the configuration of your package. This file is what defines the type of package you're building and its properties.

Copy the below contents into a file in the directory root named `manifest.json`

```json
{
  "name": "XRPackage Tutorial",
  "description": "My first XRPackage",
  "xr_type": "webxr-site@0.0.1",
  "start_url": "index.html"
}
```

This is the simplest possible manifest for a package. A list of all possible parameters is available on the [XRPackage overview page](xrpackage-overview.md).

The first two fields are self evident, they define the name and description that will be exposed to users who want to consume our package.

The third field, `xr_type` specifies what type of contents are contained in this package. In this example we're using a traditional WebXR site. Information on additional package types can be found in the [XRPackage overview page](xrpackage-overview.md).

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

Now that we've created our bundle we should test it in a browser and make sure everything is still working as it should. Fortunately the XRPackage CLI makes testing a package really simple. Just use the run command to test in a browser:

```bash
$ xrpk run ./a.wbn
```

If everything looks good in the browser we can move onto the next step, publishing our package to the decentralized IPFS network!

## Publish The Package

#### **Note:** Publishing your package to the IPFS/Ethereum network is completely optional. You can use any hosting and distribution platform to share your XRPackages. IPFS is the preferred hosting solution for the Webaverse due to its decentralized trustless infrastructure.

We've successfully bundled our demo application into a bundle that can now be easily shared and consumed by Webaverse users. One way of distributing XRPackages is by publishing them to the decentralized IPFS network. This allows our packages to be browsed from a central directory and removes the requirement of package hosting. [You can browse previously published packages here.](https://xrpackage.org/browse.html)

#### **Note:** The publish functionality in the XRPackage CLI currently only publishes to the Rinkeby testnet. You will need to have a sufficient ETH balance in order to publish packages. You can get free Rinkeby testnet ETH [at the faucet](https://faucet.rinkeby.io/).

Just like in the previous steps, we're going to be using the XRPackage CLI to login to our Ethereum wallet and publish our packages to the network. The following steps assume you have at least a basic familiarity with the Ethereum network.

The first step is to use the login command to either login to an existing wallet, or create a new wallet. This is the wallet we will be using to pay the gas fees for publishing our package. If you create a new wallet using the CLI, make sure to visit the faucet and load it with ETH before attempting to publish a package.

```bash
$ xrkp login
# Follow the on-screen prompts to create or import an existing wallet
```

Once we've associated our wallet, it's always a good idea to double check your information and make sure everything looks as it should:

```bash
$ xrkp whoami
```

Once we're happy with our wallet and we're ready to publish, simply issue the `publish` command with the path to your bundle from earlier:

```bash
$ xrpk publish
```

#### [Click here to view the smart contracts for XRPackage Publishing](https://github.com/webaverse/contracts)

Congratulations! You've successfully created and published your first XRPackage!