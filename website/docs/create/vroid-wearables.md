---
id: vroid-wearables
title: VRoid Wearables
---

**Download first: https://vroid.com/en/studio**

This guide is to teach you how to customize a VRM avatar that was created in [VRoid studio](https://vroid.com/en/studio). If you downloaded a VRM file from [VRoid Hub](https://hub.vroid.com/) and wanted to bake accessories into it scroll down below.



<iframe width="100%" height="400" src="https://www.youtube.com/embed/o35seFI-8f0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
Note: Check the description for links!

---

## How to add custom clothes

First open VRoid Studio and go to the clothing tab. Check out the different presets available and play with the sliders to get a feel for editing the base. Then go to the texture tab. Layers are similar to the layers in programs like Photoshop or Gimp.


Customing VRoids involves mostly image editing the textures for each wearable type. You can right click a layer to import/export a clothing texture. For sample files of all the different clothes check out: https://github.com/madjin/vrm-samples/tree/master/vroid

You can edit the clothing files in an image editor then import it back to VRoid studio via a layer.

1. Go to the clothing tab
2. Pick tshirt top and go to texture
3. Right click the Layer and import the new tshirt texture

![](/img/import_shirt.jpg)


When finished, go to the export tab on the top right and hit export. See the [export avatar from VRoid Studio](./import-vroid#export-your-vroid-studio-avatar-as-a-vrm-file) guide for more details.

Done!

## Wearables


**Pre-requisites**

- https://docs.unity3d.com/Manual/GettingStartedInstallingHub.html - Unity Hub
- https://github.com/vrm-c/UniVRM/releases - Download the latest `.unitypackage`
- https://www.blender.org/ - Incase you need to convert or optimize files

1. Install Unity (I usually get version [VRChat recommends](https://docs.vrchat.com/docs/setting-up-the-sdk)) and open Unity Hub
2. Start a new project
3. Go to Assets > Import Package > Custom Package...
4. Import the uniVRM unitypackage
5. Go to VRM0 > Import and select your VRM file
6. Drag and drop accessories you want to add into the Assets
7. Drag the VRM from Assets into Hierarchy
8. To add something like a hat expand Root out until you see the Head
9. Drag the hat onto there to parent
10. By default the wearable will probably be offset to wrong location, use the gizmos to adjust into place

![](/img/add_hat.jpg)

When you're finished, go to VRM0 and select Export UniVRM at the top. Drag the gameobject then fill out the appropriate fields to export your VRM with baked in accessories.




### Notes

Cut and sew is done with alpha channels, so if you wanted an open jacket you would edit the texture to be transparent in the middle.

![](/img/transparent_shirt.jpg)

- https://vroid.pixiv.help/hc/en-us/articles/360012340534-Clothing-Editor
- https://www.youtube.com/watch?v=fgJdIFQaxks