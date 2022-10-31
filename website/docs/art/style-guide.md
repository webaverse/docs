---
id: style-guide
title: Style Guide
---
# Style Guide

The purpose of this style guide is to act as a set of guidelines for asset creation so that we can have a consistent style and theme for all assets, regardless of the creating artist.

This guide will be expanded on as needed and as the project progresses.

---

## Context

The Webaverse project is an extremely ambitious one.

We are aiming to build a fun 3D multiplayer game on the web (webGL), which means we are targeting a broad range of devices. One of the biggest considerations in game dev is FPS, and given the limitations of the medium in which we are working, we need to be very conscious of the technical output constraints.

With each asset, we should come at it with the approach of trying to make an aesthetically pleasing asset that serves both the player *and* the unique engine in which we are building, meaning that we should have optimization at the forefront of our design process.

---

## Scale

All environmental assets that the player will interact with directly should be developed with real-life scale in mind. We are using **meters** as the standard unit of measurement, so please make sure that your Blender settings are updated accordingly.

For example, doors will average about 2.1 meters tall, characters will averge between 1.5 and 1.8 meters tall, railings are around 1 meter tall, and so on. Since the app will ultimately be VR, we need to have *roughly* lifelike scales.

Some assets can bend the rule in the name of stylization, for example small interactive objects such as cups or cell phones may be made larger-than-life scale for easier interactivity.

---

## Style Influences

There are three main sources that we will be pulling visual design inspiration from:

### The Legend of Zelda: Breath of the Wild
![](https://i.imgur.com/D1p8O6d.jpg)
![](https://i.imgur.com/f3KBuKo.jpg)
![](https://i.imgur.com/KMsFncp.jpg)
![](https://i.imgur.com/E1f3TYP.png)  

The open, nature-filled environments, distinct zones, and clear, concise shape design will act as a primary influence for our design language going forward. Since this game was also optimized for Switch, we can reference some of the creative ways that the team worked around technical limitations to create a beautiful game.

---

### No Man's Sky
![](https://i.imgur.com/pcHMds8.png)
![](https://i.imgur.com/BgayLC7.png)
![](https://i.imgur.com/TEZ66tD.jpg)  

We'll be taking influence from the bold, saturated and often unexpected colors, as well as the futuristic feel to the environments and shapes. The shape design is simple and bold, and fits with the more modern look of the game we are building.

---

### Sonic 3
![](https://i.imgur.com/0kZLTFs.png)
![](https://i.imgur.com/te0n8lz.png)
![](https://i.imgur.com/nBICISD.png)  

The biggest things we'll be taking from Sonic are the very distinct feeling of different zones and the simple shape design/silhouettes. Since the Sonic team needed to work with very limited resources, the palettes and shapes are all simple and carefully chosen. We'll be trying to carry that across in Webaverse, and by extension, Upstreet.

---


## Colors
We'll use this palette as a guideline - when texturing or painting, try to start with colors from this, then tweak them as needed. That should ensure cohesion throughout all assets. If you can get away with using colors from here directly, then even better.

![](https://i.imgur.com/vd4Y4eE.png)
![](https://i.imgur.com/1XfvsCk.png)  

Palette files for Gimp, Photoshop, Paint, etc... can be found in this folder: [Palette Files](https://drive.google.com/drive/folders/1JMhDofOIrJPb_Wl4ia_tWRdnGMn2UTUC?usp=sharing)

This is concept art from BOTW with the colors changed to match our palette, as a style test.
![](https://i.imgur.com/yhLVw9n.jpg)

Each zone/environment will have 1-2 'main' colors that define it. Other colors in each zone can be slightly lower saturation or more muted. The main colors will be chosen from this palette for each zone to best match the zone's feel and mood.

---

## Geometry
Geometry should be kept simple and 'chunky', with any tertiary or fine details kept to the textures. Objects should have a strong silhouette with a clear 1-2-3, or Big-Medium-Small read.

![](https://i.imgur.com/vQXBTFw.png)

![](https://i.imgur.com/nA9poC4.png)

![](https://i.imgur.com/llTNPeO.png)

---

## Materials
Materials should read clearly as what they are, and should be recycled as much as possible for each zone. For example, wood in Zone 0 should all look similar, maybe only with slight differences to the material.

Tertiary detail should be in the textures and materials, rather than the geo, but should still be kept fairly clean. High amounts of noise will disrupt the read; stick with subtle detail and variance instead.

![](https://i.imgur.com/XkvYS53.jpg)

Material types should read clearly at first glance, and should have a fairly simple one-word descriptor that could define them. "Stone", "Wood", "Iron", "Glowing", etc...are all good descriptors. If a material has to be described in more detail, "hexagonal grid with flowers and a lighting pattern", we should simplify it or break it into separate mats/meshes.

---

## Animations
Animations should be either baked into the GLB, or in the case of character animations, in .FBX format on a skinless Mixamo rig. All bone names should match, with the character animation bone prefix being **mixamorig.BoneName**

---

## Export Requirements
Exports will be heavily based on the type of asset being exported. Some general guidelines, though:

Props and Environments - GLB, limited textures, limited polys dependent on asset type
Animations - FBX on a skinless Mixamo rig as discussed above
Characters - VRM export through Unity, max 2 textures, less than 12k polys

---

# Zone 0
![](https://i.imgur.com/nOCihEA.jpg)

---
