---
id: importing-from-unity
title: Import From Unity
---

This guide explains how you can export your content from <a href="https://unity3d.com/" target="_blank" rel="noopener noreferrer">Unity 3D</a> to bring it into the Webaverse ecosystem.

The easiest way to do this is to export your content using the <a href="https://github.com/webaverse/unity-webxr-export-plugin" target="_blank" rel="noopener noreferrer">XRPackage Unity WebXR Export plugin</a>. This will build your WebXR project to produce a single XRPackage `.wbn` bundle.

## 1. Setup your Unity project for WebXR

Before you can export your project as an XRPackage `.wbn` file, you need to make sure your project is configured for WebXR.

Follow the steps in the Webaverse <a href="https://github.com/webaverse/unity-webxr-export-plugin/blob/master/docs/project-setup.md" target="_blank" rel="noopener noreferrer">`unity-webxr-export-plugin` documentation</a>, up to the build section (we will do this later!).

## 2. Export your content as an XRPackage .wbn bundle

Once you have configured your XRPackage for WebXR, you can export your project as an XRPackage `.wbn` file.

### Via the XRPackage exporter plugin

The plugin is currently undergoing a remake to better support modern Unity features.

Whilst the plugin is being rebuilt, you can download a ZIP file of the plugin and copy <a href="https://github.com/webaverse/unity-webxr-export-plugin/tree/master/Assets" target="_blank" rel="noopener noreferrer">the `Assets` folder</a> into your project's `Assets` directory.

Once this is done, Unity will automatically detect the changes and reload the window, adding the following toolbar icon to the menu bar:

> ![Unity XRPackage Exporter toolbar icon](/img/unity-exporter-1-package-app-btn.png)

This will package and automatically generate a `.wbn` file in the `Build` folder of your project, that you can now share and import into the Webaverse ecosystem.

### Manually

If you would prefer to package your app manually, you can do so via the terminal/command line! See [Create your First XRPackage](../developer/creating-an-xrpk.md) for full details on how to build a package manually. A condensed version follows.

1. Install the <a href="https://github.com/webaverse/xrpackage-cli/" target="_blank" rel="noopener noreferrer">`xrpk` CLI tool</a>:

   `npm install -g xrpk`

2. Build your Unity3D project: `File` > `Build Settings` > `Build`:

> ![Unity Build panel](/img/unity-exporter-2-manual-build.png)

3. Change your working directory to your build folder

   `cd my-awesome-unity-app/Build/`

4. Initialise your XRPackage manifest/project:

   `xrpk init`

   Answer the relevant questions, or hit `Enter` straight away to use the defaults.

5. Build the directory into an XRPackage:

   `xrpk build . my-xrpk.wbn`

This will package and automatically generate a `my-xrpk.wbn` file that you can now share and import into the Webaverse ecosystem.

Regardless of the method you choose to build your XRPackage, you can now read the Distributing XRPackages section for more details on how to share your content!
