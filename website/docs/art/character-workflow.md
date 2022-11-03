---
id: character-workflow
title: Character Workflow
---
# Character Workflow

## Software Requirements and Setup


![](https://i.imgur.com/pa5kwIh.png)

### Blender
* [Download Blender](https://www.blender.org/download/) ![](https://i.imgur.com/ci4ctnb.png)

* Install and run!

* **Required Blender addons**

  * [CATS Blender Plugin](https://github.com/GiveMeAllYourCats/cats-blender-plugin) ![](https://i.imgur.com/jav8XrW.png)

  * [VRM Addon for Blender](https://github.com/saturday06/VRM_Addon_for_Blender) ![](https://i.imgur.com/jav8XrW.png)

* **!** `Optional, nice to have is the` [VRoidBones](https://github.com/cmd410/VRoidBones) `plugin - it can streamline renaming bones in Blender, connecting them up correctly, etc. `


* Save to 'Blender Addons' folder in location of choice 

:::note

do NOT unzip files

:::


* Open a new Blender file.
 
* Press A (Select All) > Delete key. (This will remove everything in the scene)

* Go to Edit > Preferences  
![](https://i.imgur.com/pdkmYRb.png)

* Go to Add-ons > Install (top right) > location of Blender Addons.  
![](https://i.imgur.com/xGs0JDU.png)

* Install the CATS plugin and enable it with the check box.  
![](https://i.imgur.com/nUcCjUX.png)

* Install the VRM Addon for Blender and enable it with the check box.  
![](https://i.imgur.com/NHFgfrg.png)

:::caution

**Make sure your preferences are saved!**

:::

* **!** `Click the 3 bar icon in the bottom left` ![](https://i.imgur.com/ob7j5QS.png)
`and select Save Preferences.`

* Save Preferences and exit the window. 

**This concludes the Blender setup! You should now be ready to import models as you need to, including VRMs.** 

---

### Unity

We currently use Unity for handling VRM exports due to limitations of the experimental VRM exporter for Blender. We use a Unity install as well the [uniVRM plugin](https://github.com/vrm-c/UniVRM/releases) to handle VRMs.


We suggest managing Unity installs via 
[**Unity Hub.**](https://unity3d.com/get-unity/download)

We will need to install the correct version of Unity for uniVRM - this can be checked at the above uniVRM plugin releases page. At time of writing, it is the **2019.4 (LTS)**  

![](https://i.imgur.com/WvgrL8v.png)  

![](https://i.imgur.com/LLDJfyq.png)  

:::tip

***[uniVRM plugin](https://github.com/vrm-c/UniVRM/releases) is required***

:::

---

## Initial Concept 

Character concepts are based on their AI gen. backstory and the existing world lore - we run Pinterest passes and concept ideas based on those in the Lore.

Concepts should follow the Style Guide.

Respect should be given in regards to the style influences of the project - they will heavily influence concept input, as well as decisions modelling. 

(Eg. - we are drawing inspiration from Breath of the Wild and Sonic 3, so designs should be toon focused, with strong geometric shape language, and high contrast / saturation colors, stylized materials / geo.)

Colors should be respected in the same manner. Interally we have a [selection of files](https://drive.google.com/drive/folders/1JMhDofOIrJPb_Wl4ia_tWRdnGMn2UTUC) to service this color palette (Note - I added in a .blend with the palette loaded in also).

![](https://i.imgur.com/PAPQETr.png)

---

## Concept Art

Concept art is an important part of the process - figuring out ideas in 2D first will really help with the translation to 3D.

When this design is finalised, having orthographic modelling images made by a concept artist also helps a ton. 

These orthos do not have to be in color, but should be consistent and neutral in posing and expression. 
Physics enabled objects should be shown in inital state (little to no gravity pull) 

*eg. this rear jacket would be pulled down by gravity, but when initally modelled will be 'floating'*

![](https://i.imgur.com/udGX8Vw.jpg)

---

## Base Model 

Once designs are locked in, then we can create our base model for the character. 

This stage includes the hair design and rigging. 

We are currently using VRoid Studio for base models, since they were a simple way to iterate on different minor tweaks, (facial expressions, proportions, etc). 
This is not a _requirement_; it simply speeds up iteration time and allows for some implementation of market products from BOOTH if required, as well as making it easy to edit for an end user. 

---

### Setup

Some settings should be changed for visual consistency between this stage and the Blender import.
By default heavy shader effects are used (which do not port across) - rim lighting, outlines, etc. 

We should disable all of these in the **General Editor**, by applying the following settings.: 

![](https://i.imgur.com/5AV4nhK.png)


We then enable the Base Model preset in the **Clothing Editor.**

![](https://i.imgur.com/3d6bkfr.png)


This will remove the uneeded clothing meshes - we just want the base model. 

---

### Body 

Now we're all set, we can start matching the model to orthographics, proportioning etc for the Body. 

:::note
 
- *When / if moved to traditional modelling, we would be using an in-house basemesh to start from, following the same practices. (loading orthographic references)*

:::

Using the references, and the different categories in the editor here, we should match proportions. 

![](https://i.imgur.com/EUoWPPO.png)

There are several different categories and modifiers here to use as appropriate. This stage is fairly self explanatory, but requires a keen eye and attention to the original references. 

![](https://i.imgur.com/MaibRIO.png)

The same applies as above for the face. Facial adjustments should be made here to match as closely as possible. *We will likely make several further adjustments in Blender, but using these first makes it a little easier.  

![](https://i.imgur.com/sWXohxw.gif)

- *It may be beneficial to do some basic placeholder texturing at this stage to get a better idea of how the final model will look - clear the textures and draw in some block colors as placeholder*

- *If artists wish to do all textures here, they can, but we are limited to diffuse only texturing - no PBR workflow, and the texture suite present here is not ideal.*

---

### Expressions

Expressions for the face can be set and customized prior to export - 
In the **Face Editor**, under *Expression*, the expressions can be changed to use a combination of values, decrease / increase parameters. The shown expression will be equal to the max value of the selected expression on the left menu. 

- For example, here we have combined different values to create an expression for JOY. 


![](https://i.imgur.com/hJ7tVQo.png)


> - *On Blender import, these expressions will be listed as shapekeys in the Face mesh, under these keys:*

![](https://i.imgur.com/WLj8Nyn.png)

---


### Hair

Hair is a more time consuming and complex part of the character process. 

VRoid Studio does have a pretty good suite of tools to make it, with some caveats. It has a key strength in that it can easily be rigged in-app, so for fast iteration, this is a good choice. 
(Plus, it will be conformal to the head we've made)

We should start by removing any shading effects on the hair material - these will not export, so again, we should remove them for a more realistic preview of the hair: 

![](https://i.imgur.com/IAUChsf.png)

In avoidance of going too in-depth for the scope of this guide, hair has a lot of operators, and is similar to other curve based hair tools - there are controls for profile, width (U) and thickness (V).

You draw the curves with your desired design, and can manipulate the cage object they are projected on for offsetting the hair. 

Wider, thicker strands are easier to control and will look more consistent, as well as being substantially lower in poly count than a traditional strand technique. 

:::note

Two points for using this method:
 
- simply put, it is the most style accurate, and easy to iterate with. We can get a rough runtime preview (albeit in the Unity engine) making hair here - making low bone / poly count physics hair is very important for our artstyle. 

- three.js supposedly has bad shadow drawing for translucent / cutout materials - while we could use similar methods to hair cards ("game hair"), we should consider the potential performance hit of stacking multiple alpha geo on top of itself

:::

---

#### Hair Rigging

Currently this is done in VRoid Studio. This allows us to see a good preview of how the rigging will work in-app, importantly allow us to spot any buggy geo or how a design looks in motion. 

Rigging hair in VRoid is done by selecting hairs and assigning them to a Bone Group.
This is assigning specific hair geometry to bones. 

The number of bones should be kept low - in some cases, for minor detail hair, one is enough. 

Medium length sections of hair will likely need a maximum of three, but two is usually enough.

Longer hair should largely be gauged on it's length, and if able, combine it with other groups. 


The 'fixed point' of the bone chain defines where the root of first bone in the chain is. This is the point the bone transformation will happen, so make sure it is correct and adjust as required (eg. layers of hair underneath will likely want this with a higher value, so layers move uniform)
![](https://i.imgur.com/YoPXVYe.gif)

:::note
 
- Ignore the physics parameters for now. They'll look different in-app, so we shouldn't debug here

- The weight painting of the hair rig is usually fantastic - have never encountered any bugs. 
  Normally this is a really time consuming process, so this is great!

:::

---

### Exporting

Once these are finished, we can *save the project* and also export the VRM. There are some parameters we should test here, and some export optimizations we can do too. 

---

#### Polygon Reduction

These tools are effectively decimation and polygon optimization tools.  

![](https://i.imgur.com/4PWNzSB.png)

The first two checkboxes *can* be useful. 

Edit Hair Cross Section appears to optimize the profile of the hair curves, and will often result in a reduced hair polycount without changing things visually at all. **It is advised to use this setting if it doesn't change anything visually.**

Delete Transparent Meshes will attempt to remove geometry that does not have assigned paint on textures - effectively, it tries to remove tris that would be alpha masked out. This is largely a tool for clothing, as clothing variations are typically done with (extensive) alpha masking. 

**It is not advised to use this setting unless necessary.**

*Hair Smoothness:* reduces resolution of hair globally. **Consider usage, if visuals are largely unharmed, and polycount is reduced by a good amount.** 

*Hair, Face, Body, Clothing*: Hard decimation of geometry for respective mesh types. **Do *not* use this.**

Currently we do *not* do these optimizations here, as it is a destructive change - by default the body and face meshes are a good poly count as is. 

Alongside this, they also damage the edge flow (important for deformation & animation) as they are raw decimation passes rather than dissolving unrequired edges, etc. 

---

#### Material Reduction

By default, VRoid models have quite a high material count - one of the goals of Webaverse's content is that it is lightweight in filesize and performance draw - thankfully we can easily reduce the material count here before we export it.

Using these settings will result in a material atlassed for the body and any present clothing, and an atlas for face and hair. This is good as it'll seperate the alpha passed material into it's own texture set, and retain the body in it's own. 

It will also reduce the texture size down to two single 2k textures, but we will be doing the material work inside of Substance Painter anyway, where we have control over the final export size. 
![](https://i.imgur.com/cFIY5Tw.png)

If there are other queries not covered so far regarding VRoid Studio, or some more basic tutorials are needed, then I suggest checking the [official site](https://vroid.pixiv.help/hc/en-us/sections/360000076642--Basic-Tutorials) 

---

#### Export from VRoid

Once these are set, we can go ahead and export the base model. If you wish to set these parameters, you can, but we will be changing them anyway in our final VRM export. 

![](https://i.imgur.com/B0hNJd5.png)


You are required to set a name and author, so fill those in. 

---


### Import to Blender

If Blender has been configured correctly as instructed above, importing a VRM is very easy!

Open a new project for the character. 

go to **File > Import > VRM** and import the character. 

![](https://i.imgur.com/wLFv6wM.png)

The VRM should then be imported!

---

#### Cleanup

Some basic cleanup and optimization can be done on the character before we do anything else. 

The body will import with overlapping vertices. This adds unnecessary polygons. We can fix this in Edit Mode, by selecting all, and running a **Merge By Distance (F3> search 'Merge')**. This will merge overlapping verts / removing 'doubles'.

After that we should recalculate the normals. With everything still selected, press **Alt + N**, select Reset Vectors. 


We can also remove areas of mesh that aren't used. Typically this is the lower lash geo, the eye highlight geo, and the internal "XD" expression geo. Simply select a vertex on each, and press Ctrl + L, then right click and select Delete Vertices. Make sure you've only got what you wish to delete selected. 

Material names can be cleaned up here too, as well as switched over to Principled BSDF if using PBR texturing. 

![](https://i.imgur.com/N62OZ3W.png)
![](https://i.imgur.com/zCa1MJJ.png)

If so, move to the Shading tab: 
![](https://i.imgur.com/JLXy3S5.png)

And reconnect the texture to the nodes. Color to Base Color, Alpha to Alpha.
![](https://i.imgur.com/cFNkp6v.png)

Be sure to set it Alpha Clip in the Material Settings: 

![](https://i.imgur.com/X0AGVMM.png)


Colliders and their relevant collection can be removed, since they do not transfer over correctly when we move to Unity. 

(This may be subject to change as the Blender VRM exporter develops.)

![](https://i.imgur.com/FUGR6PH.png)

We can also optionally cleanup the **Armature** here - I advise doing this as it will make it a) more human readable and b) respect Blender's naming scheme for mirroring. 

The easiest way to do this is using the `VRoidBones` addon. 

With it enabled: 

Enter **Edit Mode** with that Armature selected.

In the side panel on the right, there should be a panel added with the following

![](https://i.imgur.com/h4S4VDg.png)


Select **Fix Armature** with these settings enabled. 

We need to re-add end bones for any bones we intend to be physics bones (hair, skirts, etc).

Change the pivot point and orientation to Normal and Individual Origins at the top of the window. 

![](https://i.imgur.com/Y8IQgI4.png)


Press **E** and **Y**, and move till they are roughly the same size as the previous bone. 
This will add an extra bone in line with the previous end bones, which is necessary for correct physics rotations with the VRM Spring Bone component later. 

---

### Export From Blender

You can export vrm models directly from blender using a VRM Add-on. The add-on can be found over at https://github.com/saturday06/VRM_Addon_for_Blender .

:::note 

This part of the tutorial assumes you already have an avatar / know how to make an avatar already and that you know how to install blender add-ons. If none of those apply to you, this may be confusing.

:::

| ![](/img/bldr_vrm_export4.png) |
| :-- |
| <b>The addon comes with a default humanoid rig that may help speed up the process of avatar creation. This is not super important, but it is nice to know that it exists.</b> |

| ![](/img/bldr_vrm_export7.png) |
| :-- |
| <b>To access the VRM properties you can select the rig then go into the object properties tab.</b> |

Lets now go over each option and what to do with each one.

#### VRM Meta

![](/img/bldr_vrm_export5.png)

| Section Title | Description |
| :-- | :-- |
| Thumbnail | This is where you navigate to a image of your model for preview purposes. |
| Title | This is where you put the name of your model. This is important to put and should not be left blank. |
| Version | What version of the model are you working on? Keeping the format simple here can help manage your versions. v1.0, v2.0, v2.1… ect. This also should not be left blank. |
| Author |  Put who made the avatar here. This is also important to not leave blank. | 
| Contact Information | If you have a website or email where people can reach you at for questions or inquiries about your model you can put it here. This is ok to be left blank. | 
| Reference | This one is a bit up to interpretation, But it is an additional box to put in a website or external link. This can be left blank. | 
| Allowed User, Violent Usage, Sexual Usage, Commercial Usage | All of these should be appropriately filled out with the intent of the model and how its allowed to be used. |
| License | This is where you define the copyright of the model. |

---

#### VRM Humanoid

![](/img/bldr_vrm_export9.png)

In the VRM 0.x Humanoid section you will define what bones should be what parts of the humanoid rig. The head should be the head, the right arm should be the right arm… etc.

If you don't already have your model in a T-pose, you will need to either set them in a t-pose as the rest pose. Or create a pose in your pose library to be used as the T-pose. If you have that, this is where you would specify that.

![](/img/bldr_vrm_export2.png)

VRM has two sets of bones, Required Bones, and Optional Bones. As the names suggest, You need to have all of the required bones in order for your model to work. And the optional bones are bones you can have or not have based on the design of your model.

![](/img/bldr_vrm_export12.png)

After all of the bones are the arm and leg adjustments. These are usually ok to be left as their default values.

---

#### VRM Blend Shape Proxy

![](/img/bldr_vrm_export13.png)

Next up is the VRM Blend Shape Proxys. All blendshapes are optional and do not effect the functionality of the model, but do add the fun facial expressions and lip syncing. If you have facial emotions and visiems(mouth shapes that represent different sounds like “ah” “oh” “ch”.)  set up on your model, This is where you assign them. 

Expand the blend shape, then expand the Binds, then click on +Add Blend Shape Bind.

![](/img/bldr_vrm_export8.png)

Here you can select the mesh you want, then the shape key associated with the blendshape. After that make sure you set the Weight of the shape key to 1 (or whatever is appropriate for your model) otherwise the shape key will not activate even after being assigned.

Repeat this for every blendshape in this list if you want your avatar to have the full range of facial expressions. Webaverse, on the other hand, only requires the following blendshapes.

![](/img/bldr_vrm_export11.png)

The ones crossed out in red are not required for Webaverse.

---

#### VRM First Person

This part is an optional part, If your character does not have eyes, or if they do have eyes and you don't care that they soullessly stair straight forward all the time. Then don't worry about it. But If you would like your character to have lively eyes that can observe the world around them. Then its worth it to figure out proper values.

![](/img/bldr_vrm_export10.png)

The First person bone offset values should be the point between your character's eyes. The default values are enough for Webaverse.

![](/img/bldr_vrm_export1.png)

These boxes define the curve and range of the eye movements. This is entirely dependent on your specific character's eyes and how they are set up.

Editors note: “This is hard to visualize due to it being pure numbers. I would recommend that if this is important to your model that you export the model from here and use the unity export method, Unity provides visual information and live feedback to tweak these settings appropriately.”

---

#### VRM Spring Bone

![](/img/bldr_vrm_export3.png)

If you have spring bones and colliders. This is where you assign those.

---

#### Final VRM Export

So after everything is nice and set up nicely how you want it. Go ahead and navigate over to File - Export - VRM. Then simply select the location you would like to save it to. And presto! You have successfully used Blender to export your model as a VRM.

![](/img/bldr_vrm_export6.png)

---

## Clothing

### Modelling

Clothing can be added depending on individual artist's workflow, but since we have the end goal of web compatible content that's performant, I find it best to work in low-poly first (polymodelling), and bake in details later via multires sculpting, and texture work in the material process. 

The low poly model should communicate the base shapes from the concept art - avoid adding too much detail initially. 

![](https://i.imgur.com/qdEJVSA.jpg)

Adding detail via multires for baking in Substance here is recommended, but it may be a good idea to weight paint / skin the existing low poly beforehand to test. 

**Data Transfer** is typically the easiest way to do this. 

---

### Skinning / weight painting

It is a good idea to do some weight painting early in the process to get a rough idea of how th clothing will deform, and if it will require any geometric changes, as well as in extreme cases, design changes. 

Since our base mesh is already weighted to a rig, we can use that skinning data to provide a rough weight paint for the clothing. 

Add a **Data Transfer** modifier to the clothing, select the Body as the source, select *Vertex Data, Vertex Groups, and Nearest Face Interpolated*.

*Generate Data Layers* and Apply the modifier. 

![](https://i.imgur.com/xIe0fgv.png)


Posing the armature should show that the clothing has been weight painted roughly. This is a good basis to work from, smoothing out points at bone roots, etc, and blending areas together will be necessary. 

If things look good, now is a good time to UV the clothing. 

---

### UV / Material Setup

Material count, and texture space, is at a premium for web content - simply put, we need to extract as much as possible from 2k textures, and keep total material count under target (4-5 materials).

Currently the base models are seperated into two materials as is - since the **Face** mesh is seperated from the **Body** anyway, (in turn creating it's own draw). 
Body texture and hair textures are combined into one tex. set by atlassing on base export, and the face and facial features are combined into another. 

This leaves two to three material slots left to use - with 2K textures this should be more than enough if efficiency is maintained when unwrapping objects, and UV's are packed with a strong coverage area. 

**A target of 0.7 UV coverage minimum is a good target to aim for.** 

:::tip

Plugins such as UVPackmaster may assist you with UV optimization. The plugin's packing engine is much more optimal than Blender's native one, and can use a GPU heuristic to run several passes at packing in islands. 

Combined with ZENUV / TexTools, you can push out TD uniformed UV mappings that are well optimized on space.

:::

Emphasis should be placed on efficient UVs. 
For clothing, we can divide the model up into realistic seams - sleeves, side seams etc on shirts. 

Looking at real world clothing (cloth patterns are great if you can find them!) may assist you. 

Pack down individual clothing pieces into their own materials. Do not freely assign materials to different parts of what is essentially one piece of clothing: eg - belts, jewellery, badges, pins, other accesories should be included in the material of their 'parent' object.
 
Mirroring UV's is advised if required. Consider usage of center band / mirrored side technique to avoid butterfly wing effect if needed. 

:::tip

This involves unwrapping center geometry unmirrored, but having mirrored l/r sides - eg, normal unwrap for torso, but mirroring arms, etc. More commonly used in hardsurface, but can work fine for clothing too. 

:::

It is uncertain (at present) if a secondary UV channel for will be supported a) in VRM spec or b) three-vrm. For the time being, it is advised to break texel density uniformity *if required* for items like icon badges, logos, etc.

We can overcome the need for extensive material usage by being smart with roughness/metallic maps, as well as doing some minor lighting bakes for detail, etc. 

:::tip

In programs like Substance Painter, we can reference layers for roughness patterns etc (via anchor points) and translate them to diffuse information.

 Triangulation via **Modifier** is a good idea for consistent texture work and exporting in general. You do *not* have to apply it, as on FBX export, it will apply it then (non-destructive!)

:::

 ---

### Masking

As a non destructive optimization, as well as improving the visuals of the weight painting, we can remove unseen, underlying geometry via use of the **Mask** modifier. 

The **Mask** modifier hides geometry from a specified Vertex Group. 
In Blender itself, it is non-destructive, but on FBX exports, it will fully remove the geometry, so we can use that to our advantage. 
We can come back to our base model and change outfits, add new variants, etc, without having to recreate the body or fix geometry - just change the Mask modifier's Vertex Group instead.


Select all of the geometry that should be 'removed' (hidden), and add it to a new Vertex Group (eg. Mask Group). 

![](https://i.imgur.com/0yYTtxD.png)

Then, add the **Mask** Modifier to the Body mesh. Assign the correct vertex group, and press the invert <-> button - it will make it so that the vertex group is what is hidden, not the other way round. 

![](https://i.imgur.com/WqpHXgV.png)

It should then reflect that your vertex group is hidden!

![](https://i.imgur.com/ZrTWiTv.png)

---

### Materials

! > `The currently used software for texturing is Substance Painter, so the workflow below is written in assumption that that is the tool used.`

---
 
#### Texture Exporting

Use Substance's GLTF PBR Metal Roughness preset. 
This will output textures in the correct gltf/glb format - base color, a packed ORM (RGB) map, and an emissive texture. 

This will also automatically output a GLB in the export destination (!), which is perfect for testing in model viewers / in-app. It can also be imported back into Blender to copy over the material setup which *does* export correctly. 


Careful usage of padding options is advised. Using the infinite dilation effect will increase filesizes. I advise using Dilation + Diffusion so we have some padding for mipmapping. 

![](https://i.imgur.com/0GQEv6J.png)

---

#### Blender Material Setup

Import your GLTF(s) from the Substance Export from earlier. 
This will have the materials setup already for you, which you can then copy over to the main model in the Material tab. 

It will effectively add a material with the existing name + .001 as a suffix, so select this in place of the original material. (eg. JUN_Body > JUN_Body.001)

By default, the import is slightly incorrect - it will Backface Cull, be set to Alpha Blend, and Show Backface by default. 

This should be changed to Disable backface cull, Disable Show Backface, and set the Blend Mode to either Opaque for Solid objects, or Alpha Clip for cutouts: 

![](https://i.imgur.com/UPI7mLU.png)  

This setup should ensure that the materials are referencing textures in the export location. 

This means that new texture exports, if exported to the same location as an overwrite, can be reloaded in the Shading panel. 

Effectively, this means you can keep Substance open while you made any required changes, and reload the relevant image textures to reflect the changes, without having to restructure the material setups.

 To do this, you can go to the relevant material in the Shading tab, press A to select all nodes, and press **Alt + R** to reload. If successful, the following should appear at the bottom of the screen to reflect that images have been reloaded (and the visuals should update): 

![](https://i.imgur.com/ENEfdev.png)

**Remove the emissive channel from the node setup if there is no emissive texture!** 

In-app, an empty emissive node will cause the entire material to be emissive white by default. 


Once the texturing is complete, the textures should be packed into the .blend file for portability. 

This is a simple, one click process: 

![](https://i.imgur.com/D191gJ1.png)

---

#### Toon Preview

We can do a rough preview of the current material setup *without changing nodes* in a toon view using a different method of Viewport Shading. 

If the content is going to be displayed in a toon shader, it is advisable to check this, since it is simple to do. 

Each material should have it's base color texture selected in the Shading window, or the model will display whichever texture is selected, or a solid black color. The currently selected node will have a white outline:

![](https://i.imgur.com/RlLf5D7.png)

Once this is done, we can move back to the regular viewport and enable the below settings: 

(Solid View, Flat, Texture, Backface Culling on, Enable Shadow with shift @ 23deg. and Focus of 1. Move sphere as desired.)


![](https://i.imgur.com/HxprAJL.png)

---

## Exporting FBX Model

You should hide everything in your viewport you do not want to export! (props not for the avatar, default cube, etc!)

What should remain in your scene is the avatar mesh(es), and the armature.

Make sure your meshes that have shapekeys / blendshapes (interchangable term betweem Blender/Unity respectively) have their Basis key selected. 

Once that's set, you should press A in the viewport to Select All. 

Your scene will look something like this - avatar mesh, and armature: ![](https://i.imgur.com/Wo5yzHK.png)

:::tip

You should also pack your textures into your .blend! This will increase filesize of the .blend file, but it will mean your textures are stored within it, so you won't be missing them later - and they should export with your model later if you follow the instructions here.

:::

![](https://i.imgur.com/dLWuSTM.png)


With those selected, we're ready to export this avatar. 

Go to File > Export, and select FBX.

![](https://i.imgur.com/cIgoMIx.png)


We need to set a few settings here to ensure our export work properly.

On the right side, there is a menu. (You should use the settings below.)

Ensure Path mode is set to Copy, and the file icon next to it is blue. This will ensure your textures are packed into the model!

Limit to: Selected Objects.

Object Types: Empty, Armature, Mesh, Other.

Ensure that Add Leaf Bones is *not* checked! This simply adds uneccesary bones at the end of bone chains - we don't need them here.

:::tip

If you select the Plus symbol + at the top, next to Operator Presets, you'll be able to save these settings for later! I recommend this if you're going to do this more than once!

:::

Avatar Export Preset Operator:
![](https://i.imgur.com/QzCVCFU.png)

You should select a folder to export to you'll be able to access easily later. You can copy the folder path at the top during export!

---

## VRM

### Unity Project Setup

We need to get our Unity project ready.

Open Unity Hub and go to the Projects tab. We’ll be making a new one using the most up to date version of Unity that uniVRM is fully compatible with (at time of writing, 2019.4 LTS).

Click the arrow next to NEW, and pick the correct version.
![](https://i.imgur.com/5fxzd1b.png)
![](https://i.imgur.com/DXl96oD.png)

This will open a dialog box for you to name your project, and select a folder for it to be saved in.

![](https://i.imgur.com/fcIXNpi.png)


You’ll be greeted with the Unity Editor. This is an entirely blank project at this point, and we need to import a few things.

---

### Unity breakdown
If you’re not familiar with Unity, here is a quick rundown on each section of the editor:

![](https://i.imgur.com/3Ki95ov.png)

1) The Heirarchy. This is the heirarchy for objects in the Scene, much like how Blender works!

2) The Asset / Project window - this is where everything in terms of raw files will live inside your currently open project! This includes models you’ve imported, textures, etc.

:::tip

I highly suggested managing this with folders and keeping organised. It'll save you headaches later trying to find different files!

:::

3) The Inspector. Details on the currently selected Heirarchy object will display here. We’ll use this area to tweak VRM specific settings later!

4) The Scene viewer. This is a viewport into what’s currently in the Heirarchy of your project, and enabled. If something’s not here and it should be, it might be in your Assets window, but not in the heirarchy!

---

#### Plugin import

Time to import the tools we need into our Project!

We’ll import the uniVRM Unity package.

You can either directly drag this into your Project’s Asset window, or you can right-click in the Assets window, and select Import Custom Package > Custom Package:

![](https://i.imgur.com/DFwMVzS.png)

Select or drag in the uniVRM package.

Select Import when this window appears!

Once complete, this tab should be added at the top: **VRM0**

---

### Importing Model

:::caution

FBX format is required for the Humanoid rigging component! Other file formats for animated VRMs will currently not work!

:::


Before importing your model, you should make a folder in your Assets window to put it in. Simply Right-click > Create > Folder.

![](https://i.imgur.com/6JFAo8y.png)

Assign a name to it, like 'Model Import', then double click and open it. 

Time to import your FBX model here!

Right click inside your new folder, select Import New Asset:
![](https://i.imgur.com/4N7eFnt.png)


Select your FBX and it'll appear in the folder!


Select your FBX again and a menu will appear in the *Inspector* on the right.

You should enable **'Read/Write Enabled'**, Tick **'Legacy Blend Shape Normals'** in the Rig submenu:

![](https://i.imgur.com/5rZOyXa.png)

Select the **Rig** submenu and select **Humanoid** from the dropdown.

![](https://i.imgur.com/f0xUuDN.png)

Press **Apply** at the bottom, or if automatically prompted, press Apply in the dialog box.

---

### Visuals

#### Material and Texture Extraction

Add two more folders in the Asset window.

One should be 'Materials', the other should be 'Textures'.

Select the FBX in the folder again, and then select the **Materials** submenu.

First, **Extract Textures**.

You should select the *Textures* folder you made earlier here.

If your model's materials have normal maps, you'll likely be greeted with a dialog box like this:

![](https://i.imgur.com/6rnoSXI.png)

This is nothing to worry about - just hit fix now! 

:::caution 

This is simply Unity making sure your normal maps are treated as normal maps, rather than sRGB textures. Do not press ignore here!

:::


Select **Extract Materials**, and select your *Materials* folder as the destination.

Finish this step by dragging your FBX model into the Heirarchy on the left.
You should see it appear in the Scene viewport in the centre.

---

#### Material Setup

Open your *Materials* folder.

Select all materials at the same time with **CTRL + A**.

In the inspector on the right, you'll see that you'll have more than one material selected.

Here you can assign a shader to all materials at the same time, so we'll do that:

![](https://i.imgur.com/TP5NAqC.png)

Click the dropdown for Shader.

For MToon, select VRM > MToon.

![](https://i.imgur.com/xux8JtZ.png)

Click the Color box next to Lit Color, Alpha.

Then move this color picker to the desired base color value. 
I highly suggest this is absolute white (#FFFFFF) if you are using textures.

:::tip

You can copy and paste hexcodes at the bottom of the color picker.

:::

![](https://i.imgur.com/f1VpgsX.png)


You can also uniformly set a shadow color. I suggested a slightly dimmer grey if you wish to do this uniformly. (#D2D2D2)


:::note

More visually appealing results may come from setting darker shades of the texture color as a shade color, but is more time consuming and difficult to get correct.

:::

If some of your materials should have transparency / alpha cutouts, etc, then those materials will need to be set as such. By default they are set as *Opaque*.

Select the desired materials by selecting them with CTRL + Click for multiple. You can then change their Rendering Type (Rendering Mode for Standard) and change it to Cutout:

![](https://i.imgur.com/iFIG8j9.png)


![](https://i.imgur.com/NPCug3B.png)


There is an Alpha Cutoff slider for Cutout materials - you can change this uniformly with multiple selected, or by individual materials.

![](https://i.imgur.com/BcnREE7.png)


You may need to change Cull Mode for certain materials, if the geometry of the model is clearly disappearing to the viewer, for example. This makes the engine 'render the back' of the model as well as the front, if set to 'Off'

Visual example with Scillia's bracelet:

![](https://i.imgur.com/SDcbi3C.png)

---

### Basic VRM Setup

Now the basic visuals are done, we can move to the adding VRM components and functionality. 

Here, we'll be adding things like the viseme controller (speech morphs), the look position, and basic metadata. 

Begin by selecting **VRM0** and Exporting a VRM. 

![](https://i.imgur.com/T7DsX5p.png)

We need to do this once before anything else to set up the necessary components. 

This window will appear - fill out the information as required. We can add a thumbnail later. 
![](https://i.imgur.com/qGYaoFv.png)

Be sure to set the licencing and usage rights correctly!

Ignore the other panels for now, and hit **Export.** 

Add a new subfolder into the Assets Folder, and save the VRM there. 
![](https://i.imgur.com/ToxO0NH.png)

This will add some folders, and a prefab of the model to that folder:

![](https://i.imgur.com/9dprhQ9.png)

Hide the original model import in the heirarchy on the left, then drag this prefab into the heirarchy on the left. 

![](https://i.imgur.com/MbZxhrQ.png)

On the right, in the Inspect, Add a Component, and search for Blinker. 

This is a script which will automatically trigger the Blink blendshape periodically. You can tweak the settings, but the defaults are usually fine. 

![](https://i.imgur.com/myl2o60.png)

Next, we can set the viewpoint offset. This is used to determine a VR viewpoint, so putting it in the middle of the eyes, in line with the irises is the best practice. 

![](https://i.imgur.com/ZVB0v36.png)

Next, we need to set up shapekeys - the VRM model will use these for expressions and speech visemes that are used in-app. 

Press **Play** at the top of the window, then double click here:
![](https://i.imgur.com/Oec5yFY.png)

This window should then display. At the top, select the expression you are assigning, then scroll the slider on the relevant shapekeys. Repeat this process for all shapekeys (LookRight/Left etc can be ignored!), then press **Play** again when you're finished!

That's all for the basics - if you're ready, have no physics to add, or want to test in engine now, you can export the VRM (skip ahead past Advanced VRM.)

---

### Advanced VRM Setup

Now we have the basics set up, we can set up some more advanced VRM components - VRM Spring Bones, and VRM Spring Bone Colliders.

These are the physics solutions in VRM - Spring Bones make bones in an armature move, and Spring Bone Colliders are spherical collision zones which repel those bones - eg. if you have a Collider on the hand bone, then when the hand comes into contact with a spring bone, it will 'push' it. 

This is good for rebounding physics bones - for example a skirt should not clip through the legs, so a collider could be added to the legs, and repel the skirt bones. 

---

### Exporting

| ![](/img/vrm-export3.png) |
| :--: |
| <b>An example of what a finished model might look like while play mode is active in Unity</b> |

If you miss anything or don't set up your avatar correctly don’t fret, you can do your final export multiple times for different versions as long as you still have your Unity project.

![](/img/vrm-export2.png)

Select your properly set up model and click on the “Export to VRM” option from the VRM0 tab. The VRM Exporter window should open and have your models information populated. If not, select the proper ExportRoot object.

Now is the time to double check and fill out any boxes you might have missed. Title, Version, and Author are not optional. It's also recommended to assign a screenshot as well. You can take one using the in-scene camera, or use your own image.

| ![](/img/vrm-export1.png) |
| :--: |
| <b>Highly recommended settings are in red, optional settings are in blue.</b> |

Before you click Export, go to the ExportSettings tab in the VRM Exporter window. For Webaverse we strongly suggest using “Reduce Blendshape”, and “Reduce Blendshape Clip” export settings. These will remove any unused blendshapes from the VRM file and can dramatically reduce file size. You can safely enable “Only Blendshape Position” and “Divide Vertex Buffer” If the warnings do not apply to your avatar. These options do not affect Webaverse.

**If you enable “Use Sparse Accessor'' it will cause errors. Do not enable this option if you intend to use your avatar for Webaverse.**

At this time you are ready to Export your model!

![](/img/vrm-export4.png)

Navigate to a location outside of Unity, and save your VRM to a more permanent location on your computer.

Presto! You have successfully converted and saved your avatar as a VRM. This final VRM that you just exported is what you will use in Webaverse.

#### Alternate Methods

[Converting an FBX Avatar to VRM](https://hackmd.io/@metamike/fbx-vrm-webaverse#Oveview)

---

### Testing in Webaverse

---

### TL;DR and Recap


* Performance Guidelines

* Follow the styleguide.

* Lock in a solid concept in 2D

* Consider usage of a production basemesh or other base for consistency and speed to iterate. 

* Start low poly and add details only when necessary. 

* Test weight painting early

* Aim for 0.7 minimum UV coverage.

* Physics bones require empty / leaf bones added to the end of their chain. 

