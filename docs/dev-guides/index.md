---
id: dev-overview
title: Overview
---

Webaverse loads multiple XR apps simulatenously in a shared space. These applications (apps) are called XRPackages (XRPKs).

To make a Webaverse application, you create your app using one of the many supported asset types (see below) and package it into an XRPackage using  <a href="https://github.com/webaverse/xrpackage-cli" target="_blank" rel="noopener noreferrer">`xrpk`</a>.

## Supported Asset Types

Webaverse supports many different asset types to enable creators to easily bring their original content directly into Webaverse.

Currently the following file formats are supported:

- GLTF Models (`.gltf`, `.glb`)
- VRM 3D Avatars (`.vrm`)
- MagicaVoxel Models (`.vox`)
- 3D Websites (`.js`) (THREE.js, A-Frame, Babylon, etc.)

## Import Existing Creations

In Webaverse, you can package and load in an existing 3D website written using THREE.js, A-Frame, Babylon, or any other WebXR compatible JavaScript framework.

For more information on packaging an XRPK from an existing 3D website, see the [`Create Your First XRPackage`](./2-creating-an-xrpk.md) guide to get started.

In addition, Webaverse supports traditional 3D models. Any content creation platform that can export to one of the above formats can be easily packaged and brought into the Webaverse.

**I want to package my creations from...**

- [VRoid Studio](./13-vroid-studio-import.md)
