---
id: importing-from-blender
title: Importing content from Blender
---

This guide explains how you can export your content from Blender to bring it into the Webaverse ecosystem.

The easiest way to do this is to export your Blender model into a <a href="https://www.khronos.org/gltf/" target="_blank" rel="noopener noreferrer">glTF format</a>, and then package this `.gltf` or `.glb` file into an XRPackage `.wbn` bundle.

## 1. Export your Blender model as a glTF/glb (binary glTF) file

As of Blender 2.8 and above, the Khronos glTF 2.0 importer/exporter is enabled by default. If you don't see this, check out <a href="https://github.com/KhronosGroup/glTF-Blender-IO" target="_blank" rel="noopener noreferrer">the official documentation</a> for more instructions.

**Note:** Some Blender features may not yet be compatible with the glTF exporter.

To export your model, use the `File` -> `Import/Export` -> `glTF 2.0 (.glb, .gltf)` menu button.

It's preferable to export your Blender content as a `.glb` file where possible. This is a single binary file that can be easily shared and packaged. In contrast, a `.gltf` file is a JSON file with all the content data encoded as Base64, useful when sharing data over a plain-text-only connection. See <a href="https://docs.blender.org/manual/en/2.83/addons/import_export/scene_gltf2.html" target="_blank" rel="noopener noreferrer">the Blender docs</a> for more details.

The linked Blender documentation also details how to configure your materials for glTF.

## 2. Package your glTF file as an XRPackage

See [Create your First XRPackage](./2-creating-an-xrpk.md) for full details on how to build your package. A condensed version follows.

### Via the web interface

1. Visit the <a href="https://xrpackage.org/inspect.html" target="_blank" rel="noopener noreferrer">xrpackage.org/inspect.html</a> page

2. Click the `Create from file` button and choose your new exported `.glb` file

3. Click the `Actions` tab, then the `Export package` button to download a `.wbn` package for your model:

> ![XRPackage.org/inspect.html Actions tab](/img/xrpackage-inspect-actions-tab.png)

### Via the CLI tool

1. Install the <a href="https://github.com/webaverse/xrpackage-cli/" target="_blank" rel="noopener noreferrer">`xrpk` CLI tool</a>:

   `npm install -g xrpk`

2. Change your working directory to the one with your new glTF file:

   `cd my-awesome-creation/`

3. Build the file into an XRPackage:

   `xrpk build my-exported-model.glb`

This will package and automatically generate a `.wbn` file that you can now share and import into the Webaverse ecosystem.

Regardless of the method you choose to build your XRPackage, you can now read the [Distributing XRPackages](./3-distributing-xrpackage.md) section for more details on how to share your content!
