---
id: bake-physics
title: Bake Physics For 3D Model
---

This guide explains how you can export your 3D content from Blender to bring it into Webaverse with physics baked in for automatic collision detection.

## Automatic Method

The web interface now supports automatic baking of physics for 3D files uploaded to [mint](https://webaverse.com/mint).

![Physics debug enabled in a world](/img/collision.jpg)

The physics debug key is tilde \` to preview, the blue areas represents walkable collision surfaces. No need to custom generate a navmesh!
 
## Manual Method

### Prerequisites
- Have a `.glb` file you want to bake physics for
- Have [npm installed](https://www.npmjs.com/get-npm)


#### 1. Goto https://utils.webaverse.com

At [https://utils.webaverse.com](https://utils.webaverse.com).

#### 2. Click "Choose file" and pick your `.glb` file

#### 3. Click submit 
 
After clicking submit, put the given .bin in a new folder with your .glb file.

#### 4. Install xrpk

Install xrpk via npm by running `npm install -g xrpk` in your computer's terminal.

#### 5. Create a manifest.json

Create a manifest.json in that folder with a `physics_url` field pointing to that `.bin` file. [See the manifest API docs for more info.](../developer/manifest-api#physics_url)

#### 6. Build the xrpk

In that folder, run `xrpk build .`, it should then give you a `.wbn` file. That is your `.glb` + `.bin` physics bake in one file.

#### 7. Mint and load the `.wbn` into Webaverse!
