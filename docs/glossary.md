---
id: glossary
title: Glossary
---

The Webaverse ecosystem, VR, and XRPackage have all sorts of terminology that can be daunting for newcomers.

This glossary aims to provide a simple, easy-to-follow explanation of any terms you might come across whilst using, or developing for, the Webaverse ecosystem.

Still unsure about something? Find us in our friendly [Discord server](https://discord.gg/MQNUGgB), or [submit a Pull Request on GitHub](https://github.com/webaverse/docs) to add to this document!

### Webaverse

The Webaverse is a universe of spatial apps that can run everywhere. Apps can be created by anyone, including you!

### XRPackages

XRPackages (XRPKs) are distributed 3D spatial web applications that can be loaded anywhere. XRPackages compile various frameworks like WebXR, GTLF, and WebBundle into modular, standardized .wbn packages that enable virtual objects to interact with each other in the Webaverse. The product is a runtime that can be loaded from within the browser to run in WebXR packages with the ERC-1155 token and hosted data on IPFS.

### Collision Mesh

Collision Meshes are invisible meshes containing an object, and are automatically generated during the [baking](#baking) process by taking screenshots of the object from all angles. An advantage of an XRPackage is it creates the collision mesh upon compilation, meaning your objects can interact with each other in VR without needing to know more about each other!

### Baking

Baking is the process where a `.wbn` package is taken as input and run within a browser, where it is rewritten with an added generated icons that store collision meshes and preview screenshots for packages.

### Skybox

In 3D, a _skybox_ is a virtual cube with a texture (e.g. a sky, or a park, or mountains) that is the bounds of a virtual world. It essentially allows you to provide a background environment that the user sees all around them.

### Tracked Controllers

This means that your apps or scenes can track your VR controllers, to move in relation to them in real-time.
