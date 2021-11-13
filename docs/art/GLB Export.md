---
id: glb-export
title: GLB Export
---
# GLB Export 

## Basic GLB Export 

### Requirements 
* one uv map 
* one material 
* make sure to have a principled bsdf material setup 
  * diffuse texture should be connected to color input and colorspace set to srgb 
  * occlusion/metalness/roughness texture should have a "seperate rgb"" attached to it and each R G B channel should be connected to the appropriate metalness , roughness inputs as well as a gltf occlusion node that would be appended from a seperate blend file. colorspace should be set to non color
  * normal map texture should connect to a normal map node and then to the normal input of the principled bsdf shader. colorspace is set to non-color
* optimized mesh 
* any animations you wish to include with the model should be pushed down to the nla editor as strips 

### Step by Step  
* select object 
* go to File
* select Export
* select GLTF 2.0 (.glb/.gltf)
* choose remember settings 
* input appropriate setting in the right hand settings panel also accessed via the gear icon
* choose appropriate filename 
* click export


### GLTF Settings
In the gltf export menu to the right there are several tabs to go through and set options on
* Include 
  * selected objects 
* Transform
  * +Yup
* Geometry
  * Apply Modifiers
  * Uv's
  * Normals
  * Materials - Export
  * Images - Jpeg Format (set this to automatic if you wish to retain your iamges as png)
  * Compression - enable if draco compression is supported 
* Animation 
  * you can leave these as they if you have animations to export 
  * you can disable these if you are exporting a static asset

