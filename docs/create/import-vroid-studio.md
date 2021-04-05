---
id: import-vroid
title: Import From VRoid
---

Webaverse uses [VRM](https://vrm.dev/en/), a cross-platform 3D avatar file format with features such as blendshapes for emotes, facial animations, spring physics, eye gaze, and embedded license information. VRM is based on the royalty free glTF2.0 standard and are widely supported across dozens of [applications](https://vrm.dev/en/vrm_applications/), such as:

- [Cluster](https://cluster.mu/) - PCVR, Windows, macOS, iOS, Android
- [Craftopia](https://store.steampowered.com/app/1307550/Craftopia/) - Steam
- [VRAST!](https://rc-cobalt.booth.pm/items/1756359) - Windows
- [VseeFace](https://www.vseeface.icu/) - Windows
- and more: https://vrm.dev/en/vrm_applications/

This guide explains how you can export your avatar from [VRoid Hub](https://hub.vroid.com/en/) and [VRoid Studio](https://vroid.com/en/studio/ to bring it into Webaverse.

## Download from VRoid Hub

VRoid hub is a place where people can upload and share their VRM avatars to each other. You can filter through the latest characters for downloadable files here: https://hub.vroid.com/en/models.

Double check the conditions of use before you download the model. Also, VRM files carry the license and authorship information inside the file itself.


## Export your VRoid Studio avatar as a VRM file

![Vroid studio steps](/img/vroidstudio.jpg)

1. Click the "[Camera/Exporter](https://vroid.pixiv.help/hc/en-us/articles/360012474773-Camera-Exporter)" tab at the top of the program:

> ![VRoid Studio "Camera/Exporter" tab](/img/vroid-studio-1-camera-exporter-tab.png)

2. Click the "Export" button in the panel on the left:

> <img src="/img/vroid-studio-2-export-btn.png" width="30%" alt="VRoid Studio 'Export' button" />

3. You can tweak any mesh, material, or bone reduction settings you want in the panel on the right. Since Webaverse runs on web browsers, we recommend reducing the polygons with the sliders, bring materials down to 2 with 2048 resolution, and reducing the bones as much as possible. 

4. Click "Export":

> <img src="/img/vroid-studio-3-export-panel.png" width="20%" alt="VRoid Studio 'Export' panel" />

You can now fill in any final details in the "VRM Settings" popup, and click "OK" to export the avatar as a `.vrm` file.

> <img src="/img/vroid-studio-4-vrm-settings.png" width="40%" alt="VRoid Studio 'VRM Settings' popup" />

After clicking "OK", you will need to choose a location on your computer to save the new .VRM exported file to.

## 2. Test your avatar

In order to preview your avatar is working, open the [Webaverse 3D app](https://app.webaverse.com) and simply drag n' drop the VRM file into the browser window to spawn it.

To change avatars you have to look for the bounding box to select the object (usually located by the VRM's feet) by pressing `e`, then press `g` to activate.

## 3. Mint your VRM file as an NFT

See [How To Mint NFTs](./mint.md) for how to mint the `.vrm` file you exported above.
