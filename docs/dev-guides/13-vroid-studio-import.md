---
id: importing-from-vroid-studio
title: Import From VRoid Studio
---

This guide explains how you can export your avatar from <a href="https://vroid.com/" target="_blank" rel="noopener noreferrer">VRoid Studio</a> to bring it into the Webaverse ecosystem.

The easiest way to do this is to export your avatar into <a href="https://vrm.dev/en/" target="_blank" rel="noopener noreferrer">VRM format</a>, and then package this `.vrm` file into an XRPackage `.wbn` bundle.

## 1. Export your VRoid Studio avatar as a VRM file

To export your model, click the "Camera/Exporter" tab at the top of the program:

> ![VRoid Studio "Camera/Exporter" tab](/img/vroid-studio-1-camera-exporter-tab.png)

You can find out more about the Camera/Exporter tab at the <a href="https://vroid.pixiv.help/hc/en-us/articles/360012474773-Camera-Exporter" target="_blank" rel="noopener noreferrer">the VRoid site</a>.

Click the "Export" button in the panel on the left:

> <img src="/img/vroid-studio-2-export-btn.png" width="30%" alt="VRoid Studio 'Export' button" />

You can tweak any mesh, material, or bone reduction settings you want in the panel on the right.

Click "Export":

> <img src="/img/vroid-studio-3-export-panel.png" width="20%" alt="VRoid Studio 'Export' panel" />

You can now fill in any final details in the "VRM Settings" popup, and click "OK" to export the avatar as a `.vrm` file.

> <img src="/img/vroid-studio-4-vrm-settings.png" width="40%" alt="VRoid Studio 'VRM Settings' popup" />

After clicking "OK", you will need to choose a location on your computer to save the exported file to.

## 2. Package your VRM file as an XRPackage

See [Create your First XRPackage](./2-creating-an-xrpk.md) for full details on how to build your package. A condensed version follows.

### Via the web interface

1. Visit the <a href="https://xrpackage.org/inspect.html" target="_blank" rel="noopener noreferrer">xrpackage.org/inspect.html</a> page

2. Click the `Create from file` button and choose your new exported `.vrm` file

3. Click the `Actions` tab, then the `Export package` button to download a `.wbn` package for your model:

> ![XRPackage.org/inspect.html Actions tab](/img/xrpackage-inspect-actions-tab.png)

### Via the CLI tool

1. Install the <a href="https://github.com/webaverse/xrpackage-cli/" target="_blank" rel="noopener noreferrer">`xrpk` CLI tool</a>:

   `npm install -g xrpk`

2. Change your working directory to the one with your new glTF file:

   `cd my-awesome-avatar/`

3. Build the file into an XRPackage:

   `xrpk build my-exported-avatar.vrm`

This will package and automatically generate a `.wbn` file that you can now share and import into the Webaverse ecosystem.

Regardless of the method you choose to build your XRPackage, you can now read the [Distributing XRPackages](./3-distributing-xrpackage.md) section for more details on how to share your content!
