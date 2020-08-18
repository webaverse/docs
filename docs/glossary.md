---
id: glossary
title: Glossary
---

The Webaverse ecosystem, VR, and XRPackage have lots of terminology that can be daunting for newcomers.

This glossary aims to provide a simple, easy-to-follow explanation of any terms you might come across whilst using, or developing for, the Webaverse ecosystem.

Still unsure about something? Find us in our [Discord server](https://discord.gg/MQNUGgB), or [submit a Pull Request on GitHub](https://github.com/webaverse/docs) to add to this document!

## Webaverse

The Webaverse is a universe of spatial apps that can run everywhere. It is a collection of virtual realities within space, on the web. Using open standards such as [WebXR](./dev-guides/6-webxr-overview.md) and distributed infrastructure for packaged applications and objects, apps can be created and owned by anyone, including you!

## XRPackages

[XRPackages (XRPKs)](./dev-guides/1-xrpackage-overview.md) are distributed 3D spatial web 'applications' that can be loaded anywhere. XRPackages compile various asset types like WebXR and GTLF into modular, standardized Web Bundle pacakges (`.wbn` files) that enable virtual objects to interact with each other in the Webaverse.

## Tracked Controllers

This means that your apps or scenes can track your VR controllers, using cameras and sensors, to move in relation to your movement in real-time.

## Baking

Baking is the process where a `.wbn` XRPackage is taken as input and run within a browser, where it is rewritten with an added generated icons that store [collision meshes](#collision-mesh) and preview screenshots for packages.

## Collision Mesh

Collision Meshes are invisible meshes containing an object, and are automatically generated during the [baking](#baking) process by taking screenshots of the object from all angles. An advantage of an XRPackage is it creates the collision mesh upon compilation, meaning your objects can interact with each other in VR without needing to know more about each other!

## Skybox

In 3D, a _skybox_ is a virtual cube with a texture (e.g. a sky, or a park, or mountains) that is the bounds of a virtual world. It essentially allows you to provide a background environment that the user sees all around them.

In a multi-app case, care needs to be taken with skyboxes &mdash; if every app has its own skybox, they tend to obscure each other and 'take over'. This is why when developing your own [XRPKs](#xrpackages), you should usually have a _transparent skybox_!
