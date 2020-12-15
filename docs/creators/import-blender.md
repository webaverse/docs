---
id: import-blender
title: Import From Blender
---

This guide explains how you can export your content from Blender to bring it into Webaverse.

The easiest way to do this is to export your Blender model into a <a href="https://www.khronos.org/gltf/" target="_blank" rel="noopener noreferrer">glTF format</a>, and then mint this `.glb` file.

## 1. Export your Blender model as a `.glb` (binary glTF) file

As of Blender 2.8 and above, the Khronos glTF 2.0 importer/exporter is enabled by default. If you don't see this, check out <a href="https://github.com/KhronosGroup/glTF-Blender-IO" target="_blank" rel="noopener noreferrer">the official documentation</a> for more instructions.

- To export your model, use the `File` -> `Import/Export` -> `glTF 2.0 (.glb, .gltf)` menu button.

> ![Blender export to gltf menu option](/img/blender-1.png)

**Note:** It's preferable to export your Blender content as a `.glb` file where possible. This is a single binary file that can be easily shared and packaged.

- Select the `glTF Binary (.glb)` file format 
- To further optimize your file size go to `Geometry` dropdown -> `Images` -> `JPEG Format (.jpg)`

> ![Blender optimize to jpeg save menu option](/img/blender-2.png)


- Click `Export glTF 2.0` to save your file to your computer

## 2. Mint your `.glb` file as an NFT

See [How To Mint NFTs](./mint.md) for how to mint the `.glb` file you exported above.
